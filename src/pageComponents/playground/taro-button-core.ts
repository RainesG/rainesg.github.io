import {
  proxyCustomElement,
  HTMLElement,
  createEvent,
  h,
  Host,
} from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';

const indexCss =
  'taro-button-core{display:block;overflow:hidden;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;margin-left:auto;margin-right:auto;padding-left:14px;padding-right:14px;border-width:0;border-radius:5px;width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;background-color:#f8f8f8;line-height:2.55555556;text-decoration:none;text-align:center;font-size:18px;color:#000;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}taro-button-core:focus{outline:0}taro-button-core:not([disabled]):active{background-color:#dedede;color:rgba(0, 0, 0, 0.6)}taro-button-core::after{position:absolute;left:0;top:0;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid rgba(0, 0, 0, 0.2);border-radius:10px;width:200%;height:200%;content:" ";-webkit-transform:scale(0.5);transform:scale(0.5);-webkit-transform-origin:0 0;transform-origin:0 0}taro-button-core+taro-button-core{margin-top:15px}taro-button-core[type=default]{background-color:#f8f8f8;color:#000}taro-button-core[type=default]:not([disabled]):visited{color:#000}taro-button-core[type=default]:not([disabled]):active{background-color:#dedede;color:rgba(0, 0, 0, 0.6)}taro-button-core[size=mini]{display:inline-block;padding:0 1.32em;width:auto;line-height:2.3;font-size:13px}taro-button-core[plain],taro-button-core[plain][type=default],taro-button-core[plain][type=primary]{border-width:1px;background-color:transparent}taro-button-core[disabled]{color:rgba(255, 255, 255, 0.6)}taro-button-core[disabled][type=default]{background-color:#f7f7f7;color:rgba(0, 0, 0, 0.3)}taro-button-core[disabled][type=primary]{background-color:#9ed99d}taro-button-core[disabled][type=warn]{background-color:#ec8b89}taro-button-core[loading] .weui-loading{margin:-0.2em 0.34em 0 0}taro-button-core[loading][type=primary],taro-button-core[loading][type=warn]{color:rgba(255, 255, 255, 0.6)}taro-button-core[loading][type=primary]{background-color:#179b16}taro-button-core[loading][type=warn]{background-color:#ce3c39}taro-button-core[plain][type=primary]{border:1px solid #1aad19;color:#1aad19}taro-button-core[plain][type=primary]:not([disabled]):active{border-color:rgba(26, 173, 25, 0.6);background-color:transparent;color:rgba(26, 173, 25, 0.6)}taro-button-core[plain][type=primary]::after{border-width:0}taro-button-core[plain][type=warn]{border:1px solid #e64340;color:#e64340}taro-button-core[plain][type=warn]:not([disabled]):active{border-color:rgba(230, 67, 64, 0.6);background-color:transparent;color:rgba(230, 67, 64, 0.6)}taro-button-core[plain][type=warn]::after{border-width:0}taro-button-core[plain],taro-button-core[plain][type=default]{border:1px solid #353535;color:#353535}taro-button-core[plain]:not([disabled]):active,taro-button-core[plain][type=default]:not([disabled]):active{border-color:rgba(53, 53, 53, 0.6);background-color:transparent;color:rgba(53, 53, 53, 0.6)}taro-button-core[plain]::after,taro-button-core[plain][type=default]::after{border-width:0}taro-button-core[type=primary]{background-color:#1aad19;color:#fff}taro-button-core[type=primary]:not([disabled]):visited{color:#fff}taro-button-core[type=primary]:not([disabled]):active{background-color:#179b16;color:rgba(255, 255, 255, 0.6)}taro-button-core[type=warn]{background-color:#e64340;color:#fff}taro-button-core[type=warn]:not([disabled]):visited{color:#fff}taro-button-core[type=warn]:not([disabled]):active{background-color:#ce3c39;color:rgba(255, 255, 255, 0.6)}taro-button-core[plain][disabled]{border:1px solid rgba(0, 0, 0, 0.2);background-color:#f7f7f7;color:rgba(0, 0, 0, 0.3)}taro-button-core[plain][disabled][type=primary]{border:1px solid rgba(0, 0, 0, 0.2);background-color:#f7f7f7;color:rgba(0, 0, 0, 0.3)}';

const Button = /*@__PURE__*/ proxyCustomElement(
  class extends HTMLElement {
    constructor() {
      super();
      this.__registerHost();
      this.onSubmit = createEvent(this, 'tarobuttonsubmit', 7);
      this.onReset = createEvent(this, 'tarobuttonreset', 7);
      this.disabled = undefined;
      this.hoverClass = 'button-hover';
      this.type = '';
      this.hoverStartTime = 20;
      this.hoverStayTime = 70;
      this.size = undefined;
      this.plain = undefined;
      this.loading = false;
      this.formType = null;
      this.hover = false;
      this.touch = false;
    }
    onClick(e) {
      if (this.disabled) {
        debugger;
        e.preventDefault();

        e.stopPropagation();
      }
    }
    onTouchStart() {
      if (this.disabled) {
        debugger;
        return;
      }
      this.touch = true;
      if (this.hoverClass && !this.disabled) {
        debugger;
        setTimeout(() => {
          if (this.touch) {
            this.hover = true;
          }
        }, this.hoverStartTime);
      }
    }
    onTouchEnd() {
      if (this.disabled) {
        debugger;
        return;
      }
      this.touch = false;
      if (this.hoverClass && !this.disabled) {
        debugger;
        setTimeout(() => {
          if (!this.touch) {
            this.hover = false;
          }
        }, this.hoverStayTime);
      }
      if (this.formType === 'submit') {
        this.onSubmit.emit();
      } else if (this.formType === 'reset') {
        this.onReset.emit();
      }
    }
    render() {
      const { disabled, hoverClass, type, size, plain, loading, hover } = this;
      debugger;
      const cls = classnames({
        [`${hoverClass}`]: hover && !disabled,
      });
      debugger;
      return h(
        Host,
        {
          class: cls,
          type: type,
          plain: plain,
          loading: loading,
          size: size,
          disabled: disabled,
        },
        loading && h('i', { class: 'weui-loading' }),
        h('slot', null)
      );
    }
    get el() {
      return this;
    }
    static get style() {
      return indexCss;
    }
  },
  [
    4,
    'taro-button-core',
    {
      disabled: [4],
      hoverClass: [1, 'hover-class'],
      type: [1],
      hoverStartTime: [2, 'hover-start-time'],
      hoverStayTime: [2, 'hover-stay-time'],
      size: [1],
      plain: [4],
      loading: [4],
      formType: [513, 'form-type'],
      hover: [32],
      touch: [32],
    },
    [
      [0, 'click', 'onClick'],
      [1, 'touchstart', 'onTouchStart'],
      [1, 'touchend', 'onTouchEnd'],
    ],
  ]
);
function defineCustomElement$1() {
  if (typeof customElements === 'undefined') {
    return;
  }
  const components = ['taro-button-core'];
  components.forEach((tagName) => {
    switch (tagName) {
      case 'taro-button-core':
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Button);
        }
        break;
    }
  });
}

const TaroButtonCore = Button;
const defineCustomElement = defineCustomElement$1;

export { TaroButtonCore, defineCustomElement };
