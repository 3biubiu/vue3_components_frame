"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const index$2 = require("./src/index.js");
const index$1 = require("./src/button/index.js");
const tcomponents = index$2;
const index = {
  install: (app) => {
    for (let c in tcomponents) {
      app.use(tcomponents[c]);
    }
  }
};
exports.Button = index$1.Button;
exports.default = index;
