import { toRadian } from "./helpers.js";
const colors = ["lightgray", "lightgray", "lightgray", "#11AA7C"];

export function render(ctx, canvas) {
  ctx.fillStyle = "gray";

  ctx.beginPath();

  ctx.moveTo(200, 100);
  ctx.lineTo(300, 100);
  ctx.lineTo(300, 200);
  ctx.lineTo(200, 200);

  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = colors[0];
  ctx.beginPath();

  ctx.moveTo(200, 100);
  ctx.arc(200, 100, 20, 0, toRadian(360), false);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = colors[1];
  ctx.beginPath();

  ctx.moveTo(300, 100);
  ctx.arc(300, 100, 20, 0, toRadian(360), false);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = colors[2];
  ctx.beginPath();

  ctx.moveTo(300, 200);
  ctx.arc(300, 200, 20, 0, toRadian(360), false);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = colors[3];
  ctx.beginPath();

  ctx.moveTo(200, 200);
  ctx.arc(200, 200, 20, 0, toRadian(360), false);
  ctx.closePath();
  ctx.fill();
}
