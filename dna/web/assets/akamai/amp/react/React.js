this.akamai = this.akamai || {};
this.akamai.amp = this.akamai.amp || {};
this.akamai.amp.react = (function (exports) {
  'use strict';

  var ClassList = /*#__PURE__*/function () {
    function ClassList(component) {
      var tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      babelHelpers.classCallCheck(this, ClassList);
      this.component = component;
      this.tokens = tokens;
    }

    babelHelpers.createClass(ClassList, [{
      key: "add",
      value: function add(token) {
        var prepend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (this.contains(token)) return;

        if (prepend === true) {
          this.tokens.unshift(token);
        } else {
          this.tokens.push(token);
        }
      }
    }, {
      key: "contains",
      value: function contains(token) {
        return this.tokens.indexOf(token) !== -1;
      }
    }, {
      key: "item",
      value: function item(index) {
        return this.tokens[index] || null;
      }
    }, {
      key: "remove",
      value: function remove(token) {
        var i = this.tokens.indexOf(token);
        if (i === -1) return;
        this.tokens.splice(i, 1);
      }
    }, {
      key: "toggle",
      value: function toggle(token) {
        if (this.contains(token)) {
          this.remove(token);
        } else {
          this.add(token);
        }
      }
    }, {
      key: "update",
      value: function update(tokenMap) {
        for (var token in tokenMap) {
          if (tokenMap[token]) {
            this.add(token);
          } else {
            this.remove(token);
          }
        }

        var className = this.toString();

        if (className != this.component.state.className) {
          this.component.setState({
            className: className
          });
        }
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.tokens.join(' ');
      }
    }]);
    return ClassList;
  }();

  var Component = /*#__PURE__*/function (_React$Component) {
    babelHelpers.inherits(Component, _React$Component);

    function Component(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, Component);
      _this = _React$Component.call(this, props, context) || this;
      _this.state = {
        l10n: _this.player.l10n
      };
      _this.classList = new ClassList(babelHelpers.assertThisInitialized(_this), _this.props.classList);
      _this.elementNode = React.createRef();
      return _this;
    }

    babelHelpers.createClass(Component, [{
      key: "player",
      get: function get() {
        return this.props.player || this.context.player;
      }
    }, {
      key: "config",
      get: function get() {
        return this.props.config || this.context.config;
      }
    }, {
      key: "l10n",
      get: function get() {
        return this.state.l10n;
      }
    }, {
      key: "plugin",
      get: function get() {
        return this.context.plugin;
      }
    }, {
      key: "className",
      get: function get() {
        var className = this.props.className || "";
        className += " ".concat(this.classList);
        return className.trim();
      }
    }, {
      key: "textContent",
      get: function get() {
        return this.props.textContent || this.state.textContent;
      }
    }, {
      key: "children",
      get: function get() {
        return this.props.children || [];
      }
    }, {
      key: "element",
      get: function get() {
        return this.elementNode.current;
      }
    }, {
      key: "dom",
      get: function get() {
        return this.element || ReactDOM.findNode(this);
      }
    }, {
      key: "data",
      get: function get() {
        return this.props.data || {};
      }
    }, {
      key: "playerEventMap",
      get: function get() {
        var _this2 = this;

        var events = [];
        if (this.player == null) return events;
        Object.values(akamai.amp.Events).forEach(function (type) {
          var key = "on".concat(type);
          if (typeof _this2[key] != "function") return;
          events.push({
            key: key,
            type: type
          });
        });
        return events;
      }
    }, {
      key: "propsList",
      get: function get() {
        var _this$props = this.props;
            _this$props.className;
            _this$props.classList;
            _this$props.data;
            _this$props.textContent;
            var props = babelHelpers.objectWithoutProperties(_this$props, ["className", "classList", "data", "textContent"]);
        return props;
      }
    }, {
      key: "getLocalizedString",
      value: function getLocalizedString(key) {
        return this.player.getLocalizedString(key);
      }
    }, {
      key: "onlanguagechange",
      value: function onlanguagechange() {
        this.setState({
          l10n: this.player.l10n
        });
      }
    }, {
      key: "bindHandlers",
      value: function bindHandlers(handlers) {
        var _this3 = this;

        if (handlers == null || handlers.length <= 0) return;
        handlers.forEach(function (handler) {
          if (typeof _this3[handler] != "function") return;
          _this3[handler] = _this3[handler].bind(_this3);
        });
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps, nextState) {
        var state = this.state;
        var props = this.props;

        if (nextState != null) {
          for (var key in nextState) {
            if (nextState[key] != state[key]) {
              return true;
            }
          }
        } // TODO: Is this needed?


        if (nextProps != null) {
          for (var _key in nextProps) {
            if (nextProps[_key] != props[_key]) {
              return true;
            }
          }
        }

        return false;
      }
    }, {
      key: "componentWillMount",
      value: function componentWillMount() {
        var _this4 = this;

        this.playerEventMap.forEach(function (event) {
          _this4[event.key] = _this4[event.key].bind(_this4);

          _this4.player.addEventListener(event.type, _this4[event.key]);
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _this5 = this;

        this.playerEventMap.forEach(function (event) {
          _this5.player.removeEventListener(event.type, _this5[event.key]);
        });
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", babelHelpers["extends"]({
          ref: this.elementNode
        }, this.propsList, {
          className: this.className
        }), this.textContent, this.children);
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return {
          player: PropTypes.object,
          config: PropTypes.object,
          plugin: PropTypes.object
        };
      }
    }]);
    return Component;
  }(React.Component);

  var Container = /*#__PURE__*/function (_Component) {
    babelHelpers.inherits(Container, _Component);

    function Container(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, Container);
      _this = _Component.call(this, props, context) || this;
      _this.state.components = [];
      return _this;
    } // TODO: HACK! This is a hack to get around IE 9-10 not inheriting static properties.
    //       Remove this when these browsers are dropped, along with similar code
    //       in other classes that extend Component and Container.


    babelHelpers.createClass(Container, [{
      key: "components",
      get: function get() {
        return this.state.components;
      }
    }, {
      key: "addComponent",
      value: function addComponent(component) {
        var components = this.state.components.slice();
        if (component.key == null) component.key = akamai.amp.Utils.createUID();
        components.push(component);
        this.setState({
          components: components
        });
      }
    }, {
      key: "removeComponent",
      value: function removeComponent(component) {
        var components = this.state.components.filter(function (item) {
          return item != component;
        });
        this.setState({
          components: components
        });
      }
    }, {
      key: "clear",
      value: function clear() {
        this.setState({
          components: []
        });
      }
    }, {
      key: "appendChild",
      value: function appendChild(element) {
        var parent = this.dom;
        if (parent == null) return;
        parent.appendChild(element);
      }
    }, {
      key: "removeChild",
      value: function removeChild(element) {
        var parent = this.dom;
        if (parent == null) return;
        parent.removeChild(element);
      }
    }, {
      key: "children",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(Container.prototype), "children", this).concat(this.state.components);
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(Container), "contextTypes", this);
      }
    }]);
    return Container;
  }(Component);

  var Interactive = /*#__PURE__*/function (_Component) {
    babelHelpers.inherits(Interactive, _Component);

    function Interactive(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, Interactive);
      _this = _Component.call(this, props, context) || this;

      _this.classList.add("amp-component");

      _this.classList.add("amp-icon");

      _this.mouseFocus = false;
      _this.focused = false;
      _this.state.altText = _this.altText;

      _this.bindHandlers(["onMouseDown", "onMouseUp", "onMouseOver", "onMouseOut", "onFocus", "onBlur", "onKeyDown", "onClick", "onChange"]);

      return _this;
    }

    babelHelpers.createClass(Interactive, [{
      key: "aria",
      get: function get() {
        return {
          "aria-label": this.title,
          role: "button"
        };
      }
    }, {
      key: "propsList",
      get: function get() {
        var _this2 = this;

        var _babelHelpers$get = babelHelpers.get(babelHelpers.getPrototypeOf(Interactive.prototype), "propsList", this);
            _babelHelpers$get.altText;
            var props = babelHelpers.objectWithoutProperties(_babelHelpers$get, ["altText"]);

        props.className = this.className;
        props.tabIndex = "0";

        props.onMouseDown = function (event) {
          return (_this2.props.onMouseDown || _this2.onMouseDown)(event);
        };

        props.onMouseUp = function (event) {
          return (_this2.props.onMouseUp || _this2.onMouseUp)(event);
        };

        props.onMouseOver = function (event) {
          return (_this2.props.onMouseOver || _this2.onMouseOver)(event);
        };

        props.onMouseOut = function (event) {
          return (_this2.props.onMouseOut || _this2.onMouseOut)(event);
        };

        props.onFocus = function (event) {
          return (_this2.props.onFocus || _this2.onFocus)(event);
        };

        props.onBlur = function (event) {
          return (_this2.props.onBlur || _this2.onBlur)(event);
        };

        props.onKeyDown = function (event) {
          return (_this2.props.onKeyDown || _this2.onKeyDown)(event);
        };

        props.onClick = function (event) {
          return (_this2.props.onClick || _this2.onClick)(event);
        };

        var aria = this.aria;

        for (var key in aria) {
          props[key] = aria[key];
        }

        return props;
      }
    }, {
      key: "altText",
      get: function get() {
        return this.props.altText || this.state.altText;
      }
    }, {
      key: "title",
      get: function get() {
        return this.player.getLocalizedString(this.altText);
      }
    }, {
      key: "onMouseDown",
      value: function onMouseDown(event) {
        this.mouseFocus = true;
      }
    }, {
      key: "onMouseUp",
      value: function onMouseUp(event) {
        this.mouseFocus = false;
      }
    }, {
      key: "onMouseOver",
      value: function onMouseOver(event) {}
    }, {
      key: "onMouseOut",
      value: function onMouseOut(event) {}
    }, {
      key: "onFocus",
      value: function onFocus(event) {
        if (this.mouseFocus == true) return;
        this.focused = true;
        this.classList.update({
          "amp-focus": true
        }); //Hack to Prevent overflow hidden elemnts to scroll up on tabbing

        this.player.viewComponent.scrollTop = 0;
      }
    }, {
      key: "onBlur",
      value: function onBlur(event) {
        if (this.mouseFocus == true) return;
        this.focused = false;
        this.classList.update({
          "amp-focus": false
        });
      }
    }, {
      key: "onKeyDown",
      value: function onKeyDown(event) {
        if (this.mouseFocus == true) return;
        this.onKeyPress(event);
        if (event.type == "keypress" && (event.keyCode == 13 || event.keyCode == 32)) this.onAction();
      }
    }, {
      key: "onAction",
      value: function onAction() {
        this.onClick();
      }
    }, {
      key: "onKeyPress",
      value: function onKeyPress(event) {}
    }, {
      key: "onClick",
      value: function onClick(event) {}
    }, {
      key: "change",
      value: function change(value) {
        var onChange = this.propsList.onChange || this.onChange;
        if (typeof onChange != "function") return;
        onChange(value);
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("button", babelHelpers["extends"]({
          type: "button",
          "data-rh": this.title,
          ref: this.elementNode
        }, this.propsList, {
          className: this.className
        }), this.textContent, this.children);
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(Interactive), "contextTypes", this);
      }
    }]);
    return Interactive;
  }(Component);

  var Control = /*#__PURE__*/function (_Interactive) {
    babelHelpers.inherits(Control, _Interactive);

    function Control(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, Control);
      _this = _Interactive.call(this, props, context) || this;

      _this.classList.add("amp-control");

      return _this;
    }

    return Control;
  }(Interactive);

  var PanelControl = /*#__PURE__*/function (_Control) {
    babelHelpers.inherits(PanelControl, _Control);

    function PanelControl(props, context) {
      babelHelpers.classCallCheck(this, PanelControl);
      return _Control.call(this, props, context) || this;
    }

    babelHelpers.createClass(PanelControl, [{
      key: "propsList",
      get: function get() {
        var _babelHelpers$get = babelHelpers.get(babelHelpers.getPrototypeOf(PanelControl.prototype), "propsList", this);
            _babelHelpers$get.panel;
            var props = babelHelpers.objectWithoutProperties(_babelHelpers$get, ["panel"]);

        return props;
      }
    }, {
      key: "panel",
      get: function get() {
        return this.props.panel.current;
      }
    }, {
      key: "onClick",
      value: function onClick() {
        this.panel.toggle();
      }
    }, {
      key: "onKeyDown",
      value: function onKeyDown(event) {
        this.panel.onKeyDown(event);
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(PanelControl), "contextTypes", this);
      }
    }]);
    return PanelControl;
  }(Control);

  var Button = /*#__PURE__*/function (_Interactive) {
    babelHelpers.inherits(Button, _Interactive);

    function Button(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, Button);
      _this = _Interactive.call(this, props, context) || this;

      _this.classList.add("amp-button");

      _this.classList.add("amp-bg");

      _this.classList.add("amp-hover");

      return _this;
    }

    return Button;
  }(Interactive);

  var PauseOverlay = /*#__PURE__*/function (_Button) {
    babelHelpers.inherits(PauseOverlay, _Button);

    function PauseOverlay(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, PauseOverlay);
      _this = _Button.call(this, props, context) || this;

      _this.classList.add("amp-pause-overlay", true);

      _this.state.altText = "PLAY";
      return _this;
    }

    babelHelpers.createClass(PauseOverlay, [{
      key: "onClick",
      value: function onClick() {
        var player = this.player;

        switch (player.playState) {
          case "ended":
            this.plugin.replay();
            break;

          case "playing":
            player.pause();
            break;

          default:
            player.play()["catch"](function (error) {
              return error;
            });
            break;
        }
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(PauseOverlay), "contextTypes", this);
      }
    }]);
    return PauseOverlay;
  }(Button);

  var BufferingOverlay = /*#__PURE__*/function (_Component) {
    babelHelpers.inherits(BufferingOverlay, _Component);

    function BufferingOverlay(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, BufferingOverlay);
      _this = _Component.call(this, props, context) || this;

      _this.classList.add("amp-buffering-overlay", true);

      _this.classList.add("amp-icon");

      return _this;
    }

    babelHelpers.createClass(BufferingOverlay, null, [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(BufferingOverlay), "contextTypes", this);
      }
    }]);
    return BufferingOverlay;
  }(Component);

  var Utils = /*#__PURE__*/function () {
    function Utils() {
      babelHelpers.classCallCheck(this, Utils);
    }

    babelHelpers.createClass(Utils, null, [{
      key: "formatTimecode",
      value:
      /**
       * Takes a time in seconds and converts it to timecode.
       *
       * @param   {Number}  time  The time in seconds to be formatted.
       * @return  {String}  A SMTP formatted string.
       */
      function formatTimecode(time, duration) {
        return akamai.amp.Utils.formatTimecode(time, duration);
      }
      /**
       * Converts a time in seconds to a string and adds a zero in front of any number lower than 10.
       *
       * @param {Number} time The number to be zero filled.
       */

    }, {
      key: "formatZeroFill",
      value: function formatZeroFill(time, length) {
        return akamai.amp.Utils.formatZeroFill(time, length);
      }
      /*
       * Converts a date into a time strimg based on a ISO 8601 formatted time string.
       *
       * @param   {number|Date}  time
       *    The date
       *
       * @param   {string}  [format="h:mm:ss A"]
       *    The ISO 8601 format string
       *
       * @param   {string}  [timezone=""]
       *    The timezone string
       *
       * @return  {string}
       *    The formattted time string
       */

    }, {
      key: "formatTime",
      value: function formatTime(time, format, timezone) {
        return akamai.amp.Utils.formatTime(time, format, timezone);
      }
      /**
       * @param {Number} number
       *    The number to be rounded.
       *
       * @param {Number} precision
       *    The level of precision. Positive 1 would round to 1 decimal place and -1 would round to the tens.
       *
       * @return {Number}
       *    The rounded number.
       */

    }, {
      key: "round",
      value: function round(number, precision) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
      }
    }, {
      key: "getEventPos",
      value: function getEventPos(event) {
        var touches = event.targetTouches;
        var pageX = event.pageX || (touches && touches.length > -1 ? touches.item(0).pageX : 0);
        var pageY = event.pageY || (touches && touches.length > -1 ? touches.item(0).pageY : 0);
        return {
          x: pageX - (window.scrollX || window.pageXOffset) || pageX - window.scrollX,
          y: pageY - (window.scrollY || window.pageYOffset) || pageY - window.scrollY
        };
      }
    }, {
      key: "componentEnabled",
      value: function componentEnabled(plugin, component) {
        var config = plugin.config[component];
        return plugin.player[component] != null && plugin.player[component].enabled !== false || config != null && config !== false && config.enabled !== false && config.disabled !== true;
      }
    }, {
      key: "isNumber",
      value: function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
    }, {
      key: "rgbToHsl",
      value: function rgbToHsl(_ref) {
        var r = _ref.r,
            g = _ref.g,
            b = _ref.b,
            _ref$a = _ref.a,
            a = _ref$a === void 0 ? 1 : _ref$a;
        r /= 255;
        g /= 255;
        b /= 255;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var h,
            s,
            l = (max + min) / 2;

        if (max === min) {
          h = s = 0;
        } else {
          var d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

          switch (max) {
            case r:
              h = (g - b) / d + (g < b ? 6 : 0);
              break;

            case g:
              h = (b - r) / d + 2;
              break;

            case b:
              h = (r - g) / d + 4;
              break;
          }

          h /= 6;
        }

        h = Math.round(h * 360);
        s = Math.round(s * 100);
        l = Math.round(l * 100);
        return {
          h: h,
          s: s,
          l: l,
          a: a
        };
      }
    }, {
      key: "hueToRgb",
      value: function hueToRgb(p, q, t) {
        if (t < 0) {
          t += 1;
        }

        if (t > 1) {
          t -= 1;
        }

        if (t < 1 / 6) {
          return p + (q - p) * 6 * t;
        }

        if (t < 1 / 2) {
          return q;
        }

        if (t < 2 / 3) {
          return p + (q - p) * (2 / 3 - t) * 6;
        }

        return p;
      }
    }, {
      key: "hslToRgb",
      value: function hslToRgb(_ref2) {
        var h = _ref2.h,
            s = _ref2.s,
            l = _ref2.l,
            _ref2$a = _ref2.a,
            a = _ref2$a === void 0 ? 1 : _ref2$a;
        var r, g, b;
        h /= 360;
        s /= 100;
        l /= 100;

        if (s === 0) {
          r = g = b = l;
        } else {
          var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var p = 2 * l - q;
          r = this.hueToRgb(p, q, h + 1 / 3);
          g = this.hueToRgb(p, q, h);
          b = this.hueToRgb(p, q, h - 1 / 3);
        }

        r = Math.round(r * 255);
        g = Math.round(g * 255);
        b = Math.round(b * 255);
        return {
          r: r,
          g: g,
          b: b,
          a: a
        };
      }
    }, {
      key: "shade",
      value: function shade(rgb, brightness) {
        var hsl = Utils.rgbToHsl(rgb);
        hsl.l += brightness * 100;
        return Utils.hslToRgb(hsl);
      }
    }, {
      key: "color",
      value: function color(css) {
        var rgb;

        if (/^#/.test(css)) {
          rgb = {
            r: parseInt(css.slice(1, 3), 16),
            g: parseInt(css.slice(3, 5), 16),
            b: parseInt(css.slice(5, 7), 16),
            a: parseInt(css.slice(7), 16)
          };
        } else if (/^rgb/.test(css)) {
          var parts = css.match(/[0-9\.]+/g);
          rgb = {
            r: parseInt(parts[0]),
            g: parseInt(parts[1]),
            b: parseInt(parts[2]),
            a: parseFloat(parts[3])
          };
        }

        if (isNaN(rgb.a)) {
          rgb.a = 1;
        }

        return rgb;
      }
    }, {
      key: "css",
      value: function css(_ref3) {
        var r = _ref3.r,
            g = _ref3.g,
            b = _ref3.b,
            _ref3$a = _ref3.a,
            a = _ref3$a === void 0 ? 1 : _ref3$a;
        return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a || 1, ")");
      }
    }, {
      key: "isPictureInPictureSupported",
      value: function isPictureInPictureSupported(core) {
        return akamai.amp.Utils.isPictureInPictureSupported(core);
      }
      /**
       * Detects whether the browser supports passive event listeners or not
       *
       */

    }, {
      key: "isPassiveEventSupported",
      value: function isPassiveEventSupported() {
        var supportsPassive = false;

        try {
          var opts = Object.defineProperty({}, 'passive', {
            get: function get() {
              supportsPassive = true;
            }
          });
          window.addEventListener("touchstart", null, opts);
          window.removeEventListener("touchstart", null, opts);
        } catch (e) {
          supportsPassive = false;
        }

        return supportsPassive;
      }
    }, {
      key: "getEventListenerOptions",
      value: function getEventListenerOptions() {
        return Utils.isPassiveEventSupported() ? {
          passive: true
        } : false;
      }
    }]);
    return Utils;
  }();

  var Slider = /*#__PURE__*/function (_Control) {
    babelHelpers.inherits(Slider, _Control);

    function Slider(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, Slider);
      _this = _Control.call(this, props, context) || this;
      _this.state.percent = 0;
      _this.state.value = 0;
      _this.state.min = 0;
      _this.state.range = 0;
      _this.state.max = 1;
      _this.state.dragging = false;
      _this.increment = 0.1;

      _this.classList.add("amp-slider");

      _this.classList.remove("amp-icon");

      _this.direction = "";

      _this.bindHandlers(["onHandleMouseDown", "onHandleMouseUp", "onHandleMouseMove"]);

      Slider.refs.forEach(function (name) {
        return _this[name] = React.createRef();
      });
      _this.options = Utils.getEventListenerOptions();
      return _this;
    }

    babelHelpers.createClass(Slider, [{
      key: "format",
      value: function format(value) {
        return value;
      }
    }, {
      key: "update",
      value: function update(values) {
        if (values.percent == null && values.value != null) values.percent = values.value / this.max;
        if (values.value == null && values.percent != null) values.value = Math.round(values.percent * this.max);
        if (values.valueText == null && values.value != null) values.valueText = "".concat(this.format(values.value), " ").concat(this.getLocalizedString("OF"), " ").concat(this.format(this.max)); // Handles NaN cases that cause unpredictable seek results

        if (!Utils.isNumber(values.value)) delete values.value;
        if (!Utils.isNumber(values.percent)) delete values.percent;
        this.setState(values);
        return values;
      }
    }, {
      key: "percent",
      get: function get() {
        return this.state.percent;
      },
      set: function set(value) {
        value = akamai.amp.Utils.clamp(value, 0, 1);
        if (this.percent == value) return;
        this.change(this.update({
          percent: value
        }));
      }
    }, {
      key: "value",
      get: function get() {
        return this.state.value;
      },
      set: function set(value) {
        value = akamai.amp.Utils.clamp(value, this.min, this.max);
        if (this.value == value) return;
        this.change(this.update({
          value: value
        }));
      }
    }, {
      key: "range",
      get: function get() {
        return this.state.range;
      },
      set: function set(value) {
        value = akamai.amp.Utils.clamp(value, this.min, this.max);
        if (this.range == value) return;
        this.setState({
          range: value
        });
      }
    }, {
      key: "min",
      get: function get() {
        return this.state.min;
      },
      set: function set(value) {
        if (this.min == value) return;
        this.setState({
          min: value
        });
      }
    }, {
      key: "max",
      get: function get() {
        return this.state.max;
      },
      set: function set(value) {
        if (this.max == value) return;
        this.setState({
          max: value
        });
      }
    }, {
      key: "dragging",
      get: function get() {
        return this.state.dragging;
      },
      set: function set(value) {
        if (this.dragging == value) return;
        this.setState({
          dragging: value
        });
        this.classList.update({
          "amp-dragging": value
        });
        this.plugin.dragging = value;
      }
    }, {
      key: "markers",
      get: function get() {
        return this.refs.markers;
      }
    }, {
      key: "aria",
      get: function get() {
        return Object.assign(babelHelpers.get(babelHelpers.getPrototypeOf(Slider.prototype), "aria", this), {
          role: "slider",
          "aria-valuemin": this.state.min,
          "aria-valuemax": Math.round(this.state.max),
          "aria-valuenow": Math.round(this.state.value),
          "aria-valuetext": this.state.valueText
        });
      }
    }, {
      key: "options",
      get: function get() {
        return this._options;
      },
      set: function set(value) {
        this._options = value;
      }
    }, {
      key: "move",
      value: function move(event) {
        var offset = this.element.getBoundingClientRect();
        var pos = Utils.getEventPos(event);

        if (this.direction === "vertical") {
          this.percent = 1 - (pos.y - offset.top) / offset.height;
        } else {
          this.percent = (pos.x - offset.left) / offset.width;
        }
      }
    }, {
      key: "onClick",
      value: function onClick(event) {
        if (this.player.playState != "ready") this.move(event);
      }
    }, {
      key: "onAction",
      value: function onAction() {}
    }, {
      key: "onKeyPress",
      value: function onKeyPress(event) {
        var code = event.keyCode; // left arrow 37
        // up arrow 38
        // right arrow 39
        // down arrow 40

        if (code == 39 || code == 38) {
          this.percent += this.increment;
        } else if (code == 37 || code == 40) {
          this.percent -= this.increment;
        }
      }
    }, {
      key: "onHandleMouseDown",
      value: function onHandleMouseDown(event) {
        if (this.player.playState == "ready") return;
        event.stopPropagation();
        event.preventDefault();
        this.dragging = true;
        window.addEventListener("mouseup", this.onHandleMouseUp);
        window.addEventListener("mousemove", this.onHandleMouseMove);
        window.addEventListener("touchend", this.onHandleMouseUp);
        window.addEventListener("touchmove", this.onHandleMouseMove, this.options);
      }
    }, {
      key: "onHandleMouseMove",
      value: function onHandleMouseMove(event) {
        this.move(event);
      }
    }, {
      key: "onHandleMouseUp",
      value: function onHandleMouseUp(event) {
        event.stopPropagation();
        event.preventDefault();
        this.dragging = false;
        window.removeEventListener("mouseup", this.onHandleMouseUp);
        window.removeEventListener("mousemove", this.onHandleMouseMove);
        window.removeEventListener("touchend", this.onHandleMouseUp);
        window.removeEventListener("touchmove", this.onHandleMouseMove, this.options);
        this.change(this.update({
          value: this.value,
          percent: this.percent
        }));
      }
    }, {
      key: "render",
      value: function render() {
        var percent = "".concat(Utils.round(this.percent * 100, 2), "%");
        var range = "".concat(Utils.round(this.range * 100, 2), "%");
        return /*#__PURE__*/React.createElement("div", babelHelpers["extends"]({
          ref: this.elementNode
        }, this.propsList, {
          onMouseMove: this.onMouseMove
        }), /*#__PURE__*/React.createElement("div", {
          ref: this.trackNode,
          className: "amp-track"
        }), /*#__PURE__*/React.createElement("div", {
          ref: this.rangeNode,
          className: "amp-range",
          style: {
            width: range
          }
        }), /*#__PURE__*/React.createElement("div", {
          ref: this.valueNode,
          className: "amp-value",
          style: {
            width: percent
          }
        }), this.children, /*#__PURE__*/React.createElement("div", {
          ref: this.handleNode,
          className: "amp-handle",
          style: {
            left: percent
          },
          onMouseDown: this.onHandleMouseDown,
          onTouchStart: this.onHandleMouseDown
        }));
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(Slider), "contextTypes", this);
      }
    }, {
      key: "refs",
      get: function get() {
        return ['elementNode', 'trackNode', 'rangeNode', 'valueNode', 'handleNode'];
      }
    }]);
    return Slider;
  }(Control);

  var Progress = /*#__PURE__*/function (_Slider) {
    babelHelpers.inherits(Progress, _Slider);

    function Progress(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, Progress);
      _this = _Slider.call(this, props, context) || this;
      _this.isTouch = akamai.amp.Utils.isTouch;

      _this.classList.add("amp-progress", true);

      _this.classList.add("amp-slide-in-out", _this.config.transition !== false);

      _this.state.altText = "SEEK";
      _this.state.textVisible = _this.isTouch ? "hidden" : "visible";

      _this.bindHandlers(["onMouseMove", "onaddurationchange", "onadtimeupdate", "onaddurationchange", "onadmanagerloaded", "onaddtrack", "onremovetrack"]);

      Progress.refs.forEach(function (name) {
        return _this[name] = React.createRef();
      });
      return _this;
    }

    babelHelpers.createClass(Progress, [{
      key: "propsList",
      get: function get() {
        var props = babelHelpers.get(babelHelpers.getPrototypeOf(Progress.prototype), "propsList", this);
        props.onMouseMove = this.onMouseMove;
        return props;
      }
    }, {
      key: "markers",
      get: function get() {
        return this.markersNode.current;
      }
    }, {
      key: "format",
      value: function format(value) {
        var timestamp = this.config.timestamp;

        if (timestamp != null && Utils.isNumber(value)) {
          return Utils.formatTime(this.player.toUTC(value), timestamp.format, timestamp);
        } else {
          return Utils.formatTimecode(value, this.max);
        }
      }
    }, {
      key: "updateMarkers",
      value: function updateMarkers() {
        var cues = this.player.cues;
        var markers = this.markers;
        markers.clear();
        if (cues == null || cues.length <= 0) return;
        var duration = this.player.duration;
        cues.forEach(function (cue, index) {
          if (cue.startTime <= 0) return;
          markers.addComponent( /*#__PURE__*/React.createElement("div", {
            className: "amp-marker",
            style: {
              left: "".concat(cue.startTime / duration * 100, "%")
            },
            key: index
          }));
        });
      }
    }, {
      key: "onready",
      value: function onready() {
        this.player.addEventListener("adbreakend", this.ondurationchange);
        this.player.addEventListener("adtimeupdate", this.onadtimeupdate);
        this.player.addEventListener("addurationchange", this.onaddurationchange);

        if (this.player.previewTracks != null) {
          this.player.previewTracks.addEventListener("addtrack", this.onaddtrack);
          this.player.previewTracks.addEventListener("removetrack", this.onremovetrack);
        }
      }
    }, {
      key: "onmediachange",
      value: function onmediachange() {
        this.update({
          value: 0
        });
        this.range = 0;
      }
    }, {
      key: "ontimeupdate",
      value: function ontimeupdate() {
        if (this.dragging || this.player.seeking || this.player.paused) return;
        this.update({
          value: this.player.currentTime
        });
      }
    }, {
      key: "onprogress",
      value: function onprogress(event) {
        this.range = event.detail;
      }
    }, {
      key: "onaddtrack",
      value: function onaddtrack(event) {
        this.track = event.detail;
      }
    }, {
      key: "onremovetrack",
      value: function onremovetrack(event) {
        this.track = null;
      }
    }, {
      key: "oncueschange",
      value: function oncueschange(event) {
        this.updateMarkers();
      }
    }, {
      key: "ondurationchange",
      value: function ondurationchange(event) {
        this.increment = 10 / this.player.duration;
        this.max = this.player.duration;
        this.update({
          value: event.type == "breakend" && event.data.type == "preroll" ? 0 : this.player.currentTime
        });
        this.updateMarkers();
      }
    }, {
      key: "onadtimeupdate",
      value: function onadtimeupdate(event) {
        if (this.player.playState == "ready") return;
        this.update({
          value: event.detail
        });
      }
    }, {
      key: "onaddurationchange",
      value: function onaddurationchange(event) {
        this.max = event.detail.duration;
      }
    }, {
      key: "onMouseMove",
      value: function onMouseMove(event) {
        var offset = this.element.getBoundingClientRect();
        var pos = Utils.getEventPos(event);
        var percent = (pos.x - offset.left) / offset.width;
        this.setState({
          textPercent: akamai.amp.Utils.clamp(Utils.round(percent, 4), 0, 1)
        });
      }
    }, {
      key: "onKeyPress",
      value: function onKeyPress(event) {
        if (this.player.ads && this.player.ads.inProgress || this.player.playState == "ready") {
          return;
        }

        babelHelpers.get(babelHelpers.getPrototypeOf(Progress.prototype), "onKeyPress", this).call(this, event);
      }
    }, {
      key: "onHandleMouseDown",
      value: function onHandleMouseDown(event) {
        babelHelpers.get(babelHelpers.getPrototypeOf(Progress.prototype), "onHandleMouseDown", this).call(this, event);
        if (this.isTouch) this.setState({
          textVisible: "visible"
        });
      }
    }, {
      key: "onHandleMouseMove",
      value: function onHandleMouseMove(event) {
        babelHelpers.get(babelHelpers.getPrototypeOf(Progress.prototype), "onHandleMouseMove", this).call(this, event);
        this.onMouseMove(event);
      }
    }, {
      key: "onHandleMouseUp",
      value: function onHandleMouseUp(event) {
        babelHelpers.get(babelHelpers.getPrototypeOf(Progress.prototype), "onHandleMouseUp", this).call(this, event);
        if (this.isTouch) this.setState({
          textVisible: "hidden"
        });
      }
    }, {
      key: "onChange",
      value: function onChange(states) {
        if (this.dragging) return;
        this.player.currentTime = states.value;
      }
    }, {
      key: "children",
      get: function get() {
        var preview = this.preview.current;
        var percent = this.state.textPercent;
        var width = this.element ? this.element.clientWidth : 0;
        var previewWidth = preview ? preview.clientWidth : 0;
        var previewHeight = preview ? preview.clientHeight : 0;
        var pos = percent * width;
        var offset = previewWidth / 2;
        var time = percent * this.player.duration;
        var styles = {
          preview: {
            left: "".concat(akamai.amp.Utils.clamp(pos - offset, 0, width - previewWidth), "px"),
            top: "-".concat(previewHeight, "px"),
            visibility: this.state.textVisible
          },
          thumb: {
            display: "none"
          }
        };

        if (this.track) {
          var cue = this.track.getCueAt(time) || {};
          styles.thumb = cue.style || {};
        }

        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Container, {
          ref: this.markersNode,
          className: "amp-markers"
        }), /*#__PURE__*/React.createElement("div", {
          ref: this.preview,
          className: "amp-preview amp-bg",
          style: styles.preview
        }, /*#__PURE__*/React.createElement("div", {
          className: "amp-thumb",
          style: styles.thumb
        }), /*#__PURE__*/React.createElement("div", {
          className: "amp-time"
        }, this.format(time))));
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(Progress), "contextTypes", this);
      }
    }, {
      key: "refs",
      get: function get() {
        return ['markersNode', 'preview'];
      }
    }]);
    return Progress;
  }(Slider);

  var ListItem = /*#__PURE__*/function (_Interactive) {
    babelHelpers.inherits(ListItem, _Interactive);

    function ListItem(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, ListItem);
      _this = _Interactive.call(this, props, context) || this;

      _this.classList.add("amp-list-item");

      _this.classList.add("amp-menu-item");

      _this.classList.add("amp-hover");

      _this.classList.remove("amp-icon");

      _this.state.direction = _this.props.direction || "none";
      return _this;
    }

    babelHelpers.createClass(ListItem, [{
      key: "sharePanel",
      get: function get() {
        return this.plugin.ref.sharePanel.current;
      }
    }, {
      key: "settingsPanel",
      get: function get() {
        return this.plugin.settingsPanel;
      }
    }, {
      key: "focus",
      value: function focus() {
        this.element.focus();
      }
    }, {
      key: "onKeyDown",
      value: function onKeyDown(event) {
        if (this.mouseFocus == true) return;
        this.onKeyPress(event);

        if (event.type == "keydown") {
          //13, 32 space Enter
          //37, 39 left and right arrow
          //38, 40 up down
          switch (event.keyCode) {
            case 13:
            case 32:
              this.props.onClick(event) || this.onClick(event);
              break;

            case 37:
              if (this.state.direction === "left") this.props.onClick(event) || this.onClick(event);
              break;

            case 39:
              if (this.state.direction === "right") this.props.onClick(event) || this.onClick(event);
              break;

            case 38:
              this.element.previousElementSibling !== null && this.element.previousElementSibling.focus();
              break;

            case 40:
              this.element.nextElementSibling !== null && this.element.nextElementSibling.focus();
              break;
          }

          if ((event.keyCode == 9 || event.keyCode == 40) && event.shiftKey == false && this.element.nextElementSibling === null || (event.keyCode == 9 || event.keyCode == 38) && event.shiftKey == true && this.element.previousElementSibling === null || event.keyCode == 27) {
            var tabIndex;

            if (this.element.parentNode.className.indexOf("share") >= 0) {
              tabIndex = 4;
              this.sharePanel.close();
            } else {
              tabIndex = 2;
              this.settingsPanel.close();
            }

            var tabable = document.getElementsByClassName("amp-control");
            this.player.timers.setTimeout(function () {
              tabable[tabable.length - tabIndex].focus();
            }, 1);
          }
        }

        event.stopPropagation();
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", babelHelpers["extends"]({
          ref: this.elementNode
        }, this.propsList, {
          role: "menuitem"
        }), this.children);
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(ListItem), "contextTypes", this);
      }
    }]);
    return ListItem;
  }(Interactive);

  var ListTitle = /*#__PURE__*/function (_ListItem) {
    babelHelpers.inherits(ListTitle, _ListItem);

    function ListTitle(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, ListTitle);
      _this = _ListItem.call(this, props, context) || this;

      _this.classList.add("amp-list-title");

      _this.classList.add("amp-menu-title");

      _this.classList.remove("amp-list-item");

      _this.classList.remove("amp-menu-item");

      _this.classList.remove("amp-hover");

      _this.state.direction = "left";
      return _this;
    }

    babelHelpers.createClass(ListTitle, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", babelHelpers["extends"]({
          ref: this.elementNode
        }, this.propsList, {
          role: "menuitem"
        }), /*#__PURE__*/React.createElement("button", {
          type: "button",
          className: "amp-icon amp-icon-left",
          tabIndex: "-1"
        }), /*#__PURE__*/React.createElement("span", null, this.props.title), this.children);
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(ListTitle), "contextTypes", this);
      }
    }]);
    return ListTitle;
  }(ListItem);

  var Panel = /*#__PURE__*/function (_Component) {
    babelHelpers.inherits(Panel, _Component);

    function Panel(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, Panel);
      _this = _Component.call(this, props, context) || this;

      _this.classList.add("amp-bg");

      _this.closeHandler = _this.closeHandler.bind(babelHelpers.assertThisInitialized(_this));
      _this._open = false;
      return _this;
    }

    babelHelpers.createClass(Panel, [{
      key: "open",
      get: function get() {
        return this._open;
      },
      set: function set(value) {
        var _this2 = this;

        if (value == this._open) return;
        this._open = value;
        this.classList.update({
          "amp-open": this._open
        });
        this.plugin.open = value;

        if (this._open) {
          // because preact loads too fast we have to delay click binding 
          window.setTimeout(function () {
            return document.addEventListener("click", _this2.closeHandler);
          }, 10);
          this.context.plugin.activeState = "active";
          this.context.plugin.stopIdleTimeout();
          if (this.props.onopen) this.props.onopen(this);
        } else {
          this.context.plugin.startIdleTimeout();
          window.setTimeout(function () {
            return document.removeEventListener("click", _this2.closeHandler);
          }, 10);
          if (this.props.onclose) this.props.onclose(this);
        }
      }
    }, {
      key: "propsList",
      get: function get() {
        var _babelHelpers$get = babelHelpers.get(babelHelpers.getPrototypeOf(Panel.prototype), "propsList", this);
            _babelHelpers$get.onclose;
            _babelHelpers$get.onopen;
            var props = babelHelpers.objectWithoutProperties(_babelHelpers$get, ["onclose", "onopen"]);

        return props;
      }
    }, {
      key: "title",
      get: function get() {
        return "TITLE";
      }
    }, {
      key: "closeHandler",
      value: function closeHandler(event) {
        if (this.element == null || this.element.contains(event.target)) return;
        this.open = false;
        document.removeEventListener("click", this.closeHandler);
      }
    }, {
      key: "toggle",
      value: function toggle() {
        this.open = !this.open;
      }
    }, {
      key: "close",
      value: function close() {
        this.open = false;
      }
    }, {
      key: "isOptionSelected",
      value: function isOptionSelected(item, index) {
        return index === this.state.activeIndex;
      }
    }, {
      key: "clickHandler",
      value: function clickHandler(object, index) {
        this.setState({
          activeIndex: index
        });
      }
    }, {
      key: "backHandler",
      value: function backHandler(event) {
        this.props.gotoSettings(event);
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var items = this.listOptions.map(function (object, index) {
          return /*#__PURE__*/React.createElement(ListItem, {
            key: index,
            onClick: _this3.clickHandler.bind(_this3, object, index)
          }, /*#__PURE__*/React.createElement("button", {
            type: "button",
            tabIndex: "-1",
            className: _this3.isOptionSelected(object, index) ? 'amp-icon amp-list-item-selected amp-selected' : 'amp-icon'
          }), /*#__PURE__*/React.createElement("span", null, _this3.getLocalizedString(object.label)));
        });
        return /*#__PURE__*/React.createElement("div", {
          ref: this.elementNode
        }, /*#__PURE__*/React.createElement(ListTitle, {
          onClick: this.backHandler.bind(this),
          title: this.state.title
        }), items);
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(Panel), "contextTypes", this);
      }
    }]);
    return Panel;
  }(Component);

  var PanelMenu = /*#__PURE__*/function (_Panel) {
    babelHelpers.inherits(PanelMenu, _Panel);

    function PanelMenu(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, PanelMenu);
      _this = _Panel.call(this, props, context) || this;
      _this.state.keyDown = false;

      _this.classList.add("amp-menu");

      return _this;
    }

    babelHelpers.createClass(PanelMenu, [{
      key: "onKeyDown",
      value: function onKeyDown(event) {
        if (event.keyCode == 13 || event.keyCode == 32) {
          this.state.keyDown = true;
          this.toggle();
        }
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(PanelMenu), "contextTypes", this);
      }
    }]);
    return PanelMenu;
  }(Panel);

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var Home = /*#__PURE__*/function (_Panel) {
    babelHelpers.inherits(Home, _Panel);

    function Home(props, context) {
      babelHelpers.classCallCheck(this, Home);
      return _Panel.call(this, props, context) || this;
    }

    babelHelpers.createClass(Home, [{
      key: "clickHandler",
      value: function clickHandler(object, index) {
        this.props.settingsChange(_objectSpread$1({
          key: "language"
        }, this.listOptions[index]));
        this.setState({
          activeIndex: index
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this = this;

        this.listOptions = [{
          label: this.getLocalizedString('TOGGLE_OFF'),
          value: "off"
        }];
        this.player.captioning.tracks.forEach(function (track) {
          var value = track.language;

          var label = track.label || _this.player.localization.getLanguageString(value);

          _this.listOptions.push({
            label: label,
            value: value
          });
        });
        var OptionsList = this.listOptions.map(function (object, index) {
          var selected = !_this.player.captioning.hidden && _this.player.captioning.track && object.value == _this.player.captioning.track.language;

          if (_this.player.captioning.hidden && index === 0) {
            selected = true;
          }

          return /*#__PURE__*/React.createElement(ListItem, {
            key: index,
            onClick: _this.clickHandler.bind(_this, object, index)
          }, /*#__PURE__*/React.createElement("button", {
            type: "button",
            className: selected ? 'amp-icon amp-list-item-selected amp-selected' : 'amp-icon',
            tabIndex: "-1"
          }), /*#__PURE__*/React.createElement("span", null, object.label));
        });
        return /*#__PURE__*/React.createElement("div", {
          ref: this.elementNode,
          className: "amp-captioning-home"
        }, /*#__PURE__*/React.createElement(ListTitle, {
          className: "amp-list-highlight",
          onClick: this.props.gotoSettings.bind(this),
          title: this.getLocalizedString("SETTINGS_SUBTITLES")
        }), /*#__PURE__*/React.createElement(ListItem, {
          onClick: function onClick(event) {
            return _this.props.viewChange(event, "options");
          },
          className: "amp-option-button"
        }, this.getLocalizedString("SETTINGS_OPTIONS")), OptionsList);
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(Home), "contextTypes", this);
      }
    }]);
    return Home;
  }(Panel);

  var Options = /*#__PURE__*/function (_Panel) {
    babelHelpers.inherits(Options, _Panel);

    function Options(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, Options);
      _this = _Panel.call(this, props, context) || this;
      _this.listOptions = [{
        label: _this.getLocalizedString("OPTION_FONT_FAMILY"),
        key: "fontFamily",
        value: "Arial"
      }, {
        label: _this.getLocalizedString("OPTION_FONT_COLOR"),
        key: "fontColor",
        value: "Red"
      }, {
        label: _this.getLocalizedString("OPTION_FONT_SIZE"),
        key: "fontSize",
        value: "medium"
      }, {
        label: _this.getLocalizedString("OPTION_FONT_OPACITY"),
        key: "fontOpacity",
        value: "0%"
      }, {
        label: _this.getLocalizedString("OPTION_BACKGROUND_COLOR"),
        key: "backgroundColor",
        value: "Black"
      }, {
        label: _this.getLocalizedString("OPTION_BACKGROUND_OPACITY"),
        key: "backgroundOpacity",
        value: "0%"
      }, {
        label: _this.getLocalizedString("OPTION_WINDOW_COLOR"),
        key: "windowColor",
        value: "Red"
      }, {
        label: _this.getLocalizedString("OPTION_WINDOW_OPACITY"),
        key: "windowOpacity",
        value: "0%"
      }, {
        label: _this.getLocalizedString("OPTION_EDGE_STYLE"),
        key: "edgeType",
        value: "None"
      }, {
        label: _this.getLocalizedString("OPTION_EDGE_COLOR"),
        key: "edgeColor",
        value: "Red"
      }, {
        label: _this.getLocalizedString("OPTION_EDGE_OPACITY"),
        key: "edgeOpacity",
        value: "Red"
      }, {
        label: _this.getLocalizedString("OPTION_SCROLL_TYPE"),
        key: "scroll",
        value: "Pop-out"
      }];
      return _this;
    }

    babelHelpers.createClass(Options, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var OptionsList = this.listOptions.map(function (object, index) {
          return /*#__PURE__*/React.createElement(ListItem, {
            key: object.key,
            onClick: function onClick(event) {
              return _this2.props.viewChange(event, object.key);
            },
            direction: "right"
          }, /*#__PURE__*/React.createElement("span", {
            className: "amp-label"
          }, object.label), /*#__PURE__*/React.createElement("button", {
            type: "button",
            className: "amp-icon amp-icon-right amp-right",
            tabIndex: "-1"
          }), /*#__PURE__*/React.createElement("span", {
            className: "amp-right"
          }, _this2.props.captionsettings[object.key + "Label"]));
        });
        return /*#__PURE__*/React.createElement("div", {
          className: "amp-captioning-options"
        }, /*#__PURE__*/React.createElement(ListTitle, {
          onClick: function onClick(event) {
            return _this2.props.viewChange(event, "home");
          },
          title: this.getLocalizedString("SETTINGS_OPTIONS")
        }), OptionsList);
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(Options), "contextTypes", this);
      }
    }]);
    return Options;
  }(Panel);

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var OptionsPanel = /*#__PURE__*/function (_Panel) {
    babelHelpers.inherits(OptionsPanel, _Panel);

    function OptionsPanel(props, context) {
      babelHelpers.classCallCheck(this, OptionsPanel);
      return _Panel.call(this, props, context) || this;
    }

    babelHelpers.createClass(OptionsPanel, [{
      key: "select",
      value: function select() {
        var options = this.listOptions;
        var setting = this.props.captionsettings[this.setting];
        var len = options.length;

        for (var i = 0; i < len; i++) {
          if (options[i].value == setting) {
            this.state.activeIndex = i;
            break;
          }
        }
      }
    }, {
      key: "clickHandler",
      value: function clickHandler(object, index) {
        babelHelpers.get(babelHelpers.getPrototypeOf(OptionsPanel.prototype), "clickHandler", this).call(this, object, index);
        this.props.settingsChange(_objectSpread({
          key: this.setting
        }, object));
      }
    }, {
      key: "backHandler",
      value: function backHandler(event) {
        this.props.viewChange(event, "options");
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(OptionsPanel), "contextTypes", this);
      }
    }]);
    return OptionsPanel;
  }(Panel);

  var BackgroundColor = /*#__PURE__*/function (_OptionsPanel) {
    babelHelpers.inherits(BackgroundColor, _OptionsPanel);

    function BackgroundColor(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, BackgroundColor);
      _this = _OptionsPanel.call(this, props, context) || this;
      _this.state.title = _this.getLocalizedString("OPTION_BACKGROUND_COLOR");
      _this.setting = "backgroundColor";
      _this.listOptions = props.labels[_this.setting];

      _this.select();

      return _this;
    }

    babelHelpers.createClass(BackgroundColor, null, [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(BackgroundColor), "contextTypes", this);
      }
    }]);
    return BackgroundColor;
  }(OptionsPanel);

  var BackgroundOpacity = /*#__PURE__*/function (_OptionsPanel) {
    babelHelpers.inherits(BackgroundOpacity, _OptionsPanel);

    function BackgroundOpacity(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, BackgroundOpacity);
      _this = _OptionsPanel.call(this, props, context) || this;
      _this.state.title = _this.getLocalizedString("OPTION_BACKGROUND_OPACITY");
      _this.setting = "backgroundOpacity";
      _this.listOptions = props.labels[_this.setting];

      _this.select();

      return _this;
    }

    babelHelpers.createClass(BackgroundOpacity, null, [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(BackgroundOpacity), "contextTypes", this);
      }
    }]);
    return BackgroundOpacity;
  }(OptionsPanel);

  var CharacterEdgeStyle = /*#__PURE__*/function (_OptionsPanel) {
    babelHelpers.inherits(CharacterEdgeStyle, _OptionsPanel);

    function CharacterEdgeStyle(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, CharacterEdgeStyle);
      _this = _OptionsPanel.call(this, props, context) || this;
      _this.state.title = _this.getLocalizedString("OPTION_EDGE_STYLE");
      _this.setting = "edgeType";
      _this.listOptions = props.labels[_this.setting];

      _this.select();

      return _this;
    }

    babelHelpers.createClass(CharacterEdgeStyle, null, [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(CharacterEdgeStyle), "contextTypes", this);
      }
    }]);
    return CharacterEdgeStyle;
  }(OptionsPanel);

  var FontColor = /*#__PURE__*/function (_OptionsPanel) {
    babelHelpers.inherits(FontColor, _OptionsPanel);

    function FontColor(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, FontColor);
      _this = _OptionsPanel.call(this, props, context) || this;
      _this.state.title = _this.getLocalizedString("OPTION_FONT_COLOR");
      _this.setting = "fontColor";
      _this.listOptions = props.labels[_this.setting];

      _this.select();

      return _this;
    }

    babelHelpers.createClass(FontColor, null, [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(FontColor), "contextTypes", this);
      }
    }]);
    return FontColor;
  }(OptionsPanel);

  var FontFamily = /*#__PURE__*/function (_OptionsPanel) {
    babelHelpers.inherits(FontFamily, _OptionsPanel);

    function FontFamily(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, FontFamily);
      _this = _OptionsPanel.call(this, props, context) || this;
      _this.state.title = _this.getLocalizedString("OPTION_FONT_FAMILY");
      _this.setting = "fontFamily";
      _this.listOptions = props.labels[_this.setting];

      _this.select();

      return _this;
    }

    babelHelpers.createClass(FontFamily, null, [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(FontFamily), "contextTypes", this);
      }
    }]);
    return FontFamily;
  }(OptionsPanel);

  var FontOpacity = /*#__PURE__*/function (_OptionsPanel) {
    babelHelpers.inherits(FontOpacity, _OptionsPanel);

    function FontOpacity(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, FontOpacity);
      _this = _OptionsPanel.call(this, props, context) || this;
      _this.state.title = _this.getLocalizedString("OPTION_FONT_OPACITY");
      _this.setting = "fontOpacity";
      _this.listOptions = props.labels[_this.setting];

      _this.select();

      return _this;
    }

    babelHelpers.createClass(FontOpacity, null, [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(FontOpacity), "contextTypes", this);
      }
    }]);
    return FontOpacity;
  }(OptionsPanel);

  var FontSize = /*#__PURE__*/function (_OptionsPanel) {
    babelHelpers.inherits(FontSize, _OptionsPanel);

    function FontSize(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, FontSize);
      _this = _OptionsPanel.call(this, props, context) || this;
      _this.state.title = _this.getLocalizedString("OPTION_FONT_SIZE");
      _this.setting = "fontSize";
      _this.listOptions = props.labels[_this.setting];

      _this.select();

      return _this;
    }

    babelHelpers.createClass(FontSize, null, [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(FontSize), "contextTypes", this);
      }
    }]);
    return FontSize;
  }(OptionsPanel);

  var WindowColor = /*#__PURE__*/function (_OptionsPanel) {
    babelHelpers.inherits(WindowColor, _OptionsPanel);

    function WindowColor(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, WindowColor);
      _this = _OptionsPanel.call(this, props, context) || this;
      _this.state.title = _this.getLocalizedString("OPTION_WINDOW_COLOR");
      _this.setting = "windowColor";
      _this.listOptions = props.labels[_this.setting];

      _this.select();

      return _this;
    }

    babelHelpers.createClass(WindowColor, null, [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(WindowColor), "contextTypes", this);
      }
    }]);
    return WindowColor;
  }(OptionsPanel);

  var WindowOpacity = /*#__PURE__*/function (_OptionsPanel) {
    babelHelpers.inherits(WindowOpacity, _OptionsPanel);

    function WindowOpacity(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, WindowOpacity);
      _this = _OptionsPanel.call(this, props, context) || this;
      _this.state.title = _this.getLocalizedString("OPTION_WINDOW_OPACITY");
      _this.setting = "windowOpacity";
      _this.listOptions = props.labels[_this.setting];

      _this.select();

      return _this;
    }

    babelHelpers.createClass(WindowOpacity, null, [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(WindowOpacity), "contextTypes", this);
      }
    }]);
    return WindowOpacity;
  }(OptionsPanel);

  var ScrollType = /*#__PURE__*/function (_OptionsPanel) {
    babelHelpers.inherits(ScrollType, _OptionsPanel);

    function ScrollType(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, ScrollType);
      _this = _OptionsPanel.call(this, props, context) || this;
      _this.state.title = _this.getLocalizedString("OPTION_SCROLL_TYPE");
      _this.setting = "scroll";
      _this.listOptions = props.labels[_this.setting];

      _this.select();

      return _this;
    }

    babelHelpers.createClass(ScrollType, null, [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(ScrollType), "contextTypes", this);
      }
    }]);
    return ScrollType;
  }(OptionsPanel);

  var EdgeColor = /*#__PURE__*/function (_OptionsPanel) {
    babelHelpers.inherits(EdgeColor, _OptionsPanel);

    function EdgeColor(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, EdgeColor);
      _this = _OptionsPanel.call(this, props, context) || this;
      _this.state.title = _this.getLocalizedString("OPTION_EDGE_COLOR");
      _this.setting = "edgeColor";
      _this.listOptions = props.labels[_this.setting];

      _this.select();

      return _this;
    }

    babelHelpers.createClass(EdgeColor, null, [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(EdgeColor), "contextTypes", this);
      }
    }]);
    return EdgeColor;
  }(OptionsPanel);

  var EdgeOpacity = /*#__PURE__*/function (_OptionsPanel) {
    babelHelpers.inherits(EdgeOpacity, _OptionsPanel);

    function EdgeOpacity(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, EdgeOpacity);
      _this = _OptionsPanel.call(this, props, context) || this;
      _this.state.title = _this.getLocalizedString("OPTION_EDGE_OPACITY");
      _this.setting = "edgeOpacity";
      _this.listOptions = props.labels[_this.setting];

      _this.select();

      return _this;
    }

    babelHelpers.createClass(EdgeOpacity, null, [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(EdgeOpacity), "contextTypes", this);
      }
    }]);
    return EdgeOpacity;
  }(OptionsPanel);

  var colors = [{
    label: "COLOR_WHITE",
    value: "white"
  }, {
    label: "COLOR_YELLOW",
    value: "yellow"
  }, {
    label: "COLOR_GREEN",
    value: "green"
  }, {
    label: "COLOR_CYAN",
    value: "cyan"
  }, {
    label: "COLOR_BLUE",
    value: "blue"
  }, {
    label: "COLOR_MAGENTA",
    value: "magenta"
  }, {
    label: "COLOR_RED",
    value: "red"
  }, {
    label: "COLOR_BLACK",
    value: "black"
  }];
  var percents = [{
    label: "25%",
    value: "25%"
  }, {
    label: "50%",
    value: "50%"
  }, {
    label: "75%",
    value: "75%"
  }, {
    label: "100%",
    value: "100%"
  }];
  var percentsZero = [{
    label: "0%",
    value: "0%"
  }].concat(percents);

  var CaptionData = function CaptionData() {
    babelHelpers.classCallCheck(this, CaptionData);
    return {
      fontFamily: [{
        label: "MONOSPACED_SERIF",
        value: "monospacedSerif"
      }, {
        label: "PROPORTIONAL_SERIF",
        value: "proportionalSerif"
      }, {
        label: "MONOSPACED_SANS_SERIF",
        value: "monospacedSansSerif"
      }, {
        label: "PROPORTIONAL_SANS_SERIF",
        value: "proportionalSansSerif"
      }, {
        label: "CASUAL",
        value: "casual"
      }, {
        label: "CURSIVE",
        value: "cursive"
      }, {
        label: "SMALL_CAPS",
        value: "smallCapitals"
      }],
      fontColor: colors,
      fontSize: [{
        label: "25%",
        value: "smallest"
      }, {
        label: "50%",
        value: "small"
      }, {
        label: "100%",
        value: "medium"
      }, {
        label: "150%",
        value: "large"
      }, {
        label: "200%",
        value: "largest"
      }],
      fontOpacity: percents,
      backgroundColor: colors,
      backgroundOpacity: percentsZero,
      edgeType: [{
        label: "EDGE_NONE",
        value: "none"
      }, {
        label: "EDGE_DEPRESSED",
        value: "depressed"
      }, {
        label: "EDGE_LEFT_SHADOW",
        value: "leftShadow"
      }, {
        label: "EDGE_RAISED",
        value: "raised"
      }, {
        label: "EDGE_RIGHT_SHADOW",
        value: "rightShadow"
      }, {
        label: "EDGE_UNIFORM",
        value: "uniform"
      }],
      edgeColor: colors,
      edgeOpacity: percentsZero,
      scroll: [{
        label: "SCROLL_POPOUT",
        value: "popout"
      }, {
        label: "SCROLL_ROLLON",
        value: "rollon"
      }, {
        label: "SCROLL_PAINTON",
        value: "painton"
      }],
      windowColor: colors,
      windowOpacity: percentsZero
    };
  };

  var CaptionSettings = /*#__PURE__*/function (_Panel) {
    babelHelpers.inherits(CaptionSettings, _Panel);

    function CaptionSettings(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, CaptionSettings);
      _this = _Panel.call(this, props, context) || this;
      _this.state.languages = [];
      _this.state.keyDown = false;
      var settings = Object.assign({}, _this.player.settings.captions);
      delete settings.track;
      _this.state.captionsettings = settings;
      _this.state.viewChange = _this.changeView.bind(babelHelpers.assertThisInitialized(_this));
      _this.state.settingsChange = _this.changeSettings.bind(babelHelpers.assertThisInitialized(_this));
      _this.state.level = "home";
      _this.state.labels = new CaptionData();

      _this.initSettingLabels();

      return _this;
    }

    babelHelpers.createClass(CaptionSettings, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this.open = true;
      }
    }, {
      key: "focus",
      value: function focus(event) {
        this.element.firstChild.children[2].focus();
      }
    }, {
      key: "changeView",
      value: function changeView(event, toState) {
        var _this2 = this;

        if (/keydown/.test(event.type) && (event.keyCode == 13 || event.keyCode == 32 || event.keyCode == 37 || event.keyCode == 39)) {
          this.keyDown = true;
        }

        this.player.timers.setTimeout(function () {
          _this2.setState({
            level: toState
          });
        }, 100);
      }
    }, {
      key: "initSettingLabels",
      value: function initSettingLabels() {
        var _this3 = this;

        var _loop = function _loop(key) {
          _this3.state.labels[key].forEach(function (item) {
            if (_this3.state.captionsettings[key] == item.value) {
              _this3.state.captionsettings["".concat(key, "Label")] = _this3.getLocalizedString(item.label);
            }
          });
        };

        for (var key in this.state.labels) {
          _loop(key);
        }
      }
    }, {
      key: "changeSettings",
      value: function changeSettings(setting) {
        var key = setting.key,
            value = setting.value,
            label = setting.label;

        if (key == "language") {
          var hidden = value == "off";
          if (!hidden) this.player.captioning.selectTrackByLanguage(value);
          this.player.captioning.hidden = hidden;
        } else {
          this.state.captionsettings[key] = value;
          this.state.captionsettings["".concat(key, "Label")] = this.getLocalizedString(label);
          this.player.captioning.changeSettings(babelHelpers.defineProperty({}, key, value));
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (this.keyDown) {
          this.element.firstChild.children[1].focus();
          this.keyDown = false;
        }
      }
    }, {
      key: "getCurrentPage",
      value: function getCurrentPage() {
        switch (this.state.level) {
          case "home":
            return /*#__PURE__*/React.createElement(Home, babelHelpers["extends"]({}, this.state, {
              gotoSettings: this.props.gotoSettings.bind(this)
            }));

          case "options":
            return /*#__PURE__*/React.createElement(Options, this.state);

          case "fontFamily":
            return /*#__PURE__*/React.createElement(FontFamily, this.state);

          case "fontColor":
            return /*#__PURE__*/React.createElement(FontColor, this.state);

          case "fontSize":
            return /*#__PURE__*/React.createElement(FontSize, this.state);

          case "fontOpacity":
            return /*#__PURE__*/React.createElement(FontOpacity, this.state);

          case "backgroundColor":
            return /*#__PURE__*/React.createElement(BackgroundColor, this.state);

          case "backgroundOpacity":
            return /*#__PURE__*/React.createElement(BackgroundOpacity, this.state);

          case "windowColor":
            return /*#__PURE__*/React.createElement(WindowColor, this.state);

          case "windowOpacity":
            return /*#__PURE__*/React.createElement(WindowOpacity, this.state);

          case "edgeType":
            return /*#__PURE__*/React.createElement(CharacterEdgeStyle, this.state);

          case "edgeColor":
            return /*#__PURE__*/React.createElement(EdgeColor, this.state);

          case "edgeOpacity":
            return /*#__PURE__*/React.createElement(EdgeOpacity, this.state);

          case "scroll":
            return /*#__PURE__*/React.createElement(ScrollType, this.state);
        }
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          ref: this.elementNode,
          role: "menu"
        }, this.getCurrentPage());
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(CaptionSettings), "contextTypes", this);
      }
    }]);
    return CaptionSettings;
  }(Panel);

  var Quality = /*#__PURE__*/function (_Panel) {
    babelHelpers.inherits(Quality, _Panel);

    function Quality(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, Quality);
      _this = _Panel.call(this, props, context) || this;
      _this.listOptions = [{
        label: _this.getLocalizedString("QUALITY_AUTO"),
        value: "0.25"
      }];
      _this.qualityLevels = [];
      _this.state.title = _this.getLocalizedString("SETTINGS_QUALITY");
      _this.state.activeIndex = -1;
      return _this;
    }

    babelHelpers.createClass(Quality, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        babelHelpers.get(babelHelpers.getPrototypeOf(Quality.prototype), "componentWillMount", this).call(this);
        this.onqualitylevelsloaded({
          detail: this.player.qualityLevels
        });
        this.onqualitychanging({
          detail: this.player.qualityLevels[this.player.quality]
        });
        this.open = true;
      }
    }, {
      key: "clickHandler",
      value: function clickHandler(object, index) {
        this.player.quality = index - 1;
        if (!index) this.onqualitychanging();
      }
    }, {
      key: "onqualitylevelsloaded",
      value: function onqualitylevelsloaded(event) {
        var _this2 = this;

        this.qualityLevels = event.detail;
        this.qualityLevels.forEach(function (item) {
          _this2.listOptions.push({
            "label": "".concat(Math.round(item.bitrate / 1000), " Kbps")
          });
        });
        this.setState({
          redraw: true
        });
      }
    }, {
      key: "onqualitychanging",
      value: function onqualitychanging(event) {
        var index = -1,
            autoLevel = false;

        try {
          autoLevel = this.player.qualityMode;
          index = autoLevel == "auto" ? -1 : event.detail ? this.qualityLevels.findIndex(function (levelObject) {
            return levelObject.qualityIndex == event.detail.qualityIndex && levelObject.level == event.detail.level;
          }) : this.props.quality.quality;
        } catch (e) {}

        this.setState({
          activeIndex: index
        });
      }
    }, {
      key: "isOptionSelected",
      value: function isOptionSelected(item, index) {
        return index - 1 === this.state.activeIndex;
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(Quality), "contextTypes", this);
      }
    }]);
    return Quality;
  }(Panel);

  var PlaybackRate = /*#__PURE__*/function (_Panel) {
    babelHelpers.inherits(PlaybackRate, _Panel);

    function PlaybackRate(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, PlaybackRate);
      _this = _Panel.call(this, props, context) || this;
      _this.state.title = _this.getLocalizedString("SETTINGS_SPEED");
      _this.listOptions = [{
        label: "0.25",
        value: 0.25
      }, {
        label: "0.5",
        value: 0.5
      }, {
        label: "Normal",
        value: 1
      }, {
        label: "1.25",
        value: 1.25
      }, {
        label: "1.5",
        value: 1.5
      }, {
        label: "2",
        value: 2
      }];
      _this.state.activeIndex = 2;

      _this.listOptions.forEach(function (option, index) {
        if (option.value == _this.player.playbackRate) {
          _this.state.activeIndex = index;
        }
      });

      _this.classList.add("amp-playback-rate");

      return _this;
    }

    babelHelpers.createClass(PlaybackRate, [{
      key: "clickHandler",
      value: function clickHandler(object, index) {
        this.player.playbackRate = object.value;
        babelHelpers.get(babelHelpers.getPrototypeOf(PlaybackRate.prototype), "clickHandler", this).call(this, object, index);
      }
    }, {
      key: "isOptionSelected",
      value: function isOptionSelected(item, index) {
        return parseFloat(item.value) === parseFloat(this.player.playbackRate);
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(PlaybackRate), "contextTypes", this);
      }
    }]);
    return PlaybackRate;
  }(Panel);

  var AudioTracks = /*#__PURE__*/function (_Panel) {
    babelHelpers.inherits(AudioTracks, _Panel);

    function AudioTracks(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, AudioTracks);
      _this = _Panel.call(this, props, context) || this;
      _this.listOptions = [];
      _this.audioTracks = [];
      _this.activeIds = [];
      _this.state.title = "Audio"; // TODO: Should be localized

      _this.state.activeIndex = -1;
      return _this;
    }

    babelHelpers.createClass(AudioTracks, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        babelHelpers.get(babelHelpers.getPrototypeOf(AudioTracks.prototype), "componentWillMount", this).call(this);
        this.audioTracks = this.player.audioTracks.list;
        this.oncanplaythrough({
          detail: this.audioTracks
        });
        this.open = true;
      }
    }, {
      key: "clickHandler",
      value: function clickHandler(object, index) {
        this.audioTracks[index].enabled = true;
        this.setState({
          activeIndex: index
        });
        this.setState({
          redraw: true
        });
      }
    }, {
      key: "onmediachange",
      value: function onmediachange(event) {
        this.listOptions = [];
        this.activeIds = [];
      }
    }, {
      key: "oncanplaythrough",
      value: function oncanplaythrough(event) {
        var _this2 = this;

        this.audioTracks = this.player.audioTracks.list;
        this.audioTracks.forEach(function (item) {
          if (_this2.activeIds[item.id] == null) {
            var lang = _this2.player.localization.getLanguageString(item.language) || item.language;

            var label = item.label || lang || item.id || _this2.player.localization.getString("UNKNOWN");

            _this2.activeIds[item.id] = true;

            _this2.listOptions.push({
              label: label
            });
          }
        });
        this.setState({
          redraw: true
        });
      }
    }, {
      key: "isOptionSelected",
      value: function isOptionSelected(item, index) {
        return this.audioTracks[index].enabled;
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(AudioTracks), "contextTypes", this);
      }
    }]);
    return AudioTracks;
  }(Panel);

  var SettingsPanel = /*#__PURE__*/function (_PanelMenu) {
    babelHelpers.inherits(SettingsPanel, _PanelMenu);

    function SettingsPanel(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, SettingsPanel);
      _this = _PanelMenu.call(this, props, context) || this;
      _this.state.settingsLevel = 0;
      _this.state.bitrateLabel = "Auto";
      _this.state.captioningSettingState = null;
      SettingsPanel.refs.forEach(function (name) {
        return _this[name] = React.createRef();
      });
      return _this;
    }

    babelHelpers.createClass(SettingsPanel, [{
      key: "firstElem",
      get: function get() {
        return this.firstNode.current;
      }
    }, {
      key: "onready",
      value: function onready(event) {
        this.setState({
          "autoplay": this.player.autoplay
        });
      }
    }, {
      key: "onseeked",
      value: function onseeked(event) {
        this.open = false;
      }
    }, {
      key: "toggle",
      value: function toggle() {
        babelHelpers.get(babelHelpers.getPrototypeOf(SettingsPanel.prototype), "toggle", this).call(this);
        this.state.settingsLevel = 0;
      }
    }, {
      key: "onqualitychanging",
      value: function onqualitychanging(event) {
        var brLabel = this.player.qualityMode === "auto" ? "Auto" : Math.round(event.detail.bitrate / 1000) + "Kbps"; // TODO: Needs to be localized

        this.state.quality = this.state.qualityLevels ? this.state.qualityLevels.findIndex(function (levelObject) {
          return levelObject.qualityIndex == event.detail.qualityIndex && levelObject.level == event.detail.level;
        }) : -1;
        this.setState({
          bitrateLabel: brLabel
        });
      }
    }, {
      key: "changeState",
      value: function changeState(value, event) {
        var _this2 = this;

        if (event.type == "keydown" && (event.keyCode == 13 || event.keyCode == 32 || event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) && this.mouseFocus != true) {
          if (event.keyCode == 37 && this.state.settingsLevel == 0) return;
          this.state.keyDown = true;
        }

        this.player.timers.setTimeout(function () {
          _this2.setState({
            settingsLevel: value
          });
        }, 100);
      }
    }, {
      key: "autoplayToggle",
      value: function autoplayToggle() {
        this.setState({
          "autoplay": this.player.autoplay = !this.player.autoplay
        });
      }
    }, {
      key: "componentWillUpdate",
      value: function componentWillUpdate(nextProps, nextState) {
        if (nextState.settingsLevel == 1 && this.firstElem.state.captionsettings) this.setState({
          'captioningSettingState': this.firstElem.state.captionsettings
        });else if (this.firstElem != null && !isNaN(this.firstElem.state.activeIndex)) this.setState({
          'playbackSettingState': this.firstElem.state.activeIndex
        });
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (this.state.keyDown) {
          if (typeof this.firstElem.focus === "function") {
            this.firstElem.focus();
          } else {
            this.firstElem.refs.element.childNodes[1].focus();
          }

          this.state.keyDown = false;
        }
      }
    }, {
      key: "currentAudioTrackLabel",
      value: function currentAudioTrackLabel() {
        var audioTracks = this.getAudioTracks();

        for (var i = 0; i < audioTracks.length; i++) {
          var item = audioTracks[i];

          if (item != null && item.enabled) {
            var lang = this.player.localization.getLanguageString(item.language) || item.language;
            var label = item.label || lang || item.id || this.player.localization.getString("UNKNOWN");
            return label;
          }
        }

        return "";
      }
    }, {
      key: "getAudioTracks",
      value: function getAudioTracks() {
        var tracks = this.player.audioTracks;
        return tracks.list != null ? tracks.list : [];
      }
    }, {
      key: "render",
      value: function render() {
        switch (this.state.settingsLevel) {
          case 0:
            var isCaptionEnabled = Utils.componentEnabled(this.plugin, "captioning") && this.player.captioning.track;
            var isQualityEnabled = this.player.qualityLevels != null && this.player.qualityLevels.length > 1;
            var audioTracksAvailable = this.getAudioTracks().length > 1;
            return /*#__PURE__*/React.createElement("div", babelHelpers["extends"]({
              ref: this.elementNode
            }, this.propsList, {
              className: "amp-settings amp-panel ".concat(this.className),
              role: "menu"
            }), isCaptionEnabled && /*#__PURE__*/React.createElement(ListItem, {
              ref: this.firstNode,
              className: "amp-subtitles",
              onClick: this.changeState.bind(this, 1),
              direction: "right"
            }, /*#__PURE__*/React.createElement("span", {
              className: "amp-label"
            }, this.getLocalizedString("SETTINGS_SUBTITLES")), /*#__PURE__*/React.createElement("button", {
              type: "button",
              className: "amp-icon amp-icon-right amp-right",
              tabIndex: "-1"
            }), /*#__PURE__*/React.createElement("span", {
              className: "amp-right"
            }, this.player.captioning.hidden ? "Off" : this.player.localization.getLanguageString(this.player.captioning.track.language))), isQualityEnabled && /*#__PURE__*/React.createElement(ListItem, {
              ref: this.firstNode,
              className: "amp-quality",
              onClick: this.changeState.bind(this, 2),
              direction: "right"
            }, /*#__PURE__*/React.createElement("span", {
              className: "amp-label"
            }, this.getLocalizedString("SETTINGS_QUALITY")), /*#__PURE__*/React.createElement("button", {
              type: "button",
              className: "amp-icon amp-icon-right amp-right",
              tabIndex: "-1"
            }), /*#__PURE__*/React.createElement("span", {
              className: "amp-right"
            }, this.state.bitrateLabel)), this.player.mode != "flash" && /*#__PURE__*/React.createElement(ListItem, {
              ref: this.firstNode,
              className: "amp-playback-rate-button",
              onClick: this.changeState.bind(this, 3),
              direction: "right"
            }, /*#__PURE__*/React.createElement("span", {
              className: "amp-label"
            }, this.getLocalizedString("SETTINGS_SPEED")), /*#__PURE__*/React.createElement("button", {
              type: "button",
              className: "amp-icon amp-icon-right amp-right",
              tabIndex: "-1"
            }), /*#__PURE__*/React.createElement("span", {
              className: "amp-right"
            }, this.player.playbackRate === 1 ? this.getLocalizedString("SPEED_NORMAL") : this.player.playbackRate)), audioTracksAvailable && /*#__PURE__*/React.createElement(ListItem, {
              ref: this.audiotracks,
              className: "amp-playback-rate-button",
              direction: "right",
              onClick: this.changeState.bind(this, 4)
            }, /*#__PURE__*/React.createElement("span", {
              className: "amp-label"
            }, this.getLocalizedString("SETTINGS_AUDIO")), /*#__PURE__*/React.createElement("button", {
              type: "button",
              className: "amp-icon amp-icon-right amp-right",
              tabIndex: "-1"
            }), /*#__PURE__*/React.createElement("span", {
              className: "amp-right"
            }, this.currentAudioTrackLabel())), /*#__PURE__*/React.createElement(ListItem, {
              ref: this.autoplay,
              className: this.state.autoplay ? "amp-autoplay-on" : "amp-autoplay-off",
              direction: "right",
              onClick: this.autoplayToggle.bind(this)
            }, /*#__PURE__*/React.createElement("span", {
              className: "amp-label"
            }, this.getLocalizedString("SETTINGS_AUTOPLAY")), /*#__PURE__*/React.createElement("button", {
              type: "button",
              className: "amp-right amp-icon amp-toggle"
            })));

          case 1:
            return /*#__PURE__*/React.createElement("div", {
              ref: this.elementNode,
              className: "amp-captioning-settings amp-panel ".concat(this.className)
            }, /*#__PURE__*/React.createElement(CaptionSettings, {
              ref: this.firstNode,
              captionState: this.state.captioningSettingState,
              gotoSettings: this.changeState.bind(this, 0)
            }));

          case 2:
            return /*#__PURE__*/React.createElement("div", {
              ref: this.elementNode,
              className: "amp-bitrate amp-panel ".concat(this.className)
            }, /*#__PURE__*/React.createElement(Quality, {
              ref: this.firstNode,
              gotoSettings: this.changeState.bind(this, 0)
            }));

          case 3:
            return /*#__PURE__*/React.createElement("div", {
              ref: this.elementNode,
              className: "amp-playback-rate amp-panel ".concat(this.className)
            }, /*#__PURE__*/React.createElement(PlaybackRate, {
              ref: this.firstNode,
              gotoSettings: this.changeState.bind(this, 0)
            }));

          case 4:
            return /*#__PURE__*/React.createElement("div", {
              ref: this.elementNode,
              className: "amp-audio-tracks amp-panel ".concat(this.className)
            }, /*#__PURE__*/React.createElement(AudioTracks, {
              ref: this.firstNode,
              gotoSettings: this.changeState.bind(this, 0)
            }));
        }
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(SettingsPanel), "contextTypes", this);
      }
    }, {
      key: "refs",
      get: function get() {
        return ["firstNode", "autoplay", "audiotracks"];
      }
    }]);
    return SettingsPanel;
  }(PanelMenu);

  var SharePanel = /*#__PURE__*/function (_PanelMenu) {
    babelHelpers.inherits(SharePanel, _PanelMenu);

    function SharePanel(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, SharePanel);
      _this = _PanelMenu.call(this, props, context) || this;
      _this.listOptions = [{
        label: "Facebook",
        id: "facebook",
        url: "www.facebook.html"
      }, {
        label: "Twitter",
        id: "twitter",
        url: "www.twitter.com"
      }, {
        label: "Email",
        id: "email",
        url: ""
      }, {
        label: "Embed",
        id: "embed",
        url: ""
      }];
      return _this;
    }

    babelHelpers.createClass(SharePanel, [{
      key: "clickHandler",
      value: function clickHandler(object, index, event) {
        var media = this.player.media;
        this.player.dispatch("share", {
          provider: object,
          link: media.link,
          embed: media.embed
        });
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (this.state.keyDown) {
          this.element.childNodes[0].focus();
          this.state.keyDown = false;
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var OptionsList = this.listOptions.map(function (object, index) {
          return /*#__PURE__*/React.createElement(ListItem, {
            key: index,
            className: "amp-list-item amp-menu-item",
            onClick: _this2.clickHandler.bind(_this2, object, index)
          }, /*#__PURE__*/React.createElement("button", {
            type: "button",
            className: "amp-icon amp-".concat(object.id),
            tabIndex: "-1"
          }), /*#__PURE__*/React.createElement("span", null, object.label));
        });
        return /*#__PURE__*/React.createElement("div", {
          ref: this.elementNode,
          className: "amp-share amp-panel amp-menu ".concat(this.className)
        }, OptionsList);
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(SharePanel), "contextTypes", this);
      }
    }]);
    return SharePanel;
  }(PanelMenu);

  var JumpBack = /*#__PURE__*/function (_Control) {
    babelHelpers.inherits(JumpBack, _Control);

    function JumpBack(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, JumpBack);
      _this = _Control.call(this, props, context) || this;

      _this.classList.add("amp-jump-back", true);

      _this.state.altText = "JUMP_BACK";
      return _this;
    }

    babelHelpers.createClass(JumpBack, [{
      key: "onClick",
      value: function onClick() {
        var player = this.player;
        var currentTime = this.player.currentTime;
        if (currentTime < 0.26) return;

        if (player.playState === "playing" || player.playState === "paused") {
          this.player.currentTime = Math.max(currentTime - 10, 0);
          this.startAnimation();
        } else if (player.ended === true) {
          this.player.replay();
        }
      }
    }, {
      key: "startAnimation",
      value: function startAnimation() {
        var _this2 = this;

        var player = this.player;
        player.timers.setTimeout(function () {
          return _this2.setAnimationState(false);
        }, 500);
        this.setAnimationState(true);
      }
    }, {
      key: "setAnimationState",
      value: function setAnimationState() {
        var _player$container$cla;

        var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var player = this.player.react;
        player.container.classList.update((_player$container$cla = {}, babelHelpers.defineProperty(_player$container$cla, "amp-in-rewind", active), babelHelpers.defineProperty(_player$container$cla, "amp-in-forward", false), _player$container$cla));
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(JumpBack), "contextTypes", this);
      }
    }]);
    return JumpBack;
  }(Control);

  var JumpForward = /*#__PURE__*/function (_Control) {
    babelHelpers.inherits(JumpForward, _Control);

    function JumpForward(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, JumpForward);
      _this = _Control.call(this, props, context) || this;

      _this.classList.add("amp-jump-forward", true);

      _this.state.altText = "JUMP_AHEAD";
      return _this;
    }

    babelHelpers.createClass(JumpForward, [{
      key: "onClick",
      value: function onClick(event) {
        var player = this.player;

        if (!player.ended && (player.playState == "playing" || player.playState == "paused")) {
          player.currentTime = Math.min(this.player.currentTime + 10, this.player.duration - 1);
          this.startAnimation();
        }
      }
    }, {
      key: "startAnimation",
      value: function startAnimation() {
        var _this2 = this;

        var player = this.player;
        player.timers.setTimeout(function () {
          return _this2.setAnimationState(false);
        }, 500);
        this.setAnimationState(true);
      }
    }, {
      key: "setAnimationState",
      value: function setAnimationState() {
        var _player$container$cla;

        var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var player = this.player.react;
        player.container.classList.update((_player$container$cla = {}, babelHelpers.defineProperty(_player$container$cla, "amp-in-forward", active), babelHelpers.defineProperty(_player$container$cla, "amp-in-rewind", false), _player$container$cla));
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(JumpForward), "contextTypes", this);
      }
    }]);
    return JumpForward;
  }(Control);

  var Poster = /*#__PURE__*/function (_Component) {
    babelHelpers.inherits(Poster, _Component);

    function Poster() {
      babelHelpers.classCallCheck(this, Poster);
      return _Component.apply(this, arguments) || this;
    }

    babelHelpers.createClass(Poster, [{
      key: "onmediachange",
      value: function onmediachange(event) {
        this.setState({
          src: this.player.evaluateBindings(this.player.media.poster)
        });
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("img", {
          className: "amp-poster",
          src: this.state.src
        });
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(Poster), "contextTypes", this);
      }
    }]);
    return Poster;
  }(Component);

  var Title = /*#__PURE__*/function (_Component) {
    babelHelpers.inherits(Title, _Component);

    function Title(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, Title);
      _this = _Component.call(this, props, context) || this;

      _this.classList.add("amp-title", true);

      return _this;
    }

    babelHelpers.createClass(Title, [{
      key: "onmediachange",
      value: function onmediachange(event) {
        this.setState({
          textContent: this.player.media.title
        });
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(Title), "contextTypes", this);
      }
    }]);
    return Title;
  }(Component);

  var ErrorMsg = /*#__PURE__*/function (_Component) {
    babelHelpers.inherits(ErrorMsg, _Component);

    function ErrorMsg() {
      babelHelpers.classCallCheck(this, ErrorMsg);
      return _Component.apply(this, arguments) || this;
    }

    babelHelpers.createClass(ErrorMsg, [{
      key: "onerror",
      value: function onerror(event) {
        this.setState({
          error: this.l10n.ERROR_DEFAULT
        });
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          className: "amp-error-msg"
        }, /*#__PURE__*/React.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: this.state.error
          }
        }));
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(ErrorMsg), "contextTypes", this);
      }
    }]);
    return ErrorMsg;
  }(Component);

  var ContextMenu = /*#__PURE__*/function (_Component) {
    babelHelpers.inherits(ContextMenu, _Component);

    function ContextMenu(props, context) {
      babelHelpers.classCallCheck(this, ContextMenu);
      return _Component.call(this, props, context) || this;
    }

    babelHelpers.createClass(ContextMenu, [{
      key: "render",
      value: function render() {
        var menuItems = [/*#__PURE__*/React.createElement("li", {
          className: "amp-context-item amp-menu-item amp-bold",
          key: "0"
        }, "Akamai Adaptive Media Player"), /*#__PURE__*/React.createElement("li", {
          className: "amp-context-item amp-menu-item",
          key: "1"
        }, this.player.version)];
        if (typeof akamaiGetViewerId == "function" && akamaiGetViewerId() != null) menuItems.push( /*#__PURE__*/React.createElement("li", {
          className: "amp-context-item amp-menu-item amp-selectable",
          key: "2"
        }, "Viewer ID: ", akamaiGetViewerId()));
        var style = {
          top: "".concat(this.props.y, "px"),
          left: "".concat(this.props.x, "px")
        };
        return /*#__PURE__*/React.createElement("ul", {
          ref: this.elementNode,
          className: "amp-context-menu amp-menu amp-bg",
          style: style
        }, menuItems);
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(ContextMenu), "contextTypes", this);
      }
    }]);
    return ContextMenu;
  }(Component);

  var Ads = /*#__PURE__*/function (_Component) {
    babelHelpers.inherits(Ads, _Component);

    function Ads(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, Ads);
      _this = _Component.call(this, props, context) || this;

      _this.classList.add("amp-ads", true);

      _this.state.msg = "";
      _this.state.time = "";

      _this.bindHandlers(["onadbreakstart", "onadbreakend", "onadstarted", "onadtimeremaining", "onadimpression"]);

      Ads.refs.forEach(function (name) {
        return _this[name] = React.createRef();
      });
      return _this;
    }

    babelHelpers.createClass(Ads, [{
      key: "container",
      get: function get() {
        return this.wrapper.current;
      }
    }, {
      key: "onready",
      value: function onready(event) {
        this.controlsMode = this.plugin.mode;
        this.player.addEventListener("adbreakstart", this.onadbreakstart);
        this.player.addEventListener("adbreakend", this.onadbreakend);
        this.player.addEventListener("adstarted", this.onadstarted);
        this.player.addEventListener("adtimeremaining", this.onadtimeremaining);
        this.player.addEventListener("adimpression", this.onadimpression);
      }
    }, {
      key: "onmediachange",
      value: function onmediachange(event) {
        this.onadbreakend();
      }
    }, {
      key: "onadimpression",
      value: function onadimpression(event) {
        var ad = event.detail;
        if (ad.type === "overlay") this.plugin.container.classList.update({
          "amp-ad-overlaymode": true
        });
        this.player.ads.resize();
      }
    }, {
      key: "onadbreakstart",
      value: function onadbreakstart(event) {
        this.plugin.container.classList.update({
          "amp-ad-break": true
        });
        this.player.container.classList.add("amp-ad-break");
        event.detail;
        this.setState({
          msg: "",
          time: ""
        });
        this.controlsMode = this.plugin.mode;
        this.plugin.mode = this.plugin.adMode;
      }
    }, {
      key: "onadstarted",
      value: function onadstarted(event) {
        var adVO = event.detail || {};
        var msg = adVO.position == null || adVO.totalAds == null ? "" : "".concat(this.getLocalizedString("AD"), " ").concat(adVO.position, " ").concat(this.getLocalizedString("OF"), " ").concat(adVO.totalAds);
        this.setState({
          time: adVO.duration,
          msg: msg
        });
      }
    }, {
      key: "onadbreakend",
      value: function onadbreakend(event) {
        this.setState({
          msg: "",
          time: ""
        });
        this.plugin.container.classList.update({
          "amp-ad-break": false
        });
        this.player.container.classList.remove("amp-ad-break");
        this.plugin.mode = this.controlsMode;
      }
    }, {
      key: "onadtimeremaining",
      value: function onadtimeremaining(event) {
        if (this.player.playState == "ready") return;
        this.setState({
          time: event.detail
        });
      }
    }, {
      key: "render",
      value: function render() {
        var time = this.state.time != "" ? Utils.formatTimecode(Math.ceil(this.state.time)) : this.state.time;
        return /*#__PURE__*/React.createElement("div", {
          ref: this.containerNode,
          className: "amp-ads"
        }, /*#__PURE__*/React.createElement("div", {
          ref: this.wrapper,
          className: "amp-ad-container"
        }), /*#__PURE__*/React.createElement("div", {
          className: "amp-bar amp-ad-info"
        }, /*#__PURE__*/React.createElement("div", {
          ref: this.count,
          className: "amp-ad-component amp-ad-count"
        }, this.state.msg), /*#__PURE__*/React.createElement("div", {
          ref: this.spacerLeft,
          className: "amp-spacer"
        }), /*#__PURE__*/React.createElement("div", {
          ref: this.spacerRight,
          className: "amp-spacer"
        }), /*#__PURE__*/React.createElement("div", {
          ref: this.time,
          className: "amp-ad-component amp-ad-time"
        }, time)));
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(Ads), "contextTypes", this);
      }
    }, {
      key: "refs",
      get: function get() {
        return ['containerNode', 'wrapper', 'count', 'spacerLeft', 'spacerRight', 'time'];
      }
    }]);
    return Ads;
  }(Component);

  var Mode = /*#__PURE__*/function () {
    function Mode() {
      babelHelpers.classCallCheck(this, Mode);
    }

    babelHelpers.createClass(Mode, null, [{
      key: "AUTO",
      get: function get() {
        return "auto";
      }
    }, {
      key: "FIXED",
      get: function get() {
        return "fixed";
      }
    }, {
      key: "PERSISTENT",
      get: function get() {
        return "persistent";
      }
    }]);
    return Mode;
  }();

  var ActiveState = /*#__PURE__*/function () {
    function ActiveState() {
      babelHelpers.classCallCheck(this, ActiveState);
    }

    babelHelpers.createClass(ActiveState, null, [{
      key: "ACTIVE",
      get: function get() {
        return "active";
      }
    }, {
      key: "INACTIVE",
      get: function get() {
        return "inactive";
      }
    }, {
      key: "IDLE",
      get: function get() {
        return "idle";
      }
    }]);
    return ActiveState;
  }();

  var Unmute = /*#__PURE__*/function (_Button) {
    babelHelpers.inherits(Unmute, _Button);

    function Unmute(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, Unmute);
      _this = _Button.call(this, props, context) || this;

      _this.classList.add("amp-unmute", true);

      _this.state.altText = "UNMUTE";
      _this.state.dismissed = false;
      return _this;
    }

    babelHelpers.createClass(Unmute, [{
      key: "onmutechange",
      value: function onmutechange(event) {
        if (event.detail === false) this.setState({
          dismissed: true
        });
      }
    }, {
      key: "onClick",
      value: function onClick(event) {
        this.player.muted = false;
        event.stopPropagation();
      }
    }, {
      key: "render",
      value: function render() {
        if (this.state.dismissed === true) return null;
        return /*#__PURE__*/React.createElement("div", {
          className: "amp-unmute-layer",
          onClick: this.propsList.onClick
        }, babelHelpers.get(babelHelpers.getPrototypeOf(Unmute.prototype), "render", this).call(this));
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(Unmute), "contextTypes", this);
      }
    }]);
    return Unmute;
  }(Button);

  var Auth = /*#__PURE__*/function (_Component) {
    babelHelpers.inherits(Auth, _Component);

    function Auth(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, Auth);
      _this = _Component.call(this, props, context) || this;

      _this.classList.add("amp-auth");

      _this.state.children = null;

      _this.player.addEventListener(akamai.amp.AuthEvents.CHOOSE_PROVIDER, _this.onchooseprovider.bind(babelHelpers.assertThisInitialized(_this)));

      return _this;
    }

    babelHelpers.createClass(Auth, [{
      key: "onchooseprovider",
      value: function onchooseprovider(event) {
        var _this2 = this;

        // create thumbnail grid
        var list = event.detail;
        var items = [];
        var label = "Providers: ";
        var featured = list.featured || [];
        featured.forEach(function (id, index) {
          var idps = list[id];

          var onclick = _this2.player.auth.login.bind(_this2.player.auth, id);

          items.push( /*#__PURE__*/React.createElement("div", {
            className: "amp-auth-chooser-grid-item",
            onClick: onclick,
            key: index
          }, idps.logo != null && /*#__PURE__*/React.createElement("img", {
            className: "amp-auth-chooser-grid-cell-img",
            src: idps.logo,
            alt: idps.name
          }), /*#__PURE__*/React.createElement("span", {
            className: "amp-auth-chooser-grid-cell-label"
          }, idps.name)));
        });

        if (items.length > 0) {
          this.classList.add("amp-auth-chooser-featured");
          label = "Other ";
        } // populate select menu


        var footprints = list.footprints || [];
        var options = [];
        footprints.forEach(function (key) {
          options.push( /*#__PURE__*/React.createElement("option", {
            value: key,
            key: "fp_" + key
          }, list[key].name));
        });
        list.forEach(function (idps) {
          options.push( /*#__PURE__*/React.createElement("option", {
            value: idps.id,
            key: idps.id
          }, idps.name));
        });

        var onclick = function onclick(event) {
          var select = document.querySelector(".amp-auth-chooser-select");
          var idpId = select.options[select.selectedIndex].value;

          _this2.player.auth.login(idpId);
        };

        this.setState({
          children: /*#__PURE__*/React.createElement("div", {
            className: "amp-auth-chooser"
          }, /*#__PURE__*/React.createElement("div", {
            className: "amp-auth-chooser-title"
          }, "Choose your provider"), /*#__PURE__*/React.createElement("div", {
            className: "amp-auth-chooser-grid"
          }, items), /*#__PURE__*/React.createElement("div", {
            className: "amp-auth-chooser-menu"
          }, /*#__PURE__*/React.createElement("div", {
            className: "amp-auth-chooser-label"
          }, label), /*#__PURE__*/React.createElement("select", {
            className: "amp-auth-chooser-select"
          }, options), /*#__PURE__*/React.createElement("button", {
            type: "button",
            className: "amp-auth-chooser-login",
            onClick: onclick
          }, "Login")))
        });
      }
    }, {
      key: "children",
      get: function get() {
        return this.state.children;
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(Auth), "contextTypes", this);
      }
    }]);
    return Auth;
  }(Component);

  var Locales = {
    en: {
      PAUSE: "Pause",
      PLAY: "Play",
      REWIND: "Rewind",
      PLAYBACK_RATE: "Playback Rate",
      FULLSCREEN: "Fullscreen",
      ENTER_FULLSCREEN: "Toggle Fullscreen Mode",
      EXIT_FULLSCREEN: "Exit Fullscreen Mode",
      MUTE: "Mute",
      UNMUTE: "Unmute",
      JUMP_BACK: "Jump Back",
      JUMP_AHEAD: "Jump Ahead",
      VOLUME: "Volume",
      REPLAY: "Replay",
      SETTINGS: "Settings",
      SHARE: "Share",
      CLOSED_CAPTIONING: "Closed Captioning",
      SLIDER: "Slider",
      SEEK: "Seek",
      PREVIEW: "Preview",
      CURRENT: "Current",
      SEEK_TO: "Seek to",
      LIVE: "LIVE",
      GO_LIVE: "GO LIVE",
      AIRPLAY: "Airplay",
      PIP: "Picture in Picture",
      CAST: "Cast to Screen",
      SETTINGS_SPEED: "Speed",
      OPTION_BACKGROUND_COLOR: "Background Color",
      OPTION_BACKGROUND_OPACITY: "Background Opacity",
      OPTION_EDGE_STYLE: "Character Edge Style",
      OPTION_FONT_COLOR: "Font Color",
      OPTION_FONT_FAMILY: "Font Family",
      OPTION_FONT_OPACITY: "Font Opacity",
      OPTION_FONT_SIZE: "Font Size",
      OPTION_WINDOW_COLOR: "Window Color",
      OPTION_WINDOW_OPACITY: "Window Opacity",
      OPTION_SCROLL_TYPE: "Scroll Type",
      OPTION_EDGE_COLOR: "Edge Color",
      OPTION_EDGE_OPACITY: "Edge Opacity",
      QUALITY_AUTO: "Auto",
      SETTINGS_QUALITY: "Quality",
      SETTINGS_AUDIO: "Audio",
      SPEED_NORMAL: "Normal",
      SETTINGS_AUTOPLAY: "Autoplay",
      SETTINGS_SUBTITLES: "Subtitles",
      SETTINGS_OPTIONS: "Options",
      AD: "Ad",
      OF: "of",
      COLOR_WHITE: "White",
      COLOR_YELLOW: "Yellow",
      COLOR_GREEN: "Green",
      COLOR_CYAN: "Cyan",
      COLOR_BLUE: "Blue",
      COLOR_MAGENTA: "Magenta",
      COLOR_RED: "Red",
      COLOR_BLACK: "Black",
      SCROLL_POPOUT: "Pop-out",
      SCROLL_ROLLON: "Roll-on",
      SCROLL_PAINTON: "Paint-on",
      EDGE_NONE: "None",
      EDGE_DEPRESSED: "Depressed",
      EDGE_LEFT_SHADOW: "Left Drop Shadow",
      EDGE_RAISED: "Raised",
      EDGE_RIGHT_SHADOW: "Right Drop Shadow",
      EDGE_UNIFORM: "Uniform",
      TOGGLE_OFF: "Off"
    },
    es: "#{paths.plugins}/react/es.json",
    fr: "#{paths.plugins}/react/fr.json"
  };

  var Event = akamai.amp.Event;
  var EventDispatcher = akamai.amp.EventDispatcher;

  var IdleUtil = /*#__PURE__*/function (_EventDispatcher) {
    babelHelpers.inherits(IdleUtil, _EventDispatcher);

    function IdleUtil(element, timeout, timerGroup) {
      var _this;

      babelHelpers.classCallCheck(this, IdleUtil);
      _this = _EventDispatcher.call(this) || this;
      _this.element = element;
      _this.timeout = timeout;
      _this.timerGroup = timerGroup;
      _this.events = ["mousemove", "mousedown", "keypress", "MSPointerMove", "MSPointerDown", "pointermove", "pointerdown"];
      _this.touchEvents = ["touchmove", "touchstart"];
      _this.active = true;
      _this.timeoutId = null;
      _this.resetHandler = _this.reset.bind(babelHelpers.assertThisInitialized(_this));
      return _this;
    }

    babelHelpers.createClass(IdleUtil, [{
      key: "applyListeners",
      value: function applyListeners() {
        var _this2 = this;

        var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "add";
        var opts = Utils.getEventListenerOptions();
        this.touchEvents.forEach(function (event) {
          _this2.element["".concat(action, "EventListener")](event, _this2.resetHandler, opts);
        });
        this.events.forEach(function (event) {
          _this2.element["".concat(action, "EventListener")](event, _this2.resetHandler);
        });
      }
    }, {
      key: "start",
      value: function start(timeout) {
        if (timeout != null) {
          this.timeout = timeout;
        }

        this.stop();
        this.applyListeners("add");
        this.timeoutId = this.timerGroup.setTimeout(this.setActive.bind(this, false), this.timeout);
      }
    }, {
      key: "stop",
      value: function stop() {
        this.applyListeners("remove");
        this.timerGroup.clearTimeout(this.timeoutId);
      }
    }, {
      key: "reset",
      value: function reset() {
        this.setActive(true);
        this.start();
      }
    }, {
      key: "setActive",
      value: function setActive(value) {
        if (value === this.active) {
          return;
        }

        this.active = value;
        this.dispatchEvent(Event.create("activechange", {
          active: this.active
        }));
        return value;
      }
    }, {
      key: "getActive",
      value: function getActive() {
        return this.active;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.stop();
        babelHelpers.get(babelHelpers.getPrototypeOf(IdleUtil.prototype), "destroy", this).call(this);
      }
    }], [{
      key: "create",
      value: function create(element, timeout, timerGroup) {
        return new IdleUtil(element, timeout, timerGroup);
      }
    }]);
    return IdleUtil;
  }(EventDispatcher);

  var PlayPause = /*#__PURE__*/function (_Control) {
    babelHelpers.inherits(PlayPause, _Control);

    function PlayPause(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, PlayPause);
      _this = _Control.call(this, props, context) || this;

      _this.classList.add("amp-playpause", true);

      _this.state.altText = "PLAY";
      return _this;
    }

    babelHelpers.createClass(PlayPause, [{
      key: "onplaying",
      value: function onplaying() {
        this.setState({
          altText: "PAUSE"
        });
      }
    }, {
      key: "onpause",
      value: function onpause() {
        this.setState({
          altText: "PLAY"
        });
      }
    }, {
      key: "onended",
      value: function onended() {
        this.setState({
          altText: "REPLAY"
        });
      }
    }, {
      key: "onClick",
      value: function onClick() {
        var player = this.player;

        switch (player.playState) {
          case "ended":
            this.plugin.replay();
            break;

          case "ready":
          case "paused":
            player.play();
            break;

          default:
            player.pause();
            break;
        }
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(PlayPause), "contextTypes", this);
      }
    }]);
    return PlayPause;
  }(Control);

  var CurrentTime = /*#__PURE__*/function (_Component) {
    babelHelpers.inherits(CurrentTime, _Component);

    function CurrentTime(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, CurrentTime);
      _this = _Component.call(this, props, context) || this;
      _this.state.currentTime = _this.player.currentTime;
      _this.state.duration = _this.player.duration;
      return _this;
    }

    babelHelpers.createClass(CurrentTime, [{
      key: "onmediachange",
      value: function onmediachange(event) {
        this.setState({
          currentTime: 0
        });
      }
    }, {
      key: "ontimeupdate",
      value: function ontimeupdate(event) {
        this.setState({
          currentTime: Math.round(event.detail)
        });
      }
    }, {
      key: "onseeking",
      value: function onseeking() {
        this.setState({
          currentTime: Math.round(this.player.currentTime)
        });
      }
    }, {
      key: "ondurationchange",
      value: function ondurationchange(event) {
        this.setState({
          duration: Math.round(event.detail)
        });
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("span", {
          className: "amp-current-time"
        }, Utils.formatTimecode(this.state.currentTime, this.state.duration));
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(CurrentTime), "contextTypes", this);
      }
    }]);
    return CurrentTime;
  }(Component);

  var Live = /*#__PURE__*/function (_Component) {
    babelHelpers.inherits(Live, _Component);

    function Live(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, Live);
      _this = _Component.call(this, props, context) || this;
      _this.state.isLive = true;
      return _this;
    }

    babelHelpers.createClass(Live, [{
      key: "onislive",
      value: function onislive(event) {
        this.setState({
          isLive: event.detail
        });
      }
    }, {
      key: "liveClickHandler",
      value: function liveClickHandler() {
        if (!this.state.isLive) this.player.goLive();
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("span", {
          ref: this.elementNode,
          className: "amp-live-label",
          onClick: this.liveClickHandler.bind(this)
        }, this.getLocalizedString(this.state.isLive ? "LIVE" : "GO_LIVE"));
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(Live), "contextTypes", this);
      }
    }]);
    return Live;
  }(Component);

  var Duration = /*#__PURE__*/function (_Component) {
    babelHelpers.inherits(Duration, _Component);

    function Duration(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, Duration);
      _this = _Component.call(this, props, context) || this;
      _this.state.duration = _this.player.duration;
      return _this;
    }

    babelHelpers.createClass(Duration, [{
      key: "onmediachange",
      value: function onmediachange(event) {
        this.setState({
          duration: Math.round(this.player.duration)
        });
      }
    }, {
      key: "ondurationchange",
      value: function ondurationchange(event) {
        this.setState({
          duration: Math.round(event.detail)
        });
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("span", {
          className: "amp-duration"
        }, Utils.formatTimecode(this.state.duration, this.state.duration));
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(Duration), "contextTypes", this);
      }
    }]);
    return Duration;
  }(Component);

  var Volume = /*#__PURE__*/function (_Slider) {
    babelHelpers.inherits(Volume, _Slider);

    function Volume(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, Volume);
      _this = _Slider.call(this, props, context) || this;

      _this.classList.add("amp-volume", true);

      _this.state.min = 0;
      _this.state.max = 100;
      _this.state.percent = _this.player.volume;
      _this.state.value = _this.player.volume * 100;
      _this.state.altText = "VOLUME";
      _this._open = true;
      _this.timeout = null;

      if (_this.config.volume) {
        _this.direction = _this.config.volume.direction ? _this.config.volume.direction : "";

        if (_this.direction === "vertical") {
          _this.classList.add("amp-vertical");
        }
      }

      Volume.refs.forEach(function (name) {
        return _this[name] = React.createRef();
      });
      return _this;
    }

    babelHelpers.createClass(Volume, [{
      key: "onready",
      value: function onready(event) {
        this.open = this.direction !== "vertical";
        this.classList.update({
          "amp-open": this._open
        });
      }
    }, {
      key: "onseeked",
      value: function onseeked(event) {
        this.open = false;
      }
    }, {
      key: "onmediachange",
      value: function onmediachange(event) {
        this.open = false;
      }
    }, {
      key: "open",
      set: function set(value) {
        if (this.direction == "vertical") {
          this._open = value;
          this.classList.update({
            "amp-open": this._open
          });
        }
      }
    }, {
      key: "format",
      value: function format(value) {
        return Math.round(value);
      }
    }, {
      key: "onvolumechange",
      value: function onvolumechange(event) {
        this.update({
          percent: event.detail
        });
      }
    }, {
      key: "onClick",
      value: function onClick(event) {
        this.move(event);
      }
    }, {
      key: "onChange",
      value: function onChange(value) {
        this.player.volume = value.percent;
      }
    }, {
      key: "onMouseOver",
      value: function onMouseOver(event) {
        this.plugin.dispatchEvent(new akamai.amp.Event("volumemouseover"));
        this.open = true;
        this.player.timers.clearTimeout(this.timeout);
      }
    }, {
      key: "onMouseOut",
      value: function onMouseOut(event) {
        var _this2 = this;

        this.plugin.dispatchEvent(new akamai.amp.Event("volumemouseout"));
        this.player.timers.clearTimeout(this.timeout);
        this.timeout = this.player.timers.setTimeout(function () {
          _this2.open = false;
        }, 350);
      }
    }, {
      key: "onHandleMouseDown",
      value: function onHandleMouseDown(event) {
        event.stopPropagation();
        event.preventDefault();
        this.dragging = true;
        window.addEventListener("mouseup", this.onHandleMouseUp);
        window.addEventListener("mousemove", this.onHandleMouseMove);
        window.addEventListener("touchend", this.onHandleMouseUp);
        window.addEventListener("touchmove", this.onHandleMouseMove, this.options);
      }
    }, {
      key: "render",
      value: function render() {
        if (akamai.amp.Utils.isVolumeSettable() == false) return null;
        babelHelpers.get(babelHelpers.getPrototypeOf(Volume.prototype), "render", this).call(this);
        var percent = "".concat(Utils.round(this.percent * 100, 2), "%");
        var range = "".concat(Utils.round(this.range * 100, 2), "%");
        var vertical = this.direction == "vertical";
        var prop = vertical ? "height" : "width";
        var style = vertical ? {
          bottom: percent
        } : {
          left: percent
        };
        return /*#__PURE__*/React.createElement("div", babelHelpers["extends"]({
          ref: this.elementNode
        }, this.propsList, {
          onMouseMove: this.onMouseMove
        }), vertical && /*#__PURE__*/React.createElement("div", {
          ref: this.panelRef,
          className: "amp-volume-panel"
        }), /*#__PURE__*/React.createElement("div", {
          ref: this.trackNode,
          className: "amp-track"
        }), /*#__PURE__*/React.createElement("div", {
          ref: this.rangeNode,
          className: "amp-range",
          style: babelHelpers.defineProperty({}, prop, range)
        }), /*#__PURE__*/React.createElement("div", {
          ref: this.valueNode,
          className: "amp-value",
          style: babelHelpers.defineProperty({}, prop, percent)
        }), this.children, /*#__PURE__*/React.createElement("div", {
          ref: this.handleNode,
          className: "amp-handle",
          style: style,
          onMouseDown: this.onHandleMouseDown,
          onTouchStart: this.onHandleMouseDown
        }));
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(Volume), "contextTypes", this);
      }
    }, {
      key: "refs",
      get: function get() {
        return ['elementNode', 'trackNode', 'rangeNode', 'valueNode', 'handleNode', 'panelRef'];
      }
    }]);
    return Volume;
  }(Slider);

  var Toggle = /*#__PURE__*/function (_Control) {
    babelHelpers.inherits(Toggle, _Control);

    function Toggle(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, Toggle);
      _this = _Control.call(this, props, context) || this;
      _this.state.toggled = false;
      _this.state.onlabel = "";
      _this.state.offlabel = "";
      return _this;
    }

    babelHelpers.createClass(Toggle, [{
      key: "toggled",
      get: function get() {
        return this.state.toggled;
      },
      set: function set(value) {
        if (value === this.state.toggled) return value;
        this.setState({
          toggled: value
        });
        this.change(value);
      }
    }, {
      key: "propsList",
      get: function get() {
        var props = babelHelpers.get(babelHelpers.getPrototypeOf(Toggle.prototype), "propsList", this);
        props["aria-checked"] = this.state.toggled;
        props["role"] = "switch";
        return props;
      }
    }, {
      key: "toggle",
      value: function toggle() {
        return this.toggled = !this.toggled;
      }
    }, {
      key: "onClick",
      value: function onClick(event) {
        this.toggle();
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(Toggle), "contextTypes", this);
      }
    }]);
    return Toggle;
  }(Control);

  var Mute = /*#__PURE__*/function (_Toggle) {
    babelHelpers.inherits(Mute, _Toggle);

    function Mute(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, Mute);
      _this = _Toggle.call(this, props, context) || this;
      _this.state.level = "";

      _this.classList.add("amp-mute", true);

      _this.state.altText = "MUTE";
      return _this;
    }

    babelHelpers.createClass(Mute, [{
      key: "className",
      get: function get() {
        return "".concat(babelHelpers.get(babelHelpers.getPrototypeOf(Mute.prototype), "className", this), " ").concat(this.state.level);
      }
    }, {
      key: "onChange",
      value: function onChange() {
        var player = this.player;
        player.muted = !player.muted;
      }
    }, {
      key: "onMouseOver",
      value: function onMouseOver(event) {
        this.plugin.dispatchEvent(new akamai.amp.Event("mutemouseover"));
      }
    }, {
      key: "onMouseOut",
      value: function onMouseOut(event) {
        this.plugin.dispatchEvent(new akamai.amp.Event("mutemouseout"));
      }
    }, {
      key: "onvolumechange",
      value: function onvolumechange() {
        var level = "";

        if (this.player.muted) {
          level = "amp-muted";
        } else if (this.player.volume < 0.5) {
          level = "amp-low";
        }

        this.setState({
          level: level
        });
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(Mute), "contextTypes", this);
      }
    }]);
    return Mute;
  }(Toggle);

  var DisplayState$1 = akamai.amp.DisplayState;

  var Fullscreen = /*#__PURE__*/function (_Control) {
    babelHelpers.inherits(Fullscreen, _Control);

    function Fullscreen(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, Fullscreen);
      _this = _Control.call(this, props, context) || this;

      _this.classList.add("amp-fullscreen", true);

      _this.state.altText = "ENTER_FULLSCREEN";
      return _this;
    }

    babelHelpers.createClass(Fullscreen, [{
      key: "onfullscreenchange",
      value: function onfullscreenchange(event) {
        var key = event.detail ? "EXIT_FULLSCREEN" : "ENTER_FULLSCREEN";
        this.setState({
          altText: key
        });
      }
    }, {
      key: "onClick",
      value: function onClick() {
        if (this.player.displayState !== DisplayState$1.FULL_SCREEN) {
          this.player.enterFullScreen();
        } else {
          this.player.exitFullScreen();
        }
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(Fullscreen), "contextTypes", this);
      }
    }]);
    return Fullscreen;
  }(Control);

  var SettingsButton = /*#__PURE__*/function (_PanelControl) {
    babelHelpers.inherits(SettingsButton, _PanelControl);

    function SettingsButton(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, SettingsButton);
      _this = _PanelControl.call(this, props, context) || this;

      _this.classList.add("amp-settings", true);

      _this.state.altText = "SETTINGS";
      return _this;
    }

    babelHelpers.createClass(SettingsButton, null, [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(SettingsButton), "contextTypes", this);
      }
    }]);
    return SettingsButton;
  }(PanelControl);

  var ShareButton = /*#__PURE__*/function (_PanelControl) {
    babelHelpers.inherits(ShareButton, _PanelControl);

    function ShareButton(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, ShareButton);
      _this = _PanelControl.call(this, props, context) || this;

      _this.classList.add("amp-share", true);

      _this.state.altText = "SHARE";
      return _this;
    }

    babelHelpers.createClass(ShareButton, null, [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(ShareButton), "contextTypes", this);
      }
    }]);
    return ShareButton;
  }(PanelControl);

  var CaptionToggleButton = /*#__PURE__*/function (_Toggle) {
    babelHelpers.inherits(CaptionToggleButton, _Toggle);

    function CaptionToggleButton(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, CaptionToggleButton);
      _this = _Toggle.call(this, props, context) || this;

      _this.classList.add("amp-cc");

      _this.state.altText = "CLOSED_CAPTIONING";
      _this.state.toggled = _this.player.captioning ? !_this.player.captioning.hidden : false;
      return _this;
    }

    babelHelpers.createClass(CaptionToggleButton, [{
      key: "onmediachange",
      value: function onmediachange() {
        this.player.timers.setTimeout(this.forceUpdate.bind(this), 1);
      }
    }, {
      key: "onChange",
      value: function onChange(event) {
        this.player.captioning.hidden = !this.player.captioning.hidden;
      }
    }, {
      key: "render",
      value: function render() {
        if (!Utils.componentEnabled(this.plugin, "captioning")) return null;
        return babelHelpers.get(babelHelpers.getPrototypeOf(CaptionToggleButton.prototype), "render", this).call(this);
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(CaptionToggleButton), "contextTypes", this);
      }
    }]);
    return CaptionToggleButton;
  }(Toggle);

  var Airplay = /*#__PURE__*/function (_Control) {
    babelHelpers.inherits(Airplay, _Control);

    function Airplay(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, Airplay);
      _this = _Control.call(this, props, context) || this;
      _this.state.available = false;
      _this.state.playing = false;

      _this.classList.add("amp-airplay", true);

      _this.state.altText = "AIRPLAY";
      return _this;
    }

    babelHelpers.createClass(Airplay, [{
      key: "isAvailable",
      get: function get() {
        return window.WebKitPlaybackTargetAvailabilityEvent != null;
      }
    }, {
      key: "available",
      get: function get() {
        return this.isAvailable && this.state.available;
      }
    }, {
      key: "playing",
      get: function get() {
        return this.state.playing;
      },
      set: function set(value) {
        var container = this.plugin.container;
        this.state.playing = value;
        if (container && container.classList) container.classList.update({
          "amp-playback-target-airplay": value
        });
      }
    }, {
      key: "onready",
      value: function onready(event) {
        var _this2 = this;

        if (this.isAvailable === false) return;
        var video = this.player.mediaElement;
        video.setAttribute("x-webkit-airplay", "allow");
        video.addEventListener("webkitplaybacktargetavailabilitychanged", function (event) {
          _this2.state.available = event.availability == "available";
          _this2.playing = video.webkitCurrentPlaybackTargetIsWireless;

          _this2.forceUpdate();
        });
        video.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", function (event) {
          _this2.playing = video.webkitCurrentPlaybackTargetIsWireless;
        });
        window.addEventListener("webkitcurrentplaybacktargetiswireless", function (event) {
          _this2.playing = video.webkitCurrentPlaybackTargetIsWireless;
        });
      }
    }, {
      key: "onClick",
      value: function onClick() {
        this.player.mediaElement.webkitShowPlaybackTargetPicker();
      }
    }, {
      key: "render",
      value: function render() {
        if (this.available === false) return null;
        return babelHelpers.get(babelHelpers.getPrototypeOf(Airplay.prototype), "render", this).call(this);
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(Airplay), "contextTypes", this);
      }
    }]);
    return Airplay;
  }(Control);

  var DisplayState = akamai.amp.DisplayState;

  var PiP = /*#__PURE__*/function (_Control) {
    babelHelpers.inherits(PiP, _Control);

    function PiP(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, PiP);
      _this = _Control.call(this, props, context) || this;

      _this.classList.add("amp-pip", true);

      _this.state.altText = "PIP";
      return _this;
    }

    babelHelpers.createClass(PiP, [{
      key: "available",
      get: function get() {
        var mediaElement = this.player.mediaElement;
        if (mediaElement == null) return false;else return mediaElement.readyState !== 0 && Utils.isPictureInPictureSupported(mediaElement);
      }
    }, {
      key: "onplaying",
      value: function onplaying(event) {
        this.forceUpdate();
      }
    }, {
      key: "onClick",
      value: function onClick() {
        if (this.player.displayState !== DisplayState.PICTURE_IN_PICTURE) this.player.enterPictureInPicture();else this.player.exitPictureInPicture();
      }
    }, {
      key: "render",
      value: function render() {
        if (!this.available) return null;
        return babelHelpers.get(babelHelpers.getPrototypeOf(PiP.prototype), "render", this).call(this);
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(PiP), "contextTypes", this);
      }
    }]);
    return PiP;
  }(Control);

  var ChromeCast = /*#__PURE__*/function (_Control) {
    babelHelpers.inherits(ChromeCast, _Control);

    function ChromeCast(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, ChromeCast);
      _this = _Control.call(this, props, context) || this;
      _this.state.available = false;

      _this.classList.add("amp-chromecast", true);

      _this.state.altText = "CAST";
      return _this;
    }

    babelHelpers.createClass(ChromeCast, [{
      key: "onready",
      value: function onready() {
        if (!Utils.componentEnabled(this.plugin, "chromecast")) return;
        this.setState({
          available: this.player.chromecast.available
        });
      }
    }, {
      key: "onplaybacktargetavailabilitychange",
      value: function onplaybacktargetavailabilitychange(event) {
        if (event.detail.target === "chromecast") {
          this.setState({
            available: event.detail.available
          });
        }
      }
    }, {
      key: "available",
      get: function get() {
        return this.state.available;
      }
    }, {
      key: "onClick",
      value: function onClick() {
        this.player.chromecast.launch();
      }
    }, {
      key: "render",
      value: function render() {
        if (this.available === false) return null;
        return babelHelpers.get(babelHelpers.getPrototypeOf(ChromeCast.prototype), "render", this).call(this);
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(ChromeCast), "contextTypes", this);
      }
    }]);
    return ChromeCast;
  }(Control);

  var VR = /*#__PURE__*/function (_Control) {
    babelHelpers.inherits(VR, _Control);

    function VR(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, VR);
      _this = _Control.call(this, props, context) || this;
      _this.state.available = false;

      _this.classList.add("amp-vr", true);

      return _this;
    }

    babelHelpers.createClass(VR, [{
      key: "onready",
      value: function onready() {
        if (!Utils.componentEnabled(this.plugin, "aframe")) return;
        this.setState({
          available: this.player.aframe.available
        });
      }
    }, {
      key: "available",
      get: function get() {
        return this.state.available;
      }
    }, {
      key: "onClick",
      value: function onClick() {
        var player = this.player;
        if (player.aframe.displayState !== "vr") player.aframe.enterVR();else player.aframe.exitVR();
      }
    }, {
      key: "render",
      value: function render() {
        if (this.available === false) return null;
        return babelHelpers.get(babelHelpers.getPrototypeOf(VR.prototype), "render", this).call(this);
      }
    }], [{
      key: "contextTypes",
      get: function get() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(VR), "contextTypes", this);
      }
    }]);
    return VR;
  }(Control);

  var Aux = (function (props) {
    return props.children;
  });

  var ControlBar = /*#__PURE__*/function (_React$Component) {
    babelHelpers.inherits(ControlBar, _React$Component);

    function ControlBar(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, ControlBar);
      _this = _React$Component.call(this, props, context) || this;
      ControlBar.refs.forEach(function (name) {
        return _this[name] = React.createRef();
      });
      return _this;
    }

    babelHelpers.createClass(ControlBar, [{
      key: "container",
      get: function get() {
        return this.controls.current;
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(Container, {
          ref: this.controls,
          className: "amp-controls amp-bar amp-bg amp-slide-in-out"
        }, /*#__PURE__*/React.createElement(PlayPause, {
          ref: this.playpause
        }), !this.props.isTouchDevice && /*#__PURE__*/React.createElement(Aux, null, /*#__PURE__*/React.createElement(JumpBack, {
          ref: this.jumpback
        }), /*#__PURE__*/React.createElement(JumpForward, {
          ref: this.jumpforward
        })), /*#__PURE__*/React.createElement("div", {
          ref: this.timeDisplay,
          className: "amp-time-display"
        }, /*#__PURE__*/React.createElement(CurrentTime, {
          ref: this.currentTime
        }), /*#__PURE__*/React.createElement("span", {
          ref: this.timeSeparator,
          className: "amp-time-separator"
        }), /*#__PURE__*/React.createElement(Duration, {
          ref: this.duration
        }), /*#__PURE__*/React.createElement(Live, {
          ref: this.live
        })), /*#__PURE__*/React.createElement(Mute, {
          ref: this.mute
        }), /*#__PURE__*/React.createElement(Volume, {
          ref: this.volume
        }), /*#__PURE__*/React.createElement("div", {
          ref: this.spacerLeft,
          className: "amp-spacer"
        }), /*#__PURE__*/React.createElement("div", {
          ref: this.spacerRight,
          className: "amp-spacer"
        }), /*#__PURE__*/React.createElement(ShareButton, {
          ref: this.share,
          panel: this.props.sharePanel
        }), /*#__PURE__*/React.createElement(CaptionToggleButton, {
          ref: this.cc
        }), /*#__PURE__*/React.createElement(SettingsButton, {
          ref: this.settings,
          panel: this.props.settingsPanel
        }), /*#__PURE__*/React.createElement(PiP, {
          ref: this.pip
        }), /*#__PURE__*/React.createElement(Airplay, {
          ref: this.airplay
        }), /*#__PURE__*/React.createElement(ChromeCast, {
          ref: this.chromecast
        }), /*#__PURE__*/React.createElement(VR, {
          ref: this.vr
        }), /*#__PURE__*/React.createElement(Fullscreen, {
          ref: this.fullscreen
        }));
      }
    }], [{
      key: "refs",
      get: function get() {
        return ['controls', 'playpause', 'jumpback', 'jumpforward', 'currentTime', 'timeSeparator', 'duration', 'live', 'mute', 'volume', 'spacerLeft', 'spacerRight', 'share', 'cc', 'settings', 'pip', 'airplay', 'chromecast', 'vr', 'fullscreen'];
      }
    }]);
    return ControlBar;
  }(React.Component);

  var ReactHint = window.ReactHint;
  var fp = akamai.fp;
  var mode = {
    DEFAULT: "default",
    BLOCKED: "blocked",
    FIXED: "fixed"
  };

  var Hint = /*#__PURE__*/function (_Component) {
    babelHelpers.inherits(Hint, _Component);

    function Hint(props, context) {
      var _this;

      babelHelpers.classCallCheck(this, Hint);
      _this = _Component.call(this, props, context) || this;
      _this.onRenderContent = _this.onRenderContent.bind(babelHelpers.assertThisInitialized(_this));
      _this.state.position = 'top';
      _this.state.mode = props.config.mode || mode.DEFAULT;

      _this.classList.add("amp-hint-component", true);

      _this.hintRef = React.createRef();
      return _this;
    }

    babelHelpers.createClass(Hint, [{
      key: "className",
      get: function get() {
        return 'amp-hint';
      }
    }, {
      key: "mode",
      get: function get() {
        return this.state.mode;
      },
      set: function set(value) {
        this.setMode(value);
      }
    }, {
      key: "hidden",
      get: function get() {
        return this.hintRef.current && this.hintRef.current.state.hidden;
      }
    }, {
      key: "setMode",
      value: function setMode(value) {
        var _this2 = this;

        var classList = {};
        fp.each(mode, function (key) {
          return classList["".concat(_this2.className, "-").concat(key)] = key === value;
        });
        this.classList.update(classList);
        this.setState({
          mode: value
        });
      }
    }, {
      key: "active",
      set: function set(value) {
        var container = this.plugin.container;
        if (container && container.classList) container.classList.update(babelHelpers.defineProperty({}, "".concat(this.className, "-active"), value));
      }
    }, {
      key: "getOffset",
      value: function getOffset(el1, el2) {
        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var rect1 = el1.getBoundingClientRect();
        var rect2 = el2.getBoundingClientRect();
        return {
          right: rect1.right + width - rect2.right,
          left: rect2.left - (rect1.left - width),
          toLeft: rect1.left - width < rect2.left,
          toRight: rect1.right + width > rect2.right
        };
      }
    }, {
      key: "startInterval",
      value: function startInterval() {
        var _this3 = this;

        if (this.intervalId != null) this.stopInterval();
        this.intervalId = setInterval(function () {
          if (_this3.hidden) _this3.stopInterval();
          _this3.active = !_this3.hidden;
        }, 100);
      }
    }, {
      key: "stopInterval",
      value: function stopInterval() {
        clearInterval(this.intervalId);
      }
    }, {
      key: "onRenderContent",
      value: function onRenderContent(target, content) {
        var length = content.length || 0;
        var offset = this.getOffset(target, this.player.container, length * 2);

        var clamp = function clamp(value) {
          return akamai.amp.Utils.clamp(value, 2.5, 8);
        };

        var position = target.getAttribute('data-rh-at') || this.state.position;
        var style = {};

        if (this.state.mode !== mode.FIXED && position === "top") {
          if (offset && offset.toLeft) style['padding-left'] = "".concat(clamp(offset.left * 0.33), "em");
          if (offset && offset.toRight) style['padding-right'] = "".concat(clamp(offset.right * 0.33), "em");
        }

        this.startInterval();
        return /*#__PURE__*/React.createElement("div", {
          className: "".concat(this.className, " ").concat(this.className, "__content"),
          style: style
        }, content);
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          className: this.classList.tokens.join(' ')
        }, /*#__PURE__*/React.createElement(ReactHint, {
          className: "".concat(this.className, "-container"),
          events: true,
          onRenderContent: this.onRenderContent,
          position: this.state.position,
          ref: this.hintRef
        }));
      }
    }]);
    return Hint;
  }(Component);

  var UI = /*#__PURE__*/function (_Component) {
    babelHelpers.inherits(UI, _Component);

    function UI(props) {
      var _this;

      babelHelpers.classCallCheck(this, UI);
      _this = _Component.call(this, props) || this;
      _this.feature = "ui";
      _this.state.playState = "ready";
      _this.state.open = false;
      _this.state.dragging = false;
      _this.state.mode = _this.config.mode;
      _this.isTouchDevice = akamai.amp.Utils.isTouch;
      _this.contextMenuClick = _this.contextMenuClick.bind(babelHelpers.assertThisInitialized(_this));
      _this.autoHide = _this.config.autoHide != null ? _this.config.autoHide : 3;
      _this.timeout = null;
      _this.dispatcher = new akamai.amp.EventDispatcher(babelHelpers.assertThisInitialized(_this));

      _this.bindHandlers(["onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onKeyDown", "onContextMenu", "onClick"]);

      _this._ref = {};
      UI.refs.map(function (name) {
        var key = "".concat(name, "Node");
        _this[key] = React.createRef();
        _this._ref[name] = _this[key];
      });
      return _this;
    }

    babelHelpers.createClass(UI, [{
      key: "addEventListener",
      value: function addEventListener(type, func) {
        this.dispatcher.addEventListener(type, func);
      }
    }, {
      key: "once",
      value: function once(type, func) {
        this.dispatcher.once(type, func);
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        this.dispatcher.dispatchEvent(event);
      }
    }, {
      key: "dispatch",
      value: function dispatch(type, detail) {
        this.dispatcher.dispatch(type, detail);
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(type, func) {
        this.dispatcher.removeEventListener(type, func);
      }
    }, {
      key: "getChildContext",
      value: function getChildContext() {
        return {
          player: this.props.player,
          config: this.props.config,
          plugin: this
        };
      }
    }, {
      key: "locales",
      get: function get() {
        var locales = [Locales];

        if (this.config.locales) {
          locales.push(this.config.locales);
        }

        return locales;
      }
    }, {
      key: "adMode",
      get: function get() {
        return this.config.adMode != null ? this.config.adMode : Mode.AUTO;
      }
    }, {
      key: "debug",
      get: function get() {
        return this.config.debug != null ? this.config.debug : this.player.config.debug;
      }
    }, {
      key: "ads",
      get: function get() {
        return this.ref.ads.current;
      }
    }, {
      key: "container",
      get: function get() {
        return this.ref.container.current;
      }
    }, {
      key: "components",
      get: function get() {
        return this.ref;
      }
    }, {
      key: "controls",
      get: function get() {
        return this.ref.controls.current.container;
      }
    }, {
      key: "progress",
      get: function get() {
        return this.ref.progress.current;
      }
    }, {
      key: "style",
      get: function get() {
        return this.ref.style.current;
      }
    }, {
      key: "settingsPanel",
      get: function get() {
        return this.ref.settingsPanel.current;
      }
    }, {
      key: "volume",
      get: function get() {
        var controls = this.ref.controls.current;
        if (controls == null) return;
        return controls.volume.current;
      }
    }, {
      key: "ref",
      get: function get() {
        return this._ref;
      }
    }, {
      key: "mode",
      get: function get() {
        return this.state.mode || Mode.AUTO;
      },
      set: function set(value) {
        var _this$container$class,
            _this2 = this;

        value = value || Mode.AUTO;
        var mode = this.state.mode;
        this.container.classList.update((_this$container$class = {}, babelHelpers.defineProperty(_this$container$class, "amp-controls-".concat(mode), false), babelHelpers.defineProperty(_this$container$class, "amp-controls-".concat(value), true), _this$container$class));
        this.setState({
          mode: value
        });
        this.ads.controlsMode = value;

        if (value === Mode.AUTO) {
          if (this.idleUtil == null && !this.isTouchDevice) {
            this.idleUtil = IdleUtil.create(this.player.viewComponent, this.autoHide * 1000, this.player.timers);
            this.idleUtil.addEventListener("activechange", function (event) {
              var inactive = _this2.activeState == ActiveState.INACTIVE ? ActiveState.IDLE : ActiveState.INACTIVE;
              _this2.activeState = event.detail.active !== true ? inactive : ActiveState.ACTIVE;
            });
          }

          if (this.idleUtil != null) {
            this.idleUtil.start();
          }
        } else {
          if (this.idleUtil != null) {
            this.idleUtil.stop();
          }
        } // TODO: Remove these when controls plugin is completely removed from amp-web


        this.player.container.classList.remove("amp-controls-".concat(mode));
        this.player.container.classList.add("amp-controls-".concat(value));
      }
    }, {
      key: "dragging",
      get: function get() {
        return this.state.dragging;
      },
      set: function set(value) {
        if (value == true) {
          this.stopIdleTimeout();
        } else {
          this.startIdleTimeout();
        }

        this.container.classList.update(babelHelpers.defineProperty({}, "amp-dragging", value));
        this.setState({
          dragging: value
        });
      }
    }, {
      key: "open",
      get: function get() {
        return this.state.open;
      },
      set: function set(value) {
        this.container.classList.update(babelHelpers.defineProperty({}, "amp-open", value));
        this.setState({
          open: value
        });
      }
    }, {
      key: "theme",
      get: function get() {
        return this.state.theme;
      },
      set: function set(value) {
        if (value == null) {
          this.setState({
            theme: value
          });
          this.style.textContent = "";
          return;
        }

        value = Object.assign({
          text: value.foreground || "#FFFFFF",
          foreground: "#DDDDDD",
          background: "rgba(51, 51, 51, 0.85)"
        }, value);
        this.setState({
          theme: value
        });
        var color = Utils.color;
        var css = Utils.css;
        var shade = Utils.shade;
        color(value.text);
        var fg = color(value.foreground);
        var bg = color(value.background);
        var bgH = shade(bg, 0.1);
        var fgH = shade(fg, 0.1);
        this.style.textContent = "\n    .amp-ui { color: ".concat(value.text, ";}\n    .amp-bg { background-color: ").concat(value.background, ";}\n    .amp-hover:hover { background-color: ").concat(css(bgH), "; }\n    .amp-icon { color: ").concat(value.foreground, "; }\n    .amp-icon:hover { color: ").concat(css(fgH), "; }\n    .amp-slider .amp-handle { background-color: ").concat(css(fg), "; }\n    .amp-slider .amp-handle:hover { background-color: ").concat(css(fgH), "; }\n    .amp-slider .amp-track { background-color: ").concat(css(shade(bg, -0.1)), "; }\n    .amp-slider .amp-range { background-color: ").concat(css(shade(bg, -0.1)), "; }\n    .amp-slider .amp-value { background-color: ").concat(css(shade(bgH, 0.02)), ";}\n    ");
      }
    }, {
      key: "hint",
      get: function get() {
        return this.ref.hint && this.ref.hint.current;
      }
    }, {
      key: "onready",
      value: function onready(event) {
        var _this3 = this;

        if (this.config.mode != null) this.mode = this.config.mode;
        this.container.classList.add("amp-".concat(this.player.mode));
        this.container.classList.update({
          "amp-cc-active": this.player.captioning && !this.player.captioning.hidden,
          "amp-touch": this.isTouchDevice
        });

        if (this.player.captioning != null) {
          this.player.captioning.addEventListener("visibilitychange", this.onvisibilitychange.bind(this));
        }

        this.eventType = window.PointerEvent != null ? "pointer" : "mouse";
        this.player.container.addEventListener("".concat(this.eventType, "enter"), this.onMouseEnter);
        this.player.container.addEventListener("".concat(this.eventType, "leave"), this.onMouseLeave);

        if (this.config.theme) {
          this.theme = this.config.theme;
        } // Workaround for UI flicker and FOUT


        this.player.timers.setTimeout(function () {
          _this3.container.element.style.display = "block";
        }, 10);
      }
    }, {
      key: "onvisibilitychange",
      value: function onvisibilitychange(event) {
        this.container.classList.update({
          "amp-cc-active": event.detail
        });
      }
    }, {
      key: "onplaybacktargetchange",
      value: function onplaybacktargetchange(event) {
        this.container.classList.update({
          "amp-remote-playback": event.detail.value != "amp"
        });
      }
    }, {
      key: "onmediachange",
      value: function onmediachange(event) {
        var media = this.player.media;
        this.container.classList.update({
          "amp-audio": media.medium == "audio"
        });
        this.container.classList.update({
          "amp-text-tracks": media.tracks && media.tracks.length
        });
      }
    }, {
      key: "onmutemouseover",
      value: function onmutemouseover(event) {
        this.stopIdleTimeout();
        this.volume.open = true;
      }
    }, {
      key: "onmutemouseout",
      value: function onmutemouseout(event) {
        var _this4 = this;

        this.stopIdleTimeout();
        this.timeout = this.player.timers.setTimeout(function () {
          _this4.volume.open = false;
        }, 350);
      }
    }, {
      key: "onvolumemouseover",
      value: function onvolumemouseover(event) {
        this.stopIdleTimeout();
      }
    }, {
      key: "onfullscreenchange",
      value: function onfullscreenchange(event) {
        this.container.classList.update({
          "amp-full-screen": event.detail
        });
      }
    }, {
      key: "onmutechange",
      value: function onmutechange(event) {
        this.container.classList.update({
          "amp-muted": event.detail
        });
      }
    }, {
      key: "onplaystatechange",
      value: function onplaystatechange(event) {
        var _updates;

        var updates = (_updates = {}, babelHelpers.defineProperty(_updates, "amp-waiting", false), babelHelpers.defineProperty(_updates, "amp-".concat(event.detail.previous), false), babelHelpers.defineProperty(_updates, "amp-".concat(event.detail.value), true), _updates);
        this.container.classList.update(updates);
      }
    }, {
      key: "oncanplaythrough",
      value: function oncanplaythrough(event) {
        this.container.classList.update({
          "amp-can-play": true
        });
      }
    }, {
      key: "onplaying",
      value: function onplaying(event) {
        this.container.classList.update({
          "amp-waiting": false
        });
        this.container.classList.remove("amp-qualitychange-manual");
        this.container.classList.remove("amp-qualitychange-auto");
        this.startIdleTimeout();
      }
    }, {
      key: "onpause",
      value: function onpause(event) {
        this.stopIdleTimeout();
      }
    }, {
      key: "onwaiting",
      value: function onwaiting(event) {
        var _this5 = this;

        this.container.classList.update({
          "amp-waiting": true
        });
        this.player.once("timeupdate", function () {
          if (_this5.player.seeking === false) {
            _this5.container.classList.update({
              "amp-waiting": false
            });
          }
        });
      }
    }, {
      key: "onbusy",
      value: function onbusy(event) {
        this.container.classList.update({
          "amp-busy": event.detail
        });
      }
    }, {
      key: "onseeking",
      value: function onseeking(event) {
        this.container.classList.update({
          "amp-waiting": true
        });
      }
    }, {
      key: "onseeked",
      value: function onseeked(event) {
        this.container.classList.update({
          "amp-waiting": false
        });
      }
    }, {
      key: "onerror",
      value: function onerror(event) {
        this.container.classList.update({
          "amp-error": true
        });
      }
    }, {
      key: "onislive",
      value: function onislive(event) {
        this.container.classList.update({
          "amp-is-live": event.detail
        });
      }
    }, {
      key: "ontemporaltypechange",
      value: function ontemporaltypechange(event) {
        var _updates2;

        var updates = (_updates2 = {}, babelHelpers.defineProperty(_updates2, "amp-".concat(event.detail.previous), false), babelHelpers.defineProperty(_updates2, "amp-".concat(event.detail.value), true), _updates2);
        this.container.classList.update(updates);
      }
    }, {
      key: "onqualitychanging",
      value: function onqualitychanging(event) {
        this.container.classList.add("amp-qualitychange-".concat(this.player.qualityMode));
      }
    }, {
      key: "onqualitychange",
      value: function onqualitychange(event) {
        this.container.classList.remove("amp-qualitychange-".concat(this.player.qualityMode));
      }
    }, {
      key: "onqualityswitched",
      value: function onqualityswitched(event) {
        this.onqualitychange(event);
      }
    }, {
      key: "onautoplayblocked",
      value: function onautoplayblocked(event) {
        this.container.classList.update({
          "amp-waiting": false
        });
      }
    }, {
      key: "togglePlayPause",
      value: function togglePlayPause() {
        if (this.player.playState == "ready" || this.player.paused) {
          this.player.play();
        } else {
          this.player.pause();
        }
      }
    }, {
      key: "activeState",
      get: function get() {
        switch (true) {
          case this.container.classList.contains("amp-active"):
            return ActiveState.ACTIVE;

          case this.container.classList.contains("amp-inactive"):
            return ActiveState.INACTIVE;

          default:
            return ActiveState.IDLE;
        }
      },
      set: function set(value) {
        if (!this.isTouchDevice && this.player.displayState != akamai.amp.DisplayState.FULL_SCREEN && value != ActiveState.ACTIVE && this.player.mouseOver) return;
        var active = value == ActiveState.ACTIVE;
        var inactive = value == ActiveState.INACTIVE;
        var idle = value == ActiveState.IDLE;
        this.container.classList.update({
          "amp-active": active,
          "amp-inactive": inactive,
          "amp-idle": idle
        }); // TODO: Remove these when controls plugin is completely removed from amp-web

        var action = active ? "add" : "remove";
        this.player.container.classList[action]("amp-active");
        action = inactive ? "add" : "remove";
        this.player.container.classList[action]("amp-inactive");

        if (inactive === true) {
          for (var key in this.ref) {
            var ref = this.ref[key];

            if (ref != null && ref.current instanceof Panel && ref.current.open === true) {
              ref.current.open = false;
            }
          }

          this.startIdleTimeout();
        }
      }
    }, {
      key: "adInProgress",
      get: function get() {
        return this.player.ads && this.player.ads.inProgress;
      }
    }, {
      key: "startIdleTimeout",
      value: function startIdleTimeout() {
        var _this6 = this;

        if (this.settingsPanel.open) {
          this.settingsPanel.close();
          this.volume.open = false;
        }

        this.stopIdleTimeout();
        this.timeout = this.player.timers.setTimeout(function () {
          _this6.activeState = ActiveState.IDLE;
        }, this.autoHide * 1000);
      }
    }, {
      key: "stopIdleTimeout",
      value: function stopIdleTimeout() {
        this.player.timers.clearTimeout(this.timeout);
      }
    }, {
      key: "isNotMouseEvent",
      value: function isNotMouseEvent(event) {
        return event.pointerType == null && this.isTouchDevice || event.pointerType != null && event.pointerType != "mouse";
      }
    }, {
      key: "onMouseEnter",
      value: function onMouseEnter(event) {
        if (this.isNotMouseEvent(event)) return;
        this.stopIdleTimeout();
        this.activeState = ActiveState.ACTIVE;
      }
    }, {
      key: "onMouseLeave",
      value: function onMouseLeave(event) {
        var _this7 = this;

        if (this.isNotMouseEvent(event)) return;
        var element = document.elementFromPoint(event.clientX, event.clientY);
        if (this.player.playState == "ready" || this.open || this.player.container.contains(element)) return;

        if (this.dragging) {
          var handler = function handler() {
            window.removeEventListener("mouseup", handler);
            if (!akamai.amp.Utils.isMouseOverElement(_this7.container.element)) _this7.onMouseLeave(event);
          };

          window.addEventListener("mouseup", handler);
          return;
        }

        this.player.timers.setTimeout(function () {
          return _this7.activeState = ActiveState.INACTIVE;
        }, 0);
      }
    }, {
      key: "onClick",
      value: function onClick() {
        if (this.isTouchDevice && this.mode !== "none") {
          if (this.activeState == ActiveState.ACTIVE) {
            this.activeState = ActiveState.IDLE;
            this.stopIdleTimeout();
          } else {
            this.activeState = ActiveState.ACTIVE;
            this.startIdleTimeout();
          }
        } else {
          this.togglePlayPause();
        }
      }
    }, {
      key: "isFocused",
      value: function isFocused(element) {
        var container = this.container.element;
        return element == container || container.contains(element);
      }
    }, {
      key: "onFocus",
      value: function onFocus(event) {
        var focused = this.isFocused(event.target);
        this.focused = event.target.nodeName != "BUTTON" && focused;
        if (focused) this.onMouseEnter(event);
      }
    }, {
      key: "onBlur",
      value: function onBlur(event) {
        var focused = this.isFocused(event.target);
        this.focused = event.target.nodeName != "BUTTON" && focused;
        if (!focused) this.onMouseLeave(event);
      }
    }, {
      key: "onKeyDown",
      value: function onKeyDown(event) {
        switch (event.keyCode) {
          case 77:
            // M
            this.player.muted = !this.player.muted;
            break;

          case 67:
            // C
            this.player.captioning.hidden = !this.player.captioning.hidden;
            break;

          case 70:
            // F
            this.player.displayState == this.player.displayState == 'full-screen' ? this.player.exitFullScreen() : this.player.enterFullScreen();
            break;
        }

        if (this.focused == false) return;

        switch (event.keyCode) {
          case 13: // Enter

          case 32:
            // Space
            this.togglePlayPause();
            break;

          case 39: // Left

          case 37:
            // Right
            if (this.volume.focused === false) this.progress.onKeyDown(event);
            break;

          case 38: // Up

          case 40:
            // Down
            if (this.progress.focused === false) this.volume.onKeyDown(event);
            break;
        }
      }
    }, {
      key: "contextMenuClick",
      value: function contextMenuClick(event) {
        if (/selectable/.test(event.target.className)) return false;
        this.removeContextMenu(event);
        return false;
      }
    }, {
      key: "removeContextMenu",
      value: function removeContextMenu(event) {
        document.body.removeEventListener("click", this.contextMenuClick);
        var parent = document.body;
        parent.removeChild(this.contextMenu);
        this.contextMenu = null;
      }
    }, {
      key: "onContextMenu",
      value: function onContextMenu(event) {
        if (this.debug === true) return;
        event.preventDefault();
        var parent = document.body;
        var contextMenu = /*#__PURE__*/React.createElement(ContextMenu, {
          player: this.player,
          x: event.pageX,
          y: event.pageY
        });
        if (this.contextMenu != null) this.removeContextMenu();
        this.contextMenu = document.createElement("div");
        parent.appendChild(this.contextMenu);
        document.body.addEventListener("click", this.contextMenuClick);
        ReactDOM.render(contextMenu, this.contextMenu);
      }
    }, {
      key: "replay",
      value: function replay() {
        this.player.replay();
      }
    }, {
      key: "render",
      value: function render() {
        var classList = ["amp-react", "amp-ui", "amp-ready", "amp-active"];
        if (this.isTouchDevice) classList.push('amp-mobile');
        return /*#__PURE__*/React.createElement(Container, {
          ref: this.ref.container,
          style: {
            display: "none"
          },
          classList: classList,
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          onKeyDown: this.onKeyDown,
          onContextMenu: this.onContextMenu
        }, this.config.hint && this.config.hint.enabled !== false ? /*#__PURE__*/React.createElement(Hint, {
          config: this.config.hint,
          ref: this.ref.hint
        }) : null, /*#__PURE__*/React.createElement("div", {
          className: "amp-interactive",
          onClick: this.onClick
        }), /*#__PURE__*/React.createElement(Poster, {
          ref: this.ref.poster
        }), /*#__PURE__*/React.createElement(Title, {
          ref: this.ref.title
        }), /*#__PURE__*/React.createElement(Ads, {
          ref: this.ref.ads
        }), this.isTouchDevice ? /*#__PURE__*/React.createElement(Aux, null, /*#__PURE__*/React.createElement(JumpBack, {
          ref: this.ref.jumpbackOverlay
        }), /*#__PURE__*/React.createElement(PauseOverlay, {
          ref: this.ref.playpauseOverlay
        }), /*#__PURE__*/React.createElement(JumpForward, {
          ref: this.ref.jumpforwardOverlay
        })) : /*#__PURE__*/React.createElement(PauseOverlay, {
          ref: this.ref.pauseOverlay
        }), /*#__PURE__*/React.createElement(Unmute, {
          "data-rh-at": "left",
          ref: this.ref.unmute
        }), /*#__PURE__*/React.createElement(BufferingOverlay, {
          ref: this.ref.bufferingOverlay
        }), /*#__PURE__*/React.createElement(Progress, {
          ref: this.ref.progress
        }), /*#__PURE__*/React.createElement(ControlBar, {
          ref: this.ref.controls,
          isTouchDevice: this.isTouchDevice,
          sharePanel: this.ref.sharePanel,
          settingsPanel: this.ref.settingsPanel
        }), /*#__PURE__*/React.createElement(SharePanel, {
          ref: this.ref.sharePanel
        }), /*#__PURE__*/React.createElement(SettingsPanel, {
          ref: this.ref.settingsPanel
        }), /*#__PURE__*/React.createElement(Auth, {
          ref: this.ref.auth
        }), /*#__PURE__*/React.createElement(ErrorMsg, {
          ref: this.ref.error
        }), this.state.contextMenu, /*#__PURE__*/React.createElement("style", {
          ref: this.ref.style
        }));
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.idleUtil != null) this.idleUtil.destroy();
        this.dispatcher.destroy();
        this.player.container.removeEventListener("".concat(this.eventType, "enter"), this.onMouseEnter);
        this.player.container.removeEventListener("".concat(this.eventType, "leave"), this.onMouseLeave);
        ReactDOM.unmountComponentAtNode(this.player.container);
      }
    }], [{
      key: "refs",
      get: function get() {
        return ['ads', 'container', 'poster', 'title', 'hint', 'jumpbackOverlay', 'playpauseOverlay', 'jumpforwardOverlay', 'pauseOverlay', 'unmute', 'bufferingOverlay', 'progress', 'controls', 'sharePanel', 'settingsPanel', 'auth', 'error', 'style'];
      }
    }, {
      key: "childContextTypes",
      get: function get() {
        return {
          player: PropTypes.object,
          config: PropTypes.object,
          plugin: PropTypes.object
        };
      }
    }, {
      key: "create",
      value: function create(player, config, key) {
        if (config["native"] === true) {
          var ui = {
            config: config
          };
          player.once("ready", function () {
            return player.mediaElement.controls = true;
          });

          if (player.ads != null) {
            ui.ads = {
              container: document.createElement("div")
            };
            player.container.appendChild(ui.ads.container);
          }

          return Promise.resolve(ui);
        }

        return new Promise(function (resolve, reject) {
          var ui = ReactDOM.render( /*#__PURE__*/React.createElement(UI, {
            player: player,
            config: config
          }), player.container);
          player.adContainer = ui.ads.container;
          resolve(ui);
        });
      }
    }]);
    return UI;
  }(Component);

  akamai.amp.AMP.registerPlugin("react", ["html", "flash", "external"], UI.create);

  exports.ClassList = ClassList;
  exports.Component = Component;
  exports.Container = Container;
  exports.HintMode = mode;
  exports.ListItem = ListItem;
  exports.Mode = Mode;
  exports.Panel = Panel;
  exports.PanelControl = PanelControl;
  exports.PanelMenu = PanelMenu;
  exports.UI = UI;
  exports.Utils = Utils;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
