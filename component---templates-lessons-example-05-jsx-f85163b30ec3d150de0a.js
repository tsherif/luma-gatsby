(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{296:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),o=n(318),a=n(308),u=n.n(a),s=n(398),c=n(330),d=n(337),l=n(368),f=n(446),p=n(457);var v=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.getInfo=function(){return'\n<p>\n  <a href="http://learningwebgl.com/blog/?p=507" target="_blank">\n    Introducing Textures\n  </a>\n<p>\nThe classic WebGL Lessons in luma.gl\n'};var i=r.prototype;return i.onInitialize=function(t){var e,n=t.gl;return Object(s.a)(n,((e={clearColor:[0,0,0,1],clearDepth:1,depthTest:!0,depthFunc:u.a.LEQUAL})[u.a.UNPACK_FLIP_Y_WEBGL]=!0,e)),{cube:new c.a(n,{geometry:new d.a,vs:"attribute vec3 positions;\nattribute vec2 texCoords;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vTextureCoord;\nvoid main(void) {\n  gl_Position = uPMatrix * uMVMatrix * vec4(positions, 1.0);\n  vTextureCoord = texCoords;\n}\n",fs:"precision highp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void) {\n  gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n}\n",uniforms:{uSampler:new l.a(n,"nehe.gif")}})}},i.onRender=function(t){var e=t.gl,n=t.tick,r=t.aspect,i=t.cube;return e.clear(u.a.COLOR_BUFFER_BIT|u.a.DEPTH_BUFFER_BIT),i.setUniforms({uPMatrix:(new p.a).perspective({aspect:r}),uMVMatrix:(new p.a).lookAt({eye:[0,0,0]}).translate([0,0,-5]).rotateXYZ([.01*n,.01*n,.01*n])}).draw()},r}(f.a);"undefined"==typeof window||window.website||(new v).start();n.d(e,"default",function(){return y});var y=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){return i.a.createElement(o.a,{AnimationLoop:v,exampleConfig:this.props.pageContext.exampleConfig})},r}(i.a.Component)},314:function(t,e,n){"use strict";n.d(e,"a",function(){return s});n(130),n(306),n(4);var r=n(434),i=n(386);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}var u={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},s=function(){function t(t){void 0===t&&(t={});var e=t,n=e.id,i=void 0===n?Object(r.c)("geometry"):n,o=e.drawMode,a=void 0===o?u.TRIANGLES:o,s=e.attributes,c=void 0===s?{}:s,d=e.indices,l=void 0===d?null:d,f=e.vertexCount,p=void 0===f?null:f;this.id=i,this.drawMode=0|a,this.attributes={},this.userData={},this._setAttributes(c,l),this.vertexCount=p||this._calculateVertexCount(this.attributes,this.indices)}a(t,null,[{key:"DRAW_MODE",get:function(){return u}}]);var e=t.prototype;return e.getVertexCount=function(){return this.vertexCount},e.getAttributes=function(){return this.indices?Object.assign({indices:this.indices},this.attributes):this.attributes},e._print=function(t){return"Geometry "+this.id+" attribute "+t},e._setAttributes=function(t,e){for(var n in e&&(this.indices=ArrayBuffer.isView(e)?{value:e,size:1}:e),t){var r=t[n];r=ArrayBuffer.isView(r)?{value:r}:r,Object(i.a)(ArrayBuffer.isView(r.value),this._print(n)+": must be typed array or object with value as typed array"),"POSITION"!==n&&"positions"!==n||r.size||(r.size=3),"indices"===n?(Object(i.a)(!this.indices),this.indices=r):this.attributes[n]=r}return this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this},e._calculateVertexCount=function(t,e){if(e)return e.value.length;var n=1/0;for(var r in t){var o=t[r],a=o.value,u=o.size;!o.constant&&a&&u>=1&&(n=Math.min(n,a.length/u))}return Object(i.a)(Number.isFinite(n)),n},a(t,[{key:"mode",get:function(){return this.drawMode}}]),t}()},320:function(t,e,n){"use strict";n(27),n(17),n(98),n(39),n(55),n(131),n(132),n(74),n(3),n(5),n(2),n(73),n(96),n(10),n(7),n(1),Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i="undefined"!=typeof window&&window.addEventListener,o=new Map,a=function(){return i&&window.__SEER_INITIALIZED__},u=function(t,e){var n=o.get(t),r=Date.now();return!!(n&&r-n<e)||(o.set(t,r),!1)},s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i&&a()){var n=new Set,o=JSON.stringify(e,function(t){return function(e,n){if(!n||"object"!==(void 0===n?"undefined":r(n))||!t.has(n))return t.add(n),Object.prototype.toString.call(n).slice(8,-1).includes("Array")?Array.prototype.slice.call(n,0,20):n}}(n));try{window.postMessage({type:t,payload:o,source:"seer-agent"},"*")}catch(s){if(u("seer-log",2e3))return;console.log(s)}}},c=new Map,d=function(t){if(t&&t.data&&"seer-core"===t.data.source){var e=t.data,n=e.type,r=e.payload,i=c.get(n);i&&i.forEach(function(t){return t(r)})}},l=function(){i&&!window.__SEER_LISTENER__&&(window.addEventListener("message",d),window.__SEER_LISTENER__=!0)};e.default={send:s,throttle:u,isReady:a,list:function(t,e){return s("LIST",{key:t,data:e})},listItem:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return s("LIST_ITEM",{key:t,itemKey:e,data:n})},updateItem:function(t,e,n,r){return s("UPDATE_ITEM",{key:t,itemKey:e,path:n,data:r})},multiUpdate:function(t,e,n){return s("MULTI_UPDATE_ITEM",{key:t,itemKey:e,array:n})},deleteItem:function(t,e){return s("DELETE_ITEM",{key:t,itemKey:e})},addLog:function(t,e,n){return s("ADD_LOG",{key:t,itemKey:e,msg:n})},listeners:c,listenFor:function(t,e){if(i){if(!t||!e)throw new Error("Please provide a type and callback");c.has(t)||c.set(t,[]),window.__SEER_LISTENER__||l(),c.get(t).push(e)}},removeListener:function(t){c.forEach(function(e,n){c.set(n,e.filter(function(e){return e!==t}))})},init:l,clean:function(){i&&window.__SEER_LISTENER__&&(window.removeEventListener("message",d),delete window.__SEER_LISTENER__)}}},337:function(t,e,n){"use strict";n.d(e,"a",function(){return d});n(4),n(307),n(312);var r=n(314),i=n(434);var o=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),a=new Float32Array([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]),u=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]),s=new Float32Array([0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1]),c={POSITION:{size:3,value:new Float32Array(a)},NORMAL:{size:3,value:new Float32Array(u)},TEXCOORD_0:{size:2,value:new Float32Array(s)}},d=function(t){var e,n;function r(e){void 0===e&&(e={});var n=e.id,r=void 0===n?Object(i.c)("cube-geometry"):n;return t.call(this,Object.assign({},e,{id:r,indices:{size:1,value:new Uint16Array(o)},attributes:Object.assign({},c,e.attributes)}))||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r}(r.a)}}]);
//# sourceMappingURL=component---templates-lessons-example-05-jsx-f85163b30ec3d150de0a.js.map