this.akamai = this.akamai || {};
this.akamai.amp = this.akamai.amp || {};
this.akamai.amp.googleanalytics = (function (exports) {
    'use strict';

    var fp$1 = akamai.fp;

    var AnalyticsStrategy = /*#__PURE__*/function () {
      function AnalyticsStrategy(config, plugin) {
        babelHelpers.classCallCheck(this, AnalyticsStrategy);
        this.config = config;
        this.plugin = plugin;
      }

      babelHelpers.createClass(AnalyticsStrategy, [{
        key: "data",
        get: function get() {
          return this.plugin.data;
        }
      }, {
        key: "viewDuration",
        get: function get() {
          return this.plugin.viewDuration || 0;
        }
      }, {
        key: "getMetadata",
        value: function getMetadata(name) {
          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'video';
          var events = this.data.events && this.data.events[type];
          if (events == null || name == null) return;
          return fp$1.find(events, fp$1.filter(function (event) {
            return event && event.type == name;
          }), fp$1.map(function (event) {
            return event.data || event.detail;
          }));
        }
        /**
         * @override
         */

      }, {
        key: "trackEvent",
        value: function trackEvent(event, type) {}
        /**
         * @override
         */

      }, {
        key: "generateGoogleAnalyticsVO",
        value: function generateGoogleAnalyticsVO() {}
      }]);
      return AnalyticsStrategy;
    }();

    var UniversalAnalytics = /*#__PURE__*/function (_AnalyticsStrategy) {
      babelHelpers.inherits(UniversalAnalytics, _AnalyticsStrategy);

      function UniversalAnalytics(config, plugin) {
        var _this;

        babelHelpers.classCallCheck(this, UniversalAnalytics);
        _this = _AnalyticsStrategy.call(this, config, plugin) || this;
        ga('create', _this.config.trackingId, 'auto');
        if (_this.data.disablePageView !== true) ga('send', 'pageview');
        return _this;
      }

      babelHelpers.createClass(UniversalAnalytics, [{
        key: "generateGoogleAnalyticsVO",
        value: function generateGoogleAnalyticsVO(eventName) {
          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "video";
          var data = babelHelpers.get(babelHelpers.getPrototypeOf(UniversalAnalytics.prototype), "getMetadata", this).call(this, eventName, type);
          var vo = {};

          for (var key in data) {
            var value = data[key];

            if (key === "customDimension") {
              var cdim = new Object();

              for (var dim in value) {
                var dimValue = value[dim];
                if (dimValue === "viewDuration") dimValue = this.viewDuration;
                ga("set", dim, dimValue);
                cdim[dim] = dimValue;
              }

              value = cdim;
            }

            vo[key.toLowerCase()] = value;
          }

          return vo;
        }
      }, {
        key: "trackEvent",
        value: function trackEvent(eventName) {
          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "video";
          var obj = this.generateGoogleAnalyticsVO(eventName, type);
          if (obj == null) return;
          if (this.data.nonInteraction !== false) ga('set', 'nonInteraction', true);
          ga("send", "event", obj.eventcategory, obj.eventaction, obj.eventlabel, obj.eventvalue);
          if (obj.customdimension == null) return;

          for (var dim in obj.customdimension) {
            // TODO: Why is this being set to null? "set" is called in the VO function with a non-null value
            ga("set", dim, null);
          }
        }
      }]);
      return UniversalAnalytics;
    }(AnalyticsStrategy);

    var fp = akamai.fp;
    var universalAnalyticsMap = new Map([['eventAction', 'event_action'], ['eventCategory', 'event_category'], ['eventLabel', 'event_label'], ['eventValue', 'value'], ['nonInteraction', 'non_interaction']]);

    var GlobalSiteTag = /*#__PURE__*/function (_AnalyticsStrategy) {
      babelHelpers.inherits(GlobalSiteTag, _AnalyticsStrategy);

      function GlobalSiteTag(config, plugin) {
        var _this;

        babelHelpers.classCallCheck(this, GlobalSiteTag);
        _this = _AnalyticsStrategy.call(this, config, plugin) || this;
        window.dataLayer = window.dataLayer || [];

        window.gtag = function () {
          dataLayer.push(arguments);
        };

        gtag('js', new Date());
        gtag('config', _this.config.trackingId, {
          'send_page_view': _this.data.disablePageView !== true
        });
        return _this;
      }

      babelHelpers.createClass(GlobalSiteTag, [{
        key: "generateGoogleAnalyticsVO",
        value: function generateGoogleAnalyticsVO(eventName, type) {
          var _this2 = this;

          var data = babelHelpers.get(babelHelpers.getPrototypeOf(GlobalSiteTag.prototype), "getMetadata", this).call(this, eventName, type);
          var vo = {};

          for (var key in data) {
            var param = universalAnalyticsMap.get(key) || key;
            var value = data[key];
            if (value == null) continue;
            vo[param] = value;

            if (key === "customDimension") {
              fp.each(value, function (dim, key) {
                if (dim === "viewDuration") vo[key] = _this2.viewDuration;else vo[key] = dim;
              });
            }
          }

          return vo;
        }
      }, {
        key: "trackEvent",
        value: function trackEvent(eventName) {
          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "video";
          var obj = this.generateGoogleAnalyticsVO(eventName, type);
          if (obj == null) return;
          if (this.data.nonInteraction !== false) obj['non_interaction'] = true; // Sends the event to the Google Analytics property with
          // tracking ID GA_MEASUREMENT_ID set by the config command in
          // the global tracking snippet.

          gtag('event', eventName, obj);
        }
      }]);
      return GlobalSiteTag;
    }(AnalyticsStrategy);

    var GoogleAnalyticsManager = /*#__PURE__*/function () {
      function GoogleAnalyticsManager(manager) {
        babelHelpers.classCallCheck(this, GoogleAnalyticsManager);
        this.manager = manager;
      }

      babelHelpers.createClass(GoogleAnalyticsManager, [{
        key: "track",
        value: function track(name, type) {
          this.manager && this.manager.trackEvent(name, type);
        }
      }], [{
        key: "create",
        value: function create(config, plugin) {
          var manager;
          if (config.mode === 'gtag') manager = new GlobalSiteTag(config, plugin);else manager = new UniversalAnalytics(config, plugin);
          return new GoogleAnalyticsManager(manager);
        }
      }]);
      return GoogleAnalyticsManager;
    }();

    var GoogleAnalytics = /*#__PURE__*/function (_akamai$amp$Plugin) {
      babelHelpers.inherits(GoogleAnalytics, _akamai$amp$Plugin);

      function GoogleAnalytics(player, config) {
        var _this;

        babelHelpers.classCallCheck(this, GoogleAnalytics);
        _this = _akamai$amp$Plugin.call(this, player, config) || this;
        _this.manager = GoogleAnalyticsManager.create(config, babelHelpers.assertThisInitialized(_this));
        return _this;
      }

      babelHelpers.createClass(GoogleAnalytics, [{
        key: "trackEvent",
        value: function trackEvent(eventName) {
          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "video";
          this.manager.track(eventName, type);
        }
      }, {
        key: "onready",
        value: function onready() {
          this.bindHandlers(["onadstarted", "onadended"]);
          this.player.addEventListener("adstarted", this.onadstarted);
          this.player.addEventListener("adended", this.onadended);
        }
      }, {
        key: "onstarted",
        value: function onstarted() {
          this.started = true;
          this.currentTime = 0;
          this.viewDuration = 0;
          this.manager.track("started");
        }
      }, {
        key: "onended",
        value: function onended() {
          if (this.started === false) return;
          this.started = false;
          this.manager.track("ended");
        }
      }, {
        key: "ontimeupdate",
        value: function ontimeupdate(event) {
          var currentTime = Math.round(event.detail);

          if (currentTime > this.currentTime) {
            this.viewDuration++;
            this.currentTime = currentTime;
          }
        }
      }, {
        key: "onadstarted",
        value: function onadstarted() {
          this.manager.track("started", "ads");
        }
      }, {
        key: "onadended",
        value: function onadended() {
          this.manager.track("ended", "ads");
        }
      }]);
      return GoogleAnalytics;
    }(akamai.amp.Plugin);

    akamai.amp.AMP.registerPlugin("googleanalytics", akamai.amp.Plugin.createFactory(GoogleAnalytics));

    exports.GoogleAnalytics = GoogleAnalytics;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
