import { defineComponent, ref, computed, watch, mergeProps, withCtx, createTextVNode, createVNode, createSlots, createBlock, openBlock, Fragment, renderList, toDisplayString, withDirectives, vShow, createCommentVNode, unref, isRef, createElementVNode, cloneVNode, normalizeClass, shallowRef, toRef, toRefs, normalizeStyle, watchEffect, vModelText, readonly, useId, provide, inject, nextTick, onScopeDispose, capitalize, markRaw, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { V as VAppBar, a as VToolbarTitle, b as VSpacer, c as VAppBarNavIcon, d as VNavigationDrawer, e as VAvatar, f as VDivider, g as VList, h as VListItem, i as VListSubheader, j as VMain, k as VDialog, l as VCard, m as VCardTitle, n as VCardText, o as VCardActions, p as VSnackbar, q as makeTransitionProps$1, r as VChip, I as Intersect, s as forwardRefs, u as useItems, t as VMenu, v as useScopeId, w as VSlideGroup, x as useSsrBoot, y as useLazy, M as MaybeTransition, z as nullifyTransforms, A as animate, B as VExpandXTransition, C as VDialogTransition, D as makeVSlideGroupProps, E as makeLazyProps, F as VSlideYTransition, G as makeItemsProps, H as createSimpleFunctional, J as standardEasing } from './VNavigationDrawer-DJMIQFcP.mjs';
import { V as VIcon, u as useBackgroundColor, a as useTextColor, b as useRender, m as makeTagProps, c as makeComponentProps, d as makeSizeProps } from './VIcon-BPJNs7N2.mjs';
import { u as useHead, q as genericComponent, p as propsFactory, O as useLocale, s as useTheme, v as makeThemeProps, I as IconValue, C as useProxiedModel, T as filterInputAttrs, E as wrapInArray, D as deepEqual, $ as camelizeProps, a0 as ensureValidVNode, B as provideDefaults, o as convertToUnit, A as provideTheme, y as useRtl, a7 as humanReadableFileSize, l as getCurrentInstanceName, W as callEvent, V as omit, a1 as checkPrintable, U as matchesSelector, g as getCurrentInstance, X as useToggleScope, P as useDisplay, F as consoleWarn, H as clamp, K as isObject, a8 as keys, S as EventProp, Y as pick, Z as debounce, _ as getPropertyFromItem, a4 as getObjectValueByPath, a5 as isEmpty, Q as createRange, a6 as makeDisplayProps, a2 as defineFunctionalComponent, N as isOn, R as keyValues, a3 as consoleError, a9 as pickWithRest } from './server.mjs';
import { V as VBtn, u as useRounded, c as useLocation, m as makeRoundedProps, d as makeLocationProps, a as VRow, b as VCol, e as VProgressCircular, f as VDefaultsProvider, g as useDensity, h as useGroup, i as useGroupItem, j as useDimension, k as useLoader, L as LoaderSlot, l as VProgressLinear, n as makeDensityProps, o as makeVBtnProps, p as makeGroupItemProps, q as makeLoaderProps, r as makeDimensionProps, s as useResizeObserver, R as Ripple, t as useVariant, v as useElevation, w as usePosition, x as genOverlays, y as makeVariantProps, z as makeElevationProps, A as makeBorderProps, B as makePositionProps } from './VRow-DO-Unv4W.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

function getPrefixedEventHandlers(attrs, suffix, getData) {
  return Object.keys(attrs).filter((key) => isOn(key) && key.endsWith(suffix)).reduce((acc, key) => {
    acc[key.slice(0, -suffix.length)] = (event) => attrs[key](event, getData(event));
    return acc;
  }, {});
}
function useRefs() {
  const refs = ref([]);
  function updateRef(e, i) {
    refs.value[i] = e;
  }
  return {
    refs,
    updateRef
  };
}
const makeVPaginationProps = propsFactory({
  activeColor: String,
  start: {
    type: [Number, String],
    default: 1
  },
  modelValue: {
    type: Number,
    default: (props) => props.start
  },
  disabled: Boolean,
  length: {
    type: [Number, String],
    default: 1,
    validator: (val) => val % 1 === 0
  },
  totalVisible: [Number, String],
  firstIcon: {
    type: IconValue,
    default: "$first"
  },
  prevIcon: {
    type: IconValue,
    default: "$prev"
  },
  nextIcon: {
    type: IconValue,
    default: "$next"
  },
  lastIcon: {
    type: IconValue,
    default: "$last"
  },
  ariaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.root"
  },
  pageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.page"
  },
  currentPageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.currentPage"
  },
  firstAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.first"
  },
  previousAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.previous"
  },
  nextAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.next"
  },
  lastAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.last"
  },
  ellipsis: {
    type: String,
    default: "..."
  },
  showFirstLastPage: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "nav"
  }),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "text"
  })
}, "VPagination");
const VPagination = genericComponent()({
  name: "VPagination",
  props: makeVPaginationProps(),
  emits: {
    "update:modelValue": (value) => true,
    first: (value) => true,
    prev: (value) => true,
    next: (value) => true,
    last: (value) => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const page = useProxiedModel(props, "modelValue");
    const {
      t,
      n
    } = useLocale();
    const {
      isRtl
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      width
    } = useDisplay();
    const maxButtons = shallowRef(-1);
    provideDefaults(void 0, {
      scoped: true
    });
    const {
      resizeRef
    } = useResizeObserver();
    const length = computed(() => parseInt(props.length, 10));
    const start = computed(() => parseInt(props.start, 10));
    const totalVisible = computed(() => {
      if (props.totalVisible != null) return parseInt(props.totalVisible, 10);
      else if (maxButtons.value >= 0) return maxButtons.value;
      return getMax(width.value, 58);
    });
    function getMax(totalWidth, itemWidth) {
      const minButtons = props.showFirstLastPage ? 5 : 3;
      return Math.max(0, Math.floor(
        // Round to two decimal places to avoid floating point errors
        Number(((totalWidth - itemWidth * minButtons) / itemWidth).toFixed(2))
      ));
    }
    const range = computed(() => {
      if (length.value <= 0 || isNaN(length.value) || length.value > Number.MAX_SAFE_INTEGER) return [];
      if (totalVisible.value <= 0) return [];
      else if (totalVisible.value === 1) return [page.value];
      if (length.value <= totalVisible.value) {
        return createRange(length.value, start.value);
      }
      const even = totalVisible.value % 2 === 0;
      const middle = even ? totalVisible.value / 2 : Math.floor(totalVisible.value / 2);
      const left = even ? middle : middle + 1;
      const right = length.value - middle;
      if (left - page.value >= 0) {
        return [...createRange(Math.max(1, totalVisible.value - 1), start.value), props.ellipsis, length.value];
      } else if (page.value - right >= (even ? 1 : 0)) {
        const rangeLength = totalVisible.value - 1;
        const rangeStart = length.value - rangeLength + start.value;
        return [start.value, props.ellipsis, ...createRange(rangeLength, rangeStart)];
      } else {
        const rangeLength = Math.max(1, totalVisible.value - 2);
        const rangeStart = rangeLength === 1 ? page.value : page.value - Math.ceil(rangeLength / 2) + start.value;
        return [start.value, props.ellipsis, ...createRange(rangeLength, rangeStart), props.ellipsis, length.value];
      }
    });
    function setValue(e, value, event) {
      e.preventDefault();
      page.value = value;
      event && emit(event, value);
    }
    const {
      refs,
      updateRef
    } = useRefs();
    provideDefaults({
      VPaginationBtn: {
        color: toRef(() => props.color),
        border: toRef(() => props.border),
        density: toRef(() => props.density),
        size: toRef(() => props.size),
        variant: toRef(() => props.variant),
        rounded: toRef(() => props.rounded),
        elevation: toRef(() => props.elevation)
      }
    });
    const items = computed(() => {
      return range.value.map((item, index2) => {
        const ref2 = (e) => updateRef(e, index2);
        if (typeof item === "string") {
          return {
            isActive: false,
            key: `ellipsis-${index2}`,
            page: item,
            props: {
              ref: ref2,
              ellipsis: true,
              icon: true,
              disabled: true
            }
          };
        } else {
          const isActive = item === page.value;
          return {
            isActive,
            key: item,
            page: n(item),
            props: {
              ref: ref2,
              ellipsis: false,
              icon: true,
              disabled: !!props.disabled || Number(props.length) < 2,
              color: isActive ? props.activeColor : props.color,
              "aria-current": isActive,
              "aria-label": t(isActive ? props.currentPageAriaLabel : props.pageAriaLabel, item),
              onClick: (e) => setValue(e, item)
            }
          };
        }
      });
    });
    const controls = computed(() => {
      const prevDisabled = !!props.disabled || page.value <= start.value;
      const nextDisabled = !!props.disabled || page.value >= start.value + length.value - 1;
      return {
        first: props.showFirstLastPage ? {
          icon: isRtl.value ? props.lastIcon : props.firstIcon,
          onClick: (e) => setValue(e, start.value, "first"),
          disabled: prevDisabled,
          "aria-label": t(props.firstAriaLabel),
          "aria-disabled": prevDisabled
        } : void 0,
        prev: {
          icon: isRtl.value ? props.nextIcon : props.prevIcon,
          onClick: (e) => setValue(e, page.value - 1, "prev"),
          disabled: prevDisabled,
          "aria-label": t(props.previousAriaLabel),
          "aria-disabled": prevDisabled
        },
        next: {
          icon: isRtl.value ? props.prevIcon : props.nextIcon,
          onClick: (e) => setValue(e, page.value + 1, "next"),
          disabled: nextDisabled,
          "aria-label": t(props.nextAriaLabel),
          "aria-disabled": nextDisabled
        },
        last: props.showFirstLastPage ? {
          icon: isRtl.value ? props.firstIcon : props.lastIcon,
          onClick: (e) => setValue(e, start.value + length.value - 1, "last"),
          disabled: nextDisabled,
          "aria-label": t(props.lastAriaLabel),
          "aria-disabled": nextDisabled
        } : void 0
      };
    });
    function updateFocus() {
      var _a;
      const currentIndex = page.value - start.value;
      (_a = refs.value[currentIndex]) == null ? void 0 : _a.$el.focus();
    }
    function onKeydown(e) {
      if (e.key === keyValues.left && !props.disabled && page.value > Number(props.start)) {
        page.value = page.value - 1;
        nextTick(updateFocus);
      } else if (e.key === keyValues.right && !props.disabled && page.value < start.value + length.value - 1) {
        page.value = page.value + 1;
        nextTick(updateFocus);
      }
    }
    useRender(() => createVNode(props.tag, {
      "ref": resizeRef,
      "class": normalizeClass(["v-pagination", themeClasses.value, props.class]),
      "style": normalizeStyle(props.style),
      "role": "navigation",
      "aria-label": t(props.ariaLabel),
      "onKeydown": onKeydown,
      "data-test": "v-pagination-root"
    }, {
      default: () => [createElementVNode("ul", {
        "class": "v-pagination__list"
      }, [props.showFirstLastPage && createElementVNode("li", {
        "key": "first",
        "class": "v-pagination__first",
        "data-test": "v-pagination-first"
      }, [slots.first ? slots.first(controls.value.first) : createVNode(VBtn, mergeProps({
        "_as": "VPaginationBtn"
      }, controls.value.first), null)]), createElementVNode("li", {
        "key": "prev",
        "class": "v-pagination__prev",
        "data-test": "v-pagination-prev"
      }, [slots.prev ? slots.prev(controls.value.prev) : createVNode(VBtn, mergeProps({
        "_as": "VPaginationBtn"
      }, controls.value.prev), null)]), items.value.map((item, index2) => createElementVNode("li", {
        "key": item.key,
        "class": normalizeClass(["v-pagination__item", {
          "v-pagination__item--is-active": item.isActive
        }]),
        "data-test": "v-pagination-item"
      }, [slots.item ? slots.item(item) : createVNode(VBtn, mergeProps({
        "_as": "VPaginationBtn"
      }, item.props), {
        default: () => [item.page]
      })])), createElementVNode("li", {
        "key": "next",
        "class": "v-pagination__next",
        "data-test": "v-pagination-next"
      }, [slots.next ? slots.next(controls.value.next) : createVNode(VBtn, mergeProps({
        "_as": "VPaginationBtn"
      }, controls.value.next), null)]), props.showFirstLastPage && createElementVNode("li", {
        "key": "last",
        "class": "v-pagination__last",
        "data-test": "v-pagination-last"
      }, [slots.last ? slots.last(controls.value.last) : createVNode(VBtn, mergeProps({
        "_as": "VPaginationBtn"
      }, controls.value.last), null)])])]
    }));
    return {};
  }
});
const makeVLabelProps = propsFactory({
  text: String,
  onClick: EventProp(),
  ...makeComponentProps(),
  ...makeThemeProps()
}, "VLabel");
const VLabel = genericComponent()({
  name: "VLabel",
  props: makeVLabelProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _a;
      return createElementVNode("label", {
        "class": normalizeClass(["v-label", {
          "v-label--clickable": !!props.onClick
        }, props.class]),
        "style": normalizeStyle(props.style),
        "onClick": props.onClick
      }, [props.text, (_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});
const VSelectionControlGroupSymbol = Symbol.for("vuetify:selection-control-group");
const makeSelectionControlGroupProps = propsFactory({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: IconValue,
  trueIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: {
    type: Boolean,
    default: null
  },
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: deepEqual
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeThemeProps()
}, "SelectionControlGroup");
const makeVSelectionControlGroupProps = propsFactory({
  ...makeSelectionControlGroupProps({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup");
genericComponent()({
  name: "VSelectionControlGroup",
  props: makeVSelectionControlGroupProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const modelValue = useProxiedModel(props, "modelValue");
    const uid = useId();
    const id = toRef(() => props.id || `v-selection-control-group-${uid}`);
    const name = toRef(() => props.name || id.value);
    const updateHandlers = /* @__PURE__ */ new Set();
    provide(VSelectionControlGroupSymbol, {
      modelValue,
      forceUpdate: () => {
        updateHandlers.forEach((fn) => fn());
      },
      onForceUpdate: (cb) => {
        updateHandlers.add(cb);
        onScopeDispose(() => {
          updateHandlers.delete(cb);
        });
      }
    });
    provideDefaults({
      [props.defaultsTarget]: {
        color: toRef(() => props.color),
        disabled: toRef(() => props.disabled),
        density: toRef(() => props.density),
        error: toRef(() => props.error),
        inline: toRef(() => props.inline),
        modelValue,
        multiple: toRef(() => !!props.multiple || props.multiple == null && Array.isArray(modelValue.value)),
        name,
        falseIcon: toRef(() => props.falseIcon),
        trueIcon: toRef(() => props.trueIcon),
        readonly: toRef(() => props.readonly),
        ripple: toRef(() => props.ripple),
        type: toRef(() => props.type),
        valueComparator: toRef(() => props.valueComparator)
      }
    });
    useRender(() => {
      var _a;
      return createElementVNode("div", {
        "class": normalizeClass(["v-selection-control-group", {
          "v-selection-control-group--inline": props.inline
        }, props.class]),
        "style": normalizeStyle(props.style),
        "role": props.type === "radio" ? "radiogroup" : void 0
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});
const makeVSelectionControlProps = propsFactory({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...makeComponentProps(),
  ...makeSelectionControlGroupProps()
}, "VSelectionControl");
function useSelectionControl(props) {
  const group = inject(VSelectionControlGroupSymbol, void 0);
  const {
    densityClasses
  } = useDensity(props);
  const modelValue = useProxiedModel(props, "modelValue");
  const trueValue = computed(() => props.trueValue !== void 0 ? props.trueValue : props.value !== void 0 ? props.value : true);
  const falseValue = computed(() => props.falseValue !== void 0 ? props.falseValue : false);
  const isMultiple = computed(() => !!props.multiple || props.multiple == null && Array.isArray(modelValue.value));
  const model = computed({
    get() {
      const val = group ? group.modelValue.value : modelValue.value;
      return isMultiple.value ? wrapInArray(val).some((v) => props.valueComparator(v, trueValue.value)) : props.valueComparator(val, trueValue.value);
    },
    set(val) {
      if (props.readonly) return;
      const currentValue = val ? trueValue.value : falseValue.value;
      let newVal = currentValue;
      if (isMultiple.value) {
        newVal = val ? [...wrapInArray(modelValue.value), currentValue] : wrapInArray(modelValue.value).filter((item) => !props.valueComparator(item, trueValue.value));
      }
      if (group) {
        group.modelValue.value = newVal;
      } else {
        modelValue.value = newVal;
      }
    }
  });
  const {
    textColorClasses,
    textColorStyles
  } = useTextColor(() => {
    if (props.error || props.disabled) return void 0;
    return model.value ? props.color : props.baseColor;
  });
  const {
    backgroundColorClasses,
    backgroundColorStyles
  } = useBackgroundColor(() => {
    return model.value && !props.error && !props.disabled ? props.color : props.baseColor;
  });
  const icon = computed(() => model.value ? props.trueIcon : props.falseIcon);
  return {
    group,
    densityClasses,
    trueValue,
    falseValue,
    model,
    textColorClasses,
    textColorStyles,
    backgroundColorClasses,
    backgroundColorStyles,
    icon
  };
}
const VSelectionControl = genericComponent()({
  name: "VSelectionControl",
  directives: {
    vRipple: Ripple
  },
  inheritAttrs: false,
  props: makeVSelectionControlProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      group,
      densityClasses,
      icon,
      model,
      textColorClasses,
      textColorStyles,
      backgroundColorClasses,
      backgroundColorStyles,
      trueValue
    } = useSelectionControl(props);
    const uid = useId();
    const isFocused = shallowRef(false);
    const isFocusVisible = shallowRef(false);
    const input = ref();
    const id = toRef(() => props.id || `input-${uid}`);
    const isInteractive = toRef(() => !props.disabled && !props.readonly);
    group == null ? void 0 : group.onForceUpdate(() => {
      if (input.value) {
        input.value.checked = model.value;
      }
    });
    function onFocus(e) {
      if (!isInteractive.value) return;
      isFocused.value = true;
      if (matchesSelector(e.target) !== false) {
        isFocusVisible.value = true;
      }
    }
    function onBlur() {
      isFocused.value = false;
      isFocusVisible.value = false;
    }
    function onClickLabel(e) {
      e.stopPropagation();
    }
    function onInput(e) {
      if (!isInteractive.value) {
        if (input.value) {
          input.value.checked = model.value;
        }
        return;
      }
      if (props.readonly && group) {
        nextTick(() => group.forceUpdate());
      }
      model.value = e.target.checked;
    }
    useRender(() => {
      var _a2;
      var _a, _b;
      const label = slots.label ? slots.label({
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const inputNode = createElementVNode("input", mergeProps({
        "ref": input,
        "checked": model.value,
        "disabled": !!props.disabled,
        "id": id.value,
        "onBlur": onBlur,
        "onFocus": onFocus,
        "onInput": onInput,
        "aria-disabled": !!props.disabled,
        "aria-label": props.label,
        "type": props.type,
        "value": trueValue.value,
        "name": props.name,
        "aria-checked": props.type === "checkbox" ? model.value : void 0
      }, inputAttrs), null);
      return createElementVNode("div", mergeProps({
        "class": ["v-selection-control", {
          "v-selection-control--dirty": model.value,
          "v-selection-control--disabled": props.disabled,
          "v-selection-control--error": props.error,
          "v-selection-control--focused": isFocused.value,
          "v-selection-control--focus-visible": isFocusVisible.value,
          "v-selection-control--inline": props.inline
        }, densityClasses.value, props.class]
      }, rootAttrs, {
        "style": props.style
      }), [createElementVNode("div", {
        "class": normalizeClass(["v-selection-control__wrapper", textColorClasses.value]),
        "style": normalizeStyle(textColorStyles.value)
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots, {
        backgroundColorClasses,
        backgroundColorStyles
      }), withDirectives(createElementVNode("div", {
        "class": normalizeClass(["v-selection-control__input"])
      }, [(_a2 = (_b = slots.input) == null ? void 0 : _b.call(slots, {
        model,
        textColorClasses,
        textColorStyles,
        backgroundColorClasses,
        backgroundColorStyles,
        inputNode,
        icon: icon.value,
        props: {
          onFocus,
          onBlur,
          id: id.value
        }
      })) != null ? _a2 : createElementVNode(Fragment, null, [icon.value && createVNode(VIcon, {
        "key": "icon",
        "icon": icon.value
      }, null), inputNode])]), [[Ripple, props.ripple && [!props.disabled && !props.readonly, null, ["center", "circle"]]]])]), label && createVNode(VLabel, {
        "for": id.value,
        "onClick": onClickLabel
      }, {
        default: () => [label]
      })]);
    });
    return {
      isFocused,
      input
    };
  }
});
const makeVCheckboxBtnProps = propsFactory({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: IconValue,
    default: "$checkboxIndeterminate"
  },
  ...makeVSelectionControlProps({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn");
const VCheckboxBtn = genericComponent()({
  name: "VCheckboxBtn",
  props: makeVCheckboxBtnProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:indeterminate": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const indeterminate = useProxiedModel(props, "indeterminate");
    const model = useProxiedModel(props, "modelValue");
    function onChange(v) {
      if (indeterminate.value) {
        indeterminate.value = false;
      }
    }
    const falseIcon = toRef(() => {
      return indeterminate.value ? props.indeterminateIcon : props.falseIcon;
    });
    const trueIcon = toRef(() => {
      return indeterminate.value ? props.indeterminateIcon : props.trueIcon;
    });
    useRender(() => {
      const controlProps = omit(VSelectionControl.filterProps(props), ["modelValue"]);
      return createVNode(VSelectionControl, mergeProps(controlProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": [($event) => model.value = $event, onChange],
        "class": ["v-checkbox-btn", props.class],
        "style": props.style,
        "type": "checkbox",
        "falseIcon": falseIcon.value,
        "trueIcon": trueIcon.value,
        "aria-checked": indeterminate.value ? "mixed" : void 0
      }), slots);
    });
    return {};
  }
});
function useInputIcon(props) {
  const {
    t
  } = useLocale();
  function InputIcon(_ref) {
    var _a;
    let {
      name,
      color,
      ...attrs
    } = _ref;
    const localeKey = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[name];
    const listener = props[`onClick:${name}`];
    function onKeydown(e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
      e.stopPropagation();
      callEvent(listener, new PointerEvent("click", e));
    }
    const label = listener && localeKey ? t(`$vuetify.input.${localeKey}`, (_a = props.label) != null ? _a : "") : void 0;
    return createVNode(VIcon, mergeProps({
      "icon": props[`${name}Icon`],
      "aria-label": label,
      "onClick": listener,
      "onKeydown": onKeydown,
      "color": color
    }, attrs), null);
  }
  return {
    InputIcon
  };
}
const makeVMessagesProps = propsFactory({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...makeComponentProps(),
  ...makeTransitionProps$1({
    transition: {
      component: VSlideYTransition,
      leaveAbsolute: true,
      group: true
    }
  })
}, "VMessages");
const VMessages = genericComponent()({
  name: "VMessages",
  props: makeVMessagesProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const messages = computed(() => wrapInArray(props.messages));
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(() => props.color);
    useRender(() => createVNode(MaybeTransition, {
      "transition": props.transition,
      "tag": "div",
      "class": normalizeClass(["v-messages", textColorClasses.value, props.class]),
      "style": normalizeStyle([textColorStyles.value, props.style])
    }, {
      default: () => [props.active && messages.value.map((message, i) => createElementVNode("div", {
        "class": "v-messages__message",
        "key": `${i}-${messages.value}`
      }, [slots.message ? slots.message({
        message
      }) : message]))]
    }));
    return {};
  }
});
const makeFocusProps = propsFactory({
  focused: Boolean,
  "onUpdate:focused": EventProp()
}, "focus");
function useFocus(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const isFocused = useProxiedModel(props, "focused");
  const focusClasses = toRef(() => {
    return {
      [`${name}--focused`]: isFocused.value
    };
  });
  function focus() {
    isFocused.value = true;
  }
  function blur() {
    isFocused.value = false;
  }
  return {
    focusClasses,
    isFocused,
    focus,
    blur
  };
}
const FormKey = Symbol.for("vuetify:form");
const makeFormProps = propsFactory({
  disabled: Boolean,
  fastFail: Boolean,
  readonly: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  validateOn: {
    type: String,
    default: "input"
  }
}, "form");
function createForm(props) {
  const model = useProxiedModel(props, "modelValue");
  const isDisabled = toRef(() => props.disabled);
  const isReadonly = toRef(() => props.readonly);
  const isValidating = shallowRef(false);
  const items = ref([]);
  const errors = ref([]);
  async function validate() {
    const results = [];
    let valid = true;
    errors.value = [];
    isValidating.value = true;
    for (const item of items.value) {
      const itemErrorMessages = await item.validate();
      if (itemErrorMessages.length > 0) {
        valid = false;
        results.push({
          id: item.id,
          errorMessages: itemErrorMessages
        });
      }
      if (!valid && props.fastFail) break;
    }
    errors.value = results;
    isValidating.value = false;
    return {
      valid,
      errors: errors.value
    };
  }
  function reset() {
    items.value.forEach((item) => item.reset());
  }
  function resetValidation() {
    items.value.forEach((item) => item.resetValidation());
  }
  watch(items, () => {
    let valid = 0;
    let invalid = 0;
    const results = [];
    for (const item of items.value) {
      if (item.isValid === false) {
        invalid++;
        results.push({
          id: item.id,
          errorMessages: item.errorMessages
        });
      } else if (item.isValid === true) valid++;
    }
    errors.value = results;
    model.value = invalid > 0 ? false : valid === items.value.length ? true : null;
  }, {
    deep: true,
    flush: "post"
  });
  provide(FormKey, {
    register: (_ref) => {
      let {
        id,
        vm,
        validate: validate2,
        reset: reset2,
        resetValidation: resetValidation2
      } = _ref;
      if (items.value.some((item) => item.id === id)) {
        consoleWarn(`Duplicate input name "${id}"`);
      }
      items.value.push({
        id,
        validate: validate2,
        reset: reset2,
        resetValidation: resetValidation2,
        vm: markRaw(vm),
        isValid: null,
        errorMessages: []
      });
    },
    unregister: (id) => {
      items.value = items.value.filter((item) => {
        return item.id !== id;
      });
    },
    update: (id, isValid, errorMessages) => {
      const found = items.value.find((item) => item.id === id);
      if (!found) return;
      found.isValid = isValid;
      found.errorMessages = errorMessages;
    },
    isDisabled,
    isReadonly,
    isValidating,
    isValid: model,
    items,
    validateOn: toRef(() => props.validateOn)
  });
  return {
    errors,
    isDisabled,
    isReadonly,
    isValidating,
    isValid: model,
    items,
    validate,
    reset,
    resetValidation
  };
}
function useForm(props) {
  const form = inject(FormKey, null);
  return {
    ...form,
    isReadonly: computed(() => {
      var _a;
      return !!((_a = props == null ? void 0 : props.readonly) != null ? _a : form == null ? void 0 : form.isReadonly.value);
    }),
    isDisabled: computed(() => {
      var _a;
      return !!((_a = props == null ? void 0 : props.disabled) != null ? _a : form == null ? void 0 : form.isDisabled.value);
    })
  };
}
const RulesSymbol = Symbol.for("vuetify:rules");
function useRules(fn) {
  const resolveRules = inject(RulesSymbol, null);
  if (!resolveRules) return toRef(fn);
  return resolveRules(fn);
}
const makeValidationProps = propsFactory({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...makeFocusProps()
}, "validation");
function useValidation(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  let id = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : useId();
  const model = useProxiedModel(props, "modelValue");
  const validationModel = computed(() => props.validationValue === void 0 ? model.value : props.validationValue);
  const form = useForm(props);
  const rules = useRules(() => props.rules);
  const internalErrorMessages = ref([]);
  const isPristine = shallowRef(true);
  const isDirty = computed(() => !!(wrapInArray(model.value === "" ? null : model.value).length || wrapInArray(validationModel.value === "" ? null : validationModel.value).length));
  const errorMessages = computed(() => {
    var _a;
    return ((_a = props.errorMessages) == null ? void 0 : _a.length) ? wrapInArray(props.errorMessages).concat(internalErrorMessages.value).slice(0, Math.max(0, Number(props.maxErrors))) : internalErrorMessages.value;
  });
  const validateOn = computed(() => {
    var _a2, _b;
    var _a;
    let value = ((_a2 = props.validateOn) != null ? _a2 : (_a = form.validateOn) == null ? void 0 : _a.value) || "input";
    if (value === "lazy") value = "input lazy";
    if (value === "eager") value = "input eager";
    const set = new Set((_b = value == null ? void 0 : value.split(" ")) != null ? _b : []);
    return {
      input: set.has("input"),
      blur: set.has("blur") || set.has("input") || set.has("invalid-input"),
      invalidInput: set.has("invalid-input"),
      lazy: set.has("lazy"),
      eager: set.has("eager")
    };
  });
  const isValid = computed(() => {
    var _a;
    if (props.error || ((_a = props.errorMessages) == null ? void 0 : _a.length)) return false;
    if (!props.rules.length) return true;
    if (isPristine.value) {
      return internalErrorMessages.value.length || validateOn.value.lazy ? null : true;
    } else {
      return !internalErrorMessages.value.length;
    }
  });
  const isValidating = shallowRef(false);
  const validationClasses = computed(() => {
    return {
      [`${name}--error`]: isValid.value === false,
      [`${name}--dirty`]: isDirty.value,
      [`${name}--disabled`]: form.isDisabled.value,
      [`${name}--readonly`]: form.isReadonly.value
    };
  });
  getCurrentInstance("validation");
  const uid = computed(() => {
    var _a;
    return (_a = props.name) != null ? _a : unref(id);
  });
  useToggleScope(() => validateOn.value.input || validateOn.value.invalidInput && isValid.value === false, () => {
    watch(validationModel, () => {
      if (validationModel.value != null) {
        validate();
      } else if (props.focused) {
        const unwatch = watch(() => props.focused, (val) => {
          if (!val) validate();
          unwatch();
        });
      }
    });
  });
  useToggleScope(() => validateOn.value.blur, () => {
    watch(() => props.focused, (val) => {
      if (!val) validate();
    });
  });
  watch([isValid, errorMessages], () => {
    var _a;
    (_a = form.update) == null ? void 0 : _a.call(form, uid.value, isValid.value, errorMessages.value);
  });
  async function reset() {
    model.value = null;
    await nextTick();
    await resetValidation();
  }
  async function resetValidation() {
    isPristine.value = true;
    if (!validateOn.value.lazy) {
      await validate(!validateOn.value.eager);
    } else {
      internalErrorMessages.value = [];
    }
  }
  async function validate() {
    var _a;
    let silent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const results = [];
    isValidating.value = true;
    for (const rule of rules.value) {
      if (results.length >= Number((_a = props.maxErrors) != null ? _a : 1)) {
        break;
      }
      const handler = typeof rule === "function" ? rule : () => rule;
      const result = await handler(validationModel.value);
      if (result === true) continue;
      if (result !== false && typeof result !== "string") {
        console.warn(`${result} is not a valid value. Rule functions must return boolean true or a string.`);
        continue;
      }
      results.push(result || "");
    }
    internalErrorMessages.value = results;
    isValidating.value = false;
    isPristine.value = silent;
    return internalErrorMessages.value;
  }
  return {
    errorMessages,
    isDirty,
    isDisabled: form.isDisabled,
    isReadonly: form.isReadonly,
    isPristine,
    isValid,
    isValidating,
    reset,
    resetValidation,
    validate,
    validationClasses
  };
}
const makeVInputProps = propsFactory({
  id: String,
  appendIcon: IconValue,
  baseColor: String,
  centerAffix: {
    type: Boolean,
    default: true
  },
  color: String,
  glow: Boolean,
  iconColor: [Boolean, String],
  prependIcon: IconValue,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (v) => ["horizontal", "vertical"].includes(v)
  },
  "onClick:prepend": EventProp(),
  "onClick:append": EventProp(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...pick(makeDimensionProps(), ["maxWidth", "minWidth", "width"]),
  ...makeThemeProps(),
  ...makeValidationProps()
}, "VInput");
const VInput = genericComponent()({
  name: "VInput",
  props: {
    ...makeVInputProps()
  },
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots,
      emit
    } = _ref;
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses
    } = useRtl();
    const {
      InputIcon
    } = useInputIcon(props);
    const uid = useId();
    const id = computed(() => props.id || `input-${uid}`);
    const messagesId = computed(() => `${id.value}-messages`);
    const {
      errorMessages,
      isDirty,
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate,
      validationClasses
    } = useValidation(props, "v-input", id);
    const slotProps = computed(() => ({
      id,
      messagesId,
      isDirty,
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate
    }));
    const color = toRef(() => {
      return props.error || props.disabled ? void 0 : props.focused ? props.color : props.baseColor;
    });
    const iconColor = toRef(() => {
      if (!props.iconColor) return void 0;
      return props.iconColor === true ? color.value : props.iconColor;
    });
    const messages = computed(() => {
      var _a;
      if (((_a = props.errorMessages) == null ? void 0 : _a.length) || !isPristine.value && errorMessages.value.length) {
        return errorMessages.value;
      } else if (props.hint && (props.persistentHint || props.focused)) {
        return props.hint;
      } else {
        return props.messages;
      }
    });
    useRender(() => {
      var _a, _b, _c, _d;
      const hasPrepend = !!(slots.prepend || props.prependIcon);
      const hasAppend = !!(slots.append || props.appendIcon);
      const hasMessages = messages.value.length > 0;
      const hasDetails = !props.hideDetails || props.hideDetails === "auto" && (hasMessages || !!slots.details);
      return createElementVNode("div", {
        "class": normalizeClass(["v-input", `v-input--${props.direction}`, {
          "v-input--center-affix": props.centerAffix,
          "v-input--focused": props.focused,
          "v-input--glow": props.glow,
          "v-input--hide-spin-buttons": props.hideSpinButtons
        }, densityClasses.value, themeClasses.value, rtlClasses.value, validationClasses.value, props.class]),
        "style": normalizeStyle([dimensionStyles.value, props.style])
      }, [hasPrepend && createElementVNode("div", {
        "key": "prepend",
        "class": "v-input__prepend"
      }, [(_a = slots.prepend) == null ? void 0 : _a.call(slots, slotProps.value), props.prependIcon && createVNode(InputIcon, {
        "key": "prepend-icon",
        "name": "prepend",
        "color": iconColor.value
      }, null)]), slots.default && createElementVNode("div", {
        "class": "v-input__control"
      }, [(_b = slots.default) == null ? void 0 : _b.call(slots, slotProps.value)]), hasAppend && createElementVNode("div", {
        "key": "append",
        "class": "v-input__append"
      }, [props.appendIcon && createVNode(InputIcon, {
        "key": "append-icon",
        "name": "append",
        "color": iconColor.value
      }, null), (_c = slots.append) == null ? void 0 : _c.call(slots, slotProps.value)]), hasDetails && createElementVNode("div", {
        "id": messagesId.value,
        "class": "v-input__details",
        "role": "alert",
        "aria-live": "polite"
      }, [createVNode(VMessages, {
        "active": hasMessages,
        "messages": messages.value
      }, {
        message: slots.message
      }), (_d = slots.details) == null ? void 0 : _d.call(slots, slotProps.value)])]);
    });
    return {
      reset,
      resetValidation,
      validate,
      isValid,
      errorMessages
    };
  }
});
const makeVCheckboxProps = propsFactory({
  ...makeVInputProps(),
  ...omit(makeVCheckboxBtnProps(), ["inline"])
}, "VCheckbox");
const VCheckbox = genericComponent()({
  name: "VCheckbox",
  inheritAttrs: false,
  props: makeVCheckboxProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:focused": (focused) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const uid = useId();
    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
      const inputProps = VInput.filterProps(props);
      const checkboxProps = VCheckboxBtn.filterProps(props);
      return createVNode(VInput, mergeProps({
        "class": ["v-checkbox", props.class]
      }, rootAttrs, inputProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "id": props.id || `checkbox-${uid}`,
        "focused": isFocused.value,
        "style": props.style
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id,
            messagesId,
            isDisabled,
            isReadonly,
            isValid
          } = _ref2;
          return createVNode(VCheckboxBtn, mergeProps(checkboxProps, {
            "id": id.value,
            "aria-describedby": messagesId.value,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value
          }, controlAttrs, {
            "error": isValid.value === false,
            "modelValue": model.value,
            "onUpdate:modelValue": ($event) => model.value = $event,
            "onFocus": focus,
            "onBlur": blur
          }), slots);
        }
      });
    });
    return {};
  }
});
const makeVCounterProps = propsFactory({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...makeComponentProps(),
  ...makeTransitionProps$1({
    transition: {
      component: VSlideYTransition
    }
  })
}, "VCounter");
const VCounter = genericComponent()({
  name: "VCounter",
  functional: true,
  props: makeVCounterProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const counter = toRef(() => {
      return props.max ? `${props.value} / ${props.max}` : String(props.value);
    });
    useRender(() => createVNode(MaybeTransition, {
      "transition": props.transition
    }, {
      default: () => [withDirectives(createElementVNode("div", {
        "class": normalizeClass(["v-counter", {
          "text-error": props.max && !props.disabled && parseFloat(props.value) > parseFloat(props.max)
        }, props.class]),
        "style": normalizeStyle(props.style)
      }, [slots.default ? slots.default({
        counter: counter.value,
        max: props.max,
        value: props.value
      }) : counter.value]), [[vShow, props.active]])]
    }));
    return {};
  }
});
const makeVFieldLabelProps = propsFactory({
  floating: Boolean,
  ...makeComponentProps()
}, "VFieldLabel");
const VFieldLabel = genericComponent()({
  name: "VFieldLabel",
  props: makeVFieldLabelProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(VLabel, {
      "class": normalizeClass(["v-field-label", {
        "v-field-label--floating": props.floating
      }, props.class]),
      "style": normalizeStyle(props.style),
      "aria-hidden": props.floating || void 0
    }, slots));
    return {};
  }
});
const allowedVariants = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"];
const makeVFieldProps = propsFactory({
  appendInnerIcon: IconValue,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: IconValue,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  glow: Boolean,
  error: Boolean,
  flat: Boolean,
  iconColor: [Boolean, String],
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: IconValue,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (v) => allowedVariants.includes(v)
  },
  "onClick:clear": EventProp(),
  "onClick:appendInner": EventProp(),
  "onClick:prependInner": EventProp(),
  ...makeComponentProps(),
  ...makeLoaderProps(),
  ...makeRoundedProps(),
  ...makeThemeProps()
}, "VField");
const VField = genericComponent()({
  name: "VField",
  inheritAttrs: false,
  props: {
    id: String,
    ...makeFocusProps(),
    ...makeVFieldProps()
  },
  emits: {
    "update:focused": (focused) => true,
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      focusClasses,
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const {
      InputIcon
    } = useInputIcon(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      rtlClasses
    } = useRtl();
    const isActive = toRef(() => props.dirty || props.active);
    const hasLabel = toRef(() => !!(props.label || slots.label));
    const hasFloatingLabel = toRef(() => !props.singleLine && hasLabel.value);
    const uid = useId();
    const id = computed(() => props.id || `input-${uid}`);
    const messagesId = toRef(() => `${id.value}-messages`);
    const labelRef = ref();
    const floatingLabelRef = ref();
    const controlRef = ref();
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    const color = computed(() => {
      return props.error || props.disabled ? void 0 : isActive.value && isFocused.value ? props.color : props.baseColor;
    });
    const iconColor = computed(() => {
      if (!props.iconColor || props.glow && !isFocused.value) return void 0;
      return props.iconColor === true ? color.value : props.iconColor;
    });
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.bgColor);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(color);
    watch(isActive, (val) => {
      if (hasFloatingLabel.value) {
        const el = labelRef.value.$el;
        const targetEl = floatingLabelRef.value.$el;
        requestAnimationFrame(() => {
          const rect = nullifyTransforms(el);
          const targetRect = targetEl.getBoundingClientRect();
          const x = targetRect.x - rect.x;
          const y = targetRect.y - rect.y - (rect.height / 2 - targetRect.height / 2);
          const targetWidth = targetRect.width / 0.75;
          const width = Math.abs(targetWidth - rect.width) > 1 ? {
            maxWidth: convertToUnit(targetWidth)
          } : void 0;
          const style = getComputedStyle(el);
          const targetStyle = getComputedStyle(targetEl);
          const duration = parseFloat(style.transitionDuration) * 1e3 || 150;
          const scale = parseFloat(targetStyle.getPropertyValue("--v-field-label-scale"));
          const color2 = targetStyle.getPropertyValue("color");
          el.style.visibility = "visible";
          targetEl.style.visibility = "hidden";
          animate(el, {
            transform: `translate(${x}px, ${y}px) scale(${scale})`,
            color: color2,
            ...width
          }, {
            duration,
            easing: standardEasing,
            direction: val ? "normal" : "reverse"
          }).finished.then(() => {
            el.style.removeProperty("visibility");
            targetEl.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const slotProps = computed(() => ({
      isActive,
      isFocused,
      controlRef,
      blur,
      focus
    }));
    function onClick(e) {
      if (e.target !== (void 0).activeElement) {
        e.preventDefault();
      }
    }
    useRender(() => {
      var _a2, _b2;
      var _a, _b, _c;
      const isOutlined = props.variant === "outlined";
      const hasPrepend = !!(slots["prepend-inner"] || props.prependInnerIcon);
      const hasClear = !!(props.clearable || slots.clear) && !props.disabled;
      const hasAppend = !!(slots["append-inner"] || props.appendInnerIcon || hasClear);
      const label = () => slots.label ? slots.label({
        ...slotProps.value,
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      return createElementVNode("div", mergeProps({
        "class": ["v-field", {
          "v-field--active": isActive.value,
          "v-field--appended": hasAppend,
          "v-field--center-affix": (_a2 = props.centerAffix) != null ? _a2 : !isPlainOrUnderlined.value,
          "v-field--disabled": props.disabled,
          "v-field--dirty": props.dirty,
          "v-field--error": props.error,
          "v-field--glow": props.glow,
          "v-field--flat": props.flat,
          "v-field--has-background": !!props.bgColor,
          "v-field--persistent-clear": props.persistentClear,
          "v-field--prepended": hasPrepend,
          "v-field--reverse": props.reverse,
          "v-field--single-line": props.singleLine,
          "v-field--no-label": !label(),
          [`v-field--variant-${props.variant}`]: true
        }, themeClasses.value, backgroundColorClasses.value, focusClasses.value, loaderClasses.value, roundedClasses.value, rtlClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style],
        "onClick": onClick
      }, attrs), [createElementVNode("div", {
        "class": "v-field__overlay"
      }, null), createVNode(LoaderSlot, {
        "name": "v-field",
        "active": !!props.loading,
        "color": props.error ? "error" : typeof props.loading === "string" ? props.loading : props.color
      }, {
        default: slots.loader
      }), hasPrepend && createElementVNode("div", {
        "key": "prepend",
        "class": "v-field__prepend-inner"
      }, [props.prependInnerIcon && createVNode(InputIcon, {
        "key": "prepend-icon",
        "name": "prependInner",
        "color": iconColor.value
      }, null), (_a = slots["prepend-inner"]) == null ? void 0 : _a.call(slots, slotProps.value)]), createElementVNode("div", {
        "class": "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(props.variant) && hasFloatingLabel.value && createVNode(VFieldLabel, {
        "key": "floating-label",
        "ref": floatingLabelRef,
        "class": normalizeClass([textColorClasses.value]),
        "floating": true,
        "for": id.value,
        "style": normalizeStyle(textColorStyles.value)
      }, {
        default: () => [label()]
      }), hasLabel.value && createVNode(VFieldLabel, {
        "key": "label",
        "ref": labelRef,
        "for": id.value
      }, {
        default: () => [label()]
      }), (_b2 = (_b = slots.default) == null ? void 0 : _b.call(slots, {
        ...slotProps.value,
        props: {
          id: id.value,
          class: "v-field__input",
          "aria-describedby": messagesId.value
        },
        focus,
        blur
      })) != null ? _b2 : createElementVNode("div", {
        "id": id.value,
        "class": "v-field__input",
        "aria-describedby": messagesId.value
      }, null)]), hasClear && createVNode(VExpandXTransition, {
        "key": "clear"
      }, {
        default: () => [withDirectives(createElementVNode("div", {
          "class": "v-field__clearable",
          "onMousedown": (e) => {
            e.preventDefault();
            e.stopPropagation();
          }
        }, [createVNode(VDefaultsProvider, {
          "defaults": {
            VIcon: {
              icon: props.clearIcon
            }
          }
        }, {
          default: () => [slots.clear ? slots.clear({
            ...slotProps.value,
            props: {
              onFocus: focus,
              onBlur: blur,
              onClick: props["onClick:clear"],
              tabindex: -1
            }
          }) : createVNode(InputIcon, {
            "name": "clear",
            "onFocus": focus,
            "onBlur": blur,
            "tabindex": -1
          }, null)]
        })]), [[vShow, props.dirty]])]
      }), hasAppend && createElementVNode("div", {
        "key": "append",
        "class": "v-field__append-inner"
      }, [(_c = slots["append-inner"]) == null ? void 0 : _c.call(slots, slotProps.value), props.appendInnerIcon && createVNode(InputIcon, {
        "key": "append-icon",
        "name": "appendInner",
        "color": iconColor.value
      }, null)]), createElementVNode("div", {
        "class": normalizeClass(["v-field__outline", textColorClasses.value]),
        "style": normalizeStyle(textColorStyles.value)
      }, [isOutlined && createElementVNode(Fragment, null, [createElementVNode("div", {
        "class": "v-field__outline__start"
      }, null), hasFloatingLabel.value && createElementVNode("div", {
        "class": "v-field__outline__notch"
      }, [createVNode(VFieldLabel, {
        "ref": floatingLabelRef,
        "floating": true,
        "for": id.value
      }, {
        default: () => [label()]
      })]), createElementVNode("div", {
        "class": "v-field__outline__end"
      }, null)]), isPlainOrUnderlined.value && hasFloatingLabel.value && createVNode(VFieldLabel, {
        "ref": floatingLabelRef,
        "floating": true,
        "for": id.value
      }, {
        default: () => [label()]
      })])]);
    });
    return {
      controlRef,
      fieldIconColor: iconColor
    };
  }
});
function useAutofocus(props) {
  function onIntersect(isIntersecting, entries) {
    var _a, _b;
    if (!props.autofocus || !isIntersecting) return;
    (_b = (_a = entries[0].target) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
  }
  return {
    onIntersect
  };
}
const activeTypes = ["color", "file", "time", "date", "datetime-local", "week", "month"];
const makeVTextFieldProps = propsFactory({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...makeVInputProps(),
  ...makeVFieldProps()
}, "VTextField");
const VTextField = genericComponent()({
  name: "VTextField",
  directives: {
    vIntersect: Intersect
  },
  inheritAttrs: false,
  props: makeVTextFieldProps(),
  emits: {
    "click:control": (e) => true,
    "mousedown:control": (e) => true,
    "update:focused": (focused) => true,
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const {
      onIntersect
    } = useAutofocus(props);
    const counterValue = computed(() => {
      var _a;
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : typeof props.counterValue === "number" ? props.counterValue : ((_a = model.value) != null ? _a : "").toString().length;
    });
    const max = computed(() => {
      if (attrs.maxlength) return attrs.maxlength;
      if (!props.counter || typeof props.counter !== "number" && typeof props.counter !== "string") return void 0;
      return props.counter;
    });
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    const vInputRef = ref();
    const vFieldRef = ref();
    const inputRef = ref();
    const isActive = computed(() => activeTypes.includes(props.type) || props.persistentPlaceholder || isFocused.value || props.active);
    function onFocus() {
      if (!isFocused.value) focus();
      nextTick(() => {
        if (inputRef.value !== (void 0).activeElement) {
          nextTick(() => {
            var _a;
            return (_a = inputRef.value) == null ? void 0 : _a.focus();
          });
        }
      });
    }
    function onControlMousedown(e) {
      emit("mousedown:control", e);
      if (e.target === inputRef.value) return;
      onFocus();
      e.preventDefault();
    }
    function onControlClick(e) {
      emit("click:control", e);
    }
    function onClear(e, reset) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        model.value = null;
        reset();
        callEvent(props["onClick:clear"], e);
      });
    }
    function onInput(e) {
      var _a;
      const el = e.target;
      model.value = el.value;
      if (((_a = props.modelModifiers) == null ? void 0 : _a.trim) && ["text", "search", "password", "tel", "url"].includes(props.type)) {
        const caretPosition = [el.selectionStart, el.selectionEnd];
        nextTick(() => {
          el.selectionStart = caretPosition[0];
          el.selectionEnd = caretPosition[1];
        });
      }
    }
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter !== false && props.counter != null);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const {
        modelValue: _,
        ...inputProps
      } = VInput.filterProps(props);
      const fieldProps = VField.filterProps(props);
      return createVNode(VInput, mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-text-field", {
          "v-text-field--prefixed": props.prefix,
          "v-text-field--suffixed": props.suffix,
          "v-input--plain-underlined": isPlainOrUnderlined.value
        }, props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "centerAffix": !isPlainOrUnderlined.value,
        "focused": isFocused.value
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id,
            isDisabled,
            isDirty,
            isReadonly,
            isValid,
            reset
          } = _ref2;
          return createVNode(VField, mergeProps({
            "ref": vFieldRef,
            "onMousedown": onControlMousedown,
            "onClick": onControlClick,
            "onClick:clear": (e) => onClear(e, reset),
            "onClick:prependInner": props["onClick:prependInner"],
            "onClick:appendInner": props["onClick:appendInner"],
            "role": props.role
          }, fieldProps, {
            "id": id.value,
            "active": isActive.value || isDirty.value,
            "dirty": isDirty.value || props.dirty,
            "disabled": isDisabled.value,
            "focused": isFocused.value,
            "error": isValid.value === false
          }), {
            ...slots,
            default: (_ref3) => {
              let {
                props: {
                  class: fieldClass,
                  ...slotProps
                }
              } = _ref3;
              const inputNode = withDirectives(createElementVNode("input", mergeProps({
                "ref": inputRef,
                "value": model.value,
                "onInput": onInput,
                "autofocus": props.autofocus,
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "name": props.name,
                "placeholder": props.placeholder,
                "size": 1,
                "type": props.type,
                "onFocus": onFocus,
                "onBlur": blur
              }, slotProps, inputAttrs), null), [[Intersect, {
                handler: onIntersect
              }, null, {
                once: true
              }]]);
              return createElementVNode(Fragment, null, [props.prefix && createElementVNode("span", {
                "class": "v-text-field__prefix"
              }, [createElementVNode("span", {
                "class": "v-text-field__prefix__text"
              }, [props.prefix])]), slots.default ? createElementVNode("div", {
                "class": normalizeClass(fieldClass),
                "data-no-activator": ""
              }, [slots.default(), inputNode]) : cloneVNode(inputNode, {
                class: fieldClass
              }), props.suffix && createElementVNode("span", {
                "class": "v-text-field__suffix"
              }, [createElementVNode("span", {
                "class": "v-text-field__suffix__text"
              }, [props.suffix])])]);
            }
          });
        },
        details: hasDetails ? (slotProps) => {
          var _a;
          return createElementVNode(Fragment, null, [(_a = slots.details) == null ? void 0 : _a.call(slots, slotProps), hasCounter && createElementVNode(Fragment, null, [createElementVNode("span", null, null), createVNode(VCounter, {
            "active": props.persistentCounter || isFocused.value,
            "value": counterValue.value,
            "max": max.value,
            "disabled": props.disabled
          }, slots.counter)])]);
        } : void 0
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, inputRef);
  }
});
const makeVVirtualScrollItemProps = propsFactory({
  renderless: Boolean,
  ...makeComponentProps()
}, "VVirtualScrollItem");
const VVirtualScrollItem = genericComponent()({
  name: "VVirtualScrollItem",
  inheritAttrs: false,
  props: makeVVirtualScrollItemProps(),
  emits: {
    "update:height": (height) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      resizeRef,
      contentRect
    } = useResizeObserver();
    watch(() => {
      var _a;
      return (_a = contentRect.value) == null ? void 0 : _a.height;
    }, (height) => {
      if (height != null) emit("update:height", height);
    });
    useRender(() => {
      var _a, _b;
      return props.renderless ? createElementVNode(Fragment, null, [(_a = slots.default) == null ? void 0 : _a.call(slots, {
        itemRef: resizeRef
      })]) : createElementVNode("div", mergeProps({
        "ref": resizeRef,
        "class": ["v-virtual-scroll__item", props.class],
        "style": props.style
      }, attrs), [(_b = slots.default) == null ? void 0 : _b.call(slots)]);
    });
  }
});
const UP = -1;
const DOWN = 1;
const BUFFER_PX = 100;
const makeVirtualProps = propsFactory({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  itemKey: {
    type: [String, Array, Function],
    default: null
  },
  height: [Number, String]
}, "virtual");
function useVirtual(props, items) {
  const display = useDisplay();
  const itemHeight = shallowRef(0);
  watchEffect(() => {
    itemHeight.value = parseFloat(props.itemHeight || 0);
  });
  const first = shallowRef(0);
  const last = shallowRef(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(props.height) || display.height.value) / (itemHeight.value || 16)
  ) || 1);
  const paddingTop = shallowRef(0);
  const paddingBottom = shallowRef(0);
  const containerRef = ref();
  const markerRef = ref();
  let markerOffset = 0;
  const {
    resizeRef,
    contentRect
  } = useResizeObserver();
  watchEffect(() => {
    resizeRef.value = containerRef.value;
  });
  const viewportHeight = computed(() => {
    var _a;
    return containerRef.value === (void 0).documentElement ? display.height.value : ((_a = contentRect.value) == null ? void 0 : _a.height) || parseInt(props.height) || 0;
  });
  const hasInitialRender = computed(() => {
    return !!(containerRef.value && markerRef.value && viewportHeight.value && itemHeight.value);
  });
  let sizes = Array.from({
    length: items.value.length
  });
  let offsets = Array.from({
    length: items.value.length
  });
  const updateTime = shallowRef(0);
  let targetScrollIndex = -1;
  function getSize(index2) {
    return sizes[index2] || itemHeight.value;
  }
  const updateOffsets = debounce(() => {
    const start = performance.now();
    offsets[0] = 0;
    const length = items.value.length;
    for (let i = 1; i <= length - 1; i++) {
      offsets[i] = (offsets[i - 1] || 0) + getSize(i - 1);
    }
    updateTime.value = Math.max(updateTime.value, performance.now() - start);
  }, updateTime);
  const unwatch = watch(hasInitialRender, (v) => {
    if (!v) return;
    unwatch();
    markerOffset = markerRef.value.offsetTop;
    updateOffsets.immediate();
    calculateVisibleItems();
    if (!~targetScrollIndex) return;
    nextTick(() => {
    });
  });
  onScopeDispose(() => {
    updateOffsets.clear();
  });
  function handleItemResize(index2, height) {
    const prevHeight = sizes[index2];
    const prevMinHeight = itemHeight.value;
    itemHeight.value = prevMinHeight ? Math.min(itemHeight.value, height) : height;
    if (prevHeight !== height || prevMinHeight !== itemHeight.value) {
      sizes[index2] = height;
      updateOffsets();
    }
  }
  function calculateOffset(index2) {
    index2 = clamp(index2, 0, items.value.length - 1);
    return offsets[index2] || 0;
  }
  function calculateIndex(scrollTop) {
    return binaryClosest(offsets, scrollTop);
  }
  let lastScrollTop = 0;
  let scrollVelocity = 0;
  let lastScrollTime = 0;
  watch(viewportHeight, (val, oldVal) => {
    if (oldVal) {
      calculateVisibleItems();
      if (val < oldVal) {
        requestAnimationFrame(() => {
          scrollVelocity = 0;
          calculateVisibleItems();
        });
      }
    }
  });
  let scrollTimeout = -1;
  function handleScroll() {
    if (!containerRef.value || !markerRef.value) return;
    const scrollTop = containerRef.value.scrollTop;
    const scrollTime = performance.now();
    const scrollDeltaT = scrollTime - lastScrollTime;
    if (scrollDeltaT > 500) {
      scrollVelocity = Math.sign(scrollTop - lastScrollTop);
      markerOffset = markerRef.value.offsetTop;
    } else {
      scrollVelocity = scrollTop - lastScrollTop;
    }
    lastScrollTop = scrollTop;
    lastScrollTime = scrollTime;
    (void 0).clearTimeout(scrollTimeout);
    scrollTimeout = (void 0).setTimeout(handleScrollend, 500);
    calculateVisibleItems();
  }
  function handleScrollend() {
    if (!containerRef.value || !markerRef.value) return;
    scrollVelocity = 0;
    lastScrollTime = 0;
    (void 0).clearTimeout(scrollTimeout);
    calculateVisibleItems();
  }
  let raf = -1;
  function calculateVisibleItems() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(_calculateVisibleItems);
  }
  function _calculateVisibleItems() {
    if (!containerRef.value || !viewportHeight.value || !itemHeight.value) return;
    const scrollTop = lastScrollTop - markerOffset;
    const direction = Math.sign(scrollVelocity);
    const startPx = Math.max(0, scrollTop - BUFFER_PX);
    const start = clamp(calculateIndex(startPx), 0, items.value.length);
    const endPx = scrollTop + viewportHeight.value + BUFFER_PX;
    const end = clamp(calculateIndex(endPx) + 1, start + 1, items.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (direction !== UP || start < first.value) && (direction !== DOWN || end > last.value)
    ) {
      const topOverflow = calculateOffset(first.value) - calculateOffset(start);
      const bottomOverflow = calculateOffset(end) - calculateOffset(last.value);
      const bufferOverflow = Math.max(topOverflow, bottomOverflow);
      if (bufferOverflow > BUFFER_PX) {
        first.value = start;
        last.value = end;
      } else {
        if (start <= 0) first.value = start;
        if (end >= items.value.length) last.value = end;
      }
    }
    paddingTop.value = calculateOffset(first.value);
    paddingBottom.value = calculateOffset(items.value.length) - calculateOffset(last.value);
  }
  function scrollToIndex(index2) {
    const offset = calculateOffset(index2);
    if (!containerRef.value || index2 && !offset) {
      targetScrollIndex = index2;
    } else {
      containerRef.value.scrollTop = offset;
    }
  }
  const computedItems = computed(() => {
    return items.value.slice(first.value, last.value).map((item, index2) => {
      const _index = index2 + first.value;
      return {
        raw: item,
        index: _index,
        key: getPropertyFromItem(item, props.itemKey, _index)
      };
    });
  });
  watch(items, () => {
    sizes = Array.from({
      length: items.value.length
    });
    offsets = Array.from({
      length: items.value.length
    });
    updateOffsets.immediate();
    calculateVisibleItems();
  }, {
    deep: 1
  });
  return {
    calculateVisibleItems,
    containerRef,
    markerRef,
    computedItems,
    paddingTop,
    paddingBottom,
    scrollToIndex,
    handleScroll,
    handleScrollend,
    handleItemResize
  };
}
function binaryClosest(arr, val) {
  let high = arr.length - 1;
  let low = 0;
  let mid = 0;
  let item = null;
  let target = -1;
  if (arr[high] < val) {
    return high;
  }
  while (low <= high) {
    mid = low + high >> 1;
    item = arr[mid];
    if (item > val) {
      high = mid - 1;
    } else if (item < val) {
      target = mid;
      low = mid + 1;
    } else if (item === val) {
      return mid;
    } else {
      return low;
    }
  }
  return target;
}
const makeVVirtualScrollProps = propsFactory({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...makeVirtualProps(),
  ...makeComponentProps(),
  ...makeDimensionProps()
}, "VVirtualScroll");
const VVirtualScroll = genericComponent()({
  name: "VVirtualScroll",
  props: makeVVirtualScrollProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    getCurrentInstance("VVirtualScroll");
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      calculateVisibleItems,
      containerRef,
      markerRef,
      handleScroll,
      handleScrollend,
      handleItemResize,
      scrollToIndex,
      paddingTop,
      paddingBottom,
      computedItems
    } = useVirtual(props, toRef(() => props.items));
    useToggleScope(() => props.renderless, () => {
      function handleListeners() {
        var _a, _b;
        let add = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        const method = add ? "addEventListener" : "removeEventListener";
        if (containerRef.value === (void 0).documentElement) {
          (void 0)[method]("scroll", handleScroll, {
            passive: true
          });
          (void 0)[method]("scrollend", handleScrollend);
        } else {
          (_a = containerRef.value) == null ? void 0 : _a[method]("scroll", handleScroll, {
            passive: true
          });
          (_b = containerRef.value) == null ? void 0 : _b[method]("scrollend", handleScrollend);
        }
      }
      onScopeDispose(handleListeners);
    });
    useRender(() => {
      const children = computedItems.value.map((item) => createVNode(VVirtualScrollItem, {
        "key": item.key,
        "renderless": props.renderless,
        "onUpdate:height": (height) => handleItemResize(item.index, height)
      }, {
        default: (slotProps) => {
          var _a;
          return (_a = slots.default) == null ? void 0 : _a.call(slots, {
            item: item.raw,
            index: item.index,
            ...slotProps
          });
        }
      }));
      return props.renderless ? createElementVNode(Fragment, null, [createElementVNode("div", {
        "ref": markerRef,
        "class": "v-virtual-scroll__spacer",
        "style": {
          paddingTop: convertToUnit(paddingTop.value)
        }
      }, null), children, createElementVNode("div", {
        "class": "v-virtual-scroll__spacer",
        "style": {
          paddingBottom: convertToUnit(paddingBottom.value)
        }
      }, null)]) : createElementVNode("div", {
        "ref": containerRef,
        "class": normalizeClass(["v-virtual-scroll", props.class]),
        "onScrollPassive": handleScroll,
        "onScrollend": handleScrollend,
        "style": normalizeStyle([dimensionStyles.value, props.style])
      }, [createElementVNode("div", {
        "ref": markerRef,
        "class": "v-virtual-scroll__container",
        "style": {
          paddingTop: convertToUnit(paddingTop.value),
          paddingBottom: convertToUnit(paddingBottom.value)
        }
      }, [children])]);
    });
    return {
      calculateVisibleItems,
      scrollToIndex
    };
  }
});
function useScrolling(listRef, textFieldRef) {
  const isScrolling = shallowRef(false);
  let scrollTimeout;
  function onListScroll(e) {
    cancelAnimationFrame(scrollTimeout);
    isScrolling.value = true;
    scrollTimeout = requestAnimationFrame(() => {
      scrollTimeout = requestAnimationFrame(() => {
        isScrolling.value = false;
      });
    });
  }
  async function finishScrolling() {
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await new Promise((resolve) => {
      if (isScrolling.value) {
        const stop = watch(isScrolling, () => {
          stop();
          resolve();
        });
      } else resolve();
    });
  }
  async function onListKeydown(e) {
    var _a, _b;
    if (e.key === "Tab") {
      (_a = textFieldRef.value) == null ? void 0 : _a.focus();
    }
    if (!["PageDown", "PageUp", "Home", "End"].includes(e.key)) return;
    const el = (_b = listRef.value) == null ? void 0 : _b.$el;
    if (!el) return;
    if (e.key === "Home" || e.key === "End") {
      el.scrollTo({
        top: e.key === "Home" ? 0 : el.scrollHeight,
        behavior: "smooth"
      });
    }
    await finishScrolling();
    const children = el.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (e.key === "PageDown" || e.key === "Home") {
      const top = el.getBoundingClientRect().top;
      for (const child of children) {
        if (child.getBoundingClientRect().top >= top) {
          child.focus();
          break;
        }
      }
    } else {
      const bottom = el.getBoundingClientRect().bottom;
      for (const child of [...children].reverse()) {
        if (child.getBoundingClientRect().bottom <= bottom) {
          child.focus();
          break;
        }
      }
    }
  }
  return {
    onScrollPassive: onListScroll,
    onKeydown: onListKeydown
  };
}
const makeSelectProps = propsFactory({
  chips: Boolean,
  closableChips: Boolean,
  closeText: {
    type: String,
    default: "$vuetify.close"
  },
  openText: {
    type: String,
    default: "$vuetify.open"
  },
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  listProps: {
    type: Object
  },
  menu: Boolean,
  menuIcon: {
    type: IconValue,
    default: "$dropdown"
  },
  menuProps: {
    type: Object
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  openOnClear: Boolean,
  itemColor: String,
  ...makeItemsProps({
    itemChildren: false
  })
}, "Select");
const makeVSelectProps = propsFactory({
  ...makeSelectProps(),
  ...omit(makeVTextFieldProps({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...makeTransitionProps$1({
    transition: {
      component: VDialogTransition
    }
  })
}, "VSelect");
const VSelect = genericComponent()({
  name: "VSelect",
  props: makeVSelectProps(),
  emits: {
    "update:focused": (focused) => true,
    "update:modelValue": (value) => true,
    "update:menu": (ue) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const vTextFieldRef = ref();
    const vMenuRef = ref();
    const vVirtualScrollRef = ref();
    const {
      items,
      transformIn,
      transformOut
    } = useItems(props);
    const model = useProxiedModel(props, "modelValue", [], (v) => transformIn(v === null ? [null] : wrapInArray(v)), (v) => {
      var _a;
      const transformed = transformOut(v);
      return props.multiple ? transformed : (_a = transformed[0]) != null ? _a : null;
    });
    const counterValue = computed(() => {
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : typeof props.counterValue === "number" ? props.counterValue : model.value.length;
    });
    const form = useForm(props);
    const selectedValues = computed(() => model.value.map((selection) => selection.value));
    const isFocused = shallowRef(false);
    let keyboardLookupPrefix = "";
    let keyboardLookupIndex = -1;
    let keyboardLookupLastTime;
    const displayItems = computed(() => {
      if (props.hideSelected) {
        return items.value.filter((item) => !model.value.some((s) => (props.valueComparator || deepEqual)(s, item)));
      }
      return items.value;
    });
    const menuDisabled = computed(() => props.hideNoData && !displayItems.value.length || form.isReadonly.value || form.isDisabled.value);
    const _menu = useProxiedModel(props, "menu");
    const menu = computed({
      get: () => _menu.value,
      set: (v) => {
        var _a;
        if (_menu.value && !v && ((_a = vMenuRef.value) == null ? void 0 : _a.\u03A8openChildren.size)) return;
        if (v && menuDisabled.value) return;
        _menu.value = v;
      }
    });
    const label = toRef(() => menu.value ? props.closeText : props.openText);
    const computedMenuProps = computed(() => {
      var _a;
      return {
        ...props.menuProps,
        activatorProps: {
          ...((_a = props.menuProps) == null ? void 0 : _a.activatorProps) || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    });
    const listRef = ref();
    const listEvents = useScrolling(listRef, vTextFieldRef);
    function onClear(e) {
      if (props.openOnClear) {
        menu.value = true;
      }
    }
    function onMousedownControl() {
      if (menuDisabled.value) return;
      menu.value = !menu.value;
    }
    function onListKeydown(e) {
      if (checkPrintable(e)) {
        onKeydown(e);
      }
    }
    function onKeydown(e) {
      var _a, _b, _c;
      if (!e.key || form.isReadonly.value) return;
      if (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
        e.preventDefault();
      }
      if (["Enter", "ArrowDown", " "].includes(e.key)) {
        menu.value = true;
      }
      if (["Escape", "Tab"].includes(e.key)) {
        menu.value = false;
      }
      if (e.key === "Home") {
        (_a = listRef.value) == null ? void 0 : _a.focus("first");
      } else if (e.key === "End") {
        (_b = listRef.value) == null ? void 0 : _b.focus("last");
      }
      const KEYBOARD_LOOKUP_THRESHOLD = 1e3;
      if (!checkPrintable(e)) return;
      const now = performance.now();
      if (now - keyboardLookupLastTime > KEYBOARD_LOOKUP_THRESHOLD) {
        keyboardLookupPrefix = "";
        keyboardLookupIndex = -1;
      }
      keyboardLookupPrefix += e.key.toLowerCase();
      keyboardLookupLastTime = now;
      const items2 = displayItems.value;
      function findItem() {
        let result2 = findItemBase();
        if (result2) return result2;
        if (keyboardLookupPrefix.at(-1) === keyboardLookupPrefix.at(-2)) {
          keyboardLookupPrefix = keyboardLookupPrefix.slice(0, -1);
          result2 = findItemBase();
          if (result2) return result2;
        }
        keyboardLookupIndex = -1;
        result2 = findItemBase();
        if (result2) return result2;
        keyboardLookupPrefix = e.key.toLowerCase();
        return findItemBase();
      }
      function findItemBase() {
        for (let i = keyboardLookupIndex + 1; i < items2.length; i++) {
          const _item = items2[i];
          if (_item.title.toLowerCase().startsWith(keyboardLookupPrefix)) {
            return [_item, i];
          }
        }
        return void 0;
      }
      const result = findItem();
      if (!result) return;
      const [item, index2] = result;
      keyboardLookupIndex = index2;
      (_c = listRef.value) == null ? void 0 : _c.focus(index2);
      if (!props.multiple) {
        model.value = [item];
      }
    }
    function select(item) {
      let set = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      if (item.props.disabled) return;
      if (props.multiple) {
        const index2 = model.value.findIndex((selection) => (props.valueComparator || deepEqual)(selection.value, item.value));
        const add = set == null ? !~index2 : set;
        if (~index2) {
          const value = add ? [...model.value, item] : [...model.value];
          value.splice(index2, 1);
          model.value = value;
        } else if (add) {
          model.value = [...model.value, item];
        }
      } else {
        const add = set !== false;
        model.value = add ? [item] : [];
        nextTick(() => {
          menu.value = false;
        });
      }
    }
    function onBlur(e) {
      var _a;
      if (!((_a = listRef.value) == null ? void 0 : _a.$el.contains(e.relatedTarget))) {
        menu.value = false;
      }
    }
    function onAfterEnter() {
      var _a;
      if (props.eager) {
        (_a = vVirtualScrollRef.value) == null ? void 0 : _a.calculateVisibleItems();
      }
    }
    function onAfterLeave() {
      var _a;
      if (isFocused.value) {
        (_a = vTextFieldRef.value) == null ? void 0 : _a.focus();
      }
    }
    function onFocusin(e) {
      isFocused.value = true;
    }
    function onModelUpdate(v) {
      if (v == null) model.value = [];
      else if (matchesSelector(vTextFieldRef.value) || matchesSelector(vTextFieldRef.value)) ; else if (vTextFieldRef.value) {
        vTextFieldRef.value.value = "";
      }
    }
    watch(menu, () => {
      if (!props.hideSelected && menu.value && model.value.length) {
        displayItems.value.findIndex((item) => model.value.some((s) => (props.valueComparator || deepEqual)(s.value, item.value)));
      }
    });
    watch(() => props.items, (newVal, oldVal) => {
      if (menu.value) return;
      if (isFocused.value && !oldVal.length && newVal.length) {
        menu.value = true;
      }
    });
    useRender(() => {
      const hasChips = !!(props.chips || slots.chip);
      const hasList = !!(!props.hideNoData || displayItems.value.length || slots["prepend-item"] || slots["append-item"] || slots["no-data"]);
      const isDirty = model.value.length > 0;
      const textFieldProps = VTextField.filterProps(props);
      const placeholder = isDirty || !isFocused.value && props.label && !props.persistentPlaceholder ? void 0 : props.placeholder;
      return createVNode(VTextField, mergeProps({
        "ref": vTextFieldRef
      }, textFieldProps, {
        "modelValue": model.value.map((v) => v.props.value).join(", "),
        "onUpdate:modelValue": onModelUpdate,
        "focused": isFocused.value,
        "onUpdate:focused": ($event) => isFocused.value = $event,
        "validationValue": model.externalValue,
        "counterValue": counterValue.value,
        "dirty": isDirty,
        "class": ["v-select", {
          "v-select--active-menu": menu.value,
          "v-select--chips": !!props.chips,
          [`v-select--${props.multiple ? "multiple" : "single"}`]: true,
          "v-select--selected": model.value.length,
          "v-select--selection-slot": !!slots.selection
        }, props.class],
        "style": props.style,
        "inputmode": "none",
        "placeholder": placeholder,
        "onClick:clear": onClear,
        "onMousedown:control": onMousedownControl,
        "onBlur": onBlur,
        "onKeydown": onKeydown,
        "aria-label": t(label.value),
        "title": t(label.value)
      }), {
        ...slots,
        default: () => createElementVNode(Fragment, null, [createVNode(VMenu, mergeProps({
          "ref": vMenuRef,
          "modelValue": menu.value,
          "onUpdate:modelValue": ($event) => menu.value = $event,
          "activator": "parent",
          "contentClass": "v-select__content",
          "disabled": menuDisabled.value,
          "eager": props.eager,
          "maxHeight": 310,
          "openOnClick": false,
          "closeOnContentClick": false,
          "transition": props.transition,
          "onAfterEnter": onAfterEnter,
          "onAfterLeave": onAfterLeave
        }, computedMenuProps.value), {
          default: () => {
            var _a;
            return [hasList && createVNode(VList, mergeProps({
              "ref": listRef,
              "selected": selectedValues.value,
              "selectStrategy": props.multiple ? "independent" : "single-independent",
              "onMousedown": (e) => e.preventDefault(),
              "onKeydown": onListKeydown,
              "onFocusin": onFocusin,
              "tabindex": "-1",
              "aria-live": "polite",
              "aria-label": `${props.label}-list`,
              "color": (_a = props.itemColor) != null ? _a : props.color
            }, listEvents, props.listProps), {
              default: () => {
                var _a3;
                var _a2, _b, _c;
                return [(_a2 = slots["prepend-item"]) == null ? void 0 : _a2.call(slots), !displayItems.value.length && !props.hideNoData && ((_a3 = (_b = slots["no-data"]) == null ? void 0 : _b.call(slots)) != null ? _a3 : createVNode(VListItem, {
                  "key": "no-data",
                  "title": t(props.noDataText)
                }, null)), createVNode(VVirtualScroll, {
                  "ref": vVirtualScrollRef,
                  "renderless": true,
                  "items": displayItems.value,
                  "itemKey": "value"
                }, {
                  default: (_ref2) => {
                    var _a4;
                    var _a22;
                    let {
                      item,
                      index: index2,
                      itemRef
                    } = _ref2;
                    const camelizedProps = camelizeProps(item.props);
                    const itemProps = mergeProps(item.props, {
                      ref: itemRef,
                      key: item.value,
                      onClick: () => select(item, null)
                    });
                    return (_a4 = (_a22 = slots.item) == null ? void 0 : _a22.call(slots, {
                      item,
                      index: index2,
                      props: itemProps
                    })) != null ? _a4 : createVNode(VListItem, mergeProps(itemProps, {
                      "role": "option"
                    }), {
                      prepend: (_ref3) => {
                        let {
                          isSelected
                        } = _ref3;
                        return createElementVNode(Fragment, null, [props.multiple && !props.hideSelected ? createVNode(VCheckboxBtn, {
                          "key": item.value,
                          "modelValue": isSelected,
                          "ripple": false,
                          "tabindex": "-1"
                        }, null) : void 0, camelizedProps.prependAvatar && createVNode(VAvatar, {
                          "image": camelizedProps.prependAvatar
                        }, null), camelizedProps.prependIcon && createVNode(VIcon, {
                          "icon": camelizedProps.prependIcon
                        }, null)]);
                      }
                    });
                  }
                }), (_c = slots["append-item"]) == null ? void 0 : _c.call(slots)];
              }
            })];
          }
        }), model.value.map((item, index2) => {
          function onChipClose(e) {
            e.stopPropagation();
            e.preventDefault();
            select(item, false);
          }
          const slotProps = {
            "onClick:close": onChipClose,
            onKeydown(e) {
              if (e.key !== "Enter" && e.key !== " ") return;
              e.preventDefault();
              e.stopPropagation();
              onChipClose(e);
            },
            onMousedown(e) {
              e.preventDefault();
              e.stopPropagation();
            },
            modelValue: true,
            "onUpdate:modelValue": void 0
          };
          const hasSlot = hasChips ? !!slots.chip : !!slots.selection;
          const slotContent = hasSlot ? ensureValidVNode(hasChips ? slots.chip({
            item,
            index: index2,
            props: slotProps
          }) : slots.selection({
            item,
            index: index2
          })) : void 0;
          if (hasSlot && !slotContent) return void 0;
          return createElementVNode("div", {
            "key": item.value,
            "class": "v-select__selection"
          }, [hasChips ? !slots.chip ? createVNode(VChip, mergeProps({
            "key": "chip",
            "closable": props.closableChips,
            "size": "small",
            "text": item.title,
            "disabled": item.props.disabled
          }, slotProps), null) : createVNode(VDefaultsProvider, {
            "key": "chip-defaults",
            "defaults": {
              VChip: {
                closable: props.closableChips,
                size: "small",
                text: item.title
              }
            }
          }, {
            default: () => [slotContent]
          }) : slotContent != null ? slotContent : createElementVNode("span", {
            "class": "v-select__selection-text"
          }, [item.title, props.multiple && index2 < model.value.length - 1 && createElementVNode("span", {
            "class": "v-select__selection-comma"
          }, [createTextVNode(",")])])]);
        })]),
        "append-inner": function() {
          var _a, _b;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createElementVNode(Fragment, null, [(_a = slots["append-inner"]) == null ? void 0 : _a.call(slots, ...args), props.menuIcon ? createVNode(VIcon, {
            "class": "v-select__menu-icon",
            "color": (_b = vTextFieldRef.value) == null ? void 0 : _b.fieldIconColor,
            "icon": props.menuIcon
          }, null) : void 0]);
        }
      });
    });
    return forwardRefs({
      isFocused,
      menu,
      select
    }, vTextFieldRef);
  }
});
const makeDataTablePaginateProps = propsFactory({
  page: {
    type: [Number, String],
    default: 1
  },
  itemsPerPage: {
    type: [Number, String],
    default: 10
  }
}, "DataTable-paginate");
const VDataTablePaginationSymbol = Symbol.for("vuetify:data-table-pagination");
function createPagination(props) {
  const page = useProxiedModel(props, "page", void 0, (value) => Number(value != null ? value : 1));
  const itemsPerPage = useProxiedModel(props, "itemsPerPage", void 0, (value) => Number(value != null ? value : 10));
  return {
    page,
    itemsPerPage
  };
}
function providePagination(options) {
  const {
    page,
    itemsPerPage,
    itemsLength
  } = options;
  const startIndex = computed(() => {
    if (itemsPerPage.value === -1) return 0;
    return itemsPerPage.value * (page.value - 1);
  });
  const stopIndex = computed(() => {
    if (itemsPerPage.value === -1) return itemsLength.value;
    return Math.min(itemsLength.value, startIndex.value + itemsPerPage.value);
  });
  const pageCount = computed(() => {
    if (itemsPerPage.value === -1 || itemsLength.value === 0) return 1;
    return Math.ceil(itemsLength.value / itemsPerPage.value);
  });
  watch([page, pageCount], () => {
    if (page.value > pageCount.value) {
      page.value = pageCount.value;
    }
  });
  function setItemsPerPage(value) {
    itemsPerPage.value = value;
    page.value = 1;
  }
  function nextPage() {
    page.value = clamp(page.value + 1, 1, pageCount.value);
  }
  function prevPage() {
    page.value = clamp(page.value - 1, 1, pageCount.value);
  }
  function setPage(value) {
    page.value = clamp(value, 1, pageCount.value);
  }
  const data = {
    page,
    itemsPerPage,
    startIndex,
    stopIndex,
    pageCount,
    itemsLength,
    nextPage,
    prevPage,
    setPage,
    setItemsPerPage
  };
  provide(VDataTablePaginationSymbol, data);
  return data;
}
function usePagination() {
  const data = inject(VDataTablePaginationSymbol);
  if (!data) throw new Error("Missing pagination!");
  return data;
}
function usePaginatedItems(options) {
  const vm = getCurrentInstance("usePaginatedItems");
  const {
    items,
    startIndex,
    stopIndex,
    itemsPerPage
  } = options;
  const paginatedItems = computed(() => {
    if (itemsPerPage.value <= 0) return items.value;
    return items.value.slice(startIndex.value, stopIndex.value);
  });
  watch(paginatedItems, (val) => {
    vm.emit("update:currentItems", val);
  }, {
    immediate: true
  });
  return {
    paginatedItems
  };
}
const makeVDataTableFooterProps = propsFactory({
  prevIcon: {
    type: IconValue,
    default: "$prev"
  },
  nextIcon: {
    type: IconValue,
    default: "$next"
  },
  firstIcon: {
    type: IconValue,
    default: "$first"
  },
  lastIcon: {
    type: IconValue,
    default: "$last"
  },
  itemsPerPageText: {
    type: String,
    default: "$vuetify.dataFooter.itemsPerPageText"
  },
  pageText: {
    type: String,
    default: "$vuetify.dataFooter.pageText"
  },
  firstPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.firstPage"
  },
  prevPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.prevPage"
  },
  nextPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.nextPage"
  },
  lastPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.lastPage"
  },
  itemsPerPageOptions: {
    type: Array,
    default: () => [{
      value: 10,
      title: "10"
    }, {
      value: 25,
      title: "25"
    }, {
      value: 50,
      title: "50"
    }, {
      value: 100,
      title: "100"
    }, {
      value: -1,
      title: "$vuetify.dataFooter.itemsPerPageAll"
    }]
  },
  showCurrentPage: Boolean
}, "VDataTableFooter");
const VDataTableFooter = genericComponent()({
  name: "VDataTableFooter",
  props: makeVDataTableFooterProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      page,
      pageCount,
      startIndex,
      stopIndex,
      itemsLength,
      itemsPerPage,
      setItemsPerPage
    } = usePagination();
    const itemsPerPageOptions = computed(() => props.itemsPerPageOptions.map((option) => {
      if (typeof option === "number") {
        return {
          value: option,
          title: option === -1 ? t("$vuetify.dataFooter.itemsPerPageAll") : String(option)
        };
      }
      return {
        ...option,
        title: !isNaN(Number(option.title)) ? option.title : t(option.title)
      };
    }));
    useRender(() => {
      var _a;
      const paginationProps = VPagination.filterProps(props);
      return createElementVNode("div", {
        "class": "v-data-table-footer"
      }, [(_a = slots.prepend) == null ? void 0 : _a.call(slots), createElementVNode("div", {
        "class": "v-data-table-footer__items-per-page"
      }, [createElementVNode("span", {
        "aria-label": t(props.itemsPerPageText)
      }, [t(props.itemsPerPageText)]), createVNode(VSelect, {
        "items": itemsPerPageOptions.value,
        "modelValue": itemsPerPage.value,
        "onUpdate:modelValue": (v) => setItemsPerPage(Number(v)),
        "density": "compact",
        "variant": "outlined",
        "hide-details": true
      }, null)]), createElementVNode("div", {
        "class": "v-data-table-footer__info"
      }, [createElementVNode("div", null, [t(props.pageText, !itemsLength.value ? 0 : startIndex.value + 1, stopIndex.value, itemsLength.value)])]), createElementVNode("div", {
        "class": "v-data-table-footer__pagination"
      }, [createVNode(VPagination, mergeProps({
        "modelValue": page.value,
        "onUpdate:modelValue": ($event) => page.value = $event,
        "density": "comfortable",
        "first-aria-label": props.firstPageLabel,
        "last-aria-label": props.lastPageLabel,
        "length": pageCount.value,
        "next-aria-label": props.nextPageLabel,
        "previous-aria-label": props.prevPageLabel,
        "rounded": true,
        "show-first-last-page": true,
        "total-visible": props.showCurrentPage ? 1 : 0,
        "variant": "plain"
      }, paginationProps), null)])]);
    });
    return {};
  }
});
const VDataTableColumn = defineFunctionalComponent({
  align: {
    type: String,
    default: "start"
  },
  fixed: Boolean,
  fixedOffset: [Number, String],
  height: [Number, String],
  lastFixed: Boolean,
  noPadding: Boolean,
  tag: String,
  width: [Number, String],
  maxWidth: [Number, String],
  nowrap: Boolean
}, (props, _ref) => {
  var _a;
  let {
    slots
  } = _ref;
  const Tag = (_a = props.tag) != null ? _a : "td";
  return createVNode(Tag, {
    "class": normalizeClass(["v-data-table__td", {
      "v-data-table-column--fixed": props.fixed,
      "v-data-table-column--last-fixed": props.lastFixed,
      "v-data-table-column--no-padding": props.noPadding,
      "v-data-table-column--nowrap": props.nowrap
    }, `v-data-table-column--align-${props.align}`]),
    "style": {
      height: convertToUnit(props.height),
      width: convertToUnit(props.width),
      maxWidth: convertToUnit(props.maxWidth),
      left: convertToUnit(props.fixedOffset || null)
    }
  }, {
    default: () => {
      var _a2;
      return [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)];
    }
  });
});
const makeDataTableHeaderProps = propsFactory({
  headers: Array
}, "DataTable-header");
const VDataTableHeadersSymbol = Symbol.for("vuetify:data-table-headers");
const defaultHeader = {
  title: "",
  sortable: false
};
const defaultActionHeader = {
  ...defaultHeader,
  width: 48
};
function priorityQueue() {
  let arr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const queue = arr.map((element) => ({
    element,
    priority: 0
  }));
  return {
    enqueue: (element, priority) => {
      let added = false;
      for (let i = 0; i < queue.length; i++) {
        const item = queue[i];
        if (item.priority > priority) {
          queue.splice(i, 0, {
            element,
            priority
          });
          added = true;
          break;
        }
      }
      if (!added) queue.push({
        element,
        priority
      });
    },
    size: () => queue.length,
    count: () => {
      let count = 0;
      if (!queue.length) return 0;
      const whole = Math.floor(queue[0].priority);
      for (let i = 0; i < queue.length; i++) {
        if (Math.floor(queue[i].priority) === whole) count += 1;
      }
      return count;
    },
    dequeue: () => {
      return queue.shift();
    }
  };
}
function extractLeaves(item) {
  let columns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!item.children) {
    columns.push(item);
  } else {
    for (const child of item.children) {
      extractLeaves(child, columns);
    }
  }
  return columns;
}
function extractKeys(headers) {
  let keys2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const item of headers) {
    if (item.key) keys2.add(item.key);
    if (item.children) {
      extractKeys(item.children, keys2);
    }
  }
  return keys2;
}
function getDefaultItem(item) {
  if (!item.key) return void 0;
  if (item.key === "data-table-group") return defaultHeader;
  if (["data-table-expand", "data-table-select"].includes(item.key)) return defaultActionHeader;
  return void 0;
}
function getDepth(item) {
  let depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!item.children) return depth;
  return Math.max(depth, ...item.children.map((child) => getDepth(child, depth + 1)));
}
function parseFixedColumns(items) {
  let seenFixed = false;
  function setFixed(item) {
    let parentFixed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (!item) return;
    if (parentFixed) {
      item.fixed = true;
    }
    if (item.fixed) {
      if (item.children) {
        for (let i = item.children.length - 1; i >= 0; i--) {
          setFixed(item.children[i], true);
        }
      } else {
        if (!seenFixed) {
          item.lastFixed = true;
        } else if (isNaN(Number(item.width))) {
          consoleError(`Multiple fixed columns should have a static width (key: ${item.key})`);
        } else {
          item.minWidth = Math.max(Number(item.width) || 0, Number(item.minWidth) || 0);
        }
        seenFixed = true;
      }
    } else {
      if (item.children) {
        for (let i = item.children.length - 1; i >= 0; i--) {
          setFixed(item.children[i]);
        }
      } else {
        seenFixed = false;
      }
    }
  }
  for (let i = items.length - 1; i >= 0; i--) {
    setFixed(items[i]);
  }
  function setFixedOffset(item) {
    let fixedOffset2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (!item) return fixedOffset2;
    if (item.children) {
      item.fixedOffset = fixedOffset2;
      for (const child of item.children) {
        fixedOffset2 = setFixedOffset(child, fixedOffset2);
      }
    } else if (item.fixed) {
      item.fixedOffset = fixedOffset2;
      fixedOffset2 += parseFloat(item.width || "0") || 0;
    }
    return fixedOffset2;
  }
  let fixedOffset = 0;
  for (const item of items) {
    fixedOffset = setFixedOffset(item, fixedOffset);
  }
}
function parse(items, maxDepth) {
  const headers = [];
  let currentDepth = 0;
  const queue = priorityQueue(items);
  while (queue.size() > 0) {
    let rowSize = queue.count();
    const row = [];
    let fraction = 1;
    while (rowSize > 0) {
      const {
        element: item,
        priority
      } = queue.dequeue();
      const diff = maxDepth - currentDepth - getDepth(item);
      row.push({
        ...item,
        rowspan: diff != null ? diff : 1,
        colspan: item.children ? extractLeaves(item).length : 1
      });
      if (item.children) {
        for (const child of item.children) {
          const sort = priority % 1 + fraction / Math.pow(10, currentDepth + 2);
          queue.enqueue(child, currentDepth + diff + sort);
        }
      }
      fraction += 1;
      rowSize -= 1;
    }
    currentDepth += 1;
    headers.push(row);
  }
  const columns = items.map((item) => extractLeaves(item)).flat();
  return {
    columns,
    headers
  };
}
function convertToInternalHeaders(items) {
  var _a, _b, _c, _d;
  const internalHeaders = [];
  for (const item of items) {
    const defaultItem = {
      ...getDefaultItem(item),
      ...item
    };
    const key = (_a = defaultItem.key) != null ? _a : typeof defaultItem.value === "string" ? defaultItem.value : null;
    const value = (_c = (_b = defaultItem.value) != null ? _b : key) != null ? _c : null;
    const internalItem = {
      ...defaultItem,
      key,
      value,
      sortable: (_d = defaultItem.sortable) != null ? _d : defaultItem.key != null || !!defaultItem.sort,
      children: defaultItem.children ? convertToInternalHeaders(defaultItem.children) : void 0
    };
    internalHeaders.push(internalItem);
  }
  return internalHeaders;
}
function createHeaders(props, options) {
  const headers = ref([]);
  const columns = ref([]);
  const sortFunctions = ref({});
  const sortRawFunctions = ref({});
  const filterFunctions = ref({});
  watchEffect(() => {
    var _a2;
    var _a, _b, _c;
    const _headers = props.headers || Object.keys((_a2 = props.items[0]) != null ? _a2 : {}).map((key) => ({
      key,
      title: capitalize(key)
    }));
    const items = _headers.slice();
    const keys2 = extractKeys(items);
    if (((_a = options == null ? void 0 : options.groupBy) == null ? void 0 : _a.value.length) && !keys2.has("data-table-group")) {
      items.unshift({
        key: "data-table-group",
        title: "Group"
      });
    }
    if (((_b = options == null ? void 0 : options.showSelect) == null ? void 0 : _b.value) && !keys2.has("data-table-select")) {
      items.unshift({
        key: "data-table-select"
      });
    }
    if (((_c = options == null ? void 0 : options.showExpand) == null ? void 0 : _c.value) && !keys2.has("data-table-expand")) {
      items.push({
        key: "data-table-expand"
      });
    }
    const internalHeaders = convertToInternalHeaders(items);
    parseFixedColumns(internalHeaders);
    const maxDepth = Math.max(...internalHeaders.map((item) => getDepth(item))) + 1;
    const parsed = parse(internalHeaders, maxDepth);
    headers.value = parsed.headers;
    columns.value = parsed.columns;
    const flatHeaders = parsed.headers.flat(1);
    for (const header of flatHeaders) {
      if (!header.key) continue;
      if (header.sortable) {
        if (header.sort) {
          sortFunctions.value[header.key] = header.sort;
        }
        if (header.sortRaw) {
          sortRawFunctions.value[header.key] = header.sortRaw;
        }
      }
      if (header.filter) {
        filterFunctions.value[header.key] = header.filter;
      }
    }
  });
  const data = {
    headers,
    columns,
    sortFunctions,
    sortRawFunctions,
    filterFunctions
  };
  provide(VDataTableHeadersSymbol, data);
  return data;
}
function useHeaders() {
  const data = inject(VDataTableHeadersSymbol);
  if (!data) throw new Error("Missing headers!");
  return data;
}
const singleSelectStrategy = {
  showSelectAll: false,
  allSelected: () => [],
  select: (_ref) => {
    var _a;
    let {
      items,
      value
    } = _ref;
    return new Set(value ? [(_a = items[0]) == null ? void 0 : _a.value] : []);
  },
  selectAll: (_ref2) => {
    let {
      selected
    } = _ref2;
    return selected;
  }
};
const pageSelectStrategy = {
  showSelectAll: true,
  allSelected: (_ref3) => {
    let {
      currentPage
    } = _ref3;
    return currentPage;
  },
  select: (_ref4) => {
    let {
      items,
      value,
      selected
    } = _ref4;
    for (const item of items) {
      if (value) selected.add(item.value);
      else selected.delete(item.value);
    }
    return selected;
  },
  selectAll: (_ref5) => {
    let {
      value,
      currentPage,
      selected
    } = _ref5;
    return pageSelectStrategy.select({
      items: currentPage,
      value,
      selected
    });
  }
};
const allSelectStrategy = {
  showSelectAll: true,
  allSelected: (_ref6) => {
    let {
      allItems
    } = _ref6;
    return allItems;
  },
  select: (_ref7) => {
    let {
      items,
      value,
      selected
    } = _ref7;
    for (const item of items) {
      if (value) selected.add(item.value);
      else selected.delete(item.value);
    }
    return selected;
  },
  selectAll: (_ref8) => {
    let {
      value,
      allItems,
      selected
    } = _ref8;
    return allSelectStrategy.select({
      items: allItems,
      value,
      selected
    });
  }
};
const makeDataTableSelectProps = propsFactory({
  showSelect: Boolean,
  selectStrategy: {
    type: [String, Object],
    default: "page"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  valueComparator: {
    type: Function,
    default: deepEqual
  }
}, "DataTable-select");
const VDataTableSelectionSymbol = Symbol.for("vuetify:data-table-selection");
function provideSelection(props, _ref9) {
  let {
    allItems,
    currentPage
  } = _ref9;
  const selected = useProxiedModel(props, "modelValue", props.modelValue, (v) => {
    return new Set(wrapInArray(v).map((v2) => {
      var _a2;
      var _a;
      return (_a2 = (_a = allItems.value.find((item) => props.valueComparator(v2, item.value))) == null ? void 0 : _a.value) != null ? _a2 : v2;
    }));
  }, (v) => {
    return [...v.values()];
  });
  const allSelectable = computed(() => allItems.value.filter((item) => item.selectable));
  const currentPageSelectable = computed(() => currentPage.value.filter((item) => item.selectable));
  const selectStrategy = computed(() => {
    if (typeof props.selectStrategy === "object") return props.selectStrategy;
    switch (props.selectStrategy) {
      case "single":
        return singleSelectStrategy;
      case "all":
        return allSelectStrategy;
      case "page":
      default:
        return pageSelectStrategy;
    }
  });
  const lastSelectedIndex = shallowRef(null);
  function isSelected(items) {
    return wrapInArray(items).every((item) => selected.value.has(item.value));
  }
  function isSomeSelected(items) {
    return wrapInArray(items).some((item) => selected.value.has(item.value));
  }
  function select(items, value) {
    const newSelected = selectStrategy.value.select({
      items,
      value,
      selected: new Set(selected.value)
    });
    selected.value = newSelected;
  }
  function toggleSelect(item, index2, event) {
    const items = [];
    index2 = index2 != null ? index2 : currentPage.value.findIndex((i) => i.value === item.value);
    if (props.selectStrategy !== "single" && (event == null ? void 0 : event.shiftKey) && lastSelectedIndex.value !== null) {
      const [start, end] = [lastSelectedIndex.value, index2].sort((a, b) => a - b);
      items.push(...currentPage.value.slice(start, end + 1).filter((item2) => item2.selectable));
    } else {
      items.push(item);
      lastSelectedIndex.value = index2;
    }
    select(items, !isSelected([item]));
  }
  function selectAll(value) {
    const newSelected = selectStrategy.value.selectAll({
      value,
      allItems: allSelectable.value,
      currentPage: currentPageSelectable.value,
      selected: new Set(selected.value)
    });
    selected.value = newSelected;
  }
  const someSelected = computed(() => selected.value.size > 0);
  const allSelected = computed(() => {
    const items = selectStrategy.value.allSelected({
      allItems: allSelectable.value,
      currentPage: currentPageSelectable.value
    });
    return !!items.length && isSelected(items);
  });
  const showSelectAll = toRef(() => selectStrategy.value.showSelectAll);
  const data = {
    toggleSelect,
    select,
    selectAll,
    isSelected,
    isSomeSelected,
    someSelected,
    allSelected,
    showSelectAll,
    lastSelectedIndex,
    selectStrategy
  };
  provide(VDataTableSelectionSymbol, data);
  return data;
}
function useSelection() {
  const data = inject(VDataTableSelectionSymbol);
  if (!data) throw new Error("Missing selection!");
  return data;
}
const makeDataTableSortProps = propsFactory({
  sortBy: {
    type: Array,
    default: () => []
  },
  customKeySort: Object,
  multiSort: Boolean,
  mustSort: Boolean
}, "DataTable-sort");
const VDataTableSortSymbol = Symbol.for("vuetify:data-table-sort");
function createSort(props) {
  const sortBy = useProxiedModel(props, "sortBy");
  const mustSort = toRef(() => props.mustSort);
  const multiSort = toRef(() => props.multiSort);
  return {
    sortBy,
    mustSort,
    multiSort
  };
}
function provideSort(options) {
  const {
    sortBy,
    mustSort,
    multiSort,
    page
  } = options;
  const toggleSort = (column) => {
    var _a;
    if (column.key == null) return;
    let newSortBy = (_a = sortBy.value.map((x) => ({
      ...x
    }))) != null ? _a : [];
    const item = newSortBy.find((x) => x.key === column.key);
    if (!item) {
      if (multiSort.value) {
        newSortBy.push({
          key: column.key,
          order: "asc"
        });
      } else {
        newSortBy = [{
          key: column.key,
          order: "asc"
        }];
      }
    } else if (item.order === "desc") {
      if (mustSort.value && newSortBy.length === 1) {
        item.order = "asc";
      } else {
        newSortBy = newSortBy.filter((x) => x.key !== column.key);
      }
    } else {
      item.order = "desc";
    }
    sortBy.value = newSortBy;
    if (page) page.value = 1;
  };
  function isSorted(column) {
    return !!sortBy.value.find((item) => item.key === column.key);
  }
  const data = {
    sortBy,
    toggleSort,
    isSorted
  };
  provide(VDataTableSortSymbol, data);
  return data;
}
function useSort() {
  const data = inject(VDataTableSortSymbol);
  if (!data) throw new Error("Missing sort!");
  return data;
}
function useSortedItems(props, items, sortBy, options) {
  const locale = useLocale();
  const sortedItems = computed(() => {
    var _a, _b;
    if (!sortBy.value.length) return items.value;
    return sortItems(items.value, sortBy.value, locale.current.value, {
      transform: options == null ? void 0 : options.transform,
      sortFunctions: {
        ...props.customKeySort,
        ...(_a = options == null ? void 0 : options.sortFunctions) == null ? void 0 : _a.value
      },
      sortRawFunctions: (_b = options == null ? void 0 : options.sortRawFunctions) == null ? void 0 : _b.value
    });
  });
  return {
    sortedItems
  };
}
function sortItems(items, sortByItems, locale, options) {
  const stringCollator = new Intl.Collator(locale, {
    sensitivity: "accent",
    usage: "sort"
  });
  const transformedItems = items.map((item) => [item, (options == null ? void 0 : options.transform) ? options.transform(item) : item]);
  return transformedItems.sort((a, b) => {
    var _a2;
    var _a, _b;
    for (let i = 0; i < sortByItems.length; i++) {
      let hasCustomResult = false;
      const sortKey = sortByItems[i].key;
      const sortOrder = (_a2 = sortByItems[i].order) != null ? _a2 : "asc";
      if (sortOrder === false) continue;
      let sortA = getObjectValueByPath(a[1], sortKey);
      let sortB = getObjectValueByPath(b[1], sortKey);
      let sortARaw = a[0].raw;
      let sortBRaw = b[0].raw;
      if (sortOrder === "desc") {
        [sortA, sortB] = [sortB, sortA];
        [sortARaw, sortBRaw] = [sortBRaw, sortARaw];
      }
      if ((_a = options == null ? void 0 : options.sortRawFunctions) == null ? void 0 : _a[sortKey]) {
        const customResult = options.sortRawFunctions[sortKey](sortARaw, sortBRaw);
        if (customResult == null) continue;
        hasCustomResult = true;
        if (customResult) return customResult;
      }
      if ((_b = options == null ? void 0 : options.sortFunctions) == null ? void 0 : _b[sortKey]) {
        const customResult = options.sortFunctions[sortKey](sortA, sortB);
        if (customResult == null) continue;
        hasCustomResult = true;
        if (customResult) return customResult;
      }
      if (hasCustomResult) continue;
      if (sortA instanceof Date && sortB instanceof Date) {
        sortA = sortA.getTime();
        sortB = sortB.getTime();
      }
      [sortA, sortB] = [sortA, sortB].map((s) => s != null ? s.toString().toLocaleLowerCase() : s);
      if (sortA !== sortB) {
        if (isEmpty(sortA) && isEmpty(sortB)) return 0;
        if (isEmpty(sortA)) return -1;
        if (isEmpty(sortB)) return 1;
        if (!isNaN(sortA) && !isNaN(sortB)) return Number(sortA) - Number(sortB);
        return stringCollator.compare(sortA, sortB);
      }
    }
    return 0;
  }).map((_ref) => {
    let [item] = _ref;
    return item;
  });
}
const makeVDataTableHeadersProps = propsFactory({
  color: String,
  disableSort: Boolean,
  fixedHeader: Boolean,
  multiSort: Boolean,
  sortAscIcon: {
    type: IconValue,
    default: "$sortAsc"
  },
  sortDescIcon: {
    type: IconValue,
    default: "$sortDesc"
  },
  headerProps: {
    type: Object
  },
  /** @deprecated */
  sticky: Boolean,
  ...makeDisplayProps(),
  ...makeLoaderProps()
}, "VDataTableHeaders");
const VDataTableHeaders = genericComponent()({
  name: "VDataTableHeaders",
  props: makeVDataTableHeadersProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      toggleSort,
      sortBy,
      isSorted
    } = useSort();
    const {
      someSelected,
      allSelected,
      selectAll,
      showSelectAll
    } = useSelection();
    const {
      columns,
      headers
    } = useHeaders();
    const {
      loaderClasses
    } = useLoader(props);
    function getFixedStyles(column, y) {
      if (!(props.sticky || props.fixedHeader) && !column.fixed) return void 0;
      return {
        position: "sticky",
        left: column.fixed ? convertToUnit(column.fixedOffset) : void 0,
        top: props.sticky || props.fixedHeader ? `calc(var(--v-table-header-height) * ${y})` : void 0
      };
    }
    function handleEnterKeyPress(event, column) {
      if (event.key === "Enter" && !props.disableSort) {
        toggleSort(column);
      }
    }
    function getSortIcon(column) {
      const item = sortBy.value.find((item2) => item2.key === column.key);
      if (!item) return props.sortAscIcon;
      return item.order === "asc" ? props.sortAscIcon : props.sortDescIcon;
    }
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      displayClasses,
      mobile
    } = useDisplay(props);
    const slotProps = computed(() => ({
      headers: headers.value,
      columns: columns.value,
      toggleSort,
      isSorted,
      sortBy: sortBy.value,
      someSelected: someSelected.value,
      allSelected: allSelected.value,
      selectAll,
      getSortIcon
    }));
    const headerCellClasses = computed(() => ["v-data-table__th", {
      "v-data-table__th--sticky": props.sticky || props.fixedHeader
    }, displayClasses.value, loaderClasses.value]);
    const VDataTableHeaderCell = (_ref2) => {
      var _a, _b;
      let {
        column,
        x,
        y
      } = _ref2;
      const noPadding = column.key === "data-table-select" || column.key === "data-table-expand";
      const headerProps = mergeProps((_a = props.headerProps) != null ? _a : {}, (_b = column.headerProps) != null ? _b : {});
      return createVNode(VDataTableColumn, mergeProps({
        "tag": "th",
        "align": column.align,
        "class": [{
          "v-data-table__th--sortable": column.sortable && !props.disableSort,
          "v-data-table__th--sorted": isSorted(column),
          "v-data-table__th--fixed": column.fixed
        }, ...headerCellClasses.value],
        "style": {
          width: convertToUnit(column.width),
          minWidth: convertToUnit(column.minWidth),
          maxWidth: convertToUnit(column.maxWidth),
          ...getFixedStyles(column, y)
        },
        "colspan": column.colspan,
        "rowspan": column.rowspan,
        "fixed": column.fixed,
        "nowrap": column.nowrap,
        "lastFixed": column.lastFixed,
        "noPadding": noPadding,
        "tabindex": column.sortable ? 0 : void 0,
        "onClick": column.sortable ? () => toggleSort(column) : void 0,
        "onKeydown": column.sortable ? (event) => handleEnterKeyPress(event, column) : void 0
      }, headerProps), {
        default: () => {
          var _a3;
          var _a2;
          const columnSlotName = `header.${column.key}`;
          const columnSlotProps = {
            column,
            selectAll,
            isSorted,
            toggleSort,
            sortBy: sortBy.value,
            someSelected: someSelected.value,
            allSelected: allSelected.value,
            getSortIcon
          };
          if (slots[columnSlotName]) return slots[columnSlotName](columnSlotProps);
          if (column.key === "data-table-select") {
            return (_a3 = (_a2 = slots["header.data-table-select"]) == null ? void 0 : _a2.call(slots, columnSlotProps)) != null ? _a3 : showSelectAll.value && createVNode(VCheckboxBtn, {
              "modelValue": allSelected.value,
              "indeterminate": someSelected.value && !allSelected.value,
              "onUpdate:modelValue": selectAll
            }, null);
          }
          return createElementVNode("div", {
            "class": "v-data-table-header__content"
          }, [createElementVNode("span", null, [column.title]), column.sortable && !props.disableSort && createVNode(VIcon, {
            "key": "icon",
            "class": "v-data-table-header__sort-icon",
            "icon": getSortIcon(column)
          }, null), props.multiSort && isSorted(column) && createElementVNode("div", {
            "key": "badge",
            "class": normalizeClass(["v-data-table-header__sort-badge", ...backgroundColorClasses.value]),
            "style": normalizeStyle(backgroundColorStyles.value)
          }, [sortBy.value.findIndex((x2) => x2.key === column.key) + 1])]);
        }
      });
    };
    const VDataTableMobileHeaderCell = () => {
      const displayItems = computed(() => {
        return columns.value.filter((column) => (column == null ? void 0 : column.sortable) && !props.disableSort);
      });
      const appendIcon = computed(() => {
        const showSelectColumn = columns.value.find((column) => column.key === "data-table-select");
        if (showSelectColumn == null) return;
        return allSelected.value ? "$checkboxOn" : someSelected.value ? "$checkboxIndeterminate" : "$checkboxOff";
      });
      return createVNode(VDataTableColumn, mergeProps({
        "tag": "th",
        "class": [...headerCellClasses.value],
        "colspan": headers.value.length + 1
      }, props.headerProps), {
        default: () => [createElementVNode("div", {
          "class": "v-data-table-header__content"
        }, [createVNode(VSelect, {
          "chips": true,
          "class": "v-data-table__td-sort-select",
          "clearable": true,
          "density": "default",
          "items": displayItems.value,
          "label": t("$vuetify.dataTable.sortBy"),
          "multiple": props.multiSort,
          "variant": "underlined",
          "onClick:clear": () => sortBy.value = [],
          "appendIcon": appendIcon.value,
          "onClick:append": () => selectAll(!allSelected.value)
        }, {
          ...slots,
          chip: (props2) => {
            var _a;
            return createVNode(VChip, {
              "onClick": ((_a = props2.item.raw) == null ? void 0 : _a.sortable) ? () => toggleSort(props2.item.raw) : void 0,
              "onMousedown": (e) => {
                e.preventDefault();
                e.stopPropagation();
              }
            }, {
              default: () => [props2.item.title, createVNode(VIcon, {
                "class": normalizeClass(["v-data-table__td-sort-icon", isSorted(props2.item.raw) && "v-data-table__td-sort-icon-active"]),
                "icon": getSortIcon(props2.item.raw),
                "size": "small"
              }, null)]
            });
          }
        })])]
      });
    };
    useRender(() => {
      return mobile.value ? createElementVNode("tr", null, [createVNode(VDataTableMobileHeaderCell, null, null)]) : createElementVNode(Fragment, null, [slots.headers ? slots.headers(slotProps.value) : headers.value.map((row, y) => createElementVNode("tr", null, [row.map((column, x) => createVNode(VDataTableHeaderCell, {
        "column": column,
        "x": x,
        "y": y
      }, null))])), props.loading && createElementVNode("tr", {
        "class": "v-data-table-progress"
      }, [createElementVNode("th", {
        "colspan": columns.value.length
      }, [createVNode(LoaderSlot, {
        "name": "v-data-table-progress",
        "absolute": true,
        "active": true,
        "color": typeof props.loading === "boolean" ? void 0 : props.loading,
        "indeterminate": true
      }, {
        default: slots.loader
      })])])]);
    });
  }
});
const makeDataTableGroupProps = propsFactory({
  groupBy: {
    type: Array,
    default: () => []
  }
}, "DataTable-group");
const VDataTableGroupSymbol = Symbol.for("vuetify:data-table-group");
function createGroupBy(props) {
  const groupBy = useProxiedModel(props, "groupBy");
  return {
    groupBy
  };
}
function provideGroupBy(options) {
  const {
    disableSort,
    groupBy,
    sortBy
  } = options;
  const opened = ref(/* @__PURE__ */ new Set());
  const sortByWithGroups = computed(() => {
    return groupBy.value.map((val) => {
      var _a;
      return {
        ...val,
        order: (_a = val.order) != null ? _a : false
      };
    }).concat((disableSort == null ? void 0 : disableSort.value) ? [] : sortBy.value);
  });
  function isGroupOpen(group) {
    return opened.value.has(group.id);
  }
  function toggleGroup(group) {
    const newOpened = new Set(opened.value);
    if (!isGroupOpen(group)) newOpened.add(group.id);
    else newOpened.delete(group.id);
    opened.value = newOpened;
  }
  function extractRows(items) {
    function dive(group) {
      const arr = [];
      for (const item of group.items) {
        if ("type" in item && item.type === "group") {
          arr.push(...dive(item));
        } else {
          arr.push(item);
        }
      }
      return [...new Set(arr)];
    }
    return dive({
      items
    });
  }
  const data = {
    sortByWithGroups,
    toggleGroup,
    opened,
    groupBy,
    extractRows,
    isGroupOpen
  };
  provide(VDataTableGroupSymbol, data);
  return data;
}
function useGroupBy() {
  const data = inject(VDataTableGroupSymbol);
  if (!data) throw new Error("Missing group!");
  return data;
}
function groupItemsByProperty(items, groupBy) {
  if (!items.length) return [];
  const groups = /* @__PURE__ */ new Map();
  for (const item of items) {
    const value = getObjectValueByPath(item.raw, groupBy);
    if (!groups.has(value)) {
      groups.set(value, []);
    }
    groups.get(value).push(item);
  }
  return groups;
}
function groupItems(items, groupBy) {
  let depth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  let prefix = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!groupBy.length) return [];
  const groupedItems = groupItemsByProperty(items, groupBy[0]);
  const groups = [];
  const rest = groupBy.slice(1);
  groupedItems.forEach((items2, value) => {
    const key = groupBy[0];
    const id = `${prefix}_${key}_${value}`;
    groups.push({
      depth,
      id,
      key,
      value,
      items: rest.length ? groupItems(items2, rest, depth + 1, id) : items2,
      type: "group"
    });
  });
  return groups;
}
function flattenItems(items, opened) {
  const flatItems = [];
  for (const item of items) {
    if ("type" in item && item.type === "group") {
      if (item.value != null) {
        flatItems.push(item);
      }
      if (opened.has(item.id) || item.value == null) {
        flatItems.push(...flattenItems(item.items, opened));
      }
    } else {
      flatItems.push(item);
    }
  }
  return flatItems;
}
function useGroupedItems(items, groupBy, opened) {
  const flatItems = computed(() => {
    if (!groupBy.value.length) return items.value;
    const groupedItems = groupItems(items.value, groupBy.value.map((item) => item.key));
    return flattenItems(groupedItems, opened.value);
  });
  return {
    flatItems
  };
}
const makeVDataTableGroupHeaderRowProps = propsFactory({
  item: {
    type: Object,
    required: true
  }
}, "VDataTableGroupHeaderRow");
const VDataTableGroupHeaderRow = genericComponent()({
  name: "VDataTableGroupHeaderRow",
  props: makeVDataTableGroupHeaderRowProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      isGroupOpen,
      toggleGroup,
      extractRows
    } = useGroupBy();
    const {
      isSelected,
      isSomeSelected,
      select
    } = useSelection();
    const {
      columns
    } = useHeaders();
    const rows = computed(() => {
      return extractRows([props.item]);
    });
    return () => createElementVNode("tr", {
      "class": "v-data-table-group-header-row",
      "style": {
        "--v-data-table-group-header-row-depth": props.item.depth
      }
    }, [columns.value.map((column) => {
      var _a2, _b2;
      var _a, _b;
      if (column.key === "data-table-group") {
        const icon = isGroupOpen(props.item) ? "$expand" : "$next";
        const onClick = () => toggleGroup(props.item);
        return (_a2 = (_a = slots["data-table-group"]) == null ? void 0 : _a.call(slots, {
          item: props.item,
          count: rows.value.length,
          props: {
            icon,
            onClick
          }
        })) != null ? _a2 : createVNode(VDataTableColumn, {
          "class": "v-data-table-group-header-row__column"
        }, {
          default: () => [createVNode(VBtn, {
            "size": "small",
            "variant": "text",
            "icon": icon,
            "onClick": onClick
          }, null), createElementVNode("span", null, [props.item.value]), createElementVNode("span", null, [createTextVNode("("), rows.value.length, createTextVNode(")")])]
        });
      }
      if (column.key === "data-table-select") {
        const modelValue = isSelected(rows.value);
        const indeterminate = isSomeSelected(rows.value) && !modelValue;
        const selectGroup = (v) => select(rows.value, v);
        return (_b2 = (_b = slots["data-table-select"]) == null ? void 0 : _b.call(slots, {
          props: {
            modelValue,
            indeterminate,
            "onUpdate:modelValue": selectGroup
          }
        })) != null ? _b2 : createElementVNode("td", null, [createVNode(VCheckboxBtn, {
          "modelValue": modelValue,
          "indeterminate": indeterminate,
          "onUpdate:modelValue": selectGroup
        }, null)]);
      }
      return createElementVNode("td", null, null);
    })]);
  }
});
const makeDataTableExpandProps = propsFactory({
  expandOnClick: Boolean,
  showExpand: Boolean,
  expanded: {
    type: Array,
    default: () => []
  }
}, "DataTable-expand");
const VDataTableExpandedKey = Symbol.for("vuetify:datatable:expanded");
function provideExpanded(props) {
  const expandOnClick = toRef(() => props.expandOnClick);
  const expanded = useProxiedModel(props, "expanded", props.expanded, (v) => {
    return new Set(v);
  }, (v) => {
    return [...v.values()];
  });
  function expand(item, value) {
    const newExpanded = new Set(expanded.value);
    if (!value) {
      newExpanded.delete(item.value);
    } else {
      newExpanded.add(item.value);
    }
    expanded.value = newExpanded;
  }
  function isExpanded(item) {
    return expanded.value.has(item.value);
  }
  function toggleExpand(item) {
    expand(item, !isExpanded(item));
  }
  const data = {
    expand,
    expanded,
    expandOnClick,
    isExpanded,
    toggleExpand
  };
  provide(VDataTableExpandedKey, data);
  return data;
}
function useExpanded() {
  const data = inject(VDataTableExpandedKey);
  if (!data) throw new Error("foo");
  return data;
}
const makeVDataTableRowProps = propsFactory({
  index: Number,
  item: Object,
  cellProps: [Object, Function],
  onClick: EventProp(),
  onContextmenu: EventProp(),
  onDblclick: EventProp(),
  ...makeDisplayProps()
}, "VDataTableRow");
const VDataTableRow = genericComponent()({
  name: "VDataTableRow",
  props: makeVDataTableRowProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      displayClasses,
      mobile
    } = useDisplay(props, "v-data-table__tr");
    const {
      isSelected,
      toggleSelect,
      someSelected,
      allSelected,
      selectAll
    } = useSelection();
    const {
      isExpanded,
      toggleExpand
    } = useExpanded();
    const {
      toggleSort,
      sortBy,
      isSorted
    } = useSort();
    const {
      columns
    } = useHeaders();
    useRender(() => createElementVNode("tr", {
      "class": normalizeClass(["v-data-table__tr", {
        "v-data-table__tr--clickable": !!(props.onClick || props.onContextmenu || props.onDblclick)
      }, displayClasses.value]),
      "onClick": props.onClick,
      "onContextmenu": props.onContextmenu,
      "onDblclick": props.onDblclick
    }, [props.item && columns.value.map((column, i) => {
      const item = props.item;
      const slotName = `item.${column.key}`;
      const headerSlotName = `header.${column.key}`;
      const slotProps = {
        index: props.index,
        item: item.raw,
        internalItem: item,
        value: getObjectValueByPath(item.columns, column.key),
        column,
        isSelected,
        toggleSelect,
        isExpanded,
        toggleExpand
      };
      const columnSlotProps = {
        column,
        selectAll,
        isSorted,
        toggleSort,
        sortBy: sortBy.value,
        someSelected: someSelected.value,
        allSelected: allSelected.value,
        getSortIcon: () => ""
      };
      const cellProps = typeof props.cellProps === "function" ? props.cellProps({
        index: slotProps.index,
        item: slotProps.item,
        internalItem: slotProps.internalItem,
        value: slotProps.value,
        column
      }) : props.cellProps;
      const columnCellProps = typeof column.cellProps === "function" ? column.cellProps({
        index: slotProps.index,
        item: slotProps.item,
        internalItem: slotProps.internalItem,
        value: slotProps.value
      }) : column.cellProps;
      return createVNode(VDataTableColumn, mergeProps({
        "align": column.align,
        "class": {
          "v-data-table__td--expanded-row": column.key === "data-table-expand",
          "v-data-table__td--select-row": column.key === "data-table-select"
        },
        "fixed": column.fixed,
        "fixedOffset": column.fixedOffset,
        "lastFixed": column.lastFixed,
        "maxWidth": !mobile.value ? column.maxWidth : void 0,
        "noPadding": column.key === "data-table-select" || column.key === "data-table-expand",
        "nowrap": column.nowrap,
        "width": !mobile.value ? column.width : void 0
      }, cellProps, columnCellProps), {
        default: () => {
          var _a2, _b2, _c2, _d2;
          var _a, _b, _c, _d;
          if (column.key === "data-table-select") {
            return (_a2 = (_a = slots["item.data-table-select"]) == null ? void 0 : _a.call(slots, {
              ...slotProps,
              props: {
                disabled: !item.selectable,
                modelValue: isSelected([item]),
                onClick: withModifiers(() => toggleSelect(item), ["stop"])
              }
            })) != null ? _a2 : createVNode(VCheckboxBtn, {
              "disabled": !item.selectable,
              "modelValue": isSelected([item]),
              "onClick": withModifiers((event) => toggleSelect(item, props.index, event), ["stop"])
            }, null);
          }
          if (column.key === "data-table-expand") {
            return (_b2 = (_b = slots["item.data-table-expand"]) == null ? void 0 : _b.call(slots, {
              ...slotProps,
              props: {
                icon: isExpanded(item) ? "$collapse" : "$expand",
                size: "small",
                variant: "text",
                onClick: withModifiers(() => toggleExpand(item), ["stop"])
              }
            })) != null ? _b2 : createVNode(VBtn, {
              "icon": isExpanded(item) ? "$collapse" : "$expand",
              "size": "small",
              "variant": "text",
              "onClick": withModifiers(() => toggleExpand(item), ["stop"])
            }, null);
          }
          if (slots[slotName] && !mobile.value) return slots[slotName](slotProps);
          const displayValue = toDisplayString(slotProps.value);
          return !mobile.value ? displayValue : createElementVNode(Fragment, null, [createElementVNode("div", {
            "class": "v-data-table__td-title"
          }, [(_c2 = (_c = slots[headerSlotName]) == null ? void 0 : _c.call(slots, columnSlotProps)) != null ? _c2 : column.title]), createElementVNode("div", {
            "class": "v-data-table__td-value"
          }, [(_d2 = (_d = slots[slotName]) == null ? void 0 : _d.call(slots, slotProps)) != null ? _d2 : displayValue])]);
        }
      });
    })]));
  }
});
const makeVDataTableRowsProps = propsFactory({
  loading: [Boolean, String],
  loadingText: {
    type: String,
    default: "$vuetify.dataIterator.loadingText"
  },
  hideNoData: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  ...makeDisplayProps()
}, "VDataTableRows");
const VDataTableRows = genericComponent()({
  name: "VDataTableRows",
  inheritAttrs: false,
  props: makeVDataTableRowsProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      columns
    } = useHeaders();
    const {
      expandOnClick,
      toggleExpand,
      isExpanded
    } = useExpanded();
    const {
      isSelected,
      toggleSelect
    } = useSelection();
    const {
      toggleGroup,
      isGroupOpen
    } = useGroupBy();
    const {
      t
    } = useLocale();
    const {
      mobile
    } = useDisplay(props);
    useRender(() => {
      var _a2, _b2;
      var _a, _b;
      if (props.loading && (!props.items.length || slots.loading)) {
        return createElementVNode("tr", {
          "class": "v-data-table-rows-loading",
          "key": "loading"
        }, [createElementVNode("td", {
          "colspan": columns.value.length
        }, [(_a2 = (_a = slots.loading) == null ? void 0 : _a.call(slots)) != null ? _a2 : t(props.loadingText)])]);
      }
      if (!props.loading && !props.items.length && !props.hideNoData) {
        return createElementVNode("tr", {
          "class": "v-data-table-rows-no-data",
          "key": "no-data"
        }, [createElementVNode("td", {
          "colspan": columns.value.length
        }, [(_b2 = (_b = slots["no-data"]) == null ? void 0 : _b.call(slots)) != null ? _b2 : t(props.noDataText)])]);
      }
      return createElementVNode(Fragment, null, [props.items.map((item, index2) => {
        var _a3;
        var _a22;
        if (item.type === "group") {
          const slotProps2 = {
            index: index2,
            item,
            columns: columns.value,
            isExpanded,
            toggleExpand,
            isSelected,
            toggleSelect,
            toggleGroup,
            isGroupOpen
          };
          return slots["group-header"] ? slots["group-header"](slotProps2) : createVNode(VDataTableGroupHeaderRow, mergeProps({
            "key": `group-header_${item.id}`,
            "item": item
          }, getPrefixedEventHandlers(attrs, ":group-header", () => slotProps2)), slots);
        }
        const slotProps = {
          index: index2,
          item: item.raw,
          internalItem: item,
          columns: columns.value,
          isExpanded,
          toggleExpand,
          isSelected,
          toggleSelect
        };
        const itemSlotProps = {
          ...slotProps,
          props: mergeProps({
            key: `item_${(_a3 = item.key) != null ? _a3 : item.index}`,
            onClick: expandOnClick.value ? () => {
              toggleExpand(item);
            } : void 0,
            index: index2,
            item,
            cellProps: props.cellProps,
            mobile: mobile.value
          }, getPrefixedEventHandlers(attrs, ":row", () => slotProps), typeof props.rowProps === "function" ? props.rowProps({
            item: slotProps.item,
            index: slotProps.index,
            internalItem: slotProps.internalItem
          }) : props.rowProps)
        };
        return createElementVNode(Fragment, {
          "key": itemSlotProps.props.key
        }, [slots.item ? slots.item(itemSlotProps) : createVNode(VDataTableRow, itemSlotProps.props, slots), isExpanded(item) && ((_a22 = slots["expanded-row"]) == null ? void 0 : _a22.call(slots, slotProps))]);
      })]);
    });
    return {};
  }
});
const makeVTableProps = propsFactory({
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean,
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VTable");
const VTable = genericComponent()({
  name: "VTable",
  props: makeVTableProps(),
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-table", {
        "v-table--fixed-height": !!props.height,
        "v-table--fixed-header": props.fixedHeader,
        "v-table--fixed-footer": props.fixedFooter,
        "v-table--has-top": !!slots.top,
        "v-table--has-bottom": !!slots.bottom,
        "v-table--hover": props.hover
      }, themeClasses.value, densityClasses.value, props.class]),
      "style": normalizeStyle(props.style)
    }, {
      default: () => {
        var _a, _b, _c;
        return [(_a = slots.top) == null ? void 0 : _a.call(slots), slots.default ? createElementVNode("div", {
          "class": "v-table__wrapper",
          "style": {
            height: convertToUnit(props.height)
          }
        }, [createElementVNode("table", null, [slots.default()])]) : (_b = slots.wrapper) == null ? void 0 : _b.call(slots), (_c = slots.bottom) == null ? void 0 : _c.call(slots)];
      }
    }));
    return {};
  }
});
const makeDataTableItemsProps = propsFactory({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  returnObject: Boolean
}, "DataTable-items");
function transformItem(props, item, index2, columns) {
  const value = props.returnObject ? item : getPropertyFromItem(item, props.itemValue);
  const selectable = getPropertyFromItem(item, props.itemSelectable, true);
  const itemColumns = columns.reduce((obj, column) => {
    if (column.key != null) obj[column.key] = getPropertyFromItem(item, column.value);
    return obj;
  }, {});
  return {
    type: "item",
    key: props.returnObject ? getPropertyFromItem(item, props.itemValue) : value,
    index: index2,
    value,
    selectable,
    columns: itemColumns,
    raw: item
  };
}
function transformItems(props, items, columns) {
  return items.map((item, index2) => transformItem(props, item, index2, columns));
}
function useDataTableItems(props, columns) {
  const items = computed(() => transformItems(props, props.items, columns.value));
  return {
    items
  };
}
function useOptions(_ref) {
  let {
    page,
    itemsPerPage,
    sortBy,
    groupBy,
    search
  } = _ref;
  const vm = getCurrentInstance("VDataTable");
  const options = () => ({
    page: page.value,
    itemsPerPage: itemsPerPage.value,
    sortBy: sortBy.value,
    groupBy: groupBy.value,
    search: search.value
  });
  let oldOptions = null;
  watch(options, (value) => {
    if (deepEqual(oldOptions, value)) return;
    if (oldOptions && oldOptions.search !== value.search) {
      page.value = 1;
    }
    vm.emit("update:options", value);
    oldOptions = value;
  }, {
    deep: true,
    immediate: true
  });
}
const defaultFilter = (value, query, item) => {
  if (value == null || query == null) return -1;
  if (!query.length) return 0;
  value = value.toString().toLocaleLowerCase();
  query = query.toString().toLocaleLowerCase();
  const result = [];
  let idx = value.indexOf(query);
  while (~idx) {
    result.push([idx, idx + query.length]);
    idx = value.indexOf(query, idx + query.length);
  }
  return result.length ? result : -1;
};
function normaliseMatch(match, query) {
  if (match == null || typeof match === "boolean" || match === -1) return;
  if (typeof match === "number") return [[match, match + query.length]];
  if (Array.isArray(match[0])) return match;
  return [match];
}
const makeFilterProps = propsFactory({
  customFilter: Function,
  customKeyFilter: Object,
  filterKeys: [Array, String],
  filterMode: {
    type: String,
    default: "intersection"
  },
  noFilter: Boolean
}, "filter");
function filterItems(items, query, options) {
  var _a2, _b;
  var _a;
  const array = [];
  const filter = (_a2 = options == null ? void 0 : options.default) != null ? _a2 : defaultFilter;
  const keys2 = (options == null ? void 0 : options.filterKeys) ? wrapInArray(options.filterKeys) : false;
  const customFiltersLength = Object.keys((_b = options == null ? void 0 : options.customKeyFilter) != null ? _b : {}).length;
  if (!(items == null ? void 0 : items.length)) return array;
  loop: for (let i = 0; i < items.length; i++) {
    const [item, transformed = item] = wrapInArray(items[i]);
    const customMatches = {};
    const defaultMatches = {};
    let match = -1;
    if ((query || customFiltersLength > 0) && !(options == null ? void 0 : options.noFilter)) {
      if (typeof item === "object") {
        const filterKeys = keys2 || Object.keys(transformed);
        for (const key of filterKeys) {
          const value = getPropertyFromItem(transformed, key);
          const keyFilter = (_a = options == null ? void 0 : options.customKeyFilter) == null ? void 0 : _a[key];
          match = keyFilter ? keyFilter(value, query, item) : filter(value, query, item);
          if (match !== -1 && match !== false) {
            if (keyFilter) customMatches[key] = normaliseMatch(match, query);
            else defaultMatches[key] = normaliseMatch(match, query);
          } else if ((options == null ? void 0 : options.filterMode) === "every") {
            continue loop;
          }
        }
      } else {
        match = filter(item, query, item);
        if (match !== -1 && match !== false) {
          defaultMatches.title = normaliseMatch(match, query);
        }
      }
      const defaultMatchesLength = Object.keys(defaultMatches).length;
      const customMatchesLength = Object.keys(customMatches).length;
      if (!defaultMatchesLength && !customMatchesLength) continue;
      if ((options == null ? void 0 : options.filterMode) === "union" && customMatchesLength !== customFiltersLength && !defaultMatchesLength) continue;
      if ((options == null ? void 0 : options.filterMode) === "intersection" && (customMatchesLength !== customFiltersLength || !defaultMatchesLength)) continue;
    }
    array.push({
      index: i,
      matches: {
        ...defaultMatches,
        ...customMatches
      }
    });
  }
  return array;
}
function useFilter(props, items, query, options) {
  const filteredItems = shallowRef([]);
  const filteredMatches = shallowRef(/* @__PURE__ */ new Map());
  const transformedItems = computed(() => (options == null ? void 0 : options.transform) ? unref(items).map((item) => [item, options.transform(item)]) : unref(items));
  watchEffect(() => {
    const _query = typeof query === "function" ? query() : unref(query);
    const strQuery = typeof _query !== "string" && typeof _query !== "number" ? "" : String(_query);
    const results = filterItems(transformedItems.value, strQuery, {
      customKeyFilter: {
        ...props.customKeyFilter,
        ...unref(options == null ? void 0 : options.customKeyFilter)
      },
      default: props.customFilter,
      filterKeys: props.filterKeys,
      filterMode: props.filterMode,
      noFilter: props.noFilter
    });
    const originalItems = unref(items);
    const _filteredItems = [];
    const _filteredMatches = /* @__PURE__ */ new Map();
    results.forEach((_ref) => {
      let {
        index: index2,
        matches
      } = _ref;
      const item = originalItems[index2];
      _filteredItems.push(item);
      _filteredMatches.set(item.value, matches);
    });
    filteredItems.value = _filteredItems;
    filteredMatches.value = _filteredMatches;
  });
  function getMatches(item) {
    return filteredMatches.value.get(item.value);
  }
  return {
    filteredItems,
    filteredMatches,
    getMatches
  };
}
const makeDataTableProps = propsFactory({
  ...makeVDataTableRowsProps(),
  hideDefaultBody: Boolean,
  hideDefaultFooter: Boolean,
  hideDefaultHeader: Boolean,
  width: [String, Number],
  search: String,
  ...makeDataTableExpandProps(),
  ...makeDataTableGroupProps(),
  ...makeDataTableHeaderProps(),
  ...makeDataTableItemsProps(),
  ...makeDataTableSelectProps(),
  ...makeDataTableSortProps(),
  ...makeVDataTableHeadersProps(),
  ...makeVTableProps()
}, "DataTable");
const makeVDataTableProps = propsFactory({
  ...makeDataTablePaginateProps(),
  ...makeDataTableProps(),
  ...makeFilterProps(),
  ...makeVDataTableFooterProps()
}, "VDataTable");
const VDataTable = genericComponent()({
  name: "VDataTable",
  props: makeVDataTableProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:page": (value) => true,
    "update:itemsPerPage": (value) => true,
    "update:sortBy": (value) => true,
    "update:options": (value) => true,
    "update:groupBy": (value) => true,
    "update:expanded": (value) => true,
    "update:currentItems": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      groupBy
    } = createGroupBy(props);
    const {
      sortBy,
      multiSort,
      mustSort
    } = createSort(props);
    const {
      page,
      itemsPerPage
    } = createPagination(props);
    const {
      disableSort
    } = toRefs(props);
    const {
      columns,
      headers,
      sortFunctions,
      sortRawFunctions,
      filterFunctions
    } = createHeaders(props, {
      groupBy,
      showSelect: toRef(() => props.showSelect),
      showExpand: toRef(() => props.showExpand)
    });
    const {
      items
    } = useDataTableItems(props, columns);
    const search = toRef(() => props.search);
    const {
      filteredItems
    } = useFilter(props, items, search, {
      transform: (item) => item.columns,
      customKeyFilter: filterFunctions
    });
    const {
      toggleSort
    } = provideSort({
      sortBy,
      multiSort,
      mustSort,
      page
    });
    const {
      sortByWithGroups,
      opened,
      extractRows,
      isGroupOpen,
      toggleGroup
    } = provideGroupBy({
      groupBy,
      sortBy,
      disableSort
    });
    const {
      sortedItems
    } = useSortedItems(props, filteredItems, sortByWithGroups, {
      transform: (item) => ({
        ...item.raw,
        ...item.columns
      }),
      sortFunctions,
      sortRawFunctions
    });
    const {
      flatItems
    } = useGroupedItems(sortedItems, groupBy, opened);
    const itemsLength = computed(() => flatItems.value.length);
    const {
      startIndex,
      stopIndex,
      pageCount,
      setItemsPerPage
    } = providePagination({
      page,
      itemsPerPage,
      itemsLength
    });
    const {
      paginatedItems
    } = usePaginatedItems({
      items: flatItems,
      startIndex,
      stopIndex,
      itemsPerPage
    });
    const paginatedItemsWithoutGroups = computed(() => extractRows(paginatedItems.value));
    const {
      isSelected,
      select,
      selectAll,
      toggleSelect,
      someSelected,
      allSelected
    } = provideSelection(props, {
      allItems: items,
      currentPage: paginatedItemsWithoutGroups
    });
    const {
      isExpanded,
      toggleExpand
    } = provideExpanded(props);
    useOptions({
      page,
      itemsPerPage,
      sortBy,
      groupBy,
      search
    });
    provideDefaults({
      VDataTableRows: {
        hideNoData: toRef(() => props.hideNoData),
        noDataText: toRef(() => props.noDataText),
        loading: toRef(() => props.loading),
        loadingText: toRef(() => props.loadingText)
      }
    });
    const slotProps = computed(() => ({
      page: page.value,
      itemsPerPage: itemsPerPage.value,
      sortBy: sortBy.value,
      pageCount: pageCount.value,
      toggleSort,
      setItemsPerPage,
      someSelected: someSelected.value,
      allSelected: allSelected.value,
      isSelected,
      select,
      selectAll,
      toggleSelect,
      isExpanded,
      toggleExpand,
      isGroupOpen,
      toggleGroup,
      items: paginatedItemsWithoutGroups.value.map((item) => item.raw),
      internalItems: paginatedItemsWithoutGroups.value,
      groupedItems: paginatedItems.value,
      columns: columns.value,
      headers: headers.value
    }));
    useRender(() => {
      const dataTableFooterProps = VDataTableFooter.filterProps(props);
      const dataTableHeadersProps = VDataTableHeaders.filterProps(props);
      const dataTableRowsProps = VDataTableRows.filterProps(props);
      const tableProps = VTable.filterProps(props);
      return createVNode(VTable, mergeProps({
        "class": ["v-data-table", {
          "v-data-table--show-select": props.showSelect,
          "v-data-table--loading": props.loading
        }, props.class],
        "style": props.style
      }, tableProps, {
        "fixedHeader": props.fixedHeader || props.sticky
      }), {
        top: () => {
          var _a;
          return (_a = slots.top) == null ? void 0 : _a.call(slots, slotProps.value);
        },
        default: () => {
          var _a, _b, _c, _d, _e, _f;
          return slots.default ? slots.default(slotProps.value) : createElementVNode(Fragment, null, [(_a = slots.colgroup) == null ? void 0 : _a.call(slots, slotProps.value), !props.hideDefaultHeader && createElementVNode("thead", {
            "key": "thead"
          }, [createVNode(VDataTableHeaders, dataTableHeadersProps, slots)]), (_b = slots.thead) == null ? void 0 : _b.call(slots, slotProps.value), !props.hideDefaultBody && createElementVNode("tbody", null, [(_c = slots["body.prepend"]) == null ? void 0 : _c.call(slots, slotProps.value), slots.body ? slots.body(slotProps.value) : createVNode(VDataTableRows, mergeProps(attrs, dataTableRowsProps, {
            "items": paginatedItems.value
          }), slots), (_d = slots["body.append"]) == null ? void 0 : _d.call(slots, slotProps.value)]), (_e = slots.tbody) == null ? void 0 : _e.call(slots, slotProps.value), (_f = slots.tfoot) == null ? void 0 : _f.call(slots, slotProps.value)]);
        },
        bottom: () => slots.bottom ? slots.bottom(slotProps.value) : !props.hideDefaultFooter && createElementVNode(Fragment, null, [createVNode(VDivider, null, null), createVNode(VDataTableFooter, dataTableFooterProps, {
          prepend: slots["footer.prepend"]
        })])
      });
    });
    return {};
  }
});
const makeVFormProps = propsFactory({
  ...makeComponentProps(),
  ...makeFormProps()
}, "VForm");
const VForm = genericComponent()({
  name: "VForm",
  props: makeVFormProps(),
  emits: {
    "update:modelValue": (val) => true,
    submit: (e) => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const form = createForm(props);
    const formRef = ref();
    function onReset(e) {
      e.preventDefault();
      form.reset();
    }
    function onSubmit(_e) {
      const e = _e;
      const ready = form.validate();
      e.then = ready.then.bind(ready);
      e.catch = ready.catch.bind(ready);
      e.finally = ready.finally.bind(ready);
      emit("submit", e);
      if (!e.defaultPrevented) {
        ready.then((_ref2) => {
          var _a;
          let {
            valid
          } = _ref2;
          if (valid) {
            (_a = formRef.value) == null ? void 0 : _a.submit();
          }
        });
      }
      e.preventDefault();
    }
    useRender(() => {
      var _a;
      return createElementVNode("form", {
        "ref": formRef,
        "class": normalizeClass(["v-form", props.class]),
        "style": normalizeStyle(props.style),
        "novalidate": true,
        "onReset": onReset,
        "onSubmit": onSubmit
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots, form)]);
    });
    return forwardRefs(form, formRef);
  }
});
const makeVTextareaProps = propsFactory({
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: (v) => !isNaN(parseFloat(v))
  },
  maxRows: {
    type: [Number, String],
    validator: (v) => !isNaN(parseFloat(v))
  },
  suffix: String,
  modelModifiers: Object,
  ...makeVInputProps(),
  ...makeVFieldProps()
}, "VTextarea");
const VTextarea = genericComponent()({
  name: "VTextarea",
  directives: {
    vIntersect: Intersect
  },
  inheritAttrs: false,
  props: makeVTextareaProps(),
  emits: {
    "click:control": (e) => true,
    "mousedown:control": (e) => true,
    "update:focused": (focused) => true,
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const {
      onIntersect
    } = useAutofocus(props);
    const counterValue = computed(() => {
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : (model.value || "").toString().length;
    });
    const max = computed(() => {
      if (attrs.maxlength) return attrs.maxlength;
      if (!props.counter || typeof props.counter !== "number" && typeof props.counter !== "string") return void 0;
      return props.counter;
    });
    const vInputRef = ref();
    const vFieldRef = ref();
    const controlHeight = shallowRef("");
    const textareaRef = ref();
    const isActive = computed(() => props.persistentPlaceholder || isFocused.value || props.active);
    function onFocus() {
      var _a;
      if (textareaRef.value !== (void 0).activeElement) {
        (_a = textareaRef.value) == null ? void 0 : _a.focus();
      }
      if (!isFocused.value) focus();
    }
    function onControlClick(e) {
      onFocus();
      emit("click:control", e);
    }
    function onControlMousedown(e) {
      emit("mousedown:control", e);
    }
    function onClear(e) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        model.value = "";
        callEvent(props["onClick:clear"], e);
      });
    }
    function onInput(e) {
      var _a;
      const el = e.target;
      model.value = el.value;
      if ((_a = props.modelModifiers) == null ? void 0 : _a.trim) {
        const caretPosition = [el.selectionStart, el.selectionEnd];
        nextTick(() => {
          el.selectionStart = caretPosition[0];
          el.selectionEnd = caretPosition[1];
        });
      }
    }
    const sizerRef = ref();
    const rows = ref(Number(props.rows));
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    watchEffect(() => {
      if (!props.autoGrow) rows.value = Number(props.rows);
    });
    function calculateInputHeight() {
      if (!props.autoGrow) return;
      nextTick(() => {
        if (!sizerRef.value || !vFieldRef.value) return;
        const style = getComputedStyle(sizerRef.value);
        const fieldStyle = getComputedStyle(vFieldRef.value.$el);
        const padding = parseFloat(style.getPropertyValue("--v-field-padding-top")) + parseFloat(style.getPropertyValue("--v-input-padding-top")) + parseFloat(style.getPropertyValue("--v-field-padding-bottom"));
        const height = sizerRef.value.scrollHeight;
        const lineHeight = parseFloat(style.lineHeight);
        const minHeight = Math.max(parseFloat(props.rows) * lineHeight + padding, parseFloat(fieldStyle.getPropertyValue("--v-input-control-height")));
        const maxHeight = parseFloat(props.maxRows) * lineHeight + padding || Infinity;
        const newHeight = clamp(height != null ? height : 0, minHeight, maxHeight);
        rows.value = Math.floor((newHeight - padding) / lineHeight);
        controlHeight.value = convertToUnit(newHeight);
      });
    }
    watch(model, calculateInputHeight);
    watch(() => props.rows, calculateInputHeight);
    watch(() => props.maxRows, calculateInputHeight);
    watch(() => props.density, calculateInputHeight);
    let observer;
    watch(sizerRef, (val) => {
      if (val) {
        observer = new ResizeObserver(calculateInputHeight);
        observer.observe(sizerRef.value);
      } else {
        observer == null ? void 0 : observer.disconnect();
      }
    });
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter || props.counterValue);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const {
        modelValue: _,
        ...inputProps
      } = VInput.filterProps(props);
      const fieldProps = VField.filterProps(props);
      return createVNode(VInput, mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-textarea v-text-field", {
          "v-textarea--prefixed": props.prefix,
          "v-textarea--suffixed": props.suffix,
          "v-text-field--prefixed": props.prefix,
          "v-text-field--suffixed": props.suffix,
          "v-textarea--auto-grow": props.autoGrow,
          "v-textarea--no-resize": props.noResize || props.autoGrow,
          "v-input--plain-underlined": isPlainOrUnderlined.value
        }, props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
        "focused": isFocused.value
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id,
            isDisabled,
            isDirty,
            isReadonly,
            isValid
          } = _ref2;
          return createVNode(VField, mergeProps({
            "ref": vFieldRef,
            "style": {
              "--v-textarea-control-height": controlHeight.value
            },
            "onClick": onControlClick,
            "onMousedown": onControlMousedown,
            "onClick:clear": onClear,
            "onClick:prependInner": props["onClick:prependInner"],
            "onClick:appendInner": props["onClick:appendInner"]
          }, fieldProps, {
            "id": id.value,
            "active": isActive.value || isDirty.value,
            "centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
            "dirty": isDirty.value || props.dirty,
            "disabled": isDisabled.value,
            "focused": isFocused.value,
            "error": isValid.value === false
          }), {
            ...slots,
            default: (_ref3) => {
              let {
                props: {
                  class: fieldClass,
                  ...slotProps
                }
              } = _ref3;
              return createElementVNode(Fragment, null, [props.prefix && createElementVNode("span", {
                "class": "v-text-field__prefix"
              }, [props.prefix]), withDirectives(createElementVNode("textarea", mergeProps({
                "ref": textareaRef,
                "class": fieldClass,
                "value": model.value,
                "onInput": onInput,
                "autofocus": props.autofocus,
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "placeholder": props.placeholder,
                "rows": props.rows,
                "name": props.name,
                "onFocus": onFocus,
                "onBlur": blur
              }, slotProps, inputAttrs), null), [[Intersect, {
                handler: onIntersect
              }, null, {
                once: true
              }]]), props.autoGrow && withDirectives(createElementVNode("textarea", {
                "class": normalizeClass([fieldClass, "v-textarea__sizer"]),
                "id": `${slotProps.id}-sizer`,
                "onUpdate:modelValue": ($event) => model.value = $event,
                "ref": sizerRef,
                "readonly": true,
                "aria-hidden": "true"
              }, null), [[vModelText, model.value]]), props.suffix && createElementVNode("span", {
                "class": "v-text-field__suffix"
              }, [props.suffix])]);
            }
          });
        },
        details: hasDetails ? (slotProps) => {
          var _a;
          return createElementVNode(Fragment, null, [(_a = slots.details) == null ? void 0 : _a.call(slots, slotProps), hasCounter && createElementVNode(Fragment, null, [createElementVNode("span", null, null), createVNode(VCounter, {
            "active": props.persistentCounter || isFocused.value,
            "value": counterValue.value,
            "max": max.value,
            "disabled": props.disabled
          }, slots.counter)])]);
        } : void 0
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, textareaRef);
  }
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ArticleManager",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    const searchQuery = ref("");
    const selectedCategory = ref("");
    const showCreateDialog = ref(false);
    const showPreviewDialog = ref(false);
    const showDeleteDialog = ref(false);
    const formValid = ref(false);
    const showMessage = ref(false);
    const message = ref("");
    const messageType = ref("success");
    const articles = ref([]);
    const editingArticle = ref(null);
    const previewArticle = ref(null);
    const deleteTarget = ref(null);
    const articleForm = ref({
      title: "",
      date: "",
      category: "",
      excerpt: "",
      content: "",
      readTime: "",
      tags: ""
    });
    const headers = [
      { title: "\u6807\u9898", key: "title", sortable: true },
      { title: "\u5206\u7C7B", key: "category", sortable: true },
      { title: "\u53D1\u5E03\u65E5\u671F", key: "date", sortable: true },
      { title: "\u9605\u8BFB\u65F6\u95F4", key: "readTime", sortable: false },
      { title: "\u64CD\u4F5C", key: "actions", sortable: false, width: "120" }
    ];
    const categoryOptions = [
      "\u4F01\u696D\u30CB\u30E5\u30FC\u30B9",
      "\u30B5\u30FC\u30D3\u30B9",
      "\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D",
      "\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8",
      "\u91E3\u5177\u30FB\u5668\u5177",
      "LAB\u30FB\u7814\u7A76\u958B\u767A",
      "\u30AF\u30E9\u30D6\u6D3B\u52D5"
    ];
    const rules = {
      required: (value) => !!value || "\u6B64\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879"
    };
    const filteredArticles = computed(() => {
      let filtered = articles.value;
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(
          (article) => article.title.toLowerCase().includes(query) || article.excerpt.toLowerCase().includes(query) || article.category.toLowerCase().includes(query)
        );
      }
      if (selectedCategory.value) {
        filtered = filtered.filter(
          (article) => article.category === selectedCategory.value
        );
      }
      return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    });
    const saveArticles = () => {
      try {
        localStorage.setItem("notrace_articles", JSON.stringify(articles.value));
      } catch (error) {
        console.error("Failed to save articles:", error);
        showMessage.value = true;
        message.value = "\u4FDD\u5B58\u5931\u8D25";
        messageType.value = "error";
      }
    };
    const formatDate = (dateString) => {
      const date = new Date(dateString.replace(/\./g, "-"));
      return date.toLocaleDateString("zh-CN");
    };
    const getCategoryColor = (category) => {
      const colors = {
        "\u4F01\u696D\u30CB\u30E5\u30FC\u30B9": "blue",
        "\u30B5\u30FC\u30D3\u30B9": "green",
        "\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D": "brown",
        "\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8": "purple",
        "\u91E3\u5177\u30FB\u5668\u5177": "orange",
        "LAB\u30FB\u7814\u7A76\u958B\u767A": "red",
        "\u30AF\u30E9\u30D6\u6D3B\u52D5": "pink"
      };
      return colors[category] || "grey";
    };
    const viewArticle = (article) => {
      previewArticle.value = article;
      showPreviewDialog.value = true;
    };
    const editArticle = (article) => {
      editingArticle.value = article;
      articleForm.value = {
        title: article.title,
        date: article.date.replace(/\./g, "-"),
        category: article.category,
        excerpt: article.excerpt,
        content: article.content,
        readTime: article.readTime,
        tags: article.tags.join(", ")
      };
      showCreateDialog.value = true;
    };
    const confirmDelete = (article) => {
      deleteTarget.value = article;
      showDeleteDialog.value = true;
    };
    const deleteArticle = () => {
      if (deleteTarget.value) {
        const index2 = articles.value.findIndex((a) => a.id === deleteTarget.value.id);
        if (index2 !== -1) {
          articles.value.splice(index2, 1);
          saveArticles();
          showMessage.value = true;
          message.value = "\u6587\u7AE0\u5DF2\u5220\u9664";
          messageType.value = "success";
        }
      }
      showDeleteDialog.value = false;
      deleteTarget.value = null;
    };
    const saveArticle = () => {
      var _a;
      if (!formValid.value) return;
      const articleData = {
        id: ((_a = editingArticle.value) == null ? void 0 : _a.id) || Date.now(),
        title: articleForm.value.title,
        date: articleForm.value.date.replace(/-/g, "."),
        category: articleForm.value.category,
        excerpt: articleForm.value.excerpt,
        content: articleForm.value.content,
        readTime: articleForm.value.readTime || "\u9605\u8BFB\u65F6\u95F4\u672A\u8BBE\u7F6E",
        tags: articleForm.value.tags.split(",").map((tag) => tag.trim()).filter(Boolean)
      };
      if (editingArticle.value) {
        const index2 = articles.value.findIndex((a) => a.id === editingArticle.value.id);
        if (index2 !== -1) {
          articles.value[index2] = articleData;
          showMessage.value = true;
          message.value = "\u6587\u7AE0\u5DF2\u66F4\u65B0";
          messageType.value = "success";
        }
      } else {
        articles.value.unshift(articleData);
        showMessage.value = true;
        message.value = "\u6587\u7AE0\u5DF2\u521B\u5EFA";
        messageType.value = "success";
      }
      saveArticles();
      cancelEdit();
    };
    const cancelEdit = () => {
      showCreateDialog.value = false;
      editingArticle.value = null;
      articleForm.value = {
        title: "",
        date: "",
        category: "",
        excerpt: "",
        content: "",
        readTime: "",
        tags: ""
      };
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "article-manager" }, _attrs))} data-v-c31da707><div class="toolbar" data-v-c31da707><div class="toolbar-left" data-v-c31da707>`);
      _push(ssrRenderComponent(VTextField, {
        modelValue: searchQuery.value,
        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
        label: "\u641C\u7D22\u6587\u7AE0",
        "prepend-icon": "mdi-magnify",
        variant: "outlined",
        density: "compact",
        class: "search-field",
        clearable: ""
      }, null, _parent));
      _push(ssrRenderComponent(VSelect, {
        modelValue: selectedCategory.value,
        "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
        label: "\u7B5B\u9009\u5206\u7C7B",
        items: categoryOptions,
        variant: "outlined",
        density: "compact",
        class: "category-filter",
        clearable: ""
      }, null, _parent));
      _push(`</div><div class="toolbar-right" data-v-c31da707>`);
      _push(ssrRenderComponent(VBtn, {
        color: "primary",
        onClick: ($event) => showCreateDialog.value = true,
        "prepend-icon": "mdi-plus"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u65B0\u5EFA\u6587\u7AE0 `);
          } else {
            return [
              createTextVNode(" \u65B0\u5EFA\u6587\u7AE0 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { start: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-newspaper`);
                      } else {
                        return [
                          createTextVNode("mdi-newspaper")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` \u6587\u7AE0\u5217\u8868 `);
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VChip, {
                    color: "primary",
                    size: "small"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(filteredArticles.value.length)} \u7BC7\u6587\u7AE0 `);
                      } else {
                        return [
                          createTextVNode(toDisplayString(filteredArticles.value.length) + " \u7BC7\u6587\u7AE0 ", 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, { start: "" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-newspaper")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" \u6587\u7AE0\u5217\u8868 "),
                    createVNode(VSpacer),
                    createVNode(VChip, {
                      color: "primary",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(filteredArticles.value.length) + " \u7BC7\u6587\u7AE0 ", 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDataTable, {
              headers,
              items: filteredArticles.value,
              loading: loading.value,
              "item-key": "id",
              class: "article-table",
              "no-data-text": "\u6682\u65E0\u6587\u7AE0",
              "loading-text": "\u52A0\u8F7D\u4E2D..."
            }, {
              "item.title": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="article-title" data-v-c31da707${_scopeId2}><div class="title-text" data-v-c31da707${_scopeId2}>${ssrInterpolate(item.title)}</div><div class="excerpt" data-v-c31da707${_scopeId2}>${ssrInterpolate(item.excerpt)}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "article-title" }, [
                      createVNode("div", { class: "title-text" }, toDisplayString(item.title), 1),
                      createVNode("div", { class: "excerpt" }, toDisplayString(item.excerpt), 1)
                    ])
                  ];
                }
              }),
              "item.category": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VChip, {
                    color: getCategoryColor(item.category),
                    size: "small",
                    variant: "tonal"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(item.category)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.category), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VChip, {
                      color: getCategoryColor(item.category),
                      size: "small",
                      variant: "tonal"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.category), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ];
                }
              }),
              "item.date": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(formatDate(item.date))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(formatDate(item.date)), 1)
                  ];
                }
              }),
              "item.readTime": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VChip, {
                    size: "small",
                    variant: "outlined"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(item.readTime)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.readTime), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VChip, {
                      size: "small",
                      variant: "outlined"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.readTime), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              "item.actions": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="action-buttons" data-v-c31da707${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    icon: "mdi-eye",
                    size: "small",
                    variant: "text",
                    onClick: ($event) => viewArticle(item),
                    title: "\u67E5\u770B"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    icon: "mdi-pencil",
                    size: "small",
                    variant: "text",
                    onClick: ($event) => editArticle(item),
                    title: "\u7F16\u8F91"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    icon: "mdi-delete",
                    size: "small",
                    variant: "text",
                    color: "error",
                    onClick: ($event) => confirmDelete(item),
                    title: "\u5220\u9664"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "action-buttons" }, [
                      createVNode(VBtn, {
                        icon: "mdi-eye",
                        size: "small",
                        variant: "text",
                        onClick: ($event) => viewArticle(item),
                        title: "\u67E5\u770B"
                      }, null, 8, ["onClick"]),
                      createVNode(VBtn, {
                        icon: "mdi-pencil",
                        size: "small",
                        variant: "text",
                        onClick: ($event) => editArticle(item),
                        title: "\u7F16\u8F91"
                      }, null, 8, ["onClick"]),
                      createVNode(VBtn, {
                        icon: "mdi-delete",
                        size: "small",
                        variant: "text",
                        color: "error",
                        onClick: ($event) => confirmDelete(item),
                        title: "\u5220\u9664"
                      }, null, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardTitle, { class: "d-flex align-center" }, {
                default: withCtx(() => [
                  createVNode(VIcon, { start: "" }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-newspaper")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" \u6587\u7AE0\u5217\u8868 "),
                  createVNode(VSpacer),
                  createVNode(VChip, {
                    color: "primary",
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(filteredArticles.value.length) + " \u7BC7\u6587\u7AE0 ", 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDataTable, {
                headers,
                items: filteredArticles.value,
                loading: loading.value,
                "item-key": "id",
                class: "article-table",
                "no-data-text": "\u6682\u65E0\u6587\u7AE0",
                "loading-text": "\u52A0\u8F7D\u4E2D..."
              }, {
                "item.title": withCtx(({ item }) => [
                  createVNode("div", { class: "article-title" }, [
                    createVNode("div", { class: "title-text" }, toDisplayString(item.title), 1),
                    createVNode("div", { class: "excerpt" }, toDisplayString(item.excerpt), 1)
                  ])
                ]),
                "item.category": withCtx(({ item }) => [
                  createVNode(VChip, {
                    color: getCategoryColor(item.category),
                    size: "small",
                    variant: "tonal"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.category), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "item.date": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(formatDate(item.date)), 1)
                ]),
                "item.readTime": withCtx(({ item }) => [
                  createVNode(VChip, {
                    size: "small",
                    variant: "outlined"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.readTime), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                "item.actions": withCtx(({ item }) => [
                  createVNode("div", { class: "action-buttons" }, [
                    createVNode(VBtn, {
                      icon: "mdi-eye",
                      size: "small",
                      variant: "text",
                      onClick: ($event) => viewArticle(item),
                      title: "\u67E5\u770B"
                    }, null, 8, ["onClick"]),
                    createVNode(VBtn, {
                      icon: "mdi-pencil",
                      size: "small",
                      variant: "text",
                      onClick: ($event) => editArticle(item),
                      title: "\u7F16\u8F91"
                    }, null, 8, ["onClick"]),
                    createVNode(VBtn, {
                      icon: "mdi-delete",
                      size: "small",
                      variant: "text",
                      color: "error",
                      onClick: ($event) => confirmDelete(item),
                      title: "\u5220\u9664"
                    }, null, 8, ["onClick"])
                  ])
                ]),
                _: 1
              }, 8, ["items", "loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: showCreateDialog.value,
        "onUpdate:modelValue": ($event) => showCreateDialog.value = $event,
        "max-width": "1000",
        persistent: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { start: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(editingArticle.value ? "mdi-pencil" : "mdi-plus")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(editingArticle.value ? "mdi-pencil" : "mdi-plus"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` ${ssrInterpolate(editingArticle.value ? "\u7F16\u8F91\u6587\u7AE0" : "\u65B0\u5EFA\u6587\u7AE0")}`);
                      } else {
                        return [
                          createVNode(VIcon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(editingArticle.value ? "mdi-pencil" : "mdi-plus"), 1)
                            ]),
                            _: 1
                          }),
                          createTextVNode(" " + toDisplayString(editingArticle.value ? "\u7F16\u8F91\u6587\u7AE0" : "\u65B0\u5EFA\u6587\u7AE0"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VForm, {
                          ref_key: "articleForm",
                          ref: articleForm,
                          modelValue: formValid.value,
                          "onUpdate:modelValue": ($event) => formValid.value = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "8"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: articleForm.value.title,
                                            "onUpdate:modelValue": ($event) => articleForm.value.title = $event,
                                            label: "\u6587\u7AE0\u6807\u9898",
                                            rules: [rules.required],
                                            variant: "outlined",
                                            required: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: articleForm.value.title,
                                              "onUpdate:modelValue": ($event) => articleForm.value.title = $event,
                                              label: "\u6587\u7AE0\u6807\u9898",
                                              rules: [rules.required],
                                              variant: "outlined",
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: articleForm.value.date,
                                            "onUpdate:modelValue": ($event) => articleForm.value.date = $event,
                                            label: "\u53D1\u5E03\u65E5\u671F",
                                            type: "date",
                                            rules: [rules.required],
                                            variant: "outlined",
                                            required: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: articleForm.value.date,
                                              "onUpdate:modelValue": ($event) => articleForm.value.date = $event,
                                              label: "\u53D1\u5E03\u65E5\u671F",
                                              type: "date",
                                              rules: [rules.required],
                                              variant: "outlined",
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "8"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: articleForm.value.title,
                                            "onUpdate:modelValue": ($event) => articleForm.value.title = $event,
                                            label: "\u6587\u7AE0\u6807\u9898",
                                            rules: [rules.required],
                                            variant: "outlined",
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: articleForm.value.date,
                                            "onUpdate:modelValue": ($event) => articleForm.value.date = $event,
                                            label: "\u53D1\u5E03\u65E5\u671F",
                                            type: "date",
                                            rules: [rules.required],
                                            variant: "outlined",
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: articleForm.value.category,
                                            "onUpdate:modelValue": ($event) => articleForm.value.category = $event,
                                            label: "\u6587\u7AE0\u5206\u7C7B",
                                            items: categoryOptions,
                                            rules: [rules.required],
                                            variant: "outlined",
                                            required: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: articleForm.value.category,
                                              "onUpdate:modelValue": ($event) => articleForm.value.category = $event,
                                              label: "\u6587\u7AE0\u5206\u7C7B",
                                              items: categoryOptions,
                                              rules: [rules.required],
                                              variant: "outlined",
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: articleForm.value.readTime,
                                            "onUpdate:modelValue": ($event) => articleForm.value.readTime = $event,
                                            label: "\u9605\u8BFB\u65F6\u95F4",
                                            placeholder: "\u4F8B\u5982: 3\u5206\u949F",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: articleForm.value.readTime,
                                              "onUpdate:modelValue": ($event) => articleForm.value.readTime = $event,
                                              label: "\u9605\u8BFB\u65F6\u95F4",
                                              placeholder: "\u4F8B\u5982: 3\u5206\u949F",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: articleForm.value.category,
                                            "onUpdate:modelValue": ($event) => articleForm.value.category = $event,
                                            label: "\u6587\u7AE0\u5206\u7C7B",
                                            items: categoryOptions,
                                            rules: [rules.required],
                                            variant: "outlined",
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: articleForm.value.readTime,
                                            "onUpdate:modelValue": ($event) => articleForm.value.readTime = $event,
                                            label: "\u9605\u8BFB\u65F6\u95F4",
                                            placeholder: "\u4F8B\u5982: 3\u5206\u949F",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: articleForm.value.tags,
                                            "onUpdate:modelValue": ($event) => articleForm.value.tags = $event,
                                            label: "\u6807\u7B7E (\u7528\u9017\u53F7\u5206\u9694)",
                                            placeholder: "\u4F8B\u5982: \u4F01\u4E1A\u65B0\u95FB, \u4EA7\u54C1\u66F4\u65B0",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: articleForm.value.tags,
                                              "onUpdate:modelValue": ($event) => articleForm.value.tags = $event,
                                              label: "\u6807\u7B7E (\u7528\u9017\u53F7\u5206\u9694)",
                                              placeholder: "\u4F8B\u5982: \u4F01\u4E1A\u65B0\u95FB, \u4EA7\u54C1\u66F4\u65B0",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: articleForm.value.tags,
                                            "onUpdate:modelValue": ($event) => articleForm.value.tags = $event,
                                            label: "\u6807\u7B7E (\u7528\u9017\u53F7\u5206\u9694)",
                                            placeholder: "\u4F8B\u5982: \u4F01\u4E1A\u65B0\u95FB, \u4EA7\u54C1\u66F4\u65B0",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextarea, {
                                            modelValue: articleForm.value.excerpt,
                                            "onUpdate:modelValue": ($event) => articleForm.value.excerpt = $event,
                                            label: "\u6587\u7AE0\u6458\u8981",
                                            rules: [rules.required],
                                            variant: "outlined",
                                            rows: "3",
                                            counter: "200",
                                            required: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextarea, {
                                              modelValue: articleForm.value.excerpt,
                                              "onUpdate:modelValue": ($event) => articleForm.value.excerpt = $event,
                                              label: "\u6587\u7AE0\u6458\u8981",
                                              rules: [rules.required],
                                              variant: "outlined",
                                              rows: "3",
                                              counter: "200",
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextarea, {
                                            modelValue: articleForm.value.excerpt,
                                            "onUpdate:modelValue": ($event) => articleForm.value.excerpt = $event,
                                            label: "\u6587\u7AE0\u6458\u8981",
                                            rules: [rules.required],
                                            variant: "outlined",
                                            rows: "3",
                                            counter: "200",
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextarea, {
                                            modelValue: articleForm.value.content,
                                            "onUpdate:modelValue": ($event) => articleForm.value.content = $event,
                                            label: "\u6587\u7AE0\u5185\u5BB9 (\u652F\u6301HTML)",
                                            rules: [rules.required],
                                            variant: "outlined",
                                            rows: "10",
                                            required: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextarea, {
                                              modelValue: articleForm.value.content,
                                              "onUpdate:modelValue": ($event) => articleForm.value.content = $event,
                                              label: "\u6587\u7AE0\u5185\u5BB9 (\u652F\u6301HTML)",
                                              rules: [rules.required],
                                              variant: "outlined",
                                              rows: "10",
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextarea, {
                                            modelValue: articleForm.value.content,
                                            "onUpdate:modelValue": ($event) => articleForm.value.content = $event,
                                            label: "\u6587\u7AE0\u5185\u5BB9 (\u652F\u6301HTML)",
                                            rules: [rules.required],
                                            variant: "outlined",
                                            rows: "10",
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "8"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: articleForm.value.title,
                                          "onUpdate:modelValue": ($event) => articleForm.value.title = $event,
                                          label: "\u6587\u7AE0\u6807\u9898",
                                          rules: [rules.required],
                                          variant: "outlined",
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: articleForm.value.date,
                                          "onUpdate:modelValue": ($event) => articleForm.value.date = $event,
                                          label: "\u53D1\u5E03\u65E5\u671F",
                                          type: "date",
                                          rules: [rules.required],
                                          variant: "outlined",
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: articleForm.value.category,
                                          "onUpdate:modelValue": ($event) => articleForm.value.category = $event,
                                          label: "\u6587\u7AE0\u5206\u7C7B",
                                          items: categoryOptions,
                                          rules: [rules.required],
                                          variant: "outlined",
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: articleForm.value.readTime,
                                          "onUpdate:modelValue": ($event) => articleForm.value.readTime = $event,
                                          label: "\u9605\u8BFB\u65F6\u95F4",
                                          placeholder: "\u4F8B\u5982: 3\u5206\u949F",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: articleForm.value.tags,
                                          "onUpdate:modelValue": ($event) => articleForm.value.tags = $event,
                                          label: "\u6807\u7B7E (\u7528\u9017\u53F7\u5206\u9694)",
                                          placeholder: "\u4F8B\u5982: \u4F01\u4E1A\u65B0\u95FB, \u4EA7\u54C1\u66F4\u65B0",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextarea, {
                                          modelValue: articleForm.value.excerpt,
                                          "onUpdate:modelValue": ($event) => articleForm.value.excerpt = $event,
                                          label: "\u6587\u7AE0\u6458\u8981",
                                          rules: [rules.required],
                                          variant: "outlined",
                                          rows: "3",
                                          counter: "200",
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextarea, {
                                          modelValue: articleForm.value.content,
                                          "onUpdate:modelValue": ($event) => articleForm.value.content = $event,
                                          label: "\u6587\u7AE0\u5185\u5BB9 (\u652F\u6301HTML)",
                                          rules: [rules.required],
                                          variant: "outlined",
                                          rows: "10",
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VForm, {
                            ref_key: "articleForm",
                            ref: articleForm,
                            modelValue: formValid.value,
                            "onUpdate:modelValue": ($event) => formValid.value = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "8"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: articleForm.value.title,
                                        "onUpdate:modelValue": ($event) => articleForm.value.title = $event,
                                        label: "\u6587\u7AE0\u6807\u9898",
                                        rules: [rules.required],
                                        variant: "outlined",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: articleForm.value.date,
                                        "onUpdate:modelValue": ($event) => articleForm.value.date = $event,
                                        label: "\u53D1\u5E03\u65E5\u671F",
                                        type: "date",
                                        rules: [rules.required],
                                        variant: "outlined",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: articleForm.value.category,
                                        "onUpdate:modelValue": ($event) => articleForm.value.category = $event,
                                        label: "\u6587\u7AE0\u5206\u7C7B",
                                        items: categoryOptions,
                                        rules: [rules.required],
                                        variant: "outlined",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: articleForm.value.readTime,
                                        "onUpdate:modelValue": ($event) => articleForm.value.readTime = $event,
                                        label: "\u9605\u8BFB\u65F6\u95F4",
                                        placeholder: "\u4F8B\u5982: 3\u5206\u949F",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: articleForm.value.tags,
                                        "onUpdate:modelValue": ($event) => articleForm.value.tags = $event,
                                        label: "\u6807\u7B7E (\u7528\u9017\u53F7\u5206\u9694)",
                                        placeholder: "\u4F8B\u5982: \u4F01\u4E1A\u65B0\u95FB, \u4EA7\u54C1\u66F4\u65B0",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextarea, {
                                        modelValue: articleForm.value.excerpt,
                                        "onUpdate:modelValue": ($event) => articleForm.value.excerpt = $event,
                                        label: "\u6587\u7AE0\u6458\u8981",
                                        rules: [rules.required],
                                        variant: "outlined",
                                        rows: "3",
                                        counter: "200",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextarea, {
                                        modelValue: articleForm.value.content,
                                        "onUpdate:modelValue": ($event) => articleForm.value.content = $event,
                                        label: "\u6587\u7AE0\u5185\u5BB9 (\u652F\u6301HTML)",
                                        rules: [rules.required],
                                        variant: "outlined",
                                        rows: "10",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, { onClick: cancelEdit }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u53D6\u6D88`);
                            } else {
                              return [
                                createTextVNode("\u53D6\u6D88")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          disabled: !formValid.value,
                          onClick: saveArticle
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(editingArticle.value ? "\u4FDD\u5B58" : "\u521B\u5EFA")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(editingArticle.value ? "\u4FDD\u5B58" : "\u521B\u5EFA"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, { onClick: cancelEdit }, {
                            default: withCtx(() => [
                              createTextVNode("\u53D6\u6D88")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "primary",
                            disabled: !formValid.value,
                            onClick: saveArticle
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(editingArticle.value ? "\u4FDD\u5B58" : "\u521B\u5EFA"), 1)
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "d-flex align-center" }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(editingArticle.value ? "mdi-pencil" : "mdi-plus"), 1)
                          ]),
                          _: 1
                        }),
                        createTextVNode(" " + toDisplayString(editingArticle.value ? "\u7F16\u8F91\u6587\u7AE0" : "\u65B0\u5EFA\u6587\u7AE0"), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VForm, {
                          ref_key: "articleForm",
                          ref: articleForm,
                          modelValue: formValid.value,
                          "onUpdate:modelValue": ($event) => formValid.value = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "8"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: articleForm.value.title,
                                      "onUpdate:modelValue": ($event) => articleForm.value.title = $event,
                                      label: "\u6587\u7AE0\u6807\u9898",
                                      rules: [rules.required],
                                      variant: "outlined",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: articleForm.value.date,
                                      "onUpdate:modelValue": ($event) => articleForm.value.date = $event,
                                      label: "\u53D1\u5E03\u65E5\u671F",
                                      type: "date",
                                      rules: [rules.required],
                                      variant: "outlined",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: articleForm.value.category,
                                      "onUpdate:modelValue": ($event) => articleForm.value.category = $event,
                                      label: "\u6587\u7AE0\u5206\u7C7B",
                                      items: categoryOptions,
                                      rules: [rules.required],
                                      variant: "outlined",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: articleForm.value.readTime,
                                      "onUpdate:modelValue": ($event) => articleForm.value.readTime = $event,
                                      label: "\u9605\u8BFB\u65F6\u95F4",
                                      placeholder: "\u4F8B\u5982: 3\u5206\u949F",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: articleForm.value.tags,
                                      "onUpdate:modelValue": ($event) => articleForm.value.tags = $event,
                                      label: "\u6807\u7B7E (\u7528\u9017\u53F7\u5206\u9694)",
                                      placeholder: "\u4F8B\u5982: \u4F01\u4E1A\u65B0\u95FB, \u4EA7\u54C1\u66F4\u65B0",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextarea, {
                                      modelValue: articleForm.value.excerpt,
                                      "onUpdate:modelValue": ($event) => articleForm.value.excerpt = $event,
                                      label: "\u6587\u7AE0\u6458\u8981",
                                      rules: [rules.required],
                                      variant: "outlined",
                                      rows: "3",
                                      counter: "200",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextarea, {
                                      modelValue: articleForm.value.content,
                                      "onUpdate:modelValue": ($event) => articleForm.value.content = $event,
                                      label: "\u6587\u7AE0\u5185\u5BB9 (\u652F\u6301HTML)",
                                      rules: [rules.required],
                                      variant: "outlined",
                                      rows: "10",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, { onClick: cancelEdit }, {
                          default: withCtx(() => [
                            createTextVNode("\u53D6\u6D88")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "primary",
                          disabled: !formValid.value,
                          onClick: saveArticle
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(editingArticle.value ? "\u4FDD\u5B58" : "\u521B\u5EFA"), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "d-flex align-center" }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { start: "" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(editingArticle.value ? "mdi-pencil" : "mdi-plus"), 1)
                        ]),
                        _: 1
                      }),
                      createTextVNode(" " + toDisplayString(editingArticle.value ? "\u7F16\u8F91\u6587\u7AE0" : "\u65B0\u5EFA\u6587\u7AE0"), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VForm, {
                        ref_key: "articleForm",
                        ref: articleForm,
                        modelValue: formValid.value,
                        "onUpdate:modelValue": ($event) => formValid.value = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "8"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: articleForm.value.title,
                                    "onUpdate:modelValue": ($event) => articleForm.value.title = $event,
                                    label: "\u6587\u7AE0\u6807\u9898",
                                    rules: [rules.required],
                                    variant: "outlined",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: articleForm.value.date,
                                    "onUpdate:modelValue": ($event) => articleForm.value.date = $event,
                                    label: "\u53D1\u5E03\u65E5\u671F",
                                    type: "date",
                                    rules: [rules.required],
                                    variant: "outlined",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: articleForm.value.category,
                                    "onUpdate:modelValue": ($event) => articleForm.value.category = $event,
                                    label: "\u6587\u7AE0\u5206\u7C7B",
                                    items: categoryOptions,
                                    rules: [rules.required],
                                    variant: "outlined",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: articleForm.value.readTime,
                                    "onUpdate:modelValue": ($event) => articleForm.value.readTime = $event,
                                    label: "\u9605\u8BFB\u65F6\u95F4",
                                    placeholder: "\u4F8B\u5982: 3\u5206\u949F",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: articleForm.value.tags,
                                    "onUpdate:modelValue": ($event) => articleForm.value.tags = $event,
                                    label: "\u6807\u7B7E (\u7528\u9017\u53F7\u5206\u9694)",
                                    placeholder: "\u4F8B\u5982: \u4F01\u4E1A\u65B0\u95FB, \u4EA7\u54C1\u66F4\u65B0",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextarea, {
                                    modelValue: articleForm.value.excerpt,
                                    "onUpdate:modelValue": ($event) => articleForm.value.excerpt = $event,
                                    label: "\u6587\u7AE0\u6458\u8981",
                                    rules: [rules.required],
                                    variant: "outlined",
                                    rows: "3",
                                    counter: "200",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextarea, {
                                    modelValue: articleForm.value.content,
                                    "onUpdate:modelValue": ($event) => articleForm.value.content = $event,
                                    label: "\u6587\u7AE0\u5185\u5BB9 (\u652F\u6301HTML)",
                                    rules: [rules.required],
                                    variant: "outlined",
                                    rows: "10",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, { onClick: cancelEdit }, {
                        default: withCtx(() => [
                          createTextVNode("\u53D6\u6D88")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "primary",
                        disabled: !formValid.value,
                        onClick: saveArticle
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(editingArticle.value ? "\u4FDD\u5B58" : "\u521B\u5EFA"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: showPreviewDialog.value,
        "onUpdate:modelValue": ($event) => showPreviewDialog.value = $event,
        "max-width": "800"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (previewArticle.value) {
              _push2(ssrRenderComponent(VCard, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCardTitle, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(previewArticle.value.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(previewArticle.value.title), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCardText, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a;
                        if (_push4) {
                          _push4(`<div class="article-meta" data-v-c31da707${_scopeId3}>`);
                          _push4(ssrRenderComponent(VChip, {
                            color: "primary",
                            size: "small"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(previewArticle.value.category)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(previewArticle.value.category), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<span class="mx-2" data-v-c31da707${_scopeId3}>${ssrInterpolate(formatDate(previewArticle.value.date))}</span><span data-v-c31da707${_scopeId3}>${ssrInterpolate(previewArticle.value.readTime)}</span></div><p class="article-excerpt" data-v-c31da707${_scopeId3}>${ssrInterpolate(previewArticle.value.excerpt)}</p><div class="article-content" data-v-c31da707${_scopeId3}>${(_a = previewArticle.value.content) != null ? _a : ""}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "article-meta" }, [
                              createVNode(VChip, {
                                color: "primary",
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(previewArticle.value.category), 1)
                                ]),
                                _: 1
                              }),
                              createVNode("span", { class: "mx-2" }, toDisplayString(formatDate(previewArticle.value.date)), 1),
                              createVNode("span", null, toDisplayString(previewArticle.value.readTime), 1)
                            ]),
                            createVNode("p", { class: "article-excerpt" }, toDisplayString(previewArticle.value.excerpt), 1),
                            createVNode("div", {
                              class: "article-content",
                              innerHTML: previewArticle.value.content
                            }, null, 8, ["innerHTML"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCardActions, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VBtn, {
                            onClick: ($event) => showPreviewDialog.value = false
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u5173\u95ED`);
                              } else {
                                return [
                                  createTextVNode("\u5173\u95ED")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VSpacer),
                            createVNode(VBtn, {
                              onClick: ($event) => showPreviewDialog.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u5173\u95ED")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCardTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(previewArticle.value.title), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "article-meta" }, [
                            createVNode(VChip, {
                              color: "primary",
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(previewArticle.value.category), 1)
                              ]),
                              _: 1
                            }),
                            createVNode("span", { class: "mx-2" }, toDisplayString(formatDate(previewArticle.value.date)), 1),
                            createVNode("span", null, toDisplayString(previewArticle.value.readTime), 1)
                          ]),
                          createVNode("p", { class: "article-excerpt" }, toDisplayString(previewArticle.value.excerpt), 1),
                          createVNode("div", {
                            class: "article-content",
                            innerHTML: previewArticle.value.content
                          }, null, 8, ["innerHTML"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCardActions, null, {
                        default: withCtx(() => [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            onClick: ($event) => showPreviewDialog.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u5173\u95ED")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              previewArticle.value ? (openBlock(), createBlock(VCard, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(previewArticle.value.title), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "article-meta" }, [
                        createVNode(VChip, {
                          color: "primary",
                          size: "small"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(previewArticle.value.category), 1)
                          ]),
                          _: 1
                        }),
                        createVNode("span", { class: "mx-2" }, toDisplayString(formatDate(previewArticle.value.date)), 1),
                        createVNode("span", null, toDisplayString(previewArticle.value.readTime), 1)
                      ]),
                      createVNode("p", { class: "article-excerpt" }, toDisplayString(previewArticle.value.excerpt), 1),
                      createVNode("div", {
                        class: "article-content",
                        innerHTML: previewArticle.value.content
                      }, null, 8, ["innerHTML"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        onClick: ($event) => showPreviewDialog.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u5173\u95ED")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: showDeleteDialog.value,
        "onUpdate:modelValue": ($event) => showDeleteDialog.value = $event,
        "max-width": "400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u786E\u8BA4\u5220\u9664`);
                      } else {
                        return [
                          createTextVNode("\u786E\u8BA4\u5220\u9664")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(` \u786E\u5B9A\u8981\u5220\u9664\u6587\u7AE0&quot;${ssrInterpolate((_a = deleteTarget.value) == null ? void 0 : _a.title)}&quot;\u5417\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\u3002 `);
                      } else {
                        return [
                          createTextVNode(' \u786E\u5B9A\u8981\u5220\u9664\u6587\u7AE0"' + toDisplayString((_b = deleteTarget.value) == null ? void 0 : _b.title) + '"\u5417\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\u3002 ', 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          onClick: ($event) => showDeleteDialog.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u53D6\u6D88`);
                            } else {
                              return [
                                createTextVNode("\u53D6\u6D88")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "error",
                          onClick: deleteArticle
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u5220\u9664`);
                            } else {
                              return [
                                createTextVNode("\u5220\u9664")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            onClick: ($event) => showDeleteDialog.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u53D6\u6D88")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "error",
                            onClick: deleteArticle
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u5220\u9664")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u786E\u8BA4\u5220\u9664")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode(' \u786E\u5B9A\u8981\u5220\u9664\u6587\u7AE0"' + toDisplayString((_a = deleteTarget.value) == null ? void 0 : _a.title) + '"\u5417\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\u3002 ', 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          onClick: ($event) => showDeleteDialog.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u53D6\u6D88")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "error",
                          onClick: deleteArticle
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u5220\u9664")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u786E\u8BA4\u5220\u9664")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(' \u786E\u5B9A\u8981\u5220\u9664\u6587\u7AE0"' + toDisplayString((_a = deleteTarget.value) == null ? void 0 : _a.title) + '"\u5417\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\u3002 ', 1)
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        onClick: ($event) => showDeleteDialog.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u53D6\u6D88")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "error",
                        onClick: deleteArticle
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u5220\u9664")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: showMessage.value,
        "onUpdate:modelValue": ($event) => showMessage.value = $event,
        color: messageType.value,
        timeout: 3e3
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              variant: "text",
              onClick: ($event) => showMessage.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u5173\u95ED`);
                } else {
                  return [
                    createTextVNode("\u5173\u95ED")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                variant: "text",
                onClick: ($event) => showMessage.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode("\u5173\u95ED")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(message.value)} `);
          } else {
            return [
              createTextVNode(toDisplayString(message.value) + " ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArticleManager.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ArticleManager = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-c31da707"]]);
const DEFAULT_CATEGORIES = [
  {
    id: "hero-backgrounds",
    name: "Hero\u80CC\u666F\u56FE",
    description: "\u9996\u9875Hero\u533A\u57DF\u7684\u80CC\u666F\u56FE\u7247",
    count: 0,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "service-images",
    name: "\u670D\u52A1\u56FE\u7247",
    description: "\u670D\u52A1\u5C55\u793A\u76F8\u5173\u56FE\u7247",
    count: 0,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "logos",
    name: "Logo\u56FE\u6807",
    description: "\u4F01\u4E1ALogo\u548C\u54C1\u724C\u56FE\u6807",
    count: 0,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "partners",
    name: "\u5408\u4F5C\u4F19\u4F34",
    description: "\u5408\u4F5C\u4F19\u4F34Logo\u548C\u56FE\u7247",
    count: 0,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "articles",
    name: "\u6587\u7AE0\u56FE\u7247",
    description: "\u6587\u7AE0\u5185\u5BB9\u76F8\u5173\u56FE\u7247",
    count: 0,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "general",
    name: "\u901A\u7528\u56FE\u7247",
    description: "\u5176\u4ED6\u901A\u7528\u56FE\u7247\u7D20\u6750",
    count: 0,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  }
];
const SUPPORTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/svg+xml"
];
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const useImageManager = () => {
  const STORAGE_KEYS = {
    IMAGES: "notrace_images",
    CATEGORIES: "notrace_image_categories"
  };
  const images = ref([]);
  const categories = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const init = () => {
    loadImages();
    loadCategories();
  };
  const loadImages = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.IMAGES);
      if (stored) {
        images.value = JSON.parse(stored);
      }
    } catch (err) {
      console.error("Failed to load images:", err);
      error.value = "\u52A0\u8F7D\u56FE\u7247\u5931\u8D25";
    }
  };
  const loadCategories = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
      if (stored) {
        categories.value = JSON.parse(stored);
      } else {
        categories.value = [...DEFAULT_CATEGORIES];
        saveCategories();
      }
      updateCategoryCounts();
    } catch (err) {
      console.error("Failed to load categories:", err);
      categories.value = [...DEFAULT_CATEGORIES];
    }
  };
  const saveImages = () => {
    try {
      localStorage.setItem(STORAGE_KEYS.IMAGES, JSON.stringify(images.value));
    } catch (err) {
      console.error("Failed to save images:", err);
      error.value = "\u4FDD\u5B58\u56FE\u7247\u5931\u8D25";
    }
  };
  const saveCategories = () => {
    try {
      localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories.value));
    } catch (err) {
      console.error("Failed to save categories:", err);
    }
  };
  const updateCategoryCounts = () => {
    categories.value.forEach((category) => {
      category.count = images.value.filter((img) => img.category === category.id).length;
    });
    saveCategories();
  };
  const validateFile = (file) => {
    if (!SUPPORTED_IMAGE_TYPES.includes(file.type)) {
      return `\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u7C7B\u578B: ${file.type}`;
    }
    if (file.size > MAX_FILE_SIZE) {
      return `\u6587\u4EF6\u5927\u5C0F\u8D85\u8FC7\u9650\u5236 (\u6700\u59275MB): ${(file.size / 1024 / 1024).toFixed(2)}MB`;
    }
    return null;
  };
  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  };
  const uploadImage = async (file, options = {}) => {
    loading.value = true;
    error.value = null;
    try {
      const validationError = validateFile(file);
      if (validationError) {
        throw new Error(validationError);
      }
      const id = generateId();
      const extension = file.name.split(".").pop();
      const filename = `${id}.${extension}`;
      const url = URL.createObjectURL(file);
      const imageAsset = {
        id,
        filename,
        originalName: file.name,
        category: options.category || "general",
        size: file.size,
        type: file.type,
        url,
        uploadDate: (/* @__PURE__ */ new Date()).toISOString(),
        tags: options.tags || [],
        usage: []
      };
      if (options.description) {
        imageAsset.description = options.description;
      }
      images.value.unshift(imageAsset);
      saveImages();
      updateCategoryCounts();
      return imageAsset;
    } catch (err) {
      error.value = err instanceof Error ? err.message : "\u4E0A\u4F20\u5931\u8D25";
      throw err;
    } finally {
      loading.value = false;
    }
  };
  const uploadImages = async (files, options = {}) => {
    const results = [];
    for (const file of files) {
      try {
        const result = await uploadImage(file, options);
        results.push(result);
      } catch (err) {
        console.error(`Failed to upload ${file.name}:`, err);
      }
    }
    return results;
  };
  const deleteImage = (id) => {
    const index2 = images.value.findIndex((img) => img.id === id);
    if (index2 === -1) return false;
    const image = images.value[index2];
    if (image.url.startsWith("blob:")) {
      URL.revokeObjectURL(image.url);
    }
    images.value.splice(index2, 1);
    saveImages();
    updateCategoryCounts();
    return true;
  };
  const deleteImages = (ids) => {
    let deletedCount = 0;
    ids.forEach((id) => {
      if (deleteImage(id)) {
        deletedCount++;
      }
    });
    return deletedCount;
  };
  const updateImage = (id, updates) => {
    const index2 = images.value.findIndex((img) => img.id === id);
    if (index2 === -1) return false;
    images.value[index2] = { ...images.value[index2], ...updates };
    saveImages();
    if (updates.category) {
      updateCategoryCounts();
    }
    return true;
  };
  const filterImages = (filter) => {
    let filtered = [...images.value];
    if (filter.category) {
      filtered = filtered.filter((img) => img.category === filter.category);
    }
    if (filter.tags && filter.tags.length > 0) {
      filtered = filtered.filter(
        (img) => filter.tags.some((tag) => img.tags.includes(tag))
      );
    }
    if (filter.search) {
      const searchLower = filter.search.toLowerCase();
      filtered = filtered.filter(
        (img) => img.filename.toLowerCase().includes(searchLower) || img.originalName.toLowerCase().includes(searchLower) || img.tags.some((tag) => tag.toLowerCase().includes(searchLower)) || img.description && img.description.toLowerCase().includes(searchLower)
      );
    }
    if (filter.dateRange) {
      const { start, end } = filter.dateRange;
      filtered = filtered.filter((img) => {
        const uploadDate = new Date(img.uploadDate);
        return uploadDate >= new Date(start) && uploadDate <= new Date(end);
      });
    }
    return filtered;
  };
  const getStats = () => {
    const totalImages = images.value.length;
    const totalSize = images.value.reduce((sum, img) => sum + img.size, 0);
    const categoryStats = {};
    categories.value.forEach((cat) => {
      categoryStats[cat.name] = cat.count;
    });
    const oneWeekAgo = /* @__PURE__ */ new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const recentUploads = images.value.filter(
      (img) => new Date(img.uploadDate) > oneWeekAgo
    ).length;
    const unusedImages = images.value.filter(
      (img) => img.usage.length === 0
    ).length;
    return {
      totalImages,
      totalSize,
      categories: categoryStats,
      recentUploads,
      unusedImages
    };
  };
  const createCategory = (name, description) => {
    const category = {
      id: generateId(),
      name,
      description,
      count: 0,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    categories.value.push(category);
    saveCategories();
    return category;
  };
  const deleteCategory = (id) => {
    const index2 = categories.value.findIndex((cat) => cat.id === id);
    if (index2 === -1) return false;
    if (categories.value[index2].count > 0) {
      error.value = "\u4E0D\u80FD\u5220\u9664\u5305\u542B\u56FE\u7247\u7684\u5206\u7C7B";
      return false;
    }
    categories.value.splice(index2, 1);
    saveCategories();
    return true;
  };
  return {
    // 状态
    images: readonly(images),
    categories: readonly(categories),
    loading: readonly(loading),
    error: readonly(error),
    // 方法
    init,
    uploadImage,
    uploadImages,
    deleteImage,
    deleteImages,
    updateImage,
    filterImages,
    getStats,
    createCategory,
    deleteCategory,
    validateFile,
    // 计算属性
    imageCount: computed(() => images.value.length),
    totalSize: computed(() => images.value.reduce((sum, img) => sum + img.size, 0)),
    categoryOptions: computed(
      () => categories.value.map((cat) => ({ value: cat.id, title: cat.name }))
    )
  };
};
const VAlertTitle = createSimpleFunctional("v-alert-title");
const allowedTypes = ["success", "info", "warning", "error"];
const makeVAlertProps = propsFactory({
  border: {
    type: [Boolean, String],
    validator: (val) => {
      return typeof val === "boolean" || ["top", "end", "bottom", "start"].includes(val);
    }
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: IconValue,
    default: "$close"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  icon: {
    type: [Boolean, String, Function, Object],
    default: null
  },
  modelValue: {
    type: Boolean,
    default: true
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String,
    validator: (val) => allowedTypes.includes(val)
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "flat"
  })
}, "VAlert");
const VAlert = genericComponent()({
  name: "VAlert",
  props: makeVAlertProps(),
  emits: {
    "click:close": (e) => true,
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const icon = toRef(() => {
      var _a;
      if (props.icon === false) return void 0;
      if (!props.type) return props.icon;
      return (_a = props.icon) != null ? _a : `$${props.type}`;
    });
    const {
      themeClasses
    } = provideTheme(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(() => {
      var _a;
      return {
        color: (_a = props.color) != null ? _a : props.type,
        variant: props.variant
      };
    });
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(() => props.borderColor);
    const {
      t
    } = useLocale();
    const closeProps = toRef(() => ({
      "aria-label": t(props.closeLabel),
      onClick(e) {
        isActive.value = false;
        emit("click:close", e);
      }
    }));
    return () => {
      const hasPrepend = !!(slots.prepend || icon.value);
      const hasTitle = !!(slots.title || props.title);
      const hasClose = !!(slots.close || props.closable);
      return isActive.value && createVNode(props.tag, {
        "class": normalizeClass(["v-alert", props.border && {
          "v-alert--border": !!props.border,
          [`v-alert--border-${props.border === true ? "start" : props.border}`]: true
        }, {
          "v-alert--prominent": props.prominent
        }, themeClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value, props.class]),
        "style": normalizeStyle([colorStyles.value, dimensionStyles.value, locationStyles.value, props.style]),
        "role": "alert"
      }, {
        default: () => {
          var _a2;
          var _a, _b;
          return [genOverlays(false, "v-alert"), props.border && createElementVNode("div", {
            "key": "border",
            "class": normalizeClass(["v-alert__border", textColorClasses.value]),
            "style": normalizeStyle(textColorStyles.value)
          }, null), hasPrepend && createElementVNode("div", {
            "key": "prepend",
            "class": "v-alert__prepend"
          }, [!slots.prepend ? createVNode(VIcon, {
            "key": "prepend-icon",
            "density": props.density,
            "icon": icon.value,
            "size": props.prominent ? 44 : 28
          }, null) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !icon.value,
            "defaults": {
              VIcon: {
                density: props.density,
                icon: icon.value,
                size: props.prominent ? 44 : 28
              }
            }
          }, slots.prepend)]), createElementVNode("div", {
            "class": "v-alert__content"
          }, [hasTitle && createVNode(VAlertTitle, {
            "key": "title"
          }, {
            default: () => {
              var _a3;
              var _a22;
              return [(_a3 = (_a22 = slots.title) == null ? void 0 : _a22.call(slots)) != null ? _a3 : props.title];
            }
          }), (_a2 = (_a = slots.text) == null ? void 0 : _a.call(slots)) != null ? _a2 : props.text, (_b = slots.default) == null ? void 0 : _b.call(slots)]), slots.append && createElementVNode("div", {
            "key": "append",
            "class": "v-alert__append"
          }, [slots.append()]), hasClose && createElementVNode("div", {
            "key": "close",
            "class": "v-alert__close"
          }, [!slots.close ? createVNode(VBtn, mergeProps({
            "key": "close-btn",
            "icon": props.closeIcon,
            "size": "x-small",
            "variant": "text"
          }, closeProps.value), null) : createVNode(VDefaultsProvider, {
            "key": "close-defaults",
            "defaults": {
              VBtn: {
                icon: props.closeIcon,
                size: "x-small",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var _a22;
              return [(_a22 = slots.close) == null ? void 0 : _a22.call(slots, {
                props: closeProps.value
              })];
            }
          })])];
        }
      });
    };
  }
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ImageUploader",
  __ssrInlineRender: true,
  props: {
    defaultCategory: { default: "general" },
    maxFiles: { default: 10 },
    showOptions: { type: Boolean, default: true }
  },
  emits: ["upload", "error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { categoryOptions } = useImageManager();
    const isDragOver = ref(false);
    const loading = ref(false);
    const error = ref("");
    const uploadResults = ref([]);
    const selectedCategory = ref(props.defaultCategory);
    const tags = ref("");
    const description = ref("");
    ref();
    const formatFileSize = (bytes) => {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
    };
    const removeResult = (id) => {
      const index2 = uploadResults.value.findIndex((r) => r.id === id);
      if (index2 !== -1) {
        uploadResults.value.splice(index2, 1);
      }
    };
    const clearResults = () => {
      uploadResults.value = [];
    };
    watch(selectedCategory, (newValue) => {
      if (newValue !== props.defaultCategory) {
        selectedCategory.value = newValue;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "image-uploader" }, _attrs))} data-v-2a917647><div class="${ssrRenderClass([{
        "drag-over": unref(isDragOver),
        "uploading": unref(loading)
      }, "upload-area"])}" data-v-2a917647><div class="upload-content" data-v-2a917647>`);
      _push(ssrRenderComponent(VIcon, {
        size: "64",
        color: "primary",
        class: "upload-icon"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(isDragOver) ? "mdi-cloud-upload" : "mdi-image-plus")}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(isDragOver) ? "mdi-cloud-upload" : "mdi-image-plus"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3 class="upload-title" data-v-2a917647>${ssrInterpolate(unref(isDragOver) ? "\u91CA\u653E\u4EE5\u4E0A\u4F20\u56FE\u7247" : "\u62D6\u62FD\u56FE\u7247\u5230\u6B64\u5904")}</h3><p class="upload-description" data-v-2a917647> \u6216\u70B9\u51FB\u9009\u62E9\u6587\u4EF6\u4E0A\u4F20 </p><div class="upload-info" data-v-2a917647><p class="info-text" data-v-2a917647> \u652F\u6301\u683C\u5F0F: JPG, PNG, WEBP, SVG </p><p class="info-text" data-v-2a917647> \u6700\u5927\u5927\u5C0F: 5MB </p></div></div>`);
      if (unref(loading)) {
        _push(`<div class="upload-progress" data-v-2a917647>`);
        _push(ssrRenderComponent(VProgressLinear, {
          indeterminate: "",
          color: "primary",
          height: "4"
        }, null, _parent));
        _push(`<p class="progress-text" data-v-2a917647>\u6B63\u5728\u4E0A\u4F20...</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><input type="file" multiple accept="image/*" style="${ssrRenderStyle({ "display": "none" })}" data-v-2a917647><div class="upload-options" data-v-2a917647>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSelect, {
                    modelValue: unref(selectedCategory),
                    "onUpdate:modelValue": ($event) => isRef(selectedCategory) ? selectedCategory.value = $event : null,
                    label: "\u9009\u62E9\u5206\u7C7B",
                    items: unref(categoryOptions),
                    "item-value": "value",
                    "item-title": "title",
                    "prepend-icon": "mdi-folder",
                    variant: "outlined",
                    density: "compact"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VSelect, {
                      modelValue: unref(selectedCategory),
                      "onUpdate:modelValue": ($event) => isRef(selectedCategory) ? selectedCategory.value = $event : null,
                      label: "\u9009\u62E9\u5206\u7C7B",
                      items: unref(categoryOptions),
                      "item-value": "value",
                      "item-title": "title",
                      "prepend-icon": "mdi-folder",
                      variant: "outlined",
                      density: "compact"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(tags),
                    "onUpdate:modelValue": ($event) => isRef(tags) ? tags.value = $event : null,
                    label: "\u6807\u7B7E (\u7528\u9017\u53F7\u5206\u9694)",
                    "prepend-icon": "mdi-tag-multiple",
                    variant: "outlined",
                    density: "compact",
                    placeholder: "\u4F8B\u5982: logo, \u9996\u9875, \u80CC\u666F"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: unref(tags),
                      "onUpdate:modelValue": ($event) => isRef(tags) ? tags.value = $event : null,
                      label: "\u6807\u7B7E (\u7528\u9017\u53F7\u5206\u9694)",
                      "prepend-icon": "mdi-tag-multiple",
                      variant: "outlined",
                      density: "compact",
                      placeholder: "\u4F8B\u5982: logo, \u9996\u9875, \u80CC\u666F"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VSelect, {
                    modelValue: unref(selectedCategory),
                    "onUpdate:modelValue": ($event) => isRef(selectedCategory) ? selectedCategory.value = $event : null,
                    label: "\u9009\u62E9\u5206\u7C7B",
                    items: unref(categoryOptions),
                    "item-value": "value",
                    "item-title": "title",
                    "prepend-icon": "mdi-folder",
                    variant: "outlined",
                    density: "compact"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VTextField, {
                    modelValue: unref(tags),
                    "onUpdate:modelValue": ($event) => isRef(tags) ? tags.value = $event : null,
                    label: "\u6807\u7B7E (\u7528\u9017\u53F7\u5206\u9694)",
                    "prepend-icon": "mdi-tag-multiple",
                    variant: "outlined",
                    density: "compact",
                    placeholder: "\u4F8B\u5982: logo, \u9996\u9875, \u80CC\u666F"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(description),
                    "onUpdate:modelValue": ($event) => isRef(description) ? description.value = $event : null,
                    label: "\u63CF\u8FF0",
                    "prepend-icon": "mdi-text",
                    variant: "outlined",
                    density: "compact",
                    placeholder: "\u7B80\u5355\u63CF\u8FF0\u8FD9\u5F20\u56FE\u7247..."
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: unref(description),
                      "onUpdate:modelValue": ($event) => isRef(description) ? description.value = $event : null,
                      label: "\u63CF\u8FF0",
                      "prepend-icon": "mdi-text",
                      variant: "outlined",
                      density: "compact",
                      placeholder: "\u7B80\u5355\u63CF\u8FF0\u8FD9\u5F20\u56FE\u7247..."
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VTextField, {
                    modelValue: unref(description),
                    "onUpdate:modelValue": ($event) => isRef(description) ? description.value = $event : null,
                    label: "\u63CF\u8FF0",
                    "prepend-icon": "mdi-text",
                    variant: "outlined",
                    density: "compact",
                    placeholder: "\u7B80\u5355\u63CF\u8FF0\u8FD9\u5F20\u56FE\u7247..."
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(uploadResults).length > 0) {
        _push(`<div class="upload-results" data-v-2a917647><h4 class="results-title" data-v-2a917647>`);
        _push(ssrRenderComponent(VIcon, { start: "" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`mdi-check-circle`);
            } else {
              return [
                createTextVNode("mdi-check-circle")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` \u5DF2\u4E0A\u4F20 ${ssrInterpolate(unref(uploadResults).length)} \u4E2A\u6587\u4EF6 </h4><div class="results-grid" data-v-2a917647><!--[-->`);
        ssrRenderList(unref(uploadResults), (result) => {
          _push(`<div class="result-item" data-v-2a917647><div class="result-image" data-v-2a917647><img${ssrRenderAttr("src", result.url)}${ssrRenderAttr("alt", result.originalName)} data-v-2a917647></div><div class="result-info" data-v-2a917647><p class="result-name" data-v-2a917647>${ssrInterpolate(result.originalName)}</p><p class="result-size" data-v-2a917647>${ssrInterpolate(formatFileSize(result.size))}</p></div>`);
          _push(ssrRenderComponent(VBtn, {
            icon: "mdi-close",
            size: "small",
            variant: "text",
            onClick: ($event) => removeResult(result.id)
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div><div class="results-actions" data-v-2a917647>`);
        _push(ssrRenderComponent(VBtn, {
          color: "primary",
          onClick: clearResults
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u6E05\u9664\u5217\u8868 `);
            } else {
              return [
                createTextVNode(" \u6E05\u9664\u5217\u8868 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(error)) {
        _push(ssrRenderComponent(VAlert, {
          type: "error",
          closable: "",
          "onClick:close": ($event) => error.value = "",
          class: "mt-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(error))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(error)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImageUploader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ImageUploader = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-2a917647"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ImageManager",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      categories,
      loading,
      deleteImage,
      deleteImages,
      updateImage,
      filterImages,
      categoryOptions,
      totalSize,
      imageCount
    } = useImageManager();
    const searchQuery = ref("");
    const selectedCategory = ref(null);
    const selectedImages = ref([]);
    const showUploader = ref(false);
    const showPreview = ref(false);
    const showEdit = ref(false);
    const showDeleteConfirm = ref(false);
    const previewImage = ref(null);
    const editingImage = ref(null);
    const deleteTarget = ref(null);
    const showMessage = ref(false);
    const message = ref("");
    const messageType = ref("success");
    const editForm = ref({
      filename: "",
      category: "",
      tagsStr: "",
      description: ""
    });
    const totalImages = computed(() => imageCount.value);
    const categoryFilterOptions = computed(() => [
      { value: null, title: "\u6240\u6709\u5206\u7C7B" },
      ...categoryOptions.value
    ]);
    const displayedImages = computed(() => {
      const filter = {};
      if (selectedCategory.value) filter.category = selectedCategory.value;
      if (searchQuery.value) filter.search = searchQuery.value;
      return filterImages(filter);
    });
    const deleteConfirmText = computed(() => {
      if (Array.isArray(deleteTarget.value)) {
        return `\u786E\u5B9A\u8981\u5220\u9664\u9009\u4E2D\u7684 ${deleteTarget.value.length} \u5F20\u56FE\u7247\u5417\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\u3002`;
      }
      return "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u5F20\u56FE\u7247\u5417\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\u3002";
    });
    const formatFileSize = (bytes) => {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
    };
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    const getCategoryName = (categoryId) => {
      const category = categories.value.find((cat) => cat.id === categoryId);
      return (category == null ? void 0 : category.name) || "\u672A\u77E5\u5206\u7C7B";
    };
    const toggleSelection = (id) => {
      const index2 = selectedImages.value.indexOf(id);
      if (index2 > -1) {
        selectedImages.value.splice(index2, 1);
      } else {
        selectedImages.value.push(id);
      }
    };
    const editImage = (image) => {
      editingImage.value = image;
      editForm.value = {
        filename: image.filename,
        category: image.category,
        tagsStr: image.tags.join(", "),
        description: image.description || ""
      };
      showEdit.value = true;
    };
    const saveEdit = () => {
      if (!editingImage.value) return;
      const tags = editForm.value.tagsStr.split(",").map((tag) => tag.trim()).filter(Boolean);
      const updateData = {
        filename: editForm.value.filename,
        category: editForm.value.category,
        tags
      };
      if (editForm.value.description) updateData.description = editForm.value.description;
      const success = updateImage(editingImage.value.id, updateData);
      if (success) {
        showMessage.value = true;
        message.value = "\u56FE\u7247\u4FE1\u606F\u5DF2\u66F4\u65B0";
        messageType.value = "success";
        showEdit.value = false;
      } else {
        showMessage.value = true;
        message.value = "\u66F4\u65B0\u5931\u8D25";
        messageType.value = "error";
      }
    };
    const confirmDelete = (image) => {
      deleteTarget.value = image.id;
      showDeleteConfirm.value = true;
    };
    const confirmBatchDelete = () => {
      deleteTarget.value = [...selectedImages.value];
      showDeleteConfirm.value = true;
    };
    const performDelete = () => {
      if (Array.isArray(deleteTarget.value)) {
        const deletedCount = deleteImages(deleteTarget.value);
        selectedImages.value = [];
        showMessage.value = true;
        message.value = `\u5DF2\u5220\u9664 ${deletedCount} \u5F20\u56FE\u7247`;
        messageType.value = "success";
      } else if (deleteTarget.value) {
        const success = deleteImage(deleteTarget.value);
        if (success) {
          showMessage.value = true;
          message.value = "\u56FE\u7247\u5DF2\u5220\u9664";
          messageType.value = "success";
        } else {
          showMessage.value = true;
          message.value = "\u5220\u9664\u5931\u8D25";
          messageType.value = "error";
        }
      }
      showDeleteConfirm.value = false;
      showPreview.value = false;
      deleteTarget.value = null;
    };
    const copyUrl = async (url) => {
      try {
        await (void 0).clipboard.writeText(url);
        showMessage.value = true;
        message.value = "\u94FE\u63A5\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F";
        messageType.value = "success";
      } catch (err) {
        showMessage.value = true;
        message.value = "\u590D\u5236\u5931\u8D25";
        messageType.value = "error";
      }
    };
    const handleUpload = (uploadedImages) => {
      showMessage.value = true;
      message.value = `\u6210\u529F\u4E0A\u4F20 ${uploadedImages.length} \u5F20\u56FE\u7247`;
      messageType.value = "success";
      selectedImages.value = [];
    };
    const handleUploadError = (error) => {
      showMessage.value = true;
      message.value = error;
      messageType.value = "error";
    };
    watch([searchQuery, selectedCategory], () => {
      selectedImages.value = [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "image-manager" }, _attrs))} data-v-12d3a28e><div class="toolbar" data-v-12d3a28e><div class="toolbar-section" data-v-12d3a28e>`);
      _push(ssrRenderComponent(VTextField, {
        modelValue: unref(searchQuery),
        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
        label: "\u641C\u7D22\u56FE\u7247",
        "prepend-icon": "mdi-magnify",
        variant: "outlined",
        density: "compact",
        class: "search-field",
        clearable: ""
      }, null, _parent));
      _push(ssrRenderComponent(VSelect, {
        modelValue: unref(selectedCategory),
        "onUpdate:modelValue": ($event) => isRef(selectedCategory) ? selectedCategory.value = $event : null,
        label: "\u7B5B\u9009\u5206\u7C7B",
        items: unref(categoryFilterOptions),
        "item-value": "value",
        "item-title": "title",
        variant: "outlined",
        density: "compact",
        class: "category-filter",
        clearable: ""
      }, null, _parent));
      _push(`</div><div class="toolbar-actions" data-v-12d3a28e>`);
      if (unref(selectedImages).length > 0) {
        _push(ssrRenderComponent(VBtn, {
          color: "error",
          variant: "outlined",
          onClick: confirmBatchDelete,
          class: "mr-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VIcon, { start: "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`mdi-delete`);
                  } else {
                    return [
                      createTextVNode("mdi-delete")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(` \u5220\u9664\u9009\u4E2D (${ssrInterpolate(unref(selectedImages).length)}) `);
            } else {
              return [
                createVNode(VIcon, { start: "" }, {
                  default: withCtx(() => [
                    createTextVNode("mdi-delete")
                  ]),
                  _: 1
                }),
                createTextVNode(" \u5220\u9664\u9009\u4E2D (" + toDisplayString(unref(selectedImages).length) + ") ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(VBtn, {
        color: "primary",
        onClick: ($event) => showUploader.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, { start: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-upload`);
                } else {
                  return [
                    createTextVNode("mdi-upload")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` \u4E0A\u4F20\u56FE\u7247 `);
          } else {
            return [
              createVNode(VIcon, { start: "" }, {
                default: withCtx(() => [
                  createTextVNode("mdi-upload")
                ]),
                _: 1
              }),
              createTextVNode(" \u4E0A\u4F20\u56FE\u7247 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="stats-bar" data-v-12d3a28e><div class="stat-item" data-v-12d3a28e>`);
      _push(ssrRenderComponent(VIcon, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`mdi-image`);
          } else {
            return [
              createTextVNode("mdi-image")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span data-v-12d3a28e>${ssrInterpolate(unref(displayedImages).length)} / ${ssrInterpolate(unref(totalImages))} \u5F20\u56FE\u7247</span></div><div class="stat-item" data-v-12d3a28e>`);
      _push(ssrRenderComponent(VIcon, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`mdi-harddisk`);
          } else {
            return [
              createTextVNode("mdi-harddisk")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span data-v-12d3a28e>${ssrInterpolate(formatFileSize(unref(totalSize)))}</span></div><div class="stat-item" data-v-12d3a28e>`);
      _push(ssrRenderComponent(VIcon, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`mdi-folder`);
          } else {
            return [
              createTextVNode("mdi-folder")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span data-v-12d3a28e>${ssrInterpolate(unref(categories).length)} \u4E2A\u5206\u7C7B</span></div></div><div class="image-grid" data-v-12d3a28e><!--[-->`);
      ssrRenderList(unref(displayedImages), (image) => {
        _push(`<div class="${ssrRenderClass([{ "selected": unref(selectedImages).includes(image.id) }, "image-item"])}" data-v-12d3a28e><div class="image-checkbox" data-v-12d3a28e>`);
        _push(ssrRenderComponent(VCheckbox, {
          "model-value": unref(selectedImages).includes(image.id),
          "onUpdate:modelValue": ($event) => toggleSelection(image.id),
          density: "compact",
          "hide-details": ""
        }, null, _parent));
        _push(`</div><div class="image-preview" data-v-12d3a28e><img${ssrRenderAttr("src", image.url)}${ssrRenderAttr("alt", image.originalName)} data-v-12d3a28e><div class="image-overlay" data-v-12d3a28e>`);
        _push(ssrRenderComponent(VBtn, {
          icon: "mdi-eye",
          size: "small",
          variant: "text",
          color: "white"
        }, null, _parent));
        _push(`</div></div><div class="image-info" data-v-12d3a28e><div class="image-name"${ssrRenderAttr("title", image.originalName)} data-v-12d3a28e>${ssrInterpolate(image.originalName)}</div><div class="image-meta" data-v-12d3a28e><span class="image-size" data-v-12d3a28e>${ssrInterpolate(formatFileSize(image.size))}</span><span class="image-category" data-v-12d3a28e>${ssrInterpolate(getCategoryName(image.category))}</span></div>`);
        if (image.tags.length > 0) {
          _push(`<div class="image-tags" data-v-12d3a28e><!--[-->`);
          ssrRenderList(image.tags, (tag) => {
            _push(ssrRenderComponent(VChip, {
              key: tag,
              size: "x-small",
              variant: "outlined",
              class: "mr-1"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(tag)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(tag), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="image-actions" data-v-12d3a28e>`);
        _push(ssrRenderComponent(VBtn, {
          icon: "mdi-content-copy",
          size: "small",
          variant: "text",
          onClick: ($event) => copyUrl(image.url),
          title: "\u590D\u5236\u94FE\u63A5"
        }, null, _parent));
        _push(ssrRenderComponent(VBtn, {
          icon: "mdi-pencil",
          size: "small",
          variant: "text",
          onClick: ($event) => editImage(image),
          title: "\u7F16\u8F91"
        }, null, _parent));
        _push(ssrRenderComponent(VBtn, {
          icon: "mdi-delete",
          size: "small",
          variant: "text",
          color: "error",
          onClick: ($event) => confirmDelete(image),
          title: "\u5220\u9664"
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
      if (unref(displayedImages).length === 0 && !unref(loading)) {
        _push(`<div class="empty-state" data-v-12d3a28e>`);
        _push(ssrRenderComponent(VIcon, {
          size: "64",
          color: "grey"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`mdi-image-off`);
            } else {
              return [
                createTextVNode("mdi-image-off")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<h3 data-v-12d3a28e>${ssrInterpolate(unref(searchQuery) || unref(selectedCategory) ? "\u672A\u627E\u5230\u56FE\u7247" : "\u8FD8\u6CA1\u6709\u56FE\u7247")}</h3><p data-v-12d3a28e>${ssrInterpolate(unref(searchQuery) || unref(selectedCategory) ? "\u8BF7\u5C1D\u8BD5\u8C03\u6574\u641C\u7D22\u6761\u4EF6" : "\u70B9\u51FB\u4E0A\u4F20\u6309\u94AE\u5F00\u59CB\u6DFB\u52A0\u56FE\u7247")}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading)) {
        _push(`<div class="loading-state" data-v-12d3a28e>`);
        _push(ssrRenderComponent(VProgressCircular, {
          indeterminate: "",
          color: "primary"
        }, null, _parent));
        _push(`<p data-v-12d3a28e>\u52A0\u8F7D\u4E2D...</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(showUploader),
        "onUpdate:modelValue": ($event) => isRef(showUploader) ? showUploader.value = $event : null,
        "max-width": "800"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { start: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-upload`);
                            } else {
                              return [
                                createTextVNode("mdi-upload")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` \u4E0A\u4F20\u56FE\u7247 `);
                      } else {
                        return [
                          createVNode(VIcon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-upload")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" \u4E0A\u4F20\u56FE\u7247 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(ImageUploader, {
                          "default-category": unref(selectedCategory) || "general",
                          onUpload: handleUpload,
                          onError: handleUploadError
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(ImageUploader, {
                            "default-category": unref(selectedCategory) || "general",
                            onUpload: handleUpload,
                            onError: handleUploadError
                          }, null, 8, ["default-category"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          onClick: ($event) => showUploader.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u5173\u95ED`);
                            } else {
                              return [
                                createTextVNode("\u5173\u95ED")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            onClick: ($event) => showUploader.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u5173\u95ED")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "d-flex align-center" }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-upload")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" \u4E0A\u4F20\u56FE\u7247 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(ImageUploader, {
                          "default-category": unref(selectedCategory) || "general",
                          onUpload: handleUpload,
                          onError: handleUploadError
                        }, null, 8, ["default-category"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          onClick: ($event) => showUploader.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u5173\u95ED")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "d-flex align-center" }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { start: "" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-upload")
                        ]),
                        _: 1
                      }),
                      createTextVNode(" \u4E0A\u4F20\u56FE\u7247 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(ImageUploader, {
                        "default-category": unref(selectedCategory) || "general",
                        onUpload: handleUpload,
                        onError: handleUploadError
                      }, null, 8, ["default-category"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        onClick: ($event) => showUploader.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u5173\u95ED")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(showPreview),
        "onUpdate:modelValue": ($event) => isRef(showPreview) ? showPreview.value = $event : null,
        "max-width": "1000"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(previewImage)) {
              _push2(ssrRenderComponent(VCard, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCardTitle, { class: "d-flex align-center justify-space-between" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span data-v-12d3a28e${_scopeId3}>${ssrInterpolate(unref(previewImage).originalName)}</span>`);
                          _push4(ssrRenderComponent(VBtn, {
                            icon: "mdi-close",
                            variant: "text",
                            onClick: ($event) => showPreview.value = false
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode("span", null, toDisplayString(unref(previewImage).originalName), 1),
                            createVNode(VBtn, {
                              icon: "mdi-close",
                              variant: "text",
                              onClick: ($event) => showPreview.value = false
                            }, null, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCardText, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="preview-content" data-v-12d3a28e${_scopeId3}><div class="preview-image" data-v-12d3a28e${_scopeId3}><img${ssrRenderAttr("src", unref(previewImage).url)}${ssrRenderAttr("alt", unref(previewImage).originalName)} data-v-12d3a28e${_scopeId3}></div><div class="preview-details" data-v-12d3a28e${_scopeId3}><div class="detail-item" data-v-12d3a28e${_scopeId3}><strong data-v-12d3a28e${_scopeId3}>\u6587\u4EF6\u540D:</strong> ${ssrInterpolate(unref(previewImage).filename)}</div><div class="detail-item" data-v-12d3a28e${_scopeId3}><strong data-v-12d3a28e${_scopeId3}>\u5927\u5C0F:</strong> ${ssrInterpolate(formatFileSize(unref(previewImage).size))}</div><div class="detail-item" data-v-12d3a28e${_scopeId3}><strong data-v-12d3a28e${_scopeId3}>\u7C7B\u578B:</strong> ${ssrInterpolate(unref(previewImage).type)}</div><div class="detail-item" data-v-12d3a28e${_scopeId3}><strong data-v-12d3a28e${_scopeId3}>\u5206\u7C7B:</strong> ${ssrInterpolate(getCategoryName(unref(previewImage).category))}</div><div class="detail-item" data-v-12d3a28e${_scopeId3}><strong data-v-12d3a28e${_scopeId3}>\u4E0A\u4F20\u65F6\u95F4:</strong> ${ssrInterpolate(formatDate(unref(previewImage).uploadDate))}</div>`);
                          if (unref(previewImage).tags.length > 0) {
                            _push4(`<div class="detail-item" data-v-12d3a28e${_scopeId3}><strong data-v-12d3a28e${_scopeId3}>\u6807\u7B7E:</strong><!--[-->`);
                            ssrRenderList(unref(previewImage).tags, (tag) => {
                              _push4(ssrRenderComponent(VChip, {
                                key: tag,
                                size: "small",
                                class: "ml-1"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(tag)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(tag), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--></div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (unref(previewImage).description) {
                            _push4(`<div class="detail-item" data-v-12d3a28e${_scopeId3}><strong data-v-12d3a28e${_scopeId3}>\u63CF\u8FF0:</strong> ${ssrInterpolate(unref(previewImage).description)}</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "preview-content" }, [
                              createVNode("div", { class: "preview-image" }, [
                                createVNode("img", {
                                  src: unref(previewImage).url,
                                  alt: unref(previewImage).originalName
                                }, null, 8, ["src", "alt"])
                              ]),
                              createVNode("div", { class: "preview-details" }, [
                                createVNode("div", { class: "detail-item" }, [
                                  createVNode("strong", null, "\u6587\u4EF6\u540D:"),
                                  createTextVNode(" " + toDisplayString(unref(previewImage).filename), 1)
                                ]),
                                createVNode("div", { class: "detail-item" }, [
                                  createVNode("strong", null, "\u5927\u5C0F:"),
                                  createTextVNode(" " + toDisplayString(formatFileSize(unref(previewImage).size)), 1)
                                ]),
                                createVNode("div", { class: "detail-item" }, [
                                  createVNode("strong", null, "\u7C7B\u578B:"),
                                  createTextVNode(" " + toDisplayString(unref(previewImage).type), 1)
                                ]),
                                createVNode("div", { class: "detail-item" }, [
                                  createVNode("strong", null, "\u5206\u7C7B:"),
                                  createTextVNode(" " + toDisplayString(getCategoryName(unref(previewImage).category)), 1)
                                ]),
                                createVNode("div", { class: "detail-item" }, [
                                  createVNode("strong", null, "\u4E0A\u4F20\u65F6\u95F4:"),
                                  createTextVNode(" " + toDisplayString(formatDate(unref(previewImage).uploadDate)), 1)
                                ]),
                                unref(previewImage).tags.length > 0 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "detail-item"
                                }, [
                                  createVNode("strong", null, "\u6807\u7B7E:"),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(previewImage).tags, (tag) => {
                                    return openBlock(), createBlock(VChip, {
                                      key: tag,
                                      size: "small",
                                      class: "ml-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(tag), 1)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ])) : createCommentVNode("", true),
                                unref(previewImage).description ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "detail-item"
                                }, [
                                  createVNode("strong", null, "\u63CF\u8FF0:"),
                                  createTextVNode(" " + toDisplayString(unref(previewImage).description), 1)
                                ])) : createCommentVNode("", true)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCardActions, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VBtn, {
                            onClick: ($event) => copyUrl(unref(previewImage).url)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u590D\u5236\u94FE\u63A5`);
                              } else {
                                return [
                                  createTextVNode("\u590D\u5236\u94FE\u63A5")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VBtn, {
                            onClick: ($event) => editImage(unref(previewImage))
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u7F16\u8F91`);
                              } else {
                                return [
                                  createTextVNode("\u7F16\u8F91")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VBtn, {
                            color: "error",
                            onClick: ($event) => confirmDelete(unref(previewImage))
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u5220\u9664`);
                              } else {
                                return [
                                  createTextVNode("\u5220\u9664")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VBtn, {
                              onClick: ($event) => copyUrl(unref(previewImage).url)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u590D\u5236\u94FE\u63A5")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VBtn, {
                              onClick: ($event) => editImage(unref(previewImage))
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u7F16\u8F91")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VSpacer),
                            createVNode(VBtn, {
                              color: "error",
                              onClick: ($event) => confirmDelete(unref(previewImage))
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u5220\u9664")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCardTitle, { class: "d-flex align-center justify-space-between" }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(unref(previewImage).originalName), 1),
                          createVNode(VBtn, {
                            icon: "mdi-close",
                            variant: "text",
                            onClick: ($event) => showPreview.value = false
                          }, null, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "preview-content" }, [
                            createVNode("div", { class: "preview-image" }, [
                              createVNode("img", {
                                src: unref(previewImage).url,
                                alt: unref(previewImage).originalName
                              }, null, 8, ["src", "alt"])
                            ]),
                            createVNode("div", { class: "preview-details" }, [
                              createVNode("div", { class: "detail-item" }, [
                                createVNode("strong", null, "\u6587\u4EF6\u540D:"),
                                createTextVNode(" " + toDisplayString(unref(previewImage).filename), 1)
                              ]),
                              createVNode("div", { class: "detail-item" }, [
                                createVNode("strong", null, "\u5927\u5C0F:"),
                                createTextVNode(" " + toDisplayString(formatFileSize(unref(previewImage).size)), 1)
                              ]),
                              createVNode("div", { class: "detail-item" }, [
                                createVNode("strong", null, "\u7C7B\u578B:"),
                                createTextVNode(" " + toDisplayString(unref(previewImage).type), 1)
                              ]),
                              createVNode("div", { class: "detail-item" }, [
                                createVNode("strong", null, "\u5206\u7C7B:"),
                                createTextVNode(" " + toDisplayString(getCategoryName(unref(previewImage).category)), 1)
                              ]),
                              createVNode("div", { class: "detail-item" }, [
                                createVNode("strong", null, "\u4E0A\u4F20\u65F6\u95F4:"),
                                createTextVNode(" " + toDisplayString(formatDate(unref(previewImage).uploadDate)), 1)
                              ]),
                              unref(previewImage).tags.length > 0 ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "detail-item"
                              }, [
                                createVNode("strong", null, "\u6807\u7B7E:"),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(previewImage).tags, (tag) => {
                                  return openBlock(), createBlock(VChip, {
                                    key: tag,
                                    size: "small",
                                    class: "ml-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(tag), 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ])) : createCommentVNode("", true),
                              unref(previewImage).description ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "detail-item"
                              }, [
                                createVNode("strong", null, "\u63CF\u8FF0:"),
                                createTextVNode(" " + toDisplayString(unref(previewImage).description), 1)
                              ])) : createCommentVNode("", true)
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCardActions, null, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            onClick: ($event) => copyUrl(unref(previewImage).url)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u590D\u5236\u94FE\u63A5")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            onClick: ($event) => editImage(unref(previewImage))
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u7F16\u8F91")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            color: "error",
                            onClick: ($event) => confirmDelete(unref(previewImage))
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u5220\u9664")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(previewImage) ? (openBlock(), createBlock(VCard, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "d-flex align-center justify-space-between" }, {
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(unref(previewImage).originalName), 1),
                      createVNode(VBtn, {
                        icon: "mdi-close",
                        variant: "text",
                        onClick: ($event) => showPreview.value = false
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "preview-content" }, [
                        createVNode("div", { class: "preview-image" }, [
                          createVNode("img", {
                            src: unref(previewImage).url,
                            alt: unref(previewImage).originalName
                          }, null, 8, ["src", "alt"])
                        ]),
                        createVNode("div", { class: "preview-details" }, [
                          createVNode("div", { class: "detail-item" }, [
                            createVNode("strong", null, "\u6587\u4EF6\u540D:"),
                            createTextVNode(" " + toDisplayString(unref(previewImage).filename), 1)
                          ]),
                          createVNode("div", { class: "detail-item" }, [
                            createVNode("strong", null, "\u5927\u5C0F:"),
                            createTextVNode(" " + toDisplayString(formatFileSize(unref(previewImage).size)), 1)
                          ]),
                          createVNode("div", { class: "detail-item" }, [
                            createVNode("strong", null, "\u7C7B\u578B:"),
                            createTextVNode(" " + toDisplayString(unref(previewImage).type), 1)
                          ]),
                          createVNode("div", { class: "detail-item" }, [
                            createVNode("strong", null, "\u5206\u7C7B:"),
                            createTextVNode(" " + toDisplayString(getCategoryName(unref(previewImage).category)), 1)
                          ]),
                          createVNode("div", { class: "detail-item" }, [
                            createVNode("strong", null, "\u4E0A\u4F20\u65F6\u95F4:"),
                            createTextVNode(" " + toDisplayString(formatDate(unref(previewImage).uploadDate)), 1)
                          ]),
                          unref(previewImage).tags.length > 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "detail-item"
                          }, [
                            createVNode("strong", null, "\u6807\u7B7E:"),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(previewImage).tags, (tag) => {
                              return openBlock(), createBlock(VChip, {
                                key: tag,
                                size: "small",
                                class: "ml-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(tag), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])) : createCommentVNode("", true),
                          unref(previewImage).description ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "detail-item"
                          }, [
                            createVNode("strong", null, "\u63CF\u8FF0:"),
                            createTextVNode(" " + toDisplayString(unref(previewImage).description), 1)
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        onClick: ($event) => copyUrl(unref(previewImage).url)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u590D\u5236\u94FE\u63A5")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        onClick: ($event) => editImage(unref(previewImage))
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u7F16\u8F91")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        color: "error",
                        onClick: ($event) => confirmDelete(unref(previewImage))
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u5220\u9664")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(showEdit),
        "onUpdate:modelValue": ($event) => isRef(showEdit) ? showEdit.value = $event : null,
        "max-width": "600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(editingImage)) {
              _push2(ssrRenderComponent(VCard, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCardTitle, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u7F16\u8F91\u56FE\u7247`);
                        } else {
                          return [
                            createTextVNode("\u7F16\u8F91\u56FE\u7247")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCardText, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VTextField, {
                            modelValue: unref(editForm).filename,
                            "onUpdate:modelValue": ($event) => unref(editForm).filename = $event,
                            label: "\u6587\u4EF6\u540D",
                            variant: "outlined",
                            class: "mb-3"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VSelect, {
                            modelValue: unref(editForm).category,
                            "onUpdate:modelValue": ($event) => unref(editForm).category = $event,
                            label: "\u5206\u7C7B",
                            items: unref(categoryOptions),
                            "item-value": "value",
                            "item-title": "title",
                            variant: "outlined",
                            class: "mb-3"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VTextField, {
                            modelValue: unref(editForm).tagsStr,
                            "onUpdate:modelValue": ($event) => unref(editForm).tagsStr = $event,
                            label: "\u6807\u7B7E (\u7528\u9017\u53F7\u5206\u9694)",
                            variant: "outlined",
                            class: "mb-3"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VTextarea, {
                            modelValue: unref(editForm).description,
                            "onUpdate:modelValue": ($event) => unref(editForm).description = $event,
                            label: "\u63CF\u8FF0",
                            variant: "outlined",
                            rows: "3"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VTextField, {
                              modelValue: unref(editForm).filename,
                              "onUpdate:modelValue": ($event) => unref(editForm).filename = $event,
                              label: "\u6587\u4EF6\u540D",
                              variant: "outlined",
                              class: "mb-3"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VSelect, {
                              modelValue: unref(editForm).category,
                              "onUpdate:modelValue": ($event) => unref(editForm).category = $event,
                              label: "\u5206\u7C7B",
                              items: unref(categoryOptions),
                              "item-value": "value",
                              "item-title": "title",
                              variant: "outlined",
                              class: "mb-3"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                            createVNode(VTextField, {
                              modelValue: unref(editForm).tagsStr,
                              "onUpdate:modelValue": ($event) => unref(editForm).tagsStr = $event,
                              label: "\u6807\u7B7E (\u7528\u9017\u53F7\u5206\u9694)",
                              variant: "outlined",
                              class: "mb-3"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VTextarea, {
                              modelValue: unref(editForm).description,
                              "onUpdate:modelValue": ($event) => unref(editForm).description = $event,
                              label: "\u63CF\u8FF0",
                              variant: "outlined",
                              rows: "3"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCardActions, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VBtn, {
                            onClick: ($event) => showEdit.value = false
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u53D6\u6D88`);
                              } else {
                                return [
                                  createTextVNode("\u53D6\u6D88")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VBtn, {
                            color: "primary",
                            onClick: saveEdit
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u4FDD\u5B58`);
                              } else {
                                return [
                                  createTextVNode("\u4FDD\u5B58")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VSpacer),
                            createVNode(VBtn, {
                              onClick: ($event) => showEdit.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u53D6\u6D88")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VBtn, {
                              color: "primary",
                              onClick: saveEdit
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u4FDD\u5B58")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCardTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u7F16\u8F91\u56FE\u7247")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(editForm).filename,
                            "onUpdate:modelValue": ($event) => unref(editForm).filename = $event,
                            label: "\u6587\u4EF6\u540D",
                            variant: "outlined",
                            class: "mb-3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VSelect, {
                            modelValue: unref(editForm).category,
                            "onUpdate:modelValue": ($event) => unref(editForm).category = $event,
                            label: "\u5206\u7C7B",
                            items: unref(categoryOptions),
                            "item-value": "value",
                            "item-title": "title",
                            variant: "outlined",
                            class: "mb-3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                          createVNode(VTextField, {
                            modelValue: unref(editForm).tagsStr,
                            "onUpdate:modelValue": ($event) => unref(editForm).tagsStr = $event,
                            label: "\u6807\u7B7E (\u7528\u9017\u53F7\u5206\u9694)",
                            variant: "outlined",
                            class: "mb-3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextarea, {
                            modelValue: unref(editForm).description,
                            "onUpdate:modelValue": ($event) => unref(editForm).description = $event,
                            label: "\u63CF\u8FF0",
                            variant: "outlined",
                            rows: "3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCardActions, null, {
                        default: withCtx(() => [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            onClick: ($event) => showEdit.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u53D6\u6D88")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "primary",
                            onClick: saveEdit
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u4FDD\u5B58")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(editingImage) ? (openBlock(), createBlock(VCard, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u7F16\u8F91\u56FE\u7247")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(editForm).filename,
                        "onUpdate:modelValue": ($event) => unref(editForm).filename = $event,
                        label: "\u6587\u4EF6\u540D",
                        variant: "outlined",
                        class: "mb-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VSelect, {
                        modelValue: unref(editForm).category,
                        "onUpdate:modelValue": ($event) => unref(editForm).category = $event,
                        label: "\u5206\u7C7B",
                        items: unref(categoryOptions),
                        "item-value": "value",
                        "item-title": "title",
                        variant: "outlined",
                        class: "mb-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                      createVNode(VTextField, {
                        modelValue: unref(editForm).tagsStr,
                        "onUpdate:modelValue": ($event) => unref(editForm).tagsStr = $event,
                        label: "\u6807\u7B7E (\u7528\u9017\u53F7\u5206\u9694)",
                        variant: "outlined",
                        class: "mb-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VTextarea, {
                        modelValue: unref(editForm).description,
                        "onUpdate:modelValue": ($event) => unref(editForm).description = $event,
                        label: "\u63CF\u8FF0",
                        variant: "outlined",
                        rows: "3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        onClick: ($event) => showEdit.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u53D6\u6D88")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: saveEdit
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u4FDD\u5B58")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(showDeleteConfirm),
        "onUpdate:modelValue": ($event) => isRef(showDeleteConfirm) ? showDeleteConfirm.value = $event : null,
        "max-width": "400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u786E\u8BA4\u5220\u9664`);
                      } else {
                        return [
                          createTextVNode("\u786E\u8BA4\u5220\u9664")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(deleteConfirmText))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(deleteConfirmText)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          onClick: ($event) => showDeleteConfirm.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u53D6\u6D88`);
                            } else {
                              return [
                                createTextVNode("\u53D6\u6D88")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "error",
                          onClick: performDelete
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u5220\u9664`);
                            } else {
                              return [
                                createTextVNode("\u5220\u9664")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            onClick: ($event) => showDeleteConfirm.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u53D6\u6D88")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "error",
                            onClick: performDelete
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u5220\u9664")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u786E\u8BA4\u5220\u9664")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(deleteConfirmText)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          onClick: ($event) => showDeleteConfirm.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u53D6\u6D88")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "error",
                          onClick: performDelete
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u5220\u9664")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u786E\u8BA4\u5220\u9664")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(deleteConfirmText)), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        onClick: ($event) => showDeleteConfirm.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u53D6\u6D88")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "error",
                        onClick: performDelete
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u5220\u9664")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(showMessage),
        "onUpdate:modelValue": ($event) => isRef(showMessage) ? showMessage.value = $event : null,
        color: unref(messageType),
        timeout: 3e3
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              variant: "text",
              onClick: ($event) => showMessage.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u5173\u95ED`);
                } else {
                  return [
                    createTextVNode("\u5173\u95ED")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                variant: "text",
                onClick: ($event) => showMessage.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode("\u5173\u95ED")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(message))} `);
          } else {
            return [
              createTextVNode(toDisplayString(unref(message)) + " ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImageManager.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ImageManager = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-12d3a28e"]]);
function useFileDrop() {
  function hasFilesOrFolders(e) {
    var _a2, _b2;
    var _a, _b;
    const entries = [...(_a2 = (_a = e.dataTransfer) == null ? void 0 : _a.items) != null ? _a2 : []].filter((x) => x.kind === "file").map((x) => x.webkitGetAsEntry()).filter(Boolean);
    return entries.length > 0 || [...(_b2 = (_b = e.dataTransfer) == null ? void 0 : _b.files) != null ? _b2 : []].length > 0;
  }
  async function handleDrop(e) {
    var _a2, _b2;
    var _a, _b;
    const result = [];
    const entries = [...(_a2 = (_a = e.dataTransfer) == null ? void 0 : _a.items) != null ? _a2 : []].filter((x) => x.kind === "file").map((x) => x.webkitGetAsEntry()).filter(Boolean);
    if (entries.length) {
      for (const entry of entries) {
        const files = await traverseFileTree(entry, appendIfDirectory(".", entry));
        result.push(...files.map((x) => x.file));
      }
    } else {
      result.push(...[...(_b2 = (_b = e.dataTransfer) == null ? void 0 : _b.files) != null ? _b2 : []]);
    }
    return result;
  }
  return {
    handleDrop,
    hasFilesOrFolders
  };
}
function traverseFileTree(item) {
  let path = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return new Promise((resolve, reject) => {
    if (item.isFile) {
      const fileEntry = item;
      fileEntry.file((file) => resolve([{
        file,
        path
      }]), reject);
    } else if (item.isDirectory) {
      const directoryReader = item.createReader();
      directoryReader.readEntries(async (entries) => {
        const files = [];
        for (const entry of entries) {
          files.push(...await traverseFileTree(entry, appendIfDirectory(path, entry)));
        }
        resolve(files);
      });
    }
  });
}
function appendIfDirectory(path, item) {
  return item.isDirectory ? `${path}/${item.name}` : path;
}
const makeVFileInputProps = propsFactory({
  chips: Boolean,
  counter: Boolean,
  counterSizeString: {
    type: String,
    default: "$vuetify.fileInput.counterSize"
  },
  counterString: {
    type: String,
    default: "$vuetify.fileInput.counter"
  },
  hideInput: Boolean,
  multiple: Boolean,
  showSize: {
    type: [Boolean, Number, String],
    default: false,
    validator: (v) => {
      return typeof v === "boolean" || [1e3, 1024].includes(Number(v));
    }
  },
  ...makeVInputProps({
    prependIcon: "$file"
  }),
  modelValue: {
    type: [Array, Object],
    default: (props) => props.multiple ? [] : null,
    validator: (val) => {
      return wrapInArray(val).every((v) => v != null && typeof v === "object");
    }
  },
  ...makeVFieldProps({
    clearable: true
  })
}, "VFileInput");
const VFileInput = genericComponent()({
  name: "VFileInput",
  inheritAttrs: false,
  props: makeVFileInputProps(),
  emits: {
    "click:control": (e) => true,
    "mousedown:control": (e) => true,
    "update:focused": (focused) => true,
    "update:modelValue": (files) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const model = useProxiedModel(props, "modelValue", props.modelValue, (val) => wrapInArray(val), (val) => !props.multiple && Array.isArray(val) ? val[0] : val);
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const base = computed(() => typeof props.showSize !== "boolean" ? props.showSize : void 0);
    const totalBytes = computed(() => {
      var _a;
      return ((_a = model.value) != null ? _a : []).reduce((bytes, _ref2) => {
        let {
          size = 0
        } = _ref2;
        return bytes + size;
      }, 0);
    });
    const totalBytesReadable = computed(() => humanReadableFileSize(totalBytes.value, base.value));
    const fileNames = computed(() => {
      var _a;
      return ((_a = model.value) != null ? _a : []).map((file) => {
        const {
          name = "",
          size = 0
        } = file;
        return !props.showSize ? name : `${name} (${humanReadableFileSize(size, base.value)})`;
      });
    });
    const counterValue = computed(() => {
      var _a2;
      var _a;
      const fileCount = (_a2 = (_a = model.value) == null ? void 0 : _a.length) != null ? _a2 : 0;
      if (props.showSize) return t(props.counterSizeString, fileCount, totalBytesReadable.value);
      else return t(props.counterString, fileCount);
    });
    const vInputRef = ref();
    const vFieldRef = ref();
    const inputRef = ref();
    const isActive = toRef(() => isFocused.value || props.active);
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    const isDragging = shallowRef(false);
    const {
      handleDrop,
      hasFilesOrFolders
    } = useFileDrop();
    function onFocus() {
      var _a;
      if (inputRef.value !== (void 0).activeElement) {
        (_a = inputRef.value) == null ? void 0 : _a.focus();
      }
      if (!isFocused.value) focus();
    }
    function onClickPrepend(e) {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.click();
    }
    function onControlMousedown(e) {
      emit("mousedown:control", e);
    }
    function onControlClick(e) {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.click();
      emit("click:control", e);
    }
    function onClear(e) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        model.value = [];
        callEvent(props["onClick:clear"], e);
      });
    }
    function onDragover(e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      isDragging.value = true;
    }
    function onDragleave(e) {
      e.preventDefault();
      isDragging.value = false;
    }
    async function onDrop(e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      isDragging.value = false;
      if (!inputRef.value || !hasFilesOrFolders(e)) return;
      const dataTransfer = new DataTransfer();
      for (const file of await handleDrop(e)) {
        dataTransfer.items.add(file);
      }
      inputRef.value.files = dataTransfer.files;
      inputRef.value.dispatchEvent(new Event("change", {
        bubbles: true
      }));
    }
    watch(model, (newValue) => {
      const hasModelReset = !Array.isArray(newValue) || !newValue.length;
      if (hasModelReset && inputRef.value) {
        inputRef.value.value = "";
      }
    });
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const {
        modelValue: _,
        ...inputProps
      } = VInput.filterProps(props);
      const fieldProps = VField.filterProps(props);
      return createVNode(VInput, mergeProps({
        "ref": vInputRef,
        "modelValue": props.multiple ? model.value : model.value[0],
        "class": ["v-file-input", {
          "v-file-input--chips": !!props.chips,
          "v-file-input--dragging": isDragging.value,
          "v-file-input--hide": props.hideInput,
          "v-input--plain-underlined": isPlainOrUnderlined.value
        }, props.class],
        "style": props.style,
        "onClick:prepend": onClickPrepend
      }, rootAttrs, inputProps, {
        "centerAffix": !isPlainOrUnderlined.value,
        "focused": isFocused.value
      }), {
        ...slots,
        default: (_ref3) => {
          let {
            id,
            isDisabled,
            isDirty,
            isReadonly,
            isValid
          } = _ref3;
          return createVNode(VField, mergeProps({
            "ref": vFieldRef,
            "prepend-icon": props.prependIcon,
            "onMousedown": onControlMousedown,
            "onClick": onControlClick,
            "onClick:clear": onClear,
            "onClick:prependInner": props["onClick:prependInner"],
            "onClick:appendInner": props["onClick:appendInner"]
          }, fieldProps, {
            "id": id.value,
            "active": isActive.value || isDirty.value,
            "dirty": isDirty.value || props.dirty,
            "disabled": isDisabled.value,
            "focused": isFocused.value,
            "error": isValid.value === false,
            "onDragover": onDragover,
            "onDrop": onDrop
          }), {
            ...slots,
            default: (_ref4) => {
              var _a;
              let {
                props: {
                  class: fieldClass,
                  ...slotProps
                }
              } = _ref4;
              return createElementVNode(Fragment, null, [createElementVNode("input", mergeProps({
                "ref": inputRef,
                "type": "file",
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "multiple": props.multiple,
                "name": props.name,
                "onClick": (e) => {
                  e.stopPropagation();
                  if (isReadonly.value) e.preventDefault();
                  onFocus();
                },
                "onChange": (e) => {
                  var _a2;
                  if (!e.target) return;
                  const target = e.target;
                  model.value = [...(_a2 = target.files) != null ? _a2 : []];
                },
                "onDragleave": onDragleave,
                "onFocus": onFocus,
                "onBlur": blur
              }, slotProps, inputAttrs), null), createElementVNode("div", {
                "class": normalizeClass(fieldClass)
              }, [!!((_a = model.value) == null ? void 0 : _a.length) && !props.hideInput && (slots.selection ? slots.selection({
                fileNames: fileNames.value,
                totalBytes: totalBytes.value,
                totalBytesReadable: totalBytesReadable.value
              }) : props.chips ? fileNames.value.map((text) => createVNode(VChip, {
                "key": text,
                "size": "small",
                "text": text
              }, null)) : fileNames.value.join(", "))])]);
            }
          });
        },
        details: hasDetails ? (slotProps) => {
          var _a, _b;
          return createElementVNode(Fragment, null, [(_a = slots.details) == null ? void 0 : _a.call(slots, slotProps), hasCounter && createElementVNode(Fragment, null, [createElementVNode("span", null, null), createVNode(VCounter, {
            "active": !!((_b = model.value) == null ? void 0 : _b.length),
            "value": counterValue.value,
            "disabled": props.disabled
          }, slots.counter)])]);
        } : void 0
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, inputRef);
  }
});
const VTabsSymbol = Symbol.for("vuetify:v-tabs");
const makeVTabProps = propsFactory({
  fixed: Boolean,
  sliderColor: String,
  hideSlider: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...omit(makeVBtnProps({
    selectedClass: "v-tab--selected",
    variant: "text"
  }), ["active", "block", "flat", "location", "position", "symbol"])
}, "VTab");
const VTab = genericComponent()({
  name: "VTab",
  props: makeVTabProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      textColorClasses: sliderColorClasses,
      textColorStyles: sliderColorStyles
    } = useTextColor(() => props.sliderColor);
    const rootEl = ref();
    const sliderEl = ref();
    const isHorizontal = computed(() => props.direction === "horizontal");
    const isSelected = computed(() => {
      var _a2;
      var _a, _b;
      return (_a2 = (_b = (_a = rootEl.value) == null ? void 0 : _a.group) == null ? void 0 : _b.isSelected.value) != null ? _a2 : false;
    });
    function updateSlider(_ref2) {
      var _a, _b;
      let {
        value
      } = _ref2;
      if (value) {
        const prevEl = (_b = (_a = rootEl.value) == null ? void 0 : _a.$el.parentElement) == null ? void 0 : _b.querySelector(".v-tab--selected .v-tab__slider");
        const nextEl = sliderEl.value;
        if (!prevEl || !nextEl) return;
        const color = getComputedStyle(prevEl).color;
        const prevBox = prevEl.getBoundingClientRect();
        const nextBox = nextEl.getBoundingClientRect();
        const xy = isHorizontal.value ? "x" : "y";
        const XY = isHorizontal.value ? "X" : "Y";
        const rightBottom = isHorizontal.value ? "right" : "bottom";
        const widthHeight = isHorizontal.value ? "width" : "height";
        const prevPos = prevBox[xy];
        const nextPos = nextBox[xy];
        const delta = prevPos > nextPos ? prevBox[rightBottom] - nextBox[rightBottom] : prevBox[xy] - nextBox[xy];
        const origin = Math.sign(delta) > 0 ? isHorizontal.value ? "right" : "bottom" : Math.sign(delta) < 0 ? isHorizontal.value ? "left" : "top" : "center";
        const size = Math.abs(delta) + (Math.sign(delta) < 0 ? prevBox[widthHeight] : nextBox[widthHeight]);
        const scale = size / Math.max(prevBox[widthHeight], nextBox[widthHeight]) || 0;
        const initialScale = prevBox[widthHeight] / nextBox[widthHeight] || 0;
        const sigma = 1.5;
        animate(nextEl, {
          backgroundColor: [color, "currentcolor"],
          transform: [`translate${XY}(${delta}px) scale${XY}(${initialScale})`, `translate${XY}(${delta / sigma}px) scale${XY}(${(scale - 1) / sigma + 1})`, "none"],
          transformOrigin: Array(3).fill(origin)
        }, {
          duration: 225,
          easing: standardEasing
        });
      }
    }
    useRender(() => {
      const btnProps = VBtn.filterProps(props);
      return createVNode(VBtn, mergeProps({
        "symbol": VTabsSymbol,
        "ref": rootEl,
        "class": ["v-tab", props.class],
        "style": props.style,
        "tabindex": isSelected.value ? 0 : -1,
        "role": "tab",
        "aria-selected": String(isSelected.value),
        "active": false
      }, btnProps, attrs, {
        "block": props.fixed,
        "maxWidth": props.fixed ? 300 : void 0,
        "onGroup:selected": updateSlider
      }), {
        ...slots,
        default: () => {
          var _a2;
          var _a;
          return createElementVNode(Fragment, null, [(_a2 = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _a2 : props.text, !props.hideSlider && createElementVNode("div", {
            "ref": sliderEl,
            "class": normalizeClass(["v-tab__slider", sliderColorClasses.value]),
            "style": normalizeStyle(sliderColorStyles.value)
          }, null)]);
        }
      });
    });
    return forwardRefs({}, rootEl);
  }
});
const handleGesture = (wrapper) => {
  const {
    touchstartX,
    touchendX,
    touchstartY,
    touchendY
  } = wrapper;
  const dirRatio = 0.5;
  const minDistance = 16;
  wrapper.offsetX = touchendX - touchstartX;
  wrapper.offsetY = touchendY - touchstartY;
  if (Math.abs(wrapper.offsetY) < dirRatio * Math.abs(wrapper.offsetX)) {
    wrapper.left && touchendX < touchstartX - minDistance && wrapper.left(wrapper);
    wrapper.right && touchendX > touchstartX + minDistance && wrapper.right(wrapper);
  }
  if (Math.abs(wrapper.offsetX) < dirRatio * Math.abs(wrapper.offsetY)) {
    wrapper.up && touchendY < touchstartY - minDistance && wrapper.up(wrapper);
    wrapper.down && touchendY > touchstartY + minDistance && wrapper.down(wrapper);
  }
};
function touchstart(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchstartX = touch.clientX;
  wrapper.touchstartY = touch.clientY;
  (_a = wrapper.start) == null ? void 0 : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
}
function touchend(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchendX = touch.clientX;
  wrapper.touchendY = touch.clientY;
  (_a = wrapper.end) == null ? void 0 : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
  handleGesture(wrapper);
}
function touchmove(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchmoveX = touch.clientX;
  wrapper.touchmoveY = touch.clientY;
  (_a = wrapper.move) == null ? void 0 : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
}
function createHandlers() {
  let value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const wrapper = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: value.left,
    right: value.right,
    up: value.up,
    down: value.down,
    start: value.start,
    move: value.move,
    end: value.end
  };
  return {
    touchstart: (e) => touchstart(e, wrapper),
    touchend: (e) => touchend(e, wrapper),
    touchmove: (e) => touchmove(e, wrapper)
  };
}
function mounted(el, binding) {
  var _a2, _b;
  var _a;
  const value = binding.value;
  const target = (value == null ? void 0 : value.parent) ? el.parentElement : el;
  const options = (_a2 = value == null ? void 0 : value.options) != null ? _a2 : {
    passive: true
  };
  const uid = (_a = binding.instance) == null ? void 0 : _a.$.uid;
  if (!target || !uid) return;
  const handlers = createHandlers(binding.value);
  target._touchHandlers = (_b = target._touchHandlers) != null ? _b : /* @__PURE__ */ Object.create(null);
  target._touchHandlers[uid] = handlers;
  keys(handlers).forEach((eventName) => {
    target.addEventListener(eventName, handlers[eventName], options);
  });
}
function unmounted(el, binding) {
  var _a, _b;
  const target = ((_a = binding.value) == null ? void 0 : _a.parent) ? el.parentElement : el;
  const uid = (_b = binding.instance) == null ? void 0 : _b.$.uid;
  if (!(target == null ? void 0 : target._touchHandlers) || !uid) return;
  const handlers = target._touchHandlers[uid];
  keys(handlers).forEach((eventName) => {
    target.removeEventListener(eventName, handlers[eventName]);
  });
  delete target._touchHandlers[uid];
}
const Touch = {
  mounted,
  unmounted
};
const VWindowSymbol = Symbol.for("vuetify:v-window");
const VWindowGroupSymbol = Symbol.for("vuetify:v-window-group");
const makeVWindowProps = propsFactory({
  continuous: Boolean,
  nextIcon: {
    type: [Boolean, String, Function, Object],
    default: "$next"
  },
  prevIcon: {
    type: [Boolean, String, Function, Object],
    default: "$prev"
  },
  reverse: Boolean,
  showArrows: {
    type: [Boolean, String],
    validator: (v) => typeof v === "boolean" || v === "hover"
  },
  touch: {
    type: [Object, Boolean],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  modelValue: null,
  disabled: Boolean,
  selectedClass: {
    type: String,
    default: "v-window-item--active"
  },
  // TODO: mandatory should probably not be exposed but do this for now
  mandatory: {
    type: [Boolean, String],
    default: "force"
  },
  ...makeComponentProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VWindow");
const VWindow = genericComponent()({
  name: "VWindow",
  directives: {
    vTouch: Touch
  },
  props: makeVWindowProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      isRtl
    } = useRtl();
    const {
      t
    } = useLocale();
    const group = useGroup(props, VWindowGroupSymbol);
    const rootRef = ref();
    const isRtlReverse = computed(() => isRtl.value ? !props.reverse : props.reverse);
    const isReversed = shallowRef(false);
    const transition = computed(() => {
      const axis = props.direction === "vertical" ? "y" : "x";
      const reverse = isRtlReverse.value ? !isReversed.value : isReversed.value;
      const direction = reverse ? "-reverse" : "";
      return `v-window-${axis}${direction}-transition`;
    });
    const transitionCount = shallowRef(0);
    const transitionHeight = ref(void 0);
    const activeIndex = computed(() => {
      return group.items.value.findIndex((item) => group.selected.value.includes(item.id));
    });
    watch(activeIndex, (newVal, oldVal) => {
      const itemsLength = group.items.value.length;
      const lastIndex = itemsLength - 1;
      if (itemsLength <= 2) {
        isReversed.value = newVal < oldVal;
      } else if (newVal === lastIndex && oldVal === 0) {
        isReversed.value = true;
      } else if (newVal === 0 && oldVal === lastIndex) {
        isReversed.value = false;
      } else {
        isReversed.value = newVal < oldVal;
      }
    });
    provide(VWindowSymbol, {
      transition,
      isReversed,
      transitionCount,
      transitionHeight,
      rootRef
    });
    const canMoveBack = toRef(() => props.continuous || activeIndex.value !== 0);
    const canMoveForward = toRef(() => props.continuous || activeIndex.value !== group.items.value.length - 1);
    function prev() {
      canMoveBack.value && group.prev();
    }
    function next() {
      canMoveForward.value && group.next();
    }
    const arrows = computed(() => {
      const arrows2 = [];
      const prevProps = {
        icon: isRtl.value ? props.nextIcon : props.prevIcon,
        class: `v-window__${isRtlReverse.value ? "right" : "left"}`,
        onClick: group.prev,
        "aria-label": t("$vuetify.carousel.prev")
      };
      arrows2.push(canMoveBack.value ? slots.prev ? slots.prev({
        props: prevProps
      }) : createVNode(VBtn, prevProps, null) : createElementVNode("div", null, null));
      const nextProps = {
        icon: isRtl.value ? props.prevIcon : props.nextIcon,
        class: `v-window__${isRtlReverse.value ? "left" : "right"}`,
        onClick: group.next,
        "aria-label": t("$vuetify.carousel.next")
      };
      arrows2.push(canMoveForward.value ? slots.next ? slots.next({
        props: nextProps
      }) : createVNode(VBtn, nextProps, null) : createElementVNode("div", null, null));
      return arrows2;
    });
    const touchOptions = computed(() => {
      if (props.touch === false) return props.touch;
      const options = {
        left: () => {
          isRtlReverse.value ? prev() : next();
        },
        right: () => {
          isRtlReverse.value ? next() : prev();
        },
        start: (_ref2) => {
          let {
            originalEvent
          } = _ref2;
          originalEvent.stopPropagation();
        }
      };
      return {
        ...options,
        ...props.touch === true ? {} : props.touch
      };
    });
    useRender(() => withDirectives(createVNode(props.tag, {
      "ref": rootRef,
      "class": normalizeClass(["v-window", {
        "v-window--show-arrows-on-hover": props.showArrows === "hover"
      }, themeClasses.value, props.class]),
      "style": normalizeStyle(props.style)
    }, {
      default: () => {
        var _a, _b;
        return [createElementVNode("div", {
          "class": "v-window__container",
          "style": {
            height: transitionHeight.value
          }
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots, {
          group
        }), props.showArrows !== false && createElementVNode("div", {
          "class": "v-window__controls"
        }, [arrows.value])]), (_b = slots.additional) == null ? void 0 : _b.call(slots, {
          group
        })];
      }
    }), [[Touch, touchOptions.value]]));
    return {
      group
    };
  }
});
const makeVTabsWindowProps = propsFactory({
  ...omit(makeVWindowProps(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VTabsWindow");
const VTabsWindow = genericComponent()({
  name: "VTabsWindow",
  props: makeVTabsWindowProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const group = inject(VTabsSymbol, null);
    const _model = useProxiedModel(props, "modelValue");
    const model = computed({
      get() {
        var _a;
        if (_model.value != null || !group) return _model.value;
        return (_a = group.items.value.find((item) => group.selected.value.includes(item.id))) == null ? void 0 : _a.value;
      },
      set(val) {
        _model.value = val;
      }
    });
    useRender(() => {
      const windowProps = VWindow.filterProps(props);
      return createVNode(VWindow, mergeProps({
        "_as": "VTabsWindow"
      }, windowProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-tabs-window", props.class],
        "style": props.style,
        "mandatory": false,
        "touch": false
      }), slots);
    });
    return {};
  }
});
const makeVWindowItemProps = propsFactory({
  reverseTransition: {
    type: [Boolean, String],
    default: void 0
  },
  transition: {
    type: [Boolean, String],
    default: void 0
  },
  ...makeComponentProps(),
  ...makeGroupItemProps(),
  ...makeLazyProps()
}, "VWindowItem");
const VWindowItem = genericComponent()({
  name: "VWindowItem",
  directives: {
    vTouch: Touch
  },
  props: makeVWindowItemProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const window = inject(VWindowSymbol);
    const groupItem = useGroupItem(props, VWindowGroupSymbol);
    const {
      isBooted
    } = useSsrBoot();
    if (!window || !groupItem) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const isTransitioning = shallowRef(false);
    const hasTransition = computed(() => isBooted.value && (window.isReversed.value ? props.reverseTransition !== false : props.transition !== false));
    function onAfterTransition() {
      if (!isTransitioning.value || !window) {
        return;
      }
      isTransitioning.value = false;
      if (window.transitionCount.value > 0) {
        window.transitionCount.value -= 1;
        if (window.transitionCount.value === 0) {
          window.transitionHeight.value = void 0;
        }
      }
    }
    function onBeforeTransition() {
      var _a;
      if (isTransitioning.value || !window) {
        return;
      }
      isTransitioning.value = true;
      if (window.transitionCount.value === 0) {
        window.transitionHeight.value = convertToUnit((_a = window.rootRef.value) == null ? void 0 : _a.clientHeight);
      }
      window.transitionCount.value += 1;
    }
    function onTransitionCancelled() {
      onAfterTransition();
    }
    function onEnterTransition(el) {
      if (!isTransitioning.value) {
        return;
      }
      nextTick(() => {
        if (!hasTransition.value || !isTransitioning.value || !window) {
          return;
        }
        window.transitionHeight.value = convertToUnit(el.clientHeight);
      });
    }
    const transition = computed(() => {
      const name = window.isReversed.value ? props.reverseTransition : props.transition;
      return !hasTransition.value ? false : {
        name: typeof name !== "string" ? window.transition.value : name,
        onBeforeEnter: onBeforeTransition,
        onAfterEnter: onAfterTransition,
        onEnterCancelled: onTransitionCancelled,
        onBeforeLeave: onBeforeTransition,
        onAfterLeave: onAfterTransition,
        onLeaveCancelled: onTransitionCancelled,
        onEnter: onEnterTransition
      };
    });
    const {
      hasContent
    } = useLazy(props, groupItem.isSelected);
    useRender(() => createVNode(MaybeTransition, {
      "transition": transition.value,
      "disabled": !isBooted.value
    }, {
      default: () => {
        var _a;
        return [withDirectives(createElementVNode("div", {
          "class": normalizeClass(["v-window-item", groupItem.selectedClass.value, props.class]),
          "style": normalizeStyle(props.style)
        }, [hasContent.value && ((_a = slots.default) == null ? void 0 : _a.call(slots))]), [[vShow, groupItem.isSelected.value]])];
      }
    }));
    return {
      groupItem
    };
  }
});
const makeVTabsWindowItemProps = propsFactory({
  ...makeVWindowItemProps()
}, "VTabsWindowItem");
const VTabsWindowItem = genericComponent()({
  name: "VTabsWindowItem",
  props: makeVTabsWindowItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const windowItemProps = VWindowItem.filterProps(props);
      return createVNode(VWindowItem, mergeProps({
        "_as": "VTabsWindowItem"
      }, windowItemProps, {
        "class": ["v-tabs-window-item", props.class],
        "style": props.style
      }), slots);
    });
    return {};
  }
});
function parseItems(items) {
  if (!items) return [];
  return items.map((item) => {
    if (!isObject(item)) return {
      text: item,
      value: item
    };
    return item;
  });
}
const makeVTabsProps = propsFactory({
  alignTabs: {
    type: String,
    default: "start"
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: void 0
  },
  hideSlider: Boolean,
  sliderColor: String,
  ...makeVSlideGroupProps({
    mandatory: "force",
    selectedClass: "v-tab-item--selected"
  }),
  ...makeDensityProps(),
  ...makeTagProps()
}, "VTabs");
const VTabs = genericComponent()({
  name: "VTabs",
  props: makeVTabsProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const items = computed(() => parseItems(props.items));
    const {
      densityClasses
    } = useDensity(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.bgColor);
    const {
      scopeId
    } = useScopeId();
    provideDefaults({
      VTab: {
        color: toRef(() => props.color),
        direction: toRef(() => props.direction),
        stacked: toRef(() => props.stacked),
        fixed: toRef(() => props.fixedTabs),
        sliderColor: toRef(() => props.sliderColor),
        hideSlider: toRef(() => props.hideSlider)
      }
    });
    useRender(() => {
      const slideGroupProps = VSlideGroup.filterProps(props);
      const hasWindow = !!(slots.window || props.items.length > 0);
      return createElementVNode(Fragment, null, [createVNode(VSlideGroup, mergeProps(slideGroupProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-tabs", `v-tabs--${props.direction}`, `v-tabs--align-tabs-${props.alignTabs}`, {
          "v-tabs--fixed-tabs": props.fixedTabs,
          "v-tabs--grow": props.grow,
          "v-tabs--stacked": props.stacked
        }, densityClasses.value, backgroundColorClasses.value, props.class],
        "style": [{
          "--v-tabs-height": convertToUnit(props.height)
        }, backgroundColorStyles.value, props.style],
        "role": "tablist",
        "symbol": VTabsSymbol
      }, scopeId, attrs), {
        default: () => {
          var _a2;
          var _a;
          return [(_a2 = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _a2 : items.value.map((item) => {
            var _a3;
            var _a22;
            return (_a3 = (_a22 = slots.tab) == null ? void 0 : _a22.call(slots, {
              item
            })) != null ? _a3 : createVNode(VTab, mergeProps(item, {
              "key": item.text,
              "value": item.value
            }), {
              default: slots[`tab.${item.value}`] ? () => {
                var _a32;
                return (_a32 = slots[`tab.${item.value}`]) == null ? void 0 : _a32.call(slots, {
                  item
                });
              } : void 0
            });
          })];
        }
      }), hasWindow && createVNode(VTabsWindow, mergeProps({
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "key": "tabs-window"
      }, scopeId), {
        default: () => {
          var _a;
          return [items.value.map((item) => {
            var _a3;
            var _a2;
            return (_a3 = (_a2 = slots.item) == null ? void 0 : _a2.call(slots, {
              item
            })) != null ? _a3 : createVNode(VTabsWindowItem, {
              "value": item.value
            }, {
              default: () => {
                var _a32;
                return (_a32 = slots[`item.${item.value}`]) == null ? void 0 : _a32.call(slots, {
                  item
                });
              }
            });
          }), (_a = slots.window) == null ? void 0 : _a.call(slots)];
        }
      })]);
    });
    return {};
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HomepageManager",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref("background");
    const saving = ref(false);
    const showAddPartner = ref(false);
    const showDeleteConfirm = ref(false);
    const partnerFormValid = ref(false);
    const showMessage = ref(false);
    const message = ref("");
    const messageType = ref("success");
    const currentBackground = ref("/images/default-hero-bg.svg");
    const uploadedFile = ref([]);
    const heroContent = ref({
      title: "\u5922\u306E\u5BB6\u63A2\u3057\u3092<br>\u304A\u624B\u4F1D\u3044\u3057\u307E\u3059\u3002",
      description: "\u5546\u54C1\u306E\u9999\u308A\u3082\u3068\u3066\u3082\u3088\u304F\u3001\u304A\u5BA2\u69D8\u306B\u3082\u5927\u5909\u559C\u3070\u308C\u3066\u304A\u308A\u307E\u3059\u3002\u30F4\u30A1\u30EB\u30D7\u30C7\u30FC\u30C8\u30C4\u30A4\u30B9\u3001<br>\u30C8\u30C1\u30E7\u30B3\u30EC\u30FC\u30C8\u306E\u5229\u70B9\u3082\u3042\u308A\u307E\u3059\u3002\u60B2\u3057\u3044\u6E56\u306E\u89B3\u3048\u3082\u3001\u30A6\u30E9\u30E0\u30B3\u30FC\u30D1\u30FC\u30FB\u30EB\u30C8\u30E9\u30E0",
      button1Text: "\u79C1\u305F\u3061\u306B\u3064\u3044\u3066",
      button1Link: "/about",
      button2Text: "\u30B5\u30FC\u30D3\u30B9\u8A73\u7D30",
      button2Link: "/services"
    });
    const partners = ref([]);
    const partnerForm = ref({
      name: "",
      description: "",
      link: "",
      logo: ""
    });
    const partnerLogoFile = ref([]);
    const editingPartnerIndex = ref(null);
    const deleteTarget = ref(null);
    const deleteTargetIndex = ref(null);
    const presetImages = [
      {
        name: "\u73C8\u7432\u4E8B\u696D",
        url: "/images/hero-bg-1.svg"
      },
      {
        name: "\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8",
        url: "/images/hero-bg-2.svg"
      },
      {
        name: "\u6280\u8853\u7814\u7A76\u958B\u767A",
        url: "/images/hero-bg-3.svg"
      },
      {
        name: "\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u904B\u55B6",
        url: "/images/hero-bg-4.svg"
      },
      {
        name: "\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3",
        url: "/images/hero-bg-5.svg"
      },
      {
        name: "\u672A\u6765\u30D3\u30B8\u30E7\u30F3",
        url: "/images/hero-bg-6.svg"
      }
    ];
    const saveSettings = () => {
      try {
        const settings = {
          background: currentBackground.value,
          heroContent: heroContent.value,
          partners: partners.value
        };
        localStorage.setItem("notrace_homepage", JSON.stringify(settings));
      } catch (error) {
        console.error("Failed to save settings:", error);
      }
    };
    const selectPreset = (preset) => {
      currentBackground.value = preset.url;
      saveSettings();
      showMessage.value = true;
      message.value = `\u5DF2\u8BBE\u7F6E\u4E3A: ${preset.name}`;
      messageType.value = "success";
    };
    const handleFileUpload = (files) => {
      const fileArray = Array.isArray(files) ? files : [files];
      if (fileArray && fileArray.length > 0) {
        const file = fileArray[0];
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (e) => {
            var _a;
            currentBackground.value = (_a = e.target) == null ? void 0 : _a.result;
            saveSettings();
            showMessage.value = true;
            message.value = "\u80CC\u666F\u56FE\u7247\u5DF2\u4E0A\u4F20";
            messageType.value = "success";
          };
          reader.readAsDataURL(file);
        } else {
          showMessage.value = true;
          message.value = "\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6";
          messageType.value = "error";
        }
      }
    };
    const previewBackground = () => {
      (void 0).open(currentBackground.value, "_blank");
    };
    const saveHeroContent = () => {
      saving.value = true;
      setTimeout(() => {
        saveSettings();
        saving.value = false;
        showMessage.value = true;
        message.value = "Hero\u5185\u5BB9\u5DF2\u4FDD\u5B58";
        messageType.value = "success";
      }, 500);
    };
    const handlePartnerLogoUpload = (files) => {
      const fileArray = Array.isArray(files) ? files : [files];
      if (fileArray && fileArray.length > 0) {
        const file = fileArray[0];
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (e) => {
            var _a;
            partnerForm.value.logo = (_a = e.target) == null ? void 0 : _a.result;
          };
          reader.readAsDataURL(file);
        }
      }
    };
    const editPartner = (partner, index2) => {
      editingPartnerIndex.value = index2;
      partnerForm.value = { ...partner };
      showAddPartner.value = true;
    };
    const confirmDeletePartner = (partner, index2) => {
      deleteTarget.value = partner;
      deleteTargetIndex.value = index2;
      showDeleteConfirm.value = true;
    };
    const deletePartner = () => {
      if (deleteTargetIndex.value !== null) {
        partners.value.splice(deleteTargetIndex.value, 1);
        saveSettings();
        showMessage.value = true;
        message.value = "\u5408\u4F5C\u4F19\u4F34\u5DF2\u5220\u9664";
        messageType.value = "success";
      }
      showDeleteConfirm.value = false;
      deleteTarget.value = null;
      deleteTargetIndex.value = null;
    };
    const savePartner = () => {
      if (editingPartnerIndex.value !== null) {
        partners.value[editingPartnerIndex.value] = { ...partnerForm.value };
        showMessage.value = true;
        message.value = "\u5408\u4F5C\u4F19\u4F34\u5DF2\u66F4\u65B0";
        messageType.value = "success";
      } else {
        partners.value.push({ ...partnerForm.value });
        showMessage.value = true;
        message.value = "\u5408\u4F5C\u4F19\u4F34\u5DF2\u6DFB\u52A0";
        messageType.value = "success";
      }
      saveSettings();
      cancelPartnerEdit();
    };
    const cancelPartnerEdit = () => {
      showAddPartner.value = false;
      editingPartnerIndex.value = null;
      partnerForm.value = {
        name: "",
        description: "",
        link: "",
        logo: ""
      };
      partnerLogoFile.value = [];
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "homepage-manager" }, _attrs))} data-v-968226e1>`);
      _push(ssrRenderComponent(VTabs, {
        modelValue: activeTab.value,
        "onUpdate:modelValue": ($event) => activeTab.value = $event,
        color: "primary",
        class: "mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTab, { value: "background" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { start: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-image`);
                      } else {
                        return [
                          createTextVNode("mdi-image")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` \u80CC\u666F\u56FE\u7247\u7BA1\u7406 `);
                } else {
                  return [
                    createVNode(VIcon, { start: "" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-image")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" \u80CC\u666F\u56FE\u7247\u7BA1\u7406 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, { value: "partners" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { start: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-handshake`);
                      } else {
                        return [
                          createTextVNode("mdi-handshake")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` \u5408\u4F5C\u4F19\u4F34\u7BA1\u7406 `);
                } else {
                  return [
                    createVNode(VIcon, { start: "" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-handshake")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" \u5408\u4F5C\u4F19\u4F34\u7BA1\u7406 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTab, { value: "background" }, {
                default: withCtx(() => [
                  createVNode(VIcon, { start: "" }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-image")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" \u80CC\u666F\u56FE\u7247\u7BA1\u7406 ")
                ]),
                _: 1
              }),
              createVNode(VTab, { value: "partners" }, {
                default: withCtx(() => [
                  createVNode(VIcon, { start: "" }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-handshake")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" \u5408\u4F5C\u4F19\u4F34\u7BA1\u7406 ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VWindow, {
        modelValue: activeTab.value,
        "onUpdate:modelValue": ($event) => activeTab.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VWindowItem, { value: "background" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="tab-content" data-v-968226e1${_scopeId2}><div class="content-header" data-v-968226e1${_scopeId2}><h2 class="section-title" data-v-968226e1${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, { start: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-image`);
                      } else {
                        return [
                          createTextVNode("mdi-image")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` Hero\u80CC\u666F\u56FE\u7247\u7BA1\u7406 </h2><p class="section-description" data-v-968226e1${_scopeId2}> \u7BA1\u7406\u9996\u9875Hero\u533A\u57DF\u7684\u80CC\u666F\u56FE\u7247\u548C\u5185\u5BB9\u8BBE\u7F6E </p></div>`);
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, { title: "\u80CC\u666F\u56FE\u7247\u8BBE\u7F6E" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardText, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="current-background" data-v-968226e1${_scopeId6}><div class="background-preview" data-v-968226e1${_scopeId6}><img${ssrRenderAttr("src", currentBackground.value)} alt="\u5F53\u524D\u80CC\u666F" class="preview-image" data-v-968226e1${_scopeId6}><div class="preview-overlay" data-v-968226e1${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VBtn, {
                                            icon: "mdi-eye",
                                            color: "white",
                                            onClick: previewBackground
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div></div><div class="background-info" data-v-968226e1${_scopeId6}><h4 data-v-968226e1${_scopeId6}>\u5F53\u524D\u80CC\u666F</h4><p data-v-968226e1${_scopeId6}>\u70B9\u51FB\u9884\u8BBE\u56FE\u7247\u6216\u4E0A\u4F20\u81EA\u5B9A\u4E49\u56FE\u7247\u6765\u66F4\u6362\u80CC\u666F</p></div></div>`);
                                          _push7(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent7, _scopeId6));
                                          _push7(`<div class="preset-images" data-v-968226e1${_scopeId6}><h4 class="mb-3" data-v-968226e1${_scopeId6}>\u9884\u8BBE\u80CC\u666F\u56FE\u7247</h4><div class="preset-grid" data-v-968226e1${_scopeId6}><!--[-->`);
                                          ssrRenderList(presetImages, (preset, index2) => {
                                            _push7(`<div class="${ssrRenderClass([{ active: currentBackground.value === preset.url }, "preset-item"])}" data-v-968226e1${_scopeId6}><img${ssrRenderAttr("src", preset.url)}${ssrRenderAttr("alt", preset.name)} data-v-968226e1${_scopeId6}><div class="preset-overlay" data-v-968226e1${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VIcon, { color: "white" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`mdi-check`);
                                                } else {
                                                  return [
                                                    createTextVNode("mdi-check")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</div></div>`);
                                          });
                                          _push7(`<!--]--></div></div>`);
                                          _push7(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent7, _scopeId6));
                                          _push7(`<div class="upload-section" data-v-968226e1${_scopeId6}><h4 class="mb-3" data-v-968226e1${_scopeId6}>\u4E0A\u4F20\u81EA\u5B9A\u4E49\u80CC\u666F</h4>`);
                                          _push7(ssrRenderComponent(VFileInput, {
                                            modelValue: uploadedFile.value,
                                            "onUpdate:modelValue": [($event) => uploadedFile.value = $event, handleFileUpload],
                                            label: "\u9009\u62E9\u56FE\u7247\u6587\u4EF6",
                                            accept: "image/*",
                                            "prepend-icon": "mdi-upload",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "current-background" }, [
                                              createVNode("div", { class: "background-preview" }, [
                                                createVNode("img", {
                                                  src: currentBackground.value,
                                                  alt: "\u5F53\u524D\u80CC\u666F",
                                                  class: "preview-image"
                                                }, null, 8, ["src"]),
                                                createVNode("div", { class: "preview-overlay" }, [
                                                  createVNode(VBtn, {
                                                    icon: "mdi-eye",
                                                    color: "white",
                                                    onClick: previewBackground
                                                  })
                                                ])
                                              ]),
                                              createVNode("div", { class: "background-info" }, [
                                                createVNode("h4", null, "\u5F53\u524D\u80CC\u666F"),
                                                createVNode("p", null, "\u70B9\u51FB\u9884\u8BBE\u56FE\u7247\u6216\u4E0A\u4F20\u81EA\u5B9A\u4E49\u56FE\u7247\u6765\u66F4\u6362\u80CC\u666F")
                                              ])
                                            ]),
                                            createVNode(VDivider, { class: "my-4" }),
                                            createVNode("div", { class: "preset-images" }, [
                                              createVNode("h4", { class: "mb-3" }, "\u9884\u8BBE\u80CC\u666F\u56FE\u7247"),
                                              createVNode("div", { class: "preset-grid" }, [
                                                (openBlock(), createBlock(Fragment, null, renderList(presetImages, (preset, index2) => {
                                                  return createVNode("div", {
                                                    key: index2,
                                                    class: ["preset-item", { active: currentBackground.value === preset.url }],
                                                    onClick: ($event) => selectPreset(preset)
                                                  }, [
                                                    createVNode("img", {
                                                      src: preset.url,
                                                      alt: preset.name
                                                    }, null, 8, ["src", "alt"]),
                                                    createVNode("div", { class: "preset-overlay" }, [
                                                      createVNode(VIcon, { color: "white" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-check")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ])
                                                  ], 10, ["onClick"]);
                                                }), 64))
                                              ])
                                            ]),
                                            createVNode(VDivider, { class: "my-4" }),
                                            createVNode("div", { class: "upload-section" }, [
                                              createVNode("h4", { class: "mb-3" }, "\u4E0A\u4F20\u81EA\u5B9A\u4E49\u80CC\u666F"),
                                              createVNode(VFileInput, {
                                                modelValue: uploadedFile.value,
                                                "onUpdate:modelValue": [($event) => uploadedFile.value = $event, handleFileUpload],
                                                label: "\u9009\u62E9\u56FE\u7247\u6587\u4EF6",
                                                accept: "image/*",
                                                "prepend-icon": "mdi-upload",
                                                variant: "outlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "current-background" }, [
                                            createVNode("div", { class: "background-preview" }, [
                                              createVNode("img", {
                                                src: currentBackground.value,
                                                alt: "\u5F53\u524D\u80CC\u666F",
                                                class: "preview-image"
                                              }, null, 8, ["src"]),
                                              createVNode("div", { class: "preview-overlay" }, [
                                                createVNode(VBtn, {
                                                  icon: "mdi-eye",
                                                  color: "white",
                                                  onClick: previewBackground
                                                })
                                              ])
                                            ]),
                                            createVNode("div", { class: "background-info" }, [
                                              createVNode("h4", null, "\u5F53\u524D\u80CC\u666F"),
                                              createVNode("p", null, "\u70B9\u51FB\u9884\u8BBE\u56FE\u7247\u6216\u4E0A\u4F20\u81EA\u5B9A\u4E49\u56FE\u7247\u6765\u66F4\u6362\u80CC\u666F")
                                            ])
                                          ]),
                                          createVNode(VDivider, { class: "my-4" }),
                                          createVNode("div", { class: "preset-images" }, [
                                            createVNode("h4", { class: "mb-3" }, "\u9884\u8BBE\u80CC\u666F\u56FE\u7247"),
                                            createVNode("div", { class: "preset-grid" }, [
                                              (openBlock(), createBlock(Fragment, null, renderList(presetImages, (preset, index2) => {
                                                return createVNode("div", {
                                                  key: index2,
                                                  class: ["preset-item", { active: currentBackground.value === preset.url }],
                                                  onClick: ($event) => selectPreset(preset)
                                                }, [
                                                  createVNode("img", {
                                                    src: preset.url,
                                                    alt: preset.name
                                                  }, null, 8, ["src", "alt"]),
                                                  createVNode("div", { class: "preset-overlay" }, [
                                                    createVNode(VIcon, { color: "white" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-check")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ])
                                                ], 10, ["onClick"]);
                                              }), 64))
                                            ])
                                          ]),
                                          createVNode(VDivider, { class: "my-4" }),
                                          createVNode("div", { class: "upload-section" }, [
                                            createVNode("h4", { class: "mb-3" }, "\u4E0A\u4F20\u81EA\u5B9A\u4E49\u80CC\u666F"),
                                            createVNode(VFileInput, {
                                              modelValue: uploadedFile.value,
                                              "onUpdate:modelValue": [($event) => uploadedFile.value = $event, handleFileUpload],
                                              label: "\u9009\u62E9\u56FE\u7247\u6587\u4EF6",
                                              accept: "image/*",
                                              "prepend-icon": "mdi-upload",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCard, { title: "\u80CC\u666F\u56FE\u7247\u8BBE\u7F6E" }, {
                                  default: withCtx(() => [
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "current-background" }, [
                                          createVNode("div", { class: "background-preview" }, [
                                            createVNode("img", {
                                              src: currentBackground.value,
                                              alt: "\u5F53\u524D\u80CC\u666F",
                                              class: "preview-image"
                                            }, null, 8, ["src"]),
                                            createVNode("div", { class: "preview-overlay" }, [
                                              createVNode(VBtn, {
                                                icon: "mdi-eye",
                                                color: "white",
                                                onClick: previewBackground
                                              })
                                            ])
                                          ]),
                                          createVNode("div", { class: "background-info" }, [
                                            createVNode("h4", null, "\u5F53\u524D\u80CC\u666F"),
                                            createVNode("p", null, "\u70B9\u51FB\u9884\u8BBE\u56FE\u7247\u6216\u4E0A\u4F20\u81EA\u5B9A\u4E49\u56FE\u7247\u6765\u66F4\u6362\u80CC\u666F")
                                          ])
                                        ]),
                                        createVNode(VDivider, { class: "my-4" }),
                                        createVNode("div", { class: "preset-images" }, [
                                          createVNode("h4", { class: "mb-3" }, "\u9884\u8BBE\u80CC\u666F\u56FE\u7247"),
                                          createVNode("div", { class: "preset-grid" }, [
                                            (openBlock(), createBlock(Fragment, null, renderList(presetImages, (preset, index2) => {
                                              return createVNode("div", {
                                                key: index2,
                                                class: ["preset-item", { active: currentBackground.value === preset.url }],
                                                onClick: ($event) => selectPreset(preset)
                                              }, [
                                                createVNode("img", {
                                                  src: preset.url,
                                                  alt: preset.name
                                                }, null, 8, ["src", "alt"]),
                                                createVNode("div", { class: "preset-overlay" }, [
                                                  createVNode(VIcon, { color: "white" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-check")
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ], 10, ["onClick"]);
                                            }), 64))
                                          ])
                                        ]),
                                        createVNode(VDivider, { class: "my-4" }),
                                        createVNode("div", { class: "upload-section" }, [
                                          createVNode("h4", { class: "mb-3" }, "\u4E0A\u4F20\u81EA\u5B9A\u4E49\u80CC\u666F"),
                                          createVNode(VFileInput, {
                                            modelValue: uploadedFile.value,
                                            "onUpdate:modelValue": [($event) => uploadedFile.value = $event, handleFileUpload],
                                            label: "\u9009\u62E9\u56FE\u7247\u6587\u4EF6",
                                            accept: "image/*",
                                            "prepend-icon": "mdi-upload",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, { title: "Hero\u5185\u5BB9\u8BBE\u7F6E" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardText, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VForm, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextarea, {
                                                  modelValue: heroContent.value.title,
                                                  "onUpdate:modelValue": ($event) => heroContent.value.title = $event,
                                                  label: "\u4E3B\u6807\u9898",
                                                  variant: "outlined",
                                                  rows: "2",
                                                  class: "mb-3"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VTextarea, {
                                                  modelValue: heroContent.value.description,
                                                  "onUpdate:modelValue": ($event) => heroContent.value.description = $event,
                                                  label: "\u63CF\u8FF0\u6587\u5B57",
                                                  variant: "outlined",
                                                  rows: "3",
                                                  class: "mb-3"
                                                }, null, _parent8, _scopeId7));
                                                _push8(`<div class="button-settings" data-v-968226e1${_scopeId7}><h4 class="mb-3" data-v-968226e1${_scopeId7}>\u6309\u94AE\u8BBE\u7F6E</h4>`);
                                                _push8(ssrRenderComponent(VRow, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCol, { cols: "6" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: heroContent.value.button1Text,
                                                              "onUpdate:modelValue": ($event) => heroContent.value.button1Text = $event,
                                                              label: "\u6309\u94AE1\u6587\u5B57",
                                                              variant: "outlined",
                                                              density: "compact"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: heroContent.value.button1Text,
                                                                "onUpdate:modelValue": ($event) => heroContent.value.button1Text = $event,
                                                                label: "\u6309\u94AE1\u6587\u5B57",
                                                                variant: "outlined",
                                                                density: "compact"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, { cols: "6" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: heroContent.value.button1Link,
                                                              "onUpdate:modelValue": ($event) => heroContent.value.button1Link = $event,
                                                              label: "\u6309\u94AE1\u94FE\u63A5",
                                                              variant: "outlined",
                                                              density: "compact"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: heroContent.value.button1Link,
                                                                "onUpdate:modelValue": ($event) => heroContent.value.button1Link = $event,
                                                                label: "\u6309\u94AE1\u94FE\u63A5",
                                                                variant: "outlined",
                                                                density: "compact"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCol, { cols: "6" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: heroContent.value.button1Text,
                                                              "onUpdate:modelValue": ($event) => heroContent.value.button1Text = $event,
                                                              label: "\u6309\u94AE1\u6587\u5B57",
                                                              variant: "outlined",
                                                              density: "compact"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, { cols: "6" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: heroContent.value.button1Link,
                                                              "onUpdate:modelValue": ($event) => heroContent.value.button1Link = $event,
                                                              label: "\u6309\u94AE1\u94FE\u63A5",
                                                              variant: "outlined",
                                                              density: "compact"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VRow, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCol, { cols: "6" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: heroContent.value.button2Text,
                                                              "onUpdate:modelValue": ($event) => heroContent.value.button2Text = $event,
                                                              label: "\u6309\u94AE2\u6587\u5B57",
                                                              variant: "outlined",
                                                              density: "compact"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: heroContent.value.button2Text,
                                                                "onUpdate:modelValue": ($event) => heroContent.value.button2Text = $event,
                                                                label: "\u6309\u94AE2\u6587\u5B57",
                                                                variant: "outlined",
                                                                density: "compact"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, { cols: "6" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: heroContent.value.button2Link,
                                                              "onUpdate:modelValue": ($event) => heroContent.value.button2Link = $event,
                                                              label: "\u6309\u94AE2\u94FE\u63A5",
                                                              variant: "outlined",
                                                              density: "compact"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: heroContent.value.button2Link,
                                                                "onUpdate:modelValue": ($event) => heroContent.value.button2Link = $event,
                                                                label: "\u6309\u94AE2\u94FE\u63A5",
                                                                variant: "outlined",
                                                                density: "compact"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCol, { cols: "6" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: heroContent.value.button2Text,
                                                              "onUpdate:modelValue": ($event) => heroContent.value.button2Text = $event,
                                                              label: "\u6309\u94AE2\u6587\u5B57",
                                                              variant: "outlined",
                                                              density: "compact"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, { cols: "6" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: heroContent.value.button2Link,
                                                              "onUpdate:modelValue": ($event) => heroContent.value.button2Link = $event,
                                                              label: "\u6309\u94AE2\u94FE\u63A5",
                                                              variant: "outlined",
                                                              density: "compact"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`</div>`);
                                              } else {
                                                return [
                                                  createVNode(VTextarea, {
                                                    modelValue: heroContent.value.title,
                                                    "onUpdate:modelValue": ($event) => heroContent.value.title = $event,
                                                    label: "\u4E3B\u6807\u9898",
                                                    variant: "outlined",
                                                    rows: "2",
                                                    class: "mb-3"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(VTextarea, {
                                                    modelValue: heroContent.value.description,
                                                    "onUpdate:modelValue": ($event) => heroContent.value.description = $event,
                                                    label: "\u63CF\u8FF0\u6587\u5B57",
                                                    variant: "outlined",
                                                    rows: "3",
                                                    class: "mb-3"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode("div", { class: "button-settings" }, [
                                                    createVNode("h4", { class: "mb-3" }, "\u6309\u94AE\u8BBE\u7F6E"),
                                                    createVNode(VRow, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VCol, { cols: "6" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: heroContent.value.button1Text,
                                                              "onUpdate:modelValue": ($event) => heroContent.value.button1Text = $event,
                                                              label: "\u6309\u94AE1\u6587\u5B57",
                                                              variant: "outlined",
                                                              density: "compact"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, { cols: "6" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: heroContent.value.button1Link,
                                                              "onUpdate:modelValue": ($event) => heroContent.value.button1Link = $event,
                                                              label: "\u6309\u94AE1\u94FE\u63A5",
                                                              variant: "outlined",
                                                              density: "compact"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VRow, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VCol, { cols: "6" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: heroContent.value.button2Text,
                                                              "onUpdate:modelValue": ($event) => heroContent.value.button2Text = $event,
                                                              label: "\u6309\u94AE2\u6587\u5B57",
                                                              variant: "outlined",
                                                              density: "compact"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, { cols: "6" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: heroContent.value.button2Link,
                                                              "onUpdate:modelValue": ($event) => heroContent.value.button2Link = $event,
                                                              label: "\u6309\u94AE2\u94FE\u63A5",
                                                              variant: "outlined",
                                                              density: "compact"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VForm, null, {
                                              default: withCtx(() => [
                                                createVNode(VTextarea, {
                                                  modelValue: heroContent.value.title,
                                                  "onUpdate:modelValue": ($event) => heroContent.value.title = $event,
                                                  label: "\u4E3B\u6807\u9898",
                                                  variant: "outlined",
                                                  rows: "2",
                                                  class: "mb-3"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VTextarea, {
                                                  modelValue: heroContent.value.description,
                                                  "onUpdate:modelValue": ($event) => heroContent.value.description = $event,
                                                  label: "\u63CF\u8FF0\u6587\u5B57",
                                                  variant: "outlined",
                                                  rows: "3",
                                                  class: "mb-3"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode("div", { class: "button-settings" }, [
                                                  createVNode("h4", { class: "mb-3" }, "\u6309\u94AE\u8BBE\u7F6E"),
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, { cols: "6" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: heroContent.value.button1Text,
                                                            "onUpdate:modelValue": ($event) => heroContent.value.button1Text = $event,
                                                            label: "\u6309\u94AE1\u6587\u5B57",
                                                            variant: "outlined",
                                                            density: "compact"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, { cols: "6" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: heroContent.value.button1Link,
                                                            "onUpdate:modelValue": ($event) => heroContent.value.button1Link = $event,
                                                            label: "\u6309\u94AE1\u94FE\u63A5",
                                                            variant: "outlined",
                                                            density: "compact"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, { cols: "6" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: heroContent.value.button2Text,
                                                            "onUpdate:modelValue": ($event) => heroContent.value.button2Text = $event,
                                                            label: "\u6309\u94AE2\u6587\u5B57",
                                                            variant: "outlined",
                                                            density: "compact"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, { cols: "6" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: heroContent.value.button2Link,
                                                            "onUpdate:modelValue": ($event) => heroContent.value.button2Link = $event,
                                                            label: "\u6309\u94AE2\u94FE\u63A5",
                                                            variant: "outlined",
                                                            density: "compact"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardActions, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSpacer, null, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            color: "primary",
                                            onClick: saveHeroContent,
                                            loading: saving.value
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` \u4FDD\u5B58\u8BBE\u7F6E `);
                                              } else {
                                                return [
                                                  createTextVNode(" \u4FDD\u5B58\u8BBE\u7F6E ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSpacer),
                                            createVNode(VBtn, {
                                              color: "primary",
                                              onClick: saveHeroContent,
                                              loading: saving.value
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" \u4FDD\u5B58\u8BBE\u7F6E ")
                                              ]),
                                              _: 1
                                            }, 8, ["loading"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createVNode(VForm, null, {
                                            default: withCtx(() => [
                                              createVNode(VTextarea, {
                                                modelValue: heroContent.value.title,
                                                "onUpdate:modelValue": ($event) => heroContent.value.title = $event,
                                                label: "\u4E3B\u6807\u9898",
                                                variant: "outlined",
                                                rows: "2",
                                                class: "mb-3"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(VTextarea, {
                                                modelValue: heroContent.value.description,
                                                "onUpdate:modelValue": ($event) => heroContent.value.description = $event,
                                                label: "\u63CF\u8FF0\u6587\u5B57",
                                                variant: "outlined",
                                                rows: "3",
                                                class: "mb-3"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode("div", { class: "button-settings" }, [
                                                createVNode("h4", { class: "mb-3" }, "\u6309\u94AE\u8BBE\u7F6E"),
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, { cols: "6" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: heroContent.value.button1Text,
                                                          "onUpdate:modelValue": ($event) => heroContent.value.button1Text = $event,
                                                          label: "\u6309\u94AE1\u6587\u5B57",
                                                          variant: "outlined",
                                                          density: "compact"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, { cols: "6" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: heroContent.value.button1Link,
                                                          "onUpdate:modelValue": ($event) => heroContent.value.button1Link = $event,
                                                          label: "\u6309\u94AE1\u94FE\u63A5",
                                                          variant: "outlined",
                                                          density: "compact"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, { cols: "6" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: heroContent.value.button2Text,
                                                          "onUpdate:modelValue": ($event) => heroContent.value.button2Text = $event,
                                                          label: "\u6309\u94AE2\u6587\u5B57",
                                                          variant: "outlined",
                                                          density: "compact"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, { cols: "6" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: heroContent.value.button2Link,
                                                          "onUpdate:modelValue": ($event) => heroContent.value.button2Link = $event,
                                                          label: "\u6309\u94AE2\u94FE\u63A5",
                                                          variant: "outlined",
                                                          density: "compact"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardActions, null, {
                                        default: withCtx(() => [
                                          createVNode(VSpacer),
                                          createVNode(VBtn, {
                                            color: "primary",
                                            onClick: saveHeroContent,
                                            loading: saving.value
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u4FDD\u5B58\u8BBE\u7F6E ")
                                            ]),
                                            _: 1
                                          }, 8, ["loading"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCard, { title: "Hero\u5185\u5BB9\u8BBE\u7F6E" }, {
                                  default: withCtx(() => [
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createVNode(VForm, null, {
                                          default: withCtx(() => [
                                            createVNode(VTextarea, {
                                              modelValue: heroContent.value.title,
                                              "onUpdate:modelValue": ($event) => heroContent.value.title = $event,
                                              label: "\u4E3B\u6807\u9898",
                                              variant: "outlined",
                                              rows: "2",
                                              class: "mb-3"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(VTextarea, {
                                              modelValue: heroContent.value.description,
                                              "onUpdate:modelValue": ($event) => heroContent.value.description = $event,
                                              label: "\u63CF\u8FF0\u6587\u5B57",
                                              variant: "outlined",
                                              rows: "3",
                                              class: "mb-3"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode("div", { class: "button-settings" }, [
                                              createVNode("h4", { class: "mb-3" }, "\u6309\u94AE\u8BBE\u7F6E"),
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, { cols: "6" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: heroContent.value.button1Text,
                                                        "onUpdate:modelValue": ($event) => heroContent.value.button1Text = $event,
                                                        label: "\u6309\u94AE1\u6587\u5B57",
                                                        variant: "outlined",
                                                        density: "compact"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, { cols: "6" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: heroContent.value.button1Link,
                                                        "onUpdate:modelValue": ($event) => heroContent.value.button1Link = $event,
                                                        label: "\u6309\u94AE1\u94FE\u63A5",
                                                        variant: "outlined",
                                                        density: "compact"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, { cols: "6" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: heroContent.value.button2Text,
                                                        "onUpdate:modelValue": ($event) => heroContent.value.button2Text = $event,
                                                        label: "\u6309\u94AE2\u6587\u5B57",
                                                        variant: "outlined",
                                                        density: "compact"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, { cols: "6" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: heroContent.value.button2Link,
                                                        "onUpdate:modelValue": ($event) => heroContent.value.button2Link = $event,
                                                        label: "\u6309\u94AE2\u94FE\u63A5",
                                                        variant: "outlined",
                                                        density: "compact"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardActions, null, {
                                      default: withCtx(() => [
                                        createVNode(VSpacer),
                                        createVNode(VBtn, {
                                          color: "primary",
                                          onClick: saveHeroContent,
                                          loading: saving.value
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u4FDD\u5B58\u8BBE\u7F6E ")
                                          ]),
                                          _: 1
                                        }, 8, ["loading"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, { title: "\u80CC\u666F\u56FE\u7247\u8BBE\u7F6E" }, {
                                default: withCtx(() => [
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "current-background" }, [
                                        createVNode("div", { class: "background-preview" }, [
                                          createVNode("img", {
                                            src: currentBackground.value,
                                            alt: "\u5F53\u524D\u80CC\u666F",
                                            class: "preview-image"
                                          }, null, 8, ["src"]),
                                          createVNode("div", { class: "preview-overlay" }, [
                                            createVNode(VBtn, {
                                              icon: "mdi-eye",
                                              color: "white",
                                              onClick: previewBackground
                                            })
                                          ])
                                        ]),
                                        createVNode("div", { class: "background-info" }, [
                                          createVNode("h4", null, "\u5F53\u524D\u80CC\u666F"),
                                          createVNode("p", null, "\u70B9\u51FB\u9884\u8BBE\u56FE\u7247\u6216\u4E0A\u4F20\u81EA\u5B9A\u4E49\u56FE\u7247\u6765\u66F4\u6362\u80CC\u666F")
                                        ])
                                      ]),
                                      createVNode(VDivider, { class: "my-4" }),
                                      createVNode("div", { class: "preset-images" }, [
                                        createVNode("h4", { class: "mb-3" }, "\u9884\u8BBE\u80CC\u666F\u56FE\u7247"),
                                        createVNode("div", { class: "preset-grid" }, [
                                          (openBlock(), createBlock(Fragment, null, renderList(presetImages, (preset, index2) => {
                                            return createVNode("div", {
                                              key: index2,
                                              class: ["preset-item", { active: currentBackground.value === preset.url }],
                                              onClick: ($event) => selectPreset(preset)
                                            }, [
                                              createVNode("img", {
                                                src: preset.url,
                                                alt: preset.name
                                              }, null, 8, ["src", "alt"]),
                                              createVNode("div", { class: "preset-overlay" }, [
                                                createVNode(VIcon, { color: "white" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-check")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ], 10, ["onClick"]);
                                          }), 64))
                                        ])
                                      ]),
                                      createVNode(VDivider, { class: "my-4" }),
                                      createVNode("div", { class: "upload-section" }, [
                                        createVNode("h4", { class: "mb-3" }, "\u4E0A\u4F20\u81EA\u5B9A\u4E49\u80CC\u666F"),
                                        createVNode(VFileInput, {
                                          modelValue: uploadedFile.value,
                                          "onUpdate:modelValue": [($event) => uploadedFile.value = $event, handleFileUpload],
                                          label: "\u9009\u62E9\u56FE\u7247\u6587\u4EF6",
                                          accept: "image/*",
                                          "prepend-icon": "mdi-upload",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, { title: "Hero\u5185\u5BB9\u8BBE\u7F6E" }, {
                                default: withCtx(() => [
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode(VForm, null, {
                                        default: withCtx(() => [
                                          createVNode(VTextarea, {
                                            modelValue: heroContent.value.title,
                                            "onUpdate:modelValue": ($event) => heroContent.value.title = $event,
                                            label: "\u4E3B\u6807\u9898",
                                            variant: "outlined",
                                            rows: "2",
                                            class: "mb-3"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(VTextarea, {
                                            modelValue: heroContent.value.description,
                                            "onUpdate:modelValue": ($event) => heroContent.value.description = $event,
                                            label: "\u63CF\u8FF0\u6587\u5B57",
                                            variant: "outlined",
                                            rows: "3",
                                            class: "mb-3"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode("div", { class: "button-settings" }, [
                                            createVNode("h4", { class: "mb-3" }, "\u6309\u94AE\u8BBE\u7F6E"),
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, { cols: "6" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: heroContent.value.button1Text,
                                                      "onUpdate:modelValue": ($event) => heroContent.value.button1Text = $event,
                                                      label: "\u6309\u94AE1\u6587\u5B57",
                                                      variant: "outlined",
                                                      density: "compact"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, { cols: "6" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: heroContent.value.button1Link,
                                                      "onUpdate:modelValue": ($event) => heroContent.value.button1Link = $event,
                                                      label: "\u6309\u94AE1\u94FE\u63A5",
                                                      variant: "outlined",
                                                      density: "compact"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, { cols: "6" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: heroContent.value.button2Text,
                                                      "onUpdate:modelValue": ($event) => heroContent.value.button2Text = $event,
                                                      label: "\u6309\u94AE2\u6587\u5B57",
                                                      variant: "outlined",
                                                      density: "compact"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, { cols: "6" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: heroContent.value.button2Link,
                                                      "onUpdate:modelValue": ($event) => heroContent.value.button2Link = $event,
                                                      label: "\u6309\u94AE2\u94FE\u63A5",
                                                      variant: "outlined",
                                                      density: "compact"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardActions, null, {
                                    default: withCtx(() => [
                                      createVNode(VSpacer),
                                      createVNode(VBtn, {
                                        color: "primary",
                                        onClick: saveHeroContent,
                                        loading: saving.value
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u4FDD\u5B58\u8BBE\u7F6E ")
                                        ]),
                                        _: 1
                                      }, 8, ["loading"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "tab-content" }, [
                      createVNode("div", { class: "content-header" }, [
                        createVNode("h2", { class: "section-title" }, [
                          createVNode(VIcon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-image")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Hero\u80CC\u666F\u56FE\u7247\u7BA1\u7406 ")
                        ]),
                        createVNode("p", { class: "section-description" }, " \u7BA1\u7406\u9996\u9875Hero\u533A\u57DF\u7684\u80CC\u666F\u56FE\u7247\u548C\u5185\u5BB9\u8BBE\u7F6E ")
                      ]),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, { title: "\u80CC\u666F\u56FE\u7247\u8BBE\u7F6E" }, {
                                default: withCtx(() => [
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "current-background" }, [
                                        createVNode("div", { class: "background-preview" }, [
                                          createVNode("img", {
                                            src: currentBackground.value,
                                            alt: "\u5F53\u524D\u80CC\u666F",
                                            class: "preview-image"
                                          }, null, 8, ["src"]),
                                          createVNode("div", { class: "preview-overlay" }, [
                                            createVNode(VBtn, {
                                              icon: "mdi-eye",
                                              color: "white",
                                              onClick: previewBackground
                                            })
                                          ])
                                        ]),
                                        createVNode("div", { class: "background-info" }, [
                                          createVNode("h4", null, "\u5F53\u524D\u80CC\u666F"),
                                          createVNode("p", null, "\u70B9\u51FB\u9884\u8BBE\u56FE\u7247\u6216\u4E0A\u4F20\u81EA\u5B9A\u4E49\u56FE\u7247\u6765\u66F4\u6362\u80CC\u666F")
                                        ])
                                      ]),
                                      createVNode(VDivider, { class: "my-4" }),
                                      createVNode("div", { class: "preset-images" }, [
                                        createVNode("h4", { class: "mb-3" }, "\u9884\u8BBE\u80CC\u666F\u56FE\u7247"),
                                        createVNode("div", { class: "preset-grid" }, [
                                          (openBlock(), createBlock(Fragment, null, renderList(presetImages, (preset, index2) => {
                                            return createVNode("div", {
                                              key: index2,
                                              class: ["preset-item", { active: currentBackground.value === preset.url }],
                                              onClick: ($event) => selectPreset(preset)
                                            }, [
                                              createVNode("img", {
                                                src: preset.url,
                                                alt: preset.name
                                              }, null, 8, ["src", "alt"]),
                                              createVNode("div", { class: "preset-overlay" }, [
                                                createVNode(VIcon, { color: "white" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-check")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ], 10, ["onClick"]);
                                          }), 64))
                                        ])
                                      ]),
                                      createVNode(VDivider, { class: "my-4" }),
                                      createVNode("div", { class: "upload-section" }, [
                                        createVNode("h4", { class: "mb-3" }, "\u4E0A\u4F20\u81EA\u5B9A\u4E49\u80CC\u666F"),
                                        createVNode(VFileInput, {
                                          modelValue: uploadedFile.value,
                                          "onUpdate:modelValue": [($event) => uploadedFile.value = $event, handleFileUpload],
                                          label: "\u9009\u62E9\u56FE\u7247\u6587\u4EF6",
                                          accept: "image/*",
                                          "prepend-icon": "mdi-upload",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, { title: "Hero\u5185\u5BB9\u8BBE\u7F6E" }, {
                                default: withCtx(() => [
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode(VForm, null, {
                                        default: withCtx(() => [
                                          createVNode(VTextarea, {
                                            modelValue: heroContent.value.title,
                                            "onUpdate:modelValue": ($event) => heroContent.value.title = $event,
                                            label: "\u4E3B\u6807\u9898",
                                            variant: "outlined",
                                            rows: "2",
                                            class: "mb-3"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(VTextarea, {
                                            modelValue: heroContent.value.description,
                                            "onUpdate:modelValue": ($event) => heroContent.value.description = $event,
                                            label: "\u63CF\u8FF0\u6587\u5B57",
                                            variant: "outlined",
                                            rows: "3",
                                            class: "mb-3"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode("div", { class: "button-settings" }, [
                                            createVNode("h4", { class: "mb-3" }, "\u6309\u94AE\u8BBE\u7F6E"),
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, { cols: "6" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: heroContent.value.button1Text,
                                                      "onUpdate:modelValue": ($event) => heroContent.value.button1Text = $event,
                                                      label: "\u6309\u94AE1\u6587\u5B57",
                                                      variant: "outlined",
                                                      density: "compact"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, { cols: "6" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: heroContent.value.button1Link,
                                                      "onUpdate:modelValue": ($event) => heroContent.value.button1Link = $event,
                                                      label: "\u6309\u94AE1\u94FE\u63A5",
                                                      variant: "outlined",
                                                      density: "compact"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, { cols: "6" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: heroContent.value.button2Text,
                                                      "onUpdate:modelValue": ($event) => heroContent.value.button2Text = $event,
                                                      label: "\u6309\u94AE2\u6587\u5B57",
                                                      variant: "outlined",
                                                      density: "compact"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, { cols: "6" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: heroContent.value.button2Link,
                                                      "onUpdate:modelValue": ($event) => heroContent.value.button2Link = $event,
                                                      label: "\u6309\u94AE2\u94FE\u63A5",
                                                      variant: "outlined",
                                                      density: "compact"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardActions, null, {
                                    default: withCtx(() => [
                                      createVNode(VSpacer),
                                      createVNode(VBtn, {
                                        color: "primary",
                                        onClick: saveHeroContent,
                                        loading: saving.value
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u4FDD\u5B58\u8BBE\u7F6E ")
                                        ]),
                                        _: 1
                                      }, 8, ["loading"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, { value: "partners" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="tab-content" data-v-968226e1${_scopeId2}><div class="content-header" data-v-968226e1${_scopeId2}><h2 class="section-title" data-v-968226e1${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, { start: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-handshake`);
                      } else {
                        return [
                          createTextVNode("mdi-handshake")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` \u5408\u4F5C\u4F19\u4F34\u7BA1\u7406 </h2><p class="section-description" data-v-968226e1${_scopeId2}> \u7BA1\u7406\u9996\u9875\u5408\u4F5C\u4F19\u4F34Logo\u548C\u94FE\u63A5 </p></div>`);
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span data-v-968226e1${_scopeId4}>\u5408\u4F5C\u4F19\u4F34\u5217\u8868</span>`);
                              _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                color: "primary",
                                onClick: ($event) => showAddPartner.value = true,
                                "prepend-icon": "mdi-plus"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u6DFB\u52A0\u5408\u4F5C\u4F19\u4F34 `);
                                  } else {
                                    return [
                                      createTextVNode(" \u6DFB\u52A0\u5408\u4F5C\u4F19\u4F34 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("span", null, "\u5408\u4F5C\u4F19\u4F34\u5217\u8868"),
                                createVNode(VSpacer),
                                createVNode(VBtn, {
                                  color: "primary",
                                  onClick: ($event) => showAddPartner.value = true,
                                  "prepend-icon": "mdi-plus"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u6DFB\u52A0\u5408\u4F5C\u4F19\u4F34 ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="partners-grid" data-v-968226e1${_scopeId4}><!--[-->`);
                              ssrRenderList(partners.value, (partner, index2) => {
                                _push5(`<div class="partner-item" data-v-968226e1${_scopeId4}><div class="partner-logo" data-v-968226e1${_scopeId4}><img${ssrRenderAttr("src", partner.logo)}${ssrRenderAttr("alt", partner.name)} data-v-968226e1${_scopeId4}></div><div class="partner-info" data-v-968226e1${_scopeId4}><h4 data-v-968226e1${_scopeId4}>${ssrInterpolate(partner.name)}</h4><p data-v-968226e1${_scopeId4}>${ssrInterpolate(partner.description)}</p><a${ssrRenderAttr("href", partner.link)} target="_blank" class="partner-link" data-v-968226e1${_scopeId4}>${ssrInterpolate(partner.link)}</a></div><div class="partner-actions" data-v-968226e1${_scopeId4}>`);
                                _push5(ssrRenderComponent(VBtn, {
                                  icon: "mdi-pencil",
                                  size: "small",
                                  variant: "text",
                                  onClick: ($event) => editPartner(partner, index2)
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VBtn, {
                                  icon: "mdi-delete",
                                  size: "small",
                                  variant: "text",
                                  color: "error",
                                  onClick: ($event) => confirmDeletePartner(partner, index2)
                                }, null, _parent5, _scopeId4));
                                _push5(`</div></div>`);
                              });
                              _push5(`<!--]--></div>`);
                              if (partners.value.length === 0) {
                                _push5(`<div class="empty-state" data-v-968226e1${_scopeId4}>`);
                                _push5(ssrRenderComponent(VIcon, {
                                  size: "64",
                                  color: "grey"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`mdi-handshake-outline`);
                                    } else {
                                      return [
                                        createTextVNode("mdi-handshake-outline")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<h3 data-v-968226e1${_scopeId4}>\u8FD8\u6CA1\u6709\u5408\u4F5C\u4F19\u4F34</h3><p data-v-968226e1${_scopeId4}>\u70B9\u51FB&quot;\u6DFB\u52A0\u5408\u4F5C\u4F19\u4F34&quot;\u5F00\u59CB\u6DFB\u52A0</p></div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                createVNode("div", { class: "partners-grid" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(partners.value, (partner, index2) => {
                                    return openBlock(), createBlock("div", {
                                      key: index2,
                                      class: "partner-item"
                                    }, [
                                      createVNode("div", { class: "partner-logo" }, [
                                        createVNode("img", {
                                          src: partner.logo,
                                          alt: partner.name
                                        }, null, 8, ["src", "alt"])
                                      ]),
                                      createVNode("div", { class: "partner-info" }, [
                                        createVNode("h4", null, toDisplayString(partner.name), 1),
                                        createVNode("p", null, toDisplayString(partner.description), 1),
                                        createVNode("a", {
                                          href: partner.link,
                                          target: "_blank",
                                          class: "partner-link"
                                        }, toDisplayString(partner.link), 9, ["href"])
                                      ]),
                                      createVNode("div", { class: "partner-actions" }, [
                                        createVNode(VBtn, {
                                          icon: "mdi-pencil",
                                          size: "small",
                                          variant: "text",
                                          onClick: ($event) => editPartner(partner, index2)
                                        }, null, 8, ["onClick"]),
                                        createVNode(VBtn, {
                                          icon: "mdi-delete",
                                          size: "small",
                                          variant: "text",
                                          color: "error",
                                          onClick: ($event) => confirmDeletePartner(partner, index2)
                                        }, null, 8, ["onClick"])
                                      ])
                                    ]);
                                  }), 128))
                                ]),
                                partners.value.length === 0 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "empty-state"
                                }, [
                                  createVNode(VIcon, {
                                    size: "64",
                                    color: "grey"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-handshake-outline")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("h3", null, "\u8FD8\u6CA1\u6709\u5408\u4F5C\u4F19\u4F34"),
                                  createVNode("p", null, '\u70B9\u51FB"\u6DFB\u52A0\u5408\u4F5C\u4F19\u4F34"\u5F00\u59CB\u6DFB\u52A0')
                                ])) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardTitle, { class: "d-flex align-center" }, {
                            default: withCtx(() => [
                              createVNode("span", null, "\u5408\u4F5C\u4F19\u4F34\u5217\u8868"),
                              createVNode(VSpacer),
                              createVNode(VBtn, {
                                color: "primary",
                                onClick: ($event) => showAddPartner.value = true,
                                "prepend-icon": "mdi-plus"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u6DFB\u52A0\u5408\u4F5C\u4F19\u4F34 ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "partners-grid" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(partners.value, (partner, index2) => {
                                  return openBlock(), createBlock("div", {
                                    key: index2,
                                    class: "partner-item"
                                  }, [
                                    createVNode("div", { class: "partner-logo" }, [
                                      createVNode("img", {
                                        src: partner.logo,
                                        alt: partner.name
                                      }, null, 8, ["src", "alt"])
                                    ]),
                                    createVNode("div", { class: "partner-info" }, [
                                      createVNode("h4", null, toDisplayString(partner.name), 1),
                                      createVNode("p", null, toDisplayString(partner.description), 1),
                                      createVNode("a", {
                                        href: partner.link,
                                        target: "_blank",
                                        class: "partner-link"
                                      }, toDisplayString(partner.link), 9, ["href"])
                                    ]),
                                    createVNode("div", { class: "partner-actions" }, [
                                      createVNode(VBtn, {
                                        icon: "mdi-pencil",
                                        size: "small",
                                        variant: "text",
                                        onClick: ($event) => editPartner(partner, index2)
                                      }, null, 8, ["onClick"]),
                                      createVNode(VBtn, {
                                        icon: "mdi-delete",
                                        size: "small",
                                        variant: "text",
                                        color: "error",
                                        onClick: ($event) => confirmDeletePartner(partner, index2)
                                      }, null, 8, ["onClick"])
                                    ])
                                  ]);
                                }), 128))
                              ]),
                              partners.value.length === 0 ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "empty-state"
                              }, [
                                createVNode(VIcon, {
                                  size: "64",
                                  color: "grey"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-handshake-outline")
                                  ]),
                                  _: 1
                                }),
                                createVNode("h3", null, "\u8FD8\u6CA1\u6709\u5408\u4F5C\u4F19\u4F34"),
                                createVNode("p", null, '\u70B9\u51FB"\u6DFB\u52A0\u5408\u4F5C\u4F19\u4F34"\u5F00\u59CB\u6DFB\u52A0')
                              ])) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "tab-content" }, [
                      createVNode("div", { class: "content-header" }, [
                        createVNode("h2", { class: "section-title" }, [
                          createVNode(VIcon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-handshake")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" \u5408\u4F5C\u4F19\u4F34\u7BA1\u7406 ")
                        ]),
                        createVNode("p", { class: "section-description" }, " \u7BA1\u7406\u9996\u9875\u5408\u4F5C\u4F19\u4F34Logo\u548C\u94FE\u63A5 ")
                      ]),
                      createVNode(VCard, null, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, { class: "d-flex align-center" }, {
                            default: withCtx(() => [
                              createVNode("span", null, "\u5408\u4F5C\u4F19\u4F34\u5217\u8868"),
                              createVNode(VSpacer),
                              createVNode(VBtn, {
                                color: "primary",
                                onClick: ($event) => showAddPartner.value = true,
                                "prepend-icon": "mdi-plus"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u6DFB\u52A0\u5408\u4F5C\u4F19\u4F34 ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "partners-grid" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(partners.value, (partner, index2) => {
                                  return openBlock(), createBlock("div", {
                                    key: index2,
                                    class: "partner-item"
                                  }, [
                                    createVNode("div", { class: "partner-logo" }, [
                                      createVNode("img", {
                                        src: partner.logo,
                                        alt: partner.name
                                      }, null, 8, ["src", "alt"])
                                    ]),
                                    createVNode("div", { class: "partner-info" }, [
                                      createVNode("h4", null, toDisplayString(partner.name), 1),
                                      createVNode("p", null, toDisplayString(partner.description), 1),
                                      createVNode("a", {
                                        href: partner.link,
                                        target: "_blank",
                                        class: "partner-link"
                                      }, toDisplayString(partner.link), 9, ["href"])
                                    ]),
                                    createVNode("div", { class: "partner-actions" }, [
                                      createVNode(VBtn, {
                                        icon: "mdi-pencil",
                                        size: "small",
                                        variant: "text",
                                        onClick: ($event) => editPartner(partner, index2)
                                      }, null, 8, ["onClick"]),
                                      createVNode(VBtn, {
                                        icon: "mdi-delete",
                                        size: "small",
                                        variant: "text",
                                        color: "error",
                                        onClick: ($event) => confirmDeletePartner(partner, index2)
                                      }, null, 8, ["onClick"])
                                    ])
                                  ]);
                                }), 128))
                              ]),
                              partners.value.length === 0 ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "empty-state"
                              }, [
                                createVNode(VIcon, {
                                  size: "64",
                                  color: "grey"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-handshake-outline")
                                  ]),
                                  _: 1
                                }),
                                createVNode("h3", null, "\u8FD8\u6CA1\u6709\u5408\u4F5C\u4F19\u4F34"),
                                createVNode("p", null, '\u70B9\u51FB"\u6DFB\u52A0\u5408\u4F5C\u4F19\u4F34"\u5F00\u59CB\u6DFB\u52A0')
                              ])) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VWindowItem, { value: "background" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "tab-content" }, [
                    createVNode("div", { class: "content-header" }, [
                      createVNode("h2", { class: "section-title" }, [
                        createVNode(VIcon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-image")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" Hero\u80CC\u666F\u56FE\u7247\u7BA1\u7406 ")
                      ]),
                      createVNode("p", { class: "section-description" }, " \u7BA1\u7406\u9996\u9875Hero\u533A\u57DF\u7684\u80CC\u666F\u56FE\u7247\u548C\u5185\u5BB9\u8BBE\u7F6E ")
                    ]),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, { title: "\u80CC\u666F\u56FE\u7247\u8BBE\u7F6E" }, {
                              default: withCtx(() => [
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "current-background" }, [
                                      createVNode("div", { class: "background-preview" }, [
                                        createVNode("img", {
                                          src: currentBackground.value,
                                          alt: "\u5F53\u524D\u80CC\u666F",
                                          class: "preview-image"
                                        }, null, 8, ["src"]),
                                        createVNode("div", { class: "preview-overlay" }, [
                                          createVNode(VBtn, {
                                            icon: "mdi-eye",
                                            color: "white",
                                            onClick: previewBackground
                                          })
                                        ])
                                      ]),
                                      createVNode("div", { class: "background-info" }, [
                                        createVNode("h4", null, "\u5F53\u524D\u80CC\u666F"),
                                        createVNode("p", null, "\u70B9\u51FB\u9884\u8BBE\u56FE\u7247\u6216\u4E0A\u4F20\u81EA\u5B9A\u4E49\u56FE\u7247\u6765\u66F4\u6362\u80CC\u666F")
                                      ])
                                    ]),
                                    createVNode(VDivider, { class: "my-4" }),
                                    createVNode("div", { class: "preset-images" }, [
                                      createVNode("h4", { class: "mb-3" }, "\u9884\u8BBE\u80CC\u666F\u56FE\u7247"),
                                      createVNode("div", { class: "preset-grid" }, [
                                        (openBlock(), createBlock(Fragment, null, renderList(presetImages, (preset, index2) => {
                                          return createVNode("div", {
                                            key: index2,
                                            class: ["preset-item", { active: currentBackground.value === preset.url }],
                                            onClick: ($event) => selectPreset(preset)
                                          }, [
                                            createVNode("img", {
                                              src: preset.url,
                                              alt: preset.name
                                            }, null, 8, ["src", "alt"]),
                                            createVNode("div", { class: "preset-overlay" }, [
                                              createVNode(VIcon, { color: "white" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-check")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ], 10, ["onClick"]);
                                        }), 64))
                                      ])
                                    ]),
                                    createVNode(VDivider, { class: "my-4" }),
                                    createVNode("div", { class: "upload-section" }, [
                                      createVNode("h4", { class: "mb-3" }, "\u4E0A\u4F20\u81EA\u5B9A\u4E49\u80CC\u666F"),
                                      createVNode(VFileInput, {
                                        modelValue: uploadedFile.value,
                                        "onUpdate:modelValue": [($event) => uploadedFile.value = $event, handleFileUpload],
                                        label: "\u9009\u62E9\u56FE\u7247\u6587\u4EF6",
                                        accept: "image/*",
                                        "prepend-icon": "mdi-upload",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, { title: "Hero\u5185\u5BB9\u8BBE\u7F6E" }, {
                              default: withCtx(() => [
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(VForm, null, {
                                      default: withCtx(() => [
                                        createVNode(VTextarea, {
                                          modelValue: heroContent.value.title,
                                          "onUpdate:modelValue": ($event) => heroContent.value.title = $event,
                                          label: "\u4E3B\u6807\u9898",
                                          variant: "outlined",
                                          rows: "2",
                                          class: "mb-3"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VTextarea, {
                                          modelValue: heroContent.value.description,
                                          "onUpdate:modelValue": ($event) => heroContent.value.description = $event,
                                          label: "\u63CF\u8FF0\u6587\u5B57",
                                          variant: "outlined",
                                          rows: "3",
                                          class: "mb-3"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("div", { class: "button-settings" }, [
                                          createVNode("h4", { class: "mb-3" }, "\u6309\u94AE\u8BBE\u7F6E"),
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, { cols: "6" }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: heroContent.value.button1Text,
                                                    "onUpdate:modelValue": ($event) => heroContent.value.button1Text = $event,
                                                    label: "\u6309\u94AE1\u6587\u5B57",
                                                    variant: "outlined",
                                                    density: "compact"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, { cols: "6" }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: heroContent.value.button1Link,
                                                    "onUpdate:modelValue": ($event) => heroContent.value.button1Link = $event,
                                                    label: "\u6309\u94AE1\u94FE\u63A5",
                                                    variant: "outlined",
                                                    density: "compact"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, { cols: "6" }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: heroContent.value.button2Text,
                                                    "onUpdate:modelValue": ($event) => heroContent.value.button2Text = $event,
                                                    label: "\u6309\u94AE2\u6587\u5B57",
                                                    variant: "outlined",
                                                    density: "compact"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, { cols: "6" }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: heroContent.value.button2Link,
                                                    "onUpdate:modelValue": ($event) => heroContent.value.button2Link = $event,
                                                    label: "\u6309\u94AE2\u94FE\u63A5",
                                                    variant: "outlined",
                                                    density: "compact"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardActions, null, {
                                  default: withCtx(() => [
                                    createVNode(VSpacer),
                                    createVNode(VBtn, {
                                      color: "primary",
                                      onClick: saveHeroContent,
                                      loading: saving.value
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u4FDD\u5B58\u8BBE\u7F6E ")
                                      ]),
                                      _: 1
                                    }, 8, ["loading"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: "partners" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "tab-content" }, [
                    createVNode("div", { class: "content-header" }, [
                      createVNode("h2", { class: "section-title" }, [
                        createVNode(VIcon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-handshake")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" \u5408\u4F5C\u4F19\u4F34\u7BA1\u7406 ")
                      ]),
                      createVNode("p", { class: "section-description" }, " \u7BA1\u7406\u9996\u9875\u5408\u4F5C\u4F19\u4F34Logo\u548C\u94FE\u63A5 ")
                    ]),
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "d-flex align-center" }, {
                          default: withCtx(() => [
                            createVNode("span", null, "\u5408\u4F5C\u4F19\u4F34\u5217\u8868"),
                            createVNode(VSpacer),
                            createVNode(VBtn, {
                              color: "primary",
                              onClick: ($event) => showAddPartner.value = true,
                              "prepend-icon": "mdi-plus"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u6DFB\u52A0\u5408\u4F5C\u4F19\u4F34 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "partners-grid" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(partners.value, (partner, index2) => {
                                return openBlock(), createBlock("div", {
                                  key: index2,
                                  class: "partner-item"
                                }, [
                                  createVNode("div", { class: "partner-logo" }, [
                                    createVNode("img", {
                                      src: partner.logo,
                                      alt: partner.name
                                    }, null, 8, ["src", "alt"])
                                  ]),
                                  createVNode("div", { class: "partner-info" }, [
                                    createVNode("h4", null, toDisplayString(partner.name), 1),
                                    createVNode("p", null, toDisplayString(partner.description), 1),
                                    createVNode("a", {
                                      href: partner.link,
                                      target: "_blank",
                                      class: "partner-link"
                                    }, toDisplayString(partner.link), 9, ["href"])
                                  ]),
                                  createVNode("div", { class: "partner-actions" }, [
                                    createVNode(VBtn, {
                                      icon: "mdi-pencil",
                                      size: "small",
                                      variant: "text",
                                      onClick: ($event) => editPartner(partner, index2)
                                    }, null, 8, ["onClick"]),
                                    createVNode(VBtn, {
                                      icon: "mdi-delete",
                                      size: "small",
                                      variant: "text",
                                      color: "error",
                                      onClick: ($event) => confirmDeletePartner(partner, index2)
                                    }, null, 8, ["onClick"])
                                  ])
                                ]);
                              }), 128))
                            ]),
                            partners.value.length === 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "empty-state"
                            }, [
                              createVNode(VIcon, {
                                size: "64",
                                color: "grey"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-handshake-outline")
                                ]),
                                _: 1
                              }),
                              createVNode("h3", null, "\u8FD8\u6CA1\u6709\u5408\u4F5C\u4F19\u4F34"),
                              createVNode("p", null, '\u70B9\u51FB"\u6DFB\u52A0\u5408\u4F5C\u4F19\u4F34"\u5F00\u59CB\u6DFB\u52A0')
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: showAddPartner.value,
        "onUpdate:modelValue": ($event) => showAddPartner.value = $event,
        "max-width": "600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(editingPartnerIndex.value !== null ? "\u7F16\u8F91\u5408\u4F5C\u4F19\u4F34" : "\u6DFB\u52A0\u5408\u4F5C\u4F19\u4F34")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(editingPartnerIndex.value !== null ? "\u7F16\u8F91\u5408\u4F5C\u4F19\u4F34" : "\u6DFB\u52A0\u5408\u4F5C\u4F19\u4F34"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VForm, {
                          modelValue: partnerFormValid.value,
                          "onUpdate:modelValue": ($event) => partnerFormValid.value = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: partnerForm.value.name,
                                "onUpdate:modelValue": ($event) => partnerForm.value.name = $event,
                                label: "\u5408\u4F5C\u4F19\u4F34\u540D\u79F0",
                                rules: [(v) => !!v || "\u8BF7\u8F93\u5165\u540D\u79F0"],
                                variant: "outlined",
                                required: ""
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: partnerForm.value.description,
                                "onUpdate:modelValue": ($event) => partnerForm.value.description = $event,
                                label: "\u63CF\u8FF0",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: partnerForm.value.link,
                                "onUpdate:modelValue": ($event) => partnerForm.value.link = $event,
                                label: "\u7F51\u7AD9\u94FE\u63A5",
                                rules: [(v) => !!v || "\u8BF7\u8F93\u5165\u94FE\u63A5"],
                                variant: "outlined",
                                required: ""
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VFileInput, {
                                modelValue: partnerLogoFile.value,
                                "onUpdate:modelValue": [($event) => partnerLogoFile.value = $event, handlePartnerLogoUpload],
                                label: "Logo\u56FE\u7247",
                                accept: "image/*",
                                "prepend-icon": "mdi-upload",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                              if (partnerForm.value.logo) {
                                _push5(`<div class="logo-preview" data-v-968226e1${_scopeId4}><img${ssrRenderAttr("src", partnerForm.value.logo)} alt="Logo\u9884\u89C8" class="preview-logo" data-v-968226e1${_scopeId4}></div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                createVNode(VTextField, {
                                  modelValue: partnerForm.value.name,
                                  "onUpdate:modelValue": ($event) => partnerForm.value.name = $event,
                                  label: "\u5408\u4F5C\u4F19\u4F34\u540D\u79F0",
                                  rules: [(v) => !!v || "\u8BF7\u8F93\u5165\u540D\u79F0"],
                                  variant: "outlined",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(VTextField, {
                                  modelValue: partnerForm.value.description,
                                  "onUpdate:modelValue": ($event) => partnerForm.value.description = $event,
                                  label: "\u63CF\u8FF0",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: partnerForm.value.link,
                                  "onUpdate:modelValue": ($event) => partnerForm.value.link = $event,
                                  label: "\u7F51\u7AD9\u94FE\u63A5",
                                  rules: [(v) => !!v || "\u8BF7\u8F93\u5165\u94FE\u63A5"],
                                  variant: "outlined",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(VFileInput, {
                                  modelValue: partnerLogoFile.value,
                                  "onUpdate:modelValue": [($event) => partnerLogoFile.value = $event, handlePartnerLogoUpload],
                                  label: "Logo\u56FE\u7247",
                                  accept: "image/*",
                                  "prepend-icon": "mdi-upload",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                partnerForm.value.logo ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "logo-preview"
                                }, [
                                  createVNode("img", {
                                    src: partnerForm.value.logo,
                                    alt: "Logo\u9884\u89C8",
                                    class: "preview-logo"
                                  }, null, 8, ["src"])
                                ])) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VForm, {
                            modelValue: partnerFormValid.value,
                            "onUpdate:modelValue": ($event) => partnerFormValid.value = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: partnerForm.value.name,
                                "onUpdate:modelValue": ($event) => partnerForm.value.name = $event,
                                label: "\u5408\u4F5C\u4F19\u4F34\u540D\u79F0",
                                rules: [(v) => !!v || "\u8BF7\u8F93\u5165\u540D\u79F0"],
                                variant: "outlined",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(VTextField, {
                                modelValue: partnerForm.value.description,
                                "onUpdate:modelValue": ($event) => partnerForm.value.description = $event,
                                label: "\u63CF\u8FF0",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: partnerForm.value.link,
                                "onUpdate:modelValue": ($event) => partnerForm.value.link = $event,
                                label: "\u7F51\u7AD9\u94FE\u63A5",
                                rules: [(v) => !!v || "\u8BF7\u8F93\u5165\u94FE\u63A5"],
                                variant: "outlined",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(VFileInput, {
                                modelValue: partnerLogoFile.value,
                                "onUpdate:modelValue": [($event) => partnerLogoFile.value = $event, handlePartnerLogoUpload],
                                label: "Logo\u56FE\u7247",
                                accept: "image/*",
                                "prepend-icon": "mdi-upload",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              partnerForm.value.logo ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "logo-preview"
                              }, [
                                createVNode("img", {
                                  src: partnerForm.value.logo,
                                  alt: "Logo\u9884\u89C8",
                                  class: "preview-logo"
                                }, null, 8, ["src"])
                              ])) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, { onClick: cancelPartnerEdit }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u53D6\u6D88`);
                            } else {
                              return [
                                createTextVNode("\u53D6\u6D88")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          disabled: !partnerFormValid.value,
                          onClick: savePartner
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u4FDD\u5B58 `);
                            } else {
                              return [
                                createTextVNode(" \u4FDD\u5B58 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, { onClick: cancelPartnerEdit }, {
                            default: withCtx(() => [
                              createTextVNode("\u53D6\u6D88")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "primary",
                            disabled: !partnerFormValid.value,
                            onClick: savePartner
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u4FDD\u5B58 ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(editingPartnerIndex.value !== null ? "\u7F16\u8F91\u5408\u4F5C\u4F19\u4F34" : "\u6DFB\u52A0\u5408\u4F5C\u4F19\u4F34"), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VForm, {
                          modelValue: partnerFormValid.value,
                          "onUpdate:modelValue": ($event) => partnerFormValid.value = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: partnerForm.value.name,
                              "onUpdate:modelValue": ($event) => partnerForm.value.name = $event,
                              label: "\u5408\u4F5C\u4F19\u4F34\u540D\u79F0",
                              rules: [(v) => !!v || "\u8BF7\u8F93\u5165\u540D\u79F0"],
                              variant: "outlined",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(VTextField, {
                              modelValue: partnerForm.value.description,
                              "onUpdate:modelValue": ($event) => partnerForm.value.description = $event,
                              label: "\u63CF\u8FF0",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VTextField, {
                              modelValue: partnerForm.value.link,
                              "onUpdate:modelValue": ($event) => partnerForm.value.link = $event,
                              label: "\u7F51\u7AD9\u94FE\u63A5",
                              rules: [(v) => !!v || "\u8BF7\u8F93\u5165\u94FE\u63A5"],
                              variant: "outlined",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(VFileInput, {
                              modelValue: partnerLogoFile.value,
                              "onUpdate:modelValue": [($event) => partnerLogoFile.value = $event, handlePartnerLogoUpload],
                              label: "Logo\u56FE\u7247",
                              accept: "image/*",
                              "prepend-icon": "mdi-upload",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            partnerForm.value.logo ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "logo-preview"
                            }, [
                              createVNode("img", {
                                src: partnerForm.value.logo,
                                alt: "Logo\u9884\u89C8",
                                class: "preview-logo"
                              }, null, 8, ["src"])
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, { onClick: cancelPartnerEdit }, {
                          default: withCtx(() => [
                            createTextVNode("\u53D6\u6D88")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "primary",
                          disabled: !partnerFormValid.value,
                          onClick: savePartner
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u4FDD\u5B58 ")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(editingPartnerIndex.value !== null ? "\u7F16\u8F91\u5408\u4F5C\u4F19\u4F34" : "\u6DFB\u52A0\u5408\u4F5C\u4F19\u4F34"), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VForm, {
                        modelValue: partnerFormValid.value,
                        "onUpdate:modelValue": ($event) => partnerFormValid.value = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: partnerForm.value.name,
                            "onUpdate:modelValue": ($event) => partnerForm.value.name = $event,
                            label: "\u5408\u4F5C\u4F19\u4F34\u540D\u79F0",
                            rules: [(v) => !!v || "\u8BF7\u8F93\u5165\u540D\u79F0"],
                            variant: "outlined",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(VTextField, {
                            modelValue: partnerForm.value.description,
                            "onUpdate:modelValue": ($event) => partnerForm.value.description = $event,
                            label: "\u63CF\u8FF0",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            modelValue: partnerForm.value.link,
                            "onUpdate:modelValue": ($event) => partnerForm.value.link = $event,
                            label: "\u7F51\u7AD9\u94FE\u63A5",
                            rules: [(v) => !!v || "\u8BF7\u8F93\u5165\u94FE\u63A5"],
                            variant: "outlined",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(VFileInput, {
                            modelValue: partnerLogoFile.value,
                            "onUpdate:modelValue": [($event) => partnerLogoFile.value = $event, handlePartnerLogoUpload],
                            label: "Logo\u56FE\u7247",
                            accept: "image/*",
                            "prepend-icon": "mdi-upload",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          partnerForm.value.logo ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "logo-preview"
                          }, [
                            createVNode("img", {
                              src: partnerForm.value.logo,
                              alt: "Logo\u9884\u89C8",
                              class: "preview-logo"
                            }, null, 8, ["src"])
                          ])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, { onClick: cancelPartnerEdit }, {
                        default: withCtx(() => [
                          createTextVNode("\u53D6\u6D88")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "primary",
                        disabled: !partnerFormValid.value,
                        onClick: savePartner
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u4FDD\u5B58 ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: showDeleteConfirm.value,
        "onUpdate:modelValue": ($event) => showDeleteConfirm.value = $event,
        "max-width": "400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u786E\u8BA4\u5220\u9664`);
                      } else {
                        return [
                          createTextVNode("\u786E\u8BA4\u5220\u9664")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(` \u786E\u5B9A\u8981\u5220\u9664\u5408\u4F5C\u4F19\u4F34&quot;${ssrInterpolate((_a = deleteTarget.value) == null ? void 0 : _a.name)}&quot;\u5417\uFF1F `);
                      } else {
                        return [
                          createTextVNode(' \u786E\u5B9A\u8981\u5220\u9664\u5408\u4F5C\u4F19\u4F34"' + toDisplayString((_b = deleteTarget.value) == null ? void 0 : _b.name) + '"\u5417\uFF1F ', 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          onClick: ($event) => showDeleteConfirm.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u53D6\u6D88`);
                            } else {
                              return [
                                createTextVNode("\u53D6\u6D88")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "error",
                          onClick: deletePartner
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u5220\u9664`);
                            } else {
                              return [
                                createTextVNode("\u5220\u9664")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            onClick: ($event) => showDeleteConfirm.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u53D6\u6D88")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "error",
                            onClick: deletePartner
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u5220\u9664")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u786E\u8BA4\u5220\u9664")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode(' \u786E\u5B9A\u8981\u5220\u9664\u5408\u4F5C\u4F19\u4F34"' + toDisplayString((_a = deleteTarget.value) == null ? void 0 : _a.name) + '"\u5417\uFF1F ', 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          onClick: ($event) => showDeleteConfirm.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u53D6\u6D88")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "error",
                          onClick: deletePartner
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u5220\u9664")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u786E\u8BA4\u5220\u9664")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(' \u786E\u5B9A\u8981\u5220\u9664\u5408\u4F5C\u4F19\u4F34"' + toDisplayString((_a = deleteTarget.value) == null ? void 0 : _a.name) + '"\u5417\uFF1F ', 1)
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        onClick: ($event) => showDeleteConfirm.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u53D6\u6D88")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "error",
                        onClick: deletePartner
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u5220\u9664")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: showMessage.value,
        "onUpdate:modelValue": ($event) => showMessage.value = $event,
        color: messageType.value,
        timeout: 3e3
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              variant: "text",
              onClick: ($event) => showMessage.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u5173\u95ED`);
                } else {
                  return [
                    createTextVNode("\u5173\u95ED")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                variant: "text",
                onClick: ($event) => showMessage.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode("\u5173\u95ED")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(message.value)} `);
          } else {
            return [
              createTextVNode(toDisplayString(message.value) + " ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomepageManager.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HomepageManager = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-968226e1"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AnalyticsManager",
  __ssrInlineRender: true,
  setup(__props) {
    const refreshing = ref(false);
    const showMessage = ref(false);
    const message = ref("");
    const messageType = ref("success");
    const categoryChart = ref();
    const imageChart = ref();
    const stats = ref({
      totalArticles: 0,
      totalImages: 0,
      totalStorage: 0,
      lastUpdate: ""
    });
    const articleStats = ref([]);
    const imageStats = ref([]);
    const systemInfo = ref({
      storageUsed: 0,
      storageAvailable: 0,
      storagePercentage: 0,
      browser: "",
      version: "",
      platform: "",
      loadTime: 0,
      memoryUsage: 0,
      online: true
    });
    const formatSize = (bytes) => {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
    };
    const getCategoryColor = (category) => {
      const colors = {
        "\u4F01\u696D\u30CB\u30E5\u30FC\u30B9": "blue",
        "\u30B5\u30FC\u30D3\u30B9": "green",
        "\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D": "brown",
        "\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8": "purple",
        "\u91E3\u5177\u30FB\u5668\u5177": "orange",
        "LAB\u30FB\u7814\u7A76\u958B\u767A": "red",
        "\u30AF\u30E9\u30D6\u6D3B\u52D5": "pink"
      };
      return colors[category] || "grey";
    };
    const loadAnalyticsData = () => {
      try {
        const articlesData = localStorage.getItem("notrace_articles");
        const articles = articlesData ? JSON.parse(articlesData) : [];
        const imagesData = localStorage.getItem("notrace_images");
        const images = imagesData ? JSON.parse(imagesData) : [];
        stats.value.totalArticles = articles.length;
        stats.value.totalImages = images.length;
        stats.value.totalStorage = images.reduce((total, img) => total + img.size, 0);
        const lastArticle = articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
        stats.value.lastUpdate = lastArticle ? formatRelativeTime(lastArticle.date) : "\u65E0\u6570\u636E";
        const articleCategoryMap = /* @__PURE__ */ new Map();
        articles.forEach((article) => {
          const count = articleCategoryMap.get(article.category) || 0;
          articleCategoryMap.set(article.category, count + 1);
        });
        articleStats.value = Array.from(articleCategoryMap.entries()).map(([category, count]) => ({
          category,
          count,
          percentage: Math.round(count / articles.length * 100)
        }));
        const imageCategoryMap = /* @__PURE__ */ new Map();
        images.forEach((image) => {
          const current = imageCategoryMap.get(image.category) || { count: 0, size: 0 };
          imageCategoryMap.set(image.category, {
            count: current.count + 1,
            size: current.size + image.size
          });
        });
        imageStats.value = Array.from(imageCategoryMap.entries()).map(([category, data]) => ({
          category,
          count: data.count,
          size: data.size
        }));
        updateSystemInfo();
      } catch (error) {
        console.error("Failed to load analytics data:", error);
      }
    };
    const updateSystemInfo = () => {
      var _a;
      let totalSize = 0;
      for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          totalSize += ((_a = localStorage.getItem(key)) == null ? void 0 : _a.length) || 0;
        }
      }
      systemInfo.value.storageUsed = totalSize;
      systemInfo.value.storageAvailable = 5 * 1024 * 1024;
      systemInfo.value.storagePercentage = Math.round(totalSize / systemInfo.value.storageAvailable * 100);
      const ua = (void 0).userAgent;
      systemInfo.value.browser = getBrowserName(ua);
      systemInfo.value.version = getBrowserVersion(ua);
      systemInfo.value.platform = (void 0).platform;
      systemInfo.value.loadTime = Math.round(performance.now());
      systemInfo.value.memoryUsage = performance.memory ? Math.round(performance.memory.usedJSHeapSize / 1024 / 1024) : 0;
      systemInfo.value.online = (void 0).onLine;
    };
    const getBrowserName = (ua) => {
      if (ua.includes("Chrome")) return "Chrome";
      if (ua.includes("Firefox")) return "Firefox";
      if (ua.includes("Safari")) return "Safari";
      if (ua.includes("Edge")) return "Edge";
      return "Unknown";
    };
    const getBrowserVersion = (ua) => {
      const match = ua.match(/(Chrome|Firefox|Safari|Edge)\/(\d+)/);
      return match ? match[2] : "Unknown";
    };
    const formatRelativeTime = (dateString) => {
      const date = new Date(dateString.replace(/\./g, "-"));
      const now = /* @__PURE__ */ new Date();
      const diffMs = now.getTime() - date.getTime();
      const diffDays = Math.floor(diffMs / (1e3 * 60 * 60 * 24));
      if (diffDays === 0) return "\u4ECA\u5929";
      if (diffDays === 1) return "\u6628\u5929";
      if (diffDays < 7) return `${diffDays}\u5929\u524D`;
      if (diffDays < 30) return `${Math.floor(diffDays / 7)}\u5468\u524D`;
      return `${Math.floor(diffDays / 30)}\u6708\u524D`;
    };
    const drawCharts = () => {
      nextTick(() => {
        drawCategoryChart();
        drawImageChart();
      });
    };
    const drawCategoryChart = () => {
      const canvas = categoryChart.value;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) - 20;
      let currentAngle = 0;
      const colors = ["#667eea", "#764ba2", "#f093fb", "#f5576c", "#4facfe", "#00f2fe", "#43e97b"];
      articleStats.value.forEach((item, index2) => {
        const sliceAngle = item.percentage / 100 * 2 * Math.PI;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.lineTo(centerX, centerY);
        ctx.fillStyle = colors[index2 % colors.length];
        ctx.fill();
        currentAngle += sliceAngle;
      });
    };
    const drawImageChart = () => {
      const canvas = imageChart.value;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const padding = 40;
      const chartWidth = canvas.width - padding * 2;
      const chartHeight = canvas.height - padding * 2;
      if (imageStats.value.length === 0) return;
      const maxCount = Math.max(...imageStats.value.map((item) => item.count));
      const barWidth = chartWidth / imageStats.value.length;
      imageStats.value.forEach((item, index2) => {
        const barHeight = item.count / maxCount * chartHeight;
        const x = padding + index2 * barWidth;
        const y = padding + chartHeight - barHeight;
        ctx.fillStyle = "#667eea";
        ctx.fillRect(x + 5, y, barWidth - 10, barHeight);
        ctx.fillStyle = "#333";
        ctx.font = "12px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(item.category, x + barWidth / 2, canvas.height - 10);
        ctx.fillText(item.count.toString(), x + barWidth / 2, y - 5);
      });
    };
    const refreshData = async () => {
      refreshing.value = true;
      try {
        await new Promise((resolve) => setTimeout(resolve, 1e3));
        loadAnalyticsData();
        drawCharts();
        showMessage.value = true;
        message.value = "\u6570\u636E\u5DF2\u5237\u65B0";
        messageType.value = "success";
      } catch (error) {
        showMessage.value = true;
        message.value = "\u5237\u65B0\u5931\u8D25";
        messageType.value = "error";
      } finally {
        refreshing.value = false;
      }
    };
    const exportData = () => {
      try {
        const exportData2 = {
          statistics: stats.value,
          articleStats: articleStats.value,
          imageStats: imageStats.value,
          systemInfo: systemInfo.value,
          exportTime: (/* @__PURE__ */ new Date()).toISOString()
        };
        const dataStr = JSON.stringify(exportData2, null, 2);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = (void 0).createElement("a");
        a.href = url;
        a.download = `notrace-analytics-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        showMessage.value = true;
        message.value = "\u6570\u636E\u5BFC\u51FA\u5B8C\u6210";
        messageType.value = "success";
      } catch (error) {
        showMessage.value = true;
        message.value = "\u5BFC\u51FA\u5931\u8D25";
        messageType.value = "error";
      }
    };
    const cleanupData = () => {
      try {
        const keysToKeep = [
          "notrace_articles",
          "notrace_images",
          "notrace_homepage",
          "notrace_image_categories"
        ];
        let cleanedCount = 0;
        for (let key in localStorage) {
          if (key.startsWith("notrace_") && !keysToKeep.includes(key)) {
            localStorage.removeItem(key);
            cleanedCount++;
          }
        }
        loadAnalyticsData();
        showMessage.value = true;
        message.value = `\u5DF2\u6E05\u7406 ${cleanedCount} \u4E2A\u7F13\u5B58\u9879`;
        messageType.value = "success";
      } catch (error) {
        showMessage.value = true;
        message.value = "\u6E05\u7406\u5931\u8D25";
        messageType.value = "error";
      }
    };
    const generateReport = () => {
      try {
        const reportData = {
          title: "NO TRACE EXPLORER \u6570\u636E\u5206\u6790\u62A5\u544A",
          generateTime: (/* @__PURE__ */ new Date()).toLocaleString("zh-CN"),
          summary: {
            totalArticles: stats.value.totalArticles,
            totalImages: stats.value.totalImages,
            storageUsage: formatSize(stats.value.totalStorage)
          },
          insights: [
            `\u5171\u53D1\u5E03\u4E86 ${stats.value.totalArticles} \u7BC7\u6587\u7AE0`,
            `\u4E0A\u4F20\u4E86 ${stats.value.totalImages} \u5F20\u56FE\u7247`,
            `\u4F7F\u7528\u4E86 ${formatSize(stats.value.totalStorage)} \u5B58\u50A8\u7A7A\u95F4`,
            `\u6700\u540E\u66F4\u65B0\u65F6\u95F4: ${stats.value.lastUpdate}`
          ],
          recommendations: [
            "\u5B9A\u671F\u5907\u4EFD\u91CD\u8981\u6570\u636E",
            "\u6E05\u7406\u4E0D\u5FC5\u8981\u7684\u7F13\u5B58\u6587\u4EF6",
            "\u4F18\u5316\u56FE\u7247\u5927\u5C0F\u4EE5\u8282\u7701\u5B58\u50A8\u7A7A\u95F4",
            "\u4FDD\u6301\u5185\u5BB9\u66F4\u65B0\u9891\u7387"
          ]
        };
        const reportHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${reportData.title}</title>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
          h1 { color: #667eea; }
          h2 { color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px; }
          .summary { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .insight, .recommendation { margin: 10px 0; padding: 10px; background: #fff; border-left: 4px solid #667eea; }
        </style>
      </head>
      <body>
        <h1>${reportData.title}</h1>
        <p><strong>\u751F\u6210\u65F6\u95F4:</strong> ${reportData.generateTime}</p>
        
        <h2>\u6570\u636E\u6982\u89C8</h2>
        <div class="summary">
          <p><strong>\u6587\u7AE0\u603B\u6570:</strong> ${reportData.summary.totalArticles}</p>
          <p><strong>\u56FE\u7247\u603B\u6570:</strong> ${reportData.summary.totalImages}</p>
          <p><strong>\u5B58\u50A8\u4F7F\u7528:</strong> ${reportData.summary.storageUsage}</p>
        </div>
        
        <h2>\u6570\u636E\u6D1E\u5BDF</h2>
        ${reportData.insights.map((insight) => `<div class="insight">${insight}</div>`).join("")}
        
        <h2>\u5EFA\u8BAE</h2>
        ${reportData.recommendations.map((rec) => `<div class="recommendation">${rec}</div>`).join("")}
      </body>
      </html>
    `;
        const blob = new Blob([reportHtml], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        const a = (void 0).createElement("a");
        a.href = url;
        a.download = `notrace-report-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.html`;
        a.click();
        URL.revokeObjectURL(url);
        showMessage.value = true;
        message.value = "\u62A5\u544A\u751F\u6210\u5B8C\u6210";
        messageType.value = "success";
      } catch (error) {
        showMessage.value = true;
        message.value = "\u62A5\u544A\u751F\u6210\u5931\u8D25";
        messageType.value = "error";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "analytics-manager" }, _attrs))} data-v-86369a80><div class="overview-cards" data-v-86369a80>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              md: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "stat-card" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="stat-content" data-v-86369a80${_scopeId4}><div class="stat-icon" data-v-86369a80${_scopeId4}>`);
                              _push5(ssrRenderComponent(VIcon, {
                                size: "32",
                                color: "blue"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-newspaper`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-newspaper")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="stat-info" data-v-86369a80${_scopeId4}><div class="stat-number" data-v-86369a80${_scopeId4}>${ssrInterpolate(stats.value.totalArticles)}</div><div class="stat-label" data-v-86369a80${_scopeId4}>\u603B\u6587\u7AE0\u6570</div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "stat-content" }, [
                                  createVNode("div", { class: "stat-icon" }, [
                                    createVNode(VIcon, {
                                      size: "32",
                                      color: "blue"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-newspaper")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "stat-info" }, [
                                    createVNode("div", { class: "stat-number" }, toDisplayString(stats.value.totalArticles), 1),
                                    createVNode("div", { class: "stat-label" }, "\u603B\u6587\u7AE0\u6570")
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "stat-content" }, [
                                createVNode("div", { class: "stat-icon" }, [
                                  createVNode(VIcon, {
                                    size: "32",
                                    color: "blue"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-newspaper")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "stat-info" }, [
                                  createVNode("div", { class: "stat-number" }, toDisplayString(stats.value.totalArticles), 1),
                                  createVNode("div", { class: "stat-label" }, "\u603B\u6587\u7AE0\u6570")
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { class: "stat-card" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "stat-content" }, [
                              createVNode("div", { class: "stat-icon" }, [
                                createVNode(VIcon, {
                                  size: "32",
                                  color: "blue"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-newspaper")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "stat-info" }, [
                                createVNode("div", { class: "stat-number" }, toDisplayString(stats.value.totalArticles), 1),
                                createVNode("div", { class: "stat-label" }, "\u603B\u6587\u7AE0\u6570")
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              md: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "stat-card" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="stat-content" data-v-86369a80${_scopeId4}><div class="stat-icon" data-v-86369a80${_scopeId4}>`);
                              _push5(ssrRenderComponent(VIcon, {
                                size: "32",
                                color: "green"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-image`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-image")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="stat-info" data-v-86369a80${_scopeId4}><div class="stat-number" data-v-86369a80${_scopeId4}>${ssrInterpolate(stats.value.totalImages)}</div><div class="stat-label" data-v-86369a80${_scopeId4}>\u56FE\u7247\u603B\u6570</div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "stat-content" }, [
                                  createVNode("div", { class: "stat-icon" }, [
                                    createVNode(VIcon, {
                                      size: "32",
                                      color: "green"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-image")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "stat-info" }, [
                                    createVNode("div", { class: "stat-number" }, toDisplayString(stats.value.totalImages), 1),
                                    createVNode("div", { class: "stat-label" }, "\u56FE\u7247\u603B\u6570")
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "stat-content" }, [
                                createVNode("div", { class: "stat-icon" }, [
                                  createVNode(VIcon, {
                                    size: "32",
                                    color: "green"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-image")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "stat-info" }, [
                                  createVNode("div", { class: "stat-number" }, toDisplayString(stats.value.totalImages), 1),
                                  createVNode("div", { class: "stat-label" }, "\u56FE\u7247\u603B\u6570")
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { class: "stat-card" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "stat-content" }, [
                              createVNode("div", { class: "stat-icon" }, [
                                createVNode(VIcon, {
                                  size: "32",
                                  color: "green"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-image")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "stat-info" }, [
                                createVNode("div", { class: "stat-number" }, toDisplayString(stats.value.totalImages), 1),
                                createVNode("div", { class: "stat-label" }, "\u56FE\u7247\u603B\u6570")
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              md: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "stat-card" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="stat-content" data-v-86369a80${_scopeId4}><div class="stat-icon" data-v-86369a80${_scopeId4}>`);
                              _push5(ssrRenderComponent(VIcon, {
                                size: "32",
                                color: "orange"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-harddisk`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-harddisk")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="stat-info" data-v-86369a80${_scopeId4}><div class="stat-number" data-v-86369a80${_scopeId4}>${ssrInterpolate(formatSize(stats.value.totalStorage))}</div><div class="stat-label" data-v-86369a80${_scopeId4}>\u5B58\u50A8\u4F7F\u7528</div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "stat-content" }, [
                                  createVNode("div", { class: "stat-icon" }, [
                                    createVNode(VIcon, {
                                      size: "32",
                                      color: "orange"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-harddisk")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "stat-info" }, [
                                    createVNode("div", { class: "stat-number" }, toDisplayString(formatSize(stats.value.totalStorage)), 1),
                                    createVNode("div", { class: "stat-label" }, "\u5B58\u50A8\u4F7F\u7528")
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "stat-content" }, [
                                createVNode("div", { class: "stat-icon" }, [
                                  createVNode(VIcon, {
                                    size: "32",
                                    color: "orange"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-harddisk")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "stat-info" }, [
                                  createVNode("div", { class: "stat-number" }, toDisplayString(formatSize(stats.value.totalStorage)), 1),
                                  createVNode("div", { class: "stat-label" }, "\u5B58\u50A8\u4F7F\u7528")
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { class: "stat-card" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "stat-content" }, [
                              createVNode("div", { class: "stat-icon" }, [
                                createVNode(VIcon, {
                                  size: "32",
                                  color: "orange"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-harddisk")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "stat-info" }, [
                                createVNode("div", { class: "stat-number" }, toDisplayString(formatSize(stats.value.totalStorage)), 1),
                                createVNode("div", { class: "stat-label" }, "\u5B58\u50A8\u4F7F\u7528")
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              md: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "stat-card" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="stat-content" data-v-86369a80${_scopeId4}><div class="stat-icon" data-v-86369a80${_scopeId4}>`);
                              _push5(ssrRenderComponent(VIcon, {
                                size: "32",
                                color: "purple"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-clock`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-clock")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="stat-info" data-v-86369a80${_scopeId4}><div class="stat-number" data-v-86369a80${_scopeId4}>${ssrInterpolate(stats.value.lastUpdate)}</div><div class="stat-label" data-v-86369a80${_scopeId4}>\u6700\u540E\u66F4\u65B0</div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "stat-content" }, [
                                  createVNode("div", { class: "stat-icon" }, [
                                    createVNode(VIcon, {
                                      size: "32",
                                      color: "purple"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-clock")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "stat-info" }, [
                                    createVNode("div", { class: "stat-number" }, toDisplayString(stats.value.lastUpdate), 1),
                                    createVNode("div", { class: "stat-label" }, "\u6700\u540E\u66F4\u65B0")
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "stat-content" }, [
                                createVNode("div", { class: "stat-icon" }, [
                                  createVNode(VIcon, {
                                    size: "32",
                                    color: "purple"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-clock")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "stat-info" }, [
                                  createVNode("div", { class: "stat-number" }, toDisplayString(stats.value.lastUpdate), 1),
                                  createVNode("div", { class: "stat-label" }, "\u6700\u540E\u66F4\u65B0")
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { class: "stat-card" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "stat-content" }, [
                              createVNode("div", { class: "stat-icon" }, [
                                createVNode(VIcon, {
                                  size: "32",
                                  color: "purple"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-clock")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "stat-info" }, [
                                createVNode("div", { class: "stat-number" }, toDisplayString(stats.value.lastUpdate), 1),
                                createVNode("div", { class: "stat-label" }, "\u6700\u540E\u66F4\u65B0")
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "3"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "stat-card" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "stat-content" }, [
                            createVNode("div", { class: "stat-icon" }, [
                              createVNode(VIcon, {
                                size: "32",
                                color: "blue"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-newspaper")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "stat-info" }, [
                              createVNode("div", { class: "stat-number" }, toDisplayString(stats.value.totalArticles), 1),
                              createVNode("div", { class: "stat-label" }, "\u603B\u6587\u7AE0\u6570")
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "3"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "stat-card" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "stat-content" }, [
                            createVNode("div", { class: "stat-icon" }, [
                              createVNode(VIcon, {
                                size: "32",
                                color: "green"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-image")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "stat-info" }, [
                              createVNode("div", { class: "stat-number" }, toDisplayString(stats.value.totalImages), 1),
                              createVNode("div", { class: "stat-label" }, "\u56FE\u7247\u603B\u6570")
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "3"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "stat-card" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "stat-content" }, [
                            createVNode("div", { class: "stat-icon" }, [
                              createVNode(VIcon, {
                                size: "32",
                                color: "orange"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-harddisk")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "stat-info" }, [
                              createVNode("div", { class: "stat-number" }, toDisplayString(formatSize(stats.value.totalStorage)), 1),
                              createVNode("div", { class: "stat-label" }, "\u5B58\u50A8\u4F7F\u7528")
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "3"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "stat-card" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "stat-content" }, [
                            createVNode("div", { class: "stat-icon" }, [
                              createVNode(VIcon, {
                                size: "32",
                                color: "purple"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-clock")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "stat-info" }, [
                              createVNode("div", { class: "stat-number" }, toDisplayString(stats.value.lastUpdate), 1),
                              createVNode("div", { class: "stat-label" }, "\u6700\u540E\u66F4\u65B0")
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="charts-section" data-v-86369a80>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "\u6587\u7AE0\u5206\u7C7B\u5206\u5E03" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="chart-container" data-v-86369a80${_scopeId4}><canvas width="400" height="300" data-v-86369a80${_scopeId4}></canvas></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "chart-container" }, [
                                  createVNode("canvas", {
                                    ref_key: "categoryChart",
                                    ref: categoryChart,
                                    width: "400",
                                    height: "300"
                                  }, null, 512)
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "chart-container" }, [
                                createVNode("canvas", {
                                  ref_key: "categoryChart",
                                  ref: categoryChart,
                                  width: "400",
                                  height: "300"
                                }, null, 512)
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { title: "\u6587\u7AE0\u5206\u7C7B\u5206\u5E03" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "chart-container" }, [
                              createVNode("canvas", {
                                ref_key: "categoryChart",
                                ref: categoryChart,
                                width: "400",
                                height: "300"
                              }, null, 512)
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "\u56FE\u7247\u5206\u7C7B\u7EDF\u8BA1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="chart-container" data-v-86369a80${_scopeId4}><canvas width="400" height="300" data-v-86369a80${_scopeId4}></canvas></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "chart-container" }, [
                                  createVNode("canvas", {
                                    ref_key: "imageChart",
                                    ref: imageChart,
                                    width: "400",
                                    height: "300"
                                  }, null, 512)
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "chart-container" }, [
                                createVNode("canvas", {
                                  ref_key: "imageChart",
                                  ref: imageChart,
                                  width: "400",
                                  height: "300"
                                }, null, 512)
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { title: "\u56FE\u7247\u5206\u7C7B\u7EDF\u8BA1" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "chart-container" }, [
                              createVNode("canvas", {
                                ref_key: "imageChart",
                                ref: imageChart,
                                width: "400",
                                height: "300"
                              }, null, 512)
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { title: "\u6587\u7AE0\u5206\u7C7B\u5206\u5E03" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "chart-container" }, [
                            createVNode("canvas", {
                              ref_key: "categoryChart",
                              ref: categoryChart,
                              width: "400",
                              height: "300"
                            }, null, 512)
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { title: "\u56FE\u7247\u5206\u7C7B\u7EDF\u8BA1" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "chart-container" }, [
                            createVNode("canvas", {
                              ref_key: "imageChart",
                              ref: imageChart,
                              width: "400",
                              height: "300"
                            }, null, 512)
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="details-section" data-v-86369a80>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, { start: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-newspaper`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-newspaper")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(` \u6587\u7AE0\u7EDF\u8BA1\u8BE6\u60C5 `);
                            } else {
                              return [
                                createVNode(VIcon, { start: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-newspaper")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" \u6587\u7AE0\u7EDF\u8BA1\u8BE6\u60C5 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTable, { density: "compact" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<thead data-v-86369a80${_scopeId5}><tr data-v-86369a80${_scopeId5}><th data-v-86369a80${_scopeId5}>\u5206\u7C7B</th><th data-v-86369a80${_scopeId5}>\u6570\u91CF</th><th data-v-86369a80${_scopeId5}>\u5360\u6BD4</th></tr></thead><tbody data-v-86369a80${_scopeId5}><!--[-->`);
                                    ssrRenderList(articleStats.value, (item) => {
                                      _push6(`<tr data-v-86369a80${_scopeId5}><td data-v-86369a80${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VChip, {
                                        color: getCategoryColor(item.category),
                                        size: "small"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.category)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.category), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</td><td data-v-86369a80${_scopeId5}>${ssrInterpolate(item.count)}</td><td data-v-86369a80${_scopeId5}>${ssrInterpolate(item.percentage)}%</td></tr>`);
                                    });
                                    _push6(`<!--]--></tbody>`);
                                  } else {
                                    return [
                                      createVNode("thead", null, [
                                        createVNode("tr", null, [
                                          createVNode("th", null, "\u5206\u7C7B"),
                                          createVNode("th", null, "\u6570\u91CF"),
                                          createVNode("th", null, "\u5360\u6BD4")
                                        ])
                                      ]),
                                      createVNode("tbody", null, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(articleStats.value, (item) => {
                                          return openBlock(), createBlock("tr", {
                                            key: item.category
                                          }, [
                                            createVNode("td", null, [
                                              createVNode(VChip, {
                                                color: getCategoryColor(item.category),
                                                size: "small"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.category), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"])
                                            ]),
                                            createVNode("td", null, toDisplayString(item.count), 1),
                                            createVNode("td", null, toDisplayString(item.percentage) + "%", 1)
                                          ]);
                                        }), 128))
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTable, { density: "compact" }, {
                                  default: withCtx(() => [
                                    createVNode("thead", null, [
                                      createVNode("tr", null, [
                                        createVNode("th", null, "\u5206\u7C7B"),
                                        createVNode("th", null, "\u6570\u91CF"),
                                        createVNode("th", null, "\u5360\u6BD4")
                                      ])
                                    ]),
                                    createVNode("tbody", null, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(articleStats.value, (item) => {
                                        return openBlock(), createBlock("tr", {
                                          key: item.category
                                        }, [
                                          createVNode("td", null, [
                                            createVNode(VChip, {
                                              color: getCategoryColor(item.category),
                                              size: "small"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.category), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])
                                          ]),
                                          createVNode("td", null, toDisplayString(item.count), 1),
                                          createVNode("td", null, toDisplayString(item.percentage) + "%", 1)
                                        ]);
                                      }), 128))
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardTitle, { class: "d-flex align-center" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { start: "" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-newspaper")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" \u6587\u7AE0\u7EDF\u8BA1\u8BE6\u60C5 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VTable, { density: "compact" }, {
                                default: withCtx(() => [
                                  createVNode("thead", null, [
                                    createVNode("tr", null, [
                                      createVNode("th", null, "\u5206\u7C7B"),
                                      createVNode("th", null, "\u6570\u91CF"),
                                      createVNode("th", null, "\u5360\u6BD4")
                                    ])
                                  ]),
                                  createVNode("tbody", null, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(articleStats.value, (item) => {
                                      return openBlock(), createBlock("tr", {
                                        key: item.category
                                      }, [
                                        createVNode("td", null, [
                                          createVNode(VChip, {
                                            color: getCategoryColor(item.category),
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.category), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"])
                                        ]),
                                        createVNode("td", null, toDisplayString(item.count), 1),
                                        createVNode("td", null, toDisplayString(item.percentage) + "%", 1)
                                      ]);
                                    }), 128))
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "d-flex align-center" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { start: "" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-newspaper")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" \u6587\u7AE0\u7EDF\u8BA1\u8BE6\u60C5 ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VTable, { density: "compact" }, {
                              default: withCtx(() => [
                                createVNode("thead", null, [
                                  createVNode("tr", null, [
                                    createVNode("th", null, "\u5206\u7C7B"),
                                    createVNode("th", null, "\u6570\u91CF"),
                                    createVNode("th", null, "\u5360\u6BD4")
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(articleStats.value, (item) => {
                                    return openBlock(), createBlock("tr", {
                                      key: item.category
                                    }, [
                                      createVNode("td", null, [
                                        createVNode(VChip, {
                                          color: getCategoryColor(item.category),
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.category), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ]),
                                      createVNode("td", null, toDisplayString(item.count), 1),
                                      createVNode("td", null, toDisplayString(item.percentage) + "%", 1)
                                    ]);
                                  }), 128))
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, { start: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-image`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-image")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(` \u56FE\u7247\u7EDF\u8BA1\u8BE6\u60C5 `);
                            } else {
                              return [
                                createVNode(VIcon, { start: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-image")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" \u56FE\u7247\u7EDF\u8BA1\u8BE6\u60C5 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTable, { density: "compact" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<thead data-v-86369a80${_scopeId5}><tr data-v-86369a80${_scopeId5}><th data-v-86369a80${_scopeId5}>\u5206\u7C7B</th><th data-v-86369a80${_scopeId5}>\u6570\u91CF</th><th data-v-86369a80${_scopeId5}>\u5927\u5C0F</th></tr></thead><tbody data-v-86369a80${_scopeId5}><!--[-->`);
                                    ssrRenderList(imageStats.value, (item) => {
                                      _push6(`<tr data-v-86369a80${_scopeId5}><td data-v-86369a80${_scopeId5}>${ssrInterpolate(item.category)}</td><td data-v-86369a80${_scopeId5}>${ssrInterpolate(item.count)}</td><td data-v-86369a80${_scopeId5}>${ssrInterpolate(formatSize(item.size))}</td></tr>`);
                                    });
                                    _push6(`<!--]--></tbody>`);
                                  } else {
                                    return [
                                      createVNode("thead", null, [
                                        createVNode("tr", null, [
                                          createVNode("th", null, "\u5206\u7C7B"),
                                          createVNode("th", null, "\u6570\u91CF"),
                                          createVNode("th", null, "\u5927\u5C0F")
                                        ])
                                      ]),
                                      createVNode("tbody", null, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(imageStats.value, (item) => {
                                          return openBlock(), createBlock("tr", {
                                            key: item.category
                                          }, [
                                            createVNode("td", null, toDisplayString(item.category), 1),
                                            createVNode("td", null, toDisplayString(item.count), 1),
                                            createVNode("td", null, toDisplayString(formatSize(item.size)), 1)
                                          ]);
                                        }), 128))
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTable, { density: "compact" }, {
                                  default: withCtx(() => [
                                    createVNode("thead", null, [
                                      createVNode("tr", null, [
                                        createVNode("th", null, "\u5206\u7C7B"),
                                        createVNode("th", null, "\u6570\u91CF"),
                                        createVNode("th", null, "\u5927\u5C0F")
                                      ])
                                    ]),
                                    createVNode("tbody", null, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(imageStats.value, (item) => {
                                        return openBlock(), createBlock("tr", {
                                          key: item.category
                                        }, [
                                          createVNode("td", null, toDisplayString(item.category), 1),
                                          createVNode("td", null, toDisplayString(item.count), 1),
                                          createVNode("td", null, toDisplayString(formatSize(item.size)), 1)
                                        ]);
                                      }), 128))
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardTitle, { class: "d-flex align-center" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { start: "" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-image")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" \u56FE\u7247\u7EDF\u8BA1\u8BE6\u60C5 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VTable, { density: "compact" }, {
                                default: withCtx(() => [
                                  createVNode("thead", null, [
                                    createVNode("tr", null, [
                                      createVNode("th", null, "\u5206\u7C7B"),
                                      createVNode("th", null, "\u6570\u91CF"),
                                      createVNode("th", null, "\u5927\u5C0F")
                                    ])
                                  ]),
                                  createVNode("tbody", null, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(imageStats.value, (item) => {
                                      return openBlock(), createBlock("tr", {
                                        key: item.category
                                      }, [
                                        createVNode("td", null, toDisplayString(item.category), 1),
                                        createVNode("td", null, toDisplayString(item.count), 1),
                                        createVNode("td", null, toDisplayString(formatSize(item.size)), 1)
                                      ]);
                                    }), 128))
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "d-flex align-center" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { start: "" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-image")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" \u56FE\u7247\u7EDF\u8BA1\u8BE6\u60C5 ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VTable, { density: "compact" }, {
                              default: withCtx(() => [
                                createVNode("thead", null, [
                                  createVNode("tr", null, [
                                    createVNode("th", null, "\u5206\u7C7B"),
                                    createVNode("th", null, "\u6570\u91CF"),
                                    createVNode("th", null, "\u5927\u5C0F")
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(imageStats.value, (item) => {
                                    return openBlock(), createBlock("tr", {
                                      key: item.category
                                    }, [
                                      createVNode("td", null, toDisplayString(item.category), 1),
                                      createVNode("td", null, toDisplayString(item.count), 1),
                                      createVNode("td", null, toDisplayString(formatSize(item.size)), 1)
                                    ]);
                                  }), 128))
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, { class: "d-flex align-center" }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-newspaper")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" \u6587\u7AE0\u7EDF\u8BA1\u8BE6\u60C5 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VTable, { density: "compact" }, {
                            default: withCtx(() => [
                              createVNode("thead", null, [
                                createVNode("tr", null, [
                                  createVNode("th", null, "\u5206\u7C7B"),
                                  createVNode("th", null, "\u6570\u91CF"),
                                  createVNode("th", null, "\u5360\u6BD4")
                                ])
                              ]),
                              createVNode("tbody", null, [
                                (openBlock(true), createBlock(Fragment, null, renderList(articleStats.value, (item) => {
                                  return openBlock(), createBlock("tr", {
                                    key: item.category
                                  }, [
                                    createVNode("td", null, [
                                      createVNode(VChip, {
                                        color: getCategoryColor(item.category),
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.category), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ]),
                                    createVNode("td", null, toDisplayString(item.count), 1),
                                    createVNode("td", null, toDisplayString(item.percentage) + "%", 1)
                                  ]);
                                }), 128))
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, { class: "d-flex align-center" }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-image")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" \u56FE\u7247\u7EDF\u8BA1\u8BE6\u60C5 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VTable, { density: "compact" }, {
                            default: withCtx(() => [
                              createVNode("thead", null, [
                                createVNode("tr", null, [
                                  createVNode("th", null, "\u5206\u7C7B"),
                                  createVNode("th", null, "\u6570\u91CF"),
                                  createVNode("th", null, "\u5927\u5C0F")
                                ])
                              ]),
                              createVNode("tbody", null, [
                                (openBlock(true), createBlock(Fragment, null, renderList(imageStats.value, (item) => {
                                  return openBlock(), createBlock("tr", {
                                    key: item.category
                                  }, [
                                    createVNode("td", null, toDisplayString(item.category), 1),
                                    createVNode("td", null, toDisplayString(item.count), 1),
                                    createVNode("td", null, toDisplayString(formatSize(item.size)), 1)
                                  ]);
                                }), 128))
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="system-section" data-v-86369a80>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { start: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-information`);
                      } else {
                        return [
                          createTextVNode("mdi-information")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` \u7CFB\u7EDF\u4F7F\u7528\u60C5\u51B5 `);
                } else {
                  return [
                    createVNode(VIcon, { start: "" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-information")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" \u7CFB\u7EDF\u4F7F\u7528\u60C5\u51B5 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="system-info" data-v-86369a80${_scopeId4}><h4 data-v-86369a80${_scopeId4}>\u5B58\u50A8\u8BE6\u60C5</h4><p data-v-86369a80${_scopeId4}><strong data-v-86369a80${_scopeId4}>LocalStorage\u4F7F\u7528:</strong> ${ssrInterpolate(formatSize(systemInfo.value.storageUsed))}</p><p data-v-86369a80${_scopeId4}><strong data-v-86369a80${_scopeId4}>\u53EF\u7528\u7A7A\u95F4:</strong> ${ssrInterpolate(formatSize(systemInfo.value.storageAvailable))}</p><p data-v-86369a80${_scopeId4}><strong data-v-86369a80${_scopeId4}>\u4F7F\u7528\u7387:</strong> ${ssrInterpolate(systemInfo.value.storagePercentage)}%</p></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "system-info" }, [
                                  createVNode("h4", null, "\u5B58\u50A8\u8BE6\u60C5"),
                                  createVNode("p", null, [
                                    createVNode("strong", null, "LocalStorage\u4F7F\u7528:"),
                                    createTextVNode(" " + toDisplayString(formatSize(systemInfo.value.storageUsed)), 1)
                                  ]),
                                  createVNode("p", null, [
                                    createVNode("strong", null, "\u53EF\u7528\u7A7A\u95F4:"),
                                    createTextVNode(" " + toDisplayString(formatSize(systemInfo.value.storageAvailable)), 1)
                                  ]),
                                  createVNode("p", null, [
                                    createVNode("strong", null, "\u4F7F\u7528\u7387:"),
                                    createTextVNode(" " + toDisplayString(systemInfo.value.storagePercentage) + "%", 1)
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="system-info" data-v-86369a80${_scopeId4}><h4 data-v-86369a80${_scopeId4}>\u6D4F\u89C8\u5668\u4FE1\u606F</h4><p data-v-86369a80${_scopeId4}><strong data-v-86369a80${_scopeId4}>\u6D4F\u89C8\u5668:</strong> ${ssrInterpolate(systemInfo.value.browser)}</p><p data-v-86369a80${_scopeId4}><strong data-v-86369a80${_scopeId4}>\u7248\u672C:</strong> ${ssrInterpolate(systemInfo.value.version)}</p><p data-v-86369a80${_scopeId4}><strong data-v-86369a80${_scopeId4}>\u5E73\u53F0:</strong> ${ssrInterpolate(systemInfo.value.platform)}</p></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "system-info" }, [
                                  createVNode("h4", null, "\u6D4F\u89C8\u5668\u4FE1\u606F"),
                                  createVNode("p", null, [
                                    createVNode("strong", null, "\u6D4F\u89C8\u5668:"),
                                    createTextVNode(" " + toDisplayString(systemInfo.value.browser), 1)
                                  ]),
                                  createVNode("p", null, [
                                    createVNode("strong", null, "\u7248\u672C:"),
                                    createTextVNode(" " + toDisplayString(systemInfo.value.version), 1)
                                  ]),
                                  createVNode("p", null, [
                                    createVNode("strong", null, "\u5E73\u53F0:"),
                                    createTextVNode(" " + toDisplayString(systemInfo.value.platform), 1)
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="system-info" data-v-86369a80${_scopeId4}><h4 data-v-86369a80${_scopeId4}>\u6027\u80FD\u76D1\u63A7</h4><p data-v-86369a80${_scopeId4}><strong data-v-86369a80${_scopeId4}>\u9875\u9762\u52A0\u8F7D\u65F6\u95F4:</strong> ${ssrInterpolate(systemInfo.value.loadTime)}ms</p><p data-v-86369a80${_scopeId4}><strong data-v-86369a80${_scopeId4}>\u5185\u5B58\u4F7F\u7528:</strong> ${ssrInterpolate(systemInfo.value.memoryUsage)}MB</p><p data-v-86369a80${_scopeId4}><strong data-v-86369a80${_scopeId4}>\u8FDE\u63A5\u72B6\u6001:</strong>`);
                              _push5(ssrRenderComponent(VChip, {
                                color: systemInfo.value.online ? "success" : "error",
                                size: "small"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(systemInfo.value.online ? "\u5728\u7EBF" : "\u79BB\u7EBF")}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(systemInfo.value.online ? "\u5728\u7EBF" : "\u79BB\u7EBF"), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</p></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "system-info" }, [
                                  createVNode("h4", null, "\u6027\u80FD\u76D1\u63A7"),
                                  createVNode("p", null, [
                                    createVNode("strong", null, "\u9875\u9762\u52A0\u8F7D\u65F6\u95F4:"),
                                    createTextVNode(" " + toDisplayString(systemInfo.value.loadTime) + "ms", 1)
                                  ]),
                                  createVNode("p", null, [
                                    createVNode("strong", null, "\u5185\u5B58\u4F7F\u7528:"),
                                    createTextVNode(" " + toDisplayString(systemInfo.value.memoryUsage) + "MB", 1)
                                  ]),
                                  createVNode("p", null, [
                                    createVNode("strong", null, "\u8FDE\u63A5\u72B6\u6001:"),
                                    createVNode(VChip, {
                                      color: systemInfo.value.online ? "success" : "error",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(systemInfo.value.online ? "\u5728\u7EBF" : "\u79BB\u7EBF"), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["color"])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "system-info" }, [
                                createVNode("h4", null, "\u5B58\u50A8\u8BE6\u60C5"),
                                createVNode("p", null, [
                                  createVNode("strong", null, "LocalStorage\u4F7F\u7528:"),
                                  createTextVNode(" " + toDisplayString(formatSize(systemInfo.value.storageUsed)), 1)
                                ]),
                                createVNode("p", null, [
                                  createVNode("strong", null, "\u53EF\u7528\u7A7A\u95F4:"),
                                  createTextVNode(" " + toDisplayString(formatSize(systemInfo.value.storageAvailable)), 1)
                                ]),
                                createVNode("p", null, [
                                  createVNode("strong", null, "\u4F7F\u7528\u7387:"),
                                  createTextVNode(" " + toDisplayString(systemInfo.value.storagePercentage) + "%", 1)
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "system-info" }, [
                                createVNode("h4", null, "\u6D4F\u89C8\u5668\u4FE1\u606F"),
                                createVNode("p", null, [
                                  createVNode("strong", null, "\u6D4F\u89C8\u5668:"),
                                  createTextVNode(" " + toDisplayString(systemInfo.value.browser), 1)
                                ]),
                                createVNode("p", null, [
                                  createVNode("strong", null, "\u7248\u672C:"),
                                  createTextVNode(" " + toDisplayString(systemInfo.value.version), 1)
                                ]),
                                createVNode("p", null, [
                                  createVNode("strong", null, "\u5E73\u53F0:"),
                                  createTextVNode(" " + toDisplayString(systemInfo.value.platform), 1)
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "system-info" }, [
                                createVNode("h4", null, "\u6027\u80FD\u76D1\u63A7"),
                                createVNode("p", null, [
                                  createVNode("strong", null, "\u9875\u9762\u52A0\u8F7D\u65F6\u95F4:"),
                                  createTextVNode(" " + toDisplayString(systemInfo.value.loadTime) + "ms", 1)
                                ]),
                                createVNode("p", null, [
                                  createVNode("strong", null, "\u5185\u5B58\u4F7F\u7528:"),
                                  createTextVNode(" " + toDisplayString(systemInfo.value.memoryUsage) + "MB", 1)
                                ]),
                                createVNode("p", null, [
                                  createVNode("strong", null, "\u8FDE\u63A5\u72B6\u6001:"),
                                  createVNode(VChip, {
                                    color: systemInfo.value.online ? "success" : "error",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(systemInfo.value.online ? "\u5728\u7EBF" : "\u79BB\u7EBF"), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["color"])
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "system-info" }, [
                              createVNode("h4", null, "\u5B58\u50A8\u8BE6\u60C5"),
                              createVNode("p", null, [
                                createVNode("strong", null, "LocalStorage\u4F7F\u7528:"),
                                createTextVNode(" " + toDisplayString(formatSize(systemInfo.value.storageUsed)), 1)
                              ]),
                              createVNode("p", null, [
                                createVNode("strong", null, "\u53EF\u7528\u7A7A\u95F4:"),
                                createTextVNode(" " + toDisplayString(formatSize(systemInfo.value.storageAvailable)), 1)
                              ]),
                              createVNode("p", null, [
                                createVNode("strong", null, "\u4F7F\u7528\u7387:"),
                                createTextVNode(" " + toDisplayString(systemInfo.value.storagePercentage) + "%", 1)
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "system-info" }, [
                              createVNode("h4", null, "\u6D4F\u89C8\u5668\u4FE1\u606F"),
                              createVNode("p", null, [
                                createVNode("strong", null, "\u6D4F\u89C8\u5668:"),
                                createTextVNode(" " + toDisplayString(systemInfo.value.browser), 1)
                              ]),
                              createVNode("p", null, [
                                createVNode("strong", null, "\u7248\u672C:"),
                                createTextVNode(" " + toDisplayString(systemInfo.value.version), 1)
                              ]),
                              createVNode("p", null, [
                                createVNode("strong", null, "\u5E73\u53F0:"),
                                createTextVNode(" " + toDisplayString(systemInfo.value.platform), 1)
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "system-info" }, [
                              createVNode("h4", null, "\u6027\u80FD\u76D1\u63A7"),
                              createVNode("p", null, [
                                createVNode("strong", null, "\u9875\u9762\u52A0\u8F7D\u65F6\u95F4:"),
                                createTextVNode(" " + toDisplayString(systemInfo.value.loadTime) + "ms", 1)
                              ]),
                              createVNode("p", null, [
                                createVNode("strong", null, "\u5185\u5B58\u4F7F\u7528:"),
                                createTextVNode(" " + toDisplayString(systemInfo.value.memoryUsage) + "MB", 1)
                              ]),
                              createVNode("p", null, [
                                createVNode("strong", null, "\u8FDE\u63A5\u72B6\u6001:"),
                                createVNode(VChip, {
                                  color: systemInfo.value.online ? "success" : "error",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(systemInfo.value.online ? "\u5728\u7EBF" : "\u79BB\u7EBF"), 1)
                                  ]),
                                  _: 1
                                }, 8, ["color"])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardTitle, { class: "d-flex align-center" }, {
                default: withCtx(() => [
                  createVNode(VIcon, { start: "" }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-information")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" \u7CFB\u7EDF\u4F7F\u7528\u60C5\u51B5 ")
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "system-info" }, [
                            createVNode("h4", null, "\u5B58\u50A8\u8BE6\u60C5"),
                            createVNode("p", null, [
                              createVNode("strong", null, "LocalStorage\u4F7F\u7528:"),
                              createTextVNode(" " + toDisplayString(formatSize(systemInfo.value.storageUsed)), 1)
                            ]),
                            createVNode("p", null, [
                              createVNode("strong", null, "\u53EF\u7528\u7A7A\u95F4:"),
                              createTextVNode(" " + toDisplayString(formatSize(systemInfo.value.storageAvailable)), 1)
                            ]),
                            createVNode("p", null, [
                              createVNode("strong", null, "\u4F7F\u7528\u7387:"),
                              createTextVNode(" " + toDisplayString(systemInfo.value.storagePercentage) + "%", 1)
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "system-info" }, [
                            createVNode("h4", null, "\u6D4F\u89C8\u5668\u4FE1\u606F"),
                            createVNode("p", null, [
                              createVNode("strong", null, "\u6D4F\u89C8\u5668:"),
                              createTextVNode(" " + toDisplayString(systemInfo.value.browser), 1)
                            ]),
                            createVNode("p", null, [
                              createVNode("strong", null, "\u7248\u672C:"),
                              createTextVNode(" " + toDisplayString(systemInfo.value.version), 1)
                            ]),
                            createVNode("p", null, [
                              createVNode("strong", null, "\u5E73\u53F0:"),
                              createTextVNode(" " + toDisplayString(systemInfo.value.platform), 1)
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "system-info" }, [
                            createVNode("h4", null, "\u6027\u80FD\u76D1\u63A7"),
                            createVNode("p", null, [
                              createVNode("strong", null, "\u9875\u9762\u52A0\u8F7D\u65F6\u95F4:"),
                              createTextVNode(" " + toDisplayString(systemInfo.value.loadTime) + "ms", 1)
                            ]),
                            createVNode("p", null, [
                              createVNode("strong", null, "\u5185\u5B58\u4F7F\u7528:"),
                              createTextVNode(" " + toDisplayString(systemInfo.value.memoryUsage) + "MB", 1)
                            ]),
                            createVNode("p", null, [
                              createVNode("strong", null, "\u8FDE\u63A5\u72B6\u6001:"),
                              createVNode(VChip, {
                                color: systemInfo.value.online ? "success" : "error",
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(systemInfo.value.online ? "\u5728\u7EBF" : "\u79BB\u7EBF"), 1)
                                ]),
                                _: 1
                              }, 8, ["color"])
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="actions-section" data-v-86369a80>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u6570\u636E\u7BA1\u7406\u64CD\u4F5C`);
                            } else {
                              return [
                                createTextVNode("\u6570\u636E\u7BA1\u7406\u64CD\u4F5C")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="action-buttons" data-v-86369a80${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, {
                                color: "primary",
                                "prepend-icon": "mdi-refresh",
                                onClick: refreshData,
                                loading: refreshing.value
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u5237\u65B0\u6570\u636E `);
                                  } else {
                                    return [
                                      createTextVNode(" \u5237\u65B0\u6570\u636E ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                color: "success",
                                "prepend-icon": "mdi-download",
                                onClick: exportData
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u5BFC\u51FA\u6570\u636E `);
                                  } else {
                                    return [
                                      createTextVNode(" \u5BFC\u51FA\u6570\u636E ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                color: "warning",
                                "prepend-icon": "mdi-broom",
                                onClick: cleanupData
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u6E05\u7406\u6570\u636E `);
                                  } else {
                                    return [
                                      createTextVNode(" \u6E05\u7406\u6570\u636E ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                color: "info",
                                "prepend-icon": "mdi-chart-line",
                                onClick: generateReport
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u751F\u6210\u62A5\u544A `);
                                  } else {
                                    return [
                                      createTextVNode(" \u751F\u6210\u62A5\u544A ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "action-buttons" }, [
                                  createVNode(VBtn, {
                                    color: "primary",
                                    "prepend-icon": "mdi-refresh",
                                    onClick: refreshData,
                                    loading: refreshing.value
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u5237\u65B0\u6570\u636E ")
                                    ]),
                                    _: 1
                                  }, 8, ["loading"]),
                                  createVNode(VBtn, {
                                    color: "success",
                                    "prepend-icon": "mdi-download",
                                    onClick: exportData
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u5BFC\u51FA\u6570\u636E ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    color: "warning",
                                    "prepend-icon": "mdi-broom",
                                    onClick: cleanupData
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u6E05\u7406\u6570\u636E ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    color: "info",
                                    "prepend-icon": "mdi-chart-line",
                                    onClick: generateReport
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u751F\u6210\u62A5\u544A ")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u6570\u636E\u7BA1\u7406\u64CD\u4F5C")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "action-buttons" }, [
                                createVNode(VBtn, {
                                  color: "primary",
                                  "prepend-icon": "mdi-refresh",
                                  onClick: refreshData,
                                  loading: refreshing.value
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u5237\u65B0\u6570\u636E ")
                                  ]),
                                  _: 1
                                }, 8, ["loading"]),
                                createVNode(VBtn, {
                                  color: "success",
                                  "prepend-icon": "mdi-download",
                                  onClick: exportData
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u5BFC\u51FA\u6570\u636E ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "warning",
                                  "prepend-icon": "mdi-broom",
                                  onClick: cleanupData
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u6E05\u7406\u6570\u636E ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "info",
                                  "prepend-icon": "mdi-chart-line",
                                  onClick: generateReport
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u751F\u6210\u62A5\u544A ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u6570\u636E\u7BA1\u7406\u64CD\u4F5C")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "action-buttons" }, [
                              createVNode(VBtn, {
                                color: "primary",
                                "prepend-icon": "mdi-refresh",
                                onClick: refreshData,
                                loading: refreshing.value
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u5237\u65B0\u6570\u636E ")
                                ]),
                                _: 1
                              }, 8, ["loading"]),
                              createVNode(VBtn, {
                                color: "success",
                                "prepend-icon": "mdi-download",
                                onClick: exportData
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u5BFC\u51FA\u6570\u636E ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                color: "warning",
                                "prepend-icon": "mdi-broom",
                                onClick: cleanupData
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u6E05\u7406\u6570\u636E ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                color: "info",
                                "prepend-icon": "mdi-chart-line",
                                onClick: generateReport
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u751F\u6210\u62A5\u544A ")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u6570\u636E\u7BA1\u7406\u64CD\u4F5C")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "action-buttons" }, [
                            createVNode(VBtn, {
                              color: "primary",
                              "prepend-icon": "mdi-refresh",
                              onClick: refreshData,
                              loading: refreshing.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u5237\u65B0\u6570\u636E ")
                              ]),
                              _: 1
                            }, 8, ["loading"]),
                            createVNode(VBtn, {
                              color: "success",
                              "prepend-icon": "mdi-download",
                              onClick: exportData
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u5BFC\u51FA\u6570\u636E ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              color: "warning",
                              "prepend-icon": "mdi-broom",
                              onClick: cleanupData
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u6E05\u7406\u6570\u636E ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              color: "info",
                              "prepend-icon": "mdi-chart-line",
                              onClick: generateReport
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u751F\u6210\u62A5\u544A ")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: showMessage.value,
        "onUpdate:modelValue": ($event) => showMessage.value = $event,
        color: messageType.value,
        timeout: 3e3
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              variant: "text",
              onClick: ($event) => showMessage.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u5173\u95ED`);
                } else {
                  return [
                    createTextVNode("\u5173\u95ED")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                variant: "text",
                onClick: ($event) => showMessage.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode("\u5173\u95ED")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(message.value)} `);
          } else {
            return [
              createTextVNode(toDisplayString(message.value) + " ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnalyticsManager.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AnalyticsManager = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-86369a80"]]);
const makeVBadgeProps = propsFactory({
  bordered: Boolean,
  color: String,
  content: [Number, String],
  dot: Boolean,
  floating: Boolean,
  icon: IconValue,
  inline: Boolean,
  label: {
    type: String,
    default: "$vuetify.badge"
  },
  max: [Number, String],
  modelValue: {
    type: Boolean,
    default: true
  },
  offsetX: [Number, String],
  offsetY: [Number, String],
  textColor: String,
  ...makeComponentProps(),
  ...makeLocationProps({
    location: "top end"
  }),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeTransitionProps$1({
    transition: "scale-rotate-transition"
  })
}, "VBadge");
const VBadge = genericComponent()({
  name: "VBadge",
  inheritAttrs: false,
  props: makeVBadgeProps(),
  setup(props, ctx) {
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      t
    } = useLocale();
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(() => props.textColor);
    const {
      themeClasses
    } = useTheme();
    const {
      locationStyles
    } = useLocation(props, true, (side) => {
      var _a, _b;
      const base = props.floating ? props.dot ? 2 : 4 : props.dot ? 8 : 12;
      return base + (["top", "bottom"].includes(side) ? Number((_a = props.offsetY) != null ? _a : 0) : ["left", "right"].includes(side) ? Number((_b = props.offsetX) != null ? _b : 0) : 0);
    });
    useRender(() => {
      const value = Number(props.content);
      const content = !props.max || isNaN(value) ? props.content : value <= Number(props.max) ? value : `${props.max}+`;
      const [badgeAttrs, attrs] = pickWithRest(ctx.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
      return createVNode(props.tag, mergeProps({
        "class": ["v-badge", {
          "v-badge--bordered": props.bordered,
          "v-badge--dot": props.dot,
          "v-badge--floating": props.floating,
          "v-badge--inline": props.inline
        }, props.class]
      }, attrs, {
        "style": props.style
      }), {
        default: () => {
          var _a, _b;
          return [createElementVNode("div", {
            "class": "v-badge__wrapper"
          }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a), createVNode(MaybeTransition, {
            "transition": props.transition
          }, {
            default: () => {
              var _a2, _b2;
              return [withDirectives(createElementVNode("span", mergeProps({
                "class": ["v-badge__badge", themeClasses.value, backgroundColorClasses.value, roundedClasses.value, textColorClasses.value],
                "style": [backgroundColorStyles.value, textColorStyles.value, props.inline ? {} : locationStyles.value],
                "aria-atomic": "true",
                "aria-label": t(props.label, value),
                "aria-live": "polite",
                "role": "status"
              }, badgeAttrs), [props.dot ? void 0 : ctx.slots.badge ? (_b2 = (_a2 = ctx.slots).badge) == null ? void 0 : _b2.call(_a2) : props.icon ? createVNode(VIcon, {
                "icon": props.icon
              }, null) : content]), [[vShow, props.modelValue]])];
            }
          })])];
        }
      });
    });
    return {};
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const drawer = ref(true);
    const activeTab = ref("articles");
    const showSystemDialog = ref(false);
    const showMessage = ref(false);
    const message = ref("");
    const messageType = ref("success");
    const navigationItems = [
      {
        value: "articles",
        title: "\u6587\u7AE0\u7BA1\u7406",
        subtitle: "\u7BA1\u7406\u4F01\u4E1A\u65B0\u95FB\u548C\u6587\u7AE0",
        icon: "mdi-newspaper",
        badge: null
      },
      {
        value: "images",
        title: "\u56FE\u7247\u7BA1\u7406",
        subtitle: "\u4E0A\u4F20\u548C\u7BA1\u7406\u56FE\u7247\u7D20\u6750",
        icon: "mdi-image-multiple",
        badge: null
      },
      {
        value: "homepage",
        title: "\u9996\u9875\u7BA1\u7406",
        subtitle: "\u7BA1\u7406\u9996\u9875\u5185\u5BB9\u548C\u80CC\u666F",
        icon: "mdi-home-variant",
        badge: null
      },
      {
        value: "analytics",
        title: "\u6570\u636E\u5206\u6790",
        subtitle: "\u67E5\u770B\u7F51\u7AD9\u7EDF\u8BA1\u6570\u636E",
        icon: "mdi-chart-line",
        badge: null
      }
    ];
    const currentTabIcon = computed(() => {
      const item = navigationItems.find((nav) => nav.value === activeTab.value);
      return (item == null ? void 0 : item.icon) || "mdi-cog";
    });
    const currentTabTitle = computed(() => {
      const item = navigationItems.find((nav) => nav.value === activeTab.value);
      return (item == null ? void 0 : item.title) || "\u7BA1\u7406\u4E2D\u5FC3";
    });
    const currentTabSubtitle = computed(() => {
      const item = navigationItems.find((nav) => nav.value === activeTab.value);
      return (item == null ? void 0 : item.subtitle) || "";
    });
    const buildTime = computed(() => {
      return (/* @__PURE__ */ new Date()).toLocaleString("zh-CN");
    });
    const storageUsage = computed(() => {
      var _a;
      try {
        let totalSize = 0;
        for (let key in localStorage) {
          if (localStorage.hasOwnProperty(key)) {
            totalSize += ((_a = localStorage.getItem(key)) == null ? void 0 : _a.length) || 0;
          }
        }
        return `${(totalSize / 1024).toFixed(2)} KB`;
      } catch (error) {
        return "\u65E0\u6CD5\u83B7\u53D6";
      }
    });
    const userAgent = computed(() => {
      return (void 0).userAgent.split(" ").slice(0, 3).join(" ");
    });
    const goHome = () => {
      router.push("/");
    };
    const refreshData = () => {
      (void 0).location.reload();
    };
    const backupData = () => {
      try {
        const data = {
          articles: localStorage.getItem("notrace_articles"),
          images: localStorage.getItem("notrace_images"),
          homepage: localStorage.getItem("notrace_homepage"),
          analytics: localStorage.getItem("notrace_analytics"),
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        };
        const dataStr = JSON.stringify(data, null, 2);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = (void 0).createElement("a");
        a.href = url;
        a.download = `notrace-backup-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        showMessage.value = true;
        message.value = "\u6570\u636E\u5907\u4EFD\u5DF2\u4E0B\u8F7D";
        messageType.value = "success";
      } catch (error) {
        showMessage.value = true;
        message.value = "\u5907\u4EFD\u5931\u8D25";
        messageType.value = "error";
      }
    };
    const clearCache = () => {
      try {
        const keysToKeep = [
          "notrace_articles",
          "notrace_images",
          "notrace_homepage",
          "notrace_image_categories"
        ];
        const keysToRemove = [];
        for (let key in localStorage) {
          if (key.startsWith("notrace_") && !keysToKeep.includes(key)) {
            keysToRemove.push(key);
          }
        }
        keysToRemove.forEach((key) => {
          localStorage.removeItem(key);
        });
        showMessage.value = true;
        message.value = `\u5DF2\u6E05\u7406 ${keysToRemove.length} \u4E2A\u7F13\u5B58\u9879`;
        messageType.value = "success";
      } catch (error) {
        showMessage.value = true;
        message.value = "\u6E05\u7406\u7F13\u5B58\u5931\u8D25";
        messageType.value = "error";
      }
    };
    const showSystemInfo = () => {
      showSystemDialog.value = true;
    };
    watch(activeTab, (newTab) => {
      const url = new URL((void 0).location.href);
      url.searchParams.set("tab", newTab);
      (void 0).history.replaceState({}, "", url.toString());
    });
    useHead({
      title: "NO TRACE EXPLORER \u7BA1\u7406\u4E2D\u5FC3",
      meta: [
        { name: "description", content: "NO TRACE EXPLORER \u4F01\u4E1A\u7F51\u7AD9\u7BA1\u7406\u4E2D\u5FC3" },
        { name: "robots", content: "noindex, nofollow" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-dashboard" }, _attrs))} data-v-e65f7d52>`);
      _push(ssrRenderComponent(VAppBar, {
        color: "primary",
        density: "comfortable",
        elevation: "2",
        app: ""
      }, {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAppBarNavIcon, {
              onClick: ($event) => drawer.value = !drawer.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAppBarNavIcon, {
                onClick: ($event) => drawer.value = !drawer.value
              }, null, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VToolbarTitle, { class: "toolbar-title" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { start: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-cog`);
                      } else {
                        return [
                          createTextVNode("mdi-cog")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` NO TRACE EXPLORER \u7BA1\u7406\u4E2D\u5FC3 `);
                } else {
                  return [
                    createVNode(VIcon, { start: "" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-cog")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" NO TRACE EXPLORER \u7BA1\u7406\u4E2D\u5FC3 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              icon: "mdi-home",
              onClick: goHome,
              title: "\u8FD4\u56DE\u9996\u9875"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              icon: "mdi-refresh",
              onClick: refreshData,
              title: "\u5237\u65B0\u6570\u636E"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VToolbarTitle, { class: "toolbar-title" }, {
                default: withCtx(() => [
                  createVNode(VIcon, { start: "" }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-cog")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" NO TRACE EXPLORER \u7BA1\u7406\u4E2D\u5FC3 ")
                ]),
                _: 1
              }),
              createVNode(VSpacer),
              createVNode(VBtn, {
                icon: "mdi-home",
                onClick: goHome,
                title: "\u8FD4\u56DE\u9996\u9875"
              }),
              createVNode(VBtn, {
                icon: "mdi-refresh",
                onClick: refreshData,
                title: "\u5237\u65B0\u6570\u636E"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VNavigationDrawer, {
        modelValue: drawer.value,
        "onUpdate:modelValue": ($event) => drawer.value = $event,
        app: "",
        width: "280",
        color: "grey-lighten-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="drawer-header" data-v-e65f7d52${_scopeId}><div class="user-info" data-v-e65f7d52${_scopeId}>`);
            _push2(ssrRenderComponent(VAvatar, {
              color: "primary",
              size: "48"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-account`);
                      } else {
                        return [
                          createTextVNode("mdi-account")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-account")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="user-details" data-v-e65f7d52${_scopeId}><div class="user-name" data-v-e65f7d52${_scopeId}>\u7BA1\u7406\u5458</div><div class="user-role" data-v-e65f7d52${_scopeId}>\u7CFB\u7EDF\u7BA1\u7406\u5458</div></div></div></div>`);
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VList, {
              nav: "",
              density: "compact"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(navigationItems, (item) => {
                    _push3(ssrRenderComponent(VListItem, {
                      key: item.value,
                      "prepend-icon": item.icon,
                      title: item.title,
                      subtitle: item.subtitle,
                      active: activeTab.value === item.value,
                      onClick: ($event) => activeTab.value = item.value,
                      class: "nav-item"
                    }, createSlots({ _: 2 }, [
                      item.badge ? {
                        name: "append",
                        fn: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VBadge, {
                              content: item.badge,
                              color: "error",
                              inline: ""
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VBadge, {
                                content: item.badge,
                                color: "error",
                                inline: ""
                              }, null, 8, ["content"])
                            ];
                          }
                        }),
                        key: "0"
                      } : void 0
                    ]), _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(navigationItems, (item) => {
                      return createVNode(VListItem, {
                        key: item.value,
                        "prepend-icon": item.icon,
                        title: item.title,
                        subtitle: item.subtitle,
                        active: activeTab.value === item.value,
                        onClick: ($event) => activeTab.value = item.value,
                        class: "nav-item"
                      }, createSlots({ _: 2 }, [
                        item.badge ? {
                          name: "append",
                          fn: withCtx(() => [
                            createVNode(VBadge, {
                              content: item.badge,
                              color: "error",
                              inline: ""
                            }, null, 8, ["content"])
                          ]),
                          key: "0"
                        } : void 0
                      ]), 1032, ["prepend-icon", "title", "subtitle", "active", "onClick"]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, { class: "my-3" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VList, {
              nav: "",
              density: "compact"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VListSubheader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u7CFB\u7EDF\u8BBE\u7F6E`);
                      } else {
                        return [
                          createTextVNode("\u7CFB\u7EDF\u8BBE\u7F6E")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VListItem, {
                    "prepend-icon": "mdi-backup-restore",
                    title: "\u6570\u636E\u5907\u4EFD",
                    onClick: backupData
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VListItem, {
                    "prepend-icon": "mdi-delete-sweep",
                    title: "\u6E05\u7406\u7F13\u5B58",
                    onClick: clearCache
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VListItem, {
                    "prepend-icon": "mdi-information",
                    title: "\u7CFB\u7EDF\u4FE1\u606F",
                    onClick: showSystemInfo
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VListSubheader, null, {
                      default: withCtx(() => [
                        createTextVNode("\u7CFB\u7EDF\u8BBE\u7F6E")
                      ]),
                      _: 1
                    }),
                    createVNode(VListItem, {
                      "prepend-icon": "mdi-backup-restore",
                      title: "\u6570\u636E\u5907\u4EFD",
                      onClick: backupData
                    }),
                    createVNode(VListItem, {
                      "prepend-icon": "mdi-delete-sweep",
                      title: "\u6E05\u7406\u7F13\u5B58",
                      onClick: clearCache
                    }),
                    createVNode(VListItem, {
                      "prepend-icon": "mdi-information",
                      title: "\u7CFB\u7EDF\u4FE1\u606F",
                      onClick: showSystemInfo
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "drawer-header" }, [
                createVNode("div", { class: "user-info" }, [
                  createVNode(VAvatar, {
                    color: "primary",
                    size: "48"
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-account")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "user-details" }, [
                    createVNode("div", { class: "user-name" }, "\u7BA1\u7406\u5458"),
                    createVNode("div", { class: "user-role" }, "\u7CFB\u7EDF\u7BA1\u7406\u5458")
                  ])
                ])
              ]),
              createVNode(VDivider),
              createVNode(VList, {
                nav: "",
                density: "compact"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(navigationItems, (item) => {
                    return createVNode(VListItem, {
                      key: item.value,
                      "prepend-icon": item.icon,
                      title: item.title,
                      subtitle: item.subtitle,
                      active: activeTab.value === item.value,
                      onClick: ($event) => activeTab.value = item.value,
                      class: "nav-item"
                    }, createSlots({ _: 2 }, [
                      item.badge ? {
                        name: "append",
                        fn: withCtx(() => [
                          createVNode(VBadge, {
                            content: item.badge,
                            color: "error",
                            inline: ""
                          }, null, 8, ["content"])
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1032, ["prepend-icon", "title", "subtitle", "active", "onClick"]);
                  }), 64))
                ]),
                _: 1
              }),
              createVNode(VDivider, { class: "my-3" }),
              createVNode(VList, {
                nav: "",
                density: "compact"
              }, {
                default: withCtx(() => [
                  createVNode(VListSubheader, null, {
                    default: withCtx(() => [
                      createTextVNode("\u7CFB\u7EDF\u8BBE\u7F6E")
                    ]),
                    _: 1
                  }),
                  createVNode(VListItem, {
                    "prepend-icon": "mdi-backup-restore",
                    title: "\u6570\u636E\u5907\u4EFD",
                    onClick: backupData
                  }),
                  createVNode(VListItem, {
                    "prepend-icon": "mdi-delete-sweep",
                    title: "\u6E05\u7406\u7F13\u5B58",
                    onClick: clearCache
                  }),
                  createVNode(VListItem, {
                    "prepend-icon": "mdi-information",
                    title: "\u7CFB\u7EDF\u4FE1\u606F",
                    onClick: showSystemInfo
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VMain, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="main-content" data-v-e65f7d52${_scopeId}><div class="tab-headers" data-v-e65f7d52${_scopeId}><div class="tab-header-content" data-v-e65f7d52${_scopeId}><h1 class="page-title" data-v-e65f7d52${_scopeId}>`);
            _push2(ssrRenderComponent(VIcon, { start: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(currentTabIcon.value)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(currentTabIcon.value), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(currentTabTitle.value)}</h1><p class="page-subtitle" data-v-e65f7d52${_scopeId}>${ssrInterpolate(currentTabSubtitle.value)}</p></div></div><div class="tab-content" data-v-e65f7d52${_scopeId}><div style="${ssrRenderStyle(activeTab.value === "articles" ? null : { display: "none" })}" class="tab-panel" data-v-e65f7d52${_scopeId}>`);
            _push2(ssrRenderComponent(ArticleManager, null, null, _parent2, _scopeId));
            _push2(`</div><div style="${ssrRenderStyle(activeTab.value === "images" ? null : { display: "none" })}" class="tab-panel" data-v-e65f7d52${_scopeId}>`);
            _push2(ssrRenderComponent(ImageManager, null, null, _parent2, _scopeId));
            _push2(`</div><div style="${ssrRenderStyle(activeTab.value === "homepage" ? null : { display: "none" })}" class="tab-panel" data-v-e65f7d52${_scopeId}>`);
            _push2(ssrRenderComponent(HomepageManager, null, null, _parent2, _scopeId));
            _push2(`</div><div style="${ssrRenderStyle(activeTab.value === "analytics" ? null : { display: "none" })}" class="tab-panel" data-v-e65f7d52${_scopeId}>`);
            _push2(ssrRenderComponent(AnalyticsManager, null, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "main-content" }, [
                createVNode("div", { class: "tab-headers" }, [
                  createVNode("div", { class: "tab-header-content" }, [
                    createVNode("h1", { class: "page-title" }, [
                      createVNode(VIcon, { start: "" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(currentTabIcon.value), 1)
                        ]),
                        _: 1
                      }),
                      createTextVNode(" " + toDisplayString(currentTabTitle.value), 1)
                    ]),
                    createVNode("p", { class: "page-subtitle" }, toDisplayString(currentTabSubtitle.value), 1)
                  ])
                ]),
                createVNode("div", { class: "tab-content" }, [
                  withDirectives(createVNode("div", { class: "tab-panel" }, [
                    createVNode(ArticleManager)
                  ], 512), [
                    [vShow, activeTab.value === "articles"]
                  ]),
                  withDirectives(createVNode("div", { class: "tab-panel" }, [
                    createVNode(ImageManager)
                  ], 512), [
                    [vShow, activeTab.value === "images"]
                  ]),
                  withDirectives(createVNode("div", { class: "tab-panel" }, [
                    createVNode(HomepageManager)
                  ], 512), [
                    [vShow, activeTab.value === "homepage"]
                  ]),
                  withDirectives(createVNode("div", { class: "tab-panel" }, [
                    createVNode(AnalyticsManager)
                  ], 512), [
                    [vShow, activeTab.value === "analytics"]
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: showSystemDialog.value,
        "onUpdate:modelValue": ($event) => showSystemDialog.value = $event,
        "max-width": "600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { start: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-information`);
                            } else {
                              return [
                                createTextVNode("mdi-information")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` \u7CFB\u7EDF\u4FE1\u606F `);
                      } else {
                        return [
                          createVNode(VIcon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-information")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" \u7CFB\u7EDF\u4FE1\u606F ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="system-info" data-v-e65f7d52${_scopeId3}><div class="info-item" data-v-e65f7d52${_scopeId3}><strong data-v-e65f7d52${_scopeId3}>\u7CFB\u7EDF\u7248\u672C:</strong> NO TRACE EXPLORER v2.5.1 </div><div class="info-item" data-v-e65f7d52${_scopeId3}><strong data-v-e65f7d52${_scopeId3}>\u6784\u5EFA\u65F6\u95F4:</strong> ${ssrInterpolate(buildTime.value)}</div><div class="info-item" data-v-e65f7d52${_scopeId3}><strong data-v-e65f7d52${_scopeId3}>\u6280\u672F\u6808:</strong> Nuxt 3.17.6 + Vuetify 3.4.0 + TypeScript </div><div class="info-item" data-v-e65f7d52${_scopeId3}><strong data-v-e65f7d52${_scopeId3}>\u5B58\u50A8\u4F7F\u7528:</strong> ${ssrInterpolate(storageUsage.value)}</div><div class="info-item" data-v-e65f7d52${_scopeId3}><strong data-v-e65f7d52${_scopeId3}>\u6D4F\u89C8\u5668:</strong> ${ssrInterpolate(userAgent.value)}</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "system-info" }, [
                            createVNode("div", { class: "info-item" }, [
                              createVNode("strong", null, "\u7CFB\u7EDF\u7248\u672C:"),
                              createTextVNode(" NO TRACE EXPLORER v2.5.1 ")
                            ]),
                            createVNode("div", { class: "info-item" }, [
                              createVNode("strong", null, "\u6784\u5EFA\u65F6\u95F4:"),
                              createTextVNode(" " + toDisplayString(buildTime.value), 1)
                            ]),
                            createVNode("div", { class: "info-item" }, [
                              createVNode("strong", null, "\u6280\u672F\u6808:"),
                              createTextVNode(" Nuxt 3.17.6 + Vuetify 3.4.0 + TypeScript ")
                            ]),
                            createVNode("div", { class: "info-item" }, [
                              createVNode("strong", null, "\u5B58\u50A8\u4F7F\u7528:"),
                              createTextVNode(" " + toDisplayString(storageUsage.value), 1)
                            ]),
                            createVNode("div", { class: "info-item" }, [
                              createVNode("strong", null, "\u6D4F\u89C8\u5668:"),
                              createTextVNode(" " + toDisplayString(userAgent.value), 1)
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          onClick: ($event) => showSystemDialog.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u5173\u95ED`);
                            } else {
                              return [
                                createTextVNode("\u5173\u95ED")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            onClick: ($event) => showSystemDialog.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u5173\u95ED")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "d-flex align-center" }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-information")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" \u7CFB\u7EDF\u4FE1\u606F ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "system-info" }, [
                          createVNode("div", { class: "info-item" }, [
                            createVNode("strong", null, "\u7CFB\u7EDF\u7248\u672C:"),
                            createTextVNode(" NO TRACE EXPLORER v2.5.1 ")
                          ]),
                          createVNode("div", { class: "info-item" }, [
                            createVNode("strong", null, "\u6784\u5EFA\u65F6\u95F4:"),
                            createTextVNode(" " + toDisplayString(buildTime.value), 1)
                          ]),
                          createVNode("div", { class: "info-item" }, [
                            createVNode("strong", null, "\u6280\u672F\u6808:"),
                            createTextVNode(" Nuxt 3.17.6 + Vuetify 3.4.0 + TypeScript ")
                          ]),
                          createVNode("div", { class: "info-item" }, [
                            createVNode("strong", null, "\u5B58\u50A8\u4F7F\u7528:"),
                            createTextVNode(" " + toDisplayString(storageUsage.value), 1)
                          ]),
                          createVNode("div", { class: "info-item" }, [
                            createVNode("strong", null, "\u6D4F\u89C8\u5668:"),
                            createTextVNode(" " + toDisplayString(userAgent.value), 1)
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          onClick: ($event) => showSystemDialog.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u5173\u95ED")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "d-flex align-center" }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { start: "" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-information")
                        ]),
                        _: 1
                      }),
                      createTextVNode(" \u7CFB\u7EDF\u4FE1\u606F ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "system-info" }, [
                        createVNode("div", { class: "info-item" }, [
                          createVNode("strong", null, "\u7CFB\u7EDF\u7248\u672C:"),
                          createTextVNode(" NO TRACE EXPLORER v2.5.1 ")
                        ]),
                        createVNode("div", { class: "info-item" }, [
                          createVNode("strong", null, "\u6784\u5EFA\u65F6\u95F4:"),
                          createTextVNode(" " + toDisplayString(buildTime.value), 1)
                        ]),
                        createVNode("div", { class: "info-item" }, [
                          createVNode("strong", null, "\u6280\u672F\u6808:"),
                          createTextVNode(" Nuxt 3.17.6 + Vuetify 3.4.0 + TypeScript ")
                        ]),
                        createVNode("div", { class: "info-item" }, [
                          createVNode("strong", null, "\u5B58\u50A8\u4F7F\u7528:"),
                          createTextVNode(" " + toDisplayString(storageUsage.value), 1)
                        ]),
                        createVNode("div", { class: "info-item" }, [
                          createVNode("strong", null, "\u6D4F\u89C8\u5668:"),
                          createTextVNode(" " + toDisplayString(userAgent.value), 1)
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        onClick: ($event) => showSystemDialog.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u5173\u95ED")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: showMessage.value,
        "onUpdate:modelValue": ($event) => showMessage.value = $event,
        color: messageType.value,
        timeout: 3e3,
        location: "top"
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              variant: "text",
              onClick: ($event) => showMessage.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u5173\u95ED`);
                } else {
                  return [
                    createTextVNode("\u5173\u95ED")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                variant: "text",
                onClick: ($event) => showMessage.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode("\u5173\u95ED")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(message.value)} `);
          } else {
            return [
              createTextVNode(toDisplayString(message.value) + " ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e65f7d52"]]);

export { index as default };
//# sourceMappingURL=index-CQ7X56wR.mjs.map
