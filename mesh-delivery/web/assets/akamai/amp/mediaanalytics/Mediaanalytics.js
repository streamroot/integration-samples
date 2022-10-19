this.akamai = this.akamai || {};
this.akamai.amp = this.akamai.amp || {};
this.akamai.amp.mediaanalytics = (function (exports) {
  'use strict';

  var MediaAnalytics = /*#__PURE__*/function (_akamai$amp$Plugin) {
    babelHelpers.inherits(MediaAnalytics, _akamai$amp$Plugin);

    function MediaAnalytics(player, config) {
      var _this;

      babelHelpers.classCallCheck(this, MediaAnalytics);
      _this = _akamai$amp$Plugin.call(this, player, config) || this;
      _this.sdk = new JS_AkamaiMediaAnalytics(config.config);

      _this.sdk.disableLocation();

      if (config.iplookup === false) {
        _this.sdk.disableServerIPLookUp();
      }

      _this.initialized = false;
      return _this;
    }

    babelHelpers.createClass(MediaAnalytics, [{
      key: "dimensions",
      get: function get() {
        return this.getDimensions();
      },
      set: function set(value) {
        return this.setDimensions(value);
      }
    }, {
      key: "setDimensions",
      value: function setDimensions(value) {
        if (value != null) {
          this._dimensions = akamai.amp.Utils.override(value, this._dimensions);
        } else {
          this._dimensions = this.config.dimensions;
        }

        return this._dimensions;
      }
    }, {
      key: "getDimensions",
      value: function getDimensions() {
        return this._dimensions || {};
      }
    }, {
      key: "addDimensions",
      value: function addDimensions(value) {
        var dimensions = this.config.dimensions;

        for (var key in value) {
          var val = value[key];

          if (val != null) {
            dimensions[key] = val;
          }
        }

        this.applyDimensions(dimensions);
        return value;
      }
    }, {
      key: "applyDimension",
      value: function applyDimension(key, value) {
        var data = this.player.evaluateBindings(value);
        if (data instanceof Array) data = data.toString();

        try {
          this.sdk.setData(key, data);
        } catch (error) {
          this.logger.error("[AMP MEDIA ANALYTICS ERROR]\", \"Could not set dimension ".concat(key, ": ").concat(data), error);
        }
      }
    }, {
      key: "applyDimensions",
      value: function applyDimensions(dimensions) {
        try {
          for (var key in dimensions) {
            this.applyDimension(key, dimensions[key]);
          }
        } catch (error) {
          this.logger.error("[AMP MEDIA ANALYTICS ERROR]", "Could not set dimensions:", error);
        }
      }
    }, {
      key: "onready",
      value: function onready(event) {
        this.dimensions = this.config.dimensions;
        this.player.addEventListener("adbreakstart", this.onadbreakstart.bind(this));
        this.player.addEventListener("adbreakend", this.onadbreakend.bind(this));
        this.player.addEventListener("adloaded", this.onadloaded.bind(this));
        this.player.addEventListener("adstarted", this.onadstarted.bind(this));
        this.player.addEventListener("adended", this.onadended.bind(this));
        this.player.addEventListener("adskipped", this.onadbreakskipped.bind(this));
        this.player.addEventListener("aderror", this.onaderror.bind(this));
        this.player.addEventListener("adfirstquartile", this.onadfirstquartile.bind(this));
        this.player.addEventListener("admidpoint", this.onadmidpoint.bind(this));
        this.player.addEventListener("adthirdquartile", this.onadthirdquartile.bind(this));
        this.player.addEventListener("authorized", this.onauthorized.bind(this));
      }
    }, {
      key: "onplayrequest",
      value: function onplayrequest(event) {
        var _this2 = this;

        if (this.initialized == false) {
          var akamaiCallbacks = {
            getStreamHeadPosition: function getStreamHeadPosition() {
              return _this2.player.currentTime || 0;
            }
          };
          this.logger.log("[AMP MA EVENT] - handleSessionInit");
          this.sdk.handleSessionInit(akamaiCallbacks);
          this.initialized = true;
        }
      }
    }, {
      key: "onmediasequenceended",
      value: function onmediasequenceended(event) {
        this.logger.log("[AMP MA EVENT] - handlePlayEnd (ended)");
        this.sdk.handlePlayEnd();
      }
    }, {
      key: "onmediasequenceaborted",
      value: function onmediasequenceaborted(event) {
        this.logger.log("[AMP MA EVENT] - handlePlayEnd (abort)");
        this.sdk.handlePlayEnd();
      }
    }, {
      key: "onplaying",
      value: function onplaying(event) {
        if (this.player.ads != null && this.player.ads.inProgress) return;
        this.logger.log("[AMP MA EVENT] - handlePlaying");
        this.sdk.handlePlaying();
      }
    }, {
      key: "onmediachange",
      value: function onmediachange(event) {
        var media = event.detail;
        var deliveryType = media.isLive ? 'L' : 'O';
        var dimensions = media.mediaanalytics || {};
        this.dimensions = null;
        this.initialized = false;
        this.logger.log("[AMP MA EVENT] - setStreamURL", media.src);
        this.sdk.setStreamURL(media.src, false);
        var viewerId = this.config.viewerId || this.config.viewerID || this.config["std:viewerId"];

        if (viewerId != null) {
          this.sdk.setViewerId(viewerId);
        }

        this.dimensions = akamai.amp.Utils.override(dimensions, {
          deliveryType: deliveryType
        });
        this.applyDimensions(this.dimensions);
      }
    }, {
      key: "ondurationchange",
      value: function ondurationchange(event) {
        var contentLength = event.detail ? event.detail.toFixed() : 0;
        this.dimensions = {
          contentLength: contentLength
        };
        this.applyDimensions(this.dimensions);
        this.logger.log("[AMP MA EVENT] - setStreamDuration", event.detail);
        this.sdk.setStreamDuration(event.detail);
      }
    }, {
      key: "updateMedia",
      value: function updateMedia(media) {
        this.logger.log("[AMP MA EVENT] - handleTitleSwitch");
        this.sdk.handleTitleSwitch(media);
      }
    }, {
      key: "onfragmentloadstart",
      value: function onfragmentloadstart(event) {
        if (typeof fragmentDownloadStarted === "function") {
          fragmentDownloadStarted(event.detail);
        }
      }
    }, {
      key: "onauthorized",
      value: function onauthorized(event) {
        var detail = event.detail;
        var dimensions = {};

        if (detail.viewerId) {
          dimensions.viewerId = detail.viewerId;
          dimensions["std:viewerId"] = detail.viewerId;
        }

        if (detail.idps && detail.idps.name) {
          dimensions.mvpdName = detail.idps.name;
        }

        if (!Object.values(dimensions).some(function (item) {
          return item != null;
        })) return;
        this.addDimensions(dimensions);
      }
    }, {
      key: "onadbreakstart",
      value: function onadbreakstart() {
        this.player.mediaElement.dataset.isad = true;
      }
    }, {
      key: "onadbreakend",
      value: function onadbreakend() {
        this.player.mediaElement.dataset.isad = false;
      }
    }, {
      key: "onadloaded",
      value: function onadloaded(event) {
        try {
          var adVO = event.data;
          var adObject = {
            adTitle: adVO.title,
            adDuration: adVO.duration,
            adPartnerId: adVO.partner,
            adId: adVO.id
          };
          this.logger.log("[AMP MA EVENT] - handleAdLoaded");
          this.sdk.handleAdLoaded(adObject);
        } catch (error) {
          this.logger.error("[AMP MEDIA ANALYTICS ERROR]", error);
        }
      }
    }, {
      key: "onadstarted",
      value: function onadstarted() {
        this.logger.log("[AMP MA EVENT] - handleAdStarted");
        this.sdk.handleAdStarted();
      }
    }, {
      key: "onadbreakskipped",
      value: function onadbreakskipped() {
        this.logger.log("[AMP MA EVENT] - handleAdSkipped");
        this.sdk.handleAdSkipped();
      }
    }, {
      key: "onaderror",
      value: function onaderror(event) {
        this.logger.log("[AMP MA EVENT] - handleAdError");
        this.sdk.handleAdError(event);
      }
    }, {
      key: "onadfirstquartile",
      value: function onadfirstquartile() {
        this.logger.log("[AMP MA EVENT] - handleAdFirstQuartile");
        this.sdk.handleAdFirstQuartile();
      }
    }, {
      key: "onadmidpoint",
      value: function onadmidpoint() {
        this.logger.log("[AMP MA EVENT] - handleAdMidPoint");
        this.sdk.handleAdMidPoint();
      }
    }, {
      key: "onadthirdquartile",
      value: function onadthirdquartile() {
        this.logger.log("[AMP MA EVENT] - handleAdThirdQuartile");
        this.sdk.handleAdThirdQuartile();
      }
    }, {
      key: "onadended",
      value: function onadended() {
        this.logger.log("[AMP MA EVENT] - handleAdComplete");
        this.sdk.handleAdComplete();
      }
    }, {
      key: "onpause",
      value: function onpause() {
        this.logger.log("[AMP MA EVENT] - handlePause");
        this.sdk.handlePause();
      }
    }, {
      key: "onseeking",
      value: function onseeking() {
        if (this.player.currentTime > 0.1 || this.player.currentTime === 0) {
          this.sdk.handleSeekStart();
          this.logger.log("[AMP MA EVENT] - handleSeekStart");
        }
      }
    }, {
      key: "onseeked",
      value: function onseeked() {
        if (this.player.currentTime > 0.1 || this.player.currentTime === 0) {
          this.sdk.handleSeekEnd();
          this.logger.log("[AMP MA EVENT] - handleSeekEnd");
        }
      }
    }, {
      key: "onerror",
      value: function onerror(event) {
        var error = event.detail || {};
        var msg = error.message || error.toString();
        this.logger.log("[AMP MA EVENT] - handleError", msg);
        this.sdk.handleError(msg);
      }
    }, {
      key: "onbufferingchange",
      value: function onbufferingchange(event) {
        this.logger.log("[AMP MA EVENT] - handleBufferStart", event.detail);
        if (event.detail === true) this.sdk.handleBufferStart();else this.sdk.handleBufferEnd();
      }
    }, {
      key: "onqualitychange",
      value: function onqualitychange(event) {
        this.logger.log("[AMP MA EVENT] - handleBitRateSwitch", event.data.bitrate);
        this.sdk.handleBitRateSwitch(event.data.bitrate);
      }
    }]);
    return MediaAnalytics;
  }(akamai.amp.Plugin);

  akamai.amp.AMP.registerPlugin("mediaanalytics", akamai.amp.Plugin.createFactory(MediaAnalytics));

  exports.MediaAnalytics = MediaAnalytics;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
