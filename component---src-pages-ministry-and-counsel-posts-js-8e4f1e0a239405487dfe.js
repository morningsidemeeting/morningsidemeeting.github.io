(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"7k0l":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));n("q1tI");var r=n("lZkf"),o=n("m0lN"),c=n("qKvR");function i(){return Object(c.c)(r.a,{tag:o.d,title:o.f,basePath:o.a})}},"98Ni":function(t,e,n){t.exports={post:"posts-module--post--xM1vM"}},"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)},t.exports.default=t.exports,t.exports.__esModule=!0},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),c=n("ZhPi"),i=n("Bnag");t.exports=function(t){return r(t)||o(t)||c(t)||i()},t.exports.default=t.exports,t.exports.__esModule=!0},RYWz:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("q1tI");var r=n("/A9N"),o=n("nYfD"),c=n("jNNy"),i=n("qKvR");function a(t){var e=t.title,n=t.basePath,a=t.children,s=[["About",n],["Posts",n+"/posts"],["Events",n+"/events"],["Documents",n+"/documents"]];return Object(i.c)(r.a,{withSubtitle:!1},Object(i.c)("h2",null,e),Object(i.c)(o.a,{links:s}),Object(i.c)("section",null,a),Object(i.c)(c.a,{title:e}))}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r},t.exports.default=t.exports,t.exports.__esModule=!0},X8hv:function(t,e,n){var r=n("sXyB"),o=n("RIqP"),c=n("lSNA"),i=n("8OQS"),a=["scope","children"];function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=n("q1tI"),p=n("7ljp").mdx,f=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,c=i(t,a),s=f(e),d=l.useMemo((function(){if(!n)return null;var t=u({React:l,mdx:p},s),e=Object.keys(t),c=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+n])).apply(void 0,[{}].concat(o(c)))}),[n,e]);return l.createElement(d,u({},c))}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.default=t.exports,t.exports.__esModule=!0},jNNy:function(t,e,n){"use strict";n("q1tI");var r=n("qhky"),o=n("YwZP"),c=n("Wbzz"),i=n("qKvR"),a=function(t){var e=t.title,n=t.description,a=t.image,u=t.article,l=Object(o.useLocation)().pathname,p=Object(c.d)(s).site.siteMetadata,f=p.defaultTitle,d=p.titleTemplate,b=p.defaultDescription,m=p.siteUrl,O=p.defaultImage,y=p.twitterUsername,j={title:e||f,description:n||b,image:""+m+(a||O),url:""+m+l};return Object(i.c)(r.a,{title:j.title,titleTemplate:d},Object(i.c)("meta",{name:"description",content:j.description}),Object(i.c)("meta",{name:"image",content:j.image}),j.url&&Object(i.c)("meta",{property:"og:url",content:j.url}),!u?null:Object(i.c)("meta",{property:"og:type",content:"article"}),j.title&&Object(i.c)("meta",{property:"og:title",content:j.title}),j.description&&Object(i.c)("meta",{property:"og:description",content:j.description}),j.image&&Object(i.c)("meta",{property:"og:image",content:j.image}),Object(i.c)("meta",{name:"twitter:card",content:"summary_large_image"}),y&&Object(i.c)("meta",{name:"twitter:creator",content:y}),j.title&&Object(i.c)("meta",{name:"twitter:title",content:j.title}),j.description&&Object(i.c)("meta",{name:"twitter:description",content:j.description}),j.image&&Object(i.c)("meta",{name:"twitter:image",content:j.image}))};e.a=a,a.defaultProps={title:null,description:null,image:null,article:!1};var s="1216879795"},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.default=t.exports,t.exports.__esModule=!0},lZkf:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("q1tI");var r=n("Wbzz"),o=n("RYWz"),c=n("xix8"),i=n("qKvR");function a(t){var e=t.data,n=t.tag,r=e.allMdxBlogPost.nodes.filter((function(t){return t.tags.includes(n)}));return r.length?Object(i.c)(c.b,{nodes:r,title:"Posts"}):Object(i.c)("p",null,"No posts found.")}function s(t){var e=t.title,n=t.basePath,c=t.tag;return Object(i.c)(r.b,{query:"3945884913",render:function(t){return Object(i.c)(o.a,{title:e,basePath:n},Object(i.c)(a,{data:t,tag:c}))}})}},m0lN:function(t){t.exports=JSON.parse('{"f":"Ministry and Counsel","a":"/ministry-and-counsel","b":"ministry-and-counsel","d":"ministry-and-counsel","c":"ministry-and-counsel","e":"sng"}')},sXyB:function(t,e,n){var r=n("SksO"),o=n("b48C");function c(e,n,i){return o()?(t.exports=c=Reflect.construct,t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=c=function(t,e,n){var o=[null];o.push.apply(o,e);var c=new(Function.bind.apply(t,o));return n&&r(c,n.prototype),c},t.exports.default=t.exports,t.exports.__esModule=!0),c.apply(null,arguments)}t.exports=c,t.exports.default=t.exports,t.exports.__esModule=!0},xix8:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n("wx14"),o=n("q1tI"),c=n("sWYD"),i=n("4+6U"),a=n("A2+M"),s=n("98Ni"),u=n.n(s),l={announcements:"Announcements",arch:"ARCH",blog:"Blog Posts",board:"Bulletin Board",communications:"Communications and Website Commitee",finance:"Finance Committee","ministry-and-counsel":"Ministry and Counsel",prisons:"Prisons Committee",psc:"Peace & Social Concerns Committee",rjsg:"Racial Justice Study Group"},p=n("qKvR"),f=function(t){var e=t.title,n=void 0===e?"untitled":e,r=t.body,o=void 0===r?"":r,s=t.tags,f=void 0===s?[]:s,d=t.linkTitle,b=void 0===d||d,m=t.date,O=t.slug,y=t.withTags?Object(p.c)("footer",null,f.map((function(t){return l[t]})).filter((function(t){return!!t})).join(", ")):null,j=m;try{var x=m.replace("T00:00:00.000Z","T05:00:00.000Z");j=Object(c.a)(Object(i.a)(x),"MMMM d, y")}catch(v){}return Object(p.c)("div",{className:u.a.post},n?Object(p.c)("h3",null,b?Object(p.c)("a",{href:O},n):n):null,j?Object(p.c)("time",{dateTime:m},j):null,Object(p.c)(a.MDXRenderer,null,o),y)};e.b=function(t){var e=t.nodes,n=void 0===e?[]:e,c=t.withTags,i=void 0!==c&&c;return Object(p.c)(o.Fragment,null,n.map((function(t){return Object(p.c)(f,Object(r.a)({key:t.id},Object.assign({},t,{withTags:i})))})))}}}]);
//# sourceMappingURL=component---src-pages-ministry-and-counsel-posts-js-8e4f1e0a239405487dfe.js.map