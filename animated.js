import { toRadian } from "./helpers.js";
//import { changeValue } from "./transform.js";

let colors = [
  ["#586F7C", "#586F7C", "#586F7C", "#FF5964"],
  ["#FF5964", "#586F7C", "#586F7C", "#586F7C"],
  ["#586F7C", "#FF5964", "#586F7C", "#586F7C"],
  ["#586F7C", "#586F7C", "#FF5964", "#586F7C"]
];

let count = 0;
let counter = 0;
let t = -1;

function blinkForIndex(index) {
  return counter === index ? "#11AA7C" : "lightgray";
}

function renderShape(ctx) {
  window.requestAnimationFrame(() => {
    renderShape(ctx);
  });

  count += 0.5;
  counter = Math.floor(count) % 4;

  t = changeValue(t);

  const x1 = 200 - t;
  const y1 = 150 + t;
}

//nie skończyłem tego

