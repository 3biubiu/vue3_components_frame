import * as index$1 from "./src/index.mjs";
import { Button } from "./src/button/index.mjs";
const tcomponents = index$1;
const index = {
  install: (app) => {
    for (let c in tcomponents) {
      app.use(tcomponents[c]);
    }
  }
};
export {
  Button,
  index as default
};
