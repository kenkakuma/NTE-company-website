import { createVNode, normalizeStyle, normalizeClass } from 'vue';
import { j as useDimension, r as makeDimensionProps } from './VRow-DO-Unv4W.mjs';
import { b as useRender, m as makeTagProps, c as makeComponentProps } from './VIcon-BPJNs7N2.mjs';
import { q as genericComponent, p as propsFactory, y as useRtl } from './server.mjs';

const makeVContainerProps = propsFactory({
  fluid: {
    type: Boolean,
    default: false
  },
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps()
}, "VContainer");
const VContainer = genericComponent()({
  name: "VContainer",
  props: makeVContainerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      rtlClasses
    } = useRtl();
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-container", {
        "v-container--fluid": props.fluid
      }, rtlClasses.value, props.class]),
      "style": normalizeStyle([dimensionStyles.value, props.style])
    }, slots));
    return {};
  }
});

export { VContainer as V };
//# sourceMappingURL=VContainer-UkpXLacN.mjs.map
