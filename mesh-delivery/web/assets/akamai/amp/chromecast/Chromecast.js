this.akamai = this.akamai || {};
this.akamai.amp = this.akamai.amp || {};
this.akamai.amp.chromecast = (function (exports) {
  'use strict';

  var ChromecastConstants = /*#__PURE__*/function () {
    function ChromecastConstants() {
      babelHelpers.classCallCheck(this, ChromecastConstants);
    }

    babelHelpers.createClass(ChromecastConstants, null, [{
      key: "ID",
      get: function get() {
        return "chromecast";
      }
    }, {
      key: "CHANNEL_ID",
      get: function get() {
        return "urn:x-cast:com.akamai.amp.cast";
      }
    }, {
      key: "APPLICATION_ID",
      get: function get() {
        return "CC1AD845";
      }
    }, {
      key: "SUPPORTED_TYPES",
      get: function get() {
        return [akamai.amp.Utils.mimeTypes.m3u8, akamai.amp.Utils.mimeTypes.mp4, akamai.amp.Utils.mimeTypes.mpd, akamai.amp.Utils.mimeTypes.ism, akamai.amp.Utils.mimeTypes.webm, akamai.amp.Utils.mimeTypes.mp3];
      }
    }, {
      key: "KEY_SYSTEM",
      get: function get() {
        return {
          'com.microsoft.playready': 'playready',
          'com.widevine.alpha': 'widevine',
          'default': 'none'
        };
      }
    }, {
      key: "SENDER_STATES",
      get: function get() {
        return {
          SESSION_STARTING: 'amp-remote-connecting',
          SESSION_STARTED: 'amp-remote-connected',
          SESSION_START_FAILED: 'amp-remote-failed',
          SESSION_RESUMED: 'amp-remote-connected'
        };
      }
    }, {
      key: "PRESET_FONT_FAMILY",
      get: function get() {
        return {
          proportionalSansSerif: "SANS_SERIF",
          monospacedSansSerif: "MONOSPACED_SANS_SERIF",
          proportionalSerif: "SERIF",
          monospacedSerif: "MONOSPACED_SERIF",
          casual: "CASUAL",
          cursive: "CURSIVE",
          smallCapitals: "SMALL_CAPITALS"
        };
      }
    }, {
      key: "PRESET_FONT_SIZE",
      get: function get() {
        return {
          smallest: 0.5,
          small: 0.75,
          medium: 1,
          large: 1.5,
          largest: 2
        };
      }
    }, {
      key: "PRESET_EDGE_TYPE",
      get: function get() {
        return {
          raised: "RAISED",
          uniform: "OUTLINE",
          depressed: "DEPRESSED",
          none: "NONE",
          leftShadow: "DROP_SHADOW",
          rightShadow: "DROP_SHADOW"
        };
      }
    }, {
      key: "CAST_CAPTION_TYPE",
      get: function get() {
        return {
          'text/cea-608': 'text/cea608',
          'text/vtt': 'text/vtt',
          'application/ttml+xml': "application/ttml+xml"
        };
      }
    }]);
    return ChromecastConstants;
  }();

  var Utils = /*#__PURE__*/function () {
    function Utils() {
      babelHelpers.classCallCheck(this, Utils);
    }

    babelHelpers.createClass(Utils, null, [{
      key: "createTextTrackStyle",
      value: function createTextTrackStyle(_settings) {
        var settingsMap = {
          fontFamily: 'fontFamily',
          fontSize: 'fontScale',
          edgeType: 'edgeType',
          fontColor: 'foregroundColor',
          backgroundColor: 'backgroundColor',
          edgeColor: 'edgeColor',
          windowColor: 'windowColor'
        };
        var textTrackStyle = new chrome.cast.media.TextTrackStyle();
        var settings = _settings;
        var presets = _settings.presets;

        for (var key in settings) {
          var prop = settingsMap[key];

          if (prop) {
            var element = settings[key];

            switch (prop) {
              case 'fontFamily':
                var font = ChromecastConstants.PRESET_FONT_FAMILY[element];
                textTrackStyle.fontFamily = font;
                textTrackStyle.fontGenericFamily = font;
                break;

              case 'fontScale':
                var size = ChromecastConstants.PRESET_FONT_SIZE[element];
                textTrackStyle.fontScale = size;
                break;

              case 'edgeType':
                var edgeType = ChromecastConstants.PRESET_EDGE_TYPE[element];
                textTrackStyle.edgeType = edgeType;
                textTrackStyle.windowType = chrome.cast.media.TextTrackWindowType.NORMAL;
                break;

              case 'foregroundColor':
              case 'backgroundColor':
              case 'edgeColor':
              case 'windowColor':
                var _key = key.replace(/color/i, 'Opacity');

                var rgb = presets.color.hasOwnProperty(element) ? presets.color[element] : element;
                var alpha = settings[_key];
                textTrackStyle[prop] = this.rgbToHex(rgb, alpha);
                break;
            }
          }
        }

        return textTrackStyle;
      }
    }, {
      key: "rgbToHex",
      value: function rgbToHex(rgb) {
        var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0%';
        var hex = rgb.replace(/[^\d,]/g, "").split(",");
        var opacity = parseInt(alpha.replace('%', ''));
        var _alpha = "01";
        if (!Number.isNaN(opacity) && 0 < opacity) _alpha = parseInt((255 * opacity / 100).toFixed(0)).toString(16);
        return "#".concat(((1 << 24) + (+hex[0] << 16) + (+hex[1] << 8) + +hex[2]).toString(16).slice(1)).concat(_alpha);
      }
    }, {
      key: "createMetadata",
      value: function createMetadata(media) {
        var metadata = new chrome.cast.media.GenericMediaMetadata();
        metadata.title = media.title;
        metadata.subtitle = media.description;
        metadata.image = [new chrome.cast.Image(media.poster)];
        metadata.releaseDate = media.pubDate && media.pubDate.toISOString ? media.pubDate.toISOString() : null;
        return metadata;
      }
    }, {
      key: "createTrack",
      value: function createTrack() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var value = arguments.length > 1 ? arguments[1] : undefined;
        var track = new chrome.cast.media.Track(index, chrome.cast.media.TrackType.TEXT);
        track.subtype = chrome.cast.media.TextTrackType.CAPTIONS;
        track.name = "".concat(value.srclang, " Captions");
        track.language = value.srclang;
        track.customData = value;
        track.trackContentId = value.src;
        track.trackContentType = ChromecastConstants.CAST_CAPTION_TYPE[value.type] || value.type;
        return track;
      }
    }]);
    return Utils;
  }();

  var AmpCafSenderCaptioning = /*#__PURE__*/function (_akamai$amp$EventDisp) {
    babelHelpers.inherits(AmpCafSenderCaptioning, _akamai$amp$EventDisp);

    function AmpCafSenderCaptioning(player) {
      var _this;

      babelHelpers.classCallCheck(this, AmpCafSenderCaptioning);
      _this = _akamai$amp$EventDisp.call(this) || this;
      _this.player = player.player;
      _this.plugin = player.plugin;
      _this._hidden = _this.player.captioning.hidden;
      _this._tracks = [];
      _this.onEditTracksInfoSuccess = _this.onEditTracksInfoSuccess.bind(babelHelpers.assertThisInitialized(_this));
      _this.onEditTracksInfoError = _this.onEditTracksInfoError.bind(babelHelpers.assertThisInitialized(_this));
      _this.textTrackStyle;
      _this.track = _this.selectTrack();
      if (!_this.hidden) _this.selectTrackByLanguage(_this.track.language);
      return _this;
    }

    babelHelpers.createClass(AmpCafSenderCaptioning, [{
      key: "tracks",
      get: function get() {
        var mediaSession = this.plugin.mediaSession;

        if (mediaSession == null || mediaSession.media == null || mediaSession.media.tracks == null) {
          return [];
        }

        return mediaSession.media.tracks.filter(function (track) {
          return track.subtype == chrome.cast.media.TextTrackType.CAPTIONS ? track : null;
        });
      }
    }, {
      key: "track",
      get: function get() {
        return this._track || {};
      },
      set: function set(value) {
        this._track = value;
      }
    }, {
      key: "hidden",
      get: function get() {
        return this._hidden;
      },
      set: function set(value) {
        if (value) this.requestEditTracksInfo([]);else this.requestEditTracksInfo([this.track.trackId]);
        this.dispatch("visibilitychange", !value);
        this._hidden = value;
        return this._hidden;
      }
    }, {
      key: "onEditTracksInfoSuccess",
      value: function onEditTracksInfoSuccess(event) {}
    }, {
      key: "onEditTracksInfoError",
      value: function onEditTracksInfoError(event) {}
    }, {
      key: "selectTrackByLanguage",
      value: function selectTrackByLanguage(lang) {
        var track = this.tracks.filter(function (track) {
          return track.language === lang;
        })[0];

        if (track != null) {
          this.track = track;
          var activeTrackIds = [this.track.trackId];
          this.requestEditTracksInfo(activeTrackIds);
        }

        return track;
      }
    }, {
      key: "changeSettings",
      value: function changeSettings(setting) {
        if (setting == null) return;
        this.player.captioning.changeSettings(setting);
        if (!this.hidden) this.requestEditTracksInfo([this.track.trackId], Utils.createTextTrackStyle(this.player.captioning.settings));
      }
    }, {
      key: "selectTrack",
      value: function selectTrack() {
        var active = this.player.captioning.track;
        var tracks = [];
        if (active && this.tracks) tracks = this.tracks.filter(function (track) {
          return track.language === active.language;
        });
        return tracks.length ? tracks.shift() : {};
      }
    }, {
      key: "requestEditTracksInfo",
      value: function requestEditTracksInfo(activeTrackIds) {
        var textTrackStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Utils.createTextTrackStyle(this.player.captioning.settings);
        var tracksInfoRequest = new chrome.cast.media.EditTracksInfoRequest(activeTrackIds, textTrackStyle);
        this.plugin.mediaSession.editTracksInfo(tracksInfoRequest, this.onEditTracksInfoSuccess, this.onEditTracksInfoError);
      }
    }, {
      key: "onvisibilitychange",
      value: function onvisibilitychange(event) {
        var visible = event.detail;
        this.player.captioning.changeSettings({
          visible: visible
        });
      }
    }]);
    return AmpCafSenderCaptioning;
  }(akamai.amp.EventDispatcher);

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var PreviewTrack = akamai.amp.PreviewTrack;
  var LIVE_SEEKABLE_THRESHOLD = 10;

  var AmpCafSender = /*#__PURE__*/function (_akamai$amp$EventDisp) {
    babelHelpers.inherits(AmpCafSender, _akamai$amp$EventDisp);

    function AmpCafSender(plugin) {
      var _this;

      babelHelpers.classCallCheck(this, AmpCafSender);
      _this = _akamai$amp$EventDisp.call(this) || this;
      cast.framework.setLoggerLevel(plugin.debug ? cast.framework.LoggerLevel.DEBUG : cast.framework.LoggerLevel.NONE);
      _this.player = plugin.player;
      _this.config = akamai.amp.Utils.clone(_this.player.config);
      _this.plugin = plugin;
      _this.state = {
        playState: akamai.amp.PlayState.READY,
        waiting: false,
        seeking: false
      };
      _this.onRemotePlayerChange = _this.onRemotePlayerChange.bind(babelHelpers.assertThisInitialized(_this));
      _this.onMediaSession = _this.onMediaSession.bind(babelHelpers.assertThisInitialized(_this));

      _this.onMediaSession();

      _this.plugin.castSession.addEventListener(cast.framework.SessionEventType.MEDIA_SESSION, _this.onMediaSession);

      _this.createElements();

      _this.loadPlugins().then(function () {
        _this.dispatch(akamai.amp.Events.READY);

        _this.dispatch(akamai.amp.Events.MEDIA_CHANGE, _this.media);

        _this.dispatch(akamai.amp.Events.DURATION_CHANGE, _this.duration || 0);

        _this.dispatch(akamai.amp.Events.CAN_PLAY_THROUGH);
      });

      _this.previewTracks = _this.player.previewTracks;
      return _this;
    }

    babelHelpers.createClass(AmpCafSender, [{
      key: "createElements",
      value: function createElements() {
        this.container = document.createElement("div");
        this.container.className = "amp-chromecast-sender";
        this.player.container.appendChild(this.container);
        this.message = document.createElement("div");
        this.message.className = "amp-chromecast-sender-msg";
        var element = document.createElement("div");
        element.className = "amp-chromecast-sender-text";
        element.innerHTML = this.getLocalizedString("MSG_CHROMECAST_MESSAGE", {
          device: this.plugin.castSession.getCastDevice().friendlyName
        });
        this.message.appendChild(element);
        this.player.container.appendChild(this.message);
      }
    }, {
      key: "loadPlugins",
      value: function loadPlugins() {
        var _this2 = this;

        this.chromecast = {
          available: true,
          launch: function launch() {
            return _this2.plugin.launch();
          }
        };

        if (this.player.captioning != null) {
          this.captioning = new AmpCafSenderCaptioning(this);
        }

        this.localization = {
          getLanguageString: function getLanguageString(lang) {
            return _this2.player.localization.getLanguageString(lang);
          },
          getString: function getString(key) {
            return _this2.player.localization.getString(key);
          }
        };
        this.player.mode;
        var key = "react";
        var def = akamai.amp.AMP.plugins[key];
        var config = this.config.plugins.react;
        config.mode = akamai.amp.react.Mode.PERSISTENT;

        if (def == null) {
          throw new Error("[AMP] Plugin could not be found: ".concat(key));
        }

        return def(this, config, key).then(function (plugin) {
          _this2[key] = plugin;

          if (plugin.feature != null) {
            _this2[plugin.feature] = plugin;
          }

          plugin.container.classList.add("amp-remote-playback");

          _this2.logger.log("[AMP] Plugin registered: ".concat(key));
        })["catch"](function (error) {
          return _this2.logger.error(error);
        });
      }
    }, {
      key: "onRemotePlayerChange",
      value: function onRemotePlayerChange(event) {
        var _this3 = this;

        this.logger.log("[AMP CHROMECAST EVENT]", event.field, event.value);
        cast.framework.RemotePlayerEventType;
        var amp = akamai.amp.Events;
        var value = event.value;

        switch (event.field) {
          case "liveSeekableRange":
            if (value != null) this.duration = value.end;
            break;

          case "mediaInfo":
            if (this.state.media == null && value != null) {
              this.state.media = value;
              this.playState = this.remotePlaybackState;

              if (value.customData && value.customData.media) {
                var media = value.customData.media;
                this.duration = value.duration;
                this.dispatch(akamai.amp.Events.TEMPORAL_TYPE_CHANGE, media.temporalType);

                if (media.temporalType === "live") {
                  this.dispatch(akamai.amp.Events.IS_LIVE, media.isLive);
                  this.updateComponentState("amp-live", media.isLive);
                }

                if (this.previewTracks) this.addPreviewTrack(media.track);
              }

              this.dispatch(akamai.amp.Events.MEDIA_CHANGE, value);
            } else if (value == null) {
              this.state.media = null;
            }

            break;

          case "isMediaLoaded":
            if (value === false) {
              this.playState = akamai.amp.PlayState.ENDED;
            }

            break;

          case "currentTime":
            this.playState = this.remotePlaybackState;

            if (this.media.temporalType === 'dvr' && value >= this.duration) {
              var _this$getLiveSeekable;

              this.duration = (_this$getLiveSeekable = this.getLiveSeekableRange()) === null || _this$getLiveSeekable === void 0 ? void 0 : _this$getLiveSeekable.end;
            } else if (value < this.duration - LIVE_SEEKABLE_THRESHOLD * 2) {
              this.dispatch(akamai.amp.Events.IS_LIVE, false);
            }

            if (this.seeking === true) {
              this.dispatch(akamai.amp.Events.CAN_PLAY_THROUGH);
              this.dispatch(akamai.amp.Events.SEEKED);
              this.state.seeking = false;
            }

            if (this.waiting === true) {
              this.waiting = false;
            }

            this.dispatch(amp.TIME_UPDATE, this.currentTime);
            break;

          case "duration":
            this.playState = this.remotePlaybackState;
            this.dispatch(amp.DURATION_CHANGE, this.duration);
            break;

          case "volumeLevel":
            this.dispatch(amp.VOLUME_CHANGE, this.volume);
            break;

          case "isMuted":
            this.dispatch(amp.VOLUME_CHANGE, value ? 0 : this.volume);
            this.dispatch(amp.MUTE_CHANGE, this.muted);
            break;

          case "playerState":
            var state = null;

            switch (value) {
              case chrome.cast.media.PlayerState.PLAYING:
                state = akamai.amp.PlayState.PLAYING;
                break;

              case chrome.cast.media.PlayerState.PAUSED:
                state = akamai.amp.PlayState.PAUSED;
                break;

              case chrome.cast.media.PlayerState.BUFFERING:
                this.waiting = true;
                break;
            }

            if (state) {
              this.playState = state;
            }

            break;

          case "savedPlayerState":
            var _event$value = event.value,
                _event$value$currentT = _event$value.currentTime,
                currentTime = _event$value$currentT === void 0 ? 0 : _event$value$currentT,
                isPaused = _event$value.isPaused;
            this.player.play().then(function () {
              return _this3.player.seek(currentTime).then(function () {
                return isPaused && _this3.player.pause();
              });
            });
            break;
        }

        this.dispatch(event);
      }
    }, {
      key: "onMediaSession",
      value: function onMediaSession(event) {
        this.logger.log("[AMP CHROMECAST EVENT]", event);

        if (this.remotePlayerController != null) {
          this.remotePlayerController.removeEventListener(cast.framework.RemotePlayerEventType.ANY_CHANGE, this.onRemotePlayerChange);
        }

        this.remotePlayer = new cast.framework.RemotePlayer();
        this.remotePlayerController = new cast.framework.RemotePlayerController(this.remotePlayer);
        this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.ANY_CHANGE, this.onRemotePlayerChange);
        this.dispatch(event);
      }
    }, {
      key: "updateComponentState",
      value: function updateComponentState(state, value) {
        var plugin = this.ui;
        if (!plugin.container) return;
        if (value) plugin.container.classList.add(state);else plugin.container.classList.remove(state);
      }
      /**
       *
       */

    }, {
      key: "evaluateBindings",
      value: function evaluateBindings(value, context) {
        var data = {
          media: this.media,
          player: {
            mode: "html5"
          },
          now: Date.now()
        };
        return akamai.amp.DataBinding.evaluateBindings(value, akamai.amp.Utils.override(data, context));
      }
    }, {
      key: "context",
      get: function get() {
        var _this$plugin$castCont;

        return (_this$plugin$castCont = this.plugin.castContext) !== null && _this$plugin$castCont !== void 0 ? _this$plugin$castCont : cast.framework.CastContext.getInstance();
      }
    }, {
      key: "timers",
      get: function get() {
        return this.plugin.timers;
      }
    }, {
      key: "mediaElement",
      get: function get() {
        return {};
      }
    }, {
      key: "logger",
      get: function get() {
        return this.plugin.logger;
      }
    }, {
      key: "currentTime",
      get: function get() {
        return this.remotePlayer.currentTime;
      },
      set: function set(value) {
        if (value == this.state.currentTime) {
          return;
        }

        this.state.seeking = true;
        this.state.currentTime = value;
        this.remotePlayer.currentTime = value;
        if (this.paused === false) this.dispatch(akamai.amp.Events.SEEKING);
        this.remotePlayerController.seek();
      }
    }, {
      key: "duration",
      get: function get() {
        if (this.media.temporalType === "dvr") return this._duration || 0;
        return this.remotePlayer.duration;
      },
      set: function set(value) {
        if (value == null || this._duration == value) return;
        this._duration = value;
        this.dispatch(akamai.amp.Events.DURATION_CHANGE, value);
      }
    }, {
      key: "autoplay",
      get: function get() {
        return true;
      },
      set: function set(value) {}
    }, {
      key: "media",
      get: function get() {
        var session = this.plugin.mediaSession;
        return session != null && session.media.customData != null ? session.media.customData.media : this.player.media;
      },
      set: function set(value) {
        this.plugin.load(this.player.defaultMediaTransform(value));
      }
    }, {
      key: "volume",
      get: function get() {
        return this.remotePlayer.volumeLevel;
      },
      set: function set(value) {
        this.remotePlayer.volumeLevel = value;
        this.remotePlayerController.setVolumeLevel();
      }
    }, {
      key: "muted",
      get: function get() {
        return this.remotePlayer.isMuted;
      },
      set: function set(value) {
        this.remotePlayerController.muteOrUnmute();
      }
    }, {
      key: "playbackRate",
      get: function get() {
        return 1;
      },
      set: function set(value) {}
    }, {
      key: "waiting",
      get: function get() {
        return this.state.waiting;
      },
      set: function set(value) {
        if (value == this.state.waiting) {
          return;
        }

        this.state.waiting = value;

        if (value) {
          this.dispatch(akamai.amp.Events.WAITING);
        }
      }
    }, {
      key: "seeking",
      get: function get() {
        return this.state.seeking;
      }
    }, {
      key: "paused",
      get: function get() {
        return this.remotePlayer.isPaused;
      }
    }, {
      key: "ended",
      get: function get() {
        return false;
      }
    }, {
      key: "quality",
      get: function get() {
        return 0;
      },
      set: function set(value) {
        return;
      }
    }, {
      key: "qualityMode",
      get: function get() {
        return "auto";
      }
    }, {
      key: "qualityLevels",
      get: function get() {
        return [];
      }
    }, {
      key: "audioTracks",
      get: function get() {
        return [];
      }
    }, {
      key: "playState",
      get: function get() {
        return this.state.playState;
      },
      set: function set(value) {
        var previous = this.state.playState;

        if (value == previous) {
          return;
        }

        this.state.playState = value;
        this.dispatch(akamai.amp.Events.PLAY_STATE_CHANGE, {
          previous: previous,
          value: value
        });

        switch (value) {
          case akamai.amp.PlayState.PLAYING:
            this.dispatch(akamai.amp.Events.PLAYING);
            break;

          case akamai.amp.PlayState.PAUSED:
            this.dispatch(akamai.amp.Events.PAUSE);
            break;

          case akamai.amp.PlayState.ENDED:
            this.dispatch(akamai.amp.Events.ENDED);
            break;
        }
      }
    }, {
      key: "previewTracks",
      get: function get() {
        return this.getPreviewTracks();
      },
      set: function set(value) {
        return this.setPreviewTracks(value);
      }
    }, {
      key: "viewComponent",
      get: function get() {
        return this.container;
      }
    }, {
      key: "settings",
      get: function get() {
        return this.player.settings;
      }
    }, {
      key: "remotePlaybackState",
      get: function get() {
        return this.remotePlayer && this.remotePlayer.playerState.toLowerCase();
      }
    }, {
      key: "play",
      value: function play() {
        this.remotePlayerController.playOrPause();
      }
    }, {
      key: "pause",
      value: function pause() {
        this.remotePlayerController.playOrPause();
      }
    }, {
      key: "goLive",
      value: function goLive() {
        this.currentTime = this.getLiveSeekableRange().end - LIVE_SEEKABLE_THRESHOLD; // Seeks to the live edge

        this.dispatch(akamai.amp.Events.IS_LIVE, true);
      }
      /**
       * 
       * @returns chrome.cast.media.LiveSeekableRange 
       */

    }, {
      key: "getLiveSeekableRange",
      value: function getLiveSeekableRange() {
        var defaults = {
          end: 0,
          start: 0
        };
        var session = this.context.getCurrentSession();
        if (session == null) return; // Contains information about the playing media including currentTime.

        var mediaStatus = session.getMediaSession();
        if (mediaStatus == null) return;
        return _objectSpread(_objectSpread({}, defaults), mediaStatus.getEstimatedLiveSeekableRange());
      }
    }, {
      key: "getLocalizedString",
      value: function getLocalizedString(value, context) {
        return this.player.getLocalizedString(value, context);
      }
    }, {
      key: "getPreviewTracks",
      value: function getPreviewTracks() {
        return this._previewTracks;
      }
    }, {
      key: "setPreviewTracks",
      value: function setPreviewTracks(value) {
        this._previewTracks = value;
      }
    }, {
      key: "addPreviewTrack",
      value: function addPreviewTrack() {
        var _this4 = this;

        var tracks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        var clean = function clean(track) {
          _this4.previewTracks.remove(track);

          return track;
        };

        var exists = function exists(track) {
          return track.kind === "preview" || track.kind === "thumbnail";
        };

        var load = function load(track) {
          return _this4.previewTracks.add(track);
        };

        var create = function create(track) {
          return new PreviewTrack(track);
        };

        tracks.filter(exists).map(create).map(clean).map(load);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.remotePlayerController != null) {
          this.remotePlayerController.removeEventListener(cast.framework.RemotePlayerEventType.ANY_CHANGE, this.onRemotePlayerChange);
        }

        this.plugin.castSession.removeEventListener(cast.framework.SessionEventType.MEDIA_SESSION, this.onMediaSession);
        this.player.container.removeChild(this.container);
        this.player.container.removeChild(this.message);
      }
    }]);
    return AmpCafSender;
  }(akamai.amp.EventDispatcher);

  var Locales = {
    en: {
      MSG_CHROMECAST_MESSAGE: "Video playing on ${device}"
    },
    es: {
      MSG_CHROMECAST_MESSAGE: "Contenido se está reproduciendo en ${device}"
    },
    fr: {
      MSG_CHROMECAST_MESSAGE: "Lecture de vidéo sur ${device}"
    }
  };

  var fp = akamai.fp;

  var Chromecast = /*#__PURE__*/function (_akamai$amp$Plugin) {
    babelHelpers.inherits(Chromecast, _akamai$amp$Plugin);

    function Chromecast(player, config) {
      var _this;

      babelHelpers.classCallCheck(this, Chromecast);
      _this = _akamai$amp$Plugin.call(this, player, config) || this;
      _this._available = false;
      _this.timers = akamai.amp.Utils.timerGroup("chromecast");
      return _this;
    }

    babelHelpers.createClass(Chromecast, [{
      key: "onready",
      value: function onready() {
        this.bindHandlers(["onCastApiAvailable", "onCastStateChanged", "onSessionStateChanged", "onMediaSession", "onCastApiFound"]);
        window['__onGCastApiAvailable'] = this.onCastApiAvailable;
        document.addEventListener("castApiFound", this.onCastApiFound);
        this.player.loadResources(this.config.sdk);
        if (window['__gCastApiAvailable'] == null) return;
        this.onCastApiAvailable(window['__gCastApiAvailable']);
        this.setAvailable(this.castState !== cast.framework.CastState.NO_DEVICES_AVAILABLE);
      }
    }, {
      key: "available",
      get: function get() {
        return this._available;
      }
    }, {
      key: "namespace",
      get: function get() {
        return "akamai_amp_cast";
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
      key: "castState",
      get: function get() {
        return this.getCastState();
      },
      set: function set(value) {
        this.setCastState(value);
      }
    }, {
      key: "getCastState",
      value: function getCastState() {
        return this._castState || cast.framework.CastState.NOT_CONNECTED;
      }
    }, {
      key: "setCastState",
      value: function setCastState(value) {
        this._castState = value;
      }
    }, {
      key: "session",
      get: function get() {
        return this.getSession();
      },
      set: function set(value) {
        this.setSession(value);
      }
    }, {
      key: "getSession",
      value: function getSession() {
        var data = {};

        try {
          data = localStorage.getItem(this.namespace);
          if (data != null) data = JSON.parse(data);
        } catch (error) {
          data = this._session;
        }

        return data;
      }
    }, {
      key: "setSession",
      value: function setSession(value) {
        try {
          localStorage.setItem(this.namespace, JSON.stringify(value));
        } catch (error) {
          this._session = JSON.stringify(value);
        }
      }
    }, {
      key: "setAvailable",
      value: function setAvailable(value) {
        if (value === this._available) return;
        this._available = value;
        this.player.dispatch(akamai.amp.Events.PLAYBACK_TARGET_AVAILABILITY_CHANGE, {
          target: ChromecastConstants.ID,
          available: value
        });
      }
    }, {
      key: "onCastApiFound",
      value: function onCastApiFound(event) {
        var available = event.detail.available;
        if (!(available && 'cast' in chrome)) return;
        this.castContext = cast.framework.CastContext.getInstance();
        this.castContext.addEventListener(cast.framework.CastContextEventType.CAST_STATE_CHANGED, this.onCastStateChanged);
        this.castContext.addEventListener(cast.framework.CastContextEventType.SESSION_STATE_CHANGED, this.onSessionStateChanged);
        this.castContext.setOptions({
          receiverApplicationId: this.config.applicationId,
          autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
        });
      }
    }, {
      key: "onCastApiAvailable",
      value: function onCastApiAvailable(isAvailable) {
        if (!isAvailable) {
          return;
        }

        var event = new CustomEvent("castApiFound", {
          detail: {
            target: ChromecastConstants.ID,
            available: isAvailable
          }
        });
        document.dispatchEvent(event);
        window['__gCastApiAvailable'] = isAvailable;
      }
    }, {
      key: "onCastStateChanged",
      value: function onCastStateChanged(event) {
        this.setAvailable(event.castState !== cast.framework.CastState.NO_DEVICES_AVAILABLE);
        this.dispatch(event);
      }
    }, {
      key: "onSessionStateChanged",
      value: function onSessionStateChanged(event) {
        var _this2 = this;

        var mediaSession = null;

        switch (event.sessionState) {
          case cast.framework.SessionState.SESSION_STARTING:
            this.player.pause();
            this.player.busy = true;
            break;

          case cast.framework.SessionState.SESSION_RESUMED:
            var media = this.player.media;
            this.player.busy = true;
            this.castSession = event.session;
            this.resumeSession(this.castSession, media);
            this.player.busy = false;
            break;

          case cast.framework.SessionState.SESSION_STARTED:
            this.castSession = event.session;
            this.castSession.addEventListener(cast.framework.SessionEventType.MEDIA_SESSION, this.onMediaSession);

            if (this.castSession.getMediaSession() == null && this.castState === cast.framework.CastState.CONNECTING) {
              this.load(this.player.media, this.player.currentTime).then(function () {
                _this2.castState = cast.framework.CastState.CONNECTED;
              });
            }

            break;

          case cast.framework.SessionState.SESSION_ENDED:
            mediaSession = event.session.getMediaSession();

            if (mediaSession != null) {
              this.player.currentTime = event.session.getMediaSession().currentTime;
            }

            if (this.castState !== cast.framework.CastState.CONNECTING) this.castState = cast.framework.CastState.NOT_CONNECTED;
            this.player.playbackTarget = "amp";
            break;
        }

        this.dispatch(event);
        this.setSessionState(event.sessionState);
      }
    }, {
      key: "resumeSession",
      value: function resumeSession(session, media) {
        var _this3 = this;

        var mediaSession = session.getMediaSession();

        var shouldLoadMedia = function shouldLoadMedia(session) {
          var sessionId = session.getSessionId();
          return _this3.castState === cast.framework.CastState.CONNECTING || _this3.session && sessionId == _this3.session.id;
        };

        if (media == null) return; //Android does not preserve mediaSession, therefore content is loaded in order to create a new mediaSession

        if (mediaSession == null && shouldLoadMedia(this.castSession)) {
          if (this.castState !== cast.framework.CastState.CONNECTING && !this.canResumeMedia(media, this.session.contentId)) return;
          this.load(media, this.player.currentTime).then(function () {
            var session = _this3.castContext.getCurrentSession();

            mediaSession = session.getMediaSession();
            _this3.castState = cast.framework.CastState.CONNECTED;
            _this3.session = {
              id: _this3.castSession.getSessionId(),
              contentId: mediaSession.media.contentId
            };

            _this3.resumeMediaSession(mediaSession, media);
          });
        } else if (mediaSession != null) this.resumeMediaSession(mediaSession, media);
      }
    }, {
      key: "resumeMediaSession",
      value: function resumeMediaSession(mediaSession, media) {
        var contentId = mediaSession && mediaSession.media ? mediaSession.media.contentId : "";
        if (this.canResumeMedia(media, contentId)) this.onMediaSession({
          mediaSession: mediaSession
        }, this.castSession.getSessionState());else this.onMediaSession({
          mediaSession: mediaSession
        });
      }
    }, {
      key: "canResumeMedia",
      value: function canResumeMedia(media, contentId) {
        var source = this.selectSource(media);
        return source && source.src == contentId;
      }
    }, {
      key: "selectSource",
      value: function selectSource(value) {
        var media = Object.assign({}, value);

        var exists = function exists(element) {
          return element != null;
        };

        var canPlay = function canPlay(media) {
          return ChromecastConstants.SUPPORTED_TYPES.includes(media.type) ? "maybe" : "";
        };

        var select = function select(media) {
          return akamai.amp.Utils.selectSource(media, canPlay);
        };

        var source = fp.transform([media], fp.filter(exists), fp.filter(canPlay)).shift();
        if (source == null && 'source' in media) source = fp.transform([media], fp.map(select)).shift();
        return source;
      }
    }, {
      key: "onMediaSession",
      value: function onMediaSession(event, sessionState) {
        var isSessionResuming = cast.framework.SessionState.SESSION_RESUMED === sessionState;
        var isRequestingSession = isSessionResuming || this.castState === cast.framework.CastState.CONNECTING || this.loadingMedia;

        if (isRequestingSession !== true) {
          this.player.busy = false;
          return;
        }

        this.mediaSession = event.mediaSession;
        this.player.playbackTarget = ChromecastConstants.ID;
        this.dispatch(event);
      }
    }, {
      key: "onplaybacktargetchange",
      value: function onplaybacktargetchange(event) {
        if (event.detail.value === ChromecastConstants.ID) this.sender = new AmpCafSender(this);else if (this.sender != null) this.sender.destroy();
        this.player.busy = false;
      }
    }, {
      key: "launch",
      value: function launch() {
        var _this4 = this;

        this.castState = cast.framework.CastState.CONNECTING;
        this.castContext.requestSession()["catch"](function (error) {
          if (error != "cancel") _this4.logger.error(error);
        });
      }
    }, {
      key: "load",
      value: function load(data) {
        var _this5 = this;

        var startTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        if (data == null) return;
        var source = this.selectSource(data);
        if (source == null) return;
        var media = Object.assign({}, data, source);
        var keySystem = akamai.amp.Utils.getKeySystem();
        var mediaInfo = new chrome.cast.media.MediaInfo(source.src, source.type);
        mediaInfo.duration = media.duration;
        mediaInfo.customData = {
          media: media
        };
        mediaInfo.metadata = Utils.createMetadata(media);

        if (media.keys && media.keys.hasOwnProperty(keySystem)) {
          mediaInfo.customData.licenseUrl = media.keys[keySystem].serverURL;
          mediaInfo.customData.keySystem = ChromecastConstants.KEY_SYSTEM[keySystem];
        }

        var tracks = media.track || [];

        var exists = function exists(track) {
          return track.kind !== "preview";
        };

        var create = function create(track, index) {
          return Utils.createTrack(index, track);
        };

        var load = function load(track) {
          return mediaInfo.tracks.push(track);
        };

        mediaInfo.tracks = [];
        tracks.filter(exists).map(create).map(load);
        mediaInfo.textTrackStyle = Utils.createTextTrackStyle(this.player.settings.captions);

        if (media.isLive || media.temporalType === "live") {
          mediaInfo.streamType = chrome.cast.media.StreamType.LIVE;
          mediaInfo.startAbsoluteTime = Date.now();
        }

        var request = new chrome.cast.media.LoadRequest(mediaInfo);
        request.currentTime = startTime || null;
        return new Promise(function (resolve) {
          _this5.loadingMedia = true;

          _this5.castSession.loadMedia(request).then(function () {
            _this5.loadingMedia = false;
            resolve();
          })["catch"](function (error) {
            return _this5.logger.error(error);
          });
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        babelHelpers.get(babelHelpers.getPrototypeOf(Chromecast.prototype), "destroy", this).call(this);
        if (!(this.castContext && 'cast' in chrome)) return;
        document.removeEventListener("castApiFound", this.onCastApiFound);
        this.castContext.removeEventListener(cast.framework.CastContextEventType.CAST_STATE_CHANGED, this.onCastStateChanged);
        this.castContext.removeEventListener(cast.framework.CastContextEventType.SESSION_STATE_CHANGED, this.onSessionStateChanged);
      }
    }, {
      key: "setSessionState",
      value: function setSessionState(value) {
        var plugin = this.player.react;
        var states = ChromecastConstants.SENDER_STATES;

        for (var key in states) {
          if (states.hasOwnProperty(key)) {
            var className = states[key];
            plugin.container.classList.remove(className);
          }
        }

        plugin.container.classList.add(states[value]);
        plugin.forceUpdate();
      }
    }]);
    return Chromecast;
  }(akamai.amp.Plugin);

  akamai.amp.AMP.registerPlugin("chromecast", akamai.amp.Plugin.createFactory(Chromecast));

  exports.Chromecast = Chromecast;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
