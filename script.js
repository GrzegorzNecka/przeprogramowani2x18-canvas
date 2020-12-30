//import { render } from "./shape.js";
import { render } from "./dots.js";

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
render(ctx, canvas);
