// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"dino.json":[function(require,module,exports) {
module.exports = {
  "Dinos": [{
    "species": "Triceratops",
    "weight": 13000,
    "height": 114,
    "diet": "herbavor",
    "where": "North America",
    "when": "Late Cretaceous",
    "fact": "First discovered in 1889 by Othniel Charles Marsh"
  }, {
    "species": "Tyrannosaurus Rex",
    "weight": 11905,
    "height": 144,
    "diet": "carnivor",
    "where": "North America",
    "when": "Late Cretaceous",
    "fact": "The largest known skull measures in at 5 feet long."
  }, {
    "species": "Anklyosaurus",
    "weight": 10500,
    "height": 55,
    "diet": "herbavor",
    "where": "North America",
    "when": "Late Cretaceous",
    "fact": "Anklyosaurus survived for approximately 135 million years."
  }, {
    "species": "Brachiosaurus",
    "weight": 70000,
    "height": "372",
    "diet": "herbavor",
    "where": "North America",
    "when": "Late Jurasic",
    "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
  }, {
    "species": "Stegosaurus",
    "weight": 11600,
    "height": 79,
    "diet": "herbavor",
    "where": "North America, Europe, Asia",
    "when": "Late Jurasic to Early Cretaceous",
    "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
  }, {
    "species": "Elasmosaurus",
    "weight": 16000,
    "height": 59,
    "diet": "carnivor",
    "where": "North America",
    "when": "Late Cretaceous",
    "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
  }, {
    "species": "Pteranodon",
    "weight": 44,
    "height": 20,
    "diet": "carnivor",
    "where": "North America",
    "when": "Late Cretaceous",
    "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
  }, {
    "species": "Pigeon",
    "weight": 0.5,
    "height": 9,
    "diet": "herbavor",
    "where": "World Wide",
    "when": "Holocene",
    "fact": "All birds are living dinosaurs."
  }]
};
},{}],"images/anklyosaurus.png":[function(require,module,exports) {
module.exports = "/anklyosaurus.f96513e6.png";
},{}],"images/brachiosaurus.png":[function(require,module,exports) {
module.exports = "/brachiosaurus.81e4c2fd.png";
},{}],"images/elasmosaurus.png":[function(require,module,exports) {
module.exports = "/elasmosaurus.4327d02e.png";
},{}],"images/human.png":[function(require,module,exports) {
module.exports = "/human.5671e61b.png";
},{}],"images/pigeon.png":[function(require,module,exports) {
module.exports = "/pigeon.b587b5f2.png";
},{}],"images/pteranodon.png":[function(require,module,exports) {
module.exports = "/pteranodon.5b35c3b1.png";
},{}],"images/tracks.png":[function(require,module,exports) {
module.exports = "/tracks.44a7a949.png";
},{}],"images/stegosaurus.png":[function(require,module,exports) {
module.exports = "/stegosaurus.f3bf38e3.png";
},{}],"images/triceratops.png":[function(require,module,exports) {
module.exports = "/triceratops.51bd8679.png";
},{}],"images/tyrannosaurus rex.png":[function(require,module,exports) {
module.exports = "/tyrannosaurus rex.dd3ab35d.png";
},{}],"images/*.png":[function(require,module,exports) {
module.exports = {
  "anklyosaurus": require("./anklyosaurus.png"),
  "brachiosaurus": require("./brachiosaurus.png"),
  "elasmosaurus": require("./elasmosaurus.png"),
  "human": require("./human.png"),
  "pigeon": require("./pigeon.png"),
  "pteranodon": require("./pteranodon.png"),
  "tracks": require("./tracks.png"),
  "stegosaurus": require("./stegosaurus.png"),
  "triceratops": require("./triceratops.png"),
  "tyrannosaurus rex": require("./tyrannosaurus rex.png")
};
},{"./anklyosaurus.png":"images/anklyosaurus.png","./brachiosaurus.png":"images/brachiosaurus.png","./elasmosaurus.png":"images/elasmosaurus.png","./human.png":"images/human.png","./pigeon.png":"images/pigeon.png","./pteranodon.png":"images/pteranodon.png","./tracks.png":"images/tracks.png","./stegosaurus.png":"images/stegosaurus.png","./triceratops.png":"images/triceratops.png","./tyrannosaurus rex.png":"images/tyrannosaurus rex.png"}],"app.js":[function(require,module,exports) {
"use strict";

var _dino = _interopRequireDefault(require("./dino.json"));

var _ = _interopRequireDefault(require("./images/*.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @description Respresents a dinosaur
 * @constructor
 * @param {string} species - The species of the dinosaur
 * @param {number} weight - The weight of the dinosaur
 * @param {number} height - The height of the dinosaur
 * @param {string} diet - The diet of the dinosaur
 * @param {string} where - Where the dinosaur was located
 * @param {string} when - The epoch the dinosaur was active
 * @param {string} fact - A given fact about the dinosaur
 */
function Dinosaur(_ref) {
  var species = _ref.species,
      weight = _ref.weight,
      height = _ref.height,
      diet = _ref.diet,
      where = _ref.where,
      when = _ref.when,
      fact = _ref.fact;
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
  this.renderable = {
    name: this.species,
    image: _.default[this.species.toLowerCase()]
  };
}
/**
 * @description Respresents a human
 * @constructor
 * @param {string} name - The name of the human
 * @param {number} feet - The height of the human (feets only)
 * @param {number} inches - The height of the human (inches only)
 * @param {number} weight - The weight of the human
 * @param {diet} where - The diet of the human
 */


function Human(_ref2) {
  var name = _ref2.name,
      feet = _ref2.feet,
      inches = _ref2.inches,
      weight = _ref2.weight,
      diet = _ref2.diet;
  this.name = name;
  this.height = feet * 12 + inches;
  this.weight = weight;
  this.diet = diet;
  this.image = _.default.human;
  this.renderable = {
    name: this.name,
    image: _.default.human
  };
}
/**
 * @description Compares the weight of the given dinosaur with the human's
 * @param {Human} - human
 * @returns {string} A fact according the difference of weight
 */


Dinosaur.prototype.compareWeight = function (human) {
  var weight = human.weight;
  var diff = Math.abs(this.weight - weight);

  if (this.weight < weight) {
    return "I weight ".concat(diff, " lbs less than you.");
  }

  if (this.weight > weight) {
    return "I weigh ".concat(diff, " lbs more than you.");
  }

  return 'We are the same weight.';
};
/**
 * @description Compares the height of the given dinosaur with the human's
 * @param {Human} - human
 * @returns {string} A fact according the difference of height
 */


Dinosaur.prototype.compareHeight = function (human) {
  var height = human.height;
  var diff = Math.abs(this.height - height);

  if (this.height < height) {
    return "I am ".concat(diff, " inches shorter than you.");
  }

  if (this.height > height) {
    return "I am ".concat(diff, " inches taller than you.");
  }

  return 'We are the same size.';
};
/**
 * @description Compares the diet of the given dinosaur with the human's
 * @param {Human} - human
 * @returns {string} A fact according the difference of the diet
 */


Dinosaur.prototype.compareDiet = function (human) {
  var diet = human.diet.toLowerCase();

  if (this.diet !== diet) {
    return "You are a ".concat(diet, " but I'm a ").concat(this.diet);
  }

  return "We are both ".concat(diet, "'s");
};
/**
 * @description Returns a random fact generated by prepared functions
 * @returns {string} A random fact
 */


Dinosaur.prototype.compareRandom = function (human) {
  var facts = ['compareDiet', 'compareHeight', 'compareWeight'];
  var randomNumber = Math.floor(Math.random() * Math.floor(facts.length));
  return this[facts[randomNumber]](human);
};
/**
 * @description Creates a single tile with name, image and fact if possible
 * @returns An copy of the DOM fragment, filled with values from the obj
 */


function createTile(fragment, obj, compareTo) {
  var instance = fragment.content.cloneNode(true);
  var name = instance.querySelector('#name');
  name.textContent = obj.renderable.name;
  var image = instance.querySelector('#image');
  image.src = obj.renderable.image;
  var fact = instance.querySelector('#fact');

  if (!compareTo) {
    fact.remove();
  } else if (obj.renderable.name === 'Pigeon') {
    fact.textContent = 'All birds are dinosaurs.';
  } else {
    fact.textContent = obj.compareRandom(compareTo);
  }

  return instance;
}
/**
 * @description Create tiles for dinosaur's and human and append to document
 */


function createTiles(human) {
  var _document$getElementB;

  var fragment = document.getElementById('dino-grid-template');

  var tiles = _dino.default.Dinos.map(function (dino) {
    return createTile(fragment, new Dinosaur(dino), human);
  }); // add human in the middle of the dino tiles


  tiles.splice(4, 0, createTile(fragment, human));

  (_document$getElementB = document.getElementById('grid')).append.apply(_document$getElementB, _toConsumableArray(tiles));
}
/**
 * @description Removes the form in the document
 */


function removeFormFromScreen() {
  document.getElementById('dino-compare').remove();
}

document.getElementById('dino-compare').addEventListener('submit', function () {
  // get human data
  var human = function () {
    var form = document.getElementById('dino-compare');
    var data = new FormData(form);
    return new Human(Object.fromEntries(data));
  }(); // hide form


  removeFormFromScreen(); // add tiles

  createTiles(human);
});
},{"./dino.json":"dino.json","./images/*.png":"images/*.png"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59170" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map