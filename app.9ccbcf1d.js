parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"t1Gr":[function(require,module,exports) {
module.exports={Dinos:[{species:"Triceratops",weight:13e3,height:114,diet:"herbavor",where:"North America",when:"Late Cretaceous",fact:"First discovered in 1889 by Othniel Charles Marsh"},{species:"Tyrannosaurus Rex",weight:11905,height:144,diet:"carnivor",where:"North America",when:"Late Cretaceous",fact:"The largest known skull measures in at 5 feet long."},{species:"Anklyosaurus",weight:10500,height:55,diet:"herbavor",where:"North America",when:"Late Cretaceous",fact:"Anklyosaurus survived for approximately 135 million years."},{species:"Brachiosaurus",weight:7e4,height:"372",diet:"herbavor",where:"North America",when:"Late Jurasic",fact:"An asteroid was named 9954 Brachiosaurus in 1991."},{species:"Stegosaurus",weight:11600,height:79,diet:"herbavor",where:"North America, Europe, Asia",when:"Late Jurasic to Early Cretaceous",fact:"The Stegosaurus had between 17 and 22 seperate places and flat spines."},{species:"Elasmosaurus",weight:16e3,height:59,diet:"carnivor",where:"North America",when:"Late Cretaceous",fact:"Elasmosaurus was a marine reptile first discovered in Kansas."},{species:"Pteranodon",weight:44,height:20,diet:"carnivor",where:"North America",when:"Late Cretaceous",fact:"Actually a flying reptile, the Pteranodon is not a dinosaur."},{species:"Pigeon",weight:.5,height:9,diet:"herbavor",where:"World Wide",when:"Holocene",fact:"All birds are living dinosaurs."}]};
},{}],"lvzU":[function(require,module,exports) {
module.exports="anklyosaurus.e5f8c074.png";
},{}],"aTb4":[function(require,module,exports) {
module.exports="brachiosaurus.54fb592b.png";
},{}],"Bwqo":[function(require,module,exports) {
module.exports="elasmosaurus.28190e65.png";
},{}],"I1AH":[function(require,module,exports) {
module.exports="pigeon.3f0a76de.png";
},{}],"bjwr":[function(require,module,exports) {
module.exports="human.8b4cb323.png";
},{}],"X4Gb":[function(require,module,exports) {
module.exports="pteranodon.f5ae1c14.png";
},{}],"QciP":[function(require,module,exports) {
module.exports="stegosaurus.8da9c03c.png";
},{}],"i2L7":[function(require,module,exports) {
module.exports="tracks.270ee15c.png";
},{}],"j5u0":[function(require,module,exports) {
module.exports="triceratops.28e4025b.png";
},{}],"hMVe":[function(require,module,exports) {
module.exports="tyrannosaurus rex.6865927e.png";
},{}],"iBVJ":[function(require,module,exports) {
module.exports={anklyosaurus:require("./anklyosaurus.png"),brachiosaurus:require("./brachiosaurus.png"),elasmosaurus:require("./elasmosaurus.png"),pigeon:require("./pigeon.png"),human:require("./human.png"),pteranodon:require("./pteranodon.png"),stegosaurus:require("./stegosaurus.png"),tracks:require("./tracks.png"),triceratops:require("./triceratops.png"),"tyrannosaurus rex":require("./tyrannosaurus rex.png")};
},{"./anklyosaurus.png":"lvzU","./brachiosaurus.png":"aTb4","./elasmosaurus.png":"Bwqo","./pigeon.png":"I1AH","./human.png":"bjwr","./pteranodon.png":"X4Gb","./stegosaurus.png":"QciP","./tracks.png":"i2L7","./triceratops.png":"j5u0","./tyrannosaurus rex.png":"hMVe"}],"A2T1":[function(require,module,exports) {
"use strict";var e=n(require("./dino.json")),t=n(require("./images/*.png"));function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return h(e)||o(e)||a(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function o(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function h(e){if(Array.isArray(e))return c(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e){var n=e.species,r=e.weight,i=e.height,a=e.diet,o=e.where,h=e.when,c=e.fact;this.species=n,this.weight=r,this.height=i,this.diet=a,this.where=o,this.when=h,this.fact=c,this.renderable={name:this.species,image:t.default[this.species.toLowerCase()]}}function u(e){var n=e.name,r=e.feet,i=e.inches,a=e.weight,o=e.diet;this.name=n,this.height=12*r+i,this.weight=a,this.diet=o,this.image=t.default.human,this.renderable={name:this.name,image:t.default.human}}var m=function(){var e=document.getElementById("dino-compare");return function(){var t=new FormData(e);return new u(Object.fromEntries(t))}}();function d(e,t,n){var r=e.content.cloneNode(!0);r.querySelector("#name").textContent=t.renderable.name,r.querySelector("#image").src=t.renderable.image;var i=r.querySelector("#fact");return n?"Pigeon"===t.renderable.name?i.textContent="All birds are dinosaurs.":i.textContent=t.compareRandom(n):i.remove(),r}function l(t){var n,i=document.getElementById("dino-grid-template"),a=e.default.Dinos.map(function(e){return d(i,new s(e),t)});a.splice(4,0,d(i,t)),(n=document.getElementById("grid")).append.apply(n,r(a))}function g(){document.getElementById("dino-compare").remove()}s.prototype.compareWeight=function(e){var t=e.weight,n=Math.abs(this.weight-t);return this.weight<t?"I weight ".concat(n," lbs less than you."):this.weight>t?"I weigh ".concat(n," lbs more than you."):"We are the same weight."},s.prototype.compareHeight=function(e){var t=e.height,n=Math.abs(this.height-t);return this.height<t?"I am ".concat(n," inches shorter than you."):this.height>t?"I am ".concat(n," inches taller than you."):"We are the same size."},s.prototype.compareDiet=function(e){var t=e.diet.toLowerCase();return this.diet!==t?"You are a ".concat(t," but I'm a ").concat(this.diet):"We are both ".concat(t,"'s")},s.prototype.compareRandom=function(e){var t=["compareDiet","compareHeight","compareWeight"];return this[t[Math.floor(Math.random()*Math.floor(t.length))]](e)},document.getElementById("dino-compare").addEventListener("submit",function(){g(),l(m())});
},{"./dino.json":"t1Gr","./images/*.png":"iBVJ"}]},{},["A2T1"], null)
//# sourceMappingURL=app.9ccbcf1d.js.map