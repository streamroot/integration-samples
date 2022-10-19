this.akamai = this.akamai || {};
this.akamai.amp = this.akamai.amp || {};
this.akamai.amp.aframe = (function (exports) {
    'use strict';

    var RenderMode = {
      AUDIO: "audio",
      VIDEO: "video",
      NONE: "none"
    };

    var Utils = akamai.amp.Utils;

    var Helpers = /*#__PURE__*/function () {
      function Helpers() {
        babelHelpers.classCallCheck(this, Helpers);
      }

      babelHelpers.createClass(Helpers, null, [{
        key: "isCompatible",
        value: function isCompatible() {
          var compatible = Helpers.detectVRDisplay() || Helpers.detectWebGLContext();

          if (compatible === false) {
            console.log("Your browser is not compatible with A-Frame check this page out https://get.webgl.org/");
          }

          return compatible;
        }
      }, {
        key: "detectVRDisplay",
        value: function detectVRDisplay() {
          return typeof navigator.getVRDisplays == "function";
        }
      }, {
        key: "detectWebGLContext",
        value: function detectWebGLContext() {
          var canvas = document.createElement("canvas");
          var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
          return gl && gl instanceof WebGLRenderingContext;
        }
      }, {
        key: "createOverlay",
        value: function createOverlay() {
          var clear = function clear() {
            var _this = this;

            var scenes = document.querySelectorAll('a-scene');
            scenes.forEach(function (scene) {
              _this.removeChild(scene);
            });
          };

          var layer = document.createElement("div");
          layer.className = "amp-vr-overlay";
          layer.clear = clear;
          return layer;
        }
      }, {
        key: "createCamera",
        value: function createCamera() {
          var camera = document.createElement("a-camera");
          camera.setAttribute("user-height", 0);
          camera.setAttribute('look-controls', 'pointerLockEnabled:false;reverseMouseDrag:true;reverseTouchDrag:true');
          camera.setAttribute('compass', 'enabled:true');
          return camera;
        }
      }, {
        key: "isMobile",
        value: function isMobile() {
          return Helpers.isTouchDevice() || !Helpers.isDesktop();
        }
      }, {
        key: "isTouchDevice",
        value: function isTouchDevice() {
          return Utils.isTouchDevice();
        }
      }, {
        key: "isDesktop",
        value: function isDesktop() {
          return Utils.getDevice() === 'desktop';
        }
      }]);
      return Helpers;
    }();

    var Events = {
      ENTER_VR: "entervr",
      EXIT_VR: "exitvr",
      LOADED: "loaded"
    };

    var Renderer = /*#__PURE__*/function () {
      function Renderer(context) {
        babelHelpers.classCallCheck(this, Renderer);
        this.plugin = context;
        this.player = context.player;
        this.data = context.data;
        this.elements = this.createElements();
        var layer = context.overlay;
        var scene = this.elements.scene;
        var camera = Helpers.createCamera();
        if (context.initialized) layer.clear();
        layer.appendChild(scene); //Gyroscope movement and VR capabity won't be available when vrmode is set to false

        if (this.data.vrmode == false && Helpers.isMobile()) camera.setAttribute('touch-controls', 'pointerLockEnabled:false;reverseMouseDrag:true;reverseTouchDrag:true');
        scene.appendChild(camera);
        context.initialized = true;
      }

      babelHelpers.createClass(Renderer, [{
        key: "createElements",
        value: function createElements() {
          var scene = document.createElement("a-scene");
          var sphere = document.createElement("a-videosphere");
          var sky = document.createElement("a-sky");

          var _native = this.plugin.available && this.data["native"] === true;

          var devicePermissionUI = Helpers.isMobile() && this.data.disableDevicePermissionUI !== true;
          scene.setAttribute('embedded', true);
          scene.setAttribute('vr-mode-ui', "enabled: ".concat(_native));
          scene.setAttribute('device-orientation-permission-ui', "enabled: ".concat(devicePermissionUI));
          this.addListeners(scene);
          return {
            scene: scene,
            sphere: sphere,
            sky: sky
          };
        }
      }, {
        key: "addListeners",
        value: function addListeners(element) {
          var _this = this;

          var events = ['renderstart', 'enter-vr', 'exit-vr', 'loaded'];
          this.handleEvent = this.handleEvent.bind(this);
          events.map(function (event) {
            return element.addEventListener(event, _this.handleEvent);
          });
        }
      }, {
        key: "updatePlayerState",
        value: function updatePlayerState(state) {
          var states = RenderMode;
          var prefix = 'amp-aframe';

          for (var key in states) {
            if (states.hasOwnProperty(key)) {
              var className = "".concat(prefix, "-").concat(states[key]);
              this.player.container.classList.remove(className);
            }
          }

          this.player.container.classList.add("".concat(prefix, "-").concat(state));
        }
      }, {
        key: "getName",
        value: function getName() {
          return this.name;
        }
      }, {
        key: "render",
        value: function render() {}
      }, {
        key: "enterVR",
        value: function enterVR() {
          var scene = this.elements.scene;
          if (scene.hasLoaded) scene.enterVR();else scene.addEventListener('loaded', function () {
            setTimeout(function () {
              scene.enterVR();
            }, 1000);
          });
        }
      }, {
        key: "exitVR",
        value: function exitVR() {
          var scene = this.elements.scene;
          if (scene.hasLoaded) scene.exitVR();else scene.addEventListener('loaded', function () {
            setTimeout(function () {
              scene.exitVR();
            }, 1000);
          });
        }
      }, {
        key: "handleEvent",
        value: function handleEvent(event) {
          var type,
              detail = {};

          switch (event.type) {
            case 'enter-vr':
              type = Events.ENTER_VR;
              this.plugin.setDisplayState('vr');
              break;

            case 'exit-vr':
              type = Events.EXIT_VR;
              this.plugin.setDisplayState('normal');
              break;

            case 'loaded':
              type = Events.LOADED;
              break;
          }

          if (type == null) return;
          this.dispatch(type, detail);
        }
      }, {
        key: "dispatch",
        value: function dispatch(type, detail) {
          var event = new akamai.amp.Event(type, detail);
          this.plugin.dispatchEvent(event);
          this.plugin.logger.log("[AMP AFRAME EVENT] ".concat(type), event);
        }
      }]);
      return Renderer;
    }();

    var Audio = /*#__PURE__*/function (_Renderer) {
      babelHelpers.inherits(Audio, _Renderer);

      function Audio(context) {
        var _this;

        babelHelpers.classCallCheck(this, Audio);
        _this = _Renderer.call(this, context) || this;

        _this.render();

        return _this;
      }
      /**overwrite */


      babelHelpers.createClass(Audio, [{
        key: "render",
        value: function render() {
          var _this$elements = this.elements,
              sky = _this$elements.sky,
              scene = _this$elements.scene;
          sky.setAttribute("src", this.player.media.poster);
          scene.appendChild(sky);
          this.updatePlayerState(RenderMode.AUDIO);
        }
      }]);
      return Audio;
    }(Renderer);

    var Video = /*#__PURE__*/function (_Renderer) {
      babelHelpers.inherits(Video, _Renderer);

      function Video(context) {
        var _this;

        babelHelpers.classCallCheck(this, Video);
        _this = _Renderer.call(this, context) || this;

        _this.player.mediaElement.setAttribute("id", "videoamp");

        _this.render();

        return _this;
      }
      /** overwrite */


      babelHelpers.createClass(Video, [{
        key: "render",
        value: function render() {
          var _this$elements = this.elements,
              sphere = _this$elements.sphere,
              scene = _this$elements.scene;

          if (!this.shouldRenderVR()) {
            this.updatePlayerState(RenderMode.NONE);
            return;
          }

          sphere.setAttribute("rotation", this.data.rotation || "0 180 0");
          sphere.setAttribute("src", "#videoamp");
          scene.appendChild(sphere);
          this.updatePlayerState(RenderMode.VIDEO);
        }
      }, {
        key: "shouldRenderVR",
        value: function shouldRenderVR() {
          var category = this.player.media.category || '';
          var pattern = this.data.pattern == null ? new RegExp("360", "i") : new RegExp(this.data.pattern, "i");
          var regex = this.data.strict === true ? pattern : new RegExp("", "i");
          return regex.test(category);
        }
      }]);
      return Video;
    }(Renderer);

    var Components = /*#__PURE__*/function () {
      function Components() {
        babelHelpers.classCallCheck(this, Components);
      }

      babelHelpers.createClass(Components, [{
        key: "addComponent",
        value: function addComponent(component) {
          return this.register(component);
        }
      }, {
        key: "register",
        value: function register() {}
      }]);
      return Components;
    }();

    var PI_2 = Math.PI / 2;

    var TouchControls = /*#__PURE__*/function (_Components) {
      babelHelpers.inherits(TouchControls, _Components);

      function TouchControls() {
        babelHelpers.classCallCheck(this, TouchControls);
        return _Components.call(this) || this;
      }

      babelHelpers.createClass(TouchControls, [{
        key: "register",
        value: function register() {
          AFRAME.registerComponent('touch-controls', {
            schema: {
              enabled: {
                "default": true
              },
              hmdEnabled: {
                "default": true
              },
              pointerLockEnabled: {
                "default": false
              },
              reverseMouseDrag: {
                "default": false
              },
              reverseTouchDrag: {
                "default": false
              },
              touchEnabled: {
                "default": true
              }
            },
            init: function init() {
              this.deltaYaw = 0;
              this.previousHMDPosition = new THREE.Vector3();
              this.hmdQuaternion = new THREE.Quaternion();
              this.magicWindowAbsoluteEuler = new THREE.Euler();
              this.magicWindowDeltaEuler = new THREE.Euler();
              this.position = new THREE.Vector3();
              this.magicWindowObject = new THREE.Object3D();
              this.rotation = {};
              this.deltaRotation = {};
              this.savedPose = null;
              this.pointerLocked = false;
              this.setupTouchControls();
              this.bindMethods();
              this.previousMouseEvent = {}; // To save / restore camera pose

              this.savedPose = {
                position: new THREE.Vector3(),
                rotation: new THREE.Euler()
              }; // Call enter VR handler if the scene has entered VR before the event listeners attached.

              if (this.el.sceneEl.is('vr-mode')) {
                this.onEnterVR();
              }
            },
            update: function update(oldData) {
              var data = this.data; // Disable grab cursor classes if no longer enabled.

              if (data.enabled !== oldData.enabled) {
                this.updateGrabCursor(data.enabled);
              } // Reset pitch and yaw if disabling HMD.


              if (oldData && !data.hmdEnabled && !oldData.hmdEnabled) {
                this.pitchObject.rotation.set(0, 0, 0);
                this.yawObject.rotation.set(0, 0, 0);
              }

              if (oldData && !data.pointerLockEnabled !== oldData.pointerLockEnabled) {
                this.removeEventListeners();
                this.addEventListeners();

                if (this.pointerLocked) {
                  this.exitPointerLock();
                }
              }
            },
            tick: function tick(t) {
              var data = this.data;

              if (!data.enabled) {
                return;
              }

              this.updateOrientation();
            },
            play: function play() {
              this.addEventListeners();
            },
            pause: function pause() {
              this.removeEventListeners();

              if (this.pointerLocked) {
                this.exitPointerLock();
              }
            },
            remove: function remove() {
              this.removeEventListeners();

              if (this.pointerLocked) {
                this.exitPointerLock();
              }
            },
            bindMethods: function bindMethods() {
              this.onTouchStart = AFRAME.utils.bind(this.onTouchStart, this);
              this.onTouchMove = AFRAME.utils.bind(this.onTouchMove, this);
              this.onTouchEnd = AFRAME.utils.bind(this.onTouchEnd, this);
            },

            /**
             * Set up states and Object3Ds needed to store rotation data.
             */
            setupTouchControls: function setupTouchControls() {
              this.pitchObject = new THREE.Object3D();
              this.yawObject = new THREE.Object3D();
              this.yawObject.position.y = 10;
              this.yawObject.add(this.pitchObject);
            },

            /**
             * Add mouse and touch event listeners to canvas.
             */
            addEventListeners: function addEventListeners() {
              var sceneEl = this.el.sceneEl;
              var canvasEl = sceneEl.canvas; // Wait for canvas to load.

              if (!canvasEl) {
                sceneEl.addEventListener('render-target-loaded', AFRAME.utils.bind(this.addEventListeners, this));
                return;
              } // Touch events.


              canvasEl.addEventListener('touchstart', this.onTouchStart);
              window.addEventListener('touchmove', this.onTouchMove);
              window.addEventListener('touchend', this.onTouchEnd); // Pointer Lock events.

              if (this.data.pointerLockEnabled) {
                document.addEventListener('pointerlockchange', this.onPointerLockChange, false);
                document.addEventListener('mozpointerlockchange', this.onPointerLockChange, false);
                document.addEventListener('pointerlockerror', this.onPointerLockError, false);
              }
            },

            /**
             * Remove mouse and touch event listeners from canvas.
             */
            removeEventListeners: function removeEventListeners() {
              var sceneEl = this.el.sceneEl;
              var canvasEl = sceneEl && sceneEl.canvas;

              if (!canvasEl) {
                return;
              } // Mouse events.


              canvasEl.removeEventListener('mousedown', this.onMouseDown);
              window.removeEventListener('mousemove', this.onMouseMove);
              window.removeEventListener('mouseup', this.onMouseUp); // Touch events.

              canvasEl.removeEventListener('touchstart', this.onTouchStart);
              window.removeEventListener('touchmove', this.onTouchMove);
              window.removeEventListener('touchend', this.onTouchEnd); // Pointer Lock events.

              document.removeEventListener('pointerlockchange', this.onPointerLockChange, false);
              document.removeEventListener('mozpointerlockchange', this.onPointerLockChange, false);
              document.removeEventListener('pointerlockerror', this.onPointerLockError, false);
            },

            /**
             * Update orientation for mobile, mouse drag, and headset.
             * Mouse-drag only enabled if HMD is not active.
             */
            updateOrientation: function () {
              var poseMatrix = new THREE.Matrix4();
              return function () {
                var object3D = this.el.object3D;
                var pitchObject = this.pitchObject;
                var yawObject = this.yawObject;
                var pose;
                var sceneEl = this.el.sceneEl; // In VR mode, THREE is in charge of updating the camera pose.

                if (sceneEl.is('vr-mode') && sceneEl.checkHeadsetConnected()) {
                  // With WebXR THREE applies headset pose to the object3D matrixWorld internally.
                  // Reflect values back on position, rotation, scale for getAttribute to return the expected values.
                  if (sceneEl.hasWebXR) {
                    pose = sceneEl.renderer.xr.getCameraPose();

                    if (pose) {
                      poseMatrix.elements = pose.transform.matrix;
                      poseMatrix.decompose(object3D.position, object3D.rotation, object3D.scale);
                    }
                  }

                  return;
                } // On mobile, do camera rotation with touch events and sensors.


                object3D.rotation.x = this.magicWindowDeltaEuler.x + pitchObject.rotation.x;
                object3D.rotation.y = this.magicWindowDeltaEuler.y + yawObject.rotation.y;
                object3D.rotation.z = this.magicWindowDeltaEuler.z;
              };
            }(),

            /**
             * Translate mouse drag into rotation.
             *
             * Dragging up and down rotates the camera around the X-axis (yaw).
             * Dragging left and right rotates the camera around the Y-axis (pitch).
             */
            onMouseMove: function onMouseMove(evt) {
              var direction;
              var movementX;
              var movementY;
              var pitchObject = this.pitchObject;
              var previousMouseEvent = this.previousMouseEvent;
              var yawObject = this.yawObject; // Not dragging or not enabled.

              if (!this.data.enabled || !this.mouseDown && !this.pointerLocked) {
                return;
              } // Calculate delta.


              if (this.pointerLocked) {
                movementX = evt.movementX || evt.mozMovementX || 0;
                movementY = evt.movementY || evt.mozMovementY || 0;
              } else {
                movementX = evt.screenX - previousMouseEvent.screenX;
                movementY = evt.screenY - previousMouseEvent.screenY;
              }

              this.previousMouseEvent.screenX = evt.screenX;
              this.previousMouseEvent.screenY = evt.screenY; // Calculate rotation.

              direction = this.data.reverseMouseDrag ? 1 : -1;
              yawObject.rotation.y += movementX * 0.002 * direction;
              pitchObject.rotation.x += movementY * 0.002 * direction;
              pitchObject.rotation.x = Math.max(-PI_2, Math.min(PI_2, pitchObject.rotation.x));
            },

            /**
             * Register mouse down to detect mouse drag.
             */
            onMouseDown: function onMouseDown(evt) {
              var sceneEl = this.el.sceneEl;

              if (!this.data.enabled || sceneEl.is('vr-mode') && sceneEl.checkHeadsetConnected()) {
                return;
              } // Handle only primary button.


              if (evt.button !== 0) {
                return;
              }

              var canvasEl = sceneEl && sceneEl.canvas;
              this.mouseDown = true;
              this.previousMouseEvent.screenX = evt.screenX;
              this.previousMouseEvent.screenY = evt.screenY;
              this.showGrabbingCursor();

              if (this.data.pointerLockEnabled && !this.pointerLocked) {
                if (canvasEl.requestPointerLock) {
                  canvasEl.requestPointerLock();
                } else if (canvasEl.mozRequestPointerLock) {
                  canvasEl.mozRequestPointerLock();
                }
              }
            },

            /**
             * Shows grabbing cursor on scene
             */
            showGrabbingCursor: function showGrabbingCursor() {
              this.el.sceneEl.canvas.style.cursor = 'grabbing';
            },

            /**
             * Hides grabbing cursor on scene
             */
            hideGrabbingCursor: function hideGrabbingCursor() {
              this.el.sceneEl.canvas.style.cursor = '';
            },

            /**
             * Register mouse up to detect release of mouse drag.
             */
            onMouseUp: function onMouseUp() {
              this.mouseDown = false;
              this.hideGrabbingCursor();
            },

            /**
             * Register touch down to detect touch drag.
             */
            onTouchStart: function onTouchStart(evt) {
              if (evt.touches.length !== 1 || !this.data.touchEnabled || this.el.sceneEl.is('vr-mode')) {
                return;
              }

              this.touchStart = {
                x: evt.touches[0].pageX,
                y: evt.touches[0].pageY
              };
              this.touchStarted = true;
            },

            /**
             * Translate touch move to Y-axis rotation.
             */
            onTouchMove: function onTouchMove(evt) {
              var direction;
              var canvas = this.el.sceneEl.canvas;
              var deltaY;
              var yawObject = this.yawObject;

              if (!this.touchStarted || !this.data.touchEnabled) {
                return;
              }

              deltaY = 2 * Math.PI * (evt.touches[0].pageX - this.touchStart.x) / canvas.clientWidth;
              direction = this.data.reverseTouchDrag ? 1 : -1; // Limit touch orientaion to to yaw (y axis).

              yawObject.rotation.y -= deltaY * 0.5 * direction;
              this.touchStart = {
                x: evt.touches[0].pageX,
                y: evt.touches[0].pageY
              };
            },

            /**
             * Register touch end to detect release of touch drag.
             */
            onTouchEnd: function onTouchEnd() {
              this.touchStarted = false;
            },

            /**
             * Update Pointer Lock state.
             */
            onPointerLockChange: function onPointerLockChange() {
              this.pointerLocked = !!(document.pointerLockElement || document.mozPointerLockElement);
            },

            /**
             * Recover from Pointer Lock error.
             */
            onPointerLockError: function onPointerLockError() {
              this.pointerLocked = false;
            },
            // Exits pointer-locked mode.
            exitPointerLock: function exitPointerLock() {
              document.exitPointerLock();
              this.pointerLocked = false;
            },

            /**
             * Toggle the feature of showing/hiding the grab cursor.
             */
            updateGrabCursor: function updateGrabCursor(enabled) {
              var sceneEl = this.el.sceneEl;

              function enableGrabCursor() {
                sceneEl.canvas.classList.add('a-grab-cursor');
              }

              function disableGrabCursor() {
                sceneEl.canvas.classList.remove('a-grab-cursor');
              }

              if (!sceneEl.canvas) {
                if (enabled) {
                  sceneEl.addEventListener('render-target-loaded', enableGrabCursor);
                } else {
                  sceneEl.addEventListener('render-target-loaded', disableGrabCursor);
                }

                return;
              }

              if (enabled) {
                enableGrabCursor();
                return;
              }

              disableGrabCursor();
            },

            /**
             * Save camera pose before entering VR to restore later if exiting.
             */
            saveCameraPose: function saveCameraPose() {
              var el = this.el;
              this.savedPose.position.copy(el.object3D.position);
              this.savedPose.rotation.copy(el.object3D.rotation);
              this.hasSavedPose = true;
            },

            /**
             * Reset camera pose to before entering VR.
             */
            restoreCameraPose: function restoreCameraPose() {
              var el = this.el;
              var savedPose = this.savedPose;

              if (!this.hasSavedPose) {
                return;
              } // Reset camera orientation.


              el.object3D.position.copy(savedPose.position);
              el.object3D.rotation.copy(savedPose.rotation);
              this.hasSavedPose = false;
            }
          });
        }
      }]);
      return TouchControls;
    }(Components);

    var Compass = /*#__PURE__*/function (_Components) {
      babelHelpers.inherits(Compass, _Components);

      function Compass(details) {
        var _this;

        babelHelpers.classCallCheck(this, Compass);
        _this = _Components.call(this) || this;
        _this.container = details.container;
        _this.element = _this.createElement();
        return _this;
      }

      babelHelpers.createClass(Compass, [{
        key: "createElement",
        value: function createElement() {
          var compass = document.createElement("div");
          compass.className = 'amp-compass';
          this.container.appendChild(compass);
          return compass;
        }
        /*override*/

      }, {
        key: "register",
        value: function register() {
          var element = this.element;
          AFRAME.registerComponent('compass', {
            init: function init() {
              this.compass = element;
              this.degree = 360;
            },
            tick: function tick() {
              var positionY = this.el.getAttribute('rotation').y || 0;
              var rotation = this.degree - positionY;
              this.compass.style.transform = 'rotate(' + rotation + 'deg)';
            }
          });
        }
      }]);
      return Compass;
    }(Components);

    var ComponentRegistry = /*#__PURE__*/function () {
      function ComponentRegistry() {
        babelHelpers.classCallCheck(this, ComponentRegistry);
      }

      babelHelpers.createClass(ComponentRegistry, [{
        key: "registerComponent",
        value: function registerComponent(type, container) {
          var component;

          if (type === 'touch') {
            component = new TouchControls();
          }

          if (type === 'compass') {
            component = new Compass({
              container: container
            });
          }

          return component.register();
        }
      }]);
      return ComponentRegistry;
    }();

    var Aframe = /*#__PURE__*/function (_akamai$amp$Plugin) {
      babelHelpers.inherits(Aframe, _akamai$amp$Plugin);

      function Aframe(player, config) {
        var _this;

        babelHelpers.classCallCheck(this, Aframe);
        _this = _akamai$amp$Plugin.call(this, player, config) || this;
        _this.overlay = Helpers.createOverlay();
        _this.initialized = false;
        _this._available = _this.data.vrmode !== false && Helpers.isCompatible();
        _this.registry = new ComponentRegistry();
        return _this;
      }

      babelHelpers.createClass(Aframe, [{
        key: "available",
        get: function get() {
          return this._available;
        }
      }, {
        key: "setAvailable",
        value: function setAvailable(value) {
          this._available = value;
        }
      }, {
        key: "displayState",
        get: function get() {
          return this._displayState || 'normal';
        }
      }, {
        key: "setDisplayState",
        value: function setDisplayState(value) {
          this._displayState = value;
        }
      }, {
        key: "enterVR",
        value: function enterVR() {
          if (!this.initialized) return;
          this.renderer.enterVR();
        }
      }, {
        key: "exitVR",
        value: function exitVR() {
          if (!this.initialized) return;
          this.renderer.exitVR();
        }
      }, {
        key: "registerComponents",
        value: function registerComponents() {
          var _this2 = this;

          var components = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var overlay = this.overlay;
          var defaults = ['touch', 'compass'];
          defaults.forEach(function (component) {
            if (components.hasOwnProperty(component) && components[component].enabled === false) return;

            _this2.registry.registerComponent(component, overlay);
          });
        }
      }, {
        key: "onready",
        value: function onready() {
          var overlay = this.overlay;
          this.player.container.appendChild(overlay);
          this.registerComponents(this.data.components);
        }
      }, {
        key: "oncanplaythrough",
        value: function oncanplaythrough() {
          var canvas = document.querySelector('.a-canvas');
          if (canvas && canvas.hasAttribute('height')) canvas.height += 1;
        }
      }, {
        key: "onmediachange",
        value: function onmediachange(event) {
          this.media = event.data || {};
        }
      }, {
        key: "onmediasequenceinitialized",
        value: function onmediasequenceinitialized(event) {
          var media = this.media;
          if (media.medium === 'audio') this.renderer = new Audio(this);else this.renderer = new Video(this);
        }
      }]);
      return Aframe;
    }(akamai.amp.Plugin);

    akamai.amp.AMP.registerPlugin("aframe", typeof akamai.amp.Plugin.createFactory == 'function' ? akamai.amp.Plugin.createFactory(Aframe) : Aframe.factory);
    var module = {
      Aframe: Aframe,
      Events: Events
    };
    akamai.amp.aframe = akamai.amp.aframe || {};
    akamai.amp.aframe = module;

    exports.module = module;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
