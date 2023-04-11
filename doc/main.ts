import { createApp } from "vue";
import App from "./app.vue";
import frame from "@frame/components"
const app = createApp(App);
app.use(frame)
app.mount("#app");