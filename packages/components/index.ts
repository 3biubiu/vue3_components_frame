type tplotOptions = {
    [key: string]: Plugin
}
import * as components from "./src/index";
export * from "./src/index";
import { App,Plugin } from "vue";
const tcomponents:tplotOptions = components
export default {
  install: (app: App) => {
    for (let c in tcomponents) {
      app.use(tcomponents[c]);
    }
  },
};
