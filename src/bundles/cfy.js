System.registerDynamic("npm:co@4.6.0.json",[],!0,function(){return{main:"index.js",format:"cjs",meta:{"*.json":{format:"json"}}}}),System.registerDynamic("npm:co@4.6.0/index.js",[],!0,function(a,b,c){function d(s){var t=this,u=r.call(arguments,1);return new Promise(function(v,w){function x(A){var B;try{B=s.next(A)}catch(C){return w(C)}z(B)}function y(A){var B;try{B=s.throw(A)}catch(C){return w(C)}z(B)}function z(A){if(A.done)return v(A.value);var B=g.call(t,A.value);return B&&l(B)?B.then(x,y):y(new TypeError("You may only yield a function, promise, generator, array, or object, but the following object was passed: \""+(A.value+"\"")))}return"function"==typeof s&&(s=s.apply(t,u)),s&&"function"==typeof s.next?void x():v(s)})}function g(s){return s?l(s)?s:n(s)||m(s)?d.call(this,s):"function"==typeof s?h.call(this,s):Array.isArray(s)?j.call(this,s):o(s)?k.call(this,s):s:s}function h(s){var t=this;return new Promise(function(u,v){s.call(t,function(w,x){return w?v(w):void(2<arguments.length&&(x=r.call(arguments,1)),u(x))})})}function j(s){return Promise.all(s.map(g,this))}function k(s){function t(A,B){u[B]=void 0,w.push(A.then(function(C){u[B]=C}))}for(var u=new s.constructor,v=Object.keys(s),w=[],x=0;x<v.length;x++){var y=v[x],z=g.call(this,s[y]);z&&l(z)?t(z,y):u[y]=s[y]}return Promise.all(w).then(function(){return u})}function l(s){return"function"==typeof s.then}function m(s){return"function"==typeof s.next&&"function"==typeof s.throw}function n(s){var t=s.constructor;return!!t&&("GeneratorFunction"===t.name||"GeneratorFunction"===t.displayName||m(t.prototype))}function o(s){return Object==s.constructor}var p=this||self,r=Array.prototype.slice;c.exports=d["default"]=d.co=d,d.wrap=function(s){function t(){return d.call(this,s.apply(this,arguments))}return t.__generatorFunction__=s,t}}),System.registerDynamic("npm:util-arity@1.0.2.json",[],!0,function(){return{main:"arity.js",format:"cjs",meta:{"*.json":{format:"json"}}}}),System.registerDynamic("npm:util-arity@1.0.2/arity.js",[],!0,function(a,b,c){var d=this||self,h={};c.exports=function(j,k){if(!h[j]){var l=Array(j+1).join(", _").substr(2);h[j]=new Function("fn","return function ("+l+") { return fn.apply(this, arguments); }")}return h[j](k)}}),System.registerDynamic("npm:unthenify@1.0.4.json",[],!0,function(){return{main:"dist/index.js",format:"cjs",meta:{"*.json":{format:"json"}},map:{"./dist":"./dist/index.js"}}}),System.registerDynamic("npm:unthenify@1.0.4/dist/index.js",["util-arity"],!0,function(a,b,c){"use strict";var g=this||self,j=a("util-arity");c.exports=function(k){return j(k.length+1,function(){for(var l=[],m=0;m<arguments.length;m++)l[m]=arguments[m];var n=l.pop();k.apply(this,l).then(function(o){return n(null,o)},function(o){return n(o||new TypeError("Promise was rejected with a falsy value"))})})}}),System.registerDynamic("npm:cfy@1.0.18.json",[],!0,function(){return{main:"index.js",format:"cjs",meta:{"*.json":{format:"json"}}}}),System.registerDynamic("npm:cfy@1.0.18/index.js",["co","unthenify"],!0,function(a,b){var d=this||self;(function(){var h,j,k,l,m,n,o,p,q,r,s,t="undefined"!=typeof b&&b||this,u=[].slice;h=a("co"),j=a("unthenify"),t.add_noerr=k=function(v){return function(w){return v(function(x){return w(null,x)})}},t.yfy=l=function(v){return function(){var w,x,y,z,A;for(x=[],y=0,z=arguments.length;y<z;++y)x.push(arguments[y]);return w=x,A=this,new Promise(function(B){var D;return D=function(){var E,F,G,H;for(F=[],G=0,H=arguments.length;G<H;++G)F.push(arguments[G]);return E=F,B(E[0])},w.push(D),v.apply(A,w)})}},t.yfy_node=m=function(v){return function(){var w,x,y,z,A;for(x=[],y=0,z=arguments.length;y<z;++y)x.push(arguments[y]);return w=x,A=this,new Promise(function(B,C){var D;return D=function(){var E,F,G,H,I;for(F=[],G=0,H=arguments.length;G<H;++G)F.push(arguments[G]);return E=F,I=E[0],I?C(I):B(E[1])},w.push(D),v.apply(A,w)})}},t.yfy_multi=n=function(v){return function(){var w,x,y,z,A;for(x=[],y=0,z=arguments.length;y<z;++y)x.push(arguments[y]);return w=x,A=this,new Promise(function(B){var D;return D=function(){var E,F,G,H;for(F=[],G=0,H=arguments.length;G<H;++G)F.push(arguments[G]);return E=F,B(E)},w.push(D),v.apply(A,w)})}},t.yfy_multi_node=o=function(v){return function(){var w,x,y,z,A;for(x=[],y=0,z=arguments.length;y<z;++y)x.push(arguments[y]);return w=x,A=this,new Promise(function(B,C){var D;return D=function(){var E,F,G,H,I;for(F=[],G=0,H=arguments.length;G<H;++G)F.push(arguments[G]);return E=F,I=E[0],I?C(I):B(E.slice(1))},w.push(D),v.apply(A,w)})}},t.cfy=p=function(v,w){var x,y;if(x=v.length,null!=w){if(null!=w.varargs)return q(v);null!=w.num_args&&(x=w.num_args)}return y=h.wrap(v),function(){var z,A,B,C,D;for(B=[],C=0<(z=arguments.length-1)?0:z=0;C<z;++C)B.push(arguments[C]);return A=B,D=arguments[z],A.length===x&&"function"==typeof D?y.bind(this).apply(null,A).then(D):y.bind(this).apply(null,u.call(A).concat([D]))}},q=function(v){var w;return w=h.wrap(v),function(){var x,y,z,A,B;for(z=[],A=0<(x=arguments.length-1)?0:x=0;A<x;++A)z.push(arguments[A]);return y=z,B=arguments[x],"function"==typeof B?w.bind(this).apply(null,y).then(B):w.bind(this).apply(null,u.call(y).concat([B]))}},t.cfy_node=r=function(v,w){var x,y,z;if(x=v.length,null!=w){if(null!=w.varargs)return s(v);null!=w.num_args&&(x=w.num_args)}return y=h.wrap(v),z=j(y),function(){var A,B,C,D,E;for(C=[],D=0<(A=arguments.length-1)?0:A=0;D<A;++D)C.push(arguments[D]);return B=C,E=arguments[A],B.length===x&&"function"==typeof E?z.bind(this).apply(null,u.call(B).concat([E])):y.bind(this).apply(null,u.call(B).concat([E]))}},s=function(v){var w,x;return w=h.wrap(v),x=j(w),function(){var y,z,A,B,C;for(A=[],B=0<(y=arguments.length-1)?0:y=0;B<y;++B)A.push(arguments[B]);return z=A,C=arguments[y],"function"==typeof C?x.bind(this).apply(null,u.call(z).concat([C])):w.bind(this).apply(null,u.call(z).concat([C]))}}}).call(b)});

