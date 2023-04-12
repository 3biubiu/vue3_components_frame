import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from "vue";
import "./style/index.less.mjs";
const __default__ = defineComponent({ name: "biu-button" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    type: null
  },
  setup(__props) {
    const buttonProps = __props;
    const buttonStyle = computed(() => {
      return { [`biu-button-${buttonProps.type}`]: buttonProps.type };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["biu-button", unref(buttonStyle)])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
