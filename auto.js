const exec = require('child_process').execSync;

const disX = 250, disY = 300, num = 3, py = 150;

// 位置1
const originX = 303, originY = 814;

// 触发位置
const touchPoints = [[663, 1752], [820, 1700], [972, 1630]]

setInterval(() => {
  for(let i = 0; i < num; i++) {
    for(let j = 0; j < num; j++) {
      let targetY = originY + (j * disY);
      for(let z = 0; z < num; z++) {
        const targetX = originX + (z * disX);
        targetY = targetY - (z * py);
        exec(`adb shell input swipe ${touchPoints[i][0]} ${touchPoints[i][1]} ${targetX} ${targetY}`);
        exec(`sleep 0.01`);
      }
    }
  }
}, 1000)

// 开始点击位置
// for(let i = 0; i < num; i++) {
//   exec(`adb shell sendevent /dev/input/event0 3 0 ${touchPoints[i][0]}`);
//   exec(`adb shell sendevent /dev/input/event0 3 1 ${touchPoints[i][1]}`);
//   exec(`adb shell sendevent /dev/input/event0 1 330 1`);
//   exec(`adb shell sendevent /dev/input/event0 0 0 0`);
//   for(let j = 0; j < num; j++) {
//     let targetY = originY + (j * disY);
//     for(let z = 0; z < num; z++) {
//       const targetX = originX + (z * disX);
//       targetY = targetY - (z * py);
//       exec(`adb shell sendevent /dev/input/event0 3 0 ${targetX}`);
//       exec(`adb shell sendevent /dev/input/event0 0 0 0`);
//       exec(`adb shell sendevent /dev/input/event0 3 1 ${targetY}`);
//       exec(`adb shell sendevent /dev/input/event0 0 0 0`);
//     }
//   }
//   exec(`adb shell sendevent /dev/input/event0 1 330 0`);
//   exec(`adb shell sendevent /dev/input/event0 0 0 0`);
// }
