export function render(ctx, canvas) {
  ctx.beginPath();

  ctx.moveTo(200, 100);
  ctx.lineTo(300, 100);
  ctx.lineTo(300, 200);
  ctx.lineTo(200, 200);

  ctx.closePath();
  ctx.fill();
}
