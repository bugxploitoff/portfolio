(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[654],{1654:function(e,n,t){"use strict";t.r(n),t.d(n,{Carousel:function(){return R}});var r,a=t(7568),i=t(8616),u=t(1799),o=t(9396),c=t(9534),s=t(9815),l=t(4051),f=t.n(l),d=t(5893),v=t(7294);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p.apply(this,arguments)}var m,g=e=>v.createElement("svg",p({fill:"currentColor",width:18,height:42,viewBox:"0 0 18 42"},e),r||(r=v.createElement("path",{d:"M18.03 1.375L16.47.125-.031 20.75l16.5 20.625 1.562-1.25L2.53 20.75z"})));function h(){return h=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h.apply(this,arguments)}var x=e=>v.createElement("svg",h({fill:"currentColor",width:18,height:42,viewBox:"0 0 18 42"},e),m||(m=v.createElement("path",{d:"M-.03 1.375L1.53.125l16.5 20.625-16.5 20.625-1.562-1.25 15.5-19.375z"}))),y=t(6240),b=t(2064),_=t(4529),w=t(9477),C=t(5622),I=t(2362),F=t(3142),j=t(6834),k=t.n(j);function E(e,n,t,r){if(null!==n)return n;var a=t.length;return r>0?(e+1)%a:(e-1+a)%a}var R=function(e){var n=e.width,t=e.height,r=e.images,l=e.placeholder,p=(0,c.Z)(e,["width","height","images","placeholder"]),m=(0,v.useState)(!1),h=m[0],j=m[1],R=(0,v.useState)(0),S=R[0],M=R[1],P=(0,v.useState)(!1),A=P[0],Z=P[1],D=(0,v.useState)(!0),L=D[0],N=D[1],O=(0,v.useState)(),q=O[0],B=O[1],z=(0,v.useState)(),T=z[0],U=z[1],K=(0,v.useRef)(),W=(0,v.useRef)(),J=(0,v.useRef)(),G=(0,v.useRef)(),V=(0,v.useRef)(),X=(0,v.useRef)(),H=(0,v.useRef)(),Q=(0,v.useRef)(!1),Y=(0,v.useRef)(),$=(0,v.useRef)(),ee=(0,v.useRef)(),ne=(0,y.J)(),te=(0,_.NM)(K,!0),re=(0,v.useRef)(),ae=(0,v.useRef)(),ie="Slide ".concat(S+1," of ").concat(r.length,". ").concat(r[S].alt);(0,v.useEffect)((function(){return h&&(document.body.style.cursor="grabbing"),function(){document.body.style.cursor=""}}),[h]),(0,v.useEffect)((function(){var e=[n/-2,n/2,t/2,t/-2,1,1e3];return H.current=new w.CP7({canvas:K.current,antialias:!1,alpha:!0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),X.current=(0,i.Z)(w.iKG,(0,s.Z)(e)),V.current=new w.xsS,H.current.setPixelRatio(2),H.current.setClearColor(1118481,1),H.current.setSize(n,t),H.current.domElement.style.width="100%",H.current.domElement.style.height="auto",V.current.background=new w.Ilk(1118481),X.current.position.z=1,function(){Q.current=!1,(0,F.in)(V.current),(0,F.e8)(H.current)}}),[t,n]),(0,v.useEffect)((function(){var e=!0,i=function(){var i=(0,a.Z)(f().mark((function i(){var u,o,c;return f().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return u=H.current.capabilities.getMaxAnisotropy(),o=r.map(function(){var e=(0,a.Z)(f().mark((function e(n){var t,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.srcSet){e.next=6;break}return e.next=3,(0,C.Ro)(n);case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=n.src.src;case 7:return t=e.t0,e.next=10,F.Et.loadAsync(t);case 10:return r=e.sent,e.next=13,H.current.initTexture(r);case 13:return r.encoding=w.knz,r.minFilter=w.wem,r.magFilter=w.wem,r.anisotropy=u,r.generateMipmaps=!1,e.abrupt("return",r);case 19:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),i.next=4,Promise.all(o);case 4:if(c=i.sent,e){i.next=7;break}return i.abrupt("return");case 7:G.current=new w.jyz({uniforms:{dispFactor:{type:"f",value:0},direction:{type:"f",value:1},currentImage:{type:"t",value:c[0]},nextImage:{type:"t",value:c[1]},reduceMotion:{type:"b",value:ne}},vertexShader:"varying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",fragmentShader:"varying vec2 vUv;\nuniform sampler2D currentImage;\nuniform sampler2D nextImage;\nuniform float dispFactor;\nuniform float direction;\nuniform bool reduceMotion;\n\nvoid main() {\n  if (reduceMotion) {\n    // Simple crossfade\n    vec4 _currentImage = texture2D(currentImage, vUv);\n    vec4 _nextImage = texture2D(nextImage, vUv);\n    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\n    gl_FragColor = finalTexture;\n  } else {\n    // Liquid distortion effect\n    vec2 uv = vUv;\n    vec4 _currentImage;\n    vec4 _nextImage;\n    float intensity = 0.6;\n\n    vec4 orig1 = texture2D(currentImage, uv);\n    vec4 orig2 = texture2D(nextImage, uv);\n\n    vec2 distortedPosition = vec2(\n      uv.x + direction * (dispFactor * (orig2.r * intensity)),\n      uv.y + direction * (dispFactor * (orig2 * intensity))\n    );\n\n    vec2 distortedPosition2 = vec2(\n      uv.x - direction * ((1.0 - dispFactor) * (orig1.r * intensity)),\n      uv.y - direction * ((1.0 - dispFactor) * (orig1 * intensity))\n    );\n\n    _currentImage = texture2D(currentImage, distortedPosition);\n    _nextImage = texture2D(nextImage, distortedPosition2);\n\n    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\n    gl_FragColor = finalTexture;\n  }\n}\n",transparent:!1,opacity:1}),J.current=new w.BKK(n,t,1),W.current=new w.Kj0(J.current,G.current),W.current.position.set(0,0,0),V.current.add(W.current),Z(!0),B(c),requestAnimationFrame((function(){H.current.render(V.current,X.current)}));case 15:case"end":return i.stop()}}),i)})));return function(){return i.apply(this,arguments)}}();return te&&!A&&i(),function(){e=!1}}),[t,r,te,A,ne,n]);var ue=(0,v.useCallback)((function(e){var n=e.index,t=e.direction,r=void 0===t?1:t;if(q){M(n);var a=G.current.uniforms;a.nextImage.value=q[n],a.direction.value=r;1!==a.dispFactor.value&&(Q.current=!0,(0,b.j)(a.dispFactor.value,1,{type:"spring",stiffness:100,damping:20,restSpeed:.001,restDelta:.001,onUpdate:function(e){a.dispFactor.value=e},onComplete:function(){a.currentImage.value=q[n],a.dispFactor.value=0,Q.current=!1}}))}}),[q]),oe=(0,v.useCallback)((function(e){var n=e.direction,t=e.index,r=void 0===t?null:t,a=(0,c.Z)(e,["direction","index"]);if(A){if(Q.current)return cancelAnimationFrame(ee.current),void(ee.current=requestAnimationFrame((function(){return oe((0,u.Z)({direction:n,index:r},a))})));var i=E(S,r,q,n);ue((0,u.Z)({index:i,direction:n},a))}}),[ue,S,A,q]),ce=(0,v.useCallback)((function(e){e!==S&&oe({direction:e>S?1:-1,index:e})}),[S,oe]);(0,v.useEffect)((function(){var e=function(){var e=K.current.getBoundingClientRect();U(e)};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),(0,v.useEffect)((function(){var e,n=function(){e=requestAnimationFrame(n),Q.current&&H.current.render(V.current,X.current)};return e=requestAnimationFrame(n),function(){cancelAnimationFrame(e)}}),[]),(0,v.useEffect)((function(){if(l){var e=function(){N(!1)},n=re.current;return n.addEventListener("transitionend",e),function(){n&&n.removeEventListener("transitionend",e)}}}),[l]);var se=(0,v.useCallback)((function(e){if(!Q.current&&G.current&&q){$.current=e;var n=Math.abs(e),t=T.width;Y.current=e>0?-1:1;var a=1-(n-t)/t*-1,i=E(S,null,r,Y.current),u=G.current.uniforms,o=Math.min(Math.max(a,0),1);u.currentImage.value=q[S],u.nextImage.value=q[i],u.direction.value=Y.current,u.dispFactor.value=o,requestAnimationFrame((function(){H.current.render(V.current,X.current)}))}}),[T,S,r,q]),le=(0,v.useCallback)((function(){if(G.current){var e=G.current.uniforms,n=1e3*(1-e.dispFactor.value),t=Math.abs($.current),r=.2*T.width;$.current=0,Q.current||0!==t&&t&&(t>r?oe({duration:n,direction:Y.current}):(e.currentImage.value=e.nextImage.value,e.nextImage.value=e.currentImage.value,e.dispFactor.value=1-e.dispFactor.value,oe({direction:-1*Y.current,index:S})))}}),[T,S,oe]),fe=(0,v.useCallback)((function(e){se(e.clientX-ae.current)}),[se]),de=(0,v.useCallback)((function(){j(!1),le(),document.removeEventListener("pointerup",de),document.removeEventListener("pointermove",fe)}),[fe,le]),ve=(0,v.useCallback)((function(e){ae.current=e.clientX,j(!0),document.addEventListener("pointermove",fe),document.addEventListener("pointerup",de)}),[fe,de]);return(0,d.jsxs)("div",(0,o.Z)((0,u.Z)({className:k().carousel,onKeyDown:function(e){switch(e.key){case"ArrowRight":oe({direction:1});break;case"ArrowLeft":oe({direction:-1})}}},p),{children:[(0,d.jsxs)("div",{className:k().content,children:[(0,d.jsxs)("div",{className:k().imageWrapper,"data-dragging":h,onPointerDown:ve,style:(0,I.Fh)({aspectRatio:"".concat(n," / ").concat(t)}),children:[(0,d.jsx)("div",{"aria-atomic":!0,className:k().canvasWrapper,"aria-live":"polite","aria-label":ie,role:"img",children:(0,d.jsx)("canvas",{"aria-hidden":!0,className:k().canvas,ref:K})}),L&&l&&(0,d.jsx)("img",{"aria-hidden":!0,className:k().placeholder,"data-loaded":A&&!!q,src:l.src,ref:re,alt:"",role:"presentation"})]}),(0,d.jsx)("button",{className:k().button,"data-prev":!0,"aria-label":"Previous slide",onClick:function(){return oe({direction:-1})},children:(0,d.jsx)(g,{})}),(0,d.jsx)("button",{className:k().button,"data-next":!0,"aria-label":"Next slide",onClick:function(){return oe({direction:1})},children:(0,d.jsx)(x,{})})]}),(0,d.jsx)("div",{className:k().nav,children:r.map((function(e,n){return(0,d.jsx)("button",{className:k().navButton,onClick:function(){return ce(n)},"aria-label":"Jump to slide ".concat(n+1),"aria-pressed":n===S},e.alt)}))})]}))}},3142:function(e,n,t){"use strict";t.d(n,{Et:function(){return s},Ji:function(){return v},Zf:function(){return c},e8:function(){return d},in:function(){return l}});var r=t(9477),a=t(4976),i=t(7607);r.CtF.enabled=!0;var u=new a._,o=new i.E;u.setDecoderPath("/portfolio/draco/"),o.setDRACOLoader(u);var c=o,s=new r.dpR,l=function(e){null===e||void 0===e||e.traverse((function(e){if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)f(e.material);else{var n=!0,t=!1,r=void 0;try{for(var a,i=e.material[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var u=a.value;f(u)}}catch(o){t=!0,r=o}finally{try{n||null==i.return||i.return()}finally{if(t)throw r}}}}))},f=function(e){e.dispose();var n=!0,t=!1,r=void 0;try{for(var a,i=Object.keys(e)[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var u,o,c,s=e[a.value];if(s&&"object"===typeof s&&"minFilter"in s)s.dispose(),null===(u=s.source)||void 0===u||null===(o=u.data)||void 0===o||null===(c=o.close)||void 0===c||c.call(o)}}catch(l){t=!0,r=l}finally{try{n||null==i.return||i.return()}finally{if(t)throw r}}},d=function(e){e.dispose(),e=null},v=function(e){var n=!0,t=!1,r=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var u=a.value;u.parent.remove(u)}}catch(o){t=!0,r=o}finally{try{n||null==i.return||i.return()}finally{if(t)throw r}}}},6834:function(e){e.exports={carousel:"Carousel_carousel__Sspl_",content:"Carousel_content__gQHGr",imageWrapper:"Carousel_imageWrapper__qTCVg",canvasWrapper:"Carousel_canvasWrapper__fJ9wa",canvas:"Carousel_canvas__M9q1k",placeholder:"Carousel_placeholder__9B_u0",button:"Carousel_button___Co_K",nav:"Carousel_nav__aYsww",navButton:"Carousel_navButton__Fq3pI"}},8616:function(e,n,t){"use strict";function r(e,n){return r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},r(e,n)}function a(e,n){return r(e,n)}function i(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e,n,t){return u=i()?Reflect.construct:function(e,n,t){var r=[null];r.push.apply(r,n);var i=new(Function.bind.apply(e,r));return t&&a(i,t.prototype),i},u.apply(null,arguments)}function o(e,n,t){return u.apply(null,arguments)}t.d(n,{Z:function(){return o}})},9815:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(943);var a=t(3375);var i=t(1566);function u(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,a.Z)(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2064:function(e,n,t){"use strict";t.d(n,{j:function(){return u}});var r=t(3234),a=t(406),i=t(8899);function u(e,n,t){void 0===t&&(t={});var u=(0,a.i)(e)?e:(0,r.B)(e);return(0,i.b8)("",u,n,t),{stop:function(){return u.stop()},isAnimating:function(){return u.isAnimating()}}}}}]);