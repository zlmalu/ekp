/*!
 * kkjs v1.2.83
 * Copyright© 2018 深圳市蓝凌软件股份有限公司版权所有
 */
!function(a,b){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return b(a)}):"object"==typeof exports?module.exports=b(a):a.Easymi=a.kk=b(a)}("undefined"!=typeof window?window:this,function(a){"use strict";var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S=[].slice,T={}.hasOwnProperty,U=function(a,b){return function(){return a.apply(b,arguments)}},V=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1};return R=a.kk,m="",H=function(){var b,c,d;return d=null,b=function(){var a;if(a=Was.readyArgs,a.callArgs&&a.callArgs.__JSON__)try{a.callArgs=JSON.parse(a.callArgs.__JSON__)}catch(b){b,a.callArgs=a.callArgs.__JSON__}},c=function(c){a.Was&&Was.ready?(b(),Was.readyArgs.tokenReady=Was.SSOTokenReady,c(Was.readyArgs)):d?d.push(c):(d=[c],void 0!==a&&null!==a&&a.addEventListener("kkJsBridgeReady",function(){var a,c;for(b(),c=Was.readyArgs,Was.readyArgs.tokenReady=Was.SSOTokenReady;a=d.shift();)a(c)}))},{ready:c,version:"1.2.83"}}(),H.noConflict=function(){return a.kk=R,H},H.isKK=function(){return/kkPlus/i.test(navigator.userAgent)},H.defy=function(){var a,b,c,d,e;if(c=arguments[0],a=2<=arguments.length?S.call(arguments,1):[],"string"==typeof c){e=c.split(".");try{for(b=H,d="";d=e.shift();)b=b[d];if("function"!=typeof b)throw new Error;c=b}catch(a){return a,H.Deferred.reject(-999,c+" is not function in KK")}}return new H.Deferred(function(b,d){var e,f,g,h;if(f=/^function\s+\w*\(([^)]+)\)/.exec(c.toString())){for(h=f[1].split(",").map(function(a){return a.trim()}),h=h.slice(-2),e=a.length;g=h.shift();)"done"===g?a.push(b):"fail"===g&&a.push(d);if(a.length>e)return void c.apply(null,a)}b(c.apply(null,a))})},P=function(a,done){return function(){var b,c;b=1<=arguments.length?S.call(arguments,0):[],c="["+a+"][success]",e.detailLog&&(c+="[arguments]: "+JSON.stringify(b)),B.debug(c),"function"==typeof done&&done.apply(null,b)}},Q=function(a,fail){return function(){var b,c;b=1<=arguments.length?S.call(arguments,0):[],c="["+a+"][fail]",e.detailLog&&(c+="[arguments]: "+JSON.stringify(b)),B.debug(c),"function"==typeof fail&&fail.apply(null,b)}},O={exec:function(){var b,c,done,d,fail;if(c=1<=arguments.length?S.call(arguments,0):[],b=c.shift(),done=c[3],c[3]=P(b,done),fail=c[4],c[4]=Q(b,fail),d="",H.isKK()?a.Was&&Was.ready||(d="KK is not ready yet, JS API should be called in kk.ready. For more information, check http://kk5.landray.com.cn:6789/jssdk/index.html#ready"):d="KK JS APIs are only available in KK Mobile Apps. You should open your web app in KK Mobile App.",d)return a.console.warn(d),void c[4](-999,d);B.debug("["+b+"][call-arguments] : "+JSON.stringify(c[2])),Was.exec.apply(Was,c)}},L=w={noop:function(){},type:function(a,b){var c;return null!=a?(c=Object.prototype.toString.call(a),1===arguments.length?c.slice(8,-1):c.toLowerCase()===("[object "+b+"]").toLowerCase()):(c=String(a),arguments.length>1?c.toLowerCase()===String(b).toLowerCase():c)},isArray:Array.isArray||function(a){return L.type(a,"Array")},isWindow:function(a){return!(null==a||!a.window||a!==a.window)},isObject:function(a){return L.type(a,"Object")},isPlainObject:function(a){return L.isObject(a)&&!L.isWindow(a)&&Object.getPrototypeOf(a)===Object.prototype},splitURI:function(a){return(""+a).match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/)},isURI:function(a){var b,c,d,e;if(!a)return!1;if(/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(a))return!1;if(/%[^0-9a-f]/i.test(a))return!1;if(/%[0-9a-f](:?[^0-9a-f]|$)/i.test(a))return!1;if(!(e=L.splitURI(a))||!e.length)return!1;if(d=e[1],b=e[2],c=e[3],!(d&&c.length>=0))return!1;if(b&&b.length){if(0!==c.length&&!/^\//.test(c))return!1}else if(/^\/\//.test(c))return!1;return!!/^[a-z][a-z0-9\+\-\.]*$/.test(d.toLowerCase())},isURL:function(a){var b,c,d;return!!L.isURI(a)&&(d=L.splitURI(a),c=d[1],b=d[2],!!c&&(!!/^https?$/i.test(c)&&!!b))},isEmpty:function(a){return null===a||void 0===a||""===a||L.isArray(a)&&!a.length},isFunction:function(a){return L.type(a,"Function")},extend:function(a,b){var c,d,e,f,g,h,i,j;for(c=[].slice.call(arguments),"boolean"==typeof c[0]?(e=c.shift(),a=c[0]):e=!1,i="boolean"!=typeof c[c.length-1]||c.pop(),g=1,1===c.length&&(a=L.isWindow(this)?{}:this,g=0),a||(a={});g<c.length;)if(b=c[g++])for(h in b)T.call(b,h)&&(j=b[h],!i&&h in a||(e&&j&&(L.isArray(j)||L.isPlainObject(j))?(f=a[h],d=L.isArray(j)?L.isArray(f)?f:[]:f&&L.isPlainObject(f)?f:{},a[h]=L.extend(e,d,j,i)):void 0!==j&&(a[h]=j)));return a},toQueryObjects:function(a,b,c){var d,e,f,g,h,i,j,k;if(d=L.toQueryObjects,f=[],L.isArray(b))if(c)for(e=h=0,j=b.length;h<j;e=++h)g=b[e],f=f.concat(d(a+"["+e+"]",g,!0));else for(e=i=0,k=b.length;i<k;e=++i)g=b[e],f.push({name:a,value:g});else if(L.isObject(b))if(c)for(e in b)T.call(b,e)&&(g=b[e],f=f.concat(d(a+"["+e+"]",g,!0)));else for(e in b)T.call(b,e)&&(g=b[e],f.push({name:a,value:g}));else f.push({name:a,value:b});return f},toQueryString:function(a){var b,c,d,e,f,g,h;e=[],d=[];for(b in a)T.call(a,b)&&(f=a[b],d=d.concat(L.toQueryObjects(b,f,!0)));for(g=0,h=d.length;g<h;g++)c=d[g],f=c.value,L.isEmpty(f)?f="":L.type(f,"Date")&&(f=L.formatTime(f)),e.push(encodeURIComponent(c.name)+"="+encodeURIComponent(String(f)));return e.join("&")},renameKeys:function(a,b,c){var d,e,f;if(!b||!a)return a;e=L.extend(!0,{},a);for(d in b)T.call(b,d)&&(f=b[d],void 0!==e[d]&&(void 0===e[f]&&(e[f]=e[d]),c&&delete e[d]));return e},parseTime:function(a){var b;return b=a.trim().match(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/).map(function(a){return parseInt(a,10)}),new Date(b[1],b[2]-1,b[3],b[4],b[5],b[6])}},D=function(a,b){B.error("[kk api defaultFailCB]code:"+a+", msg:"+b)},M=function(a,b,c){if(null==c&&(c=!0),c){if(!L.type(a,"function"))return!1}else if(null!=a&&!L.type(a,"function"))return!1;return!(null!=b&&!L.type(b,"function"))},N=function(a){return a=(""+a).toLowerCase(),"jpg"===a&&(a="jpeg"),"jpeg"!==a&&"png"!==a&&(a="png"),a},H.utils=w,e={debug:!0,detailLog:!1},H.config=function(){var a,b,c,d;if(a=1<=arguments.length?S.call(arguments,0):[],!a.length)return L.extend({},e);if(c=a[0],d=typeof c,1!==a.length)return"string"===d&&c in e?e[c]=a[1]:void 0;if("string"===d)return e[c];if("object"===d){for(b in e)T.call(e,b)&&(e[b],b in c&&(e[b]=c[b]));return L.extend({},e)}},h=function(){function a(a){this.setSuccess=U(this.setSuccess,this),this.setError=U(this.setError,this);var b,c,d,e;this.chain=this.noop,this.resultGetter=null,c=this,e=function(){var a;return a=1<=arguments.length?S.call(arguments,0):[],c.resolve.apply(c,a)},d=function(){var a;return a=1<=arguments.length?S.call(arguments,0):[],c.reject.apply(c,a)};try{a&&a(e,d)}catch(a){b=a,d(b)}}return a.prototype.noop=function(){},a.prototype.processResult=function(a,b,c){var d;d=this,a[0]&&a[0].then?a[0].then(function(){var a;a=1<=arguments.length?S.call(arguments,0):[],d.processResult(a,b,c)}).catch(function(){var a;a=1<=arguments.length?S.call(arguments,0):[],d.processResult(a,c,c)}):b.apply(null,a)},a.prototype.setResult=function(a){this.resultGetter=function(done,fail){var b;try{a(done,fail)}catch(a){b=a,fail(b)}},this.chain(),this.chain=void 0},a.prototype.setError=function(){var a;a=1<=arguments.length?S.call(arguments,0):[],this.setResult(function(done,fail){fail.apply(null,a)})},a.prototype.setSuccess=function(){var a;a=1<=arguments.length?S.call(arguments,0):[],this.setResult(function(done){done.apply(null,a)})},a.prototype.buildChain=function(a,b){var c,d;d=this.chain,c=this,this.chain=function(){d(),c.resultGetter(a,b)}},a.prototype.resolve=function(){var a;a=1<=arguments.length?S.call(arguments,0):[],!this.resultGetter&&this.processResult(a,this.setSuccess,this.setError)},a.prototype.reject=function(){var a;return a=1<=arguments.length?S.call(arguments,0):[],!this.resultGetter&&this.processResult(a,this.setError,this.setError)},a.prototype.then=function(done,fail){var b,c;return b=this,c=this.resultGetter?function(){var a;return a=1<=arguments.length?S.call(arguments,0):[],b.resultGetter.apply(b,a)}:function(){var a;return a=1<=arguments.length?S.call(arguments,0):[],b.buildChain.apply(b,a)},new a(function(a,b){c(function(){var b;return b=1<=arguments.length?S.call(arguments,0):[],"function"==typeof done?a(done.apply(null,b)):a.apply(null,b)},function(){var a;return a=1<=arguments.length?S.call(arguments,0):[],"function"==typeof fail?b(fail.apply(null,a)):b.apply(null,a)})})},a.prototype.catch=function(a){return this.then(null,a)},a.prototype.done=function(a){return this.then(a)},a.prototype.always=function(a){return this.then(a,a)},a.prototype.finally=function(){var a;return a=1<=arguments.length?S.call(arguments,0):[],this.always.apply(this,a)},a.prototype.fail=function(a){return this.then(null,a)},a.resolve=function(){var b;return b=1<=arguments.length?S.call(arguments,0):[],new a(function(a){return a.apply(null,b)})},a.reject=function(){var b;return b=1<=arguments.length?S.call(arguments,0):[],new a(function(a,c){return c.apply(null,b)})},a.race=function(b){return null==b&&(b=[]),new a(function(a,c){var d,e,f;if(!b.length)return a();for(e=0,f=b.length;e<f;e++)(d=b[e])&&d.then&&d.then(a,c)})},a.all=function(b){return null==b&&(b=[]),new a(function(a,c){var d,e,f,g,h,i,j;if(!(d=b.length))return a();for(e=function(){--d<=0&&a(b)},h=function(a,d){a&&a.then?a.then(function(){var a;return a=1<=arguments.length?S.call(arguments,0):[],b[d]=a,e()},c):e()},f=i=0,j=b.length;i<j;f=++i)g=b[f],h(g,f)})},a}(),H.Deferred=H.Promise=h,B=function(){var b,c;return b=["log","debug","error","warn"],c={},a.console?b.forEach(function(b){c[b]=function(){var c;e.debug&&(a.console[b].apply(a.console,arguments),e.detailLog&&(c=new Event("kk-debug",{bubbles:!0,cancelable:!1}),c.data=arguments,window.dispatchEvent(c)))}}):b.forEach(function(a){c[a]=function(){}}),c}(),E={},A=function(a){var b;b="on"+a.charAt(0).toUpperCase()+a.slice(1),Was.addEventListener(b,function(){var b,c,d,f,g,h,i,j;if(b=1<=arguments.length?S.call(arguments,0):[],(d=E[a])&&d.length){for(f=a+" was triggered",e.detailLog&&(f+=", with params:"+JSON.stringify(b)),B.debug(f),g=void 0,h=void 0,i=0,j=d.length;i<j&&(c=d[i],h=c.apply(null,b),null!=h&&(g=h),!1!==g);i++);return!1===g?g:void 0}})},G={on:function(a,b){var c;"function"==typeof b&&(c=E[a],c?V.call(c,b)<0&&c.push(b):(E[a]=[b],A(a)))},off:function(a,b){var c,d;if((c=E[a])&&c.length&&"function"==typeof b)for(d=c.length;d--;)if(c[d]===b){c.splice(d,1);break}}},c={exit:function(){Was.exec("app","exitApp",{})},isOfflineApp:function(){return Was.appInfo&&"type"in Was.appInfo?1===parseInt(Was.appInfo.type,10):/^app.+kk$/.test(location.hostname)||/^(file|kkapp)/i.test(location.protocol)},callApp:function(a,b,done,fail){if("function"!=typeof b&&b||(fail=done,done=b,b=null),null!=b&&(b={__JSON__:JSON.stringify(b)}),M(done,fail,!1)){if(!a)return void fail(-1,"appInfo should not be empty");b||(b={}),"string"==typeof a&&(a=L.isURL(a)?{url:a}:{code:a}),a=L.renameKeys(a,{code:"__command",url:"__startUrl"}),b=L.extend(a,b),O.exec("app.callApp","app","callApp",b,done,fail)}},callNativeApp:function(a,done,fail){var b,c,d;if(M(done,fail,!1)){c={};for(b in a)T.call(a,b)&&(d=a[b],c["__"+b.replace(/^__/,"")]=d);c.__otherParam&&L.extend(c,K(c.__otherParam),!1),O.exec("app.callNativeApp","app","callNativeApp",c,done,fail)}},on:G.on,off:G.off,setAppCallBackData:function(a,done,fail){M(done,fail,!1)&&O.exec("app.setAppCallBackData","app","setAppCallBackData",a,done,fail)},setBadge:function(a,done,fail){M(done,fail,!1)&&O.exec("app.setBadge","message","setAppBadge",a,done,fail)},getBadge:function(done,fail){M(done,fail)&&O.exec("app.getBadge","message","getAppBadge",{},done,fail)},getNetState:function(){return{netState:Was.netState}},getDeviceInfo:function(){var a,b,c,d;return(a=Was.deviceInfo)?(b=a.pixel.split("x"),c=L.renameKeys(a,{deviceUUID:"deviceID"},!0),c=L.extend(c,{largerPixel:parseInt(b[0]),smallerPixel:parseInt(b[1])})):(d=window.screen,c={os:"windows",type:"pad",largerPixel:d.width,smallerPixel:d.height,pixel:d.width+"x"+d.height}),c},getUserInfo:function(){return j.getUserInfo()},getAppInfo:function(){return L.extend({},Was.appInfo)},getAppIcon:function(a){return a=a||Was.appInfo.code,m+"/serverj/getAppIcon?appCode="+encodeURIComponent(a)},getClientInfo:function(){var a,b,c;return Was.kkClientInfo?(c=/^v?(\d(\.\d)+)/,a=L.renameKeys(Was.kkClientInfo,{version:"innerVersion"},!0),a=L.renameKeys(a,{visibleVersion:"version"},!0),b=c.exec(a.version),b&&(a.semver=b[1]),a):{}},getClientConfig:function(a,done,fail){M(done,fail)&&O.exec("app.getClientConfig","config","getConfigValue",{configName:a},function(a){return done(a.configValue)},fail)},setCookie:function(a,done,fail){M(done,fail,!1)&&O.exec("app.setCookie","cookie","setCookie",a,done,fail)},getCookie:function(a,done,fail){M(done,fail)&&O.exec("app.getCookie","cookie","getCookie",a,done,fail)},captureScreen:function(a,done,fail){var b;L.isFunction(a)&&(fail=done,done=a,a={}),M(done,fail)&&(b={targetWidth:100,targetHeight:100,encodingType:"png",quality:50,destinationType:"data"},a=L.extend({},b,a||{}),a.encodingType=N(a.encodingType),O.exec("app.captureScreen","app","screenCapture",a,function(b){"data"===a.destinationType&&(b.imageData="data:image/"+a.encodingType+";base64,"+b.imageData),done(b)},fail))},setScreenMode:function(a){var b;null==a&&(a="normal"),b={normal:1,enhanced:2,fullscreen:3},a=b[a]||a,O.exec("app.setScreenMode","app","config",{screenMode:a},null,null)},showTitleBar:function(){O.exec("app.showTitleBar","app","config",{isTitleBarVisible:!0},null,null)},hideTitleBar:function(){O.exec("app.hideTitleBar","app","config",{isTitleBarVisible:!1},null,null)},setTitle:function(a){""!==a&&(a=""+a,O.exec("app.setTitle","app","config",{title:a},null,null))},enterMeeting:function(a,done,fail){"object"!=typeof a&&(a={confId:a}),O.exec("app.enterMeeting","meeting","enterMeeting",a,done,fail)},onUpdate:function(a,b){var c;H.app.onUpdate.triggered||(c="kk-app-"+H.app.getAppInfo().appID+"ver",a+="",H.app.onUpdate.triggered=!0,localStorage.getItem(c)!==a&&"function"==typeof b&&b(),localStorage.setItem(c,a))}},H.ready(function(){var a;a=c.getClientInfo(),a.webServer?m=a.webServer.replace(/\/$/,""):c.getClientConfig("kk_config_webserver_http_url",function(a){m=a&&a.replace(/\/$/,"")})}),K=function(a){var b,c,d,e;if(a){b=/^\d+\.\d+$/,d={};for(c in a)if(T.call(a,c))if(e=a[c],L.isArray(e))e.length&&"number"==typeof e[0]?b.test(e[0])?d[c]=String.fromCharCode(3)+"06"+e.join(String.fromCharCode(4)):d[c]=String.fromCharCode(3)+"05"+e.join(String.fromCharCode(4)):d[c]=String.fromCharCode(3)+"04"+e.join(String.fromCharCode(4));else if("number"==typeof e)b.test(e)?d[c]=String.fromCharCode(3)+"03"+e:d[c]=String.fromCharCode(3)+"02"+e;else if("string"==typeof e)switch(e.charAt(0)){case String.fromCharCode(128):d[c]=String.fromCharCode(3)+"08"+e.slice(1);break;case String.fromCharCode(129):d[c]=String.fromCharCode(3)+"09"+e.slice(1);break;default:d[c]=String.fromCharCode(3)+"01"+e}return d}},H.app=c,s=function(){var b,c,d,e,f;return e={},c={},f=function(b){var d,e,f,g,h;if(g=b[0],f=b[1]||{},"string"==typeof g)f.url=g;else{if(!L.isObject(g))return!1;f=g}return f=L.extend(!0,{method:"POST"},c,f),"function"==typeof f.beforeSend&&f.beforeSend(f),delete f.beforeSend,null==f.contentType&&(f.contentType=c.contentType||"form"),f.__url=f.url,f.__method=String(f.method).toUpperCase(),delete f.url,delete f.method,e=f.contentType&&"form"!==f.contentType?"json"===f.contentType?"application/json":f.contentType:"application/x-www-form-urlencoded",delete f.contentType,d=f.data||{_easymi_random_:(new Date).getTime()},delete f.data,"string"!=typeof d&&(d=e.indexOf("x-www-form-urlencoded")>-1?L.toQueryString(d):e.indexOf("application/json")>-1?JSON.stringify(d):String(d)),-1===e.indexOf("charset")&&(e=e.replace(/;?\s*$/,"; charset=UTF-8")),h=a.navigator.userAgent,window.Was&&window.Was.isEmulator&&(h+=" KKEmulator"),f["User-Agent"]=h,f["Content-Type"]=e,f.__content=d,null==f.headers&&(f.headers={}),L.extend(f,f.headers,!1),delete f.headers,f.failure=f.error||f.failure,delete f.error,f},e.requestSetup=function(a){return c=a||{},this},e.request=function(){var a,done,fail,c;return c=f([].slice.call(arguments)),M(c.success,c.failure,!1)?c.__url?(a=c.dataType,done=c.success,fail=c.failure,delete c.dataType,delete c.success,delete c.failure,new h(function(d,e){return O.exec("proxy.request","message","send",c,function(c){var f;if(null===(f=b(c,a)))return e(-1,"data from server isn't a valid json string");d(f.body,f)},e)}).then(done,fail)):h.reject("url is empty"):h.reject("illegal callback")},b=function(a,b){var c,d,e;if(c=a.content,"json"===b)try{c=JSON.parse(c)}catch(a){return a,null}if(e=a.headers)try{e=new Function("return "+e)()}catch(a){a,B.error("headers if not a valid js object "+e),e=[]}else e=[];return e=e.map(function(a){return a.name=a.name.toLowerCase(),a}),d=function(a){var b;if(a=String(a).toLowerCase(),b=e.filter(function(b){return b.name===a}).map(function(a){return a.value}),b.length)return 1===b.length?b[0]:b},{body:c,rawBody:a.content,rawHeaders:a.headers,headers:e,header:e,getHeader:d}},e.vueInterceptor=function(a,b){var c,d,f;f=a.url,a.params&&(d="object"==typeof a.params?L.toQueryString(a.params):a.params,/\?(.*)$/.test(a.url)?f+=RegExp.$1.length?"&":"":f+="?",f+=d),c={url:f,contentType:a.emulateJSON?"form":"json",headers:a.headers.map,data:a.body,dataType:"json"},e.request(c).then(function(c){b(a.respondWith(c,{status:200}))},function(c,d){b(a.respondWith({code:c,message:d},{status:400}))})},d={init:function(a,done,fail,b,c){if(this.options=a,this.plugin=b,this.methods=c,M(done,fail))return this.options.taskflag=!this.options.isContinuous,this.done=done,this.fail=fail,this},start:function(){return O.exec("proxy."+this.plugin+".start",this.plugin,this.methods[0],this.options,this.done,this.fail),this},pause:function(){return O.exec("proxy."+this.plugin+".pause/resume",this.plugin,this.methods[1],{url:this.options.url}),this},resume:function(){return this.start()},stop:function(){return O.exec("proxy."+this.plugin+".stop",this.plugin,this.methods[2],{url:this.options.url}),this}},e.Download=function(a,done,fail){this.init(a,done,fail,"download",["download","pausedown","stopdown"])},L.extend(e.Download.prototype,d),e.Upload=function(a,done,fail){this.init(a,done,fail,"upload",["upload","pauseupload","stopupload"])},L.extend(e.Upload.prototype,d),e.ekpUpload=function(a,done,fail){M(done,fail,!1)&&(a.userkey&&!a.token&&(a.token=a.userkey),O.exec("proxy.uploadView","ekpupload","upload",a,done,fail))},e.uploadView=e.ekpUpload,e}(),H.proxy=s,i={setOrientation:function(a){var b;b={portrait:1,landscape:2,auto:3},a=b[a]||a,O.exec("device.setOrientation","device","setOrientation",{orientation:a},!0,D)},getOrientation:function(done){M(done)&&O.exec("device.getOrientation","device","getOrientation",null,function(a){var b;b=["portrait","landscape","auto"],done(b[a.orientation-1])})},getNetType:function(done,fail){M(done,fail)&&O.exec("device.getNetType","device","getCurrentNetType",{},function(a){done(a)},fail)},getWifiInfo:function(done,fail){if(M(done,fail))return O.exec("device.getWifiInfo","device","getWifiInfo",{},function(a){done(a)},fail)},setClipboard:function(a){O.exec("device.setClipboard","device","setClipboardData",{data:a},null,null)},support:function(a,done){M(done)&&O.exec("device.support","device","checkSupport",{features:a},done,null)}},H.device=i,u={verifyFingerprint:function(done,fail){M(done,fail)&&O.exec("security.verifyFingerprint","crypto","checkFingerPrint",{},done,fail)},checkFace:function(done,fail){M(done,fail)&&O.exec("security.checkFace","crypto","checkFace",{},function(a){return a&&a.isFirst&&(a.isFirst=1===Number(a.isFirst)),done&&done(a)},fail)}},H.security=u,p={showMenuItems:function(a){var b;b={isMenuButtonVisible:!0},null!=a&&(L.isArray(a)||(a=[a]),b.menuList=a),O.exec("menu.showMenuItems","app","config",b,null,null)},hideMenuItems:function(a){var b;b={isMenuButtonVisible:!1},null!=a&&(L.isArray(a)||(a=[a]),b.menuList=a),O.exec("menu.hideMenuItems","app","config",b,null,null)}},H.menu=p,o={getPicture:function(a,done,fail){var b;L.isFunction(a)&&(fail=done,done=a,a={}),M(done,fail)&&(b={sourceType:"camera",encodingType:"png",quality:50,destinationType:"file"},a=L.extend({},b,a||{}),a.encodingType=N(a.encodingType),L.isArray(a.savePath)&&(a.savePath=a.savePath.join(",")),a.resultFormat=1,O.exec("media.getPicture","image","getPicture",a,function(b){var c;if(c=[],b.pictures)try{c=new Function("return "+b.pictures)()}catch(a){return a,B.warn("failed to transform pictures to array: "+b.pictures),void fail(-1,"invalid arguments from native")}else c=[b];c=c.map(function(b){return"data"===a.destinationType&&(b.imageData="data:image/"+a.encodingType+";base64,"+b.imageData),b.imagePath&&(b.imageFileOSPath=b.imagePath),b.imageTime&&(b.imageTimeString=b.imageTime,b.imageTime=L.parseTime(b.imageTime)),b}),done(void 0===a.count&&1===c.length?c[0]:c)},fail))},getMultiPicture:function(a,done,fail){var b;M(done,fail)&&(b={targetWidth:100,targetHeight:100,encodingType:"jpeg",quality:50,limitTime:-1},a=L.extend({},b,a),a.exifFlag=!1,L.isArray(a.savePath)&&(a.savePath=a.savePath.join(",")),a.encodingType=N(a.encodingType),O.exec("media.getMultiPicture","image","getMultiCameraPics",a,function(a){done({imageURI:a.imageURI.split(","),imageFileOSPath:a.imageFileOSPath.split(",")})},fail))},editImage:function(a,done,fail){if(M(done,fail,!0))return O.exec("media.editImage","image","editImage",a,done,fail)},save2album:function(a,done,fail){var b;b=a.uri||a.filepath,L.isURL(b)?(a.fileURI=b,delete a.filepath):a.filepath=b,M(done,fail,!1)&&O.exec("media.save2album","image","save2album",a,done,fail)},previewImage:function(a,done,fail){a&&(L.isArray(a.paths)&&(a.paths=a.paths.join(",")),M(done,fail,!1)&&(a=L.renameKeys(a,{operations:"operation"},!0),a.operation=a.operation?1:0,O.exec("media.previewImage","image","gallery",a,done,fail)))},captureVideo:function(a,done,fail){var b;L.isFunction(a)&&(fail=done,done=a,a={}),M(done,fail)&&(b={quality:"LOW"},a=L.extend({},b,a||{}),O.exec("media.captureVideo","media","captureVideo",a,done,fail))},captureAudio:function(done,fail){M(done,fail)&&O.exec("media.captureAudio","media","captureAudioView",{},done,fail)},playAudio:function(a,fail){var b;b=M(null,fail,!1),b[0],fail=b[1],O.exec("media.playAudio","media","playAudioView",{fileurl:a},!0,fail)},getSignImage:function(a,done,fail){var b;M(done,fail)&&(b={penSize:2,penColor:"black"},a=L.extend({},b,a||{}),O.exec("media.getSignImage","image","getSignImage",a,done,fail))}},H.media=o,b={startVoiceRecognition:function(done,fail){var a;M(done,fail)&&(a=["identifying","finish","fail"],O.exec("ai.startVoiceRecognition","ai","startVoiceRecognition",{},function(b){var c;return b&&(c=parseInt(b.state,10),b.state=a[c-1]||""),done&&done(b)},fail))},stopVoiceRecognition:function(fail){L.isFunction(fail)||(fail=D),O.exec("ai.stopVoiceRecognition","ai","stopVoiceRecognition",{},null,fail)}},H.ai=b,k=function(){function a(a){this.fileName=a}return a.prototype.getOSPath=function(done,fail){return F.getOSPath(this.fileName,done,fail)},a.prototype.info=function(done,fail){return F.getFileInfo(this.fileName,done,fail)},a.prototype.exists=function(done,fail){return F.exists(this.fileName,done,fail)},a.prototype.exist=a.prototype.exists,a.prototype.remove=function(done,fail){return F.remove(this.fileName,done,fail)},a.prototype.view=function(a,done,fail){return L.type(a,"function")?(fail=done,done=a,a=this.fileName):a=L.extend(!0,a,{filepath:this.fileName}),F.view(a,done,fail)},a.prototype.readAsText=function(a,done,fail){var b;return L.isFunction(a)&&(fail=done,done=a,a="utf-8"),b={filepath:this.fileName,encoding:a},F.readAsText(b,done,fail)},a.prototype.readAsBase64=function(done,fail){return F.readAsBase64(this.fileName,done,fail)},a.prototype.copyTo=function(a,done,fail){var b;return b={source:this.fileName,target:a},F.copy(b,done,fail)},a}(),H.File=k,F={getOSPath:function(a,done,fail){M(done,fail)&&O.exec("file.getOSPath","file","getFileOSPath",{EasyMIPath:a},done,fail)},getFileInfo:function(a,done,fail){M(done,fail)&&O.exec("file.getFileInfo","file","info",{filepath:a},function(a){a.isDir=1==+a.isDir,done(a)},fail)},exists:function(a,done,fail){if(M(done,fail))return O.exec("file.exists","file","exists",{filepath:a},done,function(a,b){B.debug("[file][exist][failCB]"+a+", "+b),1===a?done({exists:!1}):fail(a,b)})},remove:function(a,done,fail){if(M(done,fail,!1))return O.exec("file.remove","file","delete",{filepath:a,needConfirm:0},done,fail)},view:function(a,done,fail){var b,c,d;if(M(done,fail,!1))switch(c={},L.type(a,"string")&&(a={filepath:a},L.isURL(a.filepath)&&(a.useWebview=!0)),L.isURL(a.filepath)&&(a.mimeType="text/html"),a=L.extend(!0,c,a),a.via){case"wps":d={readonly:0,edit:1},a.mode=d[a.mode]||d.readonly,delete a.via,delete a.title,delete a.mimeType,b=["open","save","close"],O.exec("file.view","wps","openFile",a,function(a){var c;return a&&(c=parseInt(a.operation,10),a.operation=b[c-1]||""),done&&done(a)},fail);break;case"pdf":delete a.via,delete a.title,delete a.mimeType,b=["open","save","close"],O.exec("file.view","wps","signPDF",a,function(a){var c;return a&&(c=parseInt(a.operation,10),a.operation=b[c-1]||""),done&&done(a)},fail);break;default:null!=a.via&&("webview"===a.via?a.useWebview=!0:delete a.useWebview),O.exec("file.view","file","viewdoc",a,done,fail)}},readAsText:function(a,done,fail){var b;if(M(done,fail)){if(b={encode:"utf-8"},L.type(a,"string"))b.filepath=a;else{if(!L.type(a,"object"))return;b=L.extend(!0,b,a)}a=L.extend(!0,{},b),a.encoding&&(a.encode=a.encoding),O.exec("file.readAsText","file","getFileContent",a,done,fail)}},readAsBase64:function(a,done,fail){if(M(done,fail))return O.exec("file.readAsBase64","file","getFileContent",{filepath:a,filetype:2},done,fail)},copy:function(a,done,fail){M(done,fail,!1)&&O.exec("file.copy","file","copy",a,done,fail)},chooseFile:function(done,fail){M(done,fail)&&O.exec("file.chooseFile","file","chooseFile",{},done,fail)},canUseJinGe:function(done,fail){M(done,fail)&&O.exec("file.canUseJinGe","wps","canUseJinGe",{},function(a){return a&&(a.office=!Boolean(parseInt(a.office,10)-1),a.pdf=!Boolean(parseInt(a.pdf,10)-1)),done&&done(a)},fail)}},H.file=F,f={add:function(a,done,fail){M(done,fail,!1)&&O.exec("contact.add","contact","add",a,done,fail)},remove:function(a,done,fail){M(done,fail,!1)&&O.exec("contact.remove","contact","delete",{id:a},done,fail)},update:function(a,done,fail){M(done,fail,!1)&&O.exec("contact.update","contact","update",a,done,fail)},find:function(a,done,fail){M(done,fail)&&O.exec("contact.find","contact","find",a,function(a){var b,c,d,e,f;for(b=[],e=a.count,d=0;d<e;)c="return "+a["record"+d],f=new Function(c)(),b.push(f),++d;done(b)},fail)},choose:function(a,done,fail){var b;if(b={mode:1},"function"==typeof a&&(fail=done,done=a,a={}),a=L.extend(b,a),M(done,fail))return O.exec("contact.choose","contact","choose",a,function(a){var b;b=new Function("return "+a.contactors)(),done(b)},fail)}},H.contact=f,t={scanBarCode:function(done,fail){M(done,fail)&&O.exec("scaner.scanBarCode","barcode","getBarcode",{},done,fail)},scanQRCode:function(done,fail){M(done,fail)&&O.exec("scaner.scanQRCode","barcode","getTdBarcode",{},done,fail)},getQRCode:function(a,done,fail){M(done,fail)&&O.exec("scaner.getQRCode","barcode","genQRCode",a,function(b){"data"===a.destinationType&&(b.imageData="data:image/png;base64,"+b.imageData),done(b)},fail)}},t.scanTDCode=t.scanQRCode,C=function(a,b){return function(c,done,fail){switch(typeof c){case"function":fail=done,done=c,c={};break;case"string":c={hintMsg:c};break;default:c=L.renameKeys(c,{hint:"hintMsg"},!0)}M(done,fail)&&O.exec("scaner."+a,"ocr",a,c,function(a){a=b?b(a):a,done(a)},fail)}},t.scanIDCard=C("scanIDCard",function(a){return a&&"string"==typeof a.isFront&&(a.isFront="1"===a.isFront),a}),t.scanVLCard=C("scanVLCard"),t.scanDLCard=C("scanDLCard"),t.scanBankCard=C("scanBankCard"),t.scanText=C("scanText"),H.scaner=t,j={choose:function(a,done,fail){var b;L.isFunction(a)&&(fail=done,done=a,a={}),M(done,fail)&&(b={initList:[],isSticky:!1,stickyList:[],maxCount:0,isSelfSticky:!1},a=L.extend(b,a||{}),L.isArray(a.initList)&&(a.initList=a.initList.join(",")),a.initList=String(a.initList),L.isArray(a.stickyList)&&(a.stickyList=a.stickyList.join(",")),a.stickyList=String(a.stickyList),O.exec("econtact.choose","contactor","chooseContactors",a,function(a){done(J(a))},fail))},getUserInfoById:function(){var a;return a=1<=arguments.length?S.call(arguments,0):[],a[0]&&(a[0]={userList:a[0]}),j.getUserInfo.apply(j,a)},getUserInfo:function(a,done,fail){var b;if(b={type:"userID",userList:Was.userInfo.userID},0===arguments.length)return Was.userInfo.loginName||(Was.userInfo.loginName=Was.userInfo.userName),L.extend({},Was.userInfo);if(L.type(a,"function"))fail=null,L.type(done,"function")&&(fail=done),done=a,a={};else if(L.type(a,"object")){if(!M(done,fail))return}else{if(!M(done,fail))return;a={userList:a}}a=L.extend(!0,b,a),L.isArray(a.userList)||(a.userList=[a.userList]),a.ids=a.userList.join(","),O.exec("econtact.getUserInfo","contactor","getContactorDetail",a,function(a){done(J(a))},fail)},getUserAvatar:function(a,b){var c;return L.type(a,"boolean")&&(a=!1),b=a&&b,a=a||Was.userInfo.loginName,c=b?"userId=":"user=",m+"/serverj/readUserIcon?"+c+encodeURIComponent(a)},startChat:function(a,done,fail){a=L.renameKeys(a,{userID:"recieverID",loginName:"recieverName"}),M(done,fail,!1)&&O.exec("econtact.startChat","im","sendP2P",a,done,fail)},showECard:function(a,done,fail){a=L.renameKeys(a,{userID:"personID",loginName:"personName"}),M(done,fail,!1)&&O.exec("econtact.showECard","contactor","showPersonDetailView",a,done,fail)},sendGroup:function(a,done,fail){M(done,fail,!1)&&O.exec("econtact.sendGroup","im","sendGroup",a,done,fail)},createBizGroup:function(a,done,fail){M(done,fail,!1)&&(L.type(a.time,"string")&&(a.time=a.time.replace(/[^0-9]/g,"")),L.type(a.users,"array")&&(a.users=a.users.join(",")),O.exec("econtact.createBizGroup","im","createBizGroup",a,done,fail))},isBizGroupExists:function(a,done,fail){M(done,fail)&&O.exec("econtact.isBizGroupExists","im","isBizGroupExists",a,done,fail)},genBizGroupChatMsgUrl:function(a,done,fail){M(done,fail)&&(L.type(a.endTime,"string")&&(a.endTime=a.endTime.replace(/[^0-9]/g,"")),O.exec("econtact.genBizGroupChatMsgUrl","im","genBizGroupChatMsgUrl",a,done,fail))}},J=function(a){return a&&a.contactors?(a=new Function("return "+a.contactors)(),a=a.map(function(a){return a.deptPath=a.deptPath?a.deptPath.split(String.fromCharCode(3)):[],a.jobTitle=a.job,a.signature=a.sign,delete a.sign,delete a.job,a})):a=[],a},H.econtact=j,g={encrypt:function(a,done,fail){M(done,fail)&&O.exec("crypto.encrypt","crypto","AESEncode",a,done,fail)},decrypt:function(a,done,fail){M(done,fail)&&O.exec("crypto.decrypt","crypto","AESDecode",a,done,fail)},obscureFile:function(a,done,fail){M(done,fail,!1)&&O.exec("crypto.obscureFile","crypto","obscureFile",a,done,fail)},restoreFile:function(a,done,fail){M(done,fail,!1)&&O.exec("crypto.restoreFile","crypto","restoreFile",a,done,fail)}},H.crypto=g,n={getLocation:function(done,fail){M(done,fail)&&O.exec("location.getLocation","location","locate",{type:"Cell"},done,fail)},navigate:function(a,done,fail){M(done,fail,!1)&&O.exec("location.navigate","location","navigate",a,done,fail)}},H.location=n,v={to:function(a,b,done,fail){var c,d,e;if(d={user:1,group:2},e={text:1,card:10},c={type:"card",showChooseView:!0},!b||L.type(b,"function")?(fail=done,done=b,b={url:H.app.isOfflineApp()?v.getAppShareLink():location.href}):L.type(b,"string")&&(L.isURL(b)?b={url:b}:"kk"===a&&(b={content:b,type:"text"})),!L.type(b,"object"))return void fail(-6,"参数错误");if(M(done,fail,!1))switch(b=L.extend(!0,{},c,b),b.type=e[b.type]||1,b.content&&!b.summary&&(b.summary=b.content),a){case"weixin":"moments"===b.shareTo?b.shareTo="weixin_friends":b.shareTo="weixin_msg",O.exec("share.to","share","shareUrl",b,done,function(a,b){switch(a){case 3:return fail(-1,b);default:return fail(a,b)}});break;case"kk":return b.recieverType&&(b.recieverType=d[b.recieverType]),b.recieverList&&(b.recieverList=[].concat(b.recieverList).join(",")),10===b.type&&(b.imageUri&&(b.picUrl=b.imageUri),b.url&&(b.linkUrl=b.url)),void O.exec("share.to","im","send",b,done,fail);default:fail(-6,"参数错误")}},appMessage:function(a,done,fail){var b,c;if(M(done,fail,!1))return b=L.extend(!0,{},a,{type:"card"}),c=L.extend(!0,{},b),delete c.type,delete c.title,delete c.content,delete c.recieverType,delete c.recieverList,delete c.showChooseView,b.linkUrl=b.linkUrl||v.getAppShareLink(c),delete b.data,v.to("kk",b,done,fail)},getAppShareLink:function(a){var b,c,d;return c=L.extend(!0,{},a),c.data&&(c.data=JSON.stringify(c.data)),d=L.extend(!0,{targetType:"universal",targetPlatform:"mobile"},c,{appCode:Was.appInfo.code,appName:Was.appInfo.name}),b=m+"/serverj/open-kk-app/",b+="?"+L.toQueryString(d)}},H.share=v,q={weixin:function(a,done,fail){var b;M(done,fail)&&(b={},a=L.extend(b,a||{}),O.exec("pay.weixin","pay","weixinAppPay",a,done,fail))}},H.pay=q,d={addEvent:function(a,done,fail){M(done,fail,!0)&&(L.type(a.startT,"string")&&(a.startT=a.startT.replace(/[^0-9]/g,"")),12===a.startT.length&&(a.startT+="00"),L.type(a.endT,"string")&&(a.endT=a.endT.replace(/[^0-9]/g,"")),12===a.endT.length&&(a.endT+="00"),L.type(a.repeatEndValue,"string")&&(a.repeatEndValue=a.repeatEndValue.replace(/[^0-9]/g,"")),L.isArray(a.alarms)&&(a.alarms=a.alarms.join(",")),L.isArray(a.daysOfWeek)&&(a.daysOfWeek=a.daysOfWeek.join(",")),a.allDay=Number(a.allDay),O.exec("calendar.addEvent","calendar","addCalendarEvent",a,done,fail))}},H.calendar=d,r={call:function(a,done,fail){var b;M(done,fail,!1)&&(b=a,"number"==typeof a&&(b={number:a}),b&&(b.needCallSessionInfo=Number(b.needCallSessionInfo)||0),O.exec("phone.call","phone","call",b,function(a){b.needCallSessionInfo&&a&&2===(a.callState=Number(a.callState)||1)&&(a.startTimeString=a.startTime,a.startTime=L.parseTime(a.startTime),a.endTimeString=a.endTime,a.endTime=L.parseTime(a.endTime)),done&&done(a)},fail))},sms:function(a,b){var c;null==b&&(b=""),c={number:a,content:b},O.exec("phone.sms","sms","send",c)}},H.phone=r,z={zip:function(a,done,fail){M(done,fail,!1)&&(a.folderPath&&(a.FolderPath=a.folderPath),a.filePaths&&(L.isArray(a.filePaths)&&(a.filePaths=a.filePaths.join(",")),a.toZipFiles=a.filePaths),O.exec("zip.zip","zip","zip",a,done,fail))},unzip:function(a,done,fail){M(done,fail,!1)&&O.exec("zip.unzip","zip","unzip",{zipFilePath:a.zipFilePath,outPath:a.outPath},done,fail)}},H.zip=z,l={canGo:function(done){M(done)&&O.exec("history.canGo","app","canGo",{},done,D)},hasPrev:function(done){M(done)&&l.canGo(function(a){done({hasPrev:a.canGoBack})})},back:function(fail){L.isFunction(fail)||(fail=D),O.exec("history.back","app","goBack",{},null,fail)},forward:function(fail){L.isFunction(fail)||(fail=D),O.exec("history.forward","app","goForward",{},null,fail)}},H.history=l,x={init:function(done,fail){M(done,fail,!1)&&O.exec("workspace.init","workspace","load",null,done,fail)},getUserApps:function(done,fail){M(done,fail)&&O.exec("workspace.getUserApps","workspace","getUserFavoriteApps",null,function(a){done(a.data.map(I))},fail)},launchApp:function(a,done,fail){M(done,fail,!1)&&O.exec("workspace.launchApp","workspace","launchApp",a,done,fail)},downloadApp:function(a,done,fail){M(done,fail,!1)&&O.exec("workspace.downloadApp","workspace","downloadApp",a,done,fail)},installApp:function(a,done,fail){M(done,fail,!1)&&O.exec("workspace.installApp","workspace","installApp",a,done,fail)},getAds:function(done,fail){M(done,fail)&&O.exec("workspace.getAds","workspace","getAds",null,function(a){return done(a.data)},fail)}},I=function(a){var b,c;return c=["","hybird","native","hidden","online"],b=["","notdownload","normal","hasnew","notinstall"],a.type=c[a.type]||"ERROR-TYPE",a.status=b[a.status]||"ERROR-STATUS",a},H.workspace=x,y=function(){var a,b;return function(fail){return function(a,b){L.isFunction(fail)?fail({errMsg:b,code:a}):D(a,b)}},a=null,b={ready:function(a){H.ready(a)},error:function(){},checkJsApi:function(a){var c,d,e,f,g;for(c=a.jsApiList,e={},f=0,g=c.length;f<g;f++)d=c[f],e[d]=!!b[d];a.success({checkResult:e,errMsg:"checkJsApi:ok"})},previewImage:function(a){a.current&&(a.current=a.urls.indexOf(current)),a.paths=a.urls,a.current=a.current||0,H.media.previewImage(a)},startRecord:function(){H.media.captureAudio(function(b){"function"==typeof a&&a(b),a=null})},stopRecord:function(b){a=b.success},onVoiceRecordEnd:function(){},playVoice:function(a){H.media.playAudio(a.localId)},getNetworkType:function(a){H.device.getNetType(function(b){a.success({networkType:b.netType.toLowerCase()})})},getLocation:function(a){H.location.getLocation(a.success)},closeWindow:function(){H.app.exit()},scanQRCode:function(a){var b;b=a.scanType,b=b?b[0]:"qrCode",b="barCode"===b?"scanBarCode":"scanTDCode",H.scaner[b](function(b){"function"==typeof a.success&&a.success({resultStr:b.code})})}},b.kk=!0,b}(),H.wx=y,H});