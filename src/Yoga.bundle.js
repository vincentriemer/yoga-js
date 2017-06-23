/*!
 * BSD License
 * 
 * For yoga software
 * 
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 * 
 *  * Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 * 
 *  * Neither the name Facebook nor the names of its contributors may be used to
 *    endorse or promote products derived from this software without specific
 *    prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Yoga"] = factory();
	else
		root["Yoga"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, Buffer) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;((function(root,wrapper){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return wrapper}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if(typeof module=="object"&&module.exports)module.exports=wrapper;else(root.nbind=root.nbind||{}).init=wrapper}))(this,(function(Module,cb){if(typeof Module=="function"){cb=Module;Module={}}Module.onRuntimeInitialized=(function(init,cb){return(function(){if(init)init.apply(this,arguments);try{Module.ccall("nbind_init")}catch(err){cb(err);return}cb(null,{bind:Module._nbind_value,reflect:Module.NBind.reflect,queryType:Module.NBind.queryType,toggleLightGC:Module.toggleLightGC,lib:Module})})})(Module.onRuntimeInitialized,cb);var Module;if(!Module)Module=(typeof Module!=="undefined"?Module:null)||{};var moduleOverrides={};for(var key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}var ENVIRONMENT_IS_WEB=false;var ENVIRONMENT_IS_WORKER=false;var ENVIRONMENT_IS_NODE=false;var ENVIRONMENT_IS_SHELL=false;if(Module["ENVIRONMENT"]){if(Module["ENVIRONMENT"]==="WEB"){ENVIRONMENT_IS_WEB=true}else if(Module["ENVIRONMENT"]==="WORKER"){ENVIRONMENT_IS_WORKER=true}else if(Module["ENVIRONMENT"]==="NODE"){ENVIRONMENT_IS_NODE=true}else if(Module["ENVIRONMENT"]==="SHELL"){ENVIRONMENT_IS_SHELL=true}else{throw new Error("The provided Module['ENVIRONMENT'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.")}}else{ENVIRONMENT_IS_WEB=typeof window==="object";ENVIRONMENT_IS_WORKER=typeof importScripts==="function";ENVIRONMENT_IS_NODE=typeof process==="object"&&"function"==="function"&&!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_WORKER;ENVIRONMENT_IS_SHELL=!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_NODE&&!ENVIRONMENT_IS_WORKER}if(ENVIRONMENT_IS_NODE){if(!Module["print"])Module["print"]=console.log;if(!Module["printErr"])Module["printErr"]=console.warn;var nodeFS;var nodePath;Module["read"]=function shell_read(filename,binary){if(!nodeFS)nodeFS=__webpack_require__(7);if(!nodePath)nodePath=__webpack_require__(8);filename=nodePath["normalize"](filename);var ret=nodeFS["readFileSync"](filename);return binary?ret:ret.toString()};Module["readBinary"]=function readBinary(filename){var ret=Module["read"](filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}assert(ret.buffer);return ret};Module["load"]=function load(f){globalEval(read(f))};if(!Module["thisProgram"]){if(process["argv"].length>1){Module["thisProgram"]=process["argv"][1].replace(/\\/g,"/")}else{Module["thisProgram"]="unknown-program"}}Module["arguments"]=process["argv"].slice(2);if(true){module["exports"]=Module}process["on"]("uncaughtException",(function(ex){if(!(ex instanceof ExitStatus)){throw ex}}));Module["inspect"]=(function(){return"[Emscripten Module object]"})}else if(ENVIRONMENT_IS_SHELL){if(!Module["print"])Module["print"]=print;if(typeof printErr!="undefined")Module["printErr"]=printErr;if(typeof read!="undefined"){Module["read"]=read}else{Module["read"]=function shell_read(){throw"no read() available"}}Module["readBinary"]=function readBinary(f){if(typeof readbuffer==="function"){return new Uint8Array(readbuffer(f))}var data=read(f,"binary");assert(typeof data==="object");return data};if(typeof scriptArgs!="undefined"){Module["arguments"]=scriptArgs}else if(typeof arguments!="undefined"){Module["arguments"]=arguments}if(typeof quit==="function"){Module["quit"]=(function(status,toThrow){quit(status)})}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){Module["read"]=function shell_read(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){Module["readBinary"]=function readBinary(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return xhr.response}}Module["readAsync"]=function readAsync(url,onload,onerror){var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=function xhr_onload(){if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response)}else{onerror()}};xhr.onerror=onerror;xhr.send(null)};if(typeof arguments!="undefined"){Module["arguments"]=arguments}if(typeof console!=="undefined"){if(!Module["print"])Module["print"]=function shell_print(x){console.log(x)};if(!Module["printErr"])Module["printErr"]=function shell_printErr(x){console.warn(x)}}else{var TRY_USE_DUMP=false;if(!Module["print"])Module["print"]=TRY_USE_DUMP&&typeof dump!=="undefined"?(function(x){dump(x)}):(function(x){})}if(ENVIRONMENT_IS_WORKER){Module["load"]=importScripts}if(typeof Module["setWindowTitle"]==="undefined"){Module["setWindowTitle"]=(function(title){document.title=title})}}else{throw"Unknown runtime environment. Where are we?"}function globalEval(x){eval.call(null,x)}if(!Module["load"]&&Module["read"]){Module["load"]=function load(f){globalEval(Module["read"](f))}}if(!Module["print"]){Module["print"]=(function(){})}if(!Module["printErr"]){Module["printErr"]=Module["print"]}if(!Module["arguments"]){Module["arguments"]=[]}if(!Module["thisProgram"]){Module["thisProgram"]="./this.program"}if(!Module["quit"]){Module["quit"]=(function(status,toThrow){throw toThrow})}Module.print=Module["print"];Module.printErr=Module["printErr"];Module["preRun"]=[];Module["postRun"]=[];for(var key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}moduleOverrides=undefined;var Runtime={setTempRet0:(function(value){tempRet0=value;return value}),getTempRet0:(function(){return tempRet0}),stackSave:(function(){return STACKTOP}),stackRestore:(function(stackTop){STACKTOP=stackTop}),getNativeTypeSize:(function(type){switch(type){case"i1":case"i8":return 1;case"i16":return 2;case"i32":return 4;case"i64":return 8;case"float":return 4;case"double":return 8;default:{if(type[type.length-1]==="*"){return Runtime.QUANTUM_SIZE}else if(type[0]==="i"){var bits=parseInt(type.substr(1));assert(bits%8===0);return bits/8}else{return 0}}}}),getNativeFieldSize:(function(type){return Math.max(Runtime.getNativeTypeSize(type),Runtime.QUANTUM_SIZE)}),STACK_ALIGN:16,prepVararg:(function(ptr,type){if(type==="double"||type==="i64"){if(ptr&7){assert((ptr&7)===4);ptr+=4}}else{assert((ptr&3)===0)}return ptr}),getAlignSize:(function(type,size,vararg){if(!vararg&&(type=="i64"||type=="double"))return 8;if(!type)return Math.min(size,8);return Math.min(size||(type?Runtime.getNativeFieldSize(type):0),Runtime.QUANTUM_SIZE)}),dynCall:(function(sig,ptr,args){if(args&&args.length){return Module["dynCall_"+sig].apply(null,[ptr].concat(args))}else{return Module["dynCall_"+sig].call(null,ptr)}}),functionPointers:[],addFunction:(function(func){for(var i=0;i<Runtime.functionPointers.length;i++){if(!Runtime.functionPointers[i]){Runtime.functionPointers[i]=func;return 2*(1+i)}}throw"Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS."}),removeFunction:(function(index){Runtime.functionPointers[(index-2)/2]=null}),warnOnce:(function(text){if(!Runtime.warnOnce.shown)Runtime.warnOnce.shown={};if(!Runtime.warnOnce.shown[text]){Runtime.warnOnce.shown[text]=1;Module.printErr(text)}}),funcWrappers:{},getFuncWrapper:(function(func,sig){assert(sig);if(!Runtime.funcWrappers[sig]){Runtime.funcWrappers[sig]={}}var sigCache=Runtime.funcWrappers[sig];if(!sigCache[func]){if(sig.length===1){sigCache[func]=function dynCall_wrapper(){return Runtime.dynCall(sig,func)}}else if(sig.length===2){sigCache[func]=function dynCall_wrapper(arg){return Runtime.dynCall(sig,func,[arg])}}else{sigCache[func]=function dynCall_wrapper(){return Runtime.dynCall(sig,func,Array.prototype.slice.call(arguments))}}}return sigCache[func]}),getCompilerSetting:(function(name){throw"You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work"}),stackAlloc:(function(size){var ret=STACKTOP;STACKTOP=STACKTOP+size|0;STACKTOP=STACKTOP+15&-16;return ret}),staticAlloc:(function(size){var ret=STATICTOP;STATICTOP=STATICTOP+size|0;STATICTOP=STATICTOP+15&-16;return ret}),dynamicAlloc:(function(size){var ret=HEAP32[DYNAMICTOP_PTR>>2];var end=(ret+size+15|0)&-16;HEAP32[DYNAMICTOP_PTR>>2]=end;if(end>=TOTAL_MEMORY){var success=enlargeMemory();if(!success){HEAP32[DYNAMICTOP_PTR>>2]=ret;return 0}}return ret}),alignMemory:(function(size,quantum){var ret=size=Math.ceil(size/(quantum?quantum:16))*(quantum?quantum:16);return ret}),makeBigInt:(function(low,high,unsigned){var ret=unsigned?+(low>>>0)+ +(high>>>0)*+4294967296:+(low>>>0)+ +(high|0)*+4294967296;return ret}),GLOBAL_BASE:8,QUANTUM_SIZE:4,__dummy__:0};Module["Runtime"]=Runtime;var ABORT=0;var EXITSTATUS=0;function assert(condition,text){if(!condition){abort("Assertion failed: "+text)}}function getCFunc(ident){var func=Module["_"+ident];if(!func){try{func=eval("_"+ident)}catch(e){}}assert(func,"Cannot call unknown function "+ident+" (perhaps LLVM optimizations or closure removed it?)");return func}var cwrap,ccall;((function(){var JSfuncs={"stackSave":(function(){Runtime.stackSave()}),"stackRestore":(function(){Runtime.stackRestore()}),"arrayToC":(function(arr){var ret=Runtime.stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}),"stringToC":(function(str){var ret=0;if(str!==null&&str!==undefined&&str!==0){var len=(str.length<<2)+1;ret=Runtime.stackAlloc(len);stringToUTF8(str,ret,len)}return ret})};var toC={"string":JSfuncs["stringToC"],"array":JSfuncs["arrayToC"]};ccall=function ccallFunc(ident,returnType,argTypes,args,opts){var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=Runtime.stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func.apply(null,cArgs);if(returnType==="string")ret=Pointer_stringify(ret);if(stack!==0){if(opts&&opts.async){EmterpreterAsync.asyncFinalizers.push((function(){Runtime.stackRestore(stack)}));return}Runtime.stackRestore(stack)}return ret};var sourceRegex=/^function\s*[a-zA-Z$_0-9]*\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/;function parseJSFunc(jsfunc){var parsed=jsfunc.toString().match(sourceRegex).slice(1);return{arguments:parsed[0],body:parsed[1],returnValue:parsed[2]}}var JSsource=null;function ensureJSsource(){if(!JSsource){JSsource={};for(var fun in JSfuncs){if(JSfuncs.hasOwnProperty(fun)){JSsource[fun]=parseJSFunc(JSfuncs[fun])}}}}cwrap=function cwrap(ident,returnType,argTypes){argTypes=argTypes||[];var cfunc=getCFunc(ident);var numericArgs=argTypes.every((function(type){return type==="number"}));var numericRet=returnType!=="string";if(numericRet&&numericArgs){return cfunc}var argNames=argTypes.map((function(x,i){return"$"+i}));var funcstr="(function("+argNames.join(",")+") {";var nargs=argTypes.length;if(!numericArgs){ensureJSsource();funcstr+="var stack = "+JSsource["stackSave"].body+";";for(var i=0;i<nargs;i++){var arg=argNames[i],type=argTypes[i];if(type==="number")continue;var convertCode=JSsource[type+"ToC"];funcstr+="var "+convertCode.arguments+" = "+arg+";";funcstr+=convertCode.body+";";funcstr+=arg+"=("+convertCode.returnValue+");"}}var cfuncname=parseJSFunc((function(){return cfunc})).returnValue;funcstr+="var ret = "+cfuncname+"("+argNames.join(",")+");";if(!numericRet){var strgfy=parseJSFunc((function(){return Pointer_stringify})).returnValue;funcstr+="ret = "+strgfy+"(ret);"}if(!numericArgs){ensureJSsource();funcstr+=JSsource["stackRestore"].body.replace("()","(stack)")+";"}funcstr+="return ret})";return eval(funcstr)}}))();Module["ccall"]=ccall;Module["cwrap"]=cwrap;function setValue(ptr,value,type,noSafe){type=type||"i8";if(type.charAt(type.length-1)==="*")type="i32";switch(type){case"i1":HEAP8[ptr>>0]=value;break;case"i8":HEAP8[ptr>>0]=value;break;case"i16":HEAP16[ptr>>1]=value;break;case"i32":HEAP32[ptr>>2]=value;break;case"i64":tempI64=[value>>>0,(tempDouble=value,+Math_abs(tempDouble)>=+1?tempDouble>+0?(Math_min(+Math_floor(tempDouble/+4294967296),+4294967295)|0)>>>0:~~+Math_ceil((tempDouble- +(~~tempDouble>>>0))/+4294967296)>>>0:0)],HEAP32[ptr>>2]=tempI64[0],HEAP32[ptr+4>>2]=tempI64[1];break;case"float":HEAPF32[ptr>>2]=value;break;case"double":HEAPF64[ptr>>3]=value;break;default:abort("invalid type for setValue: "+type)}}Module["setValue"]=setValue;function getValue(ptr,type,noSafe){type=type||"i8";if(type.charAt(type.length-1)==="*")type="i32";switch(type){case"i1":return HEAP8[ptr>>0];case"i8":return HEAP8[ptr>>0];case"i16":return HEAP16[ptr>>1];case"i32":return HEAP32[ptr>>2];case"i64":return HEAP32[ptr>>2];case"float":return HEAPF32[ptr>>2];case"double":return HEAPF64[ptr>>3];default:abort("invalid type for setValue: "+type)}return null}Module["getValue"]=getValue;var ALLOC_NORMAL=0;var ALLOC_STACK=1;var ALLOC_STATIC=2;var ALLOC_DYNAMIC=3;var ALLOC_NONE=4;Module["ALLOC_NORMAL"]=ALLOC_NORMAL;Module["ALLOC_STACK"]=ALLOC_STACK;Module["ALLOC_STATIC"]=ALLOC_STATIC;Module["ALLOC_DYNAMIC"]=ALLOC_DYNAMIC;Module["ALLOC_NONE"]=ALLOC_NONE;function allocate(slab,types,allocator,ptr){var zeroinit,size;if(typeof slab==="number"){zeroinit=true;size=slab}else{zeroinit=false;size=slab.length}var singleType=typeof types==="string"?types:null;var ret;if(allocator==ALLOC_NONE){ret=ptr}else{ret=[typeof _malloc==="function"?_malloc:Runtime.staticAlloc,Runtime.stackAlloc,Runtime.staticAlloc,Runtime.dynamicAlloc][allocator===undefined?ALLOC_STATIC:allocator](Math.max(size,singleType?1:types.length))}if(zeroinit){var ptr=ret,stop;assert((ret&3)==0);stop=ret+(size&~3);for(;ptr<stop;ptr+=4){HEAP32[ptr>>2]=0}stop=ret+size;while(ptr<stop){HEAP8[ptr++>>0]=0}return ret}if(singleType==="i8"){if(slab.subarray||slab.slice){HEAPU8.set(slab,ret)}else{HEAPU8.set(new Uint8Array(slab),ret)}return ret}var i=0,type,typeSize,previousType;while(i<size){var curr=slab[i];if(typeof curr==="function"){curr=Runtime.getFunctionIndex(curr)}type=singleType||types[i];if(type===0){i++;continue}if(type=="i64")type="i32";setValue(ret+i,curr,type);if(previousType!==type){typeSize=Runtime.getNativeTypeSize(type);previousType=type}i+=typeSize}return ret}Module["allocate"]=allocate;function getMemory(size){if(!staticSealed)return Runtime.staticAlloc(size);if(!runtimeInitialized)return Runtime.dynamicAlloc(size);return _malloc(size)}Module["getMemory"]=getMemory;function Pointer_stringify(ptr,length){if(length===0||!ptr)return"";var hasUtf=0;var t;var i=0;while(1){t=HEAPU8[ptr+i>>0];hasUtf|=t;if(t==0&&!length)break;i++;if(length&&i==length)break}if(!length)length=i;var ret="";if(hasUtf<128){var MAX_CHUNK=1024;var curr;while(length>0){curr=String.fromCharCode.apply(String,HEAPU8.subarray(ptr,ptr+Math.min(length,MAX_CHUNK)));ret=ret?ret+curr:curr;ptr+=MAX_CHUNK;length-=MAX_CHUNK}return ret}return Module["UTF8ToString"](ptr)}Module["Pointer_stringify"]=Pointer_stringify;function AsciiToString(ptr){var str="";while(1){var ch=HEAP8[ptr++>>0];if(!ch)return str;str+=String.fromCharCode(ch)}}Module["AsciiToString"]=AsciiToString;function stringToAscii(str,outPtr){return writeAsciiToMemory(str,outPtr,false)}Module["stringToAscii"]=stringToAscii;var UTF8Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(u8Array,idx){var endPtr=idx;while(u8Array[endPtr])++endPtr;if(endPtr-idx>16&&u8Array.subarray&&UTF8Decoder){return UTF8Decoder.decode(u8Array.subarray(idx,endPtr))}else{var u0,u1,u2,u3,u4,u5;var str="";while(1){u0=u8Array[idx++];if(!u0)return str;if(!(u0&128)){str+=String.fromCharCode(u0);continue}u1=u8Array[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}u2=u8Array[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u3=u8Array[idx++]&63;if((u0&248)==240){u0=(u0&7)<<18|u1<<12|u2<<6|u3}else{u4=u8Array[idx++]&63;if((u0&252)==248){u0=(u0&3)<<24|u1<<18|u2<<12|u3<<6|u4}else{u5=u8Array[idx++]&63;u0=(u0&1)<<30|u1<<24|u2<<18|u3<<12|u4<<6|u5}}}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}}}Module["UTF8ArrayToString"]=UTF8ArrayToString;function UTF8ToString(ptr){return UTF8ArrayToString(HEAPU8,ptr)}Module["UTF8ToString"]=UTF8ToString;function stringToUTF8Array(str,outU8Array,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127){if(outIdx>=endIdx)break;outU8Array[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;outU8Array[outIdx++]=192|u>>6;outU8Array[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;outU8Array[outIdx++]=224|u>>12;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else if(u<=2097151){if(outIdx+3>=endIdx)break;outU8Array[outIdx++]=240|u>>18;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else if(u<=67108863){if(outIdx+4>=endIdx)break;outU8Array[outIdx++]=248|u>>24;outU8Array[outIdx++]=128|u>>18&63;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else{if(outIdx+5>=endIdx)break;outU8Array[outIdx++]=252|u>>30;outU8Array[outIdx++]=128|u>>24&63;outU8Array[outIdx++]=128|u>>18&63;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}}outU8Array[outIdx]=0;return outIdx-startIdx}Module["stringToUTF8Array"]=stringToUTF8Array;function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}Module["stringToUTF8"]=stringToUTF8;function lengthBytesUTF8(str){var len=0;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127){++len}else if(u<=2047){len+=2}else if(u<=65535){len+=3}else if(u<=2097151){len+=4}else if(u<=67108863){len+=5}else{len+=6}}return len}Module["lengthBytesUTF8"]=lengthBytesUTF8;var UTF16Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf-16le"):undefined;function demangle(func){var __cxa_demangle_func=Module["___cxa_demangle"]||Module["__cxa_demangle"];if(__cxa_demangle_func){try{var s=func.substr(1);var len=lengthBytesUTF8(s)+1;var buf=_malloc(len);stringToUTF8(s,buf,len);var status=_malloc(4);var ret=__cxa_demangle_func(buf,0,0,status);if(getValue(status,"i32")===0&&ret){return Pointer_stringify(ret)}}catch(e){}finally{if(buf)_free(buf);if(status)_free(status);if(ret)_free(ret)}return func}Runtime.warnOnce("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");return func}function demangleAll(text){var regex=/__Z[\w\d_]+/g;return text.replace(regex,(function(x){var y=demangle(x);return x===y?x:x+" ["+y+"]"}))}function jsStackTrace(){var err=new Error;if(!err.stack){try{throw new Error(0)}catch(e){err=e}if(!err.stack){return"(no stack trace available)"}}return err.stack.toString()}function stackTrace(){var js=jsStackTrace();if(Module["extraStackTrace"])js+="\n"+Module["extraStackTrace"]();return demangleAll(js)}Module["stackTrace"]=stackTrace;var HEAP,buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBufferViews(){Module["HEAP8"]=HEAP8=new Int8Array(buffer);Module["HEAP16"]=HEAP16=new Int16Array(buffer);Module["HEAP32"]=HEAP32=new Int32Array(buffer);Module["HEAPU8"]=HEAPU8=new Uint8Array(buffer);Module["HEAPU16"]=HEAPU16=new Uint16Array(buffer);Module["HEAPU32"]=HEAPU32=new Uint32Array(buffer);Module["HEAPF32"]=HEAPF32=new Float32Array(buffer);Module["HEAPF64"]=HEAPF64=new Float64Array(buffer)}var STATIC_BASE,STATICTOP,staticSealed;var STACK_BASE,STACKTOP,STACK_MAX;var DYNAMIC_BASE,DYNAMICTOP_PTR;STATIC_BASE=STATICTOP=STACK_BASE=STACKTOP=STACK_MAX=DYNAMIC_BASE=DYNAMICTOP_PTR=0;staticSealed=false;function abortOnCannotGrowMemory(){abort("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+TOTAL_MEMORY+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or (4) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}function enlargeMemory(){abortOnCannotGrowMemory()}var TOTAL_STACK=Module["TOTAL_STACK"]||5242880;var TOTAL_MEMORY=Module["TOTAL_MEMORY"]||134217728;if(TOTAL_MEMORY<TOTAL_STACK)Module.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+TOTAL_MEMORY+"! (TOTAL_STACK="+TOTAL_STACK+")");if(Module["buffer"]){buffer=Module["buffer"]}else{{buffer=new ArrayBuffer(TOTAL_MEMORY)}}updateGlobalBufferViews();function getTotalMemory(){return TOTAL_MEMORY}HEAP32[0]=1668509029;HEAP16[1]=25459;if(HEAPU8[2]!==115||HEAPU8[3]!==99)throw"Runtime error: expected the system to be little-endian!";Module["HEAP"]=HEAP;Module["buffer"]=buffer;Module["HEAP8"]=HEAP8;Module["HEAP16"]=HEAP16;Module["HEAP32"]=HEAP32;Module["HEAPU8"]=HEAPU8;Module["HEAPU16"]=HEAPU16;Module["HEAPU32"]=HEAPU32;Module["HEAPF32"]=HEAPF32;Module["HEAPF64"]=HEAPF64;function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback();continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){Module["dynCall_v"](func)}else{Module["dynCall_vi"](func,callback.arg)}}else{func(callback.arg===undefined?null:callback.arg)}}}var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATEXIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;var runtimeExited=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function ensureInitRuntime(){if(runtimeInitialized)return;runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function exitRuntime(){callRuntimeCallbacks(__ATEXIT__);runtimeExited=true}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}Module["addOnPreRun"]=addOnPreRun;function addOnInit(cb){__ATINIT__.unshift(cb)}Module["addOnInit"]=addOnInit;function addOnPreMain(cb){__ATMAIN__.unshift(cb)}Module["addOnPreMain"]=addOnPreMain;function addOnExit(cb){__ATEXIT__.unshift(cb)}Module["addOnExit"]=addOnExit;function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}Module["addOnPostRun"]=addOnPostRun;function intArrayFromString(stringy,dontAddNull,length){var len=length>0?length:lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);if(dontAddNull)u8array.length=numBytesWritten;return u8array}Module["intArrayFromString"]=intArrayFromString;function intArrayToString(array){var ret=[];for(var i=0;i<array.length;i++){var chr=array[i];if(chr>255){chr&=255}ret.push(String.fromCharCode(chr))}return ret.join("")}Module["intArrayToString"]=intArrayToString;function writeStringToMemory(string,buffer,dontAddNull){Runtime.warnOnce("writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!");var lastChar,end;if(dontAddNull){end=buffer+lengthBytesUTF8(string);lastChar=HEAP8[end]}stringToUTF8(string,buffer,Infinity);if(dontAddNull)HEAP8[end]=lastChar}Module["writeStringToMemory"]=writeStringToMemory;function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer)}Module["writeArrayToMemory"]=writeArrayToMemory;function writeAsciiToMemory(str,buffer,dontAddNull){for(var i=0;i<str.length;++i){HEAP8[buffer++>>0]=str.charCodeAt(i)}if(!dontAddNull)HEAP8[buffer>>0]=0}Module["writeAsciiToMemory"]=writeAsciiToMemory;if(!Math["imul"]||Math["imul"](4294967295,5)!==-5)Math["imul"]=function imul(a,b){var ah=a>>>16;var al=a&65535;var bh=b>>>16;var bl=b&65535;return al*bl+(ah*bl+al*bh<<16)|0};Math.imul=Math["imul"];if(!Math["fround"]){var froundBuffer=new Float32Array(1);Math["fround"]=(function(x){froundBuffer[0]=x;return froundBuffer[0]})}Math.fround=Math["fround"];if(!Math["clz32"])Math["clz32"]=(function(x){x=x>>>0;for(var i=0;i<32;i++){if(x&1<<31-i)return i}return 32});Math.clz32=Math["clz32"];if(!Math["trunc"])Math["trunc"]=(function(x){return x<0?Math.ceil(x):Math.floor(x)});Math.trunc=Math["trunc"];var Math_abs=Math.abs;var Math_cos=Math.cos;var Math_sin=Math.sin;var Math_tan=Math.tan;var Math_acos=Math.acos;var Math_asin=Math.asin;var Math_atan=Math.atan;var Math_atan2=Math.atan2;var Math_exp=Math.exp;var Math_log=Math.log;var Math_sqrt=Math.sqrt;var Math_ceil=Math.ceil;var Math_floor=Math.floor;var Math_pow=Math.pow;var Math_imul=Math.imul;var Math_fround=Math.fround;var Math_round=Math.round;var Math_min=Math.min;var Math_clz32=Math.clz32;var Math_trunc=Math.trunc;var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function getUniqueRunDependency(id){return id}function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}Module["addRunDependency"]=addRunDependency;function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module["removeRunDependency"]=removeRunDependency;Module["preloadedImages"]={};Module["preloadedAudios"]={};var ASM_CONSTS=[(function($0,$1,$2,$3,$4,$5,$6,$7){{return _nbind.callbackSignatureList[$0].apply(this,arguments)}})];function _emscripten_asm_const_iiiiiiii(code,a0,a1,a2,a3,a4,a5,a6){return ASM_CONSTS[code](a0,a1,a2,a3,a4,a5,a6)}function _emscripten_asm_const_iiiii(code,a0,a1,a2,a3){return ASM_CONSTS[code](a0,a1,a2,a3)}function _emscripten_asm_const_iiidddddd(code,a0,a1,a2,a3,a4,a5,a6,a7){return ASM_CONSTS[code](a0,a1,a2,a3,a4,a5,a6,a7)}function _emscripten_asm_const_iiididi(code,a0,a1,a2,a3,a4,a5){return ASM_CONSTS[code](a0,a1,a2,a3,a4,a5)}function _emscripten_asm_const_iiii(code,a0,a1,a2){return ASM_CONSTS[code](a0,a1,a2)}function _emscripten_asm_const_iiiid(code,a0,a1,a2,a3){return ASM_CONSTS[code](a0,a1,a2,a3)}function _emscripten_asm_const_iiiiii(code,a0,a1,a2,a3,a4){return ASM_CONSTS[code](a0,a1,a2,a3,a4)}STATIC_BASE=Runtime.GLOBAL_BASE;STATICTOP=STATIC_BASE+12720;__ATINIT__.push({func:(function(){__GLOBAL__sub_I_nbind_cc()})},{func:(function(){__GLOBAL__sub_I_common_cc()})},{func:(function(){__GLOBAL__sub_I_Binding_cc()})});allocate([1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,127,0,0,192,127,0,0,192,127,0,0,192,127,3,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,3,0,0,0,0,0,192,127,3,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,192,127,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,127,0,0,192,127,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,127,0,0,0,0,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,127,0,0,192,127,0,0,0,0,0,0,0,0,255,255,255,255,255,255,255,255,0,0,128,191,0,0,128,191,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,240,3,0,0,240,3,0,0,0,0,192,127,0,0,0,0,0,0,0,0,0,0,128,63,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,3,0,0,0,0,0,0,0,2,0,0,0,3,0,0,0,1,0,0,0,2,0,0,0,0,0,0,0,0,0,192,127,3,0,0,0,0,0,0,0,1,0,0,0,135,16,0,0,145,16,0,0,153,16,0,0,97,16,0,0,111,16,0,0,123,16,0,0,104,45,0,0,105,45,0,0,106,45,0,0,105,45,0,0,106,45,0,0,0,0,0,0,0,0,0,0,2,0,0,0,3,0,0,0,4,0,0,0,2,0,0,0,5,0,0,0,107,45,0,0,105,45,0,0,105,45,0,0,105,45,0,0,105,45,0,0,105,45,0,0,105,45,0,0,108,45,0,0,109,45,0,0,105,45,0,0,105,45,0,0,106,45,0,0,110,45,0,0,109,45,0,0,204,4,0,0,3,0,0,0,111,45,0,0,220,4,0,0,112,45,0,0,2,0,0,0,113,45,0,0,220,4,0,0,112,45,0,0,109,45,0,0,220,4,0,0,109,45,0,0,220,4,0,0,112,45,0,0,105,45,0,0,106,45,0,0,105,45,0,0,0,0,0,0,0,0,0,0,2,0,0,0,6,0,0,0,7,0,0,0,2,0,0,0,8,0,0,0,107,45,0,0,106,45,0,0,105,45,0,0,114,45,0,0,114,45,0,0,106,45,0,0,106,45,0,0,109,45,0,0,105,45,0,0,109,45,0,0,106,45,0,0,105,45,0,0,109,45,0,0,106,45,0,0,109,45,0,0,104,5,0,0,3,0,0,0,112,5,0,0,1,0,0,0,113,45,0,0,109,45,0,0,220,4,0,0,132,5,0,0,2,0,0,0,115,45,0,0,110,45,0,0,106,45,0,0,109,45,0,0,106,45,0,0,110,45,0,0,109,45,0,0,132,5,0,0,132,5,0,0,184,5,0,0,106,45,0,0,105,45,0,0,2,0,0,0,114,45,0,0,184,5,0,0,204,21,0,0,204,5,0,0,2,0,0,0,108,45,0,0,0,0,0,0,0,0,0,0,2,0,0,0,9,0,0,0,10,0,0,0,2,0,0,0,11,0,0,0,252,5,0,0,105,45,0,0,105,45,0,0,2,0,0,0,104,45,0,0,252,5,0,0,2,0,0,0,118,45,0,0,28,6,0,0,245,21,0,0,121,45,0,0,134,45,0,0,135,45,0,0,136,45,0,0,137,45,0,0,138,45,0,0,112,45,0,0,106,45,0,0,139,45,0,0,140,45,0,0,141,45,0,0,142,45,0,0,143,45,0,0,105,45,0,0,0,0,0,0,109,45,0,0,2,22,0,0,110,45,0,0,7,22,0,0,145,45,0,0,12,22,0,0,204,4,0,0,24,22,0,0,144,6,0,0,37,22,0,0,146,45,0,0,56,22,0,0,147,45,0,0,65,22,0,0,0,0,0,0,3,0,0,0,152,6,0,0,1,0,0,0,111,45,0,0,0,0,0,0,0,0,0,0,2,0,0,0,12,0,0,0,13,0,0,0,2,0,0,0,14,0,0,0,109,45,0,0,148,45,0,0,212,6,0,0,112,45,0,0,220,6,0,0,228,6,0,0,2,0,0,0,236,6,0,0,7,0,0,0,148,45,0,0,7,0,0,0,212,6,0,0,1,0,0,0,136,45,0,0,109,45,0,0,148,45,0,0,220,6,0,0,109,45,0,0,148,45,0,0,212,6,0,0,109,45,0,0,148,45,0,0,134,45,0,0,134,45,0,0,146,45,0,0,134,45,0,0,148,45,0,0,146,45,0,0,134,45,0,0,148,45,0,0,220,6,0,0,146,45,0,0,134,45,0,0,148,45,0,0,112,45,0,0,146,45,0,0,134,45,0,0,88,7,0,0,112,45,0,0,2,0,0,0,148,45,0,0,109,45,0,0,112,45,0,0,112,45,0,0,112,45,0,0,112,45,0,0,146,45,0,0,148,45,0,0,204,4,0,0,109,45,0,0,204,4,0,0,204,4,0,0,204,4,0,0,204,4,0,0,204,4,0,0,109,45,0,0,212,6,0,0,204,4,0,0,0,0,0,0,0,0,0,0,2,0,0,0,15,0,0,0,16,0,0,0,2,0,0,0,17,0,0,0,196,7,0,0,2,0,0,0,149,45,0,0,107,45,0,0,112,45,0,0,216,7,0,0,5,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,2,0,0,0,158,45,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,88,43,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,76,9,0,0,5,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,2,0,0,0,166,45,0,0,0,4,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,67,111,117,108,100,32,110,111,116,32,97,108,108,111,99,97,116,101,32,109,101,109,111,114,121,32,102,111,114,32,108,105,115,116,0,67,111,117,108,100,32,110,111,116,32,97,108,108,111,99,97,116,101,32,109,101,109,111,114,121,32,102,111,114,32,105,116,101,109,115,0,67,111,117,108,100,32,110,111,116,32,101,120,116,101,110,100,32,97,108,108,111,99,97,116,105,111,110,32,102,111,114,32,105,116,101,109,115,0,67,111,117,108,100,32,110,111,116,32,97,108,108,111,99,97,116,101,32,109,101,109,111,114,121,32,102,111,114,32,110,111,100,101,0,37,115,10,0,67,97,110,110,111,116,32,114,101,115,101,116,32,97,32,110,111,100,101,32,119,104,105,99,104,32,115,116,105,108,108,32,104,97,115,32,99,104,105,108,100,114,101,110,32,97,116,116,97,99,104,101,100,0,67,97,110,110,111,116,32,114,101,115,101,116,32,97,32,110,111,100,101,32,115,116,105,108,108,32,97,116,116,97,99,104,101,100,32,116,111,32,97,32,112,97,114,101,110,116,0,67,111,117,108,100,32,110,111,116,32,97,108,108,111,99,97,116,101,32,109,101,109,111,114,121,32,102,111,114,32,99,111,110,102,105,103,0,67,97,110,110,111,116,32,115,101,116,32,109,101,97,115,117,114,101,32,102,117,110,99,116,105,111,110,58,32,78,111,100,101,115,32,119,105,116,104,32,109,101,97,115,117,114,101,32,102,117,110,99,116,105,111,110,115,32,99,97,110,110,111,116,32,104,97,118,101,32,99,104,105,108,100,114,101,110,46,0,67,104,105,108,100,32,97,108,114,101,97,100,121,32,104,97,115,32,97,32,112,97,114,101,110,116,44,32,105,116,32,109,117,115,116,32,98,101,32,114,101,109,111,118,101,100,32,102,105,114,115,116,46,0,67,97,110,110,111,116,32,97,100,100,32,99,104,105,108,100,58,32,78,111,100,101,115,32,119,105,116,104,32,109,101,97,115,117,114,101,32,102,117,110,99,116,105,111,110,115,32,99,97,110,110,111,116,32,104,97,118,101,32,99,104,105,108,100,114,101,110,46,0,79,110,108,121,32,108,101,97,102,32,110,111,100,101,115,32,119,105,116,104,32,99,117,115,116,111,109,32,109,101,97,115,117,114,101,32,102,117,110,99,116,105,111,110,115,115,104,111,117,108,100,32,109,97,110,117,97,108,108,121,32,109,97,114,107,32,116,104,101,109,115,101,108,118,101,115,32,97,115,32,100,105,114,116,121,0,67,97,110,110,111,116,32,103,101,116,32,108,97,121,111,117,116,32,112,114,111,112,101,114,116,105,101,115,32,111,102,32,109,117,108,116,105,45,101,100,103,101,32,115,104,111,114,116,104,97,110,100,115,0,60,100,105,118,32,0,108,97,121,111,117,116,61,34,0,119,105,100,116,104,58,32,37,103,59,32,0,104,101,105,103,104,116,58,32,37,103,59,32,0,116,111,112,58,32,37,103,59,32,0,108,101,102,116,58,32,37,103,59,0,34,32,0,115,116,121,108,101,61,34,0,102,108,101,120,45,100,105,114,101,99,116,105,111,110,58,32,37,115,59,32,0,106,117,115,116,105,102,121,45,99,111,110,116,101,110,116,58,32,37,115,59,32,0,97,108,105,103,110,45,105,116,101,109,115,58,32,37,115,59,32,0,97,108,105,103,110,45,99,111,110,116,101,110,116,58,32,37,115,59,32,0,97,108,105,103,110,45,115,101,108,102,58,32,37,115,59,32,0,102,108,101,120,45,103,114,111,119,0,102,108,101,120,45,115,104,114,105,110,107,0,102,108,101,120,45,98,97,115,105,115,0,102,108,101,120,0,102,108,101,120,87,114,97,112,58,32,37,115,59,32,0,111,118,101,114,102,108,111,119,58,32,37,115,59,32,0,100,105,115,112,108,97,121,58,32,37,115,59,32,0,109,97,114,103,105,110,0,112,97,100,100,105,110,103,0,98,111,114,100,101,114,0,119,105,100,116,104,0,104,101,105,103,104,116,0,109,97,120,45,119,105,100,116,104,0,109,97,120,45,104,101,105,103,104,116,0,109,105,110,45,119,105,100,116,104,0,109,105,110,45,104,101,105,103,104,116,0,112,111,115,105,116,105,111,110,58,32,37,115,59,32,0,108,101,102,116,0,114,105,103,104,116,0,116,111,112,0,98,111,116,116,111,109,0,104,97,115,45,99,117,115,116,111,109,45,109,101,97,115,117,114,101,61,34,116,114,117,101,34,0,62,0,10,0,60,47,100,105,118,62,0,37,115,58,32,97,117,116,111,59,32,0,112,120,0,37,0,37,115,58,32,37,103,37,115,59,32,0,37,115,45,37,115,0,37,115,58,32,37,103,59,32,0,32,32,0,37,115,37,100,46,123,91,115,107,105,112,112,101,100,93,32,0,119,109,58,32,37,115,44,32,104,109,58,32,37,115,44,32,97,119,58,32,37,102,32,97,104,58,32,37,102,32,61,62,32,100,58,32,40,37,102,44,32,37,102,41,32,37,115,10,0,42,0,37,115,37,100,46,123,37,115,0,119,109,58,32,37,115,44,32,104,109,58,32,37,115,44,32,97,119,58,32,37,102,32,97,104,58,32,37,102,32,37,115,10,0,37,115,37,100,46,125,37,115,0,119,109,58,32,37,115,44,32,104,109,58,32,37,115,44,32,100,58,32,40,37,102,44,32,37,102,41,32,37,115,10,0,79,117,116,32,111,102,32,99,97,99,104,101,32,101,110,116,114,105,101,115,33,0,97,118,97,105,108,97,98,108,101,87,105,100,116,104,32,105,115,32,105,110,100,101,102,105,110,105,116,101,32,115,111,32,119,105,100,116,104,77,101,97,115,117,114,101,77,111,100,101,32,109,117,115,116,32,98,101,32,89,71,77,101,97,115,117,114,101,77,111,100,101,85,110,100,101,102,105,110,101,100,0,97,118,97,105,108,97,98,108,101,72,101,105,103,104,116,32,105,115,32,105,110,100,101,102,105,110,105,116,101,32,115,111,32,104,101,105,103,104,116,77,101,97,115,117,114,101,77,111,100,101,32,109,117,115,116,32,98,101,32,89,71,77,101,97,115,117,114,101,77,111,100,101,85,110,100,101,102,105,110,101,100,0,115,116,114,101,116,99,104,0,109,117,108,116,105,108,105,110,101,45,115,116,114,101,116,99,104,0,97,98,115,45,109,101,97,115,117,114,101,0,97,98,115,45,108,97,121,111,117,116,0,69,120,112,101,99,116,32,99,117,115,116,111,109,32,98,97,115,101,108,105,110,101,32,102,117,110,99,116,105,111,110,32,116,111,32,110,111,116,32,114,101,116,117,114,110,32,78,97,78,0,109,101,97,115,117,114,101,0,69,120,112,101,99,116,101,100,32,110,111,100,101,32,116,111,32,104,97,118,101,32,99,117,115,116,111,109,32,109,101,97,115,117,114,101,32,102,117,110,99,116,105,111,110,0,76,65,89,95,85,78,68,69,70,73,78,69,68,0,76,65,89,95,69,88,65,67,84,76,89,0,76,65,89,95,65,84,95,77,79,83,84,0,85,78,68,69,70,73,78,69,68,0,69,88,65,67,84,76,89,0,65,84,95,77,79,83,84,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,105,110,105,116,105,97,108,0,78,111,100,101,0,99,114,101,97,116,101,68,101,102,97,117,108,116,0,99,114,101,97,116,101,87,105,116,104,67,111,110,102,105,103,0,100,101,115,116,114,111,121,0,114,101,115,101,116,0,99,111,112,121,83,116,121,108,101,0,115,101,116,80,111,115,105,116,105,111,110,84,121,112,101,0,115,101,116,80,111,115,105,116,105,111,110,0,115,101,116,80,111,115,105,116,105,111,110,80,101,114,99,101,110,116,0,115,101,116,65,108,105,103,110,67,111,110,116,101,110,116,0,115,101,116,65,108,105,103,110,73,116,101,109,115,0,115,101,116,65,108,105,103,110,83,101,108,102,0,115,101,116,70,108,101,120,68,105,114,101,99,116,105,111,110,0,115,101,116,70,108,101,120,87,114,97,112,0,115,101,116,74,117,115,116,105,102,121,67,111,110,116,101,110,116,0,115,101,116,77,97,114,103,105,110,0,115,101,116,77,97,114,103,105,110,80,101,114,99,101,110,116,0,115,101,116,77,97,114,103,105,110,65,117,116,111,0,115,101,116,79,118,101,114,102,108,111,119,0,115,101,116,68,105,115,112,108,97,121,0,115,101,116,70,108,101,120,0,115,101,116,70,108,101,120,66,97,115,105,115,0,115,101,116,70,108,101,120,66,97,115,105,115,80,101,114,99,101,110,116,0,115,101,116,70,108,101,120,71,114,111,119,0,115,101,116,70,108,101,120,83,104,114,105,110,107,0,115,101,116,87,105,100,116,104,0,115,101,116,87,105,100,116,104,80,101,114,99,101,110,116,0,115,101,116,87,105,100,116,104,65,117,116,111,0,115,101,116,72,101,105,103,104,116,0,115,101,116,72,101,105,103,104,116,80,101,114,99,101,110,116,0,115,101,116,72,101,105,103,104,116,65,117,116,111,0,115,101,116,77,105,110,87,105,100,116,104,0,115,101,116,77,105,110,87,105,100,116,104,80,101,114,99,101,110,116,0,115,101,116,77,105,110,72,101,105,103,104,116,0,115,101,116,77,105,110,72,101,105,103,104,116,80,101,114,99,101,110,116,0,115,101,116,77,97,120,87,105,100,116,104,0,115,101,116,77,97,120,87,105,100,116,104,80,101,114,99,101,110,116,0,115,101,116,77,97,120,72,101,105,103,104,116,0,115,101,116,77,97,120,72,101,105,103,104,116,80,101,114,99,101,110,116,0,115,101,116,65,115,112,101,99,116,82,97,116,105,111,0,115,101,116,66,111,114,100,101,114,0,115,101,116,80,97,100,100,105,110,103,0,115,101,116,80,97,100,100,105,110,103,80,101,114,99,101,110,116,0,103,101,116,80,111,115,105,116,105,111,110,84,121,112,101,0,103,101,116,80,111,115,105,116,105,111,110,0,103,101,116,65,108,105,103,110,67,111,110,116,101,110,116,0,103,101,116,65,108,105,103,110,73,116,101,109,115,0,103,101,116,65,108,105,103,110,83,101,108,102,0,103,101,116,70,108,101,120,68,105,114,101,99,116,105,111,110,0,103,101,116,70,108,101,120,87,114,97,112,0,103,101,116,74,117,115,116,105,102,121,67,111,110,116,101,110,116,0,103,101,116,77,97,114,103,105,110,0,103,101,116,70,108,101,120,66,97,115,105,115,0,103,101,116,70,108,101,120,71,114,111,119,0,103,101,116,70,108,101,120,83,104,114,105,110,107,0,103,101,116,87,105,100,116,104,0,103,101,116,72,101,105,103,104,116,0,103,101,116,77,105,110,87,105,100,116,104,0,103,101,116,77,105,110,72,101,105,103,104,116,0,103,101,116,77,97,120,87,105,100,116,104,0,103,101,116,77,97,120,72,101,105,103,104,116,0,103,101,116,65,115,112,101,99,116,82,97,116,105,111,0,103,101,116,66,111,114,100,101,114,0,103,101,116,79,118,101,114,102,108,111,119,0,103,101,116,68,105,115,112,108,97,121,0,103,101,116,80,97,100,100,105,110,103,0,105,110,115,101,114,116,67,104,105,108,100,0,114,101,109,111,118,101,67,104,105,108,100,0,103,101,116,67,104,105,108,100,67,111,117,110,116,0,103,101,116,80,97,114,101,110,116,0,103,101,116,67,104,105,108,100,0,115,101,116,77,101,97,115,117,114,101,70,117,110,99,0,117,110,115,101,116,77,101,97,115,117,114,101,70,117,110,99,0,109,97,114,107,68,105,114,116,121,0,105,115,68,105,114,116,121,0,99,97,108,99,117,108,97,116,101,76,97,121,111,117,116,0,103,101,116,67,111,109,112,117,116,101,100,76,101,102,116,0,103,101,116,67,111,109,112,117,116,101,100,82,105,103,104,116,0,103,101,116,67,111,109,112,117,116,101,100,84,111,112,0,103,101,116,67,111,109,112,117,116,101,100,66,111,116,116,111,109,0,103,101,116,67,111,109,112,117,116,101,100,87,105,100,116,104,0,103,101,116,67,111,109,112,117,116,101,100,72,101,105,103,104,116,0,103,101,116,67,111,109,112,117,116,101,100,76,97,121,111,117,116,0,103,101,116,67,111,109,112,117,116,101,100,77,97,114,103,105,110,0,103,101,116,67,111,109,112,117,116,101,100,66,111,114,100,101,114,0,103,101,116,67,111,109,112,117,116,101,100,80,97,100,100,105,110,103,0,67,111,110,102,105,103,0,99,114,101,97,116,101,0,115,101,116,69,120,112,101,114,105,109,101,110,116,97,108,70,101,97,116,117,114,101,69,110,97,98,108,101,100,0,105,115,69,120,112,101,114,105,109,101,110,116,97,108,70,101,97,116,117,114,101,69,110,97,98,108,101,100,0,86,97,108,117,101,0,76,97,121,111,117,116,0,83,105,122,101,0,103,101,116,73,110,115,116,97,110,99,101,67,111,117,110,116,0,73,110,116,54,52,0,1,1,1,2,2,4,4,4,4,8,8,4,8,118,111,105,100,0,98,111,111,108,0,115,116,100,58,58,115,116,114,105,110,103,0,99,98,70,117,110,99,116,105,111,110,32,38,0,99,111,110,115,116,32,99,98,70,117,110,99,116,105,111,110,32,38,0,69,120,116,101,114,110,97,108,0,66,117,102,102,101,114,0,78,66,105,110,100,73,68,0,78,66,105,110,100,0,98,105,110,100,95,118,97,108,117,101,0,114,101,102,108,101,99,116,0,113,117,101,114,121,84,121,112,101,0,108,97,108,108,111,99,0,108,114,101,115,101,116,0,33,34,97,108,108,111,99,97,116,111,114,60,84,62,58,58,97,108,108,111,99,97,116,101,58,58,98,97,100,95,97,108,108,111,99,34,0,47,85,115,101,114,115,47,118,105,110,99,101,110,116,114,105,101,109,101,114,47,87,111,114,107,115,112,97,99,101,47,121,111,103,97,47,106,97,118,97,115,99,114,105,112,116,47,101,109,115,100,107,45,112,111,114,116,97,98,108,101,47,101,109,115,99,114,105,112,116,101,110,47,49,46,51,55,46,49,51,47,115,121,115,116,101,109,47,105,110,99,108,117,100,101,47,108,105,98,99,120,120,47,109,101,109,111,114,121,0,97,108,108,111,99,97,116,101,0,123,114,101,116,117,114,110,40,95,110,98,105,110,100,46,99,97,108,108,98,97,99,107,83,105,103,110,97,116,117,114,101,76,105,115,116,91,36,48,93,46,97,112,112,108,121,40,116,104,105,115,44,97,114,103,117,109,101,110,116,115,41,41,59,125,0,95,110,98,105,110,100,95,110,101,119,0,17,0,10,0,17,17,17,0,0,0,0,5,0,0,0,0,0,0,9,0,0,0,0,11,0,0,0,0,0,0,0,0,17,0,15,10,17,17,17,3,10,7,0,1,19,9,11,11,0,0,9,6,11,0,0,11,0,6,17,0,0,0,17,17,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,17,0,10,10,17,17,17,0,10,0,0,2,0,9,11,0,0,0,9,0,11,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,12,0,0,0,0,9,12,0,0,0,0,0,12,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,13,0,0,0,0,9,14,0,0,0,0,0,14,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,15,0,0,0,0,9,16,0,0,0,0,0,16,0,0,16,0,0,18,0,0,0,18,18,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,18,18,18,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,10,0,0,0,0,9,11,0,0,0,0,0,11,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,12,0,0,0,0,9,12,0,0,0,0,0,12,0,0,12,0,0,45,43,32,32,32,48,88,48,120,0,40,110,117,108,108,41,0,45,48,88,43,48,88,32,48,88,45,48,120,43,48,120,32,48,120,0,105,110,102,0,73,78,70,0,110,97,110,0,78,65,78,0,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,46,0,84,33,34,25,13,1,2,3,17,75,28,12,16,4,11,29,18,30,39,104,110,111,112,113,98,32,5,6,15,19,20,21,26,8,22,7,40,36,23,24,9,10,14,27,31,37,35,131,130,125,38,42,43,60,61,62,63,67,71,74,77,88,89,90,91,92,93,94,95,96,97,99,100,101,102,103,105,106,107,108,114,115,116,121,122,123,124,0,73,108,108,101,103,97,108,32,98,121,116,101,32,115,101,113,117,101,110,99,101,0,68,111,109,97,105,110,32,101,114,114,111,114,0,82,101,115,117,108,116,32,110,111,116,32,114,101,112,114,101,115,101,110,116,97,98,108,101,0,78,111,116,32,97,32,116,116,121,0,80,101,114,109,105,115,115,105,111,110,32,100,101,110,105,101,100,0,79,112,101,114,97,116,105,111,110,32,110,111,116,32,112,101,114,109,105,116,116,101,100,0,78,111,32,115,117,99,104,32,102,105,108,101,32,111,114,32,100,105,114,101,99,116,111,114,121,0,78,111,32,115,117,99,104,32,112,114,111,99,101,115,115,0,70,105,108,101,32,101,120,105,115,116,115,0,86,97,108,117,101,32,116,111,111,32,108,97,114,103,101,32,102,111,114,32,100,97,116,97,32,116,121,112,101,0,78,111,32,115,112,97,99,101,32,108,101,102,116,32,111,110,32,100,101,118,105,99,101,0,79,117,116,32,111,102,32,109,101,109,111,114,121,0,82,101,115,111,117,114,99,101,32,98,117,115,121,0,73,110,116,101,114,114,117,112,116,101,100,32,115,121,115,116,101,109,32,99,97,108,108,0,82,101,115,111,117,114,99,101,32,116,101,109,112,111,114,97,114,105,108,121,32,117,110,97,118,97,105,108,97,98,108,101,0,73,110,118,97,108,105,100,32,115,101,101,107,0,67,114,111,115,115,45,100,101,118,105,99,101,32,108,105,110,107,0,82,101,97,100,45,111,110,108,121,32,102,105,108,101,32,115,121,115,116,101,109,0,68,105,114,101,99,116,111,114,121,32,110,111,116,32,101,109,112,116,121,0,67,111,110,110,101,99,116,105,111,110,32,114,101,115,101,116,32,98,121,32,112,101,101,114,0,79,112,101,114,97,116,105,111,110,32,116,105,109,101,100,32,111,117,116,0,67,111,110,110,101,99,116,105,111,110,32,114,101,102,117,115,101,100,0,72,111,115,116,32,105,115,32,100,111,119,110,0,72,111,115,116,32,105,115,32,117,110,114,101,97,99,104,97,98,108,101,0,65,100,100,114,101,115,115,32,105,110,32,117,115,101,0,66,114,111,107,101,110,32,112,105,112,101,0,73,47,79,32,101,114,114,111,114,0,78,111,32,115,117,99,104,32,100,101,118,105,99,101,32,111,114,32,97,100,100,114,101,115,115,0,66,108,111,99,107,32,100,101,118,105,99,101,32,114,101,113,117,105,114,101,100,0,78,111,32,115,117,99,104,32,100,101,118,105,99,101,0,78,111,116,32,97,32,100,105,114,101,99,116,111,114,121,0,73,115,32,97,32,100,105,114,101,99,116,111,114,121,0,84,101,120,116,32,102,105,108,101,32,98,117,115,121,0,69,120,101,99,32,102,111,114,109,97,116,32,101,114,114,111,114,0,73,110,118,97,108,105,100,32,97,114,103,117,109,101,110,116,0,65,114,103,117,109,101,110,116,32,108,105,115,116,32,116,111,111,32,108,111,110,103,0,83,121,109,98,111,108,105,99,32,108,105,110,107,32,108,111,111,112,0,70,105,108,101,110,97,109,101,32,116,111,111,32,108,111,110,103,0,84,111,111,32,109,97,110,121,32,111,112,101,110,32,102,105,108,101,115,32,105,110,32,115,121,115,116,101,109,0,78,111,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,115,32,97,118,97,105,108,97,98,108,101,0,66,97,100,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,0,78,111,32,99,104,105,108,100,32,112,114,111,99,101,115,115,0,66,97,100,32,97,100,100,114,101,115,115,0,70,105,108,101,32,116,111,111,32,108,97,114,103,101,0,84,111,111,32,109,97,110,121,32,108,105,110,107,115,0,78,111,32,108,111,99,107,115,32,97,118,97,105,108,97,98,108,101,0,82,101,115,111,117,114,99,101,32,100,101,97,100,108,111,99,107,32,119,111,117,108,100,32,111,99,99,117,114,0,83,116,97,116,101,32,110,111,116,32,114,101,99,111,118,101,114,97,98,108,101,0,80,114,101,118,105,111,117,115,32,111,119,110,101,114,32,100,105,101,100,0,79,112,101,114,97,116,105,111,110,32,99,97,110,99,101,108,101,100,0,70,117,110,99,116,105,111,110,32,110,111,116,32,105,109,112,108,101,109,101,110,116,101,100,0,78,111,32,109,101,115,115,97,103,101,32,111,102,32,100,101,115,105,114,101,100,32,116,121,112,101,0,73,100,101,110,116,105,102,105,101,114,32,114,101,109,111,118,101,100,0,68,101,118,105,99,101,32,110,111,116,32,97,32,115,116,114,101,97,109,0,78,111,32,100,97,116,97,32,97,118,97,105,108,97,98,108,101,0,68,101,118,105,99,101,32,116,105,109,101,111,117,116,0,79,117,116,32,111,102,32,115,116,114,101,97,109,115,32,114,101,115,111,117,114,99,101,115,0,76,105,110,107,32,104,97,115,32,98,101,101,110,32,115,101,118,101,114,101,100,0,80,114,111,116,111,99,111,108,32,101,114,114,111,114,0,66,97,100,32,109,101,115,115,97,103,101,0,70,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,105,110,32,98,97,100,32,115,116,97,116,101,0,78,111,116,32,97,32,115,111,99,107,101,116,0,68,101,115,116,105,110,97,116,105,111,110,32,97,100,100,114,101,115,115,32,114,101,113,117,105,114,101,100,0,77,101,115,115,97,103,101,32,116,111,111,32,108,97,114,103,101,0,80,114,111,116,111,99,111,108,32,119,114,111,110,103,32,116,121,112,101,32,102,111,114,32,115,111,99,107,101,116,0,80,114,111,116,111,99,111,108,32,110,111,116,32,97,118,97,105,108,97,98,108,101,0,80,114,111,116,111,99,111,108,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,83,111,99,107,101,116,32,116,121,112,101,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,78,111,116,32,115,117,112,112,111,114,116,101,100,0,80,114,111,116,111,99,111,108,32,102,97,109,105,108,121,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,65,100,100,114,101,115,115,32,102,97,109,105,108,121,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,98,121,32,112,114,111,116,111,99,111,108,0,65,100,100,114,101,115,115,32,110,111,116,32,97,118,97,105,108,97,98,108,101,0,78,101,116,119,111,114,107,32,105,115,32,100,111,119,110,0,78,101,116,119,111,114,107,32,117,110,114,101,97,99,104,97,98,108,101,0,67,111,110,110,101,99,116,105,111,110,32,114,101,115,101,116,32,98,121,32,110,101,116,119,111,114,107,0,67,111,110,110,101,99,116,105,111,110,32,97,98,111,114,116,101,100,0,78,111,32,98,117,102,102,101,114,32,115,112,97,99,101,32,97,118,97,105,108,97,98,108,101,0,83,111,99,107,101,116,32,105,115,32,99,111,110,110,101,99,116,101,100,0,83,111,99,107,101,116,32,110,111,116,32,99,111,110,110,101,99,116,101,100,0,67,97,110,110,111,116,32,115,101,110,100,32,97,102,116,101,114,32,115,111,99,107,101,116,32,115,104,117,116,100,111,119,110,0,79,112,101,114,97,116,105,111,110,32,97,108,114,101,97,100,121,32,105,110,32,112,114,111,103,114,101,115,115,0,79,112,101,114,97,116,105,111,110,32,105,110,32,112,114,111,103,114,101,115,115,0,83,116,97,108,101,32,102,105,108,101,32,104,97,110,100,108,101,0,82,101,109,111,116,101,32,73,47,79,32,101,114,114,111,114,0,81,117,111,116,97,32,101,120,99,101,101,100,101,100,0,78,111,32,109,101,100,105,117,109,32,102,111,117,110,100,0,87,114,111,110,103,32,109,101,100,105,117,109,32,116,121,112,101,0,78,111,32,101,114,114,111,114,32,105,110,102,111,114,109,97,116,105,111,110,0,0,33,34,118,101,99,116,111,114,32,108,101,110,103,116,104,95,101,114,114,111,114,34,0,47,85,115,101,114,115,47,118,105,110,99,101,110,116,114,105,101,109,101,114,47,87,111,114,107,115,112,97,99,101,47,121,111,103,97,47,106,97,118,97,115,99,114,105,112,116,47,101,109,115,100,107,45,112,111,114,116,97,98,108,101,47,101,109,115,99,114,105,112,116,101,110,47,49,46,51,55,46,49,51,47,115,121,115,116,101,109,47,105,110,99,108,117,100,101,47,108,105,98,99,120,120,47,118,101,99,116,111,114,0,95,95,116,104,114,111,119,95,108,101,110,103,116,104,95,101,114,114,111,114,0],"i8",ALLOC_NONE,Runtime.GLOBAL_BASE);var tempDoublePtr=STATICTOP;STATICTOP+=16;function _atexit(func,arg){__ATEXIT__.unshift({func:func,arg:arg})}function ___cxa_atexit(){return _atexit.apply(null,arguments)}Module["_i64Subtract"]=_i64Subtract;Module["_i64Add"]=_i64Add;Module["_memset"]=_memset;function __decorate(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r}function _defineHidden(value){return(function(target,key){Object.defineProperty(target,key,{configurable:false,enumerable:false,value:value,writable:true})})}var _nbind={};function __nbind_register_primitive(id,size,flags){var spec={flags:1024|flags,id:id,ptrSize:size};_nbind.makeType(_nbind.constructType,spec)}Module["_bitshift64Shl"]=_bitshift64Shl;function _abort(){Module["abort"]()}function __nbind_free_external(num){_nbind.externalList[num].dereference(num)}function _YGWrapToString(){Module["printErr"]("missing function: YGWrapToString");abort(-1)}function __nbind_reference_external(num){_nbind.externalList[num].reference()}function ___assert_fail(condition,filename,line,func){ABORT=true;throw"Assertion failed: "+Pointer_stringify(condition)+", at: "+[filename?Pointer_stringify(filename):"unknown filename",line,func?Pointer_stringify(func):"unknown function"]+" at "+stackTrace()}function _YGFlexDirectionToString(){Module["printErr"]("missing function: YGFlexDirectionToString");abort(-1)}function _YGJustifyToString(){Module["printErr"]("missing function: YGJustifyToString");abort(-1)}function __nbind_register_pool(pageSize,usedPtr,rootPtr,pagePtr){_nbind.Pool.pageSize=pageSize;_nbind.Pool.usedPtr=usedPtr/4;_nbind.Pool.rootPtr=rootPtr;_nbind.Pool.pagePtr=pagePtr/4;HEAP32[usedPtr/4]=16909060;if(HEAP8[usedPtr]==1)_nbind.bigEndian=true;HEAP32[usedPtr/4]=0;_nbind.makeTypeKindTbl=(_a={},_a[1024]=_nbind.PrimitiveType,_a[64]=_nbind.Int64Type,_a[2048]=_nbind.BindClass,_a[3072]=_nbind.BindClassPtr,_a[4096]=_nbind.SharedClassPtr,_a[5120]=_nbind.ArrayType,_a[6144]=_nbind.ArrayType,_a[7168]=_nbind.CStringType,_a[9216]=_nbind.CallbackType,_a[10240]=_nbind.BindType,_a);_nbind.makeTypeNameTbl={"Buffer":_nbind.BufferType,"External":_nbind.ExternalType,"Int64":_nbind.Int64Type,"_nbind_new":_nbind.CreateValueType,"bool":_nbind.BooleanType,"cbFunction &":_nbind.CallbackType,"const cbFunction &":_nbind.CallbackType,"const std::string &":_nbind.StringType,"std::string":_nbind.StringType};Module["toggleLightGC"]=_nbind.toggleLightGC;_nbind.callUpcast=Module["dynCall_ii"];var globalScope=_nbind.makeType(_nbind.constructType,{flags:2048,id:0,name:""});globalScope.proto=Module;_nbind.BindClass.list.push(globalScope);var _a}function _emscripten_set_main_loop_timing(mode,value){Browser.mainLoop.timingMode=mode;Browser.mainLoop.timingValue=value;if(!Browser.mainLoop.func){return 1}if(mode==0){Browser.mainLoop.scheduler=function Browser_mainLoop_scheduler_setTimeout(){var timeUntilNextTick=Math.max(0,Browser.mainLoop.tickStartTime+value-_emscripten_get_now())|0;setTimeout(Browser.mainLoop.runner,timeUntilNextTick)};Browser.mainLoop.method="timeout"}else if(mode==1){Browser.mainLoop.scheduler=function Browser_mainLoop_scheduler_rAF(){Browser.requestAnimationFrame(Browser.mainLoop.runner)};Browser.mainLoop.method="rAF"}else if(mode==2){if(!window["setImmediate"]){var setImmediates=[];var emscriptenMainLoopMessageId="setimmediate";function Browser_setImmediate_messageHandler(event){if(event.source===window&&event.data===emscriptenMainLoopMessageId){event.stopPropagation();setImmediates.shift()()}}window.addEventListener("message",Browser_setImmediate_messageHandler,true);window["setImmediate"]=function Browser_emulated_setImmediate(func){setImmediates.push(func);if(ENVIRONMENT_IS_WORKER){if(Module["setImmediates"]===undefined)Module["setImmediates"]=[];Module["setImmediates"].push(func);window.postMessage({target:emscriptenMainLoopMessageId})}else window.postMessage(emscriptenMainLoopMessageId,"*")}}Browser.mainLoop.scheduler=function Browser_mainLoop_scheduler_setImmediate(){window["setImmediate"](Browser.mainLoop.runner)};Browser.mainLoop.method="immediate"}return 0}function _emscripten_get_now(){abort()}function _emscripten_set_main_loop(func,fps,simulateInfiniteLoop,arg,noSetTiming){Module["noExitRuntime"]=true;assert(!Browser.mainLoop.func,"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");Browser.mainLoop.func=func;Browser.mainLoop.arg=arg;var browserIterationFunc;if(typeof arg!=="undefined"){browserIterationFunc=(function(){Module["dynCall_vi"](func,arg)})}else{browserIterationFunc=(function(){Module["dynCall_v"](func)})}var thisMainLoopId=Browser.mainLoop.currentlyRunningMainloop;Browser.mainLoop.runner=function Browser_mainLoop_runner(){if(ABORT)return;if(Browser.mainLoop.queue.length>0){var start=Date.now();var blocker=Browser.mainLoop.queue.shift();blocker.func(blocker.arg);if(Browser.mainLoop.remainingBlockers){var remaining=Browser.mainLoop.remainingBlockers;var next=remaining%1==0?remaining-1:Math.floor(remaining);if(blocker.counted){Browser.mainLoop.remainingBlockers=next}else{next=next+.5;Browser.mainLoop.remainingBlockers=(8*remaining+next)/9}}console.log('main loop blocker "'+blocker.name+'" took '+(Date.now()-start)+" ms");Browser.mainLoop.updateStatus();if(thisMainLoopId<Browser.mainLoop.currentlyRunningMainloop)return;setTimeout(Browser.mainLoop.runner,0);return}if(thisMainLoopId<Browser.mainLoop.currentlyRunningMainloop)return;Browser.mainLoop.currentFrameNumber=Browser.mainLoop.currentFrameNumber+1|0;if(Browser.mainLoop.timingMode==1&&Browser.mainLoop.timingValue>1&&Browser.mainLoop.currentFrameNumber%Browser.mainLoop.timingValue!=0){Browser.mainLoop.scheduler();return}else if(Browser.mainLoop.timingMode==0){Browser.mainLoop.tickStartTime=_emscripten_get_now()}if(Browser.mainLoop.method==="timeout"&&Module.ctx){Module.printErr("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!");Browser.mainLoop.method=""}Browser.mainLoop.runIter(browserIterationFunc);if(thisMainLoopId<Browser.mainLoop.currentlyRunningMainloop)return;if(typeof SDL==="object"&&SDL.audio&&SDL.audio.queueNewAudioData)SDL.audio.queueNewAudioData();Browser.mainLoop.scheduler()};if(!noSetTiming){if(fps&&fps>0)_emscripten_set_main_loop_timing(0,1e3/fps);else _emscripten_set_main_loop_timing(1,1);Browser.mainLoop.scheduler()}if(simulateInfiniteLoop){throw"SimulateInfiniteLoop"}}var Browser={mainLoop:{scheduler:null,method:"",currentlyRunningMainloop:0,func:null,arg:0,timingMode:0,timingValue:0,currentFrameNumber:0,queue:[],pause:(function(){Browser.mainLoop.scheduler=null;Browser.mainLoop.currentlyRunningMainloop++}),resume:(function(){Browser.mainLoop.currentlyRunningMainloop++;var timingMode=Browser.mainLoop.timingMode;var timingValue=Browser.mainLoop.timingValue;var func=Browser.mainLoop.func;Browser.mainLoop.func=null;_emscripten_set_main_loop(func,0,false,Browser.mainLoop.arg,true);_emscripten_set_main_loop_timing(timingMode,timingValue);Browser.mainLoop.scheduler()}),updateStatus:(function(){if(Module["setStatus"]){var message=Module["statusMessage"]||"Please wait...";var remaining=Browser.mainLoop.remainingBlockers;var expected=Browser.mainLoop.expectedBlockers;if(remaining){if(remaining<expected){Module["setStatus"](message+" ("+(expected-remaining)+"/"+expected+")")}else{Module["setStatus"](message)}}else{Module["setStatus"]("")}}}),runIter:(function(func){if(ABORT)return;if(Module["preMainLoop"]){var preRet=Module["preMainLoop"]();if(preRet===false){return}}try{func()}catch(e){if(e instanceof ExitStatus){return}else{if(e&&typeof e==="object"&&e.stack)Module.printErr("exception thrown: "+[e,e.stack]);throw e}}if(Module["postMainLoop"])Module["postMainLoop"]()})},isFullscreen:false,pointerLock:false,moduleContextCreatedCallbacks:[],workers:[],init:(function(){if(!Module["preloadPlugins"])Module["preloadPlugins"]=[];if(Browser.initted)return;Browser.initted=true;try{new Blob;Browser.hasBlobConstructor=true}catch(e){Browser.hasBlobConstructor=false;console.log("warning: no blob constructor, cannot create blobs with mimetypes")}Browser.BlobBuilder=typeof MozBlobBuilder!="undefined"?MozBlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:!Browser.hasBlobConstructor?console.log("warning: no BlobBuilder"):null;Browser.URLObject=typeof window!="undefined"?window.URL?window.URL:window.webkitURL:undefined;if(!Module.noImageDecoding&&typeof Browser.URLObject==="undefined"){console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");Module.noImageDecoding=true}var imagePlugin={};imagePlugin["canHandle"]=function imagePlugin_canHandle(name){return!Module.noImageDecoding&&/\.(jpg|jpeg|png|bmp)$/i.test(name)};imagePlugin["handle"]=function imagePlugin_handle(byteArray,name,onload,onerror){var b=null;if(Browser.hasBlobConstructor){try{b=new Blob([byteArray],{type:Browser.getMimetype(name)});if(b.size!==byteArray.length){b=new Blob([(new Uint8Array(byteArray)).buffer],{type:Browser.getMimetype(name)})}}catch(e){Runtime.warnOnce("Blob constructor present but fails: "+e+"; falling back to blob builder")}}if(!b){var bb=new Browser.BlobBuilder;bb.append((new Uint8Array(byteArray)).buffer);b=bb.getBlob()}var url=Browser.URLObject.createObjectURL(b);var img=new Image;img.onload=function img_onload(){assert(img.complete,"Image "+name+" could not be decoded");var canvas=document.createElement("canvas");canvas.width=img.width;canvas.height=img.height;var ctx=canvas.getContext("2d");ctx.drawImage(img,0,0);Module["preloadedImages"][name]=canvas;Browser.URLObject.revokeObjectURL(url);if(onload)onload(byteArray)};img.onerror=function img_onerror(event){console.log("Image "+url+" could not be decoded");if(onerror)onerror()};img.src=url};Module["preloadPlugins"].push(imagePlugin);var audioPlugin={};audioPlugin["canHandle"]=function audioPlugin_canHandle(name){return!Module.noAudioDecoding&&name.substr(-4)in{".ogg":1,".wav":1,".mp3":1}};audioPlugin["handle"]=function audioPlugin_handle(byteArray,name,onload,onerror){var done=false;function finish(audio){if(done)return;done=true;Module["preloadedAudios"][name]=audio;if(onload)onload(byteArray)}function fail(){if(done)return;done=true;Module["preloadedAudios"][name]=new Audio;if(onerror)onerror()}if(Browser.hasBlobConstructor){try{var b=new Blob([byteArray],{type:Browser.getMimetype(name)})}catch(e){return fail()}var url=Browser.URLObject.createObjectURL(b);var audio=new Audio;audio.addEventListener("canplaythrough",(function(){finish(audio)}),false);audio.onerror=function audio_onerror(event){if(done)return;console.log("warning: browser could not fully decode audio "+name+", trying slower base64 approach");function encode64(data){var BASE="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var PAD="=";var ret="";var leftchar=0;var leftbits=0;for(var i=0;i<data.length;i++){leftchar=leftchar<<8|data[i];leftbits+=8;while(leftbits>=6){var curr=leftchar>>leftbits-6&63;leftbits-=6;ret+=BASE[curr]}}if(leftbits==2){ret+=BASE[(leftchar&3)<<4];ret+=PAD+PAD}else if(leftbits==4){ret+=BASE[(leftchar&15)<<2];ret+=PAD}return ret}audio.src="data:audio/x-"+name.substr(-3)+";base64,"+encode64(byteArray);finish(audio)};audio.src=url;Browser.safeSetTimeout((function(){finish(audio)}),1e4)}else{return fail()}};Module["preloadPlugins"].push(audioPlugin);function pointerLockChange(){Browser.pointerLock=document["pointerLockElement"]===Module["canvas"]||document["mozPointerLockElement"]===Module["canvas"]||document["webkitPointerLockElement"]===Module["canvas"]||document["msPointerLockElement"]===Module["canvas"]}var canvas=Module["canvas"];if(canvas){canvas.requestPointerLock=canvas["requestPointerLock"]||canvas["mozRequestPointerLock"]||canvas["webkitRequestPointerLock"]||canvas["msRequestPointerLock"]||(function(){});canvas.exitPointerLock=document["exitPointerLock"]||document["mozExitPointerLock"]||document["webkitExitPointerLock"]||document["msExitPointerLock"]||(function(){});canvas.exitPointerLock=canvas.exitPointerLock.bind(document);document.addEventListener("pointerlockchange",pointerLockChange,false);document.addEventListener("mozpointerlockchange",pointerLockChange,false);document.addEventListener("webkitpointerlockchange",pointerLockChange,false);document.addEventListener("mspointerlockchange",pointerLockChange,false);if(Module["elementPointerLock"]){canvas.addEventListener("click",(function(ev){if(!Browser.pointerLock&&Module["canvas"].requestPointerLock){Module["canvas"].requestPointerLock();ev.preventDefault()}}),false)}}}),createContext:(function(canvas,useWebGL,setInModule,webGLContextAttributes){if(useWebGL&&Module.ctx&&canvas==Module.canvas)return Module.ctx;var ctx;var contextHandle;if(useWebGL){var contextAttributes={antialias:false,alpha:false};if(webGLContextAttributes){for(var attribute in webGLContextAttributes){contextAttributes[attribute]=webGLContextAttributes[attribute]}}contextHandle=GL.createContext(canvas,contextAttributes);if(contextHandle){ctx=GL.getContext(contextHandle).GLctx}}else{ctx=canvas.getContext("2d")}if(!ctx)return null;if(setInModule){if(!useWebGL)assert(typeof GLctx==="undefined","cannot set in module if GLctx is used, but we are a non-GL context that would replace it");Module.ctx=ctx;if(useWebGL)GL.makeContextCurrent(contextHandle);Module.useWebGL=useWebGL;Browser.moduleContextCreatedCallbacks.forEach((function(callback){callback()}));Browser.init()}return ctx}),destroyContext:(function(canvas,useWebGL,setInModule){}),fullscreenHandlersInstalled:false,lockPointer:undefined,resizeCanvas:undefined,requestFullscreen:(function(lockPointer,resizeCanvas,vrDevice){Browser.lockPointer=lockPointer;Browser.resizeCanvas=resizeCanvas;Browser.vrDevice=vrDevice;if(typeof Browser.lockPointer==="undefined")Browser.lockPointer=true;if(typeof Browser.resizeCanvas==="undefined")Browser.resizeCanvas=false;if(typeof Browser.vrDevice==="undefined")Browser.vrDevice=null;var canvas=Module["canvas"];function fullscreenChange(){Browser.isFullscreen=false;var canvasContainer=canvas.parentNode;if((document["fullscreenElement"]||document["mozFullScreenElement"]||document["msFullscreenElement"]||document["webkitFullscreenElement"]||document["webkitCurrentFullScreenElement"])===canvasContainer){canvas.exitFullscreen=document["exitFullscreen"]||document["cancelFullScreen"]||document["mozCancelFullScreen"]||document["msExitFullscreen"]||document["webkitCancelFullScreen"]||(function(){});canvas.exitFullscreen=canvas.exitFullscreen.bind(document);if(Browser.lockPointer)canvas.requestPointerLock();Browser.isFullscreen=true;if(Browser.resizeCanvas)Browser.setFullscreenCanvasSize()}else{canvasContainer.parentNode.insertBefore(canvas,canvasContainer);canvasContainer.parentNode.removeChild(canvasContainer);if(Browser.resizeCanvas)Browser.setWindowedCanvasSize()}if(Module["onFullScreen"])Module["onFullScreen"](Browser.isFullscreen);if(Module["onFullscreen"])Module["onFullscreen"](Browser.isFullscreen);Browser.updateCanvasDimensions(canvas)}if(!Browser.fullscreenHandlersInstalled){Browser.fullscreenHandlersInstalled=true;document.addEventListener("fullscreenchange",fullscreenChange,false);document.addEventListener("mozfullscreenchange",fullscreenChange,false);document.addEventListener("webkitfullscreenchange",fullscreenChange,false);document.addEventListener("MSFullscreenChange",fullscreenChange,false)}var canvasContainer=document.createElement("div");canvas.parentNode.insertBefore(canvasContainer,canvas);canvasContainer.appendChild(canvas);canvasContainer.requestFullscreen=canvasContainer["requestFullscreen"]||canvasContainer["mozRequestFullScreen"]||canvasContainer["msRequestFullscreen"]||(canvasContainer["webkitRequestFullscreen"]?(function(){canvasContainer["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"])}):null)||(canvasContainer["webkitRequestFullScreen"]?(function(){canvasContainer["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"])}):null);if(vrDevice){canvasContainer.requestFullscreen({vrDisplay:vrDevice})}else{canvasContainer.requestFullscreen()}}),requestFullScreen:(function(lockPointer,resizeCanvas,vrDevice){Module.printErr("Browser.requestFullScreen() is deprecated. Please call Browser.requestFullscreen instead.");Browser.requestFullScreen=(function(lockPointer,resizeCanvas,vrDevice){return Browser.requestFullscreen(lockPointer,resizeCanvas,vrDevice)});return Browser.requestFullscreen(lockPointer,resizeCanvas,vrDevice)}),nextRAF:0,fakeRequestAnimationFrame:(function(func){var now=Date.now();if(Browser.nextRAF===0){Browser.nextRAF=now+1e3/60}else{while(now+2>=Browser.nextRAF){Browser.nextRAF+=1e3/60}}var delay=Math.max(Browser.nextRAF-now,0);setTimeout(func,delay)}),requestAnimationFrame:function requestAnimationFrame(func){if(typeof window==="undefined"){Browser.fakeRequestAnimationFrame(func)}else{if(!window.requestAnimationFrame){window.requestAnimationFrame=window["requestAnimationFrame"]||window["mozRequestAnimationFrame"]||window["webkitRequestAnimationFrame"]||window["msRequestAnimationFrame"]||window["oRequestAnimationFrame"]||Browser.fakeRequestAnimationFrame}window.requestAnimationFrame(func)}},safeCallback:(function(func){return(function(){if(!ABORT)return func.apply(null,arguments)})}),allowAsyncCallbacks:true,queuedAsyncCallbacks:[],pauseAsyncCallbacks:(function(){Browser.allowAsyncCallbacks=false}),resumeAsyncCallbacks:(function(){Browser.allowAsyncCallbacks=true;if(Browser.queuedAsyncCallbacks.length>0){var callbacks=Browser.queuedAsyncCallbacks;Browser.queuedAsyncCallbacks=[];callbacks.forEach((function(func){func()}))}}),safeRequestAnimationFrame:(function(func){return Browser.requestAnimationFrame((function(){if(ABORT)return;if(Browser.allowAsyncCallbacks){func()}else{Browser.queuedAsyncCallbacks.push(func)}}))}),safeSetTimeout:(function(func,timeout){Module["noExitRuntime"]=true;return setTimeout((function(){if(ABORT)return;if(Browser.allowAsyncCallbacks){func()}else{Browser.queuedAsyncCallbacks.push(func)}}),timeout)}),safeSetInterval:(function(func,timeout){Module["noExitRuntime"]=true;return setInterval((function(){if(ABORT)return;if(Browser.allowAsyncCallbacks){func()}}),timeout)}),getMimetype:(function(name){return{"jpg":"image/jpeg","jpeg":"image/jpeg","png":"image/png","bmp":"image/bmp","ogg":"audio/ogg","wav":"audio/wav","mp3":"audio/mpeg"}[name.substr(name.lastIndexOf(".")+1)]}),getUserMedia:(function(func){if(!window.getUserMedia){window.getUserMedia=navigator["getUserMedia"]||navigator["mozGetUserMedia"]}window.getUserMedia(func)}),getMovementX:(function(event){return event["movementX"]||event["mozMovementX"]||event["webkitMovementX"]||0}),getMovementY:(function(event){return event["movementY"]||event["mozMovementY"]||event["webkitMovementY"]||0}),getMouseWheelDelta:(function(event){var delta=0;switch(event.type){case"DOMMouseScroll":delta=event.detail;break;case"mousewheel":delta=event.wheelDelta;break;case"wheel":delta=event["deltaY"];break;default:throw"unrecognized mouse wheel event: "+event.type}return delta}),mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,touches:{},lastTouches:{},calculateMouseEvent:(function(event){if(Browser.pointerLock){if(event.type!="mousemove"&&"mozMovementX"in event){Browser.mouseMovementX=Browser.mouseMovementY=0}else{Browser.mouseMovementX=Browser.getMovementX(event);Browser.mouseMovementY=Browser.getMovementY(event)}if(typeof SDL!="undefined"){Browser.mouseX=SDL.mouseX+Browser.mouseMovementX;Browser.mouseY=SDL.mouseY+Browser.mouseMovementY}else{Browser.mouseX+=Browser.mouseMovementX;Browser.mouseY+=Browser.mouseMovementY}}else{var rect=Module["canvas"].getBoundingClientRect();var cw=Module["canvas"].width;var ch=Module["canvas"].height;var scrollX=typeof window.scrollX!=="undefined"?window.scrollX:window.pageXOffset;var scrollY=typeof window.scrollY!=="undefined"?window.scrollY:window.pageYOffset;if(event.type==="touchstart"||event.type==="touchend"||event.type==="touchmove"){var touch=event.touch;if(touch===undefined){return}var adjustedX=touch.pageX-(scrollX+rect.left);var adjustedY=touch.pageY-(scrollY+rect.top);adjustedX=adjustedX*(cw/rect.width);adjustedY=adjustedY*(ch/rect.height);var coords={x:adjustedX,y:adjustedY};if(event.type==="touchstart"){Browser.lastTouches[touch.identifier]=coords;Browser.touches[touch.identifier]=coords}else if(event.type==="touchend"||event.type==="touchmove"){var last=Browser.touches[touch.identifier];if(!last)last=coords;Browser.lastTouches[touch.identifier]=last;Browser.touches[touch.identifier]=coords}return}var x=event.pageX-(scrollX+rect.left);var y=event.pageY-(scrollY+rect.top);x=x*(cw/rect.width);y=y*(ch/rect.height);Browser.mouseMovementX=x-Browser.mouseX;Browser.mouseMovementY=y-Browser.mouseY;Browser.mouseX=x;Browser.mouseY=y}}),asyncLoad:(function(url,onload,onerror,noRunDep){var dep=!noRunDep?getUniqueRunDependency("al "+url):"";Module["readAsync"](url,(function(arrayBuffer){assert(arrayBuffer,'Loading data file "'+url+'" failed (no arrayBuffer).');onload(new Uint8Array(arrayBuffer));if(dep)removeRunDependency(dep)}),(function(event){if(onerror){onerror()}else{throw'Loading data file "'+url+'" failed.'}}));if(dep)addRunDependency(dep)}),resizeListeners:[],updateResizeListeners:(function(){var canvas=Module["canvas"];Browser.resizeListeners.forEach((function(listener){listener(canvas.width,canvas.height)}))}),setCanvasSize:(function(width,height,noUpdates){var canvas=Module["canvas"];Browser.updateCanvasDimensions(canvas,width,height);if(!noUpdates)Browser.updateResizeListeners()}),windowedWidth:0,windowedHeight:0,setFullscreenCanvasSize:(function(){if(typeof SDL!="undefined"){var flags=HEAPU32[SDL.screen+Runtime.QUANTUM_SIZE*0>>2];flags=flags|8388608;HEAP32[SDL.screen+Runtime.QUANTUM_SIZE*0>>2]=flags}Browser.updateResizeListeners()}),setWindowedCanvasSize:(function(){if(typeof SDL!="undefined"){var flags=HEAPU32[SDL.screen+Runtime.QUANTUM_SIZE*0>>2];flags=flags&~8388608;HEAP32[SDL.screen+Runtime.QUANTUM_SIZE*0>>2]=flags}Browser.updateResizeListeners()}),updateCanvasDimensions:(function(canvas,wNative,hNative){if(wNative&&hNative){canvas.widthNative=wNative;canvas.heightNative=hNative}else{wNative=canvas.widthNative;hNative=canvas.heightNative}var w=wNative;var h=hNative;if(Module["forcedAspectRatio"]&&Module["forcedAspectRatio"]>0){if(w/h<Module["forcedAspectRatio"]){w=Math.round(h*Module["forcedAspectRatio"])}else{h=Math.round(w/Module["forcedAspectRatio"])}}if((document["fullscreenElement"]||document["mozFullScreenElement"]||document["msFullscreenElement"]||document["webkitFullscreenElement"]||document["webkitCurrentFullScreenElement"])===canvas.parentNode&&typeof screen!="undefined"){var factor=Math.min(screen.width/w,screen.height/h);w=Math.round(w*factor);h=Math.round(h*factor)}if(Browser.resizeCanvas){if(canvas.width!=w)canvas.width=w;if(canvas.height!=h)canvas.height=h;if(typeof canvas.style!="undefined"){canvas.style.removeProperty("width");canvas.style.removeProperty("height")}}else{if(canvas.width!=wNative)canvas.width=wNative;if(canvas.height!=hNative)canvas.height=hNative;if(typeof canvas.style!="undefined"){if(w!=wNative||h!=hNative){canvas.style.setProperty("width",w+"px","important");canvas.style.setProperty("height",h+"px","important")}else{canvas.style.removeProperty("width");canvas.style.removeProperty("height")}}}}),wgetRequests:{},nextWgetRequestHandle:0,getNextWgetRequestHandle:(function(){var handle=Browser.nextWgetRequestHandle;Browser.nextWgetRequestHandle++;return handle})};var SYSCALLS={varargs:0,get:(function(varargs){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret}),getStr:(function(){var ret=Pointer_stringify(SYSCALLS.get());return ret}),get64:(function(){var low=SYSCALLS.get(),high=SYSCALLS.get();if(low>=0)assert(high===0);else assert(high===-1);return low}),getZero:(function(){assert(SYSCALLS.get()===0)})};function ___syscall6(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD();FS.close(stream);return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___syscall54(which,varargs){SYSCALLS.varargs=varargs;try{return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}Module["_bitshift64Lshr"]=_bitshift64Lshr;function _typeModule(self){var structureList=[[0,1,"X"],[1,1,"const X"],[128,1,"X *"],[256,1,"X &"],[384,1,"X &&"],[512,1,"std::shared_ptr<X>"],[640,1,"std::unique_ptr<X>"],[5120,1,"std::vector<X>"],[6144,2,"std::array<X, Y>"],[9216,-1,"std::function<X (Y)>"]];function applyStructure(outerName,outerFlags,innerName,innerFlags,param,flip){if(outerFlags==1){var ref=innerFlags&896;if(ref==128||ref==256||ref==384)outerName="X const"}var name;if(flip){name=innerName.replace("X",outerName).replace("Y",param)}else{name=outerName.replace("X",innerName).replace("Y",param)}return name.replace(/([*&]) (?=[*&])/g,"$1")}function reportProblem(problem,id,kind,structureType,place){throw new Error(problem+" type "+kind.replace("X",id+"?")+(structureType?" with flag "+structureType:"")+" in "+place)}function getComplexType(id,constructType,getType,queryType,place,kind,prevStructure,depth){if(kind===void 0){kind="X"}if(depth===void 0){depth=1}var result=getType(id);if(result)return result;var query=queryType(id);var structureType=query.placeholderFlag;var structure=structureList[structureType];if(prevStructure&&structure){kind=applyStructure(prevStructure[2],prevStructure[0],kind,structure[0],"?",true)}var problem;if(structureType==0)problem="Unbound";if(structureType>=10)problem="Corrupt";if(depth>20)problem="Deeply nested";if(problem)reportProblem(problem,id,kind,structureType,place||"?");var subId=query.paramList[0];var subType=getComplexType(subId,constructType,getType,queryType,place,kind,structure,depth+1);var srcSpec;var spec={flags:structure[0],id:id,name:"",paramList:[subType]};var argList=[];var structureParam="?";switch(query.placeholderFlag){case 1:srcSpec=subType.spec;break;case 2:if((subType.flags&15360)==1024&&subType.spec.ptrSize==1){spec.flags=7168;break};case 3:case 6:case 5:srcSpec=subType.spec;if((subType.flags&15360)!=2048){}break;case 8:structureParam=""+query.paramList[1];spec.paramList.push(query.paramList[1]);break;case 9:for(var _i=0,_a=query.paramList[1];_i<_a.length;_i++){var paramId=_a[_i];var paramType=getComplexType(paramId,constructType,getType,queryType,place,kind,structure,depth+1);argList.push(paramType.name);spec.paramList.push(paramType)}structureParam=argList.join(", ");break;default:break}spec.name=applyStructure(structure[2],structure[0],subType.name,subType.flags,structureParam);if(srcSpec){for(var _b=0,_c=Object.keys(srcSpec);_b<_c.length;_b++){var key=_c[_b];spec[key]=spec[key]||srcSpec[key]}spec.flags|=srcSpec.flags}return makeType(constructType,spec)}function makeType(constructType,spec){var flags=spec.flags;var refKind=flags&896;var kind=flags&15360;if(!spec.name&&kind==1024){if(spec.ptrSize==1){spec.name=(flags&16?"":(flags&8?"un":"")+"signed ")+"char"}else{spec.name=(flags&8?"u":"")+(flags&32?"float":"int")+(spec.ptrSize*8+"_t")}}if(spec.ptrSize==8&&!(flags&32))kind=64;if(kind==2048){if(refKind==512||refKind==640){kind=4096}else if(refKind)kind=3072}return constructType(kind,spec)}var Type=(function(){function Type(spec){this.id=spec.id;this.name=spec.name;this.flags=spec.flags;this.spec=spec}Type.prototype.toString=(function(){return this.name});return Type})();var output={Type:Type,getComplexType:getComplexType,makeType:makeType,structureList:structureList};self.output=output;return self.output||output}function __nbind_register_type(id,namePtr){var name=_nbind.readAsciiString(namePtr);var spec={flags:10240,id:id,name:name};_nbind.makeType(_nbind.constructType,spec)}function __nbind_register_callback_signature(typeListPtr,typeCount){var typeList=_nbind.readTypeIdList(typeListPtr,typeCount);var num=_nbind.callbackSignatureList.length;_nbind.callbackSignatureList[num]=_nbind.makeJSCaller(typeList);return num}function __extends(Class,Parent){for(var key in Parent)if(Parent.hasOwnProperty(key))Class[key]=Parent[key];function Base(){this.constructor=Class}Base.prototype=Parent.prototype;Class.prototype=new Base}function __nbind_register_class(idListPtr,policyListPtr,superListPtr,upcastListPtr,superCount,destructorPtr,namePtr){var name=_nbind.readAsciiString(namePtr);var policyTbl=_nbind.readPolicyList(policyListPtr);var idList=HEAPU32.subarray(idListPtr/4,idListPtr/4+2);var spec={flags:2048|(policyTbl["Value"]?2:0),id:idList[0],name:name};var bindClass=_nbind.makeType(_nbind.constructType,spec);bindClass.ptrType=_nbind.getComplexType(idList[1],_nbind.constructType,_nbind.getType,_nbind.queryType);bindClass.destroy=_nbind.makeMethodCaller(bindClass.ptrType,{boundID:spec.id,flags:0,name:"destroy",num:0,ptr:destructorPtr,title:bindClass.name+".free",typeList:["void","uint32_t","uint32_t"]});if(superCount){bindClass.superIdList=Array.prototype.slice.call(HEAPU32.subarray(superListPtr/4,superListPtr/4+superCount));bindClass.upcastList=Array.prototype.slice.call(HEAPU32.subarray(upcastListPtr/4,upcastListPtr/4+superCount))}Module[bindClass.name]=bindClass.makeBound(policyTbl);_nbind.BindClass.list.push(bindClass)}function _removeAccessorPrefix(name){var prefixMatcher=/^[Gg]et_?([A-Z]?([A-Z]?))/;return name.replace(prefixMatcher,(function(match,initial,second){return second?initial:initial.toLowerCase()}))}function __nbind_register_function(boundID,policyListPtr,typeListPtr,typeCount,ptr,direct,signatureType,namePtr,num,flags){var bindClass=_nbind.getType(boundID);var policyTbl=_nbind.readPolicyList(policyListPtr);var typeList=_nbind.readTypeIdList(typeListPtr,typeCount);var specList;if(signatureType==5){specList=[{direct:ptr,name:"__nbindConstructor",ptr:0,title:bindClass.name+" constructor",typeList:["uint32_t"].concat(typeList.slice(1))},{direct:direct,name:"__nbindValueConstructor",ptr:0,title:bindClass.name+" value constructor",typeList:["void","uint32_t"].concat(typeList.slice(1))}]}else{var name_1=_nbind.readAsciiString(namePtr);var title=(bindClass.name&&bindClass.name+".")+name_1;if(signatureType==3||signatureType==4){name_1=_removeAccessorPrefix(name_1)}specList=[{boundID:boundID,direct:direct,name:name_1,ptr:ptr,title:title,typeList:typeList}]}for(var _i=0,specList_1=specList;_i<specList_1.length;_i++){var spec=specList_1[_i];spec.signatureType=signatureType;spec.policyTbl=policyTbl;spec.num=num;spec.flags=flags;bindClass.addMethod(spec)}}function _YGEdgeToString(){Module["printErr"]("missing function: YGEdgeToString");abort(-1)}function _nbind_value(name,proto){if(!_nbind.typeNameTbl[name])_nbind.throwError("Unknown value type "+name);Module["NBind"].bind_value(name,proto);_defineHidden(_nbind.typeNameTbl[name].proto.prototype.__nbindValueConstructor)(proto.prototype,"__nbindValueConstructor")}Module["_nbind_value"]=_nbind_value;function __nbind_get_value_object(num,ptr){var obj=_nbind.popValue(num);if(!obj.fromJS){throw new Error("Object "+obj+" has no fromJS function")}obj.fromJS((function(){obj.__nbindValueConstructor.apply(this,Array.prototype.concat.apply([ptr],arguments))}))}function _emscripten_memcpy_big(dest,src,num){HEAPU8.set(HEAPU8.subarray(src,src+num),dest);return dest}Module["_memcpy"]=_memcpy;function _llvm_stackrestore(p){var self=_llvm_stacksave;var ret=self.LLVM_SAVEDSTACKS[p];self.LLVM_SAVEDSTACKS.splice(p,1);Runtime.stackRestore(ret)}var cttz_i8=allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0],"i8",ALLOC_STATIC);Module["_llvm_cttz_i32"]=_llvm_cttz_i32;Module["___udivmoddi4"]=___udivmoddi4;Module["___udivdi3"]=___udivdi3;function _YGOverflowToString(){Module["printErr"]("missing function: YGOverflowToString");abort(-1)}function ___setErrNo(value){if(Module["___errno_location"])HEAP32[Module["___errno_location"]()>>2]=value;return value}Module["_sbrk"]=_sbrk;function _llvm_stacksave(){var self=_llvm_stacksave;if(!self.LLVM_SAVEDSTACKS){self.LLVM_SAVEDSTACKS=[]}self.LLVM_SAVEDSTACKS.push(Runtime.stackSave());return self.LLVM_SAVEDSTACKS.length-1}function _YGAlignToString(){Module["printErr"]("missing function: YGAlignToString");abort(-1)}Module["___uremdi3"]=___uremdi3;Module["_llvm_bswap_i32"]=_llvm_bswap_i32;function _YGPositionTypeToString(){Module["printErr"]("missing function: YGPositionTypeToString");abort(-1)}function ___syscall140(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(),offset_high=SYSCALLS.get(),offset_low=SYSCALLS.get(),result=SYSCALLS.get(),whence=SYSCALLS.get();var offset=offset_low;FS.llseek(stream,offset,whence);HEAP32[result>>2]=stream.position;if(stream.getdents&&offset===0&&whence===0)stream.getdents=null;return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___syscall146(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.get(),iov=SYSCALLS.get(),iovcnt=SYSCALLS.get();var ret=0;if(!___syscall146.buffer){___syscall146.buffers=[null,[],[]];___syscall146.printChar=(function(stream,curr){var buffer=___syscall146.buffers[stream];assert(buffer);if(curr===0||curr===10){(stream===1?Module["print"]:Module["printErr"])(UTF8ArrayToString(buffer,0));buffer.length=0}else{buffer.push(curr)}})}for(var i=0;i<iovcnt;i++){var ptr=HEAP32[iov+i*8>>2];var len=HEAP32[iov+(i*8+4)>>2];for(var j=0;j<len;j++){___syscall146.printChar(stream,HEAPU8[ptr+j])}ret+=len}return ret}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function __nbind_finish(){for(var _i=0,_a=_nbind.BindClass.list;_i<_a.length;_i++){var bindClass=_a[_i];bindClass.finish()}}function _YGDisplayToString(){Module["printErr"]("missing function: YGDisplayToString");abort(-1)}var ___dso_handle=STATICTOP;STATICTOP+=16;((function(_nbind){var typeIdTbl={};_nbind.typeNameTbl={};var Pool=(function(){function Pool(){}Pool.lalloc=(function(size){size=size+7&~7;var used=HEAPU32[Pool.usedPtr];if(size>Pool.pageSize/2||size>Pool.pageSize-used){var NBind=_nbind.typeNameTbl["NBind"].proto;return NBind.lalloc(size)}else{HEAPU32[Pool.usedPtr]=used+size;return Pool.rootPtr+used}});Pool.lreset=(function(used,page){var topPage=HEAPU32[Pool.pagePtr];if(topPage){var NBind=_nbind.typeNameTbl["NBind"].proto;NBind.lreset(used,page)}else{HEAPU32[Pool.usedPtr]=used}});return Pool})();_nbind.Pool=Pool;function constructType(kind,spec){var construct=kind==10240?_nbind.makeTypeNameTbl[spec.name]||_nbind.BindType:_nbind.makeTypeKindTbl[kind];var bindType=new construct(spec);typeIdTbl[spec.id]=bindType;_nbind.typeNameTbl[spec.name]=bindType;return bindType}_nbind.constructType=constructType;function getType(id){return typeIdTbl[id]}_nbind.getType=getType;function queryType(id){var placeholderFlag=HEAPU8[id];var paramCount=_nbind.structureList[placeholderFlag][1];id/=4;if(paramCount<0){++id;paramCount=HEAPU32[id]+1}var paramList=Array.prototype.slice.call(HEAPU32.subarray(id+1,id+1+paramCount));if(placeholderFlag==9){paramList=[paramList[0],paramList.slice(1)]}return{paramList:paramList,placeholderFlag:placeholderFlag}}_nbind.queryType=queryType;function getTypes(idList,place){return idList.map((function(id){return typeof id=="number"?_nbind.getComplexType(id,constructType,getType,queryType,place):_nbind.typeNameTbl[id]}))}_nbind.getTypes=getTypes;function readTypeIdList(typeListPtr,typeCount){return Array.prototype.slice.call(HEAPU32,typeListPtr/4,typeListPtr/4+typeCount)}_nbind.readTypeIdList=readTypeIdList;function readAsciiString(ptr){var endPtr=ptr;while(HEAPU8[endPtr++]);return String.fromCharCode.apply("",HEAPU8.subarray(ptr,endPtr-1))}_nbind.readAsciiString=readAsciiString;function readPolicyList(policyListPtr){var policyTbl={};if(policyListPtr){while(1){var namePtr=HEAPU32[policyListPtr/4];if(!namePtr)break;policyTbl[readAsciiString(namePtr)]=true;policyListPtr+=4}}return policyTbl}_nbind.readPolicyList=readPolicyList;function getDynCall(typeList,name){var mangleMap={float32_t:"d",float64_t:"d",int64_t:"d",uint64_t:"d","void":"v"};var signature=typeList.map((function(type){return mangleMap[type.name]||"i"})).join("");var dynCall=Module["dynCall_"+signature];if(!dynCall){throw new Error("dynCall_"+signature+" not found for "+name+"("+typeList.map((function(type){return type.name})).join(", ")+")")}return dynCall}_nbind.getDynCall=getDynCall;function addMethod(obj,name,func,arity){var overload=obj[name];if(obj.hasOwnProperty(name)&&overload){if(overload.arity||overload.arity===0){overload=_nbind.makeOverloader(overload,overload.arity);obj[name]=overload}overload.addMethod(func,arity)}else{func.arity=arity;obj[name]=func}}_nbind.addMethod=addMethod;function throwError(message){throw new Error(message)}_nbind.throwError=throwError;_nbind.bigEndian=false;_a=_typeModule(_typeModule),_nbind.Type=_a.Type,_nbind.makeType=_a.makeType,_nbind.getComplexType=_a.getComplexType,_nbind.structureList=_a.structureList;var BindType=(function(_super){__extends(BindType,_super);function BindType(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.heap=HEAPU32;_this.ptrSize=4;return _this}BindType.prototype.needsWireRead=(function(policyTbl){return!!this.wireRead||!!this.makeWireRead});BindType.prototype.needsWireWrite=(function(policyTbl){return!!this.wireWrite||!!this.makeWireWrite});return BindType})(_nbind.Type);_nbind.BindType=BindType;var PrimitiveType=(function(_super){__extends(PrimitiveType,_super);function PrimitiveType(spec){var _this=_super.call(this,spec)||this;var heapTbl=spec.flags&32?{32:HEAPF32,64:HEAPF64}:spec.flags&8?{8:HEAPU8,16:HEAPU16,32:HEAPU32}:{8:HEAP8,16:HEAP16,32:HEAP32};_this.heap=heapTbl[spec.ptrSize*8];_this.ptrSize=spec.ptrSize;return _this}PrimitiveType.prototype.needsWireWrite=(function(policyTbl){return!!policyTbl&&!!policyTbl["Strict"]});PrimitiveType.prototype.makeWireWrite=(function(expr,policyTbl){return policyTbl&&policyTbl["Strict"]&&(function(arg){if(typeof arg=="number")return arg;throw new Error("Type mismatch")})});return PrimitiveType})(BindType);_nbind.PrimitiveType=PrimitiveType;function pushCString(str,policyTbl){if(str===null||str===undefined){if(policyTbl&&policyTbl["Nullable"]){return 0}else throw new Error("Type mismatch")}if(policyTbl&&policyTbl["Strict"]){if(typeof str!="string")throw new Error("Type mismatch")}else str=str.toString();var length=Module.lengthBytesUTF8(str)+1;var result=_nbind.Pool.lalloc(length);Module.stringToUTF8Array(str,HEAPU8,result,length);return result}_nbind.pushCString=pushCString;function popCString(ptr){if(ptr===0)return null;return Module.Pointer_stringify(ptr)}_nbind.popCString=popCString;var CStringType=(function(_super){__extends(CStringType,_super);function CStringType(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.wireRead=popCString;_this.wireWrite=pushCString;_this.readResources=[_nbind.resources.pool];_this.writeResources=[_nbind.resources.pool];return _this}CStringType.prototype.makeWireWrite=(function(expr,policyTbl){return(function(arg){return pushCString(arg,policyTbl)})});return CStringType})(BindType);_nbind.CStringType=CStringType;var BooleanType=(function(_super){__extends(BooleanType,_super);function BooleanType(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.wireRead=(function(arg){return!!arg});return _this}BooleanType.prototype.needsWireWrite=(function(policyTbl){return!!policyTbl&&!!policyTbl["Strict"]});BooleanType.prototype.makeWireRead=(function(expr){return"!!("+expr+")"});BooleanType.prototype.makeWireWrite=(function(expr,policyTbl){return policyTbl&&policyTbl["Strict"]&&(function(arg){if(typeof arg=="boolean")return arg;throw new Error("Type mismatch")})||expr});return BooleanType})(BindType);_nbind.BooleanType=BooleanType;var Wrapper=(function(){function Wrapper(){}Wrapper.prototype.persist=(function(){this.__nbindState|=1});return Wrapper})();_nbind.Wrapper=Wrapper;function makeBound(policyTbl,bindClass){var Bound=(function(_super){__extends(Bound,_super);function Bound(marker,flags,ptr,shared){var _this=_super.call(this)||this;if(!(_this instanceof Bound)){return new(Function.prototype.bind.apply(Bound,Array.prototype.concat.apply([null],arguments)))}var nbindFlags=flags;var nbindPtr=ptr;var nbindShared=shared;if(marker!==_nbind.ptrMarker){var wirePtr=_this.__nbindConstructor.apply(_this,arguments);nbindFlags=4096|512;nbindShared=HEAPU32[wirePtr/4];nbindPtr=HEAPU32[wirePtr/4+1]}var spec={configurable:true,enumerable:false,value:null,writable:false};var propTbl={"__nbindFlags":nbindFlags,"__nbindPtr":nbindPtr};if(nbindShared){propTbl["__nbindShared"]=nbindShared;_nbind.mark(_this)}for(var _i=0,_a=Object.keys(propTbl);_i<_a.length;_i++){var key=_a[_i];spec.value=propTbl[key];Object.defineProperty(_this,key,spec)}_defineHidden(0)(_this,"__nbindState");return _this}Bound.prototype.free=(function(){bindClass.destroy.call(this,this.__nbindShared,this.__nbindFlags);this.__nbindState|=2;disableMember(this,"__nbindShared");disableMember(this,"__nbindPtr")});return Bound})(Wrapper);__decorate([_defineHidden()],Bound.prototype,"__nbindConstructor",void 0);__decorate([_defineHidden()],Bound.prototype,"__nbindValueConstructor",void 0);__decorate([_defineHidden(policyTbl)],Bound.prototype,"__nbindPolicies",void 0);return Bound}_nbind.makeBound=makeBound;function disableMember(obj,name){function die(){throw new Error("Accessing deleted object")}Object.defineProperty(obj,name,{configurable:false,enumerable:false,get:die,set:die})}_nbind.ptrMarker={};var BindClass=(function(_super){__extends(BindClass,_super);function BindClass(spec){var _this=_super.call(this,spec)||this;_this.wireRead=(function(arg){return _nbind.popValue(arg,_this.ptrType)});_this.wireWrite=(function(arg){return pushPointer(arg,_this.ptrType,true)});_this.pendingSuperCount=0;_this.ready=false;_this.methodTbl={};if(spec.paramList){_this.classType=spec.paramList[0].classType;_this.proto=_this.classType.proto}else _this.classType=_this;return _this}BindClass.prototype.makeBound=(function(policyTbl){var Bound=_nbind.makeBound(policyTbl,this);this.proto=Bound;this.ptrType.proto=Bound;return Bound});BindClass.prototype.addMethod=(function(spec){var overloadList=this.methodTbl[spec.name]||[];overloadList.push(spec);this.methodTbl[spec.name]=overloadList});BindClass.prototype.registerMethods=(function(src,staticOnly){var setter;for(var _i=0,_a=Object.keys(src.methodTbl);_i<_a.length;_i++){var name_1=_a[_i];var overloadList=src.methodTbl[name_1];for(var _b=0,overloadList_1=overloadList;_b<overloadList_1.length;_b++){var spec=overloadList_1[_b];var target=void 0;var caller=void 0;target=this.proto.prototype;if(staticOnly&&spec.signatureType!=1)continue;switch(spec.signatureType){case 1:target=this.proto;case 5:caller=_nbind.makeCaller(spec);_nbind.addMethod(target,spec.name,caller,spec.typeList.length-1);break;case 4:setter=_nbind.makeMethodCaller(src.ptrType,spec);break;case 3:Object.defineProperty(target,spec.name,{configurable:true,enumerable:false,get:_nbind.makeMethodCaller(src.ptrType,spec),set:setter});break;case 2:caller=_nbind.makeMethodCaller(src.ptrType,spec);_nbind.addMethod(target,spec.name,caller,spec.typeList.length-1);break;default:break}}}});BindClass.prototype.registerSuperMethods=(function(src,firstSuper,visitTbl){if(visitTbl[src.name])return;visitTbl[src.name]=true;var superNum=0;var nextFirst;for(var _i=0,_a=src.superIdList||[];_i<_a.length;_i++){var superId=_a[_i];var superClass=_nbind.getType(superId);if(superNum++<firstSuper||firstSuper<0){nextFirst=-1}else{nextFirst=0}this.registerSuperMethods(superClass,nextFirst,visitTbl)}this.registerMethods(src,firstSuper<0)});BindClass.prototype.finish=(function(){if(this.ready)return this;this.ready=true;this.superList=(this.superIdList||[]).map((function(superId){return _nbind.getType(superId).finish()}));var Bound=this.proto;if(this.superList.length){var Proto=(function(){this.constructor=Bound});Proto.prototype=this.superList[0].proto.prototype;Bound.prototype=new Proto}if(Bound!=Module)Bound.prototype.__nbindType=this;this.registerSuperMethods(this,1,{});return this});BindClass.prototype.upcastStep=(function(dst,ptr){if(dst==this)return ptr;for(var i=0;i<this.superList.length;++i){var superPtr=this.superList[i].upcastStep(dst,_nbind.callUpcast(this.upcastList[i],ptr));if(superPtr)return superPtr}return 0});return BindClass})(_nbind.BindType);BindClass.list=[];_nbind.BindClass=BindClass;function popPointer(ptr,type){return ptr?new type.proto(_nbind.ptrMarker,type.flags,ptr):null}_nbind.popPointer=popPointer;function pushPointer(obj,type,tryValue){if(!(obj instanceof _nbind.Wrapper)){if(tryValue){return _nbind.pushValue(obj)}else throw new Error("Type mismatch")}var ptr=obj.__nbindPtr;var objType=obj.__nbindType.classType;var classType=type.classType;if(obj instanceof type.proto){while(objType!=classType){ptr=_nbind.callUpcast(objType.upcastList[0],ptr);objType=objType.superList[0]}}else{ptr=objType.upcastStep(classType,ptr);if(!ptr)throw new Error("Type mismatch")}return ptr}_nbind.pushPointer=pushPointer;function pushMutablePointer(obj,type){var ptr=pushPointer(obj,type);if(obj.__nbindFlags&1){throw new Error("Passing a const value as a non-const argument")}return ptr}var BindClassPtr=(function(_super){__extends(BindClassPtr,_super);function BindClassPtr(spec){var _this=_super.call(this,spec)||this;_this.classType=spec.paramList[0].classType;_this.proto=_this.classType.proto;var isConst=spec.flags&1;var isValue=(_this.flags&896)==256&&spec.flags&2;var push=isConst?pushPointer:pushMutablePointer;var pop=isValue?_nbind.popValue:popPointer;_this.makeWireWrite=(function(expr,policyTbl){return policyTbl["Nullable"]?(function(arg){return arg?push(arg,_this):0}):(function(arg){return push(arg,_this)})});_this.wireRead=(function(arg){return pop(arg,_this)});_this.wireWrite=(function(arg){return push(arg,_this)});return _this}return BindClassPtr})(_nbind.BindType);_nbind.BindClassPtr=BindClassPtr;function popShared(ptr,type){var shared=HEAPU32[ptr/4];var unsafe=HEAPU32[ptr/4+1];return unsafe?new type.proto(_nbind.ptrMarker,type.flags,unsafe,shared):null}_nbind.popShared=popShared;function pushShared(obj,type){if(!(obj instanceof type.proto))throw new Error("Type mismatch");return obj.__nbindShared}function pushMutableShared(obj,type){if(!(obj instanceof type.proto))throw new Error("Type mismatch");if(obj.__nbindFlags&1){throw new Error("Passing a const value as a non-const argument")}return obj.__nbindShared}var SharedClassPtr=(function(_super){__extends(SharedClassPtr,_super);function SharedClassPtr(spec){var _this=_super.call(this,spec)||this;_this.readResources=[_nbind.resources.pool];_this.classType=spec.paramList[0].classType;_this.proto=_this.classType.proto;var isConst=spec.flags&1;var push=isConst?pushShared:pushMutableShared;_this.wireRead=(function(arg){return popShared(arg,_this)});_this.wireWrite=(function(arg){return push(arg,_this)});return _this}return SharedClassPtr})(_nbind.BindType);_nbind.SharedClassPtr=SharedClassPtr;_nbind.externalList=[0];var firstFreeExternal=0;var External=(function(){function External(data){this.refCount=1;this.data=data}External.prototype.register=(function(){var num=firstFreeExternal;if(num){firstFreeExternal=_nbind.externalList[num]}else num=_nbind.externalList.length;_nbind.externalList[num]=this;return num});External.prototype.reference=(function(){++this.refCount});External.prototype.dereference=(function(num){if(--this.refCount==0){if(this.free)this.free();_nbind.externalList[num]=firstFreeExternal;firstFreeExternal=num}});return External})();_nbind.External=External;function popExternal(num){var obj=_nbind.externalList[num];obj.dereference(num);return obj.data}function pushExternal(obj){var external=new External(obj);external.reference();return external.register()}var ExternalType=(function(_super){__extends(ExternalType,_super);function ExternalType(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.wireRead=popExternal;_this.wireWrite=pushExternal;return _this}return ExternalType})(_nbind.BindType);_nbind.ExternalType=ExternalType;_nbind.callbackSignatureList=[];var CallbackType=(function(_super){__extends(CallbackType,_super);function CallbackType(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.wireWrite=(function(func){if(typeof func!="function")_nbind.throwError("Type mismatch");return(new _nbind.External(func)).register()});return _this}return CallbackType})(_nbind.BindType);_nbind.CallbackType=CallbackType;_nbind.valueList=[0];var firstFreeValue=0;function pushValue(value){var num=firstFreeValue;if(num){firstFreeValue=_nbind.valueList[num]}else num=_nbind.valueList.length;_nbind.valueList[num]=value;return num*2+1}_nbind.pushValue=pushValue;function popValue(num,type){if(!num)_nbind.throwError("Value type JavaScript class is missing or not registered");if(num&1){num>>=1;var obj=_nbind.valueList[num];_nbind.valueList[num]=firstFreeValue;firstFreeValue=num;return obj}else if(type){return _nbind.popShared(num,type)}else throw new Error("Invalid value slot "+num)}_nbind.popValue=popValue;var valueBase=0x10000000000000000;function push64(num){if(typeof num=="number")return num;return pushValue(num)*4096+valueBase}function pop64(num){if(num<valueBase)return num;return popValue((num-valueBase)/4096)}var CreateValueType=(function(_super){__extends(CreateValueType,_super);function CreateValueType(){return _super!==null&&_super.apply(this,arguments)||this}CreateValueType.prototype.makeWireWrite=(function(expr){return"(_nbind.pushValue(new "+expr+"))"});return CreateValueType})(_nbind.BindType);_nbind.CreateValueType=CreateValueType;var Int64Type=(function(_super){__extends(Int64Type,_super);function Int64Type(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.wireWrite=push64;_this.wireRead=pop64;return _this}return Int64Type})(_nbind.BindType);_nbind.Int64Type=Int64Type;function pushArray(arr,type){if(!arr)return 0;var length=arr.length;if((type.size||type.size===0)&&length<type.size){throw new Error("Type mismatch")}var ptrSize=type.memberType.ptrSize;var result=_nbind.Pool.lalloc(4+length*ptrSize);HEAPU32[result/4]=length;var heap=type.memberType.heap;var ptr=(result+4)/ptrSize;var wireWrite=type.memberType.wireWrite;var num=0;if(wireWrite){while(num<length){heap[ptr++]=wireWrite(arr[num++])}}else{while(num<length){heap[ptr++]=arr[num++]}}return result}_nbind.pushArray=pushArray;function popArray(ptr,type){if(ptr===0)return null;var length=HEAPU32[ptr/4];var arr=new Array(length);var heap=type.memberType.heap;ptr=(ptr+4)/type.memberType.ptrSize;var wireRead=type.memberType.wireRead;var num=0;if(wireRead){while(num<length){arr[num++]=wireRead(heap[ptr++])}}else{while(num<length){arr[num++]=heap[ptr++]}}return arr}_nbind.popArray=popArray;var ArrayType=(function(_super){__extends(ArrayType,_super);function ArrayType(spec){var _this=_super.call(this,spec)||this;_this.wireRead=(function(arg){return popArray(arg,_this)});_this.wireWrite=(function(arg){return pushArray(arg,_this)});_this.readResources=[_nbind.resources.pool];_this.writeResources=[_nbind.resources.pool];_this.memberType=spec.paramList[0];if(spec.paramList[1])_this.size=spec.paramList[1];return _this}return ArrayType})(_nbind.BindType);_nbind.ArrayType=ArrayType;function pushString(str,policyTbl){if(str===null||str===undefined){if(policyTbl&&policyTbl["Nullable"]){str=""}else throw new Error("Type mismatch")}if(policyTbl&&policyTbl["Strict"]){if(typeof str!="string")throw new Error("Type mismatch")}else str=str.toString();var length=Module.lengthBytesUTF8(str);var result=_nbind.Pool.lalloc(4+length+1);HEAPU32[result/4]=length;Module.stringToUTF8Array(str,HEAPU8,result+4,length+1);return result}_nbind.pushString=pushString;function popString(ptr){if(ptr===0)return null;var length=HEAPU32[ptr/4];return Module.Pointer_stringify(ptr+4,length)}_nbind.popString=popString;var StringType=(function(_super){__extends(StringType,_super);function StringType(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.wireRead=popString;_this.wireWrite=pushString;_this.readResources=[_nbind.resources.pool];_this.writeResources=[_nbind.resources.pool];return _this}StringType.prototype.makeWireWrite=(function(expr,policyTbl){return(function(arg){return pushString(arg,policyTbl)})});return StringType})(_nbind.BindType);_nbind.StringType=StringType;function makeArgList(argCount){return Array.apply(null,Array(argCount)).map((function(dummy,num){return"a"+(num+1)}))}function anyNeedsWireWrite(typeList,policyTbl){return typeList.reduce((function(result,type){return result||type.needsWireWrite(policyTbl)}),false)}function anyNeedsWireRead(typeList,policyTbl){return typeList.reduce((function(result,type){return result||!!type.needsWireRead(policyTbl)}),false)}function makeWireRead(convertParamList,policyTbl,type,expr){var paramNum=convertParamList.length;if(type.makeWireRead){return type.makeWireRead(expr,convertParamList,paramNum)}else if(type.wireRead){convertParamList[paramNum]=type.wireRead;return"(convertParamList["+paramNum+"]("+expr+"))"}else return expr}function makeWireWrite(convertParamList,policyTbl,type,expr){var wireWrite;var paramNum=convertParamList.length;if(type.makeWireWrite){wireWrite=type.makeWireWrite(expr,policyTbl,convertParamList,paramNum)}else wireWrite=type.wireWrite;if(wireWrite){if(typeof wireWrite=="string"){return wireWrite}else{convertParamList[paramNum]=wireWrite;return"(convertParamList["+paramNum+"]("+expr+"))"}}else return expr}function buildCallerFunction(dynCall,ptrType,ptr,num,policyTbl,needsWireWrite,prefix,returnType,argTypeList,mask,err){var argList=makeArgList(argTypeList.length);var convertParamList=[];var callExpression=makeWireRead(convertParamList,policyTbl,returnType,"dynCall("+[prefix].concat(argList.map((function(name,index){return makeWireWrite(convertParamList,policyTbl,argTypeList[index],name)}))).join(",")+")");var resourceSet=_nbind.listResources([returnType],argTypeList);var sourceCode="function("+argList.join(",")+"){"+(mask?"this.__nbindFlags&mask&&err();":"")+resourceSet.makeOpen()+"var r="+callExpression+";"+resourceSet.makeClose()+"return r;"+"}";return eval("("+sourceCode+")")}function buildJSCallerFunction(returnType,argTypeList){var argList=makeArgList(argTypeList.length);var convertParamList=[];var callExpression=makeWireWrite(convertParamList,null,returnType,"_nbind.externalList[num].data("+argList.map((function(name,index){return makeWireRead(convertParamList,null,argTypeList[index],name)})).join(",")+")");var resourceSet=_nbind.listResources(argTypeList,[returnType]);resourceSet.remove(_nbind.resources.pool);var sourceCode="function("+["dummy","num"].concat(argList).join(",")+"){"+resourceSet.makeOpen()+"var r="+callExpression+";"+resourceSet.makeClose()+"return r;"+"}";return eval("("+sourceCode+")")}_nbind.buildJSCallerFunction=buildJSCallerFunction;function makeJSCaller(idList){var argCount=idList.length-1;var typeList=_nbind.getTypes(idList,"callback");var returnType=typeList[0];var argTypeList=typeList.slice(1);var needsWireRead=anyNeedsWireRead(argTypeList,null);var needsWireWrite=returnType.needsWireWrite(null);if(!needsWireWrite&&!needsWireRead){switch(argCount){case 0:return(function(dummy,num){return _nbind.externalList[num].data()});case 1:return(function(dummy,num,a1){return _nbind.externalList[num].data(a1)});case 2:return(function(dummy,num,a1,a2){return _nbind.externalList[num].data(a1,a2)});case 3:return(function(dummy,num,a1,a2,a3){return _nbind.externalList[num].data(a1,a2,a3)});default:break}}return buildJSCallerFunction(returnType,argTypeList)}_nbind.makeJSCaller=makeJSCaller;function makeMethodCaller(ptrType,spec){var argCount=spec.typeList.length-1;var typeIdList=spec.typeList.slice(0);typeIdList.splice(1,0,"uint32_t",spec.boundID);var typeList=_nbind.getTypes(typeIdList,spec.title);var returnType=typeList[0];var argTypeList=typeList.slice(3);var needsWireRead=returnType.needsWireRead(spec.policyTbl);var needsWireWrite=anyNeedsWireWrite(argTypeList,spec.policyTbl);var ptr=spec.ptr;var num=spec.num;var dynCall=_nbind.getDynCall(typeList,spec.title);var mask=~spec.flags&1;function err(){throw new Error("Calling a non-const method on a const object")}if(!needsWireRead&&!needsWireWrite){switch(argCount){case 0:return(function(){return this.__nbindFlags&mask?err():dynCall(ptr,num,_nbind.pushPointer(this,ptrType))});case 1:return(function(a1){return this.__nbindFlags&mask?err():dynCall(ptr,num,_nbind.pushPointer(this,ptrType),a1)});case 2:return(function(a1,a2){return this.__nbindFlags&mask?err():dynCall(ptr,num,_nbind.pushPointer(this,ptrType),a1,a2)});case 3:return(function(a1,a2,a3){return this.__nbindFlags&mask?err():dynCall(ptr,num,_nbind.pushPointer(this,ptrType),a1,a2,a3)});default:break}}return buildCallerFunction(dynCall,ptrType,ptr,num,spec.policyTbl,needsWireWrite,"ptr,num,pushPointer(this,ptrType)",returnType,argTypeList,mask,err)}_nbind.makeMethodCaller=makeMethodCaller;function makeCaller(spec){var argCount=spec.typeList.length-1;var typeList=_nbind.getTypes(spec.typeList,spec.title);var returnType=typeList[0];var argTypeList=typeList.slice(1);var needsWireRead=returnType.needsWireRead(spec.policyTbl);var needsWireWrite=anyNeedsWireWrite(argTypeList,spec.policyTbl);var direct=spec.direct;var ptr=spec.ptr;if(spec.direct&&!needsWireRead&&!needsWireWrite){var dynCall_1=_nbind.getDynCall(typeList,spec.title);switch(argCount){case 0:return(function(){return dynCall_1(direct)});case 1:return(function(a1){return dynCall_1(direct,a1)});case 2:return(function(a1,a2){return dynCall_1(direct,a1,a2)});case 3:return(function(a1,a2,a3){return dynCall_1(direct,a1,a2,a3)});default:break}ptr=0}var prefix;if(ptr){var typeIdList=spec.typeList.slice(0);typeIdList.splice(1,0,"uint32_t");typeList=_nbind.getTypes(typeIdList,spec.title);prefix="ptr,num"}else{ptr=direct;prefix="ptr"}var dynCall=_nbind.getDynCall(typeList,spec.title);return buildCallerFunction(dynCall,null,ptr,spec.num,spec.policyTbl,needsWireWrite,prefix,returnType,argTypeList)}_nbind.makeCaller=makeCaller;function makeOverloader(func,arity){var callerList=[];function call(){return callerList[arguments.length].apply(this,arguments)}call.addMethod=(function(_func,_arity){callerList[_arity]=_func});call.addMethod(func,arity);return call}_nbind.makeOverloader=makeOverloader;var Resource=(function(){function Resource(open,close){var _this=this;this.makeOpen=(function(){return Object.keys(_this.openTbl).join("")});this.makeClose=(function(){return Object.keys(_this.closeTbl).join("")});this.openTbl={};this.closeTbl={};if(open)this.openTbl[open]=true;if(close)this.closeTbl[close]=true}Resource.prototype.add=(function(other){for(var _i=0,_a=Object.keys(other.openTbl);_i<_a.length;_i++){var key=_a[_i];this.openTbl[key]=true}for(var _b=0,_c=Object.keys(other.closeTbl);_b<_c.length;_b++){var key=_c[_b];this.closeTbl[key]=true}});Resource.prototype.remove=(function(other){for(var _i=0,_a=Object.keys(other.openTbl);_i<_a.length;_i++){var key=_a[_i];delete this.openTbl[key]}for(var _b=0,_c=Object.keys(other.closeTbl);_b<_c.length;_b++){var key=_c[_b];delete this.closeTbl[key]}});return Resource})();_nbind.Resource=Resource;function listResources(readList,writeList){var result=new Resource;for(var _i=0,readList_1=readList;_i<readList_1.length;_i++){var bindType=readList_1[_i];for(var _a=0,_b=bindType.readResources||[];_a<_b.length;_a++){var resource=_b[_a];result.add(resource)}}for(var _c=0,writeList_1=writeList;_c<writeList_1.length;_c++){var bindType=writeList_1[_c];for(var _d=0,_e=bindType.writeResources||[];_d<_e.length;_d++){var resource=_e[_d];result.add(resource)}}return result}_nbind.listResources=listResources;_nbind.resources={pool:new Resource("var used=HEAPU32[_nbind.Pool.usedPtr],page=HEAPU32[_nbind.Pool.pagePtr];","_nbind.Pool.lreset(used,page);")};var ExternalBuffer=(function(_super){__extends(ExternalBuffer,_super);function ExternalBuffer(buf,ptr){var _this=_super.call(this,buf)||this;_this.ptr=ptr;return _this}ExternalBuffer.prototype.free=(function(){_free(this.ptr)});return ExternalBuffer})(_nbind.External);function getBuffer(buf){if(buf instanceof ArrayBuffer){return new Uint8Array(buf)}else if(buf instanceof DataView){return new Uint8Array(buf.buffer,buf.byteOffset,buf.byteLength)}else return buf}function pushBuffer(buf,policyTbl){if(buf===null||buf===undefined){if(policyTbl&&policyTbl["Nullable"])buf=[]}if(typeof buf!="object")throw new Error("Type mismatch");var b=buf;var length=b.byteLength||b.length;if(!length&&length!==0&&b.byteLength!==0)throw new Error("Type mismatch");var result=_nbind.Pool.lalloc(8);var data=_malloc(length);var ptr=result/4;HEAPU32[ptr++]=length;HEAPU32[ptr++]=data;HEAPU32[ptr++]=(new ExternalBuffer(buf,data)).register();HEAPU8.set(getBuffer(buf),data);return result}var BufferType=(function(_super){__extends(BufferType,_super);function BufferType(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.wireWrite=pushBuffer;_this.readResources=[_nbind.resources.pool];_this.writeResources=[_nbind.resources.pool];return _this}BufferType.prototype.makeWireWrite=(function(expr,policyTbl){return(function(arg){return pushBuffer(arg,policyTbl)})});return BufferType})(_nbind.BindType);_nbind.BufferType=BufferType;function commitBuffer(num,data,length){var buf=_nbind.externalList[num].data;var NodeBuffer=Buffer;if(typeof Buffer!="function")NodeBuffer=(function(){});if(buf instanceof Array){}else{var src=HEAPU8.subarray(data,data+length);if(buf instanceof NodeBuffer){var srcBuf=void 0;if(typeof Buffer.from=="function"&&Buffer.from.length>=3){srcBuf=Buffer.from(src)}else srcBuf=new Buffer(src);srcBuf.copy(buf)}else getBuffer(buf).set(src)}}_nbind.commitBuffer=commitBuffer;var dirtyList=[];var gcTimer=0;function sweep(){for(var _i=0,dirtyList_1=dirtyList;_i<dirtyList_1.length;_i++){var obj=dirtyList_1[_i];if(!(obj.__nbindState&(1|2))){obj.free()}}dirtyList=[];gcTimer=0}_nbind.mark=(function(obj){});function toggleLightGC(enable){if(enable){_nbind.mark=(function(obj){dirtyList.push(obj);if(!gcTimer)gcTimer=setTimeout(sweep,0)})}else{_nbind.mark=(function(obj){})}}_nbind.toggleLightGC=toggleLightGC}))(_nbind);Module["requestFullScreen"]=function Module_requestFullScreen(lockPointer,resizeCanvas,vrDevice){Module.printErr("Module.requestFullScreen is deprecated. Please call Module.requestFullscreen instead.");Module["requestFullScreen"]=Module["requestFullscreen"];Browser.requestFullScreen(lockPointer,resizeCanvas,vrDevice)};Module["requestFullscreen"]=function Module_requestFullscreen(lockPointer,resizeCanvas,vrDevice){Browser.requestFullscreen(lockPointer,resizeCanvas,vrDevice)};Module["requestAnimationFrame"]=function Module_requestAnimationFrame(func){Browser.requestAnimationFrame(func)};Module["setCanvasSize"]=function Module_setCanvasSize(width,height,noUpdates){Browser.setCanvasSize(width,height,noUpdates)};Module["pauseMainLoop"]=function Module_pauseMainLoop(){Browser.mainLoop.pause()};Module["resumeMainLoop"]=function Module_resumeMainLoop(){Browser.mainLoop.resume()};Module["getUserMedia"]=function Module_getUserMedia(){Browser.getUserMedia()};Module["createContext"]=function Module_createContext(canvas,useWebGL,setInModule,webGLContextAttributes){return Browser.createContext(canvas,useWebGL,setInModule,webGLContextAttributes)};if(ENVIRONMENT_IS_NODE){_emscripten_get_now=function _emscripten_get_now_actual(){var t=process["hrtime"]();return t[0]*1e3+t[1]/1e6}}else if(typeof dateNow!=="undefined"){_emscripten_get_now=dateNow}else if(typeof self==="object"&&self["performance"]&&typeof self["performance"]["now"]==="function"){_emscripten_get_now=(function(){return self["performance"]["now"]()})}else if(typeof performance==="object"&&typeof performance["now"]==="function"){_emscripten_get_now=(function(){return performance["now"]()})}else{_emscripten_get_now=Date.now}__ATEXIT__.push((function(){var fflush=Module["_fflush"];if(fflush)fflush(0);var printChar=___syscall146.printChar;if(!printChar)return;var buffers=___syscall146.buffers;if(buffers[1].length)printChar(1,10);if(buffers[2].length)printChar(2,10)}));DYNAMICTOP_PTR=allocate(1,"i32",ALLOC_STATIC);STACK_BASE=STACKTOP=Runtime.alignMemory(STATICTOP);STACK_MAX=STACK_BASE+TOTAL_STACK;DYNAMIC_BASE=Runtime.alignMemory(STACK_MAX);HEAP32[DYNAMICTOP_PTR>>2]=DYNAMIC_BASE;staticSealed=true;function invoke_viiiii(index,a1,a2,a3,a4,a5){try{Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_vid(index,a1,a2){try{Module["dynCall_vid"](index,a1,a2)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_fiff(index,a1,a2,a3){try{return Module["dynCall_fiff"](index,a1,a2,a3)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_vi(index,a1){try{Module["dynCall_vi"](index,a1)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_vii(index,a1,a2){try{Module["dynCall_vii"](index,a1,a2)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_ii(index,a1){try{return Module["dynCall_ii"](index,a1)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_viddi(index,a1,a2,a3,a4){try{Module["dynCall_viddi"](index,a1,a2,a3,a4)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_vidd(index,a1,a2,a3){try{Module["dynCall_vidd"](index,a1,a2,a3)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_iiii(index,a1,a2,a3){try{return Module["dynCall_iiii"](index,a1,a2,a3)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_diii(index,a1,a2,a3){try{return Module["dynCall_diii"](index,a1,a2,a3)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_di(index,a1){try{return Module["dynCall_di"](index,a1)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_iid(index,a1,a2){try{return Module["dynCall_iid"](index,a1,a2)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_iii(index,a1,a2){try{return Module["dynCall_iii"](index,a1,a2)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_viiddi(index,a1,a2,a3,a4,a5){try{Module["dynCall_viiddi"](index,a1,a2,a3,a4,a5)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6){try{Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_dii(index,a1,a2){try{return Module["dynCall_dii"](index,a1,a2)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_i(index){try{return Module["dynCall_i"](index)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_iiiiii(index,a1,a2,a3,a4,a5){try{return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_viiid(index,a1,a2,a3,a4){try{Module["dynCall_viiid"](index,a1,a2,a3,a4)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_viififi(index,a1,a2,a3,a4,a5,a6){try{Module["dynCall_viififi"](index,a1,a2,a3,a4,a5,a6)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_viii(index,a1,a2,a3){try{Module["dynCall_viii"](index,a1,a2,a3)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_v(index){try{Module["dynCall_v"](index)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_viid(index,a1,a2,a3){try{Module["dynCall_viid"](index,a1,a2,a3)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_idd(index,a1,a2){try{return Module["dynCall_idd"](index,a1,a2)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_viiii(index,a1,a2,a3,a4){try{Module["dynCall_viiii"](index,a1,a2,a3,a4)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}Module.asmGlobalArg={"Math":Math,"Int8Array":Int8Array,"Int16Array":Int16Array,"Int32Array":Int32Array,"Uint8Array":Uint8Array,"Uint16Array":Uint16Array,"Uint32Array":Uint32Array,"Float32Array":Float32Array,"Float64Array":Float64Array,"NaN":NaN,"Infinity":Infinity};Module.asmLibraryArg={"abort":abort,"assert":assert,"enlargeMemory":enlargeMemory,"getTotalMemory":getTotalMemory,"abortOnCannotGrowMemory":abortOnCannotGrowMemory,"invoke_viiiii":invoke_viiiii,"invoke_vid":invoke_vid,"invoke_fiff":invoke_fiff,"invoke_vi":invoke_vi,"invoke_vii":invoke_vii,"invoke_ii":invoke_ii,"invoke_viddi":invoke_viddi,"invoke_vidd":invoke_vidd,"invoke_iiii":invoke_iiii,"invoke_diii":invoke_diii,"invoke_di":invoke_di,"invoke_iid":invoke_iid,"invoke_iii":invoke_iii,"invoke_viiddi":invoke_viiddi,"invoke_viiiiii":invoke_viiiiii,"invoke_dii":invoke_dii,"invoke_i":invoke_i,"invoke_iiiiii":invoke_iiiiii,"invoke_viiid":invoke_viiid,"invoke_viififi":invoke_viififi,"invoke_viii":invoke_viii,"invoke_v":invoke_v,"invoke_viid":invoke_viid,"invoke_idd":invoke_idd,"invoke_viiii":invoke_viiii,"_emscripten_asm_const_iiiii":_emscripten_asm_const_iiiii,"_emscripten_asm_const_iiidddddd":_emscripten_asm_const_iiidddddd,"_YGDisplayToString":_YGDisplayToString,"__nbind_finish":__nbind_finish,"__nbind_reference_external":__nbind_reference_external,"_emscripten_asm_const_iiiiiiii":_emscripten_asm_const_iiiiiiii,"_removeAccessorPrefix":_removeAccessorPrefix,"_typeModule":_typeModule,"__nbind_register_pool":__nbind_register_pool,"___syscall6":___syscall6,"__decorate":__decorate,"_llvm_stackrestore":_llvm_stackrestore,"___assert_fail":___assert_fail,"___cxa_atexit":___cxa_atexit,"_YGAlignToString":_YGAlignToString,"__extends":__extends,"_YGOverflowToString":_YGOverflowToString,"__nbind_get_value_object":__nbind_get_value_object,"_emscripten_set_main_loop_timing":_emscripten_set_main_loop_timing,"__nbind_register_primitive":__nbind_register_primitive,"__nbind_register_type":__nbind_register_type,"_YGWrapToString":_YGWrapToString,"_emscripten_memcpy_big":_emscripten_memcpy_big,"_YGJustifyToString":_YGJustifyToString,"___setErrNo":___setErrNo,"__nbind_register_class":__nbind_register_class,"_emscripten_asm_const_iiiid":_emscripten_asm_const_iiiid,"_nbind_value":_nbind_value,"_llvm_stacksave":_llvm_stacksave,"_YGPositionTypeToString":_YGPositionTypeToString,"___syscall54":___syscall54,"_defineHidden":_defineHidden,"_emscripten_set_main_loop":_emscripten_set_main_loop,"_emscripten_get_now":_emscripten_get_now,"__nbind_register_callback_signature":__nbind_register_callback_signature,"_emscripten_asm_const_iiiiii":_emscripten_asm_const_iiiiii,"__nbind_register_function":__nbind_register_function,"__nbind_free_external":__nbind_free_external,"_emscripten_asm_const_iiii":_emscripten_asm_const_iiii,"_emscripten_asm_const_iiididi":_emscripten_asm_const_iiididi,"_YGEdgeToString":_YGEdgeToString,"_abort":_abort,"_atexit":_atexit,"___syscall140":___syscall140,"___syscall146":___syscall146,"_YGFlexDirectionToString":_YGFlexDirectionToString,"DYNAMICTOP_PTR":DYNAMICTOP_PTR,"tempDoublePtr":tempDoublePtr,"ABORT":ABORT,"STACKTOP":STACKTOP,"STACK_MAX":STACK_MAX,"cttz_i8":cttz_i8,"___dso_handle":___dso_handle};// EMSCRIPTEN_START_ASM
var asm=(function(global,env,buffer) {
"use asm";var a=new global.Int8Array(buffer);var b=new global.Int16Array(buffer);var c=new global.Int32Array(buffer);var d=new global.Uint8Array(buffer);var e=new global.Uint16Array(buffer);var f=new global.Uint32Array(buffer);var g=new global.Float32Array(buffer);var h=new global.Float64Array(buffer);var i=env.DYNAMICTOP_PTR|0;var j=env.tempDoublePtr|0;var k=env.ABORT|0;var l=env.STACKTOP|0;var m=env.STACK_MAX|0;var n=env.cttz_i8|0;var o=env.___dso_handle|0;var p=0;var q=0;var r=0;var s=0;var t=global.NaN,u=global.Infinity;var v=0,w=0,x=0,y=0,z=0.0;var A=0;var B=global.Math.floor;var C=global.Math.abs;var D=global.Math.sqrt;var E=global.Math.pow;var F=global.Math.cos;var G=global.Math.sin;var H=global.Math.tan;var I=global.Math.acos;var J=global.Math.asin;var K=global.Math.atan;var L=global.Math.atan2;var M=global.Math.exp;var N=global.Math.log;var O=global.Math.ceil;var P=global.Math.imul;var Q=global.Math.min;var R=global.Math.max;var S=global.Math.clz32;var T=global.Math.fround;var U=env.abort;var V=env.assert;var W=env.enlargeMemory;var X=env.getTotalMemory;var Y=env.abortOnCannotGrowMemory;var Z=env.invoke_viiiii;var _=env.invoke_vid;var $=env.invoke_fiff;var aa=env.invoke_vi;var ba=env.invoke_vii;var ca=env.invoke_ii;var da=env.invoke_viddi;var ea=env.invoke_vidd;var fa=env.invoke_iiii;var ga=env.invoke_diii;var ha=env.invoke_di;var ia=env.invoke_iid;var ja=env.invoke_iii;var ka=env.invoke_viiddi;var la=env.invoke_viiiiii;var ma=env.invoke_dii;var na=env.invoke_i;var oa=env.invoke_iiiiii;var pa=env.invoke_viiid;var qa=env.invoke_viififi;var ra=env.invoke_viii;var sa=env.invoke_v;var ta=env.invoke_viid;var ua=env.invoke_idd;var va=env.invoke_viiii;var wa=env._emscripten_asm_const_iiiii;var xa=env._emscripten_asm_const_iiidddddd;var ya=env._YGDisplayToString;var za=env.__nbind_finish;var Aa=env.__nbind_reference_external;var Ba=env._emscripten_asm_const_iiiiiiii;var Ca=env._removeAccessorPrefix;var Da=env._typeModule;var Ea=env.__nbind_register_pool;var Fa=env.___syscall6;var Ga=env.__decorate;var Ha=env._llvm_stackrestore;var Ia=env.___assert_fail;var Ja=env.___cxa_atexit;var Ka=env._YGAlignToString;var La=env.__extends;var Ma=env._YGOverflowToString;var Na=env.__nbind_get_value_object;var Oa=env._emscripten_set_main_loop_timing;var Pa=env.__nbind_register_primitive;var Qa=env.__nbind_register_type;var Ra=env._YGWrapToString;var Sa=env._emscripten_memcpy_big;var Ta=env._YGJustifyToString;var Ua=env.___setErrNo;var Va=env.__nbind_register_class;var Wa=env._emscripten_asm_const_iiiid;var Xa=env._nbind_value;var Ya=env._llvm_stacksave;var Za=env._YGPositionTypeToString;var _a=env.___syscall54;var $a=env._defineHidden;var ab=env._emscripten_set_main_loop;var bb=env._emscripten_get_now;var cb=env.__nbind_register_callback_signature;var db=env._emscripten_asm_const_iiiiii;var eb=env.__nbind_register_function;var fb=env.__nbind_free_external;var gb=env._emscripten_asm_const_iiii;var hb=env._emscripten_asm_const_iiididi;var ib=env._YGEdgeToString;var jb=env._abort;var kb=env._atexit;var lb=env.___syscall140;var mb=env.___syscall146;var nb=env._YGFlexDirectionToString;var ob=T(0);const pb=T(0);
// EMSCRIPTEN_START_FUNCS
function Pb(a){a=a|0;var b=0;b=l;l=l+a|0;l=l+15&-16;return b|0}function Qb(){return l|0}function Rb(a){a=a|0;l=a}function Sb(a,b){a=a|0;b=b|0;l=a;m=b}function Tb(a,b){a=a|0;b=b|0;if(!p){p=a;q=b}}function Ub(a){a=a|0;A=a}function Vb(){return A|0}function Wb(a){a=a|0;var b=0;b=vb[c[2]&31](12)|0;rc((b|0)!=0,2628);c[b>>2]=a;c[b+4>>2]=0;a=vb[c[2]&31](a<<2)|0;c[b+8>>2]=a;rc((a|0)!=0,2663);return b|0}function Xb(a){a=a|0;if(!a)return;tb[c[4]&127](c[a+8>>2]|0);tb[c[4]&127](a);return}function Yb(a){a=a|0;if(!a)a=0;else a=c[a+4>>2]|0;return a|0}function Zb(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=c[a>>2]|0;if(!e){e=Wb(4)|0;c[a>>2]=e}g=e+4|0;a=c[g>>2]|0;if((a|0)==(c[e>>2]|0)){c[e>>2]=a<<1;f=e+8|0;a=Cb[c[3]&15](c[f>>2]|0,a<<3)|0;c[f>>2]=a;rc((a|0)!=0,2699);a=c[g>>2]|0}else f=e+8|0;e=c[f>>2]|0;if(a>>>0<=d>>>0){f=e;e=a;e=e+1|0;c[g>>2]=e;d=f+(d<<2)|0;c[d>>2]=b;return}do{h=a;a=a+-1|0;c[e+(h<<2)>>2]=c[e+(a<<2)>>2];e=c[f>>2]|0}while(a>>>0>d>>>0);h=e;f=c[g>>2]|0;f=f+1|0;c[g>>2]=f;h=h+(d<<2)|0;c[h>>2]=b;return}function _b(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=a+8|0;e=(c[d>>2]|0)+(b<<2)|0;f=c[e>>2]|0;c[e>>2]=0;e=a+4|0;a=(c[e>>2]|0)+-1|0;if(a>>>0<=b>>>0){d=a;c[e>>2]=d;return f|0}do{g=c[d>>2]|0;a=b;b=b+1|0;c[g+(a<<2)>>2]=c[g+(b<<2)>>2];c[(c[d>>2]|0)+(b<<2)>>2]=0;a=(c[e>>2]|0)+-1|0}while(b>>>0<a>>>0);c[e>>2]=a;return f|0}function $b(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;e=c[a+4>>2]|0;if(!e){g=0;return g|0}f=c[a+8>>2]|0;d=0;while(1){if((c[f+(d<<2)>>2]|0)==(b|0))break;d=d+1|0;if(d>>>0>=e>>>0){d=0;g=6;break}}if((g|0)==6)return d|0;g=_b(a,d)|0;return g|0}function ac(a,b){a=a|0;b=b|0;if(!(Yb(a)|0)){b=0;return b|0}b=c[(c[a+8>>2]|0)+(b<<2)>>2]|0;return b|0}function bc(b){b=b|0;var d=0,e=0;d=vb[c[2]&31](988)|0;cc(b,(d|0)!=0,2737);c[2266]=(c[2266]|0)+1;wF(d|0,20,988)|0;if(!(a[b+2>>0]|0)){e=d+964|0;c[e>>2]=b;return d|0}c[d+4>>2]=2;c[d+12>>2]=4;e=d+964|0;c[e>>2]=b;return d|0}function cc(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;f=l;l=l+16|0;e=f;if(b){l=f;return}c[e>>2]=d;dc(a,5,2772,e);l=f;return}function dc(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;f=l;l=l+16|0;g=f;c[g>>2]=e;ec(a,0,b,d,g);l=f;return}function ec(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;a=a|0?a:1016;Hb[c[a+8>>2]&1](a,b,d,e,f)|0;if((d|0)==5)jb();else return}function fc(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;switch(d|0){case 5:case 0:{f=vE(c[501]|0,e,f)|0;return f|0}default:{f=_E(e,f)|0;return f|0}}return 0}function gc(){return bc(1016)|0}function hc(a){a=a|0;var b=0,d=0;b=a+940|0;d=c[b>>2]|0;if(d|0){$b(c[d+944>>2]|0,a)|0;c[b>>2]=0}d=ic(a)|0;if(d|0){b=0;do{c[(jc(a,b)|0)+940>>2]=0;b=b+1|0}while((b|0)!=(d|0))}Xb(c[a+944>>2]|0);tb[c[4]&127](a);c[2266]=(c[2266]|0)+-1;return}function ic(a){a=a|0;return Yb(c[a+944>>2]|0)|0}function jc(a,b){a=a|0;b=b|0;return ac(c[a+944>>2]|0,b)|0}function kc(a,b){a=a|0;b=b|0;if(!($b(c[a+944>>2]|0,b)|0))return;wF(b+400|0,420,536)|0;c[b+940>>2]=0;lc(a);return}function lc(b){b=b|0;var d=0;while(1){d=b+972|0;if(a[d>>0]|0){b=4;break}a[d>>0]=1;g[b+504>>2]=T(t);b=c[b+940>>2]|0;if(!b){b=4;break}}if((b|0)==4)return}function mc(b){b=b|0;var d=0,e=0;nc(b,(ic(b)|0)==0,2776);nc(b,(c[b+940>>2]|0)==0,2830);Xb(c[b+944>>2]|0);d=b+964|0;e=c[d>>2]|0;wF(b|0,20,988)|0;if(!(a[e+2>>0]|0)){c[d>>2]=e;return}c[b+4>>2]=2;c[b+12>>2]=4;c[d>>2]=e;return}function nc(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;f=l;l=l+16|0;e=f;if(!b){c[e>>2]=d;oc(a,5,2772,e)}l=f;return}function oc(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;g=l;l=l+16|0;f=g;c[f>>2]=e;if(!a)e=0;else e=c[a+964>>2]|0;ec(e,a,b,d,f);l=g;return}function pc(){return c[2266]|0}function qc(){var a=0;a=vb[c[2]&31](16)|0;rc((a|0)!=0,2877);c[2267]=(c[2267]|0)+1;c[a>>2]=c[254];c[a+4>>2]=c[255];c[a+8>>2]=c[256];c[a+12>>2]=c[257];return a|0}function rc(a,b){a=a|0;b=b|0;var d=0,e=0;e=l;l=l+16|0;d=e;if(!a){c[d>>2]=b;oc(0,5,2772,d)}l=e;return}function sc(a){a=a|0;tb[c[4]&127](a);c[2267]=(c[2267]|0)+-1;return}function tc(a,b){a=a|0;b=b|0;var d=0;if(!b){d=0;b=0}else{nc(a,(ic(a)|0)==0,2914);d=1}c[a+952>>2]=b;c[a+976>>2]=d;return}function uc(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=b+940|0;nc(a,(c[e>>2]|0)==0,2994);nc(a,(c[a+952>>2]|0)==0,3048);Zb(a+944|0,b,d);c[e>>2]=a;lc(a);return}function vc(a){a=a|0;return c[a+940>>2]|0}function wc(a){a=a|0;nc(a,(c[a+952>>2]|0)!=0,3117);lc(a);return}function xc(b){b=b|0;return (a[b+972>>0]|0)!=0|0}function yc(a,b){a=a|0;b=b|0;if(!(PE(a,b,400)|0))return;wF(a|0,b|0,400)|0;lc(a);return}function zc(a){a=a|0;var b=pb;b=T(g[a+44>>2]);a=Ac(b)|0;return T(a?T(0.0):b)}function Ac(a){a=T(a);return ((Bc(a)|0)&2147483647)>>>0>2139095040|0}function Bc(a){a=T(a);return (g[j>>2]=a,c[j>>2]|0)|0}function Cc(b){b=b|0;var d=pb;d=T(g[b+48>>2]);if(!(Ac(d)|0))return T(d);d=a[(c[b+964>>2]|0)+2>>0]|0?T(1.0):T(0.0);return T(d)}function Dc(a,b){a=a|0;b=b|0;c[a+968>>2]=b;return}function Ec(a){a=a|0;return c[a+968>>2]|0}function Fc(a,b){a=a|0;b=b|0;var d=0;d=a+4|0;if((c[d>>2]|0)==(b|0))return;c[d>>2]=b;lc(a);return}function Gc(a){a=a|0;return c[a+4>>2]|0}function Hc(a,b){a=a|0;b=b|0;var d=0;d=a+8|0;if((c[d>>2]|0)==(b|0))return;c[d>>2]=b;lc(a);return}function Ic(a){a=a|0;return c[a+8>>2]|0}function Jc(a,b){a=a|0;b=b|0;var d=0;d=a+12|0;if((c[d>>2]|0)==(b|0))return;c[d>>2]=b;lc(a);return}function Kc(a){a=a|0;return c[a+12>>2]|0}function Lc(a,b){a=a|0;b=b|0;var d=0;d=a+16|0;if((c[d>>2]|0)==(b|0))return;c[d>>2]=b;lc(a);return}function Mc(a){a=a|0;return c[a+16>>2]|0}function Nc(a,b){a=a|0;b=b|0;var d=0;d=a+20|0;if((c[d>>2]|0)==(b|0))return;c[d>>2]=b;lc(a);return}function Oc(a){a=a|0;return c[a+20>>2]|0}function Pc(a,b){a=a|0;b=b|0;var d=0;d=a+24|0;if((c[d>>2]|0)==(b|0))return;c[d>>2]=b;lc(a);return}function Qc(a){a=a|0;return c[a+24>>2]|0}function Rc(a,b){a=a|0;b=b|0;var d=0;d=a+28|0;if((c[d>>2]|0)==(b|0))return;c[d>>2]=b;lc(a);return}function Sc(a){a=a|0;return c[a+28>>2]|0}function Tc(a,b){a=a|0;b=b|0;var d=0;d=a+32|0;if((c[d>>2]|0)==(b|0))return;c[d>>2]=b;lc(a);return}function Uc(a){a=a|0;return c[a+32>>2]|0}function Vc(a,b){a=a|0;b=b|0;var d=0;d=a+36|0;if((c[d>>2]|0)==(b|0))return;c[d>>2]=b;lc(a);return}function Wc(a){a=a|0;return c[a+36>>2]|0}function Xc(a,b){a=a|0;b=T(b);var c=0;c=a+40|0;if(!(T(g[c>>2])!=b))return;g[c>>2]=b;lc(a);return}function Yc(a,b){a=a|0;b=T(b);var c=0;c=a+44|0;if(!(T(g[c>>2])!=b))return;g[c>>2]=b;lc(a);return}function Zc(a,b){a=a|0;b=T(b);var c=0;c=a+48|0;if(!(T(g[c>>2])!=b))return;g[c>>2]=b;lc(a);return}function _c(a,b){a=a|0;b=T(b);var d=0,e=0;e=a+52|0;d=a+56|0;if(!(T(g[e>>2])!=b)?(c[d>>2]|0)==1:0)return;g[e>>2]=b;e=Ac(b)|0;c[d>>2]=e?3:1;lc(a);return}function $c(a,b){a=a|0;b=T(b);var d=0,e=0;e=a+52|0;d=a+56|0;if(!(T(g[e>>2])!=b)?(c[d>>2]|0)==2:0)return;g[e>>2]=b;e=Ac(b)|0;c[d>>2]=e?3:2;lc(a);return}function ad(a,b){a=a|0;b=b|0;var d=0,e=0;e=b+52|0;d=c[e+4>>2]|0;b=a;c[b>>2]=c[e>>2];c[b+4>>2]=d;return}function bd(a,b,d){a=a|0;b=b|0;d=T(d);var e=0;e=a+132+(b<<3)|0;b=a+132+(b<<3)+4|0;if(!(T(g[e>>2])!=d)?(c[b>>2]|0)==1:0)return;g[e>>2]=d;c[b>>2]=((Ac(d)|0)^1)&1;lc(a);return}function cd(a,b,d){a=a|0;b=b|0;d=T(d);var e=0;e=a+132+(b<<3)|0;b=a+132+(b<<3)+4|0;if(!(T(g[e>>2])!=d)?(c[b>>2]|0)==2:0)return;g[e>>2]=d;e=Ac(d)|0;c[b>>2]=e?0:2;lc(a);return}function dd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=b+132+(d<<3)|0;b=c[e+4>>2]|0;d=a;c[d>>2]=c[e>>2];c[d+4>>2]=b;return}function ed(a,b,d){a=a|0;b=b|0;d=T(d);var e=0;e=a+60+(b<<3)|0;b=a+60+(b<<3)+4|0;if(!(T(g[e>>2])!=d)?(c[b>>2]|0)==1:0)return;g[e>>2]=d;c[b>>2]=((Ac(d)|0)^1)&1;lc(a);return}function fd(a,b,d){a=a|0;b=b|0;d=T(d);var e=0;e=a+60+(b<<3)|0;b=a+60+(b<<3)+4|0;if(!(T(g[e>>2])!=d)?(c[b>>2]|0)==2:0)return;g[e>>2]=d;e=Ac(d)|0;c[b>>2]=e?0:2;lc(a);return}function gd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=b+60+(d<<3)|0;b=c[e+4>>2]|0;d=a;c[d>>2]=c[e>>2];c[d+4>>2]=b;return}function hd(a,b){a=a|0;b=b|0;var d=0;d=a+60+(b<<3)+4|0;if((c[d>>2]|0)==3)return;g[a+60+(b<<3)>>2]=T(t);c[d>>2]=3;lc(a);return}function id(a,b,d){a=a|0;b=b|0;d=T(d);var e=0;e=a+204+(b<<3)|0;b=a+204+(b<<3)+4|0;if(!(T(g[e>>2])!=d)?(c[b>>2]|0)==1:0)return;g[e>>2]=d;c[b>>2]=((Ac(d)|0)^1)&1;lc(a);return}function jd(a,b,d){a=a|0;b=b|0;d=T(d);var e=0;e=a+204+(b<<3)|0;b=a+204+(b<<3)+4|0;if(!(T(g[e>>2])!=d)?(c[b>>2]|0)==2:0)return;g[e>>2]=d;e=Ac(d)|0;c[b>>2]=e?0:2;lc(a);return}function kd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=b+204+(d<<3)|0;b=c[e+4>>2]|0;d=a;c[d>>2]=c[e>>2];c[d+4>>2]=b;return}function ld(a,b,d){a=a|0;b=b|0;d=T(d);var e=0;e=a+276+(b<<3)|0;b=a+276+(b<<3)+4|0;if(!(T(g[e>>2])!=d)?(c[b>>2]|0)==1:0)return;g[e>>2]=d;c[b>>2]=((Ac(d)|0)^1)&1;lc(a);return}function md(a,b){a=a|0;b=b|0;return T(g[a+276+(b<<3)>>2])}function nd(a,b){a=a|0;b=T(b);var d=0,e=0;e=a+348|0;d=a+352|0;if(!(T(g[e>>2])!=b)?(c[d>>2]|0)==1:0)return;g[e>>2]=b;e=Ac(b)|0;c[d>>2]=e?3:1;lc(a);return}function od(a,b){a=a|0;b=T(b);var d=0,e=0;e=a+348|0;d=a+352|0;if(!(T(g[e>>2])!=b)?(c[d>>2]|0)==2:0)return;g[e>>2]=b;e=Ac(b)|0;c[d>>2]=e?3:2;lc(a);return}function pd(a){a=a|0;var b=0;b=a+352|0;if((c[b>>2]|0)==3)return;g[a+348>>2]=T(t);c[b>>2]=3;lc(a);return}function qd(a,b){a=a|0;b=b|0;var d=0,e=0;e=b+348|0;d=c[e+4>>2]|0;b=a;c[b>>2]=c[e>>2];c[b+4>>2]=d;return}function rd(a,b){a=a|0;b=T(b);var d=0,e=0;e=a+356|0;d=a+360|0;if(!(T(g[e>>2])!=b)?(c[d>>2]|0)==1:0)return;g[e>>2]=b;e=Ac(b)|0;c[d>>2]=e?3:1;lc(a);return}function sd(a,b){a=a|0;b=T(b);var d=0,e=0;e=a+356|0;d=a+360|0;if(!(T(g[e>>2])!=b)?(c[d>>2]|0)==2:0)return;g[e>>2]=b;e=Ac(b)|0;c[d>>2]=e?3:2;lc(a);return}function td(a){a=a|0;var b=0;b=a+360|0;if((c[b>>2]|0)==3)return;g[a+356>>2]=T(t);c[b>>2]=3;lc(a);return}function ud(a,b){a=a|0;b=b|0;var d=0,e=0;e=b+356|0;d=c[e+4>>2]|0;b=a;c[b>>2]=c[e>>2];c[b+4>>2]=d;return}function vd(a,b){a=a|0;b=T(b);var d=0,e=0;e=a+364|0;d=a+368|0;if(!(T(g[e>>2])!=b)?(c[d>>2]|0)==1:0)return;g[e>>2]=b;e=Ac(b)|0;c[d>>2]=e?3:1;lc(a);return}function wd(a,b){a=a|0;b=T(b);var d=0,e=0;e=a+364|0;d=a+368|0;if(!(T(g[e>>2])!=b)?(c[d>>2]|0)==2:0)return;g[e>>2]=b;e=Ac(b)|0;c[d>>2]=e?3:2;lc(a);return}function xd(a,b){a=a|0;b=b|0;var d=0,e=0;e=b+364|0;d=c[e+4>>2]|0;b=a;c[b>>2]=c[e>>2];c[b+4>>2]=d;return}function yd(a,b){a=a|0;b=T(b);var d=0,e=0;e=a+372|0;d=a+376|0;if(!(T(g[e>>2])!=b)?(c[d>>2]|0)==1:0)return;g[e>>2]=b;e=Ac(b)|0;c[d>>2]=e?3:1;lc(a);return}function zd(a,b){a=a|0;b=T(b);var d=0,e=0;e=a+372|0;d=a+376|0;if(!(T(g[e>>2])!=b)?(c[d>>2]|0)==2:0)return;g[e>>2]=b;e=Ac(b)|0;c[d>>2]=e?3:2;lc(a);return}function Ad(a,b){a=a|0;b=b|0;var d=0,e=0;e=b+372|0;d=c[e+4>>2]|0;b=a;c[b>>2]=c[e>>2];c[b+4>>2]=d;return}function Bd(a,b){a=a|0;b=T(b);var d=0,e=0;e=a+380|0;d=a+384|0;if(!(T(g[e>>2])!=b)?(c[d>>2]|0)==1:0)return;g[e>>2]=b;e=Ac(b)|0;c[d>>2]=e?3:1;lc(a);return}function Cd(a,b){a=a|0;b=T(b);var d=0,e=0;e=a+380|0;d=a+384|0;if(!(T(g[e>>2])!=b)?(c[d>>2]|0)==2:0)return;g[e>>2]=b;e=Ac(b)|0;c[d>>2]=e?3:2;lc(a);return}function Dd(a,b){a=a|0;b=b|0;var d=0,e=0;e=b+380|0;d=c[e+4>>2]|0;b=a;c[b>>2]=c[e>>2];c[b+4>>2]=d;return}function Ed(a,b){a=a|0;b=T(b);var d=0,e=0;e=a+388|0;d=a+392|0;if(!(T(g[e>>2])!=b)?(c[d>>2]|0)==1:0)return;g[e>>2]=b;e=Ac(b)|0;c[d>>2]=e?3:1;lc(a);return}function Fd(a,b){a=a|0;b=T(b);var d=0,e=0;e=a+388|0;d=a+392|0;if(!(T(g[e>>2])!=b)?(c[d>>2]|0)==2:0)return;g[e>>2]=b;e=Ac(b)|0;c[d>>2]=e?3:2;lc(a);return}function Gd(a,b){a=a|0;b=b|0;var d=0,e=0;e=b+388|0;d=c[e+4>>2]|0;b=a;c[b>>2]=c[e>>2];c[b+4>>2]=d;return}function Hd(a,b){a=a|0;b=T(b);var c=0;c=a+396|0;if(!(T(g[c>>2])!=b))return;g[c>>2]=b;lc(a);return}function Id(a){a=a|0;return T(g[a+396>>2])}function Jd(a){a=a|0;return T(g[a+400>>2])}function Kd(a){a=a|0;return T(g[a+404>>2])}function Ld(a){a=a|0;return T(g[a+408>>2])}function Md(a){a=a|0;return T(g[a+412>>2])}function Nd(a){a=a|0;return T(g[a+416>>2])}function Od(a){a=a|0;return T(g[a+420>>2])}function Pd(a,b){a=a|0;b=b|0;nc(a,b>>>0<5,3203);switch(b|0){case 0:{b=(c[a+496>>2]|0)==2?5:4;break}case 2:{b=(c[a+496>>2]|0)==2?4:5;break}default:{}}return T(g[a+424+(b<<2)>>2])}function Qd(a,b){a=a|0;b=b|0;nc(a,b>>>0<5,3203);switch(b|0){case 0:{b=(c[a+496>>2]|0)==2?5:4;break}case 2:{b=(c[a+496>>2]|0)==2?4:5;break}default:{}}return T(g[a+448+(b<<2)>>2])}function Rd(a,b){a=a|0;b=b|0;nc(a,b>>>0<5,3203);switch(b|0){case 0:{b=(c[a+496>>2]|0)==2?5:4;break}case 2:{b=(c[a+496>>2]|0)==2?4:5;break}default:{}}return T(g[a+472+(b<<2)>>2])}function Sd(a,b){a=a|0;b=b|0;Td(a,b,0);return}function Td(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0;B=l;l=l+192|0;A=B+176|0;z=B+168|0;y=B+160|0;x=B+152|0;w=B+144|0;v=B+136|0;u=B+128|0;t=B+120|0;s=B+112|0;r=B+104|0;q=B+96|0;p=B+88|0;o=B+80|0;n=B+72|0;m=B+64|0;f=B+40|0;k=B+32|0;j=B+24|0;i=B+16|0;Ud(a,d);oc(a,3,3257,B);e=c[a+960>>2]|0;if(e|0)tb[e&127](a);if(b&1|0){oc(a,3,3263,B+8|0);h[i>>3]=+T(g[a+416>>2]);oc(a,3,3272,i);h[j>>3]=+T(g[a+420>>2]);oc(a,3,3284,j);h[k>>3]=+T(g[a+404>>2]);oc(a,3,3297,k);h[f>>3]=+T(g[a+400>>2]);oc(a,3,3307,f);oc(a,3,3317,B+48|0)}if(b&2|0){oc(a,3,3320,B+56|0);e=c[a+4>>2]|0;if(e|0){c[m>>2]=nb(e|0)|0;oc(a,3,3328,m)}e=c[a+8>>2]|0;if(e|0){c[n>>2]=Ta(e|0)|0;oc(a,3,3349,n)}e=c[a+16>>2]|0;if((e|0)!=4){c[o>>2]=Ka(e|0)|0;oc(a,3,3371,o)}e=c[a+12>>2]|0;if((e|0)!=1){c[p>>2]=Ka(e|0)|0;oc(a,3,3389,p)}e=c[a+20>>2]|0;if(e|0){c[q>>2]=Ka(e|0)|0;oc(a,3,3409,q)}Vd(a,3426,T(g[a+44>>2]));Vd(a,3436,T(g[a+48>>2]));Wd(a,3448,a+52|0);Vd(a,3459,T(g[a+40>>2]));e=c[a+28>>2]|0;if(e|0){c[r>>2]=Ra(e|0)|0;oc(a,3,3464,r)}e=c[a+32>>2]|0;if(e|0){c[s>>2]=Ma(e|0)|0;oc(a,3,3479,s)}e=c[a+36>>2]|0;if(e|0){c[t>>2]=ya(e|0)|0;oc(a,3,3494,t)}Xd(a,3508,a+60|0);Xd(a,3515,a+204|0);Xd(a,3523,a+276|0);Wd(a,3530,a+348|0);Wd(a,3536,a+356|0);Wd(a,3543,a+380|0);Wd(a,3553,a+388|0);Wd(a,3564,a+364|0);Wd(a,3574,a+372|0);e=c[a+24>>2]|0;if(e|0){c[u>>2]=Za(e|0)|0;oc(a,3,3585,u)}u=a+132|0;Yd(a,3600,u,0);Yd(a,3605,u,2);Yd(a,3611,u,1);Yd(a,3615,u,3);oc(a,3,3317,v);if(c[a+952>>2]|0)oc(a,3,3622,w)}oc(a,3,3648,x);f=Yb(c[a+944>>2]|0)|0;if(!((b&4|0)!=0&(f|0)!=0)){oc(a,3,3652,A);l=B;return}i=d+1|0;e=0;do{oc(a,3,3650,z);Td(jc(a,e)|0,b,i);e=e+1|0}while((e|0)!=(f|0));Ud(a,d);oc(a,3,3650,y);oc(a,3,3652,A);l=B;return}function Ud(a,b){a=a|0;b=b|0;var c=0,d=0,e=0;e=l;l=l+16|0;d=e;if(!b){l=e;return}else c=0;do{oc(a,3,3701,d);c=c+1|0}while((c|0)!=(b|0));l=e;return}function Vd(a,b,d){a=a|0;b=b|0;d=T(d);var e=0,f=0;f=l;l=l+16|0;e=f;if(Ac(d)|0){l=f;return}c[e>>2]=b;h[e+8>>3]=+d;oc(a,3,3692,e);l=f;return}function Wd(a,b,d){a=a|0;b=b|0;d=d|0;if((c[d+4>>2]|0)==3)return;_d(a,b,d);return}function Xd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0;p=l;l=l+112|0;n=p+64|0;m=p+56|0;k=p+48|0;i=p+40|0;h=p+32|0;g=p+24|0;o=p+16|0;j=p+8|0;f=p;e=p+72|0;if($d(d)|0){ae(a,b,d);l=p;return}else{q=ib(0)|0;c[f>>2]=b;c[f+4>>2]=q;QE(e,30,3686,f)|0;ae(a,e,d);f=ib(1)|0;c[j>>2]=b;c[j+4>>2]=f;QE(e,30,3686,j)|0;ae(a,e,d+8|0);j=ib(2)|0;c[o>>2]=b;c[o+4>>2]=j;QE(e,30,3686,o)|0;ae(a,e,d+16|0);o=ib(3)|0;c[g>>2]=b;c[g+4>>2]=o;QE(e,30,3686,g)|0;ae(a,e,d+24|0);o=ib(4)|0;c[h>>2]=b;c[h+4>>2]=o;QE(e,30,3686,h)|0;ae(a,e,d+32|0);o=ib(5)|0;c[i>>2]=b;c[i+4>>2]=o;QE(e,30,3686,i)|0;ae(a,e,d+40|0);o=ib(6)|0;c[k>>2]=b;c[k+4>>2]=o;QE(e,30,3686,k)|0;ae(a,e,d+48|0);o=ib(7)|0;c[m>>2]=b;c[m+4>>2]=o;QE(e,30,3686,m)|0;ae(a,e,d+56|0);o=ib(8)|0;c[n>>2]=b;c[n+4>>2]=o;QE(e,30,3686,n)|0;ae(a,e,d+64|0);l=p;return}}function Yd(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;_d(a,b,Zd(c,d,1008)|0);return}function Zd(a,b,d){a=a|0;b=b|0;d=d|0;if(c[a+(b<<3)+4>>2]|0){d=a+(b<<3)|0;return d|0}if((b|2|0)==3?c[a+60>>2]|0:0){d=a+56|0;return d|0}switch(b|0){case 0:case 2:case 4:case 5:{if(c[a+52>>2]|0){d=a+48|0;return d|0}break}default:{}}if(!(c[a+68>>2]|0)){d=(b|1|0)==5?1008:d;return d|0}else{d=a+64|0;return d|0}return 0}function _d(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,i=0,j=0,k=0.0;j=l;l=l+32|0;i=j+8|0;f=j;e=c[d+4>>2]|0;switch(e|0){case 3:{c[f>>2]=b;oc(a,3,3659,f);l=j;return}case 0:{l=j;return}default:{k=+T(g[d>>2]);c[i>>2]=b;h[i+8>>3]=k;c[i+16>>2]=(e|0)==1?3670:3673;oc(a,3,3675,i);l=j;return}}}function $d(a){a=a|0;var b=0,d=0,e=0,f=0;e=l;l=l+16|0;d=e+8|0;b=e;f=a+8|0;c[b>>2]=c[a>>2];c[b+4>>2]=c[a+4>>2];c[d>>2]=c[f>>2];c[d+4>>2]=c[f+4>>2];if(!(ce(b,d)|0)){f=0;l=e;return f|0}f=a+16|0;c[b>>2]=c[a>>2];c[b+4>>2]=c[a+4>>2];c[d>>2]=c[f>>2];c[d+4>>2]=c[f+4>>2];if(!(ce(b,d)|0)){f=0;l=e;return f|0}f=a+24|0;c[b>>2]=c[a>>2];c[b+4>>2]=c[a+4>>2];c[d>>2]=c[f>>2];c[d+4>>2]=c[f+4>>2];f=ce(b,d)|0;l=e;return f|0}function ae(a,b,c){a=a|0;b=b|0;c=c|0;if(be(T(g[c>>2]),T(0.0))|0)return;_d(a,b,c);return}function be(a,b){a=T(a);b=T(b);var c=0;if(Ac(a)|0){c=Ac(b)|0;return c|0}else{c=T(C(T(a-b)))<T(.0000999999974);return c|0}return 0}function ce(a,b){a=a|0;b=b|0;var d=0,e=pb;d=c[a+4>>2]|0;if((d|0)!=(c[b+4>>2]|0)){d=0;return d|0}if(!d){d=1;return d|0}e=T(g[a>>2]);d=T(C(T(e-T(g[b>>2]))))<T(.0000999999974);return d|0}function de(a,b,c,d,e,f,h,i,j,k,l,m,n){a=a|0;b=T(b);c=c|0;d=T(d);e=e|0;f=T(f);h=h|0;i=T(i);j=T(j);k=T(k);l=T(l);m=T(m);n=n|0;var o=0,p=pb,q=pb,r=pb,s=pb,t=pb,u=pb;if(j<T(0.0)|k<T(0.0)){h=0;return h|0}if((n|0)!=0?(p=T(g[n+4>>2]),p!=T(0.0)):0){r=T(ee(b,p,0,0));s=T(ee(d,p,0,0));q=T(ee(f,p,0,0));p=T(ee(i,p,0,0))}else{q=f;r=b;p=i;s=d}if((e|0)==(a|0))o=be(q,r)|0;else o=0;if((h|0)==(c|0))n=be(p,s)|0;else n=0;if((!o?(t=T(b-l),!(fe(a,t,j)|0)):0)?!(ge(a,t,e,j)|0):0)o=he(a,t,e,f,j)|0;else o=1;if((!n?(u=T(d-m),!(fe(c,u,k)|0)):0)?!(ge(c,u,h,k)|0):0)n=he(c,u,h,i,k)|0;else n=1;h=o&n;return h|0}function ee(a,b,c,d){a=T(a);b=T(b);c=c|0;d=d|0;var e=pb;a=T(a*b);e=T(VE(a,T(1.0)));a=T(a-e);do if(!(be(e,T(0.0))|0))if(c){a=T(a+T(1.0));break}else{c=e>=T(.5);e=T(+a+(c?1.0:0.0));a=d?a:e;break}while(0);return T(a/b)}function fe(a,b,c){a=a|0;b=T(b);c=T(c);if((a|0)==1)a=be(b,c)|0;else a=0;return a|0}function ge(a,b,c,d){a=a|0;b=T(b);c=c|0;d=T(d);if((a|0)==2&(c|0)==0)if(!(b>=d))a=be(b,d)|0;else a=1;else a=0;return a|0}function he(a,b,c,d,e){a=a|0;b=T(b);c=c|0;d=T(d);e=T(e);if(!((a|0)==2&(c|0)==2&d>b)){c=0;return c|0}if(e<=b){c=1;return c|0}c=be(b,e)|0;return c|0}function ie(b,d,e,f,i,j,k,m,n,o,p){b=b|0;d=T(d);e=T(e);f=f|0;i=i|0;j=j|0;k=T(k);m=T(m);n=n|0;o=o|0;p=p|0;var q=0,r=0,s=0,t=0,u=pb,v=pb,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=pb,H=pb,I=pb,J=0.0,K=0.0;F=l;l=l+160|0;C=F+120|0;B=F+104|0;y=F+72|0;t=F+56|0;A=F+8|0;x=F;z=(c[2269]|0)+1|0;c[2269]=z;D=b+972|0;if((a[D>>0]|0)!=0?(c[b+508>>2]|0)!=(c[2268]|0):0)w=4;else if((c[b+512>>2]|0)==(f|0))E=0;else w=4;if((w|0)==4){c[b+516>>2]=0;c[b+920>>2]=-1;c[b+924>>2]=-1;g[b+928>>2]=T(-1.0);g[b+932>>2]=T(-1.0);E=1}a:do if(!(c[b+952>>2]|0)){if(n){q=b+912|0;if(!(be(T(g[q>>2]),d)|0)){w=21;break}if(!(be(T(g[b+916>>2]),e)|0)){w=21;break}if((c[b+920>>2]|0)!=(i|0)){w=21;break}q=(c[b+924>>2]|0)==(j|0)?q:0;w=22;break}s=c[b+516>>2]|0;if(!s)w=21;else{r=0;while(1){q=b+520+(r*24|0)|0;if(((be(T(g[q>>2]),d)|0?be(T(g[b+520+(r*24|0)+4>>2]),e)|0:0)?(c[b+520+(r*24|0)+8>>2]|0)==(i|0):0)?(c[b+520+(r*24|0)+12>>2]|0)==(j|0):0){w=22;break a}r=r+1|0;if(r>>>0>=s>>>0){w=21;break}}}}else{u=T(je(b,2,k));v=T(je(b,0,k));q=b+912|0;I=T(g[q>>2]);H=T(g[b+916>>2]);G=T(g[b+928>>2]);if(!(de(i,d,j,e,c[b+920>>2]|0,I,c[b+924>>2]|0,H,G,T(g[b+932>>2]),u,v,p)|0)){s=c[b+516>>2]|0;if(!s)w=21;else{r=0;while(1){q=b+520+(r*24|0)|0;G=T(g[q>>2]);H=T(g[b+520+(r*24|0)+4>>2]);I=T(g[b+520+(r*24|0)+16>>2]);if(de(i,d,j,e,c[b+520+(r*24|0)+8>>2]|0,G,c[b+520+(r*24|0)+12>>2]|0,H,I,T(g[b+520+(r*24|0)+20>>2]),u,v,p)|0){w=22;break a}r=r+1|0;if(r>>>0>=s>>>0){w=21;break}}}}else w=22}while(0);do if((w|0)==21)if(!(a[11621]|0)){q=0;w=31}else{q=0;w=28}else if((w|0)==22){r=(a[11621]|0)!=0;if(!((q|0)!=0&(E^1)))if(r){w=28;break}else{w=31;break}t=q+16|0;c[b+904>>2]=c[t>>2];s=q+20|0;c[b+908>>2]=c[s>>2];if(!((a[11622]|0)==0|r^1)){c[x>>2]=ke(z)|0;c[x+4>>2]=z;ZE(3704,x)|0;r=c[b+960>>2]|0;if(r|0)tb[r&127](b);i=le(i,n)|0;j=le(j,n)|0;K=+T(g[t>>2]);J=+T(g[s>>2]);c[A>>2]=i;c[A+4>>2]=j;h[A+8>>3]=+d;h[A+16>>3]=+e;h[A+24>>3]=K;h[A+32>>3]=J;c[A+40>>2]=o;ZE(3721,A)|0}}while(0);if((w|0)==28){r=ke(z)|0;c[t>>2]=r;c[t+4>>2]=z;c[t+8>>2]=E?3770:11623;ZE(3772,t)|0;r=c[b+960>>2]|0;if(r|0)tb[r&127](b);A=le(i,n)|0;w=le(j,n)|0;c[y>>2]=A;c[y+4>>2]=w;h[y+8>>3]=+d;h[y+16>>3]=+e;c[y+24>>2]=o;ZE(3781,y)|0;w=31}if((w|0)==31){me(b,d,e,f,i,j,k,m,n,p);if(a[11621]|0){r=c[2269]|0;A=ke(r)|0;c[B>>2]=A;c[B+4>>2]=r;c[B+8>>2]=E?3770:11623;ZE(3815,B)|0;r=c[b+960>>2]|0;if(r|0)tb[r&127](b);A=le(i,n)|0;B=le(j,n)|0;J=+T(g[b+904>>2]);K=+T(g[b+908>>2]);c[C>>2]=A;c[C+4>>2]=B;h[C+8>>3]=J;h[C+16>>3]=K;c[C+24>>2]=o;ZE(3824,C)|0}c[b+512>>2]=f;if(!q){r=b+516|0;q=c[r>>2]|0;if((q|0)==16){if(a[11621]|0)$E(3856)|0;c[r>>2]=0;q=0}if(n)q=b+912|0;else{c[r>>2]=q+1;q=b+520+(q*24|0)|0}g[q>>2]=d;g[q+4>>2]=e;c[q+8>>2]=i;c[q+12>>2]=j;c[q+16>>2]=c[b+904>>2];c[q+20>>2]=c[b+908>>2];q=0}}if(!n){D=c[2269]|0;D=D+-1|0;c[2269]=D;D=c[2268]|0;n=b+508|0;c[n>>2]=D;n=(q|0)==0;E=E|n;l=F;return E|0}c[b+416>>2]=c[b+904>>2];c[b+420>>2]=c[b+908>>2];a[b+973>>0]=1;a[D>>0]=0;D=c[2269]|0;D=D+-1|0;c[2269]=D;D=c[2268]|0;n=b+508|0;c[n>>2]=D;n=(q|0)==0;E=E|n;l=F;return E|0}function je(a,b,c){a=a|0;b=b|0;c=T(c);var d=pb;d=T(pe(a,b,c));return T(d+T(qe(a,b,c)))}function ke(a){a=a|0;return (a>>>0>60?4257:4257+(60-a)|0)|0}function le(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;f=l;l=l+32|0;d=f+12|0;e=f;c[d>>2]=c[274];c[d+4>>2]=c[275];c[d+8>>2]=c[276];c[e>>2]=c[277];c[e+4>>2]=c[278];c[e+8>>2]=c[279];if(a>>>0>2){e=11623;l=f;return e|0}e=c[(b?e:d)+(a<<2)>>2]|0;l=f;return e|0}function me(b,d,e,f,h,i,k,m,n,o){b=b|0;d=T(d);e=T(e);f=f|0;h=h|0;i=i|0;k=T(k);m=T(m);n=n|0;o=o|0;var p=0,q=0,r=0,s=0,t=pb,u=pb,v=pb,w=pb,x=pb,y=pb,z=pb,A=0,B=0,C=0,D=pb,E=pb,F=pb,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,U=0,V=0,W=0,X=0,Y=pb,Z=pb,_=pb,$=pb,aa=pb,ba=0,ca=0,da=0,ea=0,fa=0,ga=pb,ha=pb,ia=pb,ja=pb,ka=pb,la=pb,ma=0,na=pb,oa=pb,pa=pb,qa=pb,ra=pb,sa=pb,ta=0,ua=pb,va=0,wa=pb,xa=0,ya=0,za=0,Aa=0,Ba=0,Ca=pb,Da=0,Ea=0,Fa=0,Ga=0,Ha=0,Ia=0,Ja=0,Ka=pb,La=0,Ma=0;Ja=l;l=l+16|0;ba=Ja+12|0;ca=Ja+8|0;da=Ja+4|0;ea=Ja;nc(b,(h|0)==0|(Ac(d)|0)^1,3878);nc(b,(i|0)==0|(Ac(e)|0)^1,3958);Ea=ne(b,f)|0;c[b+496>>2]=Ea;Ha=oe(2,Ea)|0;Ia=oe(0,Ea)|0;g[b+440>>2]=T(pe(b,Ha,k));g[b+444>>2]=T(qe(b,Ha,k));g[b+428>>2]=T(pe(b,Ia,k));g[b+436>>2]=T(qe(b,Ia,k));g[b+464>>2]=T(re(b,Ha));g[b+468>>2]=T(se(b,Ha));g[b+452>>2]=T(re(b,Ia));g[b+460>>2]=T(se(b,Ia));g[b+488>>2]=T(te(b,Ha,k));g[b+492>>2]=T(ue(b,Ha,k));g[b+476>>2]=T(te(b,Ia,k));g[b+484>>2]=T(ue(b,Ia,k));if(c[b+952>>2]|0){ve(b,d,e,h,i,k,m);l=Ja;return}Fa=b+944|0;Ga=Yb(c[Fa>>2]|0)|0;if(!Ga){we(b,d,e,h,i,k,m);l=Ja;return}if(!n?xe(b,d,e,h,i,k,m)|0:0){l=Ja;return}Ha=oe(c[b+4>>2]|0,Ea)|0;Ia=ye(Ha,Ea)|0;Da=ze(Ha)|0;W=c[b+8>>2]|0;ya=b+28|0;X=(c[ya>>2]|0)!=0;ra=Da?k:m;ua=Da?m:k;Y=T(Ae(b,Ha,k));Z=T(Be(b,Ha,k));t=T(Ae(b,Ia,k));sa=T(Ce(b,Ha,k));wa=T(Ce(b,Ia,k));C=Da?h:i;xa=Da?i:h;Ca=Da?sa:wa;x=Da?wa:sa;qa=T(je(b,2,k));w=T(je(b,0,k));u=T(T(T(De(b+364|0,k))-qa)-Ca);v=T(T(T(De(b+380|0,k))-qa)-Ca);y=T(T(T(De(b+372|0,m))-w)-x);z=T(T(T(De(b+388|0,m))-w)-x);_=Da?u:y;$=Da?v:z;qa=T(d-qa);d=T(qa-Ca);if(Ac(d)|0)Ca=d;else Ca=T(TE(T(XE(d,v)),u));oa=T(e-w);d=T(oa-x);if(Ac(d)|0)pa=d;else pa=T(TE(T(XE(d,z)),y));u=Da?Ca:pa;na=Da?pa:Ca;a:do if((C|0)==1){f=0;q=0;while(1){p=jc(b,q)|0;if(!f)if(T(Fe(p))>T(0.0)?T(Ge(p))>T(0.0):0)f=p;else f=0;else if(Ee(p)|0){s=0;break a}q=q+1|0;if(q>>>0>=Ga>>>0){s=f;break}}}else s=0;while(0);A=s+500|0;B=s+504|0;f=0;p=0;d=T(0.0);r=0;do{q=ac(c[Fa>>2]|0,r)|0;if((c[q+36>>2]|0)==1){He(q);a[q+973>>0]=1;a[q+972>>0]=0}else{Ie(q);if(n)Je(q,ne(q,Ea)|0,u,na,Ca);do if((c[q+24>>2]|0)!=1)if((q|0)==(s|0)){c[A>>2]=c[2268];g[B>>2]=T(0.0);break}else{Ke(b,q,Ca,h,pa,Ca,pa,i,Ea,o);break}else{if(p|0)c[p+948>>2]=q;c[q+948>>2]=0;p=q;f=(f|0)==0?q:f}while(0);la=T(g[q+504>>2]);d=T(d+T(la+T(je(q,Ha,Ca))))}r=r+1|0}while((r|0)!=(Ga|0));J=d>u;ma=X&((C|0)==2&J)?1:C;H=(xa|0)==1;L=H&(n^1);M=(ma|0)==1;N=(ma|0)==2;O=1032+(Ha<<2)|0;P=(xa|2|0)==2;V=H&(X^1);Q=1048+(Ia<<2)|0;R=1048+(Ha<<2)|0;S=1032+(Ia<<2)|0;U=(xa|0)!=1;J=X&((C|0)!=0&J);I=b+964|0;H=H^1;E=u;G=0;K=0;la=T(0.0);aa=T(0.0);while(1){b:do if(G>>>0<Ga>>>0){r=0;y=T(0.0);x=T(0.0);u=T(0.0);d=T(0.0);q=0;p=0;s=G;while(1){A=ac(c[Fa>>2]|0,s)|0;if((c[A+36>>2]|0)!=1?(c[A+936>>2]=K,(c[A+24>>2]|0)!=1):0){v=T(je(A,Ha,Ca));C=c[O>>2]|0;w=T(De(A+380+(C<<3)|0,ra));e=T(g[A+504>>2]);w=T(XE(w,e));w=T(TE(T(De(A+364+(C<<3)|0,ra)),w));if(X&(r|0)!=0&T(v+T(x+w))>E){C=r;v=y;break b}v=T(v+w);w=T(x+v);v=T(y+v);if(Ee(A)|0){u=T(u+T(Fe(A)));d=T(d-T(e*T(Ge(A))))}if(p|0)c[p+948>>2]=A;c[A+948>>2]=0;r=r+1|0;p=A;q=(q|0)==0?A:q}else{v=y;w=x}s=s+1|0;if(s>>>0<Ga>>>0){y=v;x=w}else{C=r;break}}}else{C=0;v=T(0.0);u=T(0.0);d=T(0.0);q=0;s=G}while(0);i=u>T(0.0)&u<T(1.0);D=i?T(1.0):u;i=d>T(0.0)&d<T(1.0);z=i?T(1.0):d;do if(!M)if(!(v<_&((Ac(_)|0)^1)))if(!(v>$&((Ac($)|0)^1))){if(!(a[(c[I>>2]|0)+3>>0]|0)){if(!(D==T(0.0))?!(T(Fe(b))==T(0.0)):0)break;E=v}}else E=$;else E=_;while(0);if(Ac(E)|0)if(v<T(0.0))F=T(-v);else F=T(0.0);else F=T(E-v);if(!L?(fa=(q|0)==0,!fa):0){r=c[O>>2]|0;A=F<T(0.0);x=T(F/z);B=F>T(0.0);y=T(F/D);v=T(0.0);w=T(0.0);d=T(0.0);p=q;do{e=T(De(p+380+(r<<3)|0,ra));u=T(De(p+364+(r<<3)|0,ra));u=T(XE(e,T(TE(u,T(g[p+504>>2])))));if(A){e=T(u*T(Ge(p)));if(e!=T(-0.0)?(Ka=T(u-T(x*e)),ga=T(Le(p,Ha,Ka,E,Ca)),Ka!=ga):0){v=T(v-T(ga-u));d=T(d+e)}}else if((B?(ha=T(Fe(p)),ha!=T(0.0)):0)?(Ka=T(u+T(y*ha)),ia=T(Le(p,Ha,Ka,E,Ca)),Ka!=ia):0){v=T(v-T(ia-u));w=T(w-ha)}p=c[p+948>>2]|0}while((p|0)!=0);d=T(z+d);u=T(F+v);if(!fa){x=T(D+w);A=c[O>>2]|0;B=u<T(0.0);i=d==T(0.0);y=T(u/d);r=u>T(0.0);x=T(u/x);d=T(0.0);do{Ka=T(De(q+380+(A<<3)|0,ra));v=T(De(q+364+(A<<3)|0,ra));v=T(XE(Ka,T(TE(v,T(g[q+504>>2])))));if(B){Ka=T(v*T(Ge(q)));u=T(-Ka);if(Ka!=T(-0.0)){Ka=T(y*u);u=T(Le(q,Ha,T(v+(i?u:Ka)),E,Ca))}else u=v}else if(r?(ja=T(Fe(q)),ja!=T(0.0)):0)u=T(Le(q,Ha,T(v+T(x*ja)),E,Ca));else u=v;d=T(d-T(u-v));w=T(je(q,Ha,Ca));e=T(je(q,Ia,Ca));u=T(u+w);g[ca>>2]=u;c[ea>>2]=1;p=Ac(na)|0;if((!p?!(J|(Me(q,Ia,na)|0|H)):0)?(Ne(b,q)|0)==4:0){g[ba>>2]=na;c[da>>2]=1}else Ba=78;do if((Ba|0)==78){Ba=0;if(Me(q,Ia,na)|0){p=c[q+980+(c[S>>2]<<2)>>2]|0;Ka=T(e+T(De(p,na)));g[ba>>2]=Ka;p=U&(c[p+4>>2]|0)==2;c[da>>2]=((Ac(Ka)|0|p)^1)&1;break}else{g[ba>>2]=na;c[da>>2]=p?0:2;break}}while(0);v=T(g[q+396>>2]);if(!(Ac(v)|0)){u=T(u-w);Ka=T(u/v);u=T(v*u);u=T(TE(Da?Ka:u,T(Ce(q,Ia,Ca))));g[ba>>2]=u;c[da>>2]=1;if(Ee(q)|0){u=T(XE(T(u-e),na));g[ba>>2]=u;if(Da)v=T(u*v);else v=T(u/v);g[ca>>2]=T(w+v)}g[ba>>2]=T(e+u)}Oe(q,Ha,E,Ca,ea,ca);Oe(q,Ia,na,Ca,da,ba);if(Me(q,Ia,na)|0)p=0;else p=(Ne(b,q)|0)==4;Ka=T(g[ca>>2]);D=T(g[ba>>2]);La=c[ea>>2]|0;Ma=c[da>>2]|0;ie(q,Da?Ka:D,Da?D:Ka,Ea,Da?La:Ma,Da?Ma:La,Ca,pa,n&(p^1),3459,o)|0;q=c[q+948>>2]|0}while((q|0)!=0)}else d=T(0.0)}else d=T(0.0);d=T(F+d);if(N&d>T(0.0)){p=c[O>>2]|0;if((c[b+364+(p<<3)+4>>2]|0)!=0?(ka=T(De(b+364+(p<<3)|0,ra)),ka>=T(0.0)):0)u=T(TE(T(0.0),T(ka-T(E-d))));else u=T(0.0)}else u=d;A=G>>>0<s>>>0;if(A){r=G;p=0;do{q=ac(c[Fa>>2]|0,r)|0;if(!(c[q+24>>2]|0)){p=((c[(Pe(q,Ha)|0)+4>>2]|0)==3&1)+p|0;p=p+((c[(Qe(q,Ha)|0)+4>>2]|0)==3&1)|0}r=r+1|0}while((r|0)!=(s|0));if(p){w=T(0.0);e=T(0.0)}else Ba=100}else Ba=100;c:do if((Ba|0)==100){Ba=0;switch(W|0){case 1:{p=0;w=T(u*T(.5));e=T(0.0);break c}case 2:{p=0;w=u;e=T(0.0);break c}case 3:{if(C>>>0<=1){p=0;w=T(0.0);e=T(0.0);break c}e=T((C+-1|0)>>>0);p=0;w=T(0.0);e=T(T(TE(u,T(0.0)))/e);break c}case 4:{e=T(u/T(C>>>0));p=0;w=T(e*T(.5));break c}default:{p=0;w=T(0.0);e=T(0.0);break c}}}while(0);d=T(Y+w);if(A){v=T(u/T(p|0));q=G;u=T(0.0);do{p=ac(c[Fa>>2]|0,q)|0;d:do if((c[p+36>>2]|0)!=1){switch(c[p+24>>2]|0){case 1:{if(Re(p,Ha)|0){if(!n)break d;Ka=T(Se(p,Ha,E));Ka=T(Ka+T(re(b,Ha)));Ka=T(Ka+T(pe(p,Ha,Ca)));g[p+400+(c[R>>2]<<2)>>2]=Ka;break d}break}case 0:{Ma=(c[(Pe(p,Ha)|0)+4>>2]|0)==3;Ka=T(v+d);d=Ma?Ka:d;if(n){Ma=p+400+(c[R>>2]<<2)|0;g[Ma>>2]=T(d+T(g[Ma>>2]))}Ma=(c[(Qe(p,Ha)|0)+4>>2]|0)==3;Ka=T(v+d);d=Ma?Ka:d;if(L){Ka=T(e+T(je(p,Ha,Ca)));u=na;d=T(d+T(Ka+T(g[p+504>>2])));break d}else{d=T(d+T(e+T(Te(p,Ha,Ca))));u=T(TE(u,T(Te(p,Ia,Ca))));break d}}default:{}}if(n){Ka=T(w+T(re(b,Ha)));Ma=p+400+(c[R>>2]<<2)|0;g[Ma>>2]=T(Ka+T(g[Ma>>2]))}}while(0);q=q+1|0}while((q|0)!=(s|0))}else u=T(0.0);e=T(Z+d);if(P)w=T(T(Le(b,Ia,T(wa+u),ua,k))-wa);else w=na;v=T(T(Le(b,Ia,T(wa+(V?na:u)),ua,k))-wa);if(A&n){q=G;do{r=ac(c[Fa>>2]|0,q)|0;do if((c[r+36>>2]|0)!=1){if((c[r+24>>2]|0)==1){if(Re(r,Ia)|0){d=T(Se(r,Ia,na));d=T(d+T(re(b,Ia)))}else d=T(re(b,Ia));Ka=T(d+T(pe(r,Ia,Ca)));g[r+400+(c[Q>>2]<<2)>>2]=Ka;break}p=Ne(b,r)|0;do if((p|0)==4){if((c[(Pe(r,Ia)|0)+4>>2]|0)==3){Ba=137;break}if((c[(Qe(r,Ia)|0)+4>>2]|0)==3){Ba=137;break}if(Me(r,Ia,na)|0){d=t;break}La=c[r+904+(c[O>>2]<<2)>>2]|0;c[ba>>2]=La;d=T(g[r+396>>2]);Ma=Ac(d)|0;u=(c[j>>2]=La,T(g[j>>2]));if(Ma)d=v;else{F=T(je(r,Ia,Ca));Ka=T(u/d);d=T(d*u);d=T(F+(Da?Ka:d))}g[ca>>2]=d;g[ba>>2]=T(T(je(r,Ha,Ca))+u);c[da>>2]=1;c[ea>>2]=1;Oe(r,Ha,E,Ca,da,ba);Oe(r,Ia,na,Ca,ea,ca);d=T(g[ba>>2]);F=T(g[ca>>2]);Ka=Da?d:F;d=Da?F:d;Ma=((Ac(Ka)|0)^1)&1;ie(r,Ka,d,Ea,Ma,((Ac(d)|0)^1)&1,Ca,pa,1,4040,o)|0;d=t}else Ba=137;while(0);e:do if((Ba|0)==137){Ba=0;d=T(w-T(Te(r,Ia,Ca)));do if((c[(Pe(r,Ia)|0)+4>>2]|0)==3){if((c[(Qe(r,Ia)|0)+4>>2]|0)!=3)break;d=T(t+T(TE(T(0.0),T(d*T(.5)))));break e}while(0);if((c[(Qe(r,Ia)|0)+4>>2]|0)==3){d=t;break}if((c[(Pe(r,Ia)|0)+4>>2]|0)==3){d=T(t+T(TE(T(0.0),d)));break}switch(p|0){case 1:{d=t;break e}case 2:{d=T(t+T(d*T(.5)));break e}default:{d=T(t+d);break e}}}while(0);Ka=T(la+d);Ma=r+400+(c[Q>>2]<<2)|0;g[Ma>>2]=T(Ka+T(g[Ma>>2]))}while(0);q=q+1|0}while((q|0)!=(s|0))}la=T(la+v);aa=T(TE(aa,e));i=K+1|0;if(s>>>0>=Ga>>>0)break;else{G=s;K=i}}do if(n){p=i>>>0>1;if(!p?!(Ue(b)|0):0)break;if(!(Ac(na)|0)){d=T(na-la);f:do switch(c[b+12>>2]|0){case 3:{t=T(t+d);y=T(0.0);break}case 2:{t=T(t+T(d*T(.5)));y=T(0.0);break}case 4:{if(na>la)y=T(d/T(i>>>0));else y=T(0.0);break}case 7:if(na>la){t=T(t+T(d/T(i<<1>>>0)));y=T(d/T(i>>>0));y=p?y:T(0.0);break f}else{t=T(t+T(d*T(.5)));y=T(0.0);break f}case 6:{y=T(d/T(K>>>0));y=na>la&p?y:T(0.0);break}default:y=T(0.0)}while(0);if(i|0){A=1048+(Ia<<2)|0;B=1032+(Ia<<2)|0;s=0;q=0;while(1){g:do if(q>>>0<Ga>>>0){u=T(0.0);v=T(0.0);d=T(0.0);r=q;while(1){p=ac(c[Fa>>2]|0,r)|0;do if((c[p+36>>2]|0)!=1?(c[p+24>>2]|0)==0:0){if((c[p+936>>2]|0)!=(s|0))break g;if(Ve(p,Ia)|0){Ka=T(g[p+904+(c[B>>2]<<2)>>2]);d=T(TE(d,T(Ka+T(je(p,Ia,Ca)))))}if((Ne(b,p)|0)!=5)break;ka=T(We(p));ka=T(ka+T(pe(p,0,Ca)));Ka=T(g[p+908>>2]);Ka=T(T(Ka+T(je(p,0,Ca)))-ka);ka=T(TE(v,ka));Ka=T(TE(u,Ka));u=Ka;v=ka;d=T(TE(d,T(ka+Ka)))}while(0);p=r+1|0;if(p>>>0<Ga>>>0)r=p;else{r=p;break}}}else{v=T(0.0);d=T(0.0);r=q}while(0);x=T(y+d);e=t;t=T(t+x);if(q>>>0<r>>>0){w=T(e+v);p=q;do{q=ac(c[Fa>>2]|0,p)|0;h:do if((c[q+36>>2]|0)!=1?(c[q+24>>2]|0)==0:0)switch(Ne(b,q)|0){case 1:{Ka=T(e+T(pe(q,Ia,Ca)));g[q+400+(c[A>>2]<<2)>>2]=Ka;break h}case 3:{Ka=T(T(t-T(qe(q,Ia,Ca)))-T(g[q+904+(c[B>>2]<<2)>>2]));g[q+400+(c[A>>2]<<2)>>2]=Ka;break h}case 2:{Ka=T(e+T(T(x-T(g[q+904+(c[B>>2]<<2)>>2]))*T(.5)));g[q+400+(c[A>>2]<<2)>>2]=Ka;break h}case 4:{Ka=T(e+T(pe(q,Ia,Ca)));g[q+400+(c[A>>2]<<2)>>2]=Ka;if(Me(q,Ia,na)|0)break h;if(Da){u=T(g[q+904>>2]);d=T(u+T(je(q,Ha,Ca)));v=x}else{v=T(g[q+908>>2]);v=T(v+T(je(q,Ia,Ca)));d=x;u=T(g[q+904>>2])}if(be(d,u)|0?be(v,T(g[q+908>>2]))|0:0)break h;ie(q,d,v,Ea,1,1,Ca,pa,1,4048,o)|0;break h}case 5:{g[q+404>>2]=T(T(w-T(We(q)))+T(Se(q,0,na)));break h}default:break h}while(0);p=p+1|0}while((p|0)!=(r|0))}s=s+1|0;if((s|0)==(i|0))break;else q=r}}}}while(0);g[b+904>>2]=T(Le(b,2,qa,k,k));g[b+908>>2]=T(Le(b,0,oa,m,k));if((ma|0)!=0?(ta=c[b+32>>2]|0,va=(ma|0)==2,!(va&(ta|0)!=2)):0){if(va&(ta|0)==2){d=T(sa+E);d=T(TE(T(XE(d,T(Xe(b,Ha,aa,ra)))),sa));Ba=196}}else{d=T(Le(b,Ha,aa,ra,k));Ba=196}if((Ba|0)==196)g[b+904+(c[1032+(Ha<<2)>>2]<<2)>>2]=d;if((xa|0)!=0?(za=c[b+32>>2]|0,Aa=(xa|0)==2,!(Aa&(za|0)!=2)):0){if(Aa&(za|0)==2){d=T(wa+na);d=T(TE(T(XE(d,T(Xe(b,Ia,T(wa+la),ua)))),wa));Ba=202}}else{d=T(Le(b,Ia,T(wa+la),ua,k));Ba=202}if((Ba|0)==202)g[b+904+(c[1032+(Ia<<2)>>2]<<2)>>2]=d;if(!n){l=Ja;return}if((c[ya>>2]|0)==2){q=1032+(Ia<<2)|0;r=1048+(Ia<<2)|0;p=0;do{s=jc(b,p)|0;if(!(c[s+24>>2]|0)){La=c[q>>2]|0;Ka=T(g[b+904+(La<<2)>>2]);Ma=s+400+(c[r>>2]<<2)|0;Ka=T(Ka-T(g[Ma>>2]));g[Ma>>2]=T(Ka-T(g[s+904+(La<<2)>>2]))}p=p+1|0}while((p|0)!=(Ga|0))}if(f|0){p=Da?ma:h;do{Ye(b,f,Ca,p,pa,Ea,o);f=c[f+948>>2]|0}while((f|0)!=0)}p=(Ha|2|0)==3;q=(Ia|2|0)==3;if(p|q)f=0;else{l=Ja;return}do{r=ac(c[Fa>>2]|0,f)|0;if((c[r+36>>2]|0)!=1){if(p)Ze(b,r,Ha);if(q)Ze(b,r,Ia)}f=f+1|0}while((f|0)!=(Ga|0));l=Ja;return}function ne(a,b){a=a|0;b=b|0;a=c[a>>2]|0;return ((a|0)==0?(b|0?b:1):a)|0}function oe(a,b){a=a|0;b=b|0;var c=0;a:do if((b|0)==2){switch(a|0){case 2:{a=3;break a}case 3:break;default:{c=4;break a}}a=2}else c=4;while(0);return a|0}function pe(a,b,d){a=a|0;b=b|0;d=T(d);if(ze(b)|0?(c[a+96>>2]|0)!=0:0)a=a+92|0;else a=Zd(a+60|0,c[1048+(b<<2)>>2]|0,1088)|0;return T(ef(a,d))}function qe(a,b,d){a=a|0;b=b|0;d=T(d);if(ze(b)|0?(c[a+104>>2]|0)!=0:0)a=a+100|0;else a=Zd(a+60|0,c[1064+(b<<2)>>2]|0,1088)|0;return T(ef(a,d))}function re(a,b){a=a|0;b=b|0;var d=pb;if((ze(b)|0?c[a+312>>2]|0:0)?(d=T(g[a+308>>2]),d>=T(0.0)):0)return T(d);d=T(TE(T(g[(Zd(a+276|0,c[1048+(b<<2)>>2]|0,1088)|0)>>2]),T(0.0)));return T(d)}function se(a,b){a=a|0;b=b|0;var d=pb;if((ze(b)|0?c[a+320>>2]|0:0)?(d=T(g[a+316>>2]),d>=T(0.0)):0)return T(d);d=T(TE(T(g[(Zd(a+276|0,c[1064+(b<<2)>>2]|0,1088)|0)>>2]),T(0.0)));return T(d)}function te(a,b,d){a=a|0;b=b|0;d=T(d);var e=pb;if((ze(b)|0?c[a+240>>2]|0:0)?(e=T(De(a+236|0,d)),e>=T(0.0)):0)return T(e);e=T(TE(T(De(Zd(a+204|0,c[1048+(b<<2)>>2]|0,1088)|0,d)),T(0.0)));return T(e)}function ue(a,b,d){a=a|0;b=b|0;d=T(d);var e=pb;if((ze(b)|0?c[a+248>>2]|0:0)?(e=T(De(a+244|0,d)),e>=T(0.0)):0)return T(e);e=T(TE(T(De(Zd(a+204|0,c[1064+(b<<2)>>2]|0,1088)|0,d)),T(0.0)));return T(e)}function ve(a,b,d,e,f,h,i){a=a|0;b=T(b);d=T(d);e=e|0;f=f|0;h=T(h);i=T(i);var j=pb,k=pb,m=pb,n=pb,o=pb,p=pb,q=0,r=0,s=0;s=l;l=l+16|0;q=s;r=a+952|0;nc(a,(c[r>>2]|0)!=0,4147);j=T(Ce(a,2,b));k=T(Ce(a,0,b));m=T(je(a,2,b));n=T(je(a,0,b));if(Ac(b)|0)o=b;else o=T(TE(T(0.0),T(T(b-m)-j)));if(Ac(d)|0)p=d;else p=T(TE(T(0.0),T(T(d-n)-k)));if((e|0)==1&(f|0)==1){g[a+904>>2]=T(Le(a,2,T(b-m),h,h));i=T(Le(a,0,T(d-n),i,h));r=a+908|0;g[r>>2]=i;l=s;return}else{Jb[c[r>>2]&1](q,a,o,e,p,f);i=T(j+T(g[q>>2]));h=T(b-m);g[a+904>>2]=T(Le(a,2,(e|2|0)==2?i:h,b,b));h=T(k+T(g[q+4>>2]));i=T(d-n);i=T(Le(a,0,(f|2|0)==2?h:i,d,b));r=a+908|0;g[r>>2]=i;l=s;return}}function we(a,b,c,d,e,f,h){a=a|0;b=T(b);c=T(c);d=d|0;e=e|0;f=T(f);h=T(h);var i=pb,j=pb,k=pb,l=pb;k=T(Ce(a,2,f));i=T(Ce(a,0,f));l=T(je(a,2,f));j=T(je(a,0,f));b=T(b-l);g[a+904>>2]=T(Le(a,2,(d|2|0)==2?k:b,f,f));c=T(c-j);g[a+908>>2]=T(Le(a,0,(e|2|0)==2?i:c,h,f));return}function xe(a,b,c,d,e,f,h){a=a|0;b=T(b);c=T(c);d=d|0;e=e|0;f=T(f);h=T(h);var i=0,j=pb,k=pb;i=(d|0)==2;if((!(b<=T(0.0)&i)?!(c<=T(0.0)&(e|0)==2):0)?!((d|0)==1&(e|0)==1):0){i=0;return i|0}j=T(je(a,0,f));k=T(je(a,2,f));i=b<T(0.0)&i|(Ac(b)|0);b=T(b-k);g[a+904>>2]=T(Le(a,2,i?T(0.0):b,f,f));b=T(c-j);i=c<T(0.0)&(e|0)==2|(Ac(c)|0);g[a+908>>2]=T(Le(a,0,i?T(0.0):b,h,f));i=1;return i|0}function ye(a,b){a=a|0;b=b|0;if(!(af(a)|0)){b=0;return b|0}b=oe(2,b)|0;return b|0}function ze(a){a=a|0;return (a|1|0)==3|0}function Ae(a,b,c){a=a|0;b=b|0;c=T(c);c=T(te(a,b,c));return T(c+T(re(a,b)))}function Be(a,b,c){a=a|0;b=b|0;c=T(c);c=T(ue(a,b,c));return T(c+T(se(a,b)))}function Ce(a,b,c){a=a|0;b=b|0;c=T(c);var d=pb;d=T(Ae(a,b,c));return T(d+T(Be(a,b,c)))}function De(a,b){a=a|0;b=T(b);switch(c[a+4>>2]|0){case 2:{b=T(T(T(g[a>>2])*b)/T(100.0));break}case 1:{b=T(g[a>>2]);break}default:b=T(t)}return T(b)}function Ee(a){a=a|0;if(c[a+24>>2]|0){a=0;return a|0}if(T(Fe(a))!=T(0.0)){a=1;return a|0}a=T(Ge(a))!=T(0.0);return a|0}function Fe(a){a=a|0;var b=pb;if(!(c[a+940>>2]|0)){b=T(0.0);return T(b)}b=T(g[a+44>>2]);if(Ac(b)|0){b=T(g[a+40>>2]);a=b>T(0.0)&((Ac(b)|0)^1);return T(a?b:T(0.0))}else return T(b);return pb}function Ge(b){b=b|0;var d=0,e=pb,f=pb;if(!(c[b+940>>2]|0)){f=T(0.0);return T(f)}e=T(g[b+48>>2]);if(!(Ac(e)|0)){f=e;return T(f)}d=a[(c[b+964>>2]|0)+2>>0]|0;if(d<<24>>24==0?(f=T(g[b+40>>2]),f<T(0.0)&((Ac(f)|0)^1)):0){f=T(-f);return T(f)}f=d<<24>>24?T(1.0):T(0.0);return T(f)}function He(b){b=b|0;var d=0,e=0;e=b+400|0;g[b+916>>2]=T(0.0);g[b+912>>2]=T(0.0);c[e>>2]=0;c[e+4>>2]=0;c[e+8>>2]=0;c[e+12>>2]=0;c[e+16>>2]=0;c[e+20>>2]=0;c[b+924>>2]=1;c[b+920>>2]=1;g[b+928>>2]=T(0.0);g[b+932>>2]=T(0.0);a[b+973>>0]=1;e=ic(b)|0;if(!e)return;d=b+944|0;b=0;do{He(ac(c[d>>2]|0,b)|0);b=b+1|0}while((b|0)!=(e|0));return}function Ie(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;f=l;l=l+16|0;e=f+8|0;d=f;b=a+380|0;if(!((c[a+384>>2]|0)!=0?(g=a+364|0,c[d>>2]=c[b>>2],c[d+4>>2]=c[b+4>>2],c[e>>2]=c[g>>2],c[e+4>>2]=c[g+4>>2],ce(d,e)|0):0))b=a+348|0;c[a+980>>2]=b;b=a+388|0;if(c[a+392>>2]|0?(g=a+372|0,c[d>>2]=c[b>>2],c[d+4>>2]=c[b+4>>2],c[e>>2]=c[g>>2],c[e+4>>2]=c[g+4>>2],ce(d,e)|0):0){e=b;g=a+984|0;c[g>>2]=e;l=f;return}e=a+356|0;g=a+984|0;c[g>>2]=e;l=f;return}function Je(a,b,d,e,f){a=a|0;b=b|0;d=T(d);e=T(e);f=T(f);var h=0,i=pb;b=c[a+940>>2]|0?b:1;h=oe(c[a+4>>2]|0,b)|0;b=ye(h,b)|0;d=T(df(a,h,d));e=T(df(a,b,e));i=T(d+T(pe(a,h,f)));g[a+400+(c[1048+(h<<2)>>2]<<2)>>2]=i;d=T(d+T(qe(a,h,f)));g[a+400+(c[1064+(h<<2)>>2]<<2)>>2]=d;d=T(e+T(pe(a,b,f)));g[a+400+(c[1048+(b<<2)>>2]<<2)>>2]=d;f=T(e+T(qe(a,b,f)));g[a+400+(c[1064+(b<<2)>>2]<<2)>>2]=f;return}function Ke(a,b,d,e,f,h,i,j,k,m){a=a|0;b=b|0;d=T(d);e=e|0;f=T(f);h=T(h);i=T(i);j=j|0;k=k|0;m=m|0;var n=pb,o=0,p=pb,q=0,r=pb,s=0,u=0,v=0,w=0,x=pb,y=pb,z=0,A=0,B=0,C=0,D=0,E=0,F=0;F=l;l=l+16|0;z=F+12|0;A=F+8|0;B=F+4|0;C=F;E=oe(c[a+4>>2]|0,k)|0;D=ze(E)|0;n=T(De(bf(b)|0,D?h:i));o=Me(b,2,h)|0;s=Me(b,0,i)|0;do if(!(Ac(n)|0)?!(Ac(D?d:f)|0):0){o=b+504|0;if(!(Ac(T(g[o>>2]))|0)){if(!(cf(c[b+964>>2]|0,0)|0))break;if((c[b+500>>2]|0)==(c[2268]|0))break}g[o>>2]=T(TE(n,T(Ce(b,E,h))))}else q=7;while(0);do if((q|0)==7){w=D^1;u=o^1;if(!(w|u)){i=T(De(c[b+980>>2]|0,h));g[b+504>>2]=T(TE(i,T(Ce(b,2,h))));break}v=s^1;if(!(D|v)){i=T(De(c[b+984>>2]|0,i));g[b+504>>2]=T(TE(i,T(Ce(b,0,h))));break}g[z>>2]=T(t);g[A>>2]=T(t);c[B>>2]=0;c[C>>2]=0;x=T(je(b,2,h));y=T(je(b,0,h));if(o){r=T(x+T(De(c[b+980>>2]|0,h)));g[z>>2]=r;c[B>>2]=1;q=1}else{q=0;r=T(t)}if(s){p=T(y+T(De(c[b+984>>2]|0,i)));g[A>>2]=p;c[C>>2]=1;o=1}else{o=0;p=T(t)}s=c[a+32>>2]|0;if(!(D&(s|0)==2)){if(Ac(r)|0?!(Ac(d)|0):0){g[z>>2]=d;c[B>>2]=2;r=d;q=2}}else s=2;if((!((s|0)==2&w)?Ac(p)|0:0)?!(Ac(f)|0):0){g[A>>2]=f;c[C>>2]=2;p=f;o=2}if(D){if((j|0)==1&v&((Ac(f)|0)^1)?(Ne(a,b)|0)==4:0){g[A>>2]=f;c[C>>2]=1;o=1;p=f}}else if((e|0)==1&u&((Ac(d)|0)^1)?(Ne(a,b)|0)==4:0){g[z>>2]=d;c[B>>2]=1;q=1;r=d}n=T(g[b+396>>2]);do if(!(Ac(n)|0)){if((q|0)==1&w){o=0;n=T(T(r-x)/n)}else{if(!(D&(o|0)==1))break;o=2;n=T(n*T(p-y))}g[b+504>>2]=T(TE(n,T(Ce(b,o,h))));l=F;return}while(0);Oe(b,2,h,h,B,z);Oe(b,0,i,h,C,A);x=T(g[z>>2]);y=T(g[A>>2]);ie(b,x,y,k,c[B>>2]|0,c[C>>2]|0,h,i,0,4139,m)|0;i=T(g[b+904+(c[1032+(E<<2)>>2]<<2)>>2]);g[b+504>>2]=T(TE(i,T(Ce(b,E,h))))}while(0);c[b+500>>2]=c[2268];l=F;return}function Le(a,b,c,d,e){a=a|0;b=b|0;c=T(c);d=T(d);e=T(e);d=T(Xe(a,b,c,d));return T(TE(d,T(Ce(a,b,e))))}function Me(a,b,d){a=a|0;b=b|0;d=T(d);a=c[a+980+(c[1032+(b<<2)>>2]<<2)>>2]|0;switch(c[a+4>>2]|0){case 1:{if(T(g[a>>2])<T(0.0)){b=0;return b|0}break}case 2:{if(T(g[a>>2])<T(0.0)){b=0;return b|0}b=(Ac(d)|0)^1;return b|0}case 0:case 3:{b=0;return b|0}default:{}}b=1;return b|0}function Ne(a,b){a=a|0;b=b|0;b=b+20|0;b=c[((c[b>>2]|0)==0?a+16|0:b)>>2]|0;if((b|0)==5?af(c[a+4>>2]|0)|0:0){a=1;return a|0}a=b;return a|0}function Oe(a,b,d,e,f,h){a=a|0;b=b|0;d=T(d);e=T(e);f=f|0;h=h|0;d=T(De(a+380+(c[1032+(b<<2)>>2]<<3)|0,d));d=T(d+T(je(a,b,e)));switch(c[f>>2]|0){case 2:case 1:{f=Ac(d)|0;e=T(g[h>>2]);g[h>>2]=f|e<d?e:d;return}case 0:{if(Ac(d)|0)return;c[f>>2]=2;g[h>>2]=d;return}default:return}}function Pe(a,b){a=a|0;b=b|0;if(ze(b)|0?(c[a+96>>2]|0)!=0:0)b=4;else b=c[1048+(b<<2)>>2]|0;return a+60+(b<<3)|0}function Qe(a,b){a=a|0;b=b|0;if(ze(b)|0?(c[a+104>>2]|0)!=0:0)b=5;else b=c[1064+(b<<2)>>2]|0;return a+60+(b<<3)|0}function Re(a,b){a=a|0;b=b|0;a=a+132|0;if(ze(b)|0?c[(Zd(a,4,1008)|0)+4>>2]|0:0){b=1;return b|0}b=(c[(Zd(a,c[1048+(b<<2)>>2]|0,1008)|0)+4>>2]|0)!=0;return b|0}function Se(a,b,d){a=a|0;b=b|0;d=T(d);var e=0;a=a+132|0;if(!(ze(b)|0?(e=Zd(a,4,1008)|0,(c[e+4>>2]|0)!=0):0)){e=Zd(a,c[1048+(b<<2)>>2]|0,1008)|0;if(!(c[e+4>>2]|0)){d=T(0.0);return T(d)}}d=T(De(e,d));return T(d)}function Te(a,b,d){a=a|0;b=b|0;d=T(d);var e=pb;e=T(g[a+904+(c[1032+(b<<2)>>2]<<2)>>2]);e=T(e+T(pe(a,b,d)));return T(e+T(qe(a,b,d)))}function Ue(a){a=a|0;var b=0,d=0,e=0;if(af(c[a+4>>2]|0)|0){d=0;return d|0}if((c[a+16>>2]|0)==5){d=1;return d|0}d=ic(a)|0;if(!d){d=0;return d|0}else b=0;while(1){e=jc(a,b)|0;if((c[e+24>>2]|0)==0?(c[e+20>>2]|0)==5:0){b=1;a=7;break}b=b+1|0;if(b>>>0>=d>>>0){b=0;a=7;break}}if((a|0)==7)return b|0;return 0}function Ve(a,b){a=a|0;b=b|0;var d=pb;d=T(g[a+904+(c[1032+(b<<2)>>2]<<2)>>2]);return d>=T(0.0)&((Ac(d)|0)^1)|0}function We(a){a=a|0;var b=0,d=0,e=0,f=0,h=0,i=pb,j=pb,k=0;b=c[a+956>>2]|0;if(b|0){j=T(g[a+904>>2]);i=T(g[a+908>>2]);i=T(sb[b&0](a,j,i));nc(a,(Ac(i)|0)^1,4089);return T(i)}f=ic(a)|0;if(f|0){d=0;e=0;while(1){b=jc(a,e)|0;if(c[b+936>>2]|0){b=d;break}if((c[b+24>>2]|0)!=1){k=(Ne(a,b)|0)==5;if(k){h=10;break}else b=(d|0)==0?b:d}else b=d;e=e+1|0;if(e>>>0>=f>>>0)break;else d=b}if((h|0)==10){i=T(We(b));k=b+404|0;j=T(g[k>>2]);j=T(i+j);return T(j)}if(b|0){k=b;i=T(We(k));k=k+404|0;j=T(g[k>>2]);j=T(i+j);return T(j)}}j=T(g[a+908>>2]);return T(j)}function Xe(a,b,c,d){a=a|0;b=b|0;c=T(c);d=T(d);var e=pb,f=0;if(!(af(b)|0))if(ze(b)|0){b=0;f=3}else{d=T(t);e=T(t)}else{b=1;f=3}if((f|0)==3){e=T(De(a+364+(b<<3)|0,d));d=T(De(a+380+(b<<3)|0,d))}f=d<c&(d>=T(0.0)&((Ac(d)|0)^1));c=f?d:c;f=e>=T(0.0)&((Ac(e)|0)^1)&c<e;return T(f?e:c)}function Ye(a,b,d,e,f,h,i){a=a|0;b=b|0;d=T(d);e=e|0;f=T(f);h=h|0;i=i|0;var j=pb,k=pb,l=0,m=0,n=pb,o=pb,p=pb,q=0,r=0,s=0,u=0,v=pb,w=0;s=oe(c[a+4>>2]|0,h)|0;q=ye(s,h)|0;r=ze(s)|0;n=T(je(b,2,d));p=T(je(b,0,d));if(!(Me(b,2,d)|0))if(Re(b,2)|0?_e(b,2)|0:0){j=T(g[a+904>>2]);k=T(re(a,2));k=T(j-T(k+T(se(a,2))));j=T(Se(b,2,d));j=T(Le(b,2,T(k-T(j+T($e(b,2,d)))),d,d))}else j=T(t);else j=T(n+T(De(c[b+980>>2]|0,d)));if(!(Me(b,0,f)|0))if(Re(b,0)|0?_e(b,0)|0:0){k=T(g[a+908>>2]);v=T(re(a,0));v=T(k-T(v+T(se(a,0))));k=T(Se(b,0,f));k=T(Le(b,0,T(v-T(k+T($e(b,0,f)))),f,d))}else k=T(t);else k=T(p+T(De(c[b+984>>2]|0,f)));l=Ac(j)|0;m=Ac(k)|0;do if(l^m?(o=T(g[b+396>>2]),!(Ac(o)|0)):0){if(l){j=T(T(k-p)*o);j=T(n+T(TE(j,T(Ce(b,0,d)))));break}if(m){k=T(T(j-n)/o);k=T(p+T(TE(k,T(Ce(b,2,d)))))}}while(0);m=Ac(j)|0;l=Ac(k)|0;if(m|l){w=(m^1)&1;e=d>T(0.0)&((e|0)!=0&m);j=r?j:e?d:j;ie(b,j,k,h,r?w:e?2:w,m&(l^1)&1,j,k,0,4066,i)|0;j=T(g[b+904>>2]);j=T(j+T(je(b,2,d)));k=T(g[b+908>>2]);k=T(k+T(je(b,0,d)))}ie(b,j,k,h,1,1,j,k,1,4078,i)|0;if(_e(b,s)|0?!(Re(b,s)|0):0){w=c[1032+(s<<2)>>2]|0;v=T(g[a+904+(w<<2)>>2]);v=T(v-T(g[b+904+(w<<2)>>2]));v=T(v-T(se(a,s)));v=T(v-T(qe(b,s,d)));v=T(v-T($e(b,s,r?d:f)));g[b+400+(c[1048+(s<<2)>>2]<<2)>>2]=v}else u=22;do if((u|0)==22){if(!(Re(b,s)|0)?(c[a+8>>2]|0)==1:0){w=c[1032+(s<<2)>>2]|0;v=T(g[a+904+(w<<2)>>2]);v=T(T(v-T(g[b+904+(w<<2)>>2]))*T(.5));g[b+400+(c[1048+(s<<2)>>2]<<2)>>2]=v;break}if(!(Re(b,s)|0)?(c[a+8>>2]|0)==2:0){w=c[1032+(s<<2)>>2]|0;v=T(g[a+904+(w<<2)>>2]);v=T(v-T(g[b+904+(w<<2)>>2]));g[b+400+(c[1048+(s<<2)>>2]<<2)>>2]=v}}while(0);if(_e(b,q)|0?!(Re(b,q)|0):0){w=c[1032+(q<<2)>>2]|0;v=T(g[a+904+(w<<2)>>2]);v=T(v-T(g[b+904+(w<<2)>>2]));v=T(v-T(se(a,q)));v=T(v-T(qe(b,q,d)));v=T(v-T($e(b,q,r?f:d)));g[b+400+(c[1048+(q<<2)>>2]<<2)>>2]=v;return}if(Re(b,q)|0)return;if((Ne(a,b)|0)==2){w=c[1032+(q<<2)>>2]|0;v=T(g[a+904+(w<<2)>>2]);v=T(T(v-T(g[b+904+(w<<2)>>2]))*T(.5));g[b+400+(c[1048+(q<<2)>>2]<<2)>>2]=v;return}w=(Ne(a,b)|0)==3;if(!(w^(c[a+28>>2]|0)==2))return;w=c[1032+(q<<2)>>2]|0;v=T(g[a+904+(w<<2)>>2]);v=T(v-T(g[b+904+(w<<2)>>2]));g[b+400+(c[1048+(q<<2)>>2]<<2)>>2]=v;return}function Ze(a,b,d){a=a|0;b=b|0;d=d|0;var e=pb,f=0;f=c[1032+(d<<2)>>2]|0;e=T(g[b+904+(f<<2)>>2]);e=T(T(g[a+904+(f<<2)>>2])-e);e=T(e-T(g[b+400+(c[1048+(d<<2)>>2]<<2)>>2]));g[b+400+(c[1064+(d<<2)>>2]<<2)>>2]=e;return}function _e(a,b){a=a|0;b=b|0;a=a+132|0;if(ze(b)|0?c[(Zd(a,5,1008)|0)+4>>2]|0:0){b=1;return b|0}b=(c[(Zd(a,c[1064+(b<<2)>>2]|0,1008)|0)+4>>2]|0)!=0;return b|0}function $e(a,b,d){a=a|0;b=b|0;d=T(d);var e=0;a=a+132|0;if(!(ze(b)|0?(e=Zd(a,5,1008)|0,(c[e+4>>2]|0)!=0):0)){e=Zd(a,c[1064+(b<<2)>>2]|0,1008)|0;if(!(c[e+4>>2]|0)){d=T(0.0);return T(d)}}d=T(De(e,d));return T(d)}function af(a){a=a|0;return (a|1|0)==1|0}function bf(b){b=b|0;var d=pb;switch(c[b+56>>2]|0){case 0:case 3:break;default:{b=b+52|0;return b|0}}d=T(g[b+40>>2]);if(!(d>T(0.0)&((Ac(d)|0)^1))){b=1080;return b|0}b=a[(c[b+964>>2]|0)+2>>0]|0?1080:1088;return b|0}function cf(b,c){b=b|0;c=c|0;return (a[b+c>>0]|0)!=0|0}function df(a,b,c){a=a|0;b=b|0;c=T(c);if(Re(a,b)|0){c=T(Se(a,b,c));return T(c)}else{c=T(-T($e(a,b,c)));return T(c)}return pb}function ef(a,b){a=a|0;b=T(b);if((c[a+4>>2]|0)==3){b=T(0.0);return T(b)}b=T(De(a,b));return T(b)}function ff(b,d,e,f){b=b|0;d=T(d);e=T(e);f=f|0;var h=pb,i=pb,j=0,k=0,l=0;c[2268]=(c[2268]|0)+1;Ie(b);if(!(Me(b,2,d)|0)){h=T(De(b+380|0,d));if(!(h>=T(0.0))){l=((Ac(d)|0)^1)&1;h=d}else l=2}else{h=T(De(c[b+980>>2]|0,d));l=1;h=T(h+T(je(b,2,d)))}if(!(Me(b,0,e)|0)){i=T(De(b+388|0,e));if(!(i>=T(0.0))){k=((Ac(e)|0)^1)&1;i=e}else k=2}else{i=T(De(c[b+984>>2]|0,e));k=1;i=T(i+T(je(b,0,d)))}j=b+964|0;if(!(ie(b,h,i,f,l,k,d,e,1,4318,c[j>>2]|0)|0))return;Je(b,c[b+496>>2]|0,d,e,d);gf(b,T(g[(c[j>>2]|0)+4>>2]),T(0.0),T(0.0));if(!(a[11620]|0))return;Sd(b,7);return}function gf(a,b,d,e){a=a|0;b=T(b);d=T(d);e=T(e);var f=0,h=0,i=pb,j=0,k=0,l=pb,m=0,n=pb,o=pb,p=pb,q=pb;if(b==T(0.0))return;j=a+400|0;q=T(g[j>>2]);m=a+404|0;p=T(g[m>>2]);k=a+416|0;o=T(g[k>>2]);h=a+420|0;n=T(g[h>>2]);i=T(q+d);d=T(p+e);l=T(i+o);e=T(d+n);f=(c[a+976>>2]|0)==1;g[j>>2]=T(ee(q,b,0,f));g[m>>2]=T(ee(p,b,0,f));m=be(T(VE(o,T(1.0))),T(0.0))|0;j=be(T(VE(n,T(1.0))),T(0.0))|0;l=T(ee(l,b,f&(m^1),f&m));g[k>>2]=T(l-T(ee(i,b,0,f)));e=T(ee(e,b,f&(j^1),f&j));g[h>>2]=T(e-T(ee(d,b,0,f)));h=Yb(c[a+944>>2]|0)|0;if(!h)return;else f=0;do{gf(jc(a,f)|0,b,i,d);f=f+1|0}while((f|0)!=(h|0));return}function hf(b,c,d){b=b|0;c=c|0;d=d|0;a[b+c>>0]=d&1;return}function jf(){var a=0;a=mF(4)|0;kf(a);return a|0}function kf(a){a=a|0;c[a>>2]=qc()|0;return}function lf(a){a=a|0;if(a|0){mf(a);oF(a)}return}function mf(a){a=a|0;sc(c[a>>2]|0);return}function nf(a,b,d){a=a|0;b=b|0;d=d|0;hf(c[a>>2]|0,b,d);return}function of(a,b){a=a|0;b=b|0;return cf(c[a>>2]|0,b)|0}function pf(){var a=0;a=mF(8)|0;qf(a,0);return a|0}function qf(a,b){a=a|0;b=b|0;if(!b)b=gc()|0;else b=bc(c[b>>2]|0)|0;c[a>>2]=b;c[a+4>>2]=0;Dc(b,a);return}function rf(a){a=a|0;var b=0;b=mF(8)|0;qf(b,a);return b|0}function sf(a){a=a|0;if(a|0){tf(a);oF(a)}return}function tf(a){a=a|0;var b=0;hc(c[a>>2]|0);b=a+4|0;a=c[b>>2]|0;c[b>>2]=0;if(a|0){uf(a);oF(a)}return}function uf(a){a=a|0;vf(a);return}function vf(a){a=a|0;a=c[a>>2]|0;if(a|0)fb(a|0);return}function wf(a){a=a|0;return Ec(a)|0}function xf(a){a=a|0;var b=0,d=0;d=a+4|0;b=c[d>>2]|0;c[d>>2]=0;if(b|0){uf(b);oF(b)}mc(c[a>>2]|0);return}function yf(a,b){a=a|0;b=b|0;yc(c[a>>2]|0,c[b>>2]|0);return}function zf(a,b){a=a|0;b=b|0;Pc(c[a>>2]|0,b);return}function Af(a,b,d){a=a|0;b=b|0;d=+d;bd(c[a>>2]|0,b,T(d));return}function Bf(a,b,d){a=a|0;b=b|0;d=+d;cd(c[a>>2]|0,b,T(d));return}function Cf(a,b){a=a|0;b=b|0;Jc(c[a>>2]|0,b);return}function Df(a,b){a=a|0;b=b|0;Lc(c[a>>2]|0,b);return}function Ef(a,b){a=a|0;b=b|0;Nc(c[a>>2]|0,b);return}function Ff(a,b){a=a|0;b=b|0;Fc(c[a>>2]|0,b);return}function Gf(a,b){a=a|0;b=b|0;Rc(c[a>>2]|0,b);return}function Hf(a,b){a=a|0;b=b|0;Hc(c[a>>2]|0,b);return}function If(a,b,d){a=a|0;b=b|0;d=+d;ed(c[a>>2]|0,b,T(d));return}function Jf(a,b,d){a=a|0;b=b|0;d=+d;fd(c[a>>2]|0,b,T(d));return}function Kf(a,b){a=a|0;b=b|0;hd(c[a>>2]|0,b);return}function Lf(a,b){a=a|0;b=b|0;Tc(c[a>>2]|0,b);return}function Mf(a,b){a=a|0;b=b|0;Vc(c[a>>2]|0,b);return}function Nf(a,b){a=a|0;b=+b;Xc(c[a>>2]|0,T(b));return}function Of(a,b){a=a|0;b=+b;_c(c[a>>2]|0,T(b));return}function Pf(a,b){a=a|0;b=+b;$c(c[a>>2]|0,T(b));return}function Qf(a,b){a=a|0;b=+b;Yc(c[a>>2]|0,T(b));return}function Rf(a,b){a=a|0;b=+b;Zc(c[a>>2]|0,T(b));return}function Sf(a,b){a=a|0;b=+b;nd(c[a>>2]|0,T(b));return}function Tf(a,b){a=a|0;b=+b;od(c[a>>2]|0,T(b));return}function Uf(a){a=a|0;pd(c[a>>2]|0);return}function Vf(a,b){a=a|0;b=+b;rd(c[a>>2]|0,T(b));return}function Wf(a,b){a=a|0;b=+b;sd(c[a>>2]|0,T(b));return}function Xf(a){a=a|0;td(c[a>>2]|0);return}function Yf(a,b){a=a|0;b=+b;vd(c[a>>2]|0,T(b));return}function Zf(a,b){a=a|0;b=+b;wd(c[a>>2]|0,T(b));return}function _f(a,b){a=a|0;b=+b;yd(c[a>>2]|0,T(b));return}function $f(a,b){a=a|0;b=+b;zd(c[a>>2]|0,T(b));return}function ag(a,b){a=a|0;b=+b;Bd(c[a>>2]|0,T(b));return}function bg(a,b){a=a|0;b=+b;Cd(c[a>>2]|0,T(b));return}function cg(a,b){a=a|0;b=+b;Ed(c[a>>2]|0,T(b));return}function dg(a,b){a=a|0;b=+b;Fd(c[a>>2]|0,T(b));return}function eg(a,b){a=a|0;b=+b;Hd(c[a>>2]|0,T(b));return}function fg(a,b,d){a=a|0;b=b|0;d=+d;ld(c[a>>2]|0,b,T(d));return}function gg(a,b,d){a=a|0;b=b|0;d=+d;id(c[a>>2]|0,b,T(d));return}function hg(a,b,d){a=a|0;b=b|0;d=+d;jd(c[a>>2]|0,b,T(d));return}function ig(a){a=a|0;return Qc(c[a>>2]|0)|0}function jg(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=l;l=l+16|0;f=e;dd(f,c[b>>2]|0,d);kg(a,f);l=e;return}function kg(a,b){a=a|0;b=b|0;lg(a,c[b+4>>2]|0,+T(g[b>>2]));return}function lg(a,b,d){a=a|0;b=b|0;d=+d;c[a>>2]=b;h[a+8>>3]=d;return}function mg(a){a=a|0;return Kc(c[a>>2]|0)|0}function ng(a){a=a|0;return Mc(c[a>>2]|0)|0}function og(a){a=a|0;return Oc(c[a>>2]|0)|0}function pg(a){a=a|0;return Gc(c[a>>2]|0)|0}function qg(a){a=a|0;return Sc(c[a>>2]|0)|0}function rg(a){a=a|0;return Ic(c[a>>2]|0)|0}function sg(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=l;l=l+16|0;f=e;gd(f,c[b>>2]|0,d);kg(a,f);l=e;return}function tg(a){a=a|0;return Uc(c[a>>2]|0)|0}function ug(a){a=a|0;return Wc(c[a>>2]|0)|0}function vg(a,b){a=a|0;b=b|0;var d=0,e=0;d=l;l=l+16|0;e=d;ad(e,c[b>>2]|0);kg(a,e);l=d;return}function wg(a){a=a|0;return +(+T(zc(c[a>>2]|0)))}function xg(a){a=a|0;return +(+T(Cc(c[a>>2]|0)))}function yg(a,b){a=a|0;b=b|0;var d=0,e=0;d=l;l=l+16|0;e=d;qd(e,c[b>>2]|0);kg(a,e);l=d;return}function zg(a,b){a=a|0;b=b|0;var d=0,e=0;d=l;l=l+16|0;e=d;ud(e,c[b>>2]|0);kg(a,e);l=d;return}function Ag(a,b){a=a|0;b=b|0;var d=0,e=0;d=l;l=l+16|0;e=d;xd(e,c[b>>2]|0);kg(a,e);l=d;return}function Bg(a,b){a=a|0;b=b|0;var d=0,e=0;d=l;l=l+16|0;e=d;Ad(e,c[b>>2]|0);kg(a,e);l=d;return}function Cg(a,b){a=a|0;b=b|0;var d=0,e=0;d=l;l=l+16|0;e=d;Dd(e,c[b>>2]|0);kg(a,e);l=d;return}function Dg(a,b){a=a|0;b=b|0;var d=0,e=0;d=l;l=l+16|0;e=d;Gd(e,c[b>>2]|0);kg(a,e);l=d;return}function Eg(a){a=a|0;return +(+T(Id(c[a>>2]|0)))}function Fg(a,b){a=a|0;b=b|0;return +(+T(md(c[a>>2]|0,b)))}function Gg(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=l;l=l+16|0;f=e;kd(f,c[b>>2]|0,d);kg(a,f);l=e;return}function Hg(a,b,d){a=a|0;b=b|0;d=d|0;uc(c[a>>2]|0,c[b>>2]|0,d);return}function Ig(a,b){a=a|0;b=b|0;kc(c[a>>2]|0,c[b>>2]|0);return}function Jg(a){a=a|0;return ic(c[a>>2]|0)|0}function Kg(a){a=a|0;a=vc(c[a>>2]|0)|0;if(!a)a=0;else a=wf(a)|0;return a|0}function Lg(a,b){a=a|0;b=b|0;a=jc(c[a>>2]|0,b)|0;if(!a)a=0;else a=wf(a)|0;return a|0}function Mg(a,b){a=a|0;b=b|0;var d=0,e=0;e=mF(4)|0;Ng(e,b);d=a+4|0;b=c[d>>2]|0;c[d>>2]=e;if(b|0){uf(b);oF(b)}tc(c[a>>2]|0,1);return}function Ng(a,b){a=a|0;b=b|0;fh(a,b);return}function Og(a,b,c,d,e,f){a=a|0;b=b|0;c=T(c);d=d|0;e=T(e);f=f|0;var i=0,j=0;i=l;l=l+16|0;j=i;Pg(j,Ec(b)|0,+c,d,+e,f);g[a>>2]=T(+h[j>>3]);g[a+4>>2]=T(+h[j+8>>3]);l=i;return}function Pg(a,b,d,e,f,g){a=a|0;b=b|0;d=+d;e=e|0;f=+f;g=g|0;var i=0,j=0,k=0,m=0,n=0;i=l;l=l+32|0;n=i+8|0;m=i+20|0;k=i;j=i+16|0;h[n>>3]=d;c[m>>2]=e;h[k>>3]=f;c[j>>2]=g;Qg(a,c[b+4>>2]|0,n,m,k,j);l=i;return}function Qg(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var i=0,j=0;i=l;l=l+16|0;j=i;ED(j);b=Rg(b)|0;Sg(a,b,+h[d>>3],c[e>>2]|0,+h[f>>3],c[g>>2]|0);GD(j);l=i;return}function Rg(a){a=a|0;return c[a>>2]|0}function Sg(a,b,c,d,e,f){a=a|0;b=b|0;c=+c;d=d|0;e=+e;f=f|0;var g=0;g=Ug(Tg()|0)|0;c=+Vg(c);d=Wg(d)|0;e=+Vg(e);Xg(a,hb(0,g|0,b|0,+c,d|0,+e,Wg(f)|0)|0);return}function Tg(){var b=0;if(!(a[8576]|0)){ch(9080);b=8576;c[b>>2]=1;c[b+4>>2]=0}return 9080}function Ug(a){a=a|0;return c[a+8>>2]|0}function Vg(a){a=+a;return +(+bh(a))}function Wg(a){a=a|0;return ah(a)|0}function Xg(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;f=l;l=l+32|0;d=f;e=b;if(!(e&1)){c[a>>2]=c[b>>2];c[a+4>>2]=c[b+4>>2];c[a+8>>2]=c[b+8>>2];c[a+12>>2]=c[b+12>>2]}else{Yg(d,0);Na(e|0,d|0)|0;Zg(a,d);_g(d)}l=f;return}function Yg(b,d){b=b|0;d=d|0;$g(b,d);c[b+8>>2]=0;a[b+24>>0]=0;return}function Zg(a,b){a=a|0;b=b|0;b=b+8|0;c[a>>2]=c[b>>2];c[a+4>>2]=c[b+4>>2];c[a+8>>2]=c[b+8>>2];c[a+12>>2]=c[b+12>>2];return}function _g(b){b=b|0;a[b+24>>0]=0;return}function $g(a,b){a=a|0;b=b|0;c[a>>2]=b;return}function ah(a){a=a|0;return a|0}function bh(a){a=+a;return +a}function ch(a){a=a|0;eh(a,dh()|0,4);return}function dh(){return 1120}function eh(a,b,d){a=a|0;b=b|0;d=d|0;c[a>>2]=b;c[a+4>>2]=d;c[a+8>>2]=cb(b|0,d+1|0)|0;return}function fh(a,b){a=a|0;b=b|0;b=c[b>>2]|0;c[a>>2]=b;Aa(b|0);return}function gh(a){a=a|0;var b=0,d=0;d=a+4|0;b=c[d>>2]|0;c[d>>2]=0;if(b|0){uf(b);oF(b)}tc(c[a>>2]|0,0);return}function hh(a){a=a|0;wc(c[a>>2]|0);return}function ih(a){a=a|0;return xc(c[a>>2]|0)|0}function jh(a,b,d,e){a=a|0;b=+b;d=+d;e=e|0;ff(c[a>>2]|0,T(b),T(d),e);return}function kh(a){a=a|0;return +(+T(Jd(c[a>>2]|0)))}function lh(a){a=a|0;return +(+T(Ld(c[a>>2]|0)))}function mh(a){a=a|0;return +(+T(Kd(c[a>>2]|0)))}function nh(a){a=a|0;return +(+T(Md(c[a>>2]|0)))}function oh(a){a=a|0;return +(+T(Nd(c[a>>2]|0)))}function ph(a){a=a|0;return +(+T(Od(c[a>>2]|0)))}function qh(a,b){a=a|0;b=b|0;h[a>>3]=+T(Jd(c[b>>2]|0));h[a+8>>3]=+T(Ld(c[b>>2]|0));h[a+16>>3]=+T(Kd(c[b>>2]|0));h[a+24>>3]=+T(Md(c[b>>2]|0));h[a+32>>3]=+T(Nd(c[b>>2]|0));h[a+40>>3]=+T(Od(c[b>>2]|0));return}function rh(a,b){a=a|0;b=b|0;return +(+T(Pd(c[a>>2]|0,b)))}function sh(a,b){a=a|0;b=b|0;return +(+T(Qd(c[a>>2]|0,b)))}function th(a,b){a=a|0;b=b|0;return +(+T(Rd(c[a>>2]|0,b)))}function uh(){return pc()|0}function vh(){wh();xh();yh();zh();Ah();Bh();return}function wh(){ix(11636,5598,1);return}function xh(){ww(10372);return}function yh(){cw(10332);return}function zh(){tv(10248);return}function Ah(){pt(10056);return}function Bh(){Ch(9092);return}function Ch(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=0,Ga=0;b=l;l=l+672|0;d=b+656|0;Ga=b+648|0;Fa=b+640|0;Ea=b+632|0;Da=b+624|0;Ca=b+616|0;Ba=b+608|0;Aa=b+600|0;za=b+592|0;ya=b+584|0;xa=b+576|0;wa=b+568|0;va=b+560|0;ua=b+552|0;ta=b+544|0;sa=b+536|0;ra=b+528|0;qa=b+520|0;pa=b+512|0;oa=b+504|0;na=b+496|0;ma=b+488|0;la=b+480|0;ka=b+472|0;ja=b+464|0;ia=b+456|0;ha=b+448|0;ga=b+440|0;fa=b+432|0;ea=b+424|0;da=b+416|0;ca=b+408|0;ba=b+400|0;aa=b+392|0;$=b+384|0;_=b+376|0;Z=b+368|0;Y=b+360|0;X=b+352|0;W=b+344|0;V=b+336|0;U=b+328|0;T=b+320|0;S=b+312|0;R=b+304|0;Q=b+296|0;P=b+288|0;O=b+280|0;N=b+272|0;M=b+264|0;L=b+256|0;K=b+248|0;J=b+240|0;I=b+232|0;H=b+224|0;G=b+216|0;F=b+208|0;E=b+200|0;D=b+192|0;C=b+184|0;B=b+176|0;A=b+168|0;z=b+160|0;y=b+152|0;x=b+144|0;w=b+136|0;v=b+128|0;u=b+120|0;t=b+112|0;s=b+104|0;r=b+96|0;q=b+88|0;p=b+80|0;o=b+72|0;n=b+64|0;m=b+56|0;k=b+48|0;j=b+40|0;i=b+32|0;h=b+24|0;g=b+16|0;f=b+8|0;e=b;Dh(a,4326);Eh(a,4331,2)|0;Fh(a,4345,3)|0;Gh(a,4362,18)|0;c[Ga>>2]=19;c[Ga+4>>2]=0;c[d>>2]=c[Ga>>2];c[d+4>>2]=c[Ga+4>>2];Hh(a,4370,d)|0;c[Fa>>2]=1;c[Fa+4>>2]=0;c[d>>2]=c[Fa>>2];c[d+4>>2]=c[Fa+4>>2];Ih(a,4376,d)|0;c[Ea>>2]=2;c[Ea+4>>2]=0;c[d>>2]=c[Ea>>2];c[d+4>>2]=c[Ea+4>>2];Jh(a,4386,d)|0;c[Da>>2]=1;c[Da+4>>2]=0;c[d>>2]=c[Da>>2];c[d+4>>2]=c[Da+4>>2];Kh(a,4402,d)|0;c[Ca>>2]=2;c[Ca+4>>2]=0;c[d>>2]=c[Ca>>2];c[d+4>>2]=c[Ca+4>>2];Kh(a,4414,d)|0;c[Ba>>2]=3;c[Ba+4>>2]=0;c[d>>2]=c[Ba>>2];c[d+4>>2]=c[Ba+4>>2];Jh(a,4433,d)|0;c[Aa>>2]=4;c[Aa+4>>2]=0;c[d>>2]=c[Aa>>2];c[d+4>>2]=c[Aa+4>>2];Jh(a,4449,d)|0;c[za>>2]=5;c[za+4>>2]=0;c[d>>2]=c[za>>2];c[d+4>>2]=c[za+4>>2];Jh(a,4463,d)|0;c[ya>>2]=6;c[ya+4>>2]=0;c[d>>2]=c[ya>>2];c[d+4>>2]=c[ya+4>>2];Jh(a,4476,d)|0;c[xa>>2]=7;c[xa+4>>2]=0;c[d>>2]=c[xa>>2];c[d+4>>2]=c[xa+4>>2];Jh(a,4493,d)|0;c[wa>>2]=8;c[wa+4>>2]=0;c[d>>2]=c[wa>>2];c[d+4>>2]=c[wa+4>>2];Jh(a,4505,d)|0;c[va>>2]=3;c[va+4>>2]=0;c[d>>2]=c[va>>2];c[d+4>>2]=c[va+4>>2];Kh(a,4523,d)|0;c[ua>>2]=4;c[ua+4>>2]=0;c[d>>2]=c[ua>>2];c[d+4>>2]=c[ua+4>>2];Kh(a,4533,d)|0;c[ta>>2]=9;c[ta+4>>2]=0;c[d>>2]=c[ta>>2];c[d+4>>2]=c[ta+4>>2];Jh(a,4550,d)|0;c[sa>>2]=10;c[sa+4>>2]=0;c[d>>2]=c[sa>>2];c[d+4>>2]=c[sa+4>>2];Jh(a,4564,d)|0;c[ra>>2]=11;c[ra+4>>2]=0;c[d>>2]=c[ra>>2];c[d+4>>2]=c[ra+4>>2];Jh(a,4576,d)|0;c[qa>>2]=1;c[qa+4>>2]=0;c[d>>2]=c[qa>>2];c[d+4>>2]=c[qa+4>>2];Lh(a,4587,d)|0;c[pa>>2]=2;c[pa+4>>2]=0;c[d>>2]=c[pa>>2];c[d+4>>2]=c[pa+4>>2];Lh(a,4595,d)|0;c[oa>>2]=3;c[oa+4>>2]=0;c[d>>2]=c[oa>>2];c[d+4>>2]=c[oa+4>>2];Lh(a,4608,d)|0;c[na>>2]=4;c[na+4>>2]=0;c[d>>2]=c[na>>2];c[d+4>>2]=c[na+4>>2];Lh(a,4628,d)|0;c[ma>>2]=5;c[ma+4>>2]=0;c[d>>2]=c[ma>>2];c[d+4>>2]=c[ma+4>>2];Lh(a,4640,d)|0;c[la>>2]=6;c[la+4>>2]=0;c[d>>2]=c[la>>2];c[d+4>>2]=c[la+4>>2];Lh(a,4654,d)|0;c[ka>>2]=7;c[ka+4>>2]=0;c[d>>2]=c[ka>>2];c[d+4>>2]=c[ka+4>>2];Lh(a,4663,d)|0;c[ja>>2]=20;c[ja+4>>2]=0;c[d>>2]=c[ja>>2];c[d+4>>2]=c[ja+4>>2];Hh(a,4679,d)|0;c[ia>>2]=8;c[ia+4>>2]=0;c[d>>2]=c[ia>>2];c[d+4>>2]=c[ia+4>>2];Lh(a,4692,d)|0;c[ha>>2]=9;c[ha+4>>2]=0;c[d>>2]=c[ha>>2];c[d+4>>2]=c[ha+4>>2];Lh(a,4702,d)|0;c[ga>>2]=21;c[ga+4>>2]=0;c[d>>2]=c[ga>>2];c[d+4>>2]=c[ga+4>>2];Hh(a,4719,d)|0;c[fa>>2]=10;c[fa+4>>2]=0;c[d>>2]=c[fa>>2];c[d+4>>2]=c[fa+4>>2];Lh(a,4733,d)|0;c[ea>>2]=11;c[ea+4>>2]=0;c[d>>2]=c[ea>>2];c[d+4>>2]=c[ea+4>>2];Lh(a,4745,d)|0;c[da>>2]=12;c[da+4>>2]=0;c[d>>2]=c[da>>2];c[d+4>>2]=c[da+4>>2];Lh(a,4764,d)|0;c[ca>>2]=13;c[ca+4>>2]=0;c[d>>2]=c[ca>>2];c[d+4>>2]=c[ca+4>>2];Lh(a,4777,d)|0;c[ba>>2]=14;c[ba+4>>2]=0;c[d>>2]=c[ba>>2];c[d+4>>2]=c[ba+4>>2];Lh(a,4797,d)|0;c[aa>>2]=15;c[aa+4>>2]=0;c[d>>2]=c[aa>>2];c[d+4>>2]=c[aa+4>>2];Lh(a,4809,d)|0;c[$>>2]=16;c[$+4>>2]=0;c[d>>2]=c[$>>2];c[d+4>>2]=c[$+4>>2];Lh(a,4828,d)|0;c[_>>2]=17;c[_+4>>2]=0;c[d>>2]=c[_>>2];c[d+4>>2]=c[_+4>>2];Lh(a,4841,d)|0;c[Z>>2]=18;c[Z+4>>2]=0;c[d>>2]=c[Z>>2];c[d+4>>2]=c[Z+4>>2];Lh(a,4861,d)|0;c[Y>>2]=5;c[Y+4>>2]=0;c[d>>2]=c[Y>>2];c[d+4>>2]=c[Y+4>>2];Kh(a,4876,d)|0;c[X>>2]=6;c[X+4>>2]=0;c[d>>2]=c[X>>2];c[d+4>>2]=c[X+4>>2];Kh(a,4886,d)|0;c[W>>2]=7;c[W+4>>2]=0;c[d>>2]=c[W>>2];c[d+4>>2]=c[W+4>>2];Kh(a,4897,d)|0;c[V>>2]=4;c[V+4>>2]=0;c[d>>2]=c[V>>2];c[d+4>>2]=c[V+4>>2];Mh(a,4915,d)|0;c[U>>2]=1;c[U+4>>2]=0;c[d>>2]=c[U>>2];c[d+4>>2]=c[U+4>>2];Nh(a,4931,d)|0;c[T>>2]=5;c[T+4>>2]=0;c[d>>2]=c[T>>2];c[d+4>>2]=c[T+4>>2];Mh(a,4943,d)|0;c[S>>2]=6;c[S+4>>2]=0;c[d>>2]=c[S>>2];c[d+4>>2]=c[S+4>>2];Mh(a,4959,d)|0;c[R>>2]=7;c[R+4>>2]=0;c[d>>2]=c[R>>2];c[d+4>>2]=c[R+4>>2];Mh(a,4973,d)|0;c[Q>>2]=8;c[Q+4>>2]=0;c[d>>2]=c[Q>>2];c[d+4>>2]=c[Q+4>>2];Mh(a,4986,d)|0;c[P>>2]=9;c[P+4>>2]=0;c[d>>2]=c[P>>2];c[d+4>>2]=c[P+4>>2];Mh(a,5003,d)|0;c[O>>2]=10;c[O+4>>2]=0;c[d>>2]=c[O>>2];c[d+4>>2]=c[O+4>>2];Mh(a,5015,d)|0;c[N>>2]=2;c[N+4>>2]=0;c[d>>2]=c[N>>2];c[d+4>>2]=c[N+4>>2];Nh(a,5033,d)|0;c[M>>2]=12;c[M+4>>2]=0;c[d>>2]=c[M>>2];c[d+4>>2]=c[M+4>>2];Oh(a,5043,d)|0;c[L>>2]=1;c[L+4>>2]=0;c[d>>2]=c[L>>2];c[d+4>>2]=c[L+4>>2];Ph(a,5056,d)|0;c[K>>2]=2;c[K+4>>2]=0;c[d>>2]=c[K>>2];c[d+4>>2]=c[K+4>>2];Ph(a,5068,d)|0;c[J>>2]=13;c[J+4>>2]=0;c[d>>2]=c[J>>2];c[d+4>>2]=c[J+4>>2];Oh(a,5082,d)|0;c[I>>2]=14;c[I+4>>2]=0;c[d>>2]=c[I>>2];c[d+4>>2]=c[I+4>>2];Oh(a,5091,d)|0;c[H>>2]=15;c[H+4>>2]=0;c[d>>2]=c[H>>2];c[d+4>>2]=c[H+4>>2];Oh(a,5101,d)|0;c[G>>2]=16;c[G+4>>2]=0;c[d>>2]=c[G>>2];c[d+4>>2]=c[G+4>>2];Oh(a,5113,d)|0;c[F>>2]=17;c[F+4>>2]=0;c[d>>2]=c[F>>2];c[d+4>>2]=c[F+4>>2];Oh(a,5126,d)|0;c[E>>2]=18;c[E+4>>2]=0;c[d>>2]=c[E>>2];c[d+4>>2]=c[E+4>>2];Oh(a,5138,d)|0;c[D>>2]=3;c[D+4>>2]=0;c[d>>2]=c[D>>2];c[d+4>>2]=c[D+4>>2];Ph(a,5151,d)|0;c[C>>2]=1;c[C+4>>2]=0;c[d>>2]=c[C>>2];c[d+4>>2]=c[C+4>>2];Qh(a,5166,d)|0;c[B>>2]=11;c[B+4>>2]=0;c[d>>2]=c[B>>2];c[d+4>>2]=c[B+4>>2];Mh(a,5176,d)|0;c[A>>2]=12;c[A+4>>2]=0;c[d>>2]=c[A>>2];c[d+4>>2]=c[A+4>>2];Mh(a,5188,d)|0;c[z>>2]=3;c[z+4>>2]=0;c[d>>2]=c[z>>2];c[d+4>>2]=c[z+4>>2];Nh(a,5199,d)|0;c[y>>2]=4;c[y+4>>2]=0;c[d>>2]=c[y>>2];c[d+4>>2]=c[y+4>>2];Rh(a,5210,d)|0;c[x>>2]=19;c[x+4>>2]=0;c[d>>2]=c[x>>2];c[d+4>>2]=c[x+4>>2];Sh(a,5222,d)|0;c[w>>2]=13;c[w+4>>2]=0;c[d>>2]=c[w>>2];c[d+4>>2]=c[w+4>>2];Th(a,5234,d)|0;c[v>>2]=14;c[v+4>>2]=0;c[d>>2]=c[v>>2];c[d+4>>2]=c[v+4>>2];Uh(a,5248,d)|0;c[u>>2]=3;c[u+4>>2]=0;c[d>>2]=c[u>>2];c[d+4>>2]=c[u+4>>2];Vh(a,5258,d)|0;c[t>>2]=20;c[t+4>>2]=0;c[d>>2]=c[t>>2];c[d+4>>2]=c[t+4>>2];Wh(a,5267,d)|0;c[s>>2]=22;c[s+4>>2]=0;c[d>>2]=c[s>>2];c[d+4>>2]=c[s+4>>2];Hh(a,5282,d)|0;c[r>>2]=23;c[r+4>>2]=0;c[d>>2]=c[r>>2];c[d+4>>2]=c[r+4>>2];Hh(a,5299,d)|0;c[q>>2]=15;c[q+4>>2]=0;c[d>>2]=c[q>>2];c[d+4>>2]=c[q+4>>2];Xh(a,5309,d)|0;c[p>>2]=1;c[p+4>>2]=0;c[d>>2]=c[p>>2];c[d+4>>2]=c[p+4>>2];Yh(a,5317,d)|0;c[o>>2]=4;c[o+4>>2]=0;c[d>>2]=c[o>>2];c[d+4>>2]=c[o+4>>2];Ph(a,5333,d)|0;c[n>>2]=5;c[n+4>>2]=0;c[d>>2]=c[n>>2];c[d+4>>2]=c[n+4>>2];Ph(a,5349,d)|0;c[m>>2]=6;c[m+4>>2]=0;c[d>>2]=c[m>>2];c[d+4>>2]=c[m+4>>2];Ph(a,5366,d)|0;c[k>>2]=7;c[k+4>>2]=0;c[d>>2]=c[k>>2];c[d+4>>2]=c[k+4>>2];Ph(a,5381,d)|0;c[j>>2]=8;c[j+4>>2]=0;c[d>>2]=c[j>>2];c[d+4>>2]=c[j+4>>2];Ph(a,5399,d)|0;c[i>>2]=9;c[i+4>>2]=0;c[d>>2]=c[i>>2];c[d+4>>2]=c[i+4>>2];Ph(a,5416,d)|0;c[h>>2]=21;c[h+4>>2]=0;c[d>>2]=c[h>>2];c[d+4>>2]=c[h+4>>2];Zh(a,5434,d)|0;c[g>>2]=2;c[g+4>>2]=0;c[d>>2]=c[g>>2];c[d+4>>2]=c[g+4>>2];Qh(a,5452,d)|0;c[f>>2]=3;c[f+4>>2]=0;c[d>>2]=c[f>>2];c[d+4>>2]=c[f+4>>2];Qh(a,5470,d)|0;c[e>>2]=4;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];Qh(a,5488,d)|0;l=b;return}function Dh(a,b){a=a|0;b=b|0;var d=0;d=et()|0;c[a>>2]=d;ft(d,b);Kx(c[a>>2]|0);return}function Eh(a,b,c){a=a|0;b=b|0;c=c|0;Ks(a,$h(b)|0,c,0);return a|0}function Fh(a,b,c){a=a|0;b=b|0;c=c|0;ks(a,$h(b)|0,c,0);return a|0}function Gh(a,b,c){a=a|0;b=b|0;c=c|0;Qr(a,$h(b)|0,c,0);return a|0}function Hh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=c[d+4>>2]|0;c[g>>2]=c[d>>2];c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];sr(a,b,f);l=e;return a|0}function Ih(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=c[d+4>>2]|0;c[g>>2]=c[d>>2];c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];Tq(a,b,f);l=e;return a|0}function Jh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=c[d+4>>2]|0;c[g>>2]=c[d>>2];c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];vq(a,b,f);l=e;return a|0}function Kh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=c[d+4>>2]|0;c[g>>2]=c[d>>2];c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];Zp(a,b,f);l=e;return a|0}function Lh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=c[d+4>>2]|0;c[g>>2]=c[d>>2];c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];Bp(a,b,f);l=e;return a|0}function Mh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=c[d+4>>2]|0;c[g>>2]=c[d>>2];c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];dp(a,b,f);l=e;return a|0}function Nh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=c[d+4>>2]|0;c[g>>2]=c[d>>2];c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];Ho(a,b,f);l=e;return a|0}function Oh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=c[d+4>>2]|0;c[g>>2]=c[d>>2];c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];Vn(a,b,f);l=e;return a|0}function Ph(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=c[d+4>>2]|0;c[g>>2]=c[d>>2];c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];xn(a,b,f);l=e;return a|0}function Qh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=c[d+4>>2]|0;c[g>>2]=c[d>>2];c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];_m(a,b,f);l=e;return a|0}function Rh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=c[d+4>>2]|0;c[g>>2]=c[d>>2];c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];Cm(a,b,f);l=e;return a|0}function Sh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=c[d+4>>2]|0;c[g>>2]=c[d>>2];c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];bm(a,b,f);l=e;return a|0}function Th(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=c[d+4>>2]|0;c[g>>2]=c[d>>2];c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];El(a,b,f);l=e;return a|0}function Uh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=c[d+4>>2]|0;c[g>>2]=c[d>>2];c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];gl(a,b,f);l=e;return a|0}function Vh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=c[d+4>>2]|0;c[g>>2]=c[d>>2];c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];Gk(a,b,f);l=e;return a|0}function Wh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=c[d+4>>2]|0;c[g>>2]=c[d>>2];c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];dk(a,b,f);l=e;return a|0}function Xh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=c[d+4>>2]|0;c[g>>2]=c[d>>2];c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];Gj(a,b,f);l=e;return a|0}function Yh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=c[d+4>>2]|0;c[g>>2]=c[d>>2];c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];cj(a,b,f);l=e;return a|0}function Zh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=c[d+4>>2]|0;c[g>>2]=c[d>>2];c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];_h(a,b,f);l=e;return a|0}function _h(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+16|0;f=e+8|0;g=e;i=c[d>>2]|0;h=c[d+4>>2]|0;d=$h(b)|0;c[g>>2]=i;c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];ai(a,d,f,1);l=e;return}function $h(a){a=a|0;return a|0}function ai(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;f=l;l=l+32|0;g=f+16|0;m=f+8|0;i=f;k=c[d>>2]|0;j=c[d+4>>2]|0;h=c[a>>2]|0;a=bi()|0;c[m>>2]=k;c[m+4>>2]=j;c[g>>2]=c[m>>2];c[g+4>>2]=c[m+4>>2];d=ci(g)|0;c[i>>2]=k;c[i+4>>2]=j;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];ei(h,b,a,d,di(g,e)|0,e);l=f;return}function bi(){var b=0,d=0;if(!(a[8584]|0)){ui(9096);Ja(24,9096,o|0)|0;d=8584;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(9096)|0)){b=9096;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));ui(9096)}return 9096}function ci(a){a=a|0;return 0}function di(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+48|0;e=k+24|0;f=k+16|0;g=k+32|0;h=k;i=k+8|0;m=c[a+4>>2]|0;c[h>>2]=c[a>>2];d=h+4|0;c[d>>2]=m;m=bi()|0;j=m+24|0;c[i>>2]=ii(b,4)|0;a=m+28|0;if((c[a>>2]|0)>>>0<(c[m+32>>2]|0)>>>0){ji(g,j,1);b=c[a>>2]|0;d=c[d>>2]|0;m=c[i>>2]|0;c[f>>2]=c[h>>2];c[f+4>>2]=d;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];ki(b,e,m);li(g);m=(c[a>>2]|0)+12|0;c[a>>2]=m;a=m}else{mi(j,h,i);a=c[a>>2]|0}l=k;return ((a-(c[j>>2]|0)|0)/12|0)+-1|0}function ei(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0;h=l;l=l+32|0;o=h+24|0;n=h+20|0;j=h+16|0;m=h+12|0;k=h+8|0;i=h+4|0;p=h;c[n>>2]=b;c[j>>2]=d;c[m>>2]=e;c[k>>2]=f;c[i>>2]=g;g=a+28|0;c[p>>2]=c[g>>2];c[o>>2]=c[p>>2];fi(a+24|0,o,n,m,k,j,i)|0;c[g>>2]=c[c[g>>2]>>2];l=h;return}function fi(a,b,d,e,f,g,h){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;a=gi(b)|0;b=mF(24)|0;hi(b+4|0,c[d>>2]|0,c[e>>2]|0,c[f>>2]|0,c[g>>2]|0,c[h>>2]|0);c[b>>2]=c[a>>2];c[a>>2]=b;return b|0}function gi(a){a=a|0;return c[a>>2]|0}function hi(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;c[a>>2]=b;c[a+4>>2]=d;c[a+8>>2]=e;c[a+12>>2]=f;c[a+16>>2]=g;return}function ii(a,b){a=a|0;b=b|0;return b|a|0}function ji(a,b,c){a=a|0;b=b|0;c=c|0;return}function ki(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=c[b+4>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=e;c[a+8>>2]=d;return}function li(a){a=a|0;return}function mi(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;k=l;l=l+48|0;e=k+32|0;h=k+24|0;i=k;j=a+4|0;f=(((c[j>>2]|0)-(c[a>>2]|0)|0)/12|0)+1|0;g=ni(a)|0;if(g>>>0<f>>>0)fF(a);m=c[a>>2]|0;o=((c[a+8>>2]|0)-m|0)/12|0;n=o<<1;oi(i,o>>>0<g>>>1>>>0?(n>>>0<f>>>0?f:n):g,((c[j>>2]|0)-m|0)/12|0,a+8|0);j=i+8|0;g=c[j>>2]|0;f=c[b+4>>2]|0;d=c[d>>2]|0;c[h>>2]=c[b>>2];c[h+4>>2]=f;c[e>>2]=c[h>>2];c[e+4>>2]=c[h+4>>2];ki(g,e,d);c[j>>2]=(c[j>>2]|0)+12;pi(a,i);qi(i);l=k;return}function ni(a){a=a|0;return 357913941}function oi(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>357913941)Ia(5761,5798,1734,5908);else{f=mF(b*12|0)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d*12|0)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b*12|0);return}function pi(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;ri(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(((f|0)/-12|0)*12|0)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];si(a,((c[h>>2]|0)-(c[a>>2]|0)|0)/12|0);return}function qi(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~(((e+-12-b|0)>>>0)/12|0)*12|0);a=c[a>>2]|0;if(a|0)oF(a);return}function ri(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;ti(a,e,b,e+((((c[a+4>>2]|0)-d|0)/12|0)*12|0)|0,b);return}function si(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;ti(a,d,e,e,d+(b*12|0)|0);return}function ti(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function ui(a){a=a|0;yi(a);return}function vi(a){a=a|0;xi(a+24|0);return}function wi(a){a=a|0;return c[a>>2]|0}function xi(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);oF(d)}return}function yi(a){a=a|0;var b=0;b=zi()|0;Ci(a,2,4,b,Ai()|0,0);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function zi(){return 9188}function Ai(){return 1196}function Bi(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=l;l=l+16|0;e=d+8|0;f=d;g=Di(a)|0;a=c[g+4>>2]|0;c[f>>2]=c[g>>2];c[f+4>>2]=a;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];b=Ei(b,e)|0;l=d;return b|0}function Ci(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;c[a>>2]=b;c[a+4>>2]=d;c[a+8>>2]=e;c[a+12>>2]=f;c[a+16>>2]=g;return}function Di(a){a=a|0;return (c[(bi()|0)+24>>2]|0)+(a*12|0)|0}function Ei(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;f=l;l=l+48|0;e=f;d=c[b>>2]|0;b=c[b+4>>2]|0;a=a+(b>>1)|0;if(b&1)d=c[(c[a>>2]|0)+d>>2]|0;ub[d&31](e,a);e=Fi(e)|0;l=f;return e|0}function Fi(a){a=a|0;var b=0,c=0,d=0,e=0;e=l;l=l+32|0;b=e+12|0;c=e;d=Hi(Gi()|0)|0;if(!d)a=Mi(a)|0;else{Ii(b,d);Ji(c,b);Ki(a,c);a=Li(b)|0}l=e;return a|0}function Gi(){var b=0;if(!(a[8600]|0)){Xi(9144);Ja(25,9144,o|0)|0;b=8600;c[b>>2]=1;c[b+4>>2]=0}return 9144}function Hi(a){a=a|0;return c[a+36>>2]|0}function Ii(a,b){a=a|0;b=b|0;c[a>>2]=b;c[a+4>>2]=a;c[a+8>>2]=0;return}function Ji(a,b){a=a|0;b=b|0;c[a>>2]=c[b>>2];c[a+4>>2]=c[b+4>>2];c[a+8>>2]=0;return}function Ki(a,b){a=a|0;b=b|0;Ri(b,a,a+8|0,a+16|0,a+24|0,a+32|0,a+40|0)|0;return}function Li(a){a=a|0;return c[(c[a+4>>2]|0)+8>>2]|0}function Mi(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;j=l;l=l+16|0;d=j+4|0;e=j;f=wA(8)|0;g=f;h=mF(48)|0;i=h;b=i+48|0;do{c[i>>2]=c[a>>2];i=i+4|0;a=a+4|0}while((i|0)<(b|0));b=g+4|0;c[b>>2]=h;i=mF(8)|0;h=c[b>>2]|0;c[e>>2]=0;c[d>>2]=c[e>>2];Ni(i,h,d);c[f>>2]=i;l=j;return g|0}function Ni(a,b,d){a=a|0;b=b|0;d=d|0;c[a>>2]=b;d=mF(16)|0;c[d+4>>2]=0;c[d+8>>2]=0;c[d>>2]=1148;c[d+12>>2]=b;c[a+4>>2]=d;return}function Oi(a){a=a|0;gF(a);oF(a);return}function Pi(a){a=a|0;a=c[a+12>>2]|0;if(a|0)oF(a);return}function Qi(a){a=a|0;oF(a);return}function Ri(a,b,d,e,f,g,h){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;g=Si(c[a>>2]|0,b,d,e,f,g,h)|0;h=a+4|0;c[(c[h>>2]|0)+8>>2]=g;return c[(c[h>>2]|0)+8>>2]|0}function Si(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;var i=0,j=0;i=l;l=l+16|0;j=i;ED(j);a=Rg(a)|0;g=Ti(a,+h[b>>3],+h[c>>3],+h[d>>3],+h[e>>3],+h[f>>3],+h[g>>3])|0;GD(j);l=i;return g|0}function Ti(a,b,c,d,e,f,g){a=a|0;b=+b;c=+c;d=+d;e=+e;f=+f;g=+g;var h=0;h=Ug(Ui()|0)|0;b=+Vg(b);c=+Vg(c);d=+Vg(d);e=+Vg(e);f=+Vg(f);return xa(0,h|0,a|0,+b,+c,+d,+e,+f,+(+Vg(g)))|0}function Ui(){var b=0;if(!(a[8592]|0)){Vi(9132);b=8592;c[b>>2]=1;c[b+4>>2]=0}return 9132}function Vi(a){a=a|0;eh(a,Wi()|0,6);return}function Wi(){return 1168}function Xi(a){a=a|0;bj(a);return}function Yi(a){a=a|0;Zi(a+24|0);_i(a+16|0);return}function Zi(a){a=a|0;aj(a);return}function _i(a){a=a|0;$i(a);return}function $i(a){a=a|0;var b=0,d=0;b=c[a>>2]|0;if(b|0)do{d=b;b=c[b>>2]|0;oF(d)}while((b|0)!=0);c[a>>2]=0;return}function aj(a){a=a|0;var b=0,d=0;b=c[a>>2]|0;if(b|0)do{d=b;b=c[b>>2]|0;oF(d)}while((b|0)!=0);c[a>>2]=0;return}function bj(b){b=b|0;var d=0;c[b+16>>2]=0;c[b+20>>2]=0;d=b+24|0;c[d>>2]=0;c[b+28>>2]=d;c[b+36>>2]=0;a[b+40>>0]=0;a[b+41>>0]=0;return}function cj(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+16|0;f=e+8|0;g=e;i=c[d>>2]|0;h=c[d+4>>2]|0;d=$h(b)|0;c[g>>2]=i;c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];dj(a,d,f,0);l=e;return}function dj(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;f=l;l=l+32|0;g=f+16|0;m=f+8|0;i=f;k=c[d>>2]|0;j=c[d+4>>2]|0;h=c[a>>2]|0;a=ej()|0;c[m>>2]=k;c[m+4>>2]=j;c[g>>2]=c[m>>2];c[g+4>>2]=c[m+4>>2];d=fj(g)|0;c[i>>2]=k;c[i+4>>2]=j;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];ei(h,b,a,d,gj(g,e)|0,e);l=f;return}function ej(){var b=0,d=0;if(!(a[8608]|0)){sj(9192);Ja(26,9192,o|0)|0;d=8608;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(9192)|0)){b=9192;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));sj(9192)}return 9192}function fj(a){a=a|0;return 0}function gj(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+48|0;e=k+24|0;f=k+16|0;g=k+32|0;h=k;i=k+8|0;m=c[a+4>>2]|0;c[h>>2]=c[a>>2];d=h+4|0;c[d>>2]=m;m=ej()|0;j=m+24|0;c[i>>2]=ii(b,4)|0;a=m+28|0;if((c[a>>2]|0)>>>0<(c[m+32>>2]|0)>>>0){hj(g,j,1);b=c[a>>2]|0;d=c[d>>2]|0;m=c[i>>2]|0;c[f>>2]=c[h>>2];c[f+4>>2]=d;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];ij(b,e,m);jj(g);m=(c[a>>2]|0)+12|0;c[a>>2]=m;a=m}else{kj(j,h,i);a=c[a>>2]|0}l=k;return ((a-(c[j>>2]|0)|0)/12|0)+-1|0}function hj(a,b,c){a=a|0;b=b|0;c=c|0;return}function ij(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=c[b+4>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=e;c[a+8>>2]=d;return}function jj(a){a=a|0;return}function kj(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;k=l;l=l+48|0;e=k+32|0;h=k+24|0;i=k;j=a+4|0;f=(((c[j>>2]|0)-(c[a>>2]|0)|0)/12|0)+1|0;g=lj(a)|0;if(g>>>0<f>>>0)fF(a);m=c[a>>2]|0;o=((c[a+8>>2]|0)-m|0)/12|0;n=o<<1;mj(i,o>>>0<g>>>1>>>0?(n>>>0<f>>>0?f:n):g,((c[j>>2]|0)-m|0)/12|0,a+8|0);j=i+8|0;g=c[j>>2]|0;f=c[b+4>>2]|0;d=c[d>>2]|0;c[h>>2]=c[b>>2];c[h+4>>2]=f;c[e>>2]=c[h>>2];c[e+4>>2]=c[h+4>>2];ij(g,e,d);c[j>>2]=(c[j>>2]|0)+12;nj(a,i);oj(i);l=k;return}function lj(a){a=a|0;return 357913941}function mj(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>357913941)Ia(5761,5798,1734,5908);else{f=mF(b*12|0)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d*12|0)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b*12|0);return}function nj(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;pj(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(((f|0)/-12|0)*12|0)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];qj(a,((c[h>>2]|0)-(c[a>>2]|0)|0)/12|0);return}function oj(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~(((e+-12-b|0)>>>0)/12|0)*12|0);a=c[a>>2]|0;if(a|0)oF(a);return}function pj(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;rj(a,e,b,e+((((c[a+4>>2]|0)-d|0)/12|0)*12|0)|0,b);return}function qj(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;rj(a,d,e,e,d+(b*12|0)|0);return}function rj(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function sj(a){a=a|0;vj(a);return}function tj(a){a=a|0;uj(a+24|0);return}function uj(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);oF(d)}return}function vj(a){a=a|0;var b=0;b=zi()|0;Ci(a,2,1,b,wj()|0,3);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function wj(){return 1200}function xj(a,b,d,e,f){a=a|0;b=b|0;d=+d;e=+e;f=f|0;var g=0,h=0,i=0,j=0;g=l;l=l+16|0;h=g+8|0;i=g;j=yj(a)|0;a=c[j+4>>2]|0;c[i>>2]=c[j>>2];c[i+4>>2]=a;c[h>>2]=c[i>>2];c[h+4>>2]=c[i+4>>2];zj(b,h,d,e,f);l=g;return}function yj(a){a=a|0;return (c[(ej()|0)+24>>2]|0)+(a*12|0)|0}function zj(a,b,d,e,f){a=a|0;b=b|0;d=+d;e=+e;f=f|0;var g=0,h=0,i=0,j=0,k=0;k=l;l=l+16|0;h=k+2|0;i=k+1|0;j=k;g=c[b>>2]|0;b=c[b+4>>2]|0;a=a+(b>>1)|0;if(b&1)g=c[(c[a>>2]|0)+g>>2]|0;Aj(h,d);d=+Bj(h,d);Aj(i,e);e=+Bj(i,e);Cj(j,f);j=Dj(j,f)|0;wb[g&1](a,d,e,j);l=k;return}function Aj(a,b){a=a|0;b=+b;return}function Bj(a,b){a=a|0;b=+b;return +(+Fj(b))}function Cj(a,b){a=a|0;b=b|0;return}function Dj(a,b){a=a|0;b=b|0;return Ej(b)|0}function Ej(a){a=a|0;return a|0}function Fj(a){a=+a;return +a}function Gj(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+16|0;f=e+8|0;g=e;i=c[d>>2]|0;h=c[d+4>>2]|0;d=$h(b)|0;c[g>>2]=i;c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];Hj(a,d,f,1);l=e;return}function Hj(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;f=l;l=l+32|0;g=f+16|0;m=f+8|0;i=f;k=c[d>>2]|0;j=c[d+4>>2]|0;h=c[a>>2]|0;a=Ij()|0;c[m>>2]=k;c[m+4>>2]=j;c[g>>2]=c[m>>2];c[g+4>>2]=c[m+4>>2];d=Jj(g)|0;c[i>>2]=k;c[i+4>>2]=j;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];ei(h,b,a,d,Kj(g,e)|0,e);l=f;return}function Ij(){var b=0,d=0;if(!(a[8616]|0)){Wj(9228);Ja(27,9228,o|0)|0;d=8616;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(9228)|0)){b=9228;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));Wj(9228)}return 9228}function Jj(a){a=a|0;return 0}function Kj(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+48|0;e=k+24|0;f=k+16|0;g=k+32|0;h=k;i=k+8|0;m=c[a+4>>2]|0;c[h>>2]=c[a>>2];d=h+4|0;c[d>>2]=m;m=Ij()|0;j=m+24|0;c[i>>2]=ii(b,4)|0;a=m+28|0;if((c[a>>2]|0)>>>0<(c[m+32>>2]|0)>>>0){Lj(g,j,1);b=c[a>>2]|0;d=c[d>>2]|0;m=c[i>>2]|0;c[f>>2]=c[h>>2];c[f+4>>2]=d;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];Mj(b,e,m);Nj(g);m=(c[a>>2]|0)+12|0;c[a>>2]=m;a=m}else{Oj(j,h,i);a=c[a>>2]|0}l=k;return ((a-(c[j>>2]|0)|0)/12|0)+-1|0}function Lj(a,b,c){a=a|0;b=b|0;c=c|0;return}function Mj(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=c[b+4>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=e;c[a+8>>2]=d;return}function Nj(a){a=a|0;return}function Oj(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;k=l;l=l+48|0;e=k+32|0;h=k+24|0;i=k;j=a+4|0;f=(((c[j>>2]|0)-(c[a>>2]|0)|0)/12|0)+1|0;g=Pj(a)|0;if(g>>>0<f>>>0)fF(a);m=c[a>>2]|0;o=((c[a+8>>2]|0)-m|0)/12|0;n=o<<1;Qj(i,o>>>0<g>>>1>>>0?(n>>>0<f>>>0?f:n):g,((c[j>>2]|0)-m|0)/12|0,a+8|0);j=i+8|0;g=c[j>>2]|0;f=c[b+4>>2]|0;d=c[d>>2]|0;c[h>>2]=c[b>>2];c[h+4>>2]=f;c[e>>2]=c[h>>2];c[e+4>>2]=c[h+4>>2];Mj(g,e,d);c[j>>2]=(c[j>>2]|0)+12;Rj(a,i);Sj(i);l=k;return}function Pj(a){a=a|0;return 357913941}function Qj(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>357913941)Ia(5761,5798,1734,5908);else{f=mF(b*12|0)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d*12|0)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b*12|0);return}function Rj(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;Tj(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(((f|0)/-12|0)*12|0)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];Uj(a,((c[h>>2]|0)-(c[a>>2]|0)|0)/12|0);return}function Sj(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~(((e+-12-b|0)>>>0)/12|0)*12|0);a=c[a>>2]|0;if(a|0)oF(a);return}function Tj(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;Vj(a,e,b,e+((((c[a+4>>2]|0)-d|0)/12|0)*12|0)|0,b);return}function Uj(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;Vj(a,d,e,e,d+(b*12|0)|0);return}function Vj(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function Wj(a){a=a|0;Zj(a);return}function Xj(a){a=a|0;Yj(a+24|0);return}function Yj(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);oF(d)}return}function Zj(a){a=a|0;var b=0;b=zi()|0;Ci(a,2,5,b,_j()|0,0);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function _j(){return 1216}function $j(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=l;l=l+16|0;e=d+8|0;f=d;g=ak(a)|0;a=c[g+4>>2]|0;c[f>>2]=c[g>>2];c[f+4>>2]=a;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];b=bk(b,e)|0;l=d;return b|0}function ak(a){a=a|0;return (c[(Ij()|0)+24>>2]|0)+(a*12|0)|0}function bk(a,b){a=a|0;b=b|0;var d=0;d=c[b>>2]|0;b=c[b+4>>2]|0;a=a+(b>>1)|0;if(b&1)d=c[(c[a>>2]|0)+d>>2]|0;return ck(vb[d&31](a)|0)|0}function ck(a){a=a|0;return a&1|0}function dk(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+16|0;f=e+8|0;g=e;i=c[d>>2]|0;h=c[d+4>>2]|0;d=$h(b)|0;c[g>>2]=i;c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];ek(a,d,f,0);l=e;return}function ek(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;f=l;l=l+32|0;g=f+16|0;m=f+8|0;i=f;k=c[d>>2]|0;j=c[d+4>>2]|0;h=c[a>>2]|0;a=fk()|0;c[m>>2]=k;c[m+4>>2]=j;c[g>>2]=c[m>>2];c[g+4>>2]=c[m+4>>2];d=gk(g)|0;c[i>>2]=k;c[i+4>>2]=j;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];ei(h,b,a,d,hk(g,e)|0,e);l=f;return}function fk(){var b=0,d=0;if(!(a[8624]|0)){tk(9264);Ja(28,9264,o|0)|0;d=8624;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(9264)|0)){b=9264;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));tk(9264)}return 9264}function gk(a){a=a|0;return 0}function hk(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+48|0;e=k+24|0;f=k+16|0;g=k+32|0;h=k;i=k+8|0;m=c[a+4>>2]|0;c[h>>2]=c[a>>2];d=h+4|0;c[d>>2]=m;m=fk()|0;j=m+24|0;c[i>>2]=ii(b,4)|0;a=m+28|0;if((c[a>>2]|0)>>>0<(c[m+32>>2]|0)>>>0){ik(g,j,1);b=c[a>>2]|0;d=c[d>>2]|0;m=c[i>>2]|0;c[f>>2]=c[h>>2];c[f+4>>2]=d;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];jk(b,e,m);kk(g);m=(c[a>>2]|0)+12|0;c[a>>2]=m;a=m}else{lk(j,h,i);a=c[a>>2]|0}l=k;return ((a-(c[j>>2]|0)|0)/12|0)+-1|0}function ik(a,b,c){a=a|0;b=b|0;c=c|0;return}function jk(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=c[b+4>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=e;c[a+8>>2]=d;return}function kk(a){a=a|0;return}function lk(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;k=l;l=l+48|0;e=k+32|0;h=k+24|0;i=k;j=a+4|0;f=(((c[j>>2]|0)-(c[a>>2]|0)|0)/12|0)+1|0;g=mk(a)|0;if(g>>>0<f>>>0)fF(a);m=c[a>>2]|0;o=((c[a+8>>2]|0)-m|0)/12|0;n=o<<1;nk(i,o>>>0<g>>>1>>>0?(n>>>0<f>>>0?f:n):g,((c[j>>2]|0)-m|0)/12|0,a+8|0);j=i+8|0;g=c[j>>2]|0;f=c[b+4>>2]|0;d=c[d>>2]|0;c[h>>2]=c[b>>2];c[h+4>>2]=f;c[e>>2]=c[h>>2];c[e+4>>2]=c[h+4>>2];jk(g,e,d);c[j>>2]=(c[j>>2]|0)+12;ok(a,i);pk(i);l=k;return}function mk(a){a=a|0;return 357913941}function nk(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>357913941)Ia(5761,5798,1734,5908);else{f=mF(b*12|0)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d*12|0)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b*12|0);return}function ok(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;qk(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(((f|0)/-12|0)*12|0)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];rk(a,((c[h>>2]|0)-(c[a>>2]|0)|0)/12|0);return}function pk(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~(((e+-12-b|0)>>>0)/12|0)*12|0);a=c[a>>2]|0;if(a|0)oF(a);return}function qk(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;sk(a,e,b,e+((((c[a+4>>2]|0)-d|0)/12|0)*12|0)|0,b);return}function rk(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;sk(a,d,e,e,d+(b*12|0)|0);return}function sk(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function tk(a){a=a|0;wk(a);return}function uk(a){a=a|0;vk(a+24|0);return}function vk(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);oF(d)}return}function wk(a){a=a|0;var b=0;b=zi()|0;Ci(a,2,5,b,xk()|0,1);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function xk(){return 1220}function yk(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=zk(a)|0;a=c[h+4>>2]|0;c[g>>2]=c[h>>2];c[g+4>>2]=a;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];Ak(b,f,d);l=e;return}function zk(a){a=a|0;return (c[(fk()|0)+24>>2]|0)+(a*12|0)|0}function Ak(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;g=l;l=l+16|0;f=g;e=c[b>>2]|0;b=c[b+4>>2]|0;a=a+(b>>1)|0;if(b&1)e=c[(c[a>>2]|0)+e>>2]|0;Bk(f,d);d=Ck(f,d)|0;ub[e&31](a,d);Dk(f);l=g;return}function Bk(a,b){a=a|0;b=b|0;Ek(a,b);return}function Ck(a,b){a=a|0;b=b|0;return a|0}function Dk(a){a=a|0;uf(a);return}function Ek(a,b){a=a|0;b=b|0;Fk(a,b);return}function Fk(a,b){a=a|0;b=b|0;c[a>>2]=b;return}function Gk(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+16|0;f=e+8|0;g=e;i=c[d>>2]|0;h=c[d+4>>2]|0;d=$h(b)|0;c[g>>2]=i;c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];Hk(a,d,f,0);l=e;return}function Hk(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;f=l;l=l+32|0;g=f+16|0;m=f+8|0;i=f;k=c[d>>2]|0;j=c[d+4>>2]|0;h=c[a>>2]|0;a=Ik()|0;c[m>>2]=k;c[m+4>>2]=j;c[g>>2]=c[m>>2];c[g+4>>2]=c[m+4>>2];d=Jk(g)|0;c[i>>2]=k;c[i+4>>2]=j;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];ei(h,b,a,d,Kk(g,e)|0,e);l=f;return}function Ik(){var b=0,d=0;if(!(a[8632]|0)){Wk(9300);Ja(29,9300,o|0)|0;d=8632;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(9300)|0)){b=9300;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));Wk(9300)}return 9300}function Jk(a){a=a|0;return 0}function Kk(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+48|0;e=k+24|0;f=k+16|0;g=k+32|0;h=k;i=k+8|0;m=c[a+4>>2]|0;c[h>>2]=c[a>>2];d=h+4|0;c[d>>2]=m;m=Ik()|0;j=m+24|0;c[i>>2]=ii(b,4)|0;a=m+28|0;if((c[a>>2]|0)>>>0<(c[m+32>>2]|0)>>>0){Lk(g,j,1);b=c[a>>2]|0;d=c[d>>2]|0;m=c[i>>2]|0;c[f>>2]=c[h>>2];c[f+4>>2]=d;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];Mk(b,e,m);Nk(g);m=(c[a>>2]|0)+12|0;c[a>>2]=m;a=m}else{Ok(j,h,i);a=c[a>>2]|0}l=k;return ((a-(c[j>>2]|0)|0)/12|0)+-1|0}function Lk(a,b,c){a=a|0;b=b|0;c=c|0;return}function Mk(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=c[b+4>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=e;c[a+8>>2]=d;return}function Nk(a){a=a|0;return}function Ok(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;k=l;l=l+48|0;e=k+32|0;h=k+24|0;i=k;j=a+4|0;f=(((c[j>>2]|0)-(c[a>>2]|0)|0)/12|0)+1|0;g=Pk(a)|0;if(g>>>0<f>>>0)fF(a);m=c[a>>2]|0;o=((c[a+8>>2]|0)-m|0)/12|0;n=o<<1;Qk(i,o>>>0<g>>>1>>>0?(n>>>0<f>>>0?f:n):g,((c[j>>2]|0)-m|0)/12|0,a+8|0);j=i+8|0;g=c[j>>2]|0;f=c[b+4>>2]|0;d=c[d>>2]|0;c[h>>2]=c[b>>2];c[h+4>>2]=f;c[e>>2]=c[h>>2];c[e+4>>2]=c[h+4>>2];Mk(g,e,d);c[j>>2]=(c[j>>2]|0)+12;Rk(a,i);Sk(i);l=k;return}function Pk(a){a=a|0;return 357913941}function Qk(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>357913941)Ia(5761,5798,1734,5908);else{f=mF(b*12|0)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d*12|0)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b*12|0);return}function Rk(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;Tk(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(((f|0)/-12|0)*12|0)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];Uk(a,((c[h>>2]|0)-(c[a>>2]|0)|0)/12|0);return}function Sk(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~(((e+-12-b|0)>>>0)/12|0)*12|0);a=c[a>>2]|0;if(a|0)oF(a);return}function Tk(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;Vk(a,e,b,e+((((c[a+4>>2]|0)-d|0)/12|0)*12|0)|0,b);return}function Uk(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;Vk(a,d,e,e,d+(b*12|0)|0);return}function Vk(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function Wk(a){a=a|0;Zk(a);return}function Xk(a){a=a|0;Yk(a+24|0);return}function Yk(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);oF(d)}return}function Zk(a){a=a|0;var b=0;b=zi()|0;Ci(a,2,5,b,_k()|0,1);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function _k(){return 1236}function $k(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=al(a)|0;a=c[h+4>>2]|0;c[g>>2]=c[h>>2];c[g+4>>2]=a;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];d=bl(b,f,d)|0;l=e;return d|0}function al(a){a=a|0;return (c[(Ik()|0)+24>>2]|0)+(a*12|0)|0}function bl(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;g=l;l=l+16|0;f=g;e=c[b>>2]|0;b=c[b+4>>2]|0;a=a+(b>>1)|0;if(b&1)e=c[(c[a>>2]|0)+e>>2]|0;cl(f,d);f=dl(f,d)|0;f=el(Cb[e&15](a,f)|0)|0;l=g;return f|0}function cl(a,b){a=a|0;b=b|0;return}function dl(a,b){a=a|0;b=b|0;return fl(b)|0}function el(a){a=a|0;return a|0}function fl(a){a=a|0;return a|0}function gl(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+16|0;f=e+8|0;g=e;i=c[d>>2]|0;h=c[d+4>>2]|0;d=$h(b)|0;c[g>>2]=i;c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];hl(a,d,f,0);l=e;return}function hl(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;f=l;l=l+32|0;g=f+16|0;m=f+8|0;i=f;k=c[d>>2]|0;j=c[d+4>>2]|0;h=c[a>>2]|0;a=il()|0;c[m>>2]=k;c[m+4>>2]=j;c[g>>2]=c[m>>2];c[g+4>>2]=c[m+4>>2];d=jl(g)|0;c[i>>2]=k;c[i+4>>2]=j;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];ei(h,b,a,d,kl(g,e)|0,e);l=f;return}function il(){var b=0,d=0;if(!(a[8640]|0)){wl(9336);Ja(30,9336,o|0)|0;d=8640;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(9336)|0)){b=9336;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));wl(9336)}return 9336}function jl(a){a=a|0;return 0}function kl(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+48|0;e=k+24|0;f=k+16|0;g=k+32|0;h=k;i=k+8|0;m=c[a+4>>2]|0;c[h>>2]=c[a>>2];d=h+4|0;c[d>>2]=m;m=il()|0;j=m+24|0;c[i>>2]=ii(b,4)|0;a=m+28|0;if((c[a>>2]|0)>>>0<(c[m+32>>2]|0)>>>0){ll(g,j,1);b=c[a>>2]|0;d=c[d>>2]|0;m=c[i>>2]|0;c[f>>2]=c[h>>2];c[f+4>>2]=d;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];ml(b,e,m);nl(g);m=(c[a>>2]|0)+12|0;c[a>>2]=m;a=m}else{ol(j,h,i);a=c[a>>2]|0}l=k;return ((a-(c[j>>2]|0)|0)/12|0)+-1|0}function ll(a,b,c){a=a|0;b=b|0;c=c|0;return}function ml(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=c[b+4>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=e;c[a+8>>2]=d;return}function nl(a){a=a|0;return}function ol(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;k=l;l=l+48|0;e=k+32|0;h=k+24|0;i=k;j=a+4|0;f=(((c[j>>2]|0)-(c[a>>2]|0)|0)/12|0)+1|0;g=pl(a)|0;if(g>>>0<f>>>0)fF(a);m=c[a>>2]|0;o=((c[a+8>>2]|0)-m|0)/12|0;n=o<<1;ql(i,o>>>0<g>>>1>>>0?(n>>>0<f>>>0?f:n):g,((c[j>>2]|0)-m|0)/12|0,a+8|0);j=i+8|0;g=c[j>>2]|0;f=c[b+4>>2]|0;d=c[d>>2]|0;c[h>>2]=c[b>>2];c[h+4>>2]=f;c[e>>2]=c[h>>2];c[e+4>>2]=c[h+4>>2];ml(g,e,d);c[j>>2]=(c[j>>2]|0)+12;rl(a,i);sl(i);l=k;return}function pl(a){a=a|0;return 357913941}function ql(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>357913941)Ia(5761,5798,1734,5908);else{f=mF(b*12|0)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d*12|0)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b*12|0);return}function rl(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;tl(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(((f|0)/-12|0)*12|0)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];ul(a,((c[h>>2]|0)-(c[a>>2]|0)|0)/12|0);return}function sl(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~(((e+-12-b|0)>>>0)/12|0)*12|0);a=c[a>>2]|0;if(a|0)oF(a);return}function tl(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;vl(a,e,b,e+((((c[a+4>>2]|0)-d|0)/12|0)*12|0)|0,b);return}function ul(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;vl(a,d,e,e,d+(b*12|0)|0);return}function vl(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function wl(a){a=a|0;zl(a);return}function xl(a){a=a|0;yl(a+24|0);return}function yl(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);oF(d)}return}function zl(a){a=a|0;var b=0;b=zi()|0;Ci(a,2,6,b,Al()|0,0);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function Al(){return 1252}function Bl(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=l;l=l+16|0;e=d+8|0;f=d;g=Cl(a)|0;a=c[g+4>>2]|0;c[f>>2]=c[g>>2];c[f+4>>2]=a;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];b=Dl(b,e)|0;l=d;return b|0}function Cl(a){a=a|0;return (c[(il()|0)+24>>2]|0)+(a*12|0)|0}function Dl(a,b){a=a|0;b=b|0;var d=0;d=c[b>>2]|0;b=c[b+4>>2]|0;a=a+(b>>1)|0;if(b&1)d=c[(c[a>>2]|0)+d>>2]|0;return el(vb[d&31](a)|0)|0}function El(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+16|0;f=e+8|0;g=e;i=c[d>>2]|0;h=c[d+4>>2]|0;d=$h(b)|0;c[g>>2]=i;c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];Fl(a,d,f,1);l=e;return}function Fl(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;f=l;l=l+32|0;g=f+16|0;m=f+8|0;i=f;k=c[d>>2]|0;j=c[d+4>>2]|0;h=c[a>>2]|0;a=Gl()|0;c[m>>2]=k;c[m+4>>2]=j;c[g>>2]=c[m>>2];c[g+4>>2]=c[m+4>>2];d=Hl(g)|0;c[i>>2]=k;c[i+4>>2]=j;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];ei(h,b,a,d,Il(g,e)|0,e);l=f;return}function Gl(){var b=0,d=0;if(!(a[8648]|0)){Ul(9372);Ja(31,9372,o|0)|0;d=8648;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(9372)|0)){b=9372;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));Ul(9372)}return 9372}function Hl(a){a=a|0;return 0}function Il(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+48|0;e=k+24|0;f=k+16|0;g=k+32|0;h=k;i=k+8|0;m=c[a+4>>2]|0;c[h>>2]=c[a>>2];d=h+4|0;c[d>>2]=m;m=Gl()|0;j=m+24|0;c[i>>2]=ii(b,4)|0;a=m+28|0;if((c[a>>2]|0)>>>0<(c[m+32>>2]|0)>>>0){Jl(g,j,1);b=c[a>>2]|0;d=c[d>>2]|0;m=c[i>>2]|0;c[f>>2]=c[h>>2];c[f+4>>2]=d;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];Kl(b,e,m);Ll(g);m=(c[a>>2]|0)+12|0;c[a>>2]=m;a=m}else{Ml(j,h,i);a=c[a>>2]|0}l=k;return ((a-(c[j>>2]|0)|0)/12|0)+-1|0}function Jl(a,b,c){a=a|0;b=b|0;c=c|0;return}function Kl(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=c[b+4>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=e;c[a+8>>2]=d;return}function Ll(a){a=a|0;return}function Ml(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;k=l;l=l+48|0;e=k+32|0;h=k+24|0;i=k;j=a+4|0;f=(((c[j>>2]|0)-(c[a>>2]|0)|0)/12|0)+1|0;g=Nl(a)|0;if(g>>>0<f>>>0)fF(a);m=c[a>>2]|0;o=((c[a+8>>2]|0)-m|0)/12|0;n=o<<1;Ol(i,o>>>0<g>>>1>>>0?(n>>>0<f>>>0?f:n):g,((c[j>>2]|0)-m|0)/12|0,a+8|0);j=i+8|0;g=c[j>>2]|0;f=c[b+4>>2]|0;d=c[d>>2]|0;c[h>>2]=c[b>>2];c[h+4>>2]=f;c[e>>2]=c[h>>2];c[e+4>>2]=c[h+4>>2];Kl(g,e,d);c[j>>2]=(c[j>>2]|0)+12;Pl(a,i);Ql(i);l=k;return}function Nl(a){a=a|0;return 357913941}function Ol(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>357913941)Ia(5761,5798,1734,5908);else{f=mF(b*12|0)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d*12|0)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b*12|0);return}function Pl(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;Rl(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(((f|0)/-12|0)*12|0)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];Sl(a,((c[h>>2]|0)-(c[a>>2]|0)|0)/12|0);return}function Ql(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~(((e+-12-b|0)>>>0)/12|0)*12|0);a=c[a>>2]|0;if(a|0)oF(a);return}function Rl(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;Tl(a,e,b,e+((((c[a+4>>2]|0)-d|0)/12|0)*12|0)|0,b);return}function Sl(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;Tl(a,d,e,e,d+(b*12|0)|0);return}function Tl(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function Ul(a){a=a|0;Xl(a);return}function Vl(a){a=a|0;Wl(a+24|0);return}function Wl(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);oF(d)}return}function Xl(a){a=a|0;var b=0;b=zi()|0;Ci(a,2,7,b,Yl()|0,0);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function Yl(){return 1256}function Zl(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=l;l=l+16|0;e=d+8|0;f=d;g=_l(a)|0;a=c[g+4>>2]|0;c[f>>2]=c[g>>2];c[f+4>>2]=a;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];b=$l(b,e)|0;l=d;return b|0}function _l(a){a=a|0;return (c[(Gl()|0)+24>>2]|0)+(a*12|0)|0}function $l(a,b){a=a|0;b=b|0;var d=0;d=c[b>>2]|0;b=c[b+4>>2]|0;a=a+(b>>1)|0;if(b&1)d=c[(c[a>>2]|0)+d>>2]|0;return am(vb[d&31](a)|0)|0}function am(a){a=a|0;return a|0}function bm(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+16|0;f=e+8|0;g=e;i=c[d>>2]|0;h=c[d+4>>2]|0;d=$h(b)|0;c[g>>2]=i;c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];cm(a,d,f,0);l=e;return}function cm(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;f=l;l=l+32|0;g=f+16|0;m=f+8|0;i=f;k=c[d>>2]|0;j=c[d+4>>2]|0;h=c[a>>2]|0;a=dm()|0;c[m>>2]=k;c[m+4>>2]=j;c[g>>2]=c[m>>2];c[g+4>>2]=c[m+4>>2];d=em(g)|0;c[i>>2]=k;c[i+4>>2]=j;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];ei(h,b,a,d,fm(g,e)|0,e);l=f;return}function dm(){var b=0,d=0;if(!(a[8656]|0)){rm(9408);Ja(32,9408,o|0)|0;d=8656;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(9408)|0)){b=9408;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));rm(9408)}return 9408}function em(a){a=a|0;return 0}function fm(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+48|0;e=k+24|0;f=k+16|0;g=k+32|0;h=k;i=k+8|0;m=c[a+4>>2]|0;c[h>>2]=c[a>>2];d=h+4|0;c[d>>2]=m;m=dm()|0;j=m+24|0;c[i>>2]=ii(b,4)|0;a=m+28|0;if((c[a>>2]|0)>>>0<(c[m+32>>2]|0)>>>0){gm(g,j,1);b=c[a>>2]|0;d=c[d>>2]|0;m=c[i>>2]|0;c[f>>2]=c[h>>2];c[f+4>>2]=d;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];hm(b,e,m);im(g);m=(c[a>>2]|0)+12|0;c[a>>2]=m;a=m}else{jm(j,h,i);a=c[a>>2]|0}l=k;return ((a-(c[j>>2]|0)|0)/12|0)+-1|0}function gm(a,b,c){a=a|0;b=b|0;c=c|0;return}function hm(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=c[b+4>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=e;c[a+8>>2]=d;return}function im(a){a=a|0;return}function jm(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;k=l;l=l+48|0;e=k+32|0;h=k+24|0;i=k;j=a+4|0;f=(((c[j>>2]|0)-(c[a>>2]|0)|0)/12|0)+1|0;g=km(a)|0;if(g>>>0<f>>>0)fF(a);m=c[a>>2]|0;o=((c[a+8>>2]|0)-m|0)/12|0;n=o<<1;lm(i,o>>>0<g>>>1>>>0?(n>>>0<f>>>0?f:n):g,((c[j>>2]|0)-m|0)/12|0,a+8|0);j=i+8|0;g=c[j>>2]|0;f=c[b+4>>2]|0;d=c[d>>2]|0;c[h>>2]=c[b>>2];c[h+4>>2]=f;c[e>>2]=c[h>>2];c[e+4>>2]=c[h+4>>2];hm(g,e,d);c[j>>2]=(c[j>>2]|0)+12;mm(a,i);nm(i);l=k;return}function km(a){a=a|0;return 357913941}function lm(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>357913941)Ia(5761,5798,1734,5908);else{f=mF(b*12|0)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d*12|0)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b*12|0);return}function mm(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;om(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(((f|0)/-12|0)*12|0)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];pm(a,((c[h>>2]|0)-(c[a>>2]|0)|0)/12|0);return}function nm(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~(((e+-12-b|0)>>>0)/12|0)*12|0);a=c[a>>2]|0;if(a|0)oF(a);return}function om(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;qm(a,e,b,e+((((c[a+4>>2]|0)-d|0)/12|0)*12|0)|0,b);return}function pm(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;qm(a,d,e,e,d+(b*12|0)|0);return}function qm(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function rm(a){a=a|0;um(a);return}function sm(a){a=a|0;tm(a+24|0);return}function tm(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);oF(d)}return}function um(a){a=a|0;var b=0;b=zi()|0;Ci(a,2,6,b,vm()|0,1);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function vm(){return 1260}function wm(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=xm(a)|0;a=c[h+4>>2]|0;c[g>>2]=c[h>>2];c[g+4>>2]=a;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];ym(b,f,d);l=e;return}function xm(a){a=a|0;return (c[(dm()|0)+24>>2]|0)+(a*12|0)|0}function ym(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;g=l;l=l+16|0;f=g;e=c[b>>2]|0;b=c[b+4>>2]|0;a=a+(b>>1)|0;if(b&1)e=c[(c[a>>2]|0)+e>>2]|0;zm(f,d);f=Am(f,d)|0;ub[e&31](a,f);l=g;return}function zm(a,b){a=a|0;b=b|0;return}function Am(a,b){a=a|0;b=b|0;return Bm(b)|0}function Bm(a){a=a|0;return a|0}function Cm(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+16|0;f=e+8|0;g=e;i=c[d>>2]|0;h=c[d+4>>2]|0;d=$h(b)|0;c[g>>2]=i;c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];Dm(a,d,f,0);l=e;return}function Dm(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;f=l;l=l+32|0;g=f+16|0;m=f+8|0;i=f;k=c[d>>2]|0;j=c[d+4>>2]|0;h=c[a>>2]|0;a=Em()|0;c[m>>2]=k;c[m+4>>2]=j;c[g>>2]=c[m>>2];c[g+4>>2]=c[m+4>>2];d=Fm(g)|0;c[i>>2]=k;c[i+4>>2]=j;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];ei(h,b,a,d,Gm(g,e)|0,e);l=f;return}function Em(){var b=0,d=0;if(!(a[8664]|0)){Sm(9444);Ja(33,9444,o|0)|0;d=8664;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(9444)|0)){b=9444;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));Sm(9444)}return 9444}function Fm(a){a=a|0;return 0}function Gm(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+48|0;e=k+24|0;f=k+16|0;g=k+32|0;h=k;i=k+8|0;m=c[a+4>>2]|0;c[h>>2]=c[a>>2];d=h+4|0;c[d>>2]=m;m=Em()|0;j=m+24|0;c[i>>2]=ii(b,4)|0;a=m+28|0;if((c[a>>2]|0)>>>0<(c[m+32>>2]|0)>>>0){Hm(g,j,1);b=c[a>>2]|0;d=c[d>>2]|0;m=c[i>>2]|0;c[f>>2]=c[h>>2];c[f+4>>2]=d;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];Im(b,e,m);Jm(g);m=(c[a>>2]|0)+12|0;c[a>>2]=m;a=m}else{Km(j,h,i);a=c[a>>2]|0}l=k;return ((a-(c[j>>2]|0)|0)/12|0)+-1|0}function Hm(a,b,c){a=a|0;b=b|0;c=c|0;return}function Im(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=c[b+4>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=e;c[a+8>>2]=d;return}function Jm(a){a=a|0;return}function Km(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;k=l;l=l+48|0;e=k+32|0;h=k+24|0;i=k;j=a+4|0;f=(((c[j>>2]|0)-(c[a>>2]|0)|0)/12|0)+1|0;g=Lm(a)|0;if(g>>>0<f>>>0)fF(a);m=c[a>>2]|0;o=((c[a+8>>2]|0)-m|0)/12|0;n=o<<1;Mm(i,o>>>0<g>>>1>>>0?(n>>>0<f>>>0?f:n):g,((c[j>>2]|0)-m|0)/12|0,a+8|0);j=i+8|0;g=c[j>>2]|0;f=c[b+4>>2]|0;d=c[d>>2]|0;c[h>>2]=c[b>>2];c[h+4>>2]=f;c[e>>2]=c[h>>2];c[e+4>>2]=c[h+4>>2];Im(g,e,d);c[j>>2]=(c[j>>2]|0)+12;Nm(a,i);Om(i);l=k;return}function Lm(a){a=a|0;return 357913941}function Mm(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>357913941)Ia(5761,5798,1734,5908);else{f=mF(b*12|0)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d*12|0)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b*12|0);return}function Nm(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;Pm(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(((f|0)/-12|0)*12|0)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];Qm(a,((c[h>>2]|0)-(c[a>>2]|0)|0)/12|0);return}function Om(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~(((e+-12-b|0)>>>0)/12|0)*12|0);a=c[a>>2]|0;if(a|0)oF(a);return}function Pm(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;Rm(a,e,b,e+((((c[a+4>>2]|0)-d|0)/12|0)*12|0)|0,b);return}function Qm(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;Rm(a,d,e,e,d+(b*12|0)|0);return}function Rm(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function Sm(a){a=a|0;Vm(a);return}function Tm(a){a=a|0;Um(a+24|0);return}function Um(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);oF(d)}return}function Vm(a){a=a|0;var b=0;b=zi()|0;Ci(a,2,1,b,Wm()|0,2);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function Wm(){return 1268}function Xm(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;f=l;l=l+16|0;g=f+8|0;h=f;i=Ym(a)|0;a=c[i+4>>2]|0;c[h>>2]=c[i>>2];c[h+4>>2]=a;c[g>>2]=c[h>>2];c[g+4>>2]=c[h+4>>2];Zm(b,g,d,e);l=f;return}function Ym(a){a=a|0;return (c[(Em()|0)+24>>2]|0)+(a*12|0)|0}function Zm(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;i=l;l=l+16|0;g=i+1|0;h=i;f=c[b>>2]|0;b=c[b+4>>2]|0;a=a+(b>>1)|0;if(b&1)f=c[(c[a>>2]|0)+f>>2]|0;zm(g,d);g=Am(g,d)|0;cl(h,e);h=dl(h,e)|0;Kb[f&15](a,g,h);l=i;return}function _m(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+16|0;f=e+8|0;g=e;i=c[d>>2]|0;h=c[d+4>>2]|0;d=$h(b)|0;c[g>>2]=i;c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];$m(a,d,f,1);l=e;return}function $m(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;f=l;l=l+32|0;g=f+16|0;m=f+8|0;i=f;k=c[d>>2]|0;j=c[d+4>>2]|0;h=c[a>>2]|0;a=an()|0;c[m>>2]=k;c[m+4>>2]=j;c[g>>2]=c[m>>2];c[g+4>>2]=c[m+4>>2];d=bn(g)|0;c[i>>2]=k;c[i+4>>2]=j;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];ei(h,b,a,d,cn(g,e)|0,e);l=f;return}function an(){var b=0,d=0;if(!(a[8672]|0)){pn(9480);Ja(34,9480,o|0)|0;d=8672;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(9480)|0)){b=9480;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));pn(9480)}return 9480}function bn(a){a=a|0;return 0}function cn(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+48|0;e=k+24|0;f=k+16|0;g=k+32|0;h=k;i=k+8|0;m=c[a+4>>2]|0;c[h>>2]=c[a>>2];d=h+4|0;c[d>>2]=m;m=an()|0;j=m+24|0;c[i>>2]=ii(b,4)|0;a=m+28|0;if((c[a>>2]|0)>>>0<(c[m+32>>2]|0)>>>0){dn(g,j,1);b=c[a>>2]|0;d=c[d>>2]|0;m=c[i>>2]|0;c[f>>2]=c[h>>2];c[f+4>>2]=d;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];en(b,e,m);fn(g);m=(c[a>>2]|0)+12|0;c[a>>2]=m;a=m}else{gn(j,h,i);a=c[a>>2]|0}l=k;return ((a-(c[j>>2]|0)|0)/12|0)+-1|0}function dn(a,b,c){a=a|0;b=b|0;c=c|0;return}function en(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=c[b+4>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=e;c[a+8>>2]=d;return}function fn(a){a=a|0;return}function gn(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;k=l;l=l+48|0;e=k+32|0;h=k+24|0;i=k;j=a+4|0;f=(((c[j>>2]|0)-(c[a>>2]|0)|0)/12|0)+1|0;g=hn(a)|0;if(g>>>0<f>>>0)fF(a);m=c[a>>2]|0;o=((c[a+8>>2]|0)-m|0)/12|0;n=o<<1;jn(i,o>>>0<g>>>1>>>0?(n>>>0<f>>>0?f:n):g,((c[j>>2]|0)-m|0)/12|0,a+8|0);j=i+8|0;g=c[j>>2]|0;f=c[b+4>>2]|0;d=c[d>>2]|0;c[h>>2]=c[b>>2];c[h+4>>2]=f;c[e>>2]=c[h>>2];c[e+4>>2]=c[h+4>>2];en(g,e,d);c[j>>2]=(c[j>>2]|0)+12;kn(a,i);ln(i);l=k;return}function hn(a){a=a|0;return 357913941}function jn(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>357913941)Ia(5761,5798,1734,5908);else{f=mF(b*12|0)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d*12|0)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b*12|0);return}function kn(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;mn(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(((f|0)/-12|0)*12|0)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];nn(a,((c[h>>2]|0)-(c[a>>2]|0)|0)/12|0);return}function ln(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~(((e+-12-b|0)>>>0)/12|0)*12|0);a=c[a>>2]|0;if(a|0)oF(a);return}function mn(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;on(a,e,b,e+((((c[a+4>>2]|0)-d|0)/12|0)*12|0)|0,b);return}function nn(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;on(a,d,e,e,d+(b*12|0)|0);return}function on(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function pn(a){a=a|0;sn(a);return}function qn(a){a=a|0;rn(a+24|0);return}function rn(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);oF(d)}return}function sn(a){a=a|0;var b=0;b=zi()|0;Ci(a,2,1,b,tn()|0,1);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function tn(){return 1280}function un(a,b,d){a=a|0;b=b|0;d=d|0;var e=0.0,f=0,g=0,h=0,i=0;f=l;l=l+16|0;g=f+8|0;h=f;i=vn(a)|0;a=c[i+4>>2]|0;c[h>>2]=c[i>>2];c[h+4>>2]=a;c[g>>2]=c[h>>2];c[g+4>>2]=c[h+4>>2];e=+wn(b,g,d);l=f;return +e}function vn(a){a=a|0;return (c[(an()|0)+24>>2]|0)+(a*12|0)|0}function wn(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0.0;g=l;l=l+16|0;f=g;e=c[b>>2]|0;b=c[b+4>>2]|0;a=a+(b>>1)|0;if(b&1)e=c[(c[a>>2]|0)+e>>2]|0;Cj(f,d);f=Dj(f,d)|0;h=+bh(+Fb[e&7](a,f));l=g;return +h}function xn(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+16|0;f=e+8|0;g=e;i=c[d>>2]|0;h=c[d+4>>2]|0;d=$h(b)|0;c[g>>2]=i;c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];yn(a,d,f,1);l=e;return}function yn(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;f=l;l=l+32|0;g=f+16|0;m=f+8|0;i=f;k=c[d>>2]|0;j=c[d+4>>2]|0;h=c[a>>2]|0;a=zn()|0;c[m>>2]=k;c[m+4>>2]=j;c[g>>2]=c[m>>2];c[g+4>>2]=c[m+4>>2];d=An(g)|0;c[i>>2]=k;c[i+4>>2]=j;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];ei(h,b,a,d,Bn(g,e)|0,e);l=f;return}function zn(){var b=0,d=0;if(!(a[8680]|0)){Nn(9516);Ja(35,9516,o|0)|0;d=8680;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(9516)|0)){b=9516;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));Nn(9516)}return 9516}function An(a){a=a|0;return 0}function Bn(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+48|0;e=k+24|0;f=k+16|0;g=k+32|0;h=k;i=k+8|0;m=c[a+4>>2]|0;c[h>>2]=c[a>>2];d=h+4|0;c[d>>2]=m;m=zn()|0;j=m+24|0;c[i>>2]=ii(b,4)|0;a=m+28|0;if((c[a>>2]|0)>>>0<(c[m+32>>2]|0)>>>0){Cn(g,j,1);b=c[a>>2]|0;d=c[d>>2]|0;m=c[i>>2]|0;c[f>>2]=c[h>>2];c[f+4>>2]=d;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];Dn(b,e,m);En(g);m=(c[a>>2]|0)+12|0;c[a>>2]=m;a=m}else{Fn(j,h,i);a=c[a>>2]|0}l=k;return ((a-(c[j>>2]|0)|0)/12|0)+-1|0}function Cn(a,b,c){a=a|0;b=b|0;c=c|0;return}function Dn(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=c[b+4>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=e;c[a+8>>2]=d;return}function En(a){a=a|0;return}function Fn(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;k=l;l=l+48|0;e=k+32|0;h=k+24|0;i=k;j=a+4|0;f=(((c[j>>2]|0)-(c[a>>2]|0)|0)/12|0)+1|0;g=Gn(a)|0;if(g>>>0<f>>>0)fF(a);m=c[a>>2]|0;o=((c[a+8>>2]|0)-m|0)/12|0;n=o<<1;Hn(i,o>>>0<g>>>1>>>0?(n>>>0<f>>>0?f:n):g,((c[j>>2]|0)-m|0)/12|0,a+8|0);j=i+8|0;g=c[j>>2]|0;f=c[b+4>>2]|0;d=c[d>>2]|0;c[h>>2]=c[b>>2];c[h+4>>2]=f;c[e>>2]=c[h>>2];c[e+4>>2]=c[h+4>>2];Dn(g,e,d);c[j>>2]=(c[j>>2]|0)+12;In(a,i);Jn(i);l=k;return}function Gn(a){a=a|0;return 357913941}function Hn(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>357913941)Ia(5761,5798,1734,5908);else{f=mF(b*12|0)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d*12|0)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b*12|0);return}function In(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;Kn(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(((f|0)/-12|0)*12|0)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];Ln(a,((c[h>>2]|0)-(c[a>>2]|0)|0)/12|0);return}function Jn(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~(((e+-12-b|0)>>>0)/12|0)*12|0);a=c[a>>2]|0;if(a|0)oF(a);return}function Kn(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;Mn(a,e,b,e+((((c[a+4>>2]|0)-d|0)/12|0)*12|0)|0,b);return}function Ln(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;Mn(a,d,e,e,d+(b*12|0)|0);return}function Mn(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function Nn(a){a=a|0;Qn(a);return}function On(a){a=a|0;Pn(a+24|0);return}function Pn(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);oF(d)}return}function Qn(a){a=a|0;var b=0;b=zi()|0;Ci(a,2,5,b,Rn()|0,0);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function Rn(){return 1288}function Sn(a,b){a=a|0;b=b|0;var d=0.0,e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=Tn(a)|0;a=c[h+4>>2]|0;c[g>>2]=c[h>>2];c[g+4>>2]=a;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];d=+Un(b,f);l=e;return +d}function Tn(a){a=a|0;return (c[(zn()|0)+24>>2]|0)+(a*12|0)|0}function Un(a,b){a=a|0;b=b|0;var d=0;d=c[b>>2]|0;b=c[b+4>>2]|0;a=a+(b>>1)|0;if(b&1)d=c[(c[a>>2]|0)+d>>2]|0;return +(+bh(+Ab[d&15](a)))}function Vn(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+16|0;f=e+8|0;g=e;i=c[d>>2]|0;h=c[d+4>>2]|0;d=$h(b)|0;c[g>>2]=i;c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];Wn(a,d,f,1);l=e;return}function Wn(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;f=l;l=l+32|0;g=f+16|0;m=f+8|0;i=f;k=c[d>>2]|0;j=c[d+4>>2]|0;h=c[a>>2]|0;a=Xn()|0;c[m>>2]=k;c[m+4>>2]=j;c[g>>2]=c[m>>2];c[g+4>>2]=c[m+4>>2];d=Yn(g)|0;c[i>>2]=k;c[i+4>>2]=j;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];ei(h,b,a,d,Zn(g,e)|0,e);l=f;return}
function Xn(){var b=0,d=0;if(!(a[8688]|0)){ko(9552);Ja(36,9552,o|0)|0;d=8688;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(9552)|0)){b=9552;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));ko(9552)}return 9552}function Yn(a){a=a|0;return 0}function Zn(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+48|0;e=k+24|0;f=k+16|0;g=k+32|0;h=k;i=k+8|0;m=c[a+4>>2]|0;c[h>>2]=c[a>>2];d=h+4|0;c[d>>2]=m;m=Xn()|0;j=m+24|0;c[i>>2]=ii(b,4)|0;a=m+28|0;if((c[a>>2]|0)>>>0<(c[m+32>>2]|0)>>>0){_n(g,j,1);b=c[a>>2]|0;d=c[d>>2]|0;m=c[i>>2]|0;c[f>>2]=c[h>>2];c[f+4>>2]=d;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];$n(b,e,m);ao(g);m=(c[a>>2]|0)+12|0;c[a>>2]=m;a=m}else{bo(j,h,i);a=c[a>>2]|0}l=k;return ((a-(c[j>>2]|0)|0)/12|0)+-1|0}function _n(a,b,c){a=a|0;b=b|0;c=c|0;return}function $n(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=c[b+4>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=e;c[a+8>>2]=d;return}function ao(a){a=a|0;return}function bo(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;k=l;l=l+48|0;e=k+32|0;h=k+24|0;i=k;j=a+4|0;f=(((c[j>>2]|0)-(c[a>>2]|0)|0)/12|0)+1|0;g=co(a)|0;if(g>>>0<f>>>0)fF(a);m=c[a>>2]|0;o=((c[a+8>>2]|0)-m|0)/12|0;n=o<<1;eo(i,o>>>0<g>>>1>>>0?(n>>>0<f>>>0?f:n):g,((c[j>>2]|0)-m|0)/12|0,a+8|0);j=i+8|0;g=c[j>>2]|0;f=c[b+4>>2]|0;d=c[d>>2]|0;c[h>>2]=c[b>>2];c[h+4>>2]=f;c[e>>2]=c[h>>2];c[e+4>>2]=c[h+4>>2];$n(g,e,d);c[j>>2]=(c[j>>2]|0)+12;fo(a,i);go(i);l=k;return}function co(a){a=a|0;return 357913941}function eo(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>357913941)Ia(5761,5798,1734,5908);else{f=mF(b*12|0)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d*12|0)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b*12|0);return}function fo(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;ho(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(((f|0)/-12|0)*12|0)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];io(a,((c[h>>2]|0)-(c[a>>2]|0)|0)/12|0);return}function go(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~(((e+-12-b|0)>>>0)/12|0)*12|0);a=c[a>>2]|0;if(a|0)oF(a);return}function ho(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;jo(a,e,b,e+((((c[a+4>>2]|0)-d|0)/12|0)*12|0)|0,b);return}function io(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;jo(a,d,e,e,d+(b*12|0)|0);return}function jo(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function ko(a){a=a|0;no(a);return}function lo(a){a=a|0;mo(a+24|0);return}function mo(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);oF(d)}return}function no(a){a=a|0;var b=0;b=zi()|0;Ci(a,2,8,b,oo()|0,0);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function oo(){return 1332}function po(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=l;l=l+16|0;e=d+8|0;f=d;g=qo(a)|0;a=c[g+4>>2]|0;c[f>>2]=c[g>>2];c[f+4>>2]=a;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];b=ro(b,e)|0;l=d;return b|0}function qo(a){a=a|0;return (c[(Xn()|0)+24>>2]|0)+(a*12|0)|0}function ro(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;f=l;l=l+16|0;e=f;d=c[b>>2]|0;b=c[b+4>>2]|0;a=a+(b>>1)|0;if(b&1)d=c[(c[a>>2]|0)+d>>2]|0;ub[d&31](e,a);e=so(e)|0;l=f;return e|0}function so(a){a=a|0;var b=0,c=0,d=0,e=0;e=l;l=l+32|0;b=e+12|0;c=e;d=Hi(to()|0)|0;if(!d)a=vo(a)|0;else{Ii(b,d);Ji(c,b);uo(a,c);a=Li(b)|0}l=e;return a|0}function to(){var b=0;if(!(a[8704]|0)){Go(9600);Ja(25,9600,o|0)|0;b=8704;c[b>>2]=1;c[b+4>>2]=0}return 9600}function uo(a,b){a=a|0;b=b|0;Ao(b,a,a+8|0)|0;return}function vo(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;d=l;l=l+16|0;f=d+4|0;h=d;e=wA(8)|0;b=e;i=mF(16)|0;c[i>>2]=c[a>>2];c[i+4>>2]=c[a+4>>2];c[i+8>>2]=c[a+8>>2];c[i+12>>2]=c[a+12>>2];g=b+4|0;c[g>>2]=i;a=mF(8)|0;g=c[g>>2]|0;c[h>>2]=0;c[f>>2]=c[h>>2];wo(a,g,f);c[e>>2]=a;l=d;return b|0}function wo(a,b,d){a=a|0;b=b|0;d=d|0;c[a>>2]=b;d=mF(16)|0;c[d+4>>2]=0;c[d+8>>2]=0;c[d>>2]=1300;c[d+12>>2]=b;c[a+4>>2]=d;return}function xo(a){a=a|0;gF(a);oF(a);return}function yo(a){a=a|0;a=c[a+12>>2]|0;if(a|0)oF(a);return}function zo(a){a=a|0;oF(a);return}function Ao(a,b,d){a=a|0;b=b|0;d=d|0;b=Bo(c[a>>2]|0,b,d)|0;d=a+4|0;c[(c[d>>2]|0)+8>>2]=b;return c[(c[d>>2]|0)+8>>2]|0}function Bo(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=l;l=l+16|0;f=e;ED(f);a=Rg(a)|0;d=Co(a,c[b>>2]|0,+h[d>>3])|0;GD(f);l=e;return d|0}function Co(a,b,c){a=a|0;b=b|0;c=+c;var d=0;d=Ug(Do()|0)|0;b=Wg(b)|0;return Wa(0,d|0,a|0,b|0,+(+Vg(c)))|0}function Do(){var b=0;if(!(a[8696]|0)){Eo(9588);b=8696;c[b>>2]=1;c[b+4>>2]=0}return 9588}function Eo(a){a=a|0;eh(a,Fo()|0,2);return}function Fo(){return 1320}function Go(a){a=a|0;bj(a);return}function Ho(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+16|0;f=e+8|0;g=e;i=c[d>>2]|0;h=c[d+4>>2]|0;d=$h(b)|0;c[g>>2]=i;c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];Io(a,d,f,1);l=e;return}function Io(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;f=l;l=l+32|0;g=f+16|0;m=f+8|0;i=f;k=c[d>>2]|0;j=c[d+4>>2]|0;h=c[a>>2]|0;a=Jo()|0;c[m>>2]=k;c[m+4>>2]=j;c[g>>2]=c[m>>2];c[g+4>>2]=c[m+4>>2];d=Ko(g)|0;c[i>>2]=k;c[i+4>>2]=j;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];ei(h,b,a,d,Lo(g,e)|0,e);l=f;return}function Jo(){var b=0,d=0;if(!(a[8712]|0)){Xo(9644);Ja(37,9644,o|0)|0;d=8712;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(9644)|0)){b=9644;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));Xo(9644)}return 9644}function Ko(a){a=a|0;return 0}function Lo(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+48|0;e=k+24|0;f=k+16|0;g=k+32|0;h=k;i=k+8|0;m=c[a+4>>2]|0;c[h>>2]=c[a>>2];d=h+4|0;c[d>>2]=m;m=Jo()|0;j=m+24|0;c[i>>2]=ii(b,4)|0;a=m+28|0;if((c[a>>2]|0)>>>0<(c[m+32>>2]|0)>>>0){Mo(g,j,1);b=c[a>>2]|0;d=c[d>>2]|0;m=c[i>>2]|0;c[f>>2]=c[h>>2];c[f+4>>2]=d;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];No(b,e,m);Oo(g);m=(c[a>>2]|0)+12|0;c[a>>2]=m;a=m}else{Po(j,h,i);a=c[a>>2]|0}l=k;return ((a-(c[j>>2]|0)|0)/12|0)+-1|0}function Mo(a,b,c){a=a|0;b=b|0;c=c|0;return}function No(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=c[b+4>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=e;c[a+8>>2]=d;return}function Oo(a){a=a|0;return}function Po(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;k=l;l=l+48|0;e=k+32|0;h=k+24|0;i=k;j=a+4|0;f=(((c[j>>2]|0)-(c[a>>2]|0)|0)/12|0)+1|0;g=Qo(a)|0;if(g>>>0<f>>>0)fF(a);m=c[a>>2]|0;o=((c[a+8>>2]|0)-m|0)/12|0;n=o<<1;Ro(i,o>>>0<g>>>1>>>0?(n>>>0<f>>>0?f:n):g,((c[j>>2]|0)-m|0)/12|0,a+8|0);j=i+8|0;g=c[j>>2]|0;f=c[b+4>>2]|0;d=c[d>>2]|0;c[h>>2]=c[b>>2];c[h+4>>2]=f;c[e>>2]=c[h>>2];c[e+4>>2]=c[h+4>>2];No(g,e,d);c[j>>2]=(c[j>>2]|0)+12;So(a,i);To(i);l=k;return}function Qo(a){a=a|0;return 357913941}function Ro(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>357913941)Ia(5761,5798,1734,5908);else{f=mF(b*12|0)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d*12|0)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b*12|0);return}function So(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;Uo(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(((f|0)/-12|0)*12|0)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];Vo(a,((c[h>>2]|0)-(c[a>>2]|0)|0)/12|0);return}function To(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~(((e+-12-b|0)>>>0)/12|0)*12|0);a=c[a>>2]|0;if(a|0)oF(a);return}function Uo(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;Wo(a,e,b,e+((((c[a+4>>2]|0)-d|0)/12|0)*12|0)|0,b);return}function Vo(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;Wo(a,d,e,e,d+(b*12|0)|0);return}function Wo(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function Xo(a){a=a|0;_o(a);return}function Yo(a){a=a|0;Zo(a+24|0);return}function Zo(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);oF(d)}return}function _o(a){a=a|0;var b=0;b=zi()|0;Ci(a,2,6,b,$o()|0,1);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function $o(){return 1336}function ap(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=bp(a)|0;a=c[h+4>>2]|0;c[g>>2]=c[h>>2];c[g+4>>2]=a;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];d=cp(b,f,d)|0;l=e;return d|0}function bp(a){a=a|0;return (c[(Jo()|0)+24>>2]|0)+(a*12|0)|0}function cp(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;h=l;l=l+32|0;f=h;g=h+16|0;e=c[b>>2]|0;b=c[b+4>>2]|0;a=a+(b>>1)|0;if(b&1)e=c[(c[a>>2]|0)+e>>2]|0;Cj(g,d);g=Dj(g,d)|0;Kb[e&15](f,a,g);g=so(f)|0;l=h;return g|0}function dp(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+16|0;f=e+8|0;g=e;i=c[d>>2]|0;h=c[d+4>>2]|0;d=$h(b)|0;c[g>>2]=i;c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];ep(a,d,f,1);l=e;return}function ep(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;f=l;l=l+32|0;g=f+16|0;m=f+8|0;i=f;k=c[d>>2]|0;j=c[d+4>>2]|0;h=c[a>>2]|0;a=fp()|0;c[m>>2]=k;c[m+4>>2]=j;c[g>>2]=c[m>>2];c[g+4>>2]=c[m+4>>2];d=gp(g)|0;c[i>>2]=k;c[i+4>>2]=j;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];ei(h,b,a,d,hp(g,e)|0,e);l=f;return}function fp(){var b=0,d=0;if(!(a[8720]|0)){tp(9680);Ja(38,9680,o|0)|0;d=8720;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(9680)|0)){b=9680;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));tp(9680)}return 9680}function gp(a){a=a|0;return 0}function hp(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+48|0;e=k+24|0;f=k+16|0;g=k+32|0;h=k;i=k+8|0;m=c[a+4>>2]|0;c[h>>2]=c[a>>2];d=h+4|0;c[d>>2]=m;m=fp()|0;j=m+24|0;c[i>>2]=ii(b,4)|0;a=m+28|0;if((c[a>>2]|0)>>>0<(c[m+32>>2]|0)>>>0){ip(g,j,1);b=c[a>>2]|0;d=c[d>>2]|0;m=c[i>>2]|0;c[f>>2]=c[h>>2];c[f+4>>2]=d;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];jp(b,e,m);kp(g);m=(c[a>>2]|0)+12|0;c[a>>2]=m;a=m}else{lp(j,h,i);a=c[a>>2]|0}l=k;return ((a-(c[j>>2]|0)|0)/12|0)+-1|0}function ip(a,b,c){a=a|0;b=b|0;c=c|0;return}function jp(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=c[b+4>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=e;c[a+8>>2]=d;return}function kp(a){a=a|0;return}function lp(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;k=l;l=l+48|0;e=k+32|0;h=k+24|0;i=k;j=a+4|0;f=(((c[j>>2]|0)-(c[a>>2]|0)|0)/12|0)+1|0;g=mp(a)|0;if(g>>>0<f>>>0)fF(a);m=c[a>>2]|0;o=((c[a+8>>2]|0)-m|0)/12|0;n=o<<1;np(i,o>>>0<g>>>1>>>0?(n>>>0<f>>>0?f:n):g,((c[j>>2]|0)-m|0)/12|0,a+8|0);j=i+8|0;g=c[j>>2]|0;f=c[b+4>>2]|0;d=c[d>>2]|0;c[h>>2]=c[b>>2];c[h+4>>2]=f;c[e>>2]=c[h>>2];c[e+4>>2]=c[h+4>>2];jp(g,e,d);c[j>>2]=(c[j>>2]|0)+12;op(a,i);pp(i);l=k;return}function mp(a){a=a|0;return 357913941}function np(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>357913941)Ia(5761,5798,1734,5908);else{f=mF(b*12|0)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d*12|0)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b*12|0);return}function op(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;qp(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(((f|0)/-12|0)*12|0)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];rp(a,((c[h>>2]|0)-(c[a>>2]|0)|0)/12|0);return}function pp(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~(((e+-12-b|0)>>>0)/12|0)*12|0);a=c[a>>2]|0;if(a|0)oF(a);return}function qp(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;sp(a,e,b,e+((((c[a+4>>2]|0)-d|0)/12|0)*12|0)|0,b);return}function rp(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;sp(a,d,e,e,d+(b*12|0)|0);return}function sp(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function tp(a){a=a|0;wp(a);return}function up(a){a=a|0;vp(a+24|0);return}function vp(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);oF(d)}return}function wp(a){a=a|0;var b=0;b=zi()|0;Ci(a,2,9,b,xp()|0,0);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function xp(){return 1344}function yp(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=l;l=l+16|0;e=d+8|0;f=d;g=zp(a)|0;a=c[g+4>>2]|0;c[f>>2]=c[g>>2];c[f+4>>2]=a;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];b=Ap(b,e)|0;l=d;return b|0}function zp(a){a=a|0;return (c[(fp()|0)+24>>2]|0)+(a*12|0)|0}function Ap(a,b){a=a|0;b=b|0;var d=0;d=c[b>>2]|0;b=c[b+4>>2]|0;a=a+(b>>1)|0;if(b&1)d=c[(c[a>>2]|0)+d>>2]|0;return ah(vb[d&31](a)|0)|0}function Bp(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+16|0;f=e+8|0;g=e;i=c[d>>2]|0;h=c[d+4>>2]|0;d=$h(b)|0;c[g>>2]=i;c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];Cp(a,d,f,0);l=e;return}function Cp(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;f=l;l=l+32|0;g=f+16|0;m=f+8|0;i=f;k=c[d>>2]|0;j=c[d+4>>2]|0;h=c[a>>2]|0;a=Dp()|0;c[m>>2]=k;c[m+4>>2]=j;c[g>>2]=c[m>>2];c[g+4>>2]=c[m+4>>2];d=Ep(g)|0;c[i>>2]=k;c[i+4>>2]=j;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];ei(h,b,a,d,Fp(g,e)|0,e);l=f;return}function Dp(){var b=0,d=0;if(!(a[8728]|0)){Rp(9716);Ja(39,9716,o|0)|0;d=8728;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(9716)|0)){b=9716;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));Rp(9716)}return 9716}function Ep(a){a=a|0;return 0}function Fp(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+48|0;e=k+24|0;f=k+16|0;g=k+32|0;h=k;i=k+8|0;m=c[a+4>>2]|0;c[h>>2]=c[a>>2];d=h+4|0;c[d>>2]=m;m=Dp()|0;j=m+24|0;c[i>>2]=ii(b,4)|0;a=m+28|0;if((c[a>>2]|0)>>>0<(c[m+32>>2]|0)>>>0){Gp(g,j,1);b=c[a>>2]|0;d=c[d>>2]|0;m=c[i>>2]|0;c[f>>2]=c[h>>2];c[f+4>>2]=d;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];Hp(b,e,m);Ip(g);m=(c[a>>2]|0)+12|0;c[a>>2]=m;a=m}else{Jp(j,h,i);a=c[a>>2]|0}l=k;return ((a-(c[j>>2]|0)|0)/12|0)+-1|0}function Gp(a,b,c){a=a|0;b=b|0;c=c|0;return}function Hp(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=c[b+4>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=e;c[a+8>>2]=d;return}function Ip(a){a=a|0;return}function Jp(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;k=l;l=l+48|0;e=k+32|0;h=k+24|0;i=k;j=a+4|0;f=(((c[j>>2]|0)-(c[a>>2]|0)|0)/12|0)+1|0;g=Kp(a)|0;if(g>>>0<f>>>0)fF(a);m=c[a>>2]|0;o=((c[a+8>>2]|0)-m|0)/12|0;n=o<<1;Lp(i,o>>>0<g>>>1>>>0?(n>>>0<f>>>0?f:n):g,((c[j>>2]|0)-m|0)/12|0,a+8|0);j=i+8|0;g=c[j>>2]|0;f=c[b+4>>2]|0;d=c[d>>2]|0;c[h>>2]=c[b>>2];c[h+4>>2]=f;c[e>>2]=c[h>>2];c[e+4>>2]=c[h+4>>2];Hp(g,e,d);c[j>>2]=(c[j>>2]|0)+12;Mp(a,i);Np(i);l=k;return}function Kp(a){a=a|0;return 357913941}function Lp(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>357913941)Ia(5761,5798,1734,5908);else{f=mF(b*12|0)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d*12|0)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b*12|0);return}function Mp(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;Op(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(((f|0)/-12|0)*12|0)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];Pp(a,((c[h>>2]|0)-(c[a>>2]|0)|0)/12|0);return}function Np(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~(((e+-12-b|0)>>>0)/12|0)*12|0);a=c[a>>2]|0;if(a|0)oF(a);return}function Op(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;Qp(a,e,b,e+((((c[a+4>>2]|0)-d|0)/12|0)*12|0)|0,b);return}function Pp(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;Qp(a,d,e,e,d+(b*12|0)|0);return}function Qp(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function Rp(a){a=a|0;Up(a);return}function Sp(a){a=a|0;Tp(a+24|0);return}function Tp(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);oF(d)}return}function Up(a){a=a|0;var b=0;b=zi()|0;Ci(a,2,8,b,Vp()|0,1);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function Vp(){return 1348}function Wp(a,b,d){a=a|0;b=b|0;d=+d;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=Xp(a)|0;a=c[h+4>>2]|0;c[g>>2]=c[h>>2];c[g+4>>2]=a;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];Yp(b,f,d);l=e;return}function Xp(a){a=a|0;return (c[(Dp()|0)+24>>2]|0)+(a*12|0)|0}function Yp(a,b,d){a=a|0;b=b|0;d=+d;var e=0,f=0,g=0;g=l;l=l+16|0;f=g;e=c[b>>2]|0;b=c[b+4>>2]|0;a=a+(b>>1)|0;if(b&1)e=c[(c[a>>2]|0)+e>>2]|0;Aj(f,d);d=+Bj(f,d);rb[e&31](a,d);l=g;return}function Zp(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+16|0;f=e+8|0;g=e;i=c[d>>2]|0;h=c[d+4>>2]|0;d=$h(b)|0;c[g>>2]=i;c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];_p(a,d,f,0);l=e;return}function _p(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;f=l;l=l+32|0;g=f+16|0;m=f+8|0;i=f;k=c[d>>2]|0;j=c[d+4>>2]|0;h=c[a>>2]|0;a=$p()|0;c[m>>2]=k;c[m+4>>2]=j;c[g>>2]=c[m>>2];c[g+4>>2]=c[m+4>>2];d=aq(g)|0;c[i>>2]=k;c[i+4>>2]=j;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];ei(h,b,a,d,bq(g,e)|0,e);l=f;return}function $p(){var b=0,d=0;if(!(a[8736]|0)){nq(9752);Ja(40,9752,o|0)|0;d=8736;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(9752)|0)){b=9752;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));nq(9752)}return 9752}function aq(a){a=a|0;return 0}function bq(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+48|0;e=k+24|0;f=k+16|0;g=k+32|0;h=k;i=k+8|0;m=c[a+4>>2]|0;c[h>>2]=c[a>>2];d=h+4|0;c[d>>2]=m;m=$p()|0;j=m+24|0;c[i>>2]=ii(b,4)|0;a=m+28|0;if((c[a>>2]|0)>>>0<(c[m+32>>2]|0)>>>0){cq(g,j,1);b=c[a>>2]|0;d=c[d>>2]|0;m=c[i>>2]|0;c[f>>2]=c[h>>2];c[f+4>>2]=d;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];dq(b,e,m);eq(g);m=(c[a>>2]|0)+12|0;c[a>>2]=m;a=m}else{fq(j,h,i);a=c[a>>2]|0}l=k;return ((a-(c[j>>2]|0)|0)/12|0)+-1|0}function cq(a,b,c){a=a|0;b=b|0;c=c|0;return}function dq(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=c[b+4>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=e;c[a+8>>2]=d;return}function eq(a){a=a|0;return}function fq(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;k=l;l=l+48|0;e=k+32|0;h=k+24|0;i=k;j=a+4|0;f=(((c[j>>2]|0)-(c[a>>2]|0)|0)/12|0)+1|0;g=gq(a)|0;if(g>>>0<f>>>0)fF(a);m=c[a>>2]|0;o=((c[a+8>>2]|0)-m|0)/12|0;n=o<<1;hq(i,o>>>0<g>>>1>>>0?(n>>>0<f>>>0?f:n):g,((c[j>>2]|0)-m|0)/12|0,a+8|0);j=i+8|0;g=c[j>>2]|0;f=c[b+4>>2]|0;d=c[d>>2]|0;c[h>>2]=c[b>>2];c[h+4>>2]=f;c[e>>2]=c[h>>2];c[e+4>>2]=c[h+4>>2];dq(g,e,d);c[j>>2]=(c[j>>2]|0)+12;iq(a,i);jq(i);l=k;return}function gq(a){a=a|0;return 357913941}function hq(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>357913941)Ia(5761,5798,1734,5908);else{f=mF(b*12|0)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d*12|0)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b*12|0);return}function iq(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;kq(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(((f|0)/-12|0)*12|0)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];lq(a,((c[h>>2]|0)-(c[a>>2]|0)|0)/12|0);return}function jq(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~(((e+-12-b|0)>>>0)/12|0)*12|0);a=c[a>>2]|0;if(a|0)oF(a);return}function kq(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;mq(a,e,b,e+((((c[a+4>>2]|0)-d|0)/12|0)*12|0)|0,b);return}function lq(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;mq(a,d,e,e,d+(b*12|0)|0);return}function mq(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function nq(a){a=a|0;qq(a);return}function oq(a){a=a|0;pq(a+24|0);return}function pq(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);oF(d)}return}function qq(a){a=a|0;var b=0;b=zi()|0;Ci(a,2,1,b,rq()|0,2);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function rq(){return 1356}function sq(a,b,d,e){a=a|0;b=b|0;d=d|0;e=+e;var f=0,g=0,h=0,i=0;f=l;l=l+16|0;g=f+8|0;h=f;i=tq(a)|0;a=c[i+4>>2]|0;c[h>>2]=c[i>>2];c[h+4>>2]=a;c[g>>2]=c[h>>2];c[g+4>>2]=c[h+4>>2];uq(b,g,d,e);l=f;return}function tq(a){a=a|0;return (c[($p()|0)+24>>2]|0)+(a*12|0)|0}function uq(a,b,d,e){a=a|0;b=b|0;d=d|0;e=+e;var f=0,g=0,h=0,i=0;i=l;l=l+16|0;g=i+1|0;h=i;f=c[b>>2]|0;b=c[b+4>>2]|0;a=a+(b>>1)|0;if(b&1)f=c[(c[a>>2]|0)+f>>2]|0;Cj(g,d);g=Dj(g,d)|0;Aj(h,e);e=+Bj(h,e);Mb[f&15](a,g,e);l=i;return}function vq(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+16|0;f=e+8|0;g=e;i=c[d>>2]|0;h=c[d+4>>2]|0;d=$h(b)|0;c[g>>2]=i;c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];wq(a,d,f,0);l=e;return}function wq(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;f=l;l=l+32|0;g=f+16|0;m=f+8|0;i=f;k=c[d>>2]|0;j=c[d+4>>2]|0;h=c[a>>2]|0;a=xq()|0;c[m>>2]=k;c[m+4>>2]=j;c[g>>2]=c[m>>2];c[g+4>>2]=c[m+4>>2];d=yq(g)|0;c[i>>2]=k;c[i+4>>2]=j;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];ei(h,b,a,d,zq(g,e)|0,e);l=f;return}function xq(){var b=0,d=0;if(!(a[8744]|0)){Lq(9788);Ja(41,9788,o|0)|0;d=8744;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(9788)|0)){b=9788;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));Lq(9788)}return 9788}function yq(a){a=a|0;return 0}function zq(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+48|0;e=k+24|0;f=k+16|0;g=k+32|0;h=k;i=k+8|0;m=c[a+4>>2]|0;c[h>>2]=c[a>>2];d=h+4|0;c[d>>2]=m;m=xq()|0;j=m+24|0;c[i>>2]=ii(b,4)|0;a=m+28|0;if((c[a>>2]|0)>>>0<(c[m+32>>2]|0)>>>0){Aq(g,j,1);b=c[a>>2]|0;d=c[d>>2]|0;m=c[i>>2]|0;c[f>>2]=c[h>>2];c[f+4>>2]=d;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];Bq(b,e,m);Cq(g);m=(c[a>>2]|0)+12|0;c[a>>2]=m;a=m}else{Dq(j,h,i);a=c[a>>2]|0}l=k;return ((a-(c[j>>2]|0)|0)/12|0)+-1|0}function Aq(a,b,c){a=a|0;b=b|0;c=c|0;return}function Bq(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=c[b+4>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=e;c[a+8>>2]=d;return}function Cq(a){a=a|0;return}function Dq(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;k=l;l=l+48|0;e=k+32|0;h=k+24|0;i=k;j=a+4|0;f=(((c[j>>2]|0)-(c[a>>2]|0)|0)/12|0)+1|0;g=Eq(a)|0;if(g>>>0<f>>>0)fF(a);m=c[a>>2]|0;o=((c[a+8>>2]|0)-m|0)/12|0;n=o<<1;Fq(i,o>>>0<g>>>1>>>0?(n>>>0<f>>>0?f:n):g,((c[j>>2]|0)-m|0)/12|0,a+8|0);j=i+8|0;g=c[j>>2]|0;f=c[b+4>>2]|0;d=c[d>>2]|0;c[h>>2]=c[b>>2];c[h+4>>2]=f;c[e>>2]=c[h>>2];c[e+4>>2]=c[h+4>>2];Bq(g,e,d);c[j>>2]=(c[j>>2]|0)+12;Gq(a,i);Hq(i);l=k;return}function Eq(a){a=a|0;return 357913941}function Fq(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>357913941)Ia(5761,5798,1734,5908);else{f=mF(b*12|0)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d*12|0)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b*12|0);return}function Gq(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;Iq(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(((f|0)/-12|0)*12|0)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];Jq(a,((c[h>>2]|0)-(c[a>>2]|0)|0)/12|0);return}function Hq(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~(((e+-12-b|0)>>>0)/12|0)*12|0);a=c[a>>2]|0;if(a|0)oF(a);return}function Iq(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;Kq(a,e,b,e+((((c[a+4>>2]|0)-d|0)/12|0)*12|0)|0,b);return}function Jq(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;Kq(a,d,e,e,d+(b*12|0)|0);return}function Kq(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function Lq(a){a=a|0;Oq(a);return}function Mq(a){a=a|0;Nq(a+24|0);return}function Nq(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);oF(d)}return}function Oq(a){a=a|0;var b=0;b=zi()|0;Ci(a,2,7,b,Pq()|0,1);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function Pq(){return 1368}function Qq(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=Rq(a)|0;a=c[h+4>>2]|0;c[g>>2]=c[h>>2];c[g+4>>2]=a;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];Sq(b,f,d);l=e;return}function Rq(a){a=a|0;return (c[(xq()|0)+24>>2]|0)+(a*12|0)|0}function Sq(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;g=l;l=l+16|0;f=g;e=c[b>>2]|0;b=c[b+4>>2]|0;a=a+(b>>1)|0;if(b&1)e=c[(c[a>>2]|0)+e>>2]|0;Cj(f,d);f=Dj(f,d)|0;ub[e&31](a,f);l=g;return}function Tq(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+16|0;f=e+8|0;g=e;i=c[d>>2]|0;h=c[d+4>>2]|0;d=$h(b)|0;c[g>>2]=i;c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];Uq(a,d,f,0);l=e;return}function Uq(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;f=l;l=l+32|0;g=f+16|0;m=f+8|0;i=f;k=c[d>>2]|0;j=c[d+4>>2]|0;h=c[a>>2]|0;a=Vq()|0;c[m>>2]=k;c[m+4>>2]=j;c[g>>2]=c[m>>2];c[g+4>>2]=c[m+4>>2];d=Wq(g)|0;c[i>>2]=k;c[i+4>>2]=j;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];ei(h,b,a,d,Xq(g,e)|0,e);l=f;return}function Vq(){var b=0,d=0;if(!(a[8752]|0)){hr(9824);Ja(42,9824,o|0)|0;d=8752;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(9824)|0)){b=9824;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));hr(9824)}return 9824}function Wq(a){a=a|0;return 0}function Xq(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+48|0;e=k+24|0;f=k+16|0;g=k+32|0;h=k;i=k+8|0;m=c[a+4>>2]|0;c[h>>2]=c[a>>2];d=h+4|0;c[d>>2]=m;m=Vq()|0;j=m+24|0;c[i>>2]=ii(b,4)|0;a=m+28|0;if((c[a>>2]|0)>>>0<(c[m+32>>2]|0)>>>0){Yq(g,j,1);b=c[a>>2]|0;d=c[d>>2]|0;m=c[i>>2]|0;c[f>>2]=c[h>>2];c[f+4>>2]=d;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];Zq(b,e,m);_q(g);m=(c[a>>2]|0)+12|0;c[a>>2]=m;a=m}else{$q(j,h,i);a=c[a>>2]|0}l=k;return ((a-(c[j>>2]|0)|0)/12|0)+-1|0}function Yq(a,b,c){a=a|0;b=b|0;c=c|0;return}function Zq(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=c[b+4>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=e;c[a+8>>2]=d;return}function _q(a){a=a|0;return}function $q(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;k=l;l=l+48|0;e=k+32|0;h=k+24|0;i=k;j=a+4|0;f=(((c[j>>2]|0)-(c[a>>2]|0)|0)/12|0)+1|0;g=ar(a)|0;if(g>>>0<f>>>0)fF(a);m=c[a>>2]|0;o=((c[a+8>>2]|0)-m|0)/12|0;n=o<<1;br(i,o>>>0<g>>>1>>>0?(n>>>0<f>>>0?f:n):g,((c[j>>2]|0)-m|0)/12|0,a+8|0);j=i+8|0;g=c[j>>2]|0;f=c[b+4>>2]|0;d=c[d>>2]|0;c[h>>2]=c[b>>2];c[h+4>>2]=f;c[e>>2]=c[h>>2];c[e+4>>2]=c[h+4>>2];Zq(g,e,d);c[j>>2]=(c[j>>2]|0)+12;cr(a,i);dr(i);l=k;return}function ar(a){a=a|0;return 357913941}function br(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>357913941)Ia(5761,5798,1734,5908);else{f=mF(b*12|0)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d*12|0)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b*12|0);return}function cr(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;er(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(((f|0)/-12|0)*12|0)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];fr(a,((c[h>>2]|0)-(c[a>>2]|0)|0)/12|0);return}function dr(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~(((e+-12-b|0)>>>0)/12|0)*12|0);a=c[a>>2]|0;if(a|0)oF(a);return}function er(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;gr(a,e,b,e+((((c[a+4>>2]|0)-d|0)/12|0)*12|0)|0,b);return}function fr(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;gr(a,d,e,e,d+(b*12|0)|0);return}function gr(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function hr(a){a=a|0;kr(a);return}function ir(a){a=a|0;jr(a+24|0);return}function jr(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);oF(d)}return}function kr(a){a=a|0;var b=0;b=zi()|0;Ci(a,2,8,b,lr()|0,1);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function lr(){return 1376}function mr(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=nr(a)|0;a=c[h+4>>2]|0;c[g>>2]=c[h>>2];c[g+4>>2]=a;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];or(b,f,d);l=e;return}function nr(a){a=a|0;return (c[(Vq()|0)+24>>2]|0)+(a*12|0)|0}function or(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;g=l;l=l+16|0;f=g;e=c[b>>2]|0;b=c[b+4>>2]|0;a=a+(b>>1)|0;if(b&1)e=c[(c[a>>2]|0)+e>>2]|0;pr(f,d);f=qr(f,d)|0;ub[e&31](a,f);l=g;return}function pr(a,b){a=a|0;b=b|0;return}function qr(a,b){a=a|0;b=b|0;return rr(b)|0}function rr(a){a=a|0;return a|0}function sr(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+16|0;f=e+8|0;g=e;i=c[d>>2]|0;h=c[d+4>>2]|0;d=$h(b)|0;c[g>>2]=i;c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];tr(a,d,f,0);l=e;return}function tr(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;f=l;l=l+32|0;g=f+16|0;m=f+8|0;i=f;k=c[d>>2]|0;j=c[d+4>>2]|0;h=c[a>>2]|0;a=ur()|0;c[m>>2]=k;c[m+4>>2]=j;c[g>>2]=c[m>>2];c[g+4>>2]=c[m+4>>2];d=vr(g)|0;c[i>>2]=k;c[i+4>>2]=j;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];ei(h,b,a,d,wr(g,e)|0,e);l=f;return}function ur(){var b=0,d=0;if(!(a[8760]|0)){Ir(9860);Ja(43,9860,o|0)|0;d=8760;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(9860)|0)){b=9860;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));Ir(9860)}return 9860}function vr(a){a=a|0;return 0}function wr(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+48|0;e=k+24|0;f=k+16|0;g=k+32|0;h=k;i=k+8|0;m=c[a+4>>2]|0;c[h>>2]=c[a>>2];d=h+4|0;c[d>>2]=m;m=ur()|0;j=m+24|0;c[i>>2]=ii(b,4)|0;a=m+28|0;if((c[a>>2]|0)>>>0<(c[m+32>>2]|0)>>>0){xr(g,j,1);b=c[a>>2]|0;d=c[d>>2]|0;m=c[i>>2]|0;c[f>>2]=c[h>>2];c[f+4>>2]=d;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];yr(b,e,m);zr(g);m=(c[a>>2]|0)+12|0;c[a>>2]=m;a=m}else{Ar(j,h,i);a=c[a>>2]|0}l=k;return ((a-(c[j>>2]|0)|0)/12|0)+-1|0}function xr(a,b,c){a=a|0;b=b|0;c=c|0;return}function yr(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=c[b+4>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=e;c[a+8>>2]=d;return}function zr(a){a=a|0;return}function Ar(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;k=l;l=l+48|0;e=k+32|0;h=k+24|0;i=k;j=a+4|0;f=(((c[j>>2]|0)-(c[a>>2]|0)|0)/12|0)+1|0;g=Br(a)|0;if(g>>>0<f>>>0)fF(a);m=c[a>>2]|0;o=((c[a+8>>2]|0)-m|0)/12|0;n=o<<1;Cr(i,o>>>0<g>>>1>>>0?(n>>>0<f>>>0?f:n):g,((c[j>>2]|0)-m|0)/12|0,a+8|0);j=i+8|0;g=c[j>>2]|0;f=c[b+4>>2]|0;d=c[d>>2]|0;c[h>>2]=c[b>>2];c[h+4>>2]=f;c[e>>2]=c[h>>2];c[e+4>>2]=c[h+4>>2];yr(g,e,d);c[j>>2]=(c[j>>2]|0)+12;Dr(a,i);Er(i);l=k;return}function Br(a){a=a|0;return 357913941}function Cr(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>357913941)Ia(5761,5798,1734,5908);else{f=mF(b*12|0)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d*12|0)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b*12|0);return}function Dr(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;Fr(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(((f|0)/-12|0)*12|0)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];Gr(a,((c[h>>2]|0)-(c[a>>2]|0)|0)/12|0);return}function Er(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~(((e+-12-b|0)>>>0)/12|0)*12|0);a=c[a>>2]|0;if(a|0)oF(a);return}function Fr(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;Hr(a,e,b,e+((((c[a+4>>2]|0)-d|0)/12|0)*12|0)|0,b);return}function Gr(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;Hr(a,d,e,e,d+(b*12|0)|0);return}function Hr(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function Ir(a){a=a|0;Lr(a);return}function Jr(a){a=a|0;Kr(a+24|0);return}function Kr(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);oF(d)}return}function Lr(a){a=a|0;var b=0;b=zi()|0;Ci(a,2,22,b,Mr()|0,0);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function Mr(){return 1400}function Nr(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=l;l=l+16|0;e=d+8|0;f=d;g=Or(a)|0;a=c[g+4>>2]|0;c[f>>2]=c[g>>2];c[f+4>>2]=a;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];Pr(b,e);l=d;return}function Or(a){a=a|0;return (c[(ur()|0)+24>>2]|0)+(a*12|0)|0}function Pr(a,b){a=a|0;b=b|0;var d=0;d=c[b>>2]|0;b=c[b+4>>2]|0;a=a+(b>>1)|0;if(b&1)d=c[(c[a>>2]|0)+d>>2]|0;tb[d&127](a);return}function Qr(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;g=c[a>>2]|0;f=Rr()|0;a=Sr(d)|0;ei(g,b,f,a,Tr(d,e)|0,e);return}function Rr(){var b=0,d=0;if(!(a[8768]|0)){ds(9896);Ja(44,9896,o|0)|0;d=8768;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(9896)|0)){b=9896;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));ds(9896)}return 9896}function Sr(a){a=a|0;return a|0}function Tr(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0;h=l;l=l+16|0;d=h+8|0;e=h;f=h+4|0;c[e>>2]=a;i=Rr()|0;g=i+24|0;c[f>>2]=ii(b,4)|0;a=i+28|0;if((c[a>>2]|0)>>>0<(c[i+32>>2]|0)>>>0){Ur(d,g,1);Vr(c[a>>2]|0,c[e>>2]|0,c[f>>2]|0);Wr(d);i=(c[a>>2]|0)+8|0;c[a>>2]=i;a=i}else{Xr(g,e,f);a=c[a>>2]|0}l=h;return (a-(c[g>>2]|0)>>3)+-1|0}function Ur(a,b,c){a=a|0;b=b|0;c=c|0;return}function Vr(a,b,d){a=a|0;b=b|0;d=d|0;c[a>>2]=b;c[a+4>>2]=d;return}function Wr(a){a=a|0;return}function Xr(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;i=l;l=l+32|0;g=i;h=a+4|0;e=((c[h>>2]|0)-(c[a>>2]|0)>>3)+1|0;f=Yr(a)|0;if(f>>>0<e>>>0)fF(a);j=c[a>>2]|0;m=(c[a+8>>2]|0)-j|0;k=m>>2;Zr(g,m>>3>>>0<f>>>1>>>0?(k>>>0<e>>>0?e:k):f,(c[h>>2]|0)-j>>3,a+8|0);h=g+8|0;Vr(c[h>>2]|0,c[b>>2]|0,c[d>>2]|0);c[h>>2]=(c[h>>2]|0)+8;_r(a,g);$r(g);l=i;return}function Yr(a){a=a|0;return 536870911}function Zr(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>536870911)Ia(5761,5798,1734,5908);else{f=mF(b<<3)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d<<3)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b<<3);return}function _r(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;as(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(0-(f>>3)<<3)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];bs(a,(c[h>>2]|0)-(c[a>>2]|0)>>3);return}function $r(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~((e+-8-b|0)>>>3)<<3);a=c[a>>2]|0;if(a|0)oF(a);return}function as(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((c[a+8>>2]|0)-d>>3<<3)|0;cs(a,e,b,e+((c[a+4>>2]|0)-d>>3<<3)|0,b);return}function bs(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((c[a+8>>2]|0)-d>>3<<3)|0;cs(a,d,e,e,d+(b<<3)|0);return}function cs(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function ds(a){a=a|0;gs(a);return}function es(a){a=a|0;fs(a+24|0);return}function fs(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);oF(d)}return}function gs(a){a=a|0;var b=0;b=zi()|0;Ci(a,1,23,b,vm()|0,1);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function hs(a,b){a=a|0;b=b|0;js(c[(is(a)|0)>>2]|0,b);return}function is(a){a=a|0;return (c[(Rr()|0)+24>>2]|0)+(a<<3)|0}function js(a,b){a=a|0;b=b|0;var c=0,d=0;c=l;l=l+16|0;d=c;zm(d,b);b=Am(d,b)|0;tb[a&127](b);l=c;return}function ks(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;g=c[a>>2]|0;f=ls()|0;a=ms(d)|0;ei(g,b,f,a,ns(d,e)|0,e);return}function ls(){var b=0,d=0;if(!(a[8776]|0)){zs(9932);Ja(45,9932,o|0)|0;d=8776;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(9932)|0)){b=9932;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));zs(9932)}return 9932}function ms(a){a=a|0;return a|0}function ns(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0;h=l;l=l+16|0;d=h+8|0;e=h;f=h+4|0;c[e>>2]=a;i=ls()|0;g=i+24|0;c[f>>2]=ii(b,4)|0;a=i+28|0;if((c[a>>2]|0)>>>0<(c[i+32>>2]|0)>>>0){os(d,g,1);ps(c[a>>2]|0,c[e>>2]|0,c[f>>2]|0);qs(d);i=(c[a>>2]|0)+8|0;c[a>>2]=i;a=i}else{rs(g,e,f);a=c[a>>2]|0}l=h;return (a-(c[g>>2]|0)>>3)+-1|0}function os(a,b,c){a=a|0;b=b|0;c=c|0;return}function ps(a,b,d){a=a|0;b=b|0;d=d|0;c[a>>2]=b;c[a+4>>2]=d;return}function qs(a){a=a|0;return}function rs(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;i=l;l=l+32|0;g=i;h=a+4|0;e=((c[h>>2]|0)-(c[a>>2]|0)>>3)+1|0;f=ss(a)|0;if(f>>>0<e>>>0)fF(a);j=c[a>>2]|0;m=(c[a+8>>2]|0)-j|0;k=m>>2;ts(g,m>>3>>>0<f>>>1>>>0?(k>>>0<e>>>0?e:k):f,(c[h>>2]|0)-j>>3,a+8|0);h=g+8|0;ps(c[h>>2]|0,c[b>>2]|0,c[d>>2]|0);c[h>>2]=(c[h>>2]|0)+8;us(a,g);vs(g);l=i;return}function ss(a){a=a|0;return 536870911}function ts(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>536870911)Ia(5761,5798,1734,5908);else{f=mF(b<<3)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d<<3)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b<<3);return}function us(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;ws(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(0-(f>>3)<<3)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];xs(a,(c[h>>2]|0)-(c[a>>2]|0)>>3);return}function vs(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~((e+-8-b|0)>>>3)<<3);a=c[a>>2]|0;if(a|0)oF(a);return}function ws(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((c[a+8>>2]|0)-d>>3<<3)|0;ys(a,e,b,e+((c[a+4>>2]|0)-d>>3<<3)|0,b);return}function xs(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((c[a+8>>2]|0)-d>>3<<3)|0;ys(a,d,e,e,d+(b<<3)|0);return}function ys(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function zs(a){a=a|0;Cs(a);return}function As(a){a=a|0;Bs(a+24|0);return}function Bs(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);oF(d)}return}function Cs(a){a=a|0;var b=0;b=zi()|0;Ci(a,1,10,b,Ds()|0,1);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function Ds(){return 1404}function Es(a,b){a=a|0;b=b|0;return Gs(c[(Fs(a)|0)>>2]|0,b)|0}function Fs(a){a=a|0;return (c[(ls()|0)+24>>2]|0)+(a<<3)|0}function Gs(a,b){a=a|0;b=b|0;var c=0,d=0;c=l;l=l+16|0;d=c;Hs(d,b);b=Is(d,b)|0;b=el(vb[a&31](b)|0)|0;l=c;return b|0}function Hs(a,b){a=a|0;b=b|0;return}function Is(a,b){a=a|0;b=b|0;return Js(b)|0}function Js(a){a=a|0;return a|0}function Ks(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;g=c[a>>2]|0;f=Ls()|0;a=Ms(d)|0;ei(g,b,f,a,Ns(d,e)|0,e);return}function Ls(){var b=0,d=0;if(!(a[8784]|0)){Zs(9968);Ja(46,9968,o|0)|0;d=8784;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(9968)|0)){b=9968;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));Zs(9968)}return 9968}function Ms(a){a=a|0;return a|0}function Ns(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0;h=l;l=l+16|0;d=h+8|0;e=h;f=h+4|0;c[e>>2]=a;i=Ls()|0;g=i+24|0;c[f>>2]=ii(b,4)|0;a=i+28|0;if((c[a>>2]|0)>>>0<(c[i+32>>2]|0)>>>0){Os(d,g,1);Ps(c[a>>2]|0,c[e>>2]|0,c[f>>2]|0);Qs(d);i=(c[a>>2]|0)+8|0;c[a>>2]=i;a=i}else{Rs(g,e,f);a=c[a>>2]|0}l=h;return (a-(c[g>>2]|0)>>3)+-1|0}function Os(a,b,c){a=a|0;b=b|0;c=c|0;return}function Ps(a,b,d){a=a|0;b=b|0;d=d|0;c[a>>2]=b;c[a+4>>2]=d;return}function Qs(a){a=a|0;return}function Rs(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;i=l;l=l+32|0;g=i;h=a+4|0;e=((c[h>>2]|0)-(c[a>>2]|0)>>3)+1|0;f=Ss(a)|0;if(f>>>0<e>>>0)fF(a);j=c[a>>2]|0;m=(c[a+8>>2]|0)-j|0;k=m>>2;Ts(g,m>>3>>>0<f>>>1>>>0?(k>>>0<e>>>0?e:k):f,(c[h>>2]|0)-j>>3,a+8|0);h=g+8|0;Ps(c[h>>2]|0,c[b>>2]|0,c[d>>2]|0);c[h>>2]=(c[h>>2]|0)+8;Us(a,g);Vs(g);l=i;return}function Ss(a){a=a|0;return 536870911}function Ts(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>536870911)Ia(5761,5798,1734,5908);else{f=mF(b<<3)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d<<3)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b<<3);return}function Us(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;Ws(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(0-(f>>3)<<3)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];Xs(a,(c[h>>2]|0)-(c[a>>2]|0)>>3);return}function Vs(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~((e+-8-b|0)>>>3)<<3);a=c[a>>2]|0;if(a|0)oF(a);return}function Ws(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((c[a+8>>2]|0)-d>>3<<3)|0;Ys(a,e,b,e+((c[a+4>>2]|0)-d>>3<<3)|0,b);return}function Xs(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((c[a+8>>2]|0)-d>>3<<3)|0;Ys(a,d,e,e,d+(b<<3)|0);return}function Ys(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function Zs(a){a=a|0;at(a);return}function _s(a){a=a|0;$s(a+24|0);return}function $s(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);oF(d)}return}function at(a){a=a|0;var b=0;b=zi()|0;Ci(a,1,16,b,Al()|0,0);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function bt(a){a=a|0;return dt(c[(ct(a)|0)>>2]|0)|0}function ct(a){a=a|0;return (c[(Ls()|0)+24>>2]|0)+(a<<3)|0}function dt(a){a=a|0;return el(Gb[a&7]()|0)|0}function et(){var b=0;if(!(a[8800]|0)){ot(10012);Ja(25,10012,o|0)|0;b=8800;c[b>>2]=1;c[b+4>>2]=0}return 10012}function ft(a,b){a=a|0;b=b|0;c[a>>2]=gt()|0;c[a+4>>2]=ht()|0;c[a+12>>2]=b;c[a+8>>2]=it()|0;c[a+32>>2]=2;return}function gt(){return 11633}function ht(){return 1244}function it(){return mt()|0}function jt(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;if((kt(d,896)|0)==512){if(c|0){lt(c);oF(c)}}else if(b|0){tf(b);oF(b)}return}function kt(a,b){a=a|0;b=b|0;return b&a|0}function lt(a){a=a|0;a=c[a+4>>2]|0;if(a|0)kF(a);return}function mt(){var b=0;if(!(a[8792]|0)){c[2501]=nt()|0;c[2502]=0;b=8792;c[b>>2]=1;c[b+4>>2]=0}return 10004}function nt(){return 0}function ot(a){a=a|0;bj(a);return}function pt(a){a=a|0;var b=0,d=0,e=0,f=0;b=l;l=l+32|0;d=b+16|0;f=b+8|0;e=b;qt(a,5507);rt(a,5514,3)|0;st(a,4362,47)|0;c[f>>2]=9;c[f+4>>2]=0;c[d>>2]=c[f>>2];c[d+4>>2]=c[f+4>>2];tt(a,5521,d)|0;c[e>>2]=11;c[e+4>>2]=0;c[d>>2]=c[e>>2];c[d+4>>2]=c[e+4>>2];ut(a,5551,d)|0;l=b;return}function qt(a,b){a=a|0;b=b|0;var d=0;d=lv()|0;c[a>>2]=d;mv(d,b);Kx(c[a>>2]|0);return}function rt(a,b,c){a=a|0;b=b|0;c=c|0;Pu(a,$h(b)|0,c,0);return a|0}function st(a,b,c){a=a|0;b=b|0;c=c|0;su(a,$h(b)|0,c,0);return a|0}function tt(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=c[d+4>>2]|0;c[g>>2]=c[d>>2];c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];Tt(a,b,f);l=e;return a|0}function ut(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=c[d+4>>2]|0;c[g>>2]=c[d>>2];c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];vt(a,b,f);l=e;return a|0}function vt(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+16|0;f=e+8|0;g=e;i=c[d>>2]|0;h=c[d+4>>2]|0;d=$h(b)|0;c[g>>2]=i;c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];wt(a,d,f,1);l=e;return}function wt(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;f=l;l=l+32|0;g=f+16|0;m=f+8|0;i=f;k=c[d>>2]|0;j=c[d+4>>2]|0;h=c[a>>2]|0;a=xt()|0;c[m>>2]=k;c[m+4>>2]=j;c[g>>2]=c[m>>2];c[g+4>>2]=c[m+4>>2];d=yt(g)|0;c[i>>2]=k;c[i+4>>2]=j;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];ei(h,b,a,d,zt(g,e)|0,e);l=f;return}function xt(){var b=0,d=0;if(!(a[8808]|0)){Lt(10060);Ja(48,10060,o|0)|0;d=8808;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(10060)|0)){b=10060;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));Lt(10060)}return 10060}function yt(a){a=a|0;return 0}function zt(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+48|0;e=k+24|0;f=k+16|0;g=k+32|0;h=k;i=k+8|0;m=c[a+4>>2]|0;c[h>>2]=c[a>>2];d=h+4|0;c[d>>2]=m;m=xt()|0;j=m+24|0;c[i>>2]=ii(b,4)|0;a=m+28|0;if((c[a>>2]|0)>>>0<(c[m+32>>2]|0)>>>0){At(g,j,1);b=c[a>>2]|0;d=c[d>>2]|0;m=c[i>>2]|0;c[f>>2]=c[h>>2];c[f+4>>2]=d;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];Bt(b,e,m);Ct(g);m=(c[a>>2]|0)+12|0;c[a>>2]=m;a=m}else{Dt(j,h,i);a=c[a>>2]|0}l=k;return ((a-(c[j>>2]|0)|0)/12|0)+-1|0}function At(a,b,c){a=a|0;b=b|0;c=c|0;return}function Bt(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=c[b+4>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=e;c[a+8>>2]=d;return}function Ct(a){a=a|0;return}function Dt(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;k=l;l=l+48|0;e=k+32|0;h=k+24|0;i=k;j=a+4|0;f=(((c[j>>2]|0)-(c[a>>2]|0)|0)/12|0)+1|0;g=Et(a)|0;if(g>>>0<f>>>0)fF(a);m=c[a>>2]|0;o=((c[a+8>>2]|0)-m|0)/12|0;n=o<<1;Ft(i,o>>>0<g>>>1>>>0?(n>>>0<f>>>0?f:n):g,((c[j>>2]|0)-m|0)/12|0,a+8|0);j=i+8|0;g=c[j>>2]|0;f=c[b+4>>2]|0;d=c[d>>2]|0;c[h>>2]=c[b>>2];c[h+4>>2]=f;c[e>>2]=c[h>>2];c[e+4>>2]=c[h+4>>2];Bt(g,e,d);c[j>>2]=(c[j>>2]|0)+12;Gt(a,i);Ht(i);l=k;return}function Et(a){a=a|0;return 357913941}function Ft(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>357913941)Ia(5761,5798,1734,5908);else{f=mF(b*12|0)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d*12|0)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b*12|0);return}function Gt(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;It(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(((f|0)/-12|0)*12|0)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];Jt(a,((c[h>>2]|0)-(c[a>>2]|0)|0)/12|0);return}function Ht(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~(((e+-12-b|0)>>>0)/12|0)*12|0);a=c[a>>2]|0;if(a|0)oF(a);return}function It(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;Kt(a,e,b,e+((((c[a+4>>2]|0)-d|0)/12|0)*12|0)|0,b);return}function Jt(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;Kt(a,d,e,e,d+(b*12|0)|0);return}function Kt(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function Lt(a){a=a|0;Ot(a);return}function Mt(a){a=a|0;Nt(a+24|0);return}function Nt(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);oF(d)}return}function Ot(a){a=a|0;var b=0;b=zi()|0;Ci(a,2,7,b,Pt()|0,1);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function Pt(){return 1420}function Qt(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;f=e+8|0;g=e;h=Rt(a)|0;a=c[h+4>>2]|0;c[g>>2]=c[h>>2];c[g+4>>2]=a;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];d=St(b,f,d)|0;l=e;return d|0}function Rt(a){a=a|0;return (c[(xt()|0)+24>>2]|0)+(a*12|0)|0}function St(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;g=l;l=l+16|0;f=g;e=c[b>>2]|0;b=c[b+4>>2]|0;a=a+(b>>1)|0;if(b&1)e=c[(c[a>>2]|0)+e>>2]|0;Cj(f,d);f=Dj(f,d)|0;f=ck(Cb[e&15](a,f)|0)|0;l=g;return f|0}function Tt(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+16|0;f=e+8|0;g=e;i=c[d>>2]|0;h=c[d+4>>2]|0;d=$h(b)|0;c[g>>2]=i;c[g+4>>2]=h;c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];Ut(a,d,f,0);l=e;return}function Ut(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;f=l;l=l+32|0;g=f+16|0;m=f+8|0;i=f;k=c[d>>2]|0;j=c[d+4>>2]|0;h=c[a>>2]|0;a=Vt()|0;c[m>>2]=k;c[m+4>>2]=j;c[g>>2]=c[m>>2];c[g+4>>2]=c[m+4>>2];d=Wt(g)|0;c[i>>2]=k;c[i+4>>2]=j;c[g>>2]=c[i>>2];c[g+4>>2]=c[i+4>>2];ei(h,b,a,d,Xt(g,e)|0,e);l=f;return}function Vt(){var b=0,d=0;if(!(a[8816]|0)){hu(10096);Ja(49,10096,o|0)|0;d=8816;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(10096)|0)){b=10096;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));hu(10096)}return 10096}function Wt(a){a=a|0;return 0}function Xt(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;k=l;l=l+48|0;e=k+24|0;f=k+16|0;g=k+32|0;h=k;i=k+8|0;m=c[a+4>>2]|0;c[h>>2]=c[a>>2];d=h+4|0;c[d>>2]=m;m=Vt()|0;j=m+24|0;c[i>>2]=ii(b,4)|0;a=m+28|0;if((c[a>>2]|0)>>>0<(c[m+32>>2]|0)>>>0){Yt(g,j,1);b=c[a>>2]|0;d=c[d>>2]|0;m=c[i>>2]|0;c[f>>2]=c[h>>2];c[f+4>>2]=d;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];Zt(b,e,m);_t(g);m=(c[a>>2]|0)+12|0;c[a>>2]=m;a=m}else{$t(j,h,i);a=c[a>>2]|0}l=k;return ((a-(c[j>>2]|0)|0)/12|0)+-1|0}function Yt(a,b,c){a=a|0;b=b|0;c=c|0;return}function Zt(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=c[b+4>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=e;c[a+8>>2]=d;return}function _t(a){a=a|0;return}function $t(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;k=l;l=l+48|0;e=k+32|0;h=k+24|0;i=k;j=a+4|0;f=(((c[j>>2]|0)-(c[a>>2]|0)|0)/12|0)+1|0;g=au(a)|0;if(g>>>0<f>>>0)fF(a);m=c[a>>2]|0;o=((c[a+8>>2]|0)-m|0)/12|0;n=o<<1;bu(i,o>>>0<g>>>1>>>0?(n>>>0<f>>>0?f:n):g,((c[j>>2]|0)-m|0)/12|0,a+8|0);j=i+8|0;g=c[j>>2]|0;f=c[b+4>>2]|0;d=c[d>>2]|0;c[h>>2]=c[b>>2];c[h+4>>2]=f;c[e>>2]=c[h>>2];c[e+4>>2]=c[h+4>>2];Zt(g,e,d);c[j>>2]=(c[j>>2]|0)+12;cu(a,i);du(i);l=k;return}function au(a){a=a|0;return 357913941}function bu(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>357913941)Ia(5761,5798,1734,5908);else{f=mF(b*12|0)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d*12|0)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b*12|0);return}function cu(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;eu(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(((f|0)/-12|0)*12|0)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];fu(a,((c[h>>2]|0)-(c[a>>2]|0)|0)/12|0);return}function du(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~(((e+-12-b|0)>>>0)/12|0)*12|0);a=c[a>>2]|0;if(a|0)oF(a);return}function eu(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;gu(a,e,b,e+((((c[a+4>>2]|0)-d|0)/12|0)*12|0)|0,b);return}function fu(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((((c[a+8>>2]|0)-d|0)/12|0)*12|0)|0;gu(a,d,e,e,d+(b*12|0)|0);return}function gu(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function hu(a){a=a|0;ku(a);return}function iu(a){a=a|0;ju(a+24|0);return}function ju(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~(((b+-12-e|0)>>>0)/12|0)*12|0);oF(d)}return}function ku(a){a=a|0;var b=0;b=zi()|0;Ci(a,2,3,b,lu()|0,2);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function lu(){return 1428}function mu(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;f=l;l=l+16|0;g=f+8|0;h=f;i=nu(a)|0;a=c[i+4>>2]|0;c[h>>2]=c[i>>2];c[h+4>>2]=a;c[g>>2]=c[h>>2];c[g+4>>2]=c[h+4>>2];ou(b,g,d,e);l=f;return}function nu(a){a=a|0;return (c[(Vt()|0)+24>>2]|0)+(a*12|0)|0}function ou(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;i=l;l=l+16|0;g=i+1|0;h=i;f=c[b>>2]|0;b=c[b+4>>2]|0;a=a+(b>>1)|0;if(b&1)f=c[(c[a>>2]|0)+f>>2]|0;Cj(g,d);g=Dj(g,d)|0;pu(h,e);h=qu(h,e)|0;Kb[f&15](a,g,h);l=i;return}function pu(a,b){a=a|0;b=b|0;return}function qu(a,b){a=a|0;b=b|0;return ru(b)|0}function ru(a){a=a|0;return (a|0)!=0|0}function su(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;g=c[a>>2]|0;f=tu()|0;a=uu(d)|0;ei(g,b,f,a,vu(d,e)|0,e);return}function tu(){var b=0,d=0;if(!(a[8824]|0)){Hu(10132);Ja(50,10132,o|0)|0;d=8824;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(10132)|0)){b=10132;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));Hu(10132)}return 10132}function uu(a){a=a|0;return a|0}function vu(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0;h=l;l=l+16|0;d=h+8|0;e=h;f=h+4|0;c[e>>2]=a;i=tu()|0;g=i+24|0;c[f>>2]=ii(b,4)|0;a=i+28|0;if((c[a>>2]|0)>>>0<(c[i+32>>2]|0)>>>0){wu(d,g,1);xu(c[a>>2]|0,c[e>>2]|0,c[f>>2]|0);yu(d);i=(c[a>>2]|0)+8|0;c[a>>2]=i;a=i}else{zu(g,e,f);a=c[a>>2]|0}l=h;return (a-(c[g>>2]|0)>>3)+-1|0}function wu(a,b,c){a=a|0;b=b|0;c=c|0;return}function xu(a,b,d){a=a|0;b=b|0;d=d|0;c[a>>2]=b;c[a+4>>2]=d;return}function yu(a){a=a|0;return}function zu(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;i=l;l=l+32|0;g=i;h=a+4|0;e=((c[h>>2]|0)-(c[a>>2]|0)>>3)+1|0;f=Au(a)|0;if(f>>>0<e>>>0)fF(a);j=c[a>>2]|0;m=(c[a+8>>2]|0)-j|0;k=m>>2;Bu(g,m>>3>>>0<f>>>1>>>0?(k>>>0<e>>>0?e:k):f,(c[h>>2]|0)-j>>3,a+8|0);h=g+8|0;xu(c[h>>2]|0,c[b>>2]|0,c[d>>2]|0);c[h>>2]=(c[h>>2]|0)+8;Cu(a,g);Du(g);l=i;return}function Au(a){a=a|0;return 536870911}function Bu(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>536870911)Ia(5761,5798,1734,5908);else{f=mF(b<<3)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d<<3)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b<<3);return}function Cu(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;Eu(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(0-(f>>3)<<3)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];Fu(a,(c[h>>2]|0)-(c[a>>2]|0)>>3);return}function Du(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~((e+-8-b|0)>>>3)<<3);a=c[a>>2]|0;if(a|0)oF(a);return}function Eu(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((c[a+8>>2]|0)-d>>3<<3)|0;Gu(a,e,b,e+((c[a+4>>2]|0)-d>>3<<3)|0,b);return}function Fu(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((c[a+8>>2]|0)-d>>3<<3)|0;Gu(a,d,e,e,d+(b<<3)|0);return}function Gu(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function Hu(a){a=a|0;Ku(a);return}function Iu(a){a=a|0;Ju(a+24|0);return}function Ju(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);oF(d)}return}function Ku(a){a=a|0;var b=0;b=zi()|0;Ci(a,1,24,b,Lu()|0,1);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function Lu(){return 1440}function Mu(a,b){a=a|0;b=b|0;Ou(c[(Nu(a)|0)>>2]|0,b);return}function Nu(a){a=a|0;return (c[(tu()|0)+24>>2]|0)+(a<<3)|0}function Ou(a,b){a=a|0;b=b|0;var c=0,d=0;c=l;l=l+16|0;d=c;Hs(d,b);b=Is(d,b)|0;tb[a&127](b);l=c;return}function Pu(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;g=c[a>>2]|0;f=Qu()|0;a=Ru(d)|0;ei(g,b,f,a,Su(d,e)|0,e);return}function Qu(){var b=0,d=0;if(!(a[8832]|0)){cv(10168);Ja(51,10168,o|0)|0;d=8832;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(10168)|0)){b=10168;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));cv(10168)}return 10168}function Ru(a){a=a|0;return a|0}function Su(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0;h=l;l=l+16|0;d=h+8|0;e=h;f=h+4|0;c[e>>2]=a;i=Qu()|0;g=i+24|0;c[f>>2]=ii(b,4)|0;a=i+28|0;if((c[a>>2]|0)>>>0<(c[i+32>>2]|0)>>>0){Tu(d,g,1);Uu(c[a>>2]|0,c[e>>2]|0,c[f>>2]|0);Vu(d);i=(c[a>>2]|0)+8|0;c[a>>2]=i;a=i}else{Wu(g,e,f);a=c[a>>2]|0}l=h;return (a-(c[g>>2]|0)>>3)+-1|0}function Tu(a,b,c){a=a|0;b=b|0;c=c|0;return}function Uu(a,b,d){a=a|0;b=b|0;d=d|0;c[a>>2]=b;c[a+4>>2]=d;return}function Vu(a){a=a|0;return}function Wu(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;i=l;l=l+32|0;g=i;h=a+4|0;e=((c[h>>2]|0)-(c[a>>2]|0)>>3)+1|0;f=Xu(a)|0;if(f>>>0<e>>>0)fF(a);j=c[a>>2]|0;m=(c[a+8>>2]|0)-j|0;k=m>>2;Yu(g,m>>3>>>0<f>>>1>>>0?(k>>>0<e>>>0?e:k):f,(c[h>>2]|0)-j>>3,a+8|0);h=g+8|0;Uu(c[h>>2]|0,c[b>>2]|0,c[d>>2]|0);c[h>>2]=(c[h>>2]|0)+8;Zu(a,g);_u(g);l=i;return}function Xu(a){a=a|0;return 536870911}function Yu(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>536870911)Ia(5761,5798,1734,5908);else{f=mF(b<<3)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d<<3)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b<<3);return}function Zu(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;$u(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(0-(f>>3)<<3)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];av(a,(c[h>>2]|0)-(c[a>>2]|0)>>3);return}function _u(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~((e+-8-b|0)>>>3)<<3);a=c[a>>2]|0;if(a|0)oF(a);return}function $u(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((c[a+8>>2]|0)-d>>3<<3)|0;bv(a,e,b,e+((c[a+4>>2]|0)-d>>3<<3)|0,b);return}function av(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((c[a+8>>2]|0)-d>>3<<3)|0;bv(a,d,e,e,d+(b<<3)|0);return}function bv(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function cv(a){a=a|0;fv(a);return}function dv(a){a=a|0;ev(a+24|0);return}function ev(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);oF(d)}return}function fv(a){a=a|0;var b=0;b=zi()|0;Ci(a,1,17,b,gv()|0,0);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function gv(){return 1448}function hv(a){a=a|0;return jv(c[(iv(a)|0)>>2]|0)|0}function iv(a){a=a|0;return (c[(Qu()|0)+24>>2]|0)+(a<<3)|0}function jv(a){a=a|0;return kv(Gb[a&7]()|0)|0}function kv(a){a=a|0;return a|0}function lv(){var b=0;if(!(a[8840]|0)){sv(10204);Ja(25,10204,o|0)|0;b=8840;c[b>>2]=1;c[b+4>>2]=0}return 10204}function mv(a,b){a=a|0;b=b|0;c[a>>2]=nv()|0;c[a+4>>2]=ov()|0;c[a+12>>2]=b;c[a+8>>2]=pv()|0;c[a+32>>2]=4;return}function nv(){return 11635}function ov(){return 1412}function pv(){return mt()|0}function qv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;if((kt(d,896)|0)==512){if(c|0){rv(c);oF(c)}}else if(b|0){mf(b);oF(b)}return}function rv(a){a=a|0;a=c[a+4>>2]|0;if(a|0)kF(a);return}function sv(a){a=a|0;bj(a);return}function tv(a){a=a|0;uv(a,5580);vv(a)|0;wv(a)|0;return}function uv(a,b){a=a|0;b=b|0;var d=0;d=to()|0;c[a>>2]=d;Wv(d,b);Kx(c[a>>2]|0);return}function vv(a){a=a|0;var b=0;b=c[a>>2]|0;yv(b,Kv()|0);return a|0}function wv(a){a=a|0;var b=0;b=c[a>>2]|0;yv(b,xv()|0);return a|0}function xv(){var b=0;if(!(a[8848]|0)){zv(10252);Ja(52,10252,o|0)|0;b=8848;c[b>>2]=1;c[b+4>>2]=0}if(!(wi(10252)|0))zv(10252);return 10252}function yv(a,b){a=a|0;b=b|0;ei(a,0,b,0,0,0);return}function zv(a){a=a|0;Cv(a);Ev(a,9);return}function Av(a){a=a|0;Bv(a+24|0);return}function Bv(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);oF(d)}return}function Cv(a){a=a|0;var b=0;b=zi()|0;Ci(a,5,1,b,Hv()|0,2);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function Dv(a,b,c){a=a|0;b=b|0;c=+c;Fv(a,b,c);return}function Ev(a,b){a=a|0;b=b|0;c[a+20>>2]=b;return}function Fv(a,b,d){a=a|0;b=b|0;d=+d;var e=0,f=0,g=0,i=0,j=0;e=l;l=l+16|0;g=e+8|0;j=e+13|0;f=e;i=e+12|0;Cj(j,b);c[g>>2]=Dj(j,b)|0;Aj(i,d);h[f>>3]=+Bj(i,d);Gv(a,g,f);l=e;return}function Gv(b,d,e){b=b|0;d=d|0;e=e|0;lg(b+8|0,c[d>>2]|0,+h[e>>3]);a[b+24>>0]=1;return}function Hv(){return 1452}function Iv(a,b){a=a|0;b=+b;return Jv(a,b)|0}function Jv(a,b){a=a|0;b=+b;var d=0,e=0,f=0,g=0,h=0,i=0,j=0;e=l;l=l+16|0;g=e+4|0;h=e+8|0;i=e;f=wA(8)|0;d=f;j=mF(16)|0;Cj(g,a);a=Dj(g,a)|0;Aj(h,b);lg(j,a,+Bj(h,b));h=d+4|0;c[h>>2]=j;a=mF(8)|0;h=c[h>>2]|0;c[i>>2]=0;c[g>>2]=c[i>>2];wo(a,h,g);c[f>>2]=a;l=e;return d|0}function Kv(){var b=0;if(!(a[8856]|0)){Lv(10288);Ja(53,10288,o|0)|0;b=8856;c[b>>2]=1;c[b+4>>2]=0}if(!(wi(10288)|0))Lv(10288);return 10288}function Lv(a){a=a|0;Ov(a);Ev(a,54);return}function Mv(a){a=a|0;Nv(a+24|0);return}function Nv(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);oF(d)}return}function Ov(a){a=a|0;var b=0;b=zi()|0;Ci(a,5,4,b,Tv()|0,0);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function Pv(a){a=a|0;Qv(a);return}function Qv(a){a=a|0;Rv(a);return}function Rv(b){b=b|0;Sv(b+8|0);a[b+24>>0]=1;return}function Sv(a){a=a|0;c[a>>2]=0;h[a+8>>3]=0.0;return}function Tv(){return 1472}function Uv(){return Vv()|0}function Vv(){var a=0,b=0,d=0,e=0,f=0,g=0,h=0;b=l;l=l+16|0;f=b+4|0;h=b;d=wA(8)|0;a=d;e=mF(16)|0;Sv(e);g=a+4|0;c[g>>2]=e;e=mF(8)|0;g=c[g>>2]|0;c[h>>2]=0;c[f>>2]=c[h>>2];wo(e,g,f);c[d>>2]=e;l=b;return a|0}function Wv(a,b){a=a|0;b=b|0;c[a>>2]=Xv()|0;c[a+4>>2]=Yv()|0;c[a+12>>2]=b;c[a+8>>2]=Zv()|0;c[a+32>>2]=5;return}function Xv(){return 11634}function Yv(){return 1464}function Zv(){return aw()|0}function _v(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;if((kt(d,896)|0)==512){if(c|0){$v(c);oF(c)}}else if(b|0)oF(b);return}function $v(a){a=a|0;a=c[a+4>>2]|0;if(a|0)kF(a);return}function aw(){var b=0;if(!(a[8864]|0)){c[2581]=bw()|0;c[2582]=0;b=8864;c[b>>2]=1;c[b+4>>2]=0}return 10324}function bw(){return c[369]|0}function cw(a){a=a|0;dw(a,5586);ew(a)|0;return}function dw(a,b){a=a|0;b=b|0;var d=0;d=Gi()|0;c[a>>2]=d;qw(d,b);Kx(c[a>>2]|0);return}function ew(a){a=a|0;var b=0;b=c[a>>2]|0;yv(b,fw()|0);return a|0}function fw(){var b=0;if(!(a[8872]|0)){gw(10336);Ja(55,10336,o|0)|0;b=8872;c[b>>2]=1;c[b+4>>2]=0}if(!(wi(10336)|0))gw(10336);return 10336}function gw(a){a=a|0;jw(a);Ev(a,56);return}function hw(a){a=a|0;iw(a+24|0);return}function iw(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);oF(d)}return}function jw(a){a=a|0;var b=0;b=zi()|0;Ci(a,5,5,b,nw()|0,0);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function kw(a){a=a|0;lw(a);return}function lw(a){a=a|0;mw(a);return}function mw(b){b=b|0;var d=0,e=0;d=b+8|0;e=d+48|0;do{c[d>>2]=0;d=d+4|0}while((d|0)<(e|0));a[b+56>>0]=1;return}function nw(){return 1480}function ow(){return pw()|0}function pw(){var a=0,b=0,d=0,e=0,f=0,g=0,h=0,i=0;h=l;l=l+16|0;a=h+4|0;b=h;d=wA(8)|0;e=d;f=mF(48)|0;g=f;i=g+48|0;do{c[g>>2]=0;g=g+4|0}while((g|0)<(i|0));g=e+4|0;c[g>>2]=f;i=mF(8)|0;g=c[g>>2]|0;c[b>>2]=0;c[a>>2]=c[b>>2];Ni(i,g,a);c[d>>2]=i;l=h;return e|0}function qw(a,b){a=a|0;b=b|0;c[a>>2]=rw()|0;c[a+4>>2]=sw()|0;c[a+12>>2]=b;c[a+8>>2]=tw()|0;c[a+32>>2]=6;return}function rw(){return 11628}function sw(){return 1484}function tw(){return aw()|0}function uw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;if((kt(d,896)|0)==512){if(c|0){vw(c);oF(c)}}else if(b|0)oF(b);return}function vw(a){a=a|0;a=c[a+4>>2]|0;if(a|0)kF(a);return}function ww(a){a=a|0;xw(a,5593);yw(a)|0;zw(a)|0;return}function xw(a,b){a=a|0;b=b|0;var d=0;d=ax()|0;c[a>>2]=d;bx(d,b);Kx(c[a>>2]|0);return}function yw(a){a=a|0;var b=0;b=c[a>>2]|0;yv(b,Qw()|0);return a|0}function zw(a){a=a|0;var b=0;b=c[a>>2]|0;yv(b,Aw()|0);return a|0}function Aw(){var b=0;if(!(a[8880]|0)){Bw(10376);Ja(57,10376,o|0)|0;b=8880;c[b>>2]=1;c[b+4>>2]=0}if(!(wi(10376)|0))Bw(10376);return 10376}function Bw(a){a=a|0;Ew(a);Ev(a,1);return}function Cw(a){a=a|0;Dw(a+24|0);return}function Dw(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);oF(d)}return}function Ew(a){a=a|0;var b=0;b=zi()|0;Ci(a,5,1,b,Jw()|0,2);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function Fw(a,b,c){a=a|0;b=+b;c=+c;Gw(a,b,c);return}function Gw(a,b,c){a=a|0;b=+b;c=+c;var d=0,e=0,f=0,g=0,i=0;d=l;l=l+32|0;f=d+8|0;i=d+17|0;e=d;g=d+16|0;Aj(i,b);h[f>>3]=+Bj(i,b);Aj(g,c);h[e>>3]=+Bj(g,c);Hw(a,f,e);l=d;return}function Hw(b,c,d){b=b|0;c=c|0;d=d|0;Iw(b+8|0,+h[c>>3],+h[d>>3]);a[b+24>>0]=1;return}function Iw(a,b,c){a=a|0;b=+b;c=+c;h[a>>3]=b;h[a+8>>3]=c;return}function Jw(){return 1520}function Kw(a,b){a=+a;b=+b;return Lw(a,b)|0}function Lw(a,b){a=+a;b=+b;var d=0,e=0,f=0,g=0,h=0,i=0,j=0;e=l;l=l+16|0;h=e+4|0;i=e+8|0;j=e;f=wA(8)|0;d=f;g=mF(16)|0;Aj(h,a);a=+Bj(h,a);Aj(i,b);Iw(g,a,+Bj(i,b));i=d+4|0;c[i>>2]=g;g=mF(8)|0;i=c[i>>2]|0;c[j>>2]=0;c[h>>2]=c[j>>2];Mw(g,i,h);c[f>>2]=g;l=e;return d|0}function Mw(a,b,d){a=a|0;b=b|0;d=d|0;c[a>>2]=b;d=mF(16)|0;c[d+4>>2]=0;c[d+8>>2]=0;c[d>>2]=1500;c[d+12>>2]=b;c[a+4>>2]=d;return}function Nw(a){a=a|0;gF(a);oF(a);return}function Ow(a){a=a|0;a=c[a+12>>2]|0;if(a|0)oF(a);return}function Pw(a){a=a|0;oF(a);return}function Qw(){var b=0;if(!(a[8888]|0)){Rw(10412);Ja(58,10412,o|0)|0;b=8888;c[b>>2]=1;c[b+4>>2]=0}if(!(wi(10412)|0))Rw(10412);return 10412}function Rw(a){a=a|0;Uw(a);Ev(a,59);return}function Sw(a){a=a|0;Tw(a+24|0);return}function Tw(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);oF(d)}return}function Uw(a){a=a|0;var b=0;b=zi()|0;Ci(a,5,6,b,Zw()|0,0);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function Vw(a){a=a|0;Ww(a);return}function Ww(a){a=a|0;Xw(a);return}function Xw(b){b=b|0;Yw(b+8|0);a[b+24>>0]=1;return}function Yw(a){a=a|0;c[a>>2]=0;c[a+4>>2]=0;c[a+8>>2]=0;c[a+12>>2]=0;return}function Zw(){return 1540}function _w(){return $w()|0}function $w(){var a=0,b=0,d=0,e=0,f=0,g=0,h=0;b=l;l=l+16|0;f=b+4|0;h=b;d=wA(8)|0;a=d;e=mF(16)|0;Yw(e);g=a+4|0;c[g>>2]=e;e=mF(8)|0;g=c[g>>2]|0;c[h>>2]=0;c[f>>2]=c[h>>2];Mw(e,g,f);c[d>>2]=e;l=b;return a|0}function ax(){var b=0;if(!(a[8896]|0)){hx(10448);Ja(25,10448,o|0)|0;b=8896;c[b>>2]=1;c[b+4>>2]=0}return 10448}function bx(a,b){a=a|0;b=b|0;c[a>>2]=cx()|0;c[a+4>>2]=dx()|0;c[a+12>>2]=b;c[a+8>>2]=ex()|0;c[a+32>>2]=7;return}function cx(){return 11624}function dx(){return 1532}function ex(){return aw()|0}function fx(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;if((kt(d,896)|0)==512){if(c|0){gx(c);oF(c)}}else if(b|0)oF(b);return}function gx(a){a=a|0;a=c[a+4>>2]|0;if(a|0)kF(a);return}function hx(a){a=a|0;bj(a);return}function ix(a,b,c){a=a|0;b=b|0;c=c|0;a=$h(b)|0;b=jx(c)|0;c=kx(c,0)|0;ay(a,b,c,lx()|0,0);return}function jx(a){a=a|0;return a|0}function kx(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0;h=l;l=l+16|0;d=h+8|0;e=h;f=h+4|0;c[e>>2]=a;i=lx()|0;g=i+24|0;c[f>>2]=ii(b,4)|0;a=i+28|0;if((c[a>>2]|0)>>>0<(c[i+32>>2]|0)>>>0){tx(d,g,1);ux(c[a>>2]|0,c[e>>2]|0,c[f>>2]|0);vx(d);i=(c[a>>2]|0)+8|0;c[a>>2]=i;a=i}else{wx(g,e,f);a=c[a>>2]|0}l=h;return (a-(c[g>>2]|0)>>3)+-1|0}function lx(){var b=0,d=0;if(!(a[8904]|0)){mx(10492);Ja(60,10492,o|0)|0;d=8904;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(10492)|0)){b=10492;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));mx(10492)}return 10492}function mx(a){a=a|0;px(a);return}function nx(a){a=a|0;ox(a+24|0);return}function ox(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);oF(d)}return}function px(a){a=a|0;var b=0;b=zi()|0;Ci(a,1,18,b,Yl()|0,0);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function qx(a){a=a|0;return sx(c[(rx(a)|0)>>2]|0)|0}function rx(a){a=a|0;return (c[(lx()|0)+24>>2]|0)+(a<<3)|0}function sx(a){a=a|0;return am(Gb[a&7]()|0)|0}function tx(a,b,c){a=a|0;b=b|0;c=c|0;return}function ux(a,b,d){a=a|0;b=b|0;d=d|0;c[a>>2]=b;c[a+4>>2]=d;return}function vx(a){a=a|0;return}function wx(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;i=l;l=l+32|0;g=i;h=a+4|0;e=((c[h>>2]|0)-(c[a>>2]|0)>>3)+1|0;f=xx(a)|0;if(f>>>0<e>>>0)fF(a);j=c[a>>2]|0;m=(c[a+8>>2]|0)-j|0;k=m>>2;yx(g,m>>3>>>0<f>>>1>>>0?(k>>>0<e>>>0?e:k):f,(c[h>>2]|0)-j>>3,a+8|0);h=g+8|0;ux(c[h>>2]|0,c[b>>2]|0,c[d>>2]|0);c[h>>2]=(c[h>>2]|0)+8;zx(a,g);Ax(g);l=i;return}function xx(a){a=a|0;return 536870911}function yx(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>536870911)Ia(5761,5798,1734,5908);else{f=mF(b<<3)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d<<3)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b<<3);return}function zx(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;Bx(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(0-(f>>3)<<3)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];Cx(a,(c[h>>2]|0)-(c[a>>2]|0)>>3);return}function Ax(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~((e+-8-b|0)>>>3)<<3);a=c[a>>2]|0;if(a|0)oF(a);return}function Bx(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((c[a+8>>2]|0)-d>>3<<3)|0;Dx(a,e,b,e+((c[a+4>>2]|0)-d>>3<<3)|0,b);return}function Cx(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((c[a+8>>2]|0)-d>>3<<3)|0;Dx(a,d,e,e,d+(b<<3)|0);return}function Dx(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function Ex(){Fx();return}function Fx(){Gx(10528);return}function Gx(a){a=a|0;Hx(a,5615);return}function Hx(a,b){a=a|0;b=b|0;var d=0;d=Ix()|0;c[a>>2]=d;Jx(d,b);Kx(c[a>>2]|0);return}function Ix(){var b=0;if(!(a[8912]|0)){Ux(10536);Ja(25,10536,o|0)|0;b=8912;c[b>>2]=1;c[b+4>>2]=0}return 10536}function Jx(a,b){a=a|0;b=b|0;c[a>>2]=Px()|0;c[a+4>>2]=Qx()|0;c[a+12>>2]=b;c[a+8>>2]=Rx()|0;c[a+32>>2]=8;return}function Kx(a){a=a|0;var b=0,d=0;b=l;l=l+16|0;d=b;Lx()|0;c[d>>2]=a;Mx(10532,d);l=b;return}function Lx(){if(!(a[11637]|0)){c[2633]=0;Ja(61,10532,o|0)|0;a[11637]=1}return 10532}function Mx(a,b){a=a|0;b=b|0;var d=0;d=mF(8)|0;c[d+4>>2]=c[b>>2];c[d>>2]=c[a>>2];c[a>>2]=d;return}function Nx(a){a=a|0;Ox(a);return}function Ox(a){a=a|0;var b=0,d=0;b=c[a>>2]|0;if(b|0)do{d=b;b=c[b>>2]|0;oF(d)}while((b|0)!=0);c[a>>2]=0;return}function Px(){return 11638}function Qx(){return 1544}function Rx(){return mt()|0}function Sx(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;if((kt(d,896)|0)==512){if(c|0){Tx(c);oF(c)}}else if(b|0)oF(b);return}function Tx(a){a=a|0;a=c[a+4>>2]|0;if(a|0)kF(a);return}function Ux(a){a=a|0;bj(a);return}function Vx(a,b){a=a|0;b=b|0;var d=0,e=0;Lx()|0;d=c[2633]|0;a:do if(d|0){while(1){e=c[d+4>>2]|0;if(e|0?(iE(Wx(e)|0,a)|0)==0:0)break;d=c[d>>2]|0;if(!d)break a}Xx(e,b)}while(0);return}function Wx(a){a=a|0;return c[a+12>>2]|0}function Xx(a,b){a=a|0;b=b|0;var d=0;a=a+36|0;d=c[a>>2]|0;if(d|0){uf(d);oF(d)}d=mF(4)|0;Ng(d,b);c[a>>2]=d;return}function Yx(){if(!(a[11639]|0)){c[2645]=0;Ja(62,10580,o|0)|0;a[11639]=1}return 10580}function Zx(){var b=0;if(!(a[11640]|0)){_x();c[2646]=1552;a[11640]=1;b=1552}else b=c[2646]|0;return b|0}function _x(){if(!(a[11664]|0)){a[11641]=ii(ii(8,0)|0,0)|0;a[11642]=ii(ii(0,0)|0,0)|0;a[11643]=ii(ii(0,16)|0,0)|0;a[11644]=ii(ii(8,0)|0,0)|0;a[11645]=ii(ii(0,0)|0,0)|0;a[11646]=ii(ii(8,0)|0,0)|0;a[11647]=ii(ii(0,0)|0,0)|0;a[11648]=ii(ii(8,0)|0,0)|0;a[11649]=ii(ii(0,0)|0,0)|0;a[11650]=ii(ii(8,0)|0,0)|0;a[11651]=ii(ii(0,0)|0,0)|0;a[11652]=ii(ii(0,0)|0,32)|0;a[11653]=ii(ii(0,0)|0,32)|0;a[11664]=1}return}function $x(){return 1620}function ay(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,m=0;g=l;l=l+32|0;m=g+16|0;k=g+12|0;j=g+8|0;i=g+4|0;h=g;c[m>>2]=a;c[k>>2]=b;c[j>>2]=d;c[i>>2]=e;c[h>>2]=f;Yx()|0;by(10580,m,k,j,i,h);l=g;return}function by(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0;h=mF(24)|0;hi(h+4|0,c[b>>2]|0,c[d>>2]|0,c[e>>2]|0,c[f>>2]|0,c[g>>2]|0);c[h>>2]=c[a>>2];c[a>>2]=h;return}function cy(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;u=l;l=l+32|0;q=u+28|0;r=u+16|0;s=u+4|0;t=u;b=c[b>>2]|0;if(b|0){p=r+4|0;j=r+8|0;k=s+4|0;m=s+8|0;n=s+8|0;o=r+8|0;do{h=b+4|0;i=dy(h)|0;if(i|0){e=ey(i)|0;c[r>>2]=0;c[p>>2]=0;c[j>>2]=0;f=(fy(i)|0)+1|0;gy(r,f);if(f|0)while(1){f=f+-1|0;yD(s,c[e>>2]|0);if((c[p>>2]|0)>>>0<(c[o>>2]|0)>>>0){hy(q,r,1);c[c[p>>2]>>2]=c[s>>2];iy(q);c[p>>2]=(c[p>>2]|0)+4}else jy(r,s);if(!f)break;else e=e+4|0}e=ky(i)|0;c[s>>2]=0;c[k>>2]=0;c[m>>2]=0;a:do if(c[e>>2]|0){f=0;g=0;while(1){if((f|0)==(g|0))ny(s,e);else{ly(q,s,1);c[c[k>>2]>>2]=c[e>>2];my(q);c[k>>2]=(c[k>>2]|0)+4}e=e+4|0;if(!(c[e>>2]|0))break a;f=c[k>>2]|0;g=c[n>>2]|0}}while(0);c[q>>2]=oy(h)|0;c[t>>2]=wi(i)|0;py(d,a,q,t,r,s);qy(s);ry(r)}b=c[b>>2]|0}while((b|0)!=0)}l=u;return}function dy(a){a=a|0;return c[a+12>>2]|0}function ey(a){a=a|0;return c[a+12>>2]|0}function fy(a){a=a|0;return c[a+16>>2]|0}function gy(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;f=l;l=l+32|0;d=f;e=c[a>>2]|0;if((c[a+8>>2]|0)-e>>2>>>0<b>>>0){bz(d,b,(c[a+4>>2]|0)-e>>2,a+8|0);cz(a,d);dz(d)}l=f;return}function hy(a,b,c){a=a|0;b=b|0;c=c|0;return}function iy(a){a=a|0;return}function jy(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;h=l;l=l+32|0;e=h;f=a+4|0;g=((c[f>>2]|0)-(c[a>>2]|0)>>2)+1|0;d=Wy(a)|0;if(d>>>0<g>>>0)fF(a);i=c[a>>2]|0;k=(c[a+8>>2]|0)-i|0;j=k>>1;bz(e,k>>2>>>0<d>>>1>>>0?(j>>>0<g>>>0?g:j):d,(c[f>>2]|0)-i>>2,a+8|0);g=e+8|0;c[c[g>>2]>>2]=c[b>>2];c[g>>2]=(c[g>>2]|0)+4;cz(a,e);dz(e);l=h;return}function ky(a){a=a|0;return c[a+8>>2]|0}function ly(a,b,c){a=a|0;b=b|0;c=c|0;return}function my(a){a=a|0;return}function ny(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;h=l;l=l+32|0;e=h;f=a+4|0;g=((c[f>>2]|0)-(c[a>>2]|0)>>2)+1|0;d=Ry(a)|0;if(d>>>0<g>>>0)fF(a);i=c[a>>2]|0;k=(c[a+8>>2]|0)-i|0;j=k>>1;Zy(e,k>>2>>>0<d>>>1>>>0?(j>>>0<g>>>0?g:j):d,(c[f>>2]|0)-i>>2,a+8|0);g=e+8|0;c[c[g>>2]>>2]=c[b>>2];c[g>>2]=(c[g>>2]|0)+4;_y(a,e);$y(e);l=h;return}function oy(a){a=a|0;return c[a>>2]|0}function py(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;sy(a,b,c,d,e,f);return}function qy(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-4-e|0)>>>2)<<2);oF(d)}return}function ry(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-4-e|0)>>>2)<<2);oF(d)}return}function sy(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,m=0,n=0;h=l;l=l+48|0;m=h+40|0;i=h+32|0;n=h+24|0;j=h+12|0;k=h;ED(i);a=Rg(a)|0;c[n>>2]=c[b>>2];d=c[d>>2]|0;e=c[e>>2]|0;ty(j,f);uy(k,g);c[m>>2]=c[n>>2];vy(a,m,d,e,j,k);qy(k);ry(j);GD(i);l=h;return}function ty(a,b){a=a|0;b=b|0;var d=0,e=0;c[a>>2]=0;c[a+4>>2]=0;c[a+8>>2]=0;d=b+4|0;e=(c[d>>2]|0)-(c[b>>2]|0)>>2;if(e|0){Uy(a,e);Vy(a,c[b>>2]|0,c[d>>2]|0,e)}return}function uy(a,b){a=a|0;b=b|0;var d=0,e=0;c[a>>2]=0;c[a+4>>2]=0;c[a+8>>2]=0;d=b+4|0;e=(c[d>>2]|0)-(c[b>>2]|0)>>2;if(e|0){Py(a,e);Qy(a,c[b>>2]|0,c[d>>2]|0,e)}return}function vy(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,m=0,n=0;h=l;l=l+32|0;m=h+28|0;n=h+24|0;i=h+12|0;j=h;k=Ug(wy()|0)|0;c[n>>2]=c[b>>2];c[m>>2]=c[n>>2];b=xy(m)|0;d=yy(d)|0;e=zy(e)|0;c[i>>2]=c[f>>2];m=f+4|0;c[i+4>>2]=c[m>>2];n=f+8|0;c[i+8>>2]=c[n>>2];c[n>>2]=0;c[m>>2]=0;c[f>>2]=0;f=Ay(i)|0;c[j>>2]=c[g>>2];m=g+4|0;c[j+4>>2]=c[m>>2];n=g+8|0;c[j+8>>2]=c[n>>2];c[n>>2]=0;c[m>>2]=0;c[g>>2]=0;Ba(0,k|0,a|0,b|0,d|0,e|0,f|0,By(j)|0)|0;qy(j);ry(i);l=h;return}function wy(){var b=0;if(!(a[8928]|0)){Ny(10632);b=8928;c[b>>2]=1;c[b+4>>2]=0}return 10632}function xy(a){a=a|0;return Fy(a)|0}function yy(a){a=a|0;return Dy(a)|0}function zy(a){a=a|0;return am(a)|0}function Ay(a){a=a|0;return Ey(a)|0}function By(a){a=a|0;return Cy(a)|0}function Cy(a){a=a|0;var b=0,d=0,e=0;e=(c[a+4>>2]|0)-(c[a>>2]|0)|0;d=e>>2;e=wA(e+4|0)|0;c[e>>2]=d;if(d|0){b=0;do{c[e+4+(b<<2)>>2]=Dy(c[(c[a>>2]|0)+(b<<2)>>2]|0)|0;b=b+1|0}while((b|0)!=(d|0))}return e|0}function Dy(a){a=a|0;return a|0}function Ey(a){a=a|0;var b=0,d=0,e=0;e=(c[a+4>>2]|0)-(c[a>>2]|0)|0;d=e>>2;e=wA(e+4|0)|0;c[e>>2]=d;if(d|0){b=0;do{c[e+4+(b<<2)>>2]=Fy((c[a>>2]|0)+(b<<2)|0)|0;b=b+1|0}while((b|0)!=(d|0))}return e|0}function Fy(a){a=a|0;var b=0,c=0,d=0,e=0;e=l;l=l+32|0;b=e+12|0;c=e;d=Hi(Gy()|0)|0;if(!d)a=Hy(a)|0;else{Ii(b,d);Ji(c,b);BD(a,c);a=Li(b)|0}l=e;return a|0}function Gy(){var b=0;if(!(a[8920]|0)){My(10588);Ja(25,10588,o|0)|0;b=8920;c[b>>2]=1;c[b+4>>2]=0}return 10588}function Hy(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;d=l;l=l+16|0;f=d+4|0;h=d;e=wA(8)|0;b=e;i=mF(4)|0;c[i>>2]=c[a>>2];g=b+4|0;c[g>>2]=i;a=mF(8)|0;g=c[g>>2]|0;c[h>>2]=0;c[f>>2]=c[h>>2];Iy(a,g,f);c[e>>2]=a;l=d;return b|0}function Iy(a,b,d){a=a|0;b=b|0;d=d|0;c[a>>2]=b;d=mF(16)|0;c[d+4>>2]=0;c[d+8>>2]=0;c[d>>2]=1704;c[d+12>>2]=b;c[a+4>>2]=d;return}function Jy(a){a=a|0;gF(a);oF(a);return}function Ky(a){a=a|0;a=c[a+12>>2]|0;if(a|0)oF(a);return}function Ly(a){a=a|0;oF(a);return}function My(a){a=a|0;bj(a);return}function Ny(a){a=a|0;eh(a,Oy()|0,5);return}function Oy(){return 1724}function Py(a,b){a=a|0;b=b|0;var d=0;if((Ry(a)|0)>>>0<b>>>0)fF(a);if(b>>>0>1073741823)Ia(5761,5798,1734,5908);else{d=mF(b<<2)|0;c[a+4>>2]=d;c[a>>2]=d;c[a+8>>2]=d+(b<<2);Sy(a,0);return}}function Qy(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;g=l;l=l+16|0;f=g;ly(f,a,e);e=a+4|0;a=d-b|0;if((a|0)>0){wF(c[e>>2]|0,b|0,a|0)|0;c[e>>2]=(c[e>>2]|0)+(a>>>2<<2)}my(f);l=g;return}function Ry(a){a=a|0;return 1073741823}function Sy(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((c[a+8>>2]|0)-d>>2<<2)|0;Ty(a,d,e,e,d+(b<<2)|0);return}function Ty(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function Uy(a,b){a=a|0;b=b|0;var d=0;if((Wy(a)|0)>>>0<b>>>0)fF(a);if(b>>>0>1073741823)Ia(5761,5798,1734,5908);else{d=mF(b<<2)|0;c[a+4>>2]=d;c[a>>2]=d;c[a+8>>2]=d+(b<<2);Xy(a,0);return}}function Vy(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;g=l;l=l+16|0;f=g;hy(f,a,e);e=a+4|0;a=d-b|0;if((a|0)>0){wF(c[e>>2]|0,b|0,a|0)|0;c[e>>2]=(c[e>>2]|0)+(a>>>2<<2)}iy(f);l=g;return}function Wy(a){a=a|0;return 1073741823}function Xy(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((c[a+8>>2]|0)-d>>2<<2)|0;Yy(a,d,e,e,d+(b<<2)|0);return}function Yy(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function Zy(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>1073741823)Ia(5761,5798,1734,5908);else{f=mF(b<<2)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d<<2)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b<<2);return}function _y(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;az(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(0-(f>>2)<<2)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];Sy(a,(c[h>>2]|0)-(c[a>>2]|0)>>2);return}function $y(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~((e+-4-b|0)>>>2)<<2);a=c[a>>2]|0;if(a|0)oF(a);return}function az(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((c[a+8>>2]|0)-d>>2<<2)|0;Ty(a,e,b,e+((c[a+4>>2]|0)-d>>2<<2)|0,b);return}function bz(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>1073741823)Ia(5761,5798,1734,5908);else{f=mF(b<<2)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d<<2)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b<<2);return}function cz(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;ez(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(0-(f>>2)<<2)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];Xy(a,(c[h>>2]|0)-(c[a>>2]|0)>>2);return}function dz(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~((e+-4-b|0)>>>2)<<2);a=c[a>>2]|0;if(a|0)oF(a);return}function ez(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((c[a+8>>2]|0)-d>>2<<2)|0;Yy(a,e,b,e+((c[a+4>>2]|0)-d>>2<<2)|0,b);return}function fz(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;s=l;l=l+48|0;m=s+32|0;o=s+24|0;k=s+28|0;p=s+16|0;q=s+4|0;r=s;n=s+20|0;i=Zx()|0;g=c[i>>2]|0;h=c[g>>2]|0;if(h|0){j=c[i+8>>2]|0;i=c[i+4>>2]|0;while(1){yD(m,h);gz(a,m,i,j);g=g+4|0;h=c[g>>2]|0;if(!h)break;else{j=j+1|0;i=i+1|0}}}g=$x()|0;h=c[g>>2]|0;if(h|0)do{yD(m,h);c[o>>2]=c[g+4>>2];hz(b,m,o);g=g+8|0;h=c[g>>2]|0}while((h|0)!=0);g=c[(Lx()|0)>>2]|0;if(g|0)do{b=c[g+4>>2]|0;yD(m,c[(iz(b)|0)>>2]|0);c[o>>2]=Wx(b)|0;jz(d,m,o);g=c[g>>2]|0}while((g|0)!=0);yD(k,0);g=Yx()|0;c[m>>2]=c[k>>2];cy(m,g,f);g=c[(Lx()|0)>>2]|0;if(g|0){j=q+4|0;a=q+8|0;b=q+8|0;do{i=c[g+4>>2]|0;yD(o,c[(iz(i)|0)>>2]|0);lz(p,kz(i)|0);h=c[p>>2]|0;if(h|0){c[q>>2]=0;c[j>>2]=0;c[a>>2]=0;do{yD(r,c[(iz(c[h+4>>2]|0)|0)>>2]|0);if((c[j>>2]|0)>>>0<(c[b>>2]|0)>>>0){hy(m,q,1);c[c[j>>2]>>2]=c[r>>2];iy(m);c[j>>2]=(c[j>>2]|0)+4}else jy(q,r);h=c[h>>2]|0}while((h|0)!=0);mz(e,o,q);ry(q)}c[n>>2]=c[o>>2];k=nz(i)|0;c[m>>2]=c[n>>2];cy(m,k,f);_i(p);g=c[g>>2]|0}while((g|0)!=0)}l=s;return}function gz(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;Bz(a,b,c,d);return}function hz(a,b,c){a=a|0;b=b|0;c=c|0;Az(a,b,c);return}function iz(a){a=a|0;return a|0}function jz(a,b,c){a=a|0;b=b|0;c=c|0;vz(a,b,c);return}function kz(a){a=a|0;return a+16|0}function lz(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0;g=l;l=l+16|0;f=g+8|0;d=g;c[a>>2]=0;e=c[b>>2]|0;c[f>>2]=e;c[d>>2]=a;d=tz(d)|0;if(e|0){e=mF(12)|0;h=(uz(f)|0)+4|0;a=c[h+4>>2]|0;b=e+4|0;c[b>>2]=c[h>>2];c[b+4>>2]=a;b=c[c[f>>2]>>2]|0;c[f>>2]=b;if(!b)a=e;else{b=e;while(1){a=mF(12)|0;j=(uz(f)|0)+4|0;i=c[j+4>>2]|0;h=a+4|0;c[h>>2]=c[j>>2];c[h+4>>2]=i;c[b>>2]=a;h=c[c[f>>2]>>2]|0;c[f>>2]=h;if(!h)break;else b=a}}c[a>>2]=c[d>>2];c[d>>2]=e}l=g;return}function mz(a,b,c){a=a|0;b=b|0;c=c|0;oz(a,b,c);return}function nz(a){a=a|0;return a+24|0}function oz(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+32|0;h=e+24|0;f=e+16|0;i=e+12|0;g=e;ED(f);a=Rg(a)|0;c[i>>2]=c[b>>2];ty(g,d);c[h>>2]=c[i>>2];pz(a,h,g);ry(g);GD(f);l=e;return}function pz(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=l;l=l+32|0;h=e+16|0;i=e+12|0;f=e;g=Ug(qz()|0)|0;c[i>>2]=c[b>>2];c[h>>2]=c[i>>2];b=xy(h)|0;c[f>>2]=c[d>>2];h=d+4|0;c[f+4>>2]=c[h>>2];i=d+8|0;c[f+8>>2]=c[i>>2];c[i>>2]=0;c[h>>2]=0;c[d>>2]=0;wa(0,g|0,a|0,b|0,Ay(f)|0)|0;ry(f);l=e;return}function qz(){var b=0;if(!(a[8936]|0)){rz(10644);b=8936;c[b>>2]=1;c[b+4>>2]=0}return 10644}function rz(a){a=a|0;eh(a,sz()|0,2);return}function sz(){return 1780}function tz(a){a=a|0;return c[a>>2]|0}function uz(a){a=a|0;return c[a>>2]|0}function vz(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+32|0;g=e+16|0;f=e+8|0;h=e;ED(f);a=Rg(a)|0;c[h>>2]=c[b>>2];d=c[d>>2]|0;c[g>>2]=c[h>>2];wz(a,g,d);GD(f);l=e;return}function wz(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+16|0;g=e+4|0;h=e;f=Ug(xz()|0)|0;c[h>>2]=c[b>>2];c[g>>2]=c[h>>2];b=xy(g)|0;wa(0,f|0,a|0,b|0,yy(d)|0)|0;l=e;return}function xz(){var b=0;if(!(a[8944]|0)){yz(10656);b=8944;c[b>>2]=1;c[b+4>>2]=0}return 10656}function yz(a){a=a|0;eh(a,zz()|0,2);return}function zz(){return 1792}function Az(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=l;l=l+32|0;g=e+16|0;f=e+8|0;h=e;ED(f);a=Rg(a)|0;c[h>>2]=c[b>>2];d=c[d>>2]|0;c[g>>2]=c[h>>2];wz(a,g,d);GD(f);l=e;return}function Bz(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0;g=l;l=l+32|0;i=g+16|0;h=g+8|0;j=g;ED(h);b=Rg(b)|0;c[j>>2]=c[d>>2];e=a[e>>0]|0;f=a[f>>0]|0;c[i>>2]=c[j>>2];Cz(b,i,e,f);GD(h);l=g;return}function Cz(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;f=l;l=l+16|0;h=f+4|0;i=f;g=Ug(Dz()|0)|0;c[i>>2]=c[b>>2];c[h>>2]=c[i>>2];b=xy(h)|0;d=Ez(d)|0;db(0,g|0,a|0,b|0,d|0,Ez(e)|0)|0;l=f;return}function Dz(){var b=0;if(!(a[8952]|0)){Gz(10668);b=8952;c[b>>2]=1;c[b+4>>2]=0}return 10668}function Ez(a){a=a|0;return Fz(a)|0}function Fz(a){a=a|0;return a&255|0}function Gz(a){a=a|0;eh(a,Hz()|0,3);return}function Hz(){return 1804}function Iz(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;o=l;l=l+32|0;i=o+20|0;j=o+8|0;k=o+4|0;m=o;Fk(b,0);f=AD(d)|0;c[j>>2]=0;n=j+4|0;c[n>>2]=0;c[j+8>>2]=0;switch(f<<24>>24){case 0:{a[k>>0]=0;Jz(i,e,k);Kz(b,i)|0;vf(i);break}case 8:{n=zD(d)|0;a[k>>0]=8;yD(m,c[n+4>>2]|0);Lz(i,e,k,m,n+8|0);Kz(b,i)|0;vf(i);break}case 9:{g=zD(d)|0;d=c[g+4>>2]|0;if(d|0){h=j+8|0;f=g+12|0;while(1){d=d+-1|0;yD(k,c[f>>2]|0);if((c[n>>2]|0)>>>0<(c[h>>2]|0)>>>0){hy(i,j,1);c[c[n>>2]>>2]=c[k>>2];iy(i);c[n>>2]=(c[n>>2]|0)+4}else jy(j,k);if(!d)break;else f=f+4|0}}a[k>>0]=9;yD(m,c[g+8>>2]|0);Mz(i,e,k,m,j);Kz(b,i)|0;vf(i);break}default:{n=zD(d)|0;a[k>>0]=f;yD(m,c[n+4>>2]|0);Nz(i,e,k,m);Kz(b,i)|0;vf(i)}}ry(j);l=o;return}function Jz(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0;e=l;l=l+16|0;f=e;ED(f);c=Rg(c)|0;$z(b,c,a[d>>0]|0);GD(f);l=e;return}function Kz(a,b){a=a|0;b=b|0;var d=0;d=c[a>>2]|0;if(d|0)fb(d|0);c[a>>2]=c[b>>2];c[b>>2]=0;return a|0}function Lz(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0;h=l;l=l+32|0;j=h+16|0;i=h+8|0;k=h;ED(i);d=Rg(d)|0;e=a[e>>0]|0;c[k>>2]=c[f>>2];g=c[g>>2]|0;c[j>>2]=c[k>>2];Xz(b,d,e,j,g);GD(i);l=h;return}function Mz(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,m=0;h=l;l=l+32|0;k=h+24|0;i=h+16|0;m=h+12|0;j=h;ED(i);d=Rg(d)|0;e=a[e>>0]|0;c[m>>2]=c[f>>2];ty(j,g);c[k>>2]=c[m>>2];Tz(b,d,e,k,j);ry(j);GD(i);l=h;return}function Nz(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0;g=l;l=l+32|0;i=g+16|0;h=g+8|0;j=g;ED(h);d=Rg(d)|0;e=a[e>>0]|0;c[j>>2]=c[f>>2];c[i>>2]=c[j>>2];Oz(b,d,e,i);GD(h);l=g;return}function Oz(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;f=l;l=l+16|0;g=f+4|0;i=f;h=Ug(Pz()|0)|0;d=Ez(d)|0;c[i>>2]=c[e>>2];c[g>>2]=c[i>>2];Qz(a,wa(0,h|0,b|0,d|0,xy(g)|0)|0);l=f;return}function Pz(){var b=0;if(!(a[8960]|0)){Rz(10680);b=8960;c[b>>2]=1;c[b+4>>2]=0}return 10680}function Qz(a,b){a=a|0;b=b|0;Fk(a,b);return}function Rz(a){a=a|0;eh(a,Sz()|0,2);return}function Sz(){return 1820}function Tz(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0;g=l;l=l+32|0;j=g+16|0;k=g+12|0;h=g;i=Ug(Uz()|0)|0;d=Ez(d)|0;c[k>>2]=c[e>>2];c[j>>2]=c[k>>2];e=xy(j)|0;c[h>>2]=c[f>>2];j=f+4|0;c[h+4>>2]=c[j>>2];k=f+8|0;c[h+8>>2]=c[k>>2];c[k>>2]=0;c[j>>2]=0;c[f>>2]=0;Qz(a,db(0,i|0,b|0,d|0,e|0,Ay(h)|0)|0);ry(h);l=g;return}function Uz(){var b=0;if(!(a[8968]|0)){Vz(10692);b=8968;c[b>>2]=1;c[b+4>>2]=0}return 10692}function Vz(a){a=a|0;eh(a,Wz()|0,3);return}function Wz(){return 1832}function Xz(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0;g=l;l=l+16|0;i=g+4|0;j=g;h=Ug(Yz()|0)|0;d=Ez(d)|0;c[j>>2]=c[e>>2];c[i>>2]=c[j>>2];e=xy(i)|0;Qz(a,db(0,h|0,b|0,d|0,e|0,zy(f)|0)|0);l=g;return}function Yz(){var b=0;if(!(a[8976]|0)){Zz(10704);b=8976;c[b>>2]=1;c[b+4>>2]=0}return 10704}function Zz(a){a=a|0;eh(a,_z()|0,3);return}function _z(){return 1848}function $z(a,b,c){a=a|0;b=b|0;c=c|0;var d=0;d=Ug(aA()|0)|0;Qz(a,gb(0,d|0,b|0,Ez(c)|0)|0);return}function aA(){var b=0;if(!(a[8984]|0)){bA(10716);b=8984;c[b>>2]=1;c[b+4>>2]=0}return 10716}function bA(a){a=a|0;eh(a,cA()|0,1);return}function cA(){return 1864}function dA(){eA();fA();gA();return}function eA(){c[2683]=nF(65536)|0;return}function fA(){DA(10780);return}function gA(){hA(10740);return}function hA(a){a=a|0;iA(a,5704);jA(a)|0;return}function iA(a,b){a=a|0;b=b|0;var d=0;d=Gy()|0;c[a>>2]=d;xA(d,b);Kx(c[a>>2]|0);return}function jA(a){a=a|0;var b=0;b=c[a>>2]|0;yv(b,kA()|0);return a|0}function kA(){var b=0;if(!(a[8992]|0)){lA(10744);Ja(63,10744,o|0)|0;b=8992;c[b>>2]=1;c[b+4>>2]=0}if(!(wi(10744)|0))lA(10744);return 10744}function lA(a){a=a|0;oA(a);Ev(a,25);return}function mA(a){a=a|0;nA(a+24|0);return}function nA(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);oF(d)}return}function oA(a){a=a|0;var b=0;b=zi()|0;Ci(a,5,19,b,tA()|0,1);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function pA(a,b){a=a|0;b=b|0;qA(a,b);return}function qA(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=l;l=l+16|0;e=d;f=d+4|0;cl(f,b);c[e>>2]=dl(f,b)|0;rA(a,e);l=d;return}function rA(b,d){b=b|0;d=d|0;sA(b+4|0,c[d>>2]|0);a[b+8>>0]=1;return}function sA(a,b){a=a|0;b=b|0;c[a>>2]=b;return}function tA(){return 1872}function uA(a){a=a|0;return vA(a)|0}function vA(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;d=l;l=l+16|0;f=d+4|0;h=d;e=wA(8)|0;b=e;i=mF(4)|0;cl(f,a);sA(i,dl(f,a)|0);g=b+4|0;c[g>>2]=i;a=mF(8)|0;g=c[g>>2]|0;c[h>>2]=0;c[f>>2]=c[h>>2];Iy(a,g,f);c[e>>2]=a;l=d;return b|0}function wA(a){a=a|0;var b=0,d=0;a=a+7&-8;if(a>>>0<=32768?(b=c[2682]|0,a>>>0<=(65536-b|0)>>>0):0){d=(c[2683]|0)+b|0;c[2682]=b+a;a=d}else{a=nF(a+8|0)|0;c[a>>2]=c[2684];c[2684]=a;a=a+8|0}return a|0}function xA(a,b){a=a|0;b=b|0;c[a>>2]=yA()|0;c[a+4>>2]=zA()|0;c[a+12>>2]=b;c[a+8>>2]=AA()|0;c[a+32>>2]=9;return}function yA(){return 11668}function zA(){return 1880}function AA(){return aw()|0}function BA(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;if((kt(d,896)|0)==512){if(c|0){CA(c);oF(c)}}else if(b|0)oF(b);return}function CA(a){a=a|0;a=c[a+4>>2]|0;if(a|0)kF(a);return}function DA(a){a=a|0;EA(a,5712);FA(a)|0;GA(a,5718,26)|0;HA(a,5729,1)|0;IA(a,5737,10)|0;JA(a,5747,20)|0;LA(a,5754,27)|0;return}function EA(a,b){a=a|0;b=b|0;var d=0;d=qD()|0;c[a>>2]=d;rD(d,b);Kx(c[a>>2]|0);return}function FA(a){a=a|0;var b=0;b=c[a>>2]|0;yv(b,bD()|0);return a|0}function GA(a,b,c){a=a|0;b=b|0;c=c|0;DC(a,$h(b)|0,c,0);return a|0}function HA(a,b,c){a=a|0;b=b|0;c=c|0;gC(a,$h(b)|0,c,0);return a|0}function IA(a,b,c){a=a|0;b=b|0;c=c|0;EB(a,$h(b)|0,c,0);return a|0}function JA(a,b,c){a=a|0;b=b|0;c=c|0;hB(a,$h(b)|0,c,0);return a|0}function KA(a,b){a=a|0;b=b|0;var d=0,e=0;a:while(1){d=c[2684]|0;while(1){if((d|0)==(b|0))break a;e=c[d>>2]|0;c[2684]=e;if(!d)d=e;else break}oF(d)}c[2682]=a;return}function LA(a,b,c){a=a|0;b=b|0;c=c|0;MA(a,$h(b)|0,c,0);return a|0}function MA(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;g=c[a>>2]|0;f=NA()|0;a=OA(d)|0;ei(g,b,f,a,PA(d,e)|0,e);return}function NA(){var b=0,d=0;if(!(a[9e3]|0)){$A(10784);Ja(64,10784,o|0)|0;d=9e3;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(10784)|0)){b=10784;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));$A(10784)}return 10784}function OA(a){a=a|0;return a|0}function PA(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0;h=l;l=l+16|0;d=h+8|0;e=h;f=h+4|0;c[e>>2]=a;i=NA()|0;g=i+24|0;c[f>>2]=ii(b,4)|0;a=i+28|0;if((c[a>>2]|0)>>>0<(c[i+32>>2]|0)>>>0){QA(d,g,1);RA(c[a>>2]|0,c[e>>2]|0,c[f>>2]|0);SA(d);i=(c[a>>2]|0)+8|0;c[a>>2]=i;a=i}else{TA(g,e,f);a=c[a>>2]|0}l=h;return (a-(c[g>>2]|0)>>3)+-1|0}function QA(a,b,c){a=a|0;b=b|0;c=c|0;return}function RA(a,b,d){a=a|0;b=b|0;d=d|0;c[a>>2]=b;c[a+4>>2]=d;return}function SA(a){a=a|0;return}function TA(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;i=l;l=l+32|0;g=i;h=a+4|0;e=((c[h>>2]|0)-(c[a>>2]|0)>>3)+1|0;f=UA(a)|0;if(f>>>0<e>>>0)fF(a);j=c[a>>2]|0;m=(c[a+8>>2]|0)-j|0;k=m>>2;VA(g,m>>3>>>0<f>>>1>>>0?(k>>>0<e>>>0?e:k):f,(c[h>>2]|0)-j>>3,a+8|0);h=g+8|0;RA(c[h>>2]|0,c[b>>2]|0,c[d>>2]|0);c[h>>2]=(c[h>>2]|0)+8;WA(a,g);XA(g);l=i;return}function UA(a){a=a|0;return 536870911}function VA(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>536870911)Ia(5761,5798,1734,5908);else{f=mF(b<<3)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d<<3)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b<<3);return}function WA(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;YA(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(0-(f>>3)<<3)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];ZA(a,(c[h>>2]|0)-(c[a>>2]|0)>>3);return}function XA(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~((e+-8-b|0)>>>3)<<3);a=c[a>>2]|0;if(a|0)oF(a);return}function YA(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((c[a+8>>2]|0)-d>>3<<3)|0;_A(a,e,b,e+((c[a+4>>2]|0)-d>>3<<3)|0,b);return}function ZA(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((c[a+8>>2]|0)-d>>3<<3)|0;_A(a,d,e,e,d+(b<<3)|0);return}function _A(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function $A(a){a=a|0;cB(a);return}function aB(a){a=a|0;bB(a+24|0);return}function bB(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);oF(d)}return}function cB(a){a=a|0;var b=0;b=zi()|0;Ci(a,1,11,b,dB()|0,2);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function dB(){return 1888}function eB(a,b,d){a=a|0;b=b|0;d=d|0;gB(c[(fB(a)|0)>>2]|0,b,d);return}function fB(a){a=a|0;return (c[(NA()|0)+24>>2]|0)+(a<<3)|0}function gB(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0;d=l;l=l+16|0;f=d+1|0;e=d;cl(f,b);b=dl(f,b)|0;cl(e,c);c=dl(e,c)|0;ub[a&31](b,c);l=d;return}function hB(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;g=c[a>>2]|0;f=iB()|0;a=jB(d)|0;ei(g,b,f,a,kB(d,e)|0,e);return}function iB(){var b=0,d=0;if(!(a[9008]|0)){wB(10820);Ja(65,10820,o|0)|0;d=9008;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(10820)|0)){b=10820;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));wB(10820)}return 10820}function jB(a){a=a|0;return a|0}function kB(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0;h=l;l=l+16|0;d=h+8|0;e=h;f=h+4|0;c[e>>2]=a;i=iB()|0;g=i+24|0;c[f>>2]=ii(b,4)|0;a=i+28|0;if((c[a>>2]|0)>>>0<(c[i+32>>2]|0)>>>0){lB(d,g,1);mB(c[a>>2]|0,c[e>>2]|0,c[f>>2]|0);nB(d);i=(c[a>>2]|0)+8|0;c[a>>2]=i;a=i}else{oB(g,e,f);a=c[a>>2]|0}l=h;return (a-(c[g>>2]|0)>>3)+-1|0}function lB(a,b,c){a=a|0;b=b|0;c=c|0;return}function mB(a,b,d){a=a|0;b=b|0;d=d|0;c[a>>2]=b;c[a+4>>2]=d;return}function nB(a){a=a|0;return}function oB(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;i=l;l=l+32|0;g=i;h=a+4|0;e=((c[h>>2]|0)-(c[a>>2]|0)>>3)+1|0;f=pB(a)|0;if(f>>>0<e>>>0)fF(a);j=c[a>>2]|0;m=(c[a+8>>2]|0)-j|0;k=m>>2;qB(g,m>>3>>>0<f>>>1>>>0?(k>>>0<e>>>0?e:k):f,(c[h>>2]|0)-j>>3,a+8|0);h=g+8|0;mB(c[h>>2]|0,c[b>>2]|0,c[d>>2]|0);c[h>>2]=(c[h>>2]|0)+8;rB(a,g);sB(g);l=i;return}function pB(a){a=a|0;return 536870911}function qB(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>536870911)Ia(5761,5798,1734,5908);else{f=mF(b<<3)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d<<3)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b<<3);return}function rB(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;tB(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(0-(f>>3)<<3)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];uB(a,(c[h>>2]|0)-(c[a>>2]|0)>>3);return}function sB(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~((e+-8-b|0)>>>3)<<3);a=c[a>>2]|0;if(a|0)oF(a);return}function tB(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((c[a+8>>2]|0)-d>>3<<3)|0;vB(a,e,b,e+((c[a+4>>2]|0)-d>>3<<3)|0,b);return}function uB(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((c[a+8>>2]|0)-d>>3<<3)|0;vB(a,d,e,e,d+(b<<3)|0);return}function vB(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function wB(a){a=a|0;zB(a);return}function xB(a){a=a|0;yB(a+24|0);return}function yB(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);oF(d)}return}function zB(a){a=a|0;var b=0;b=zi()|0;Ci(a,1,12,b,AB()|0,1);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function AB(){return 1900}function BB(a,b){a=a|0;b=b|0;return DB(c[(CB(a)|0)>>2]|0,b)|0}function CB(a){a=a|0;return (c[(iB()|0)+24>>2]|0)+(a<<3)|0}function DB(a,b){a=a|0;b=b|0;var c=0,d=0;c=l;l=l+16|0;d=c;cl(d,b);b=dl(d,b)|0;b=am(vb[a&31](b)|0)|0;l=c;return b|0}function EB(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;g=c[a>>2]|0;f=FB()|0;a=GB(d)|0;ei(g,b,f,a,HB(d,e)|0,e);return}function FB(){var b=0,d=0;if(!(a[9016]|0)){TB(10856);Ja(66,10856,o|0)|0;d=9016;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(10856)|0)){b=10856;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));TB(10856)}return 10856}function GB(a){a=a|0;return a|0}function HB(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0;h=l;l=l+16|0;d=h+8|0;e=h;f=h+4|0;c[e>>2]=a;i=FB()|0;g=i+24|0;c[f>>2]=ii(b,4)|0;a=i+28|0;if((c[a>>2]|0)>>>0<(c[i+32>>2]|0)>>>0){IB(d,g,1);JB(c[a>>2]|0,c[e>>2]|0,c[f>>2]|0);KB(d);i=(c[a>>2]|0)+8|0;c[a>>2]=i;a=i}else{LB(g,e,f);a=c[a>>2]|0}l=h;return (a-(c[g>>2]|0)>>3)+-1|0}function IB(a,b,c){a=a|0;b=b|0;c=c|0;return}function JB(a,b,d){a=a|0;b=b|0;d=d|0;c[a>>2]=b;c[a+4>>2]=d;return}function KB(a){a=a|0;return}function LB(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;i=l;l=l+32|0;g=i;h=a+4|0;e=((c[h>>2]|0)-(c[a>>2]|0)>>3)+1|0;f=MB(a)|0;if(f>>>0<e>>>0)fF(a);j=c[a>>2]|0;m=(c[a+8>>2]|0)-j|0;k=m>>2;NB(g,m>>3>>>0<f>>>1>>>0?(k>>>0<e>>>0?e:k):f,(c[h>>2]|0)-j>>3,a+8|0);h=g+8|0;JB(c[h>>2]|0,c[b>>2]|0,c[d>>2]|0);c[h>>2]=(c[h>>2]|0)+8;OB(a,g);PB(g);l=i;return}function MB(a){a=a|0;return 536870911}function NB(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>536870911)Ia(5761,5798,1734,5908);else{f=mF(b<<3)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d<<3)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b<<3);return}function OB(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;QB(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(0-(f>>3)<<3)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];RB(a,(c[h>>2]|0)-(c[a>>2]|0)>>3);return}function PB(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~((e+-8-b|0)>>>3)<<3);a=c[a>>2]|0;if(a|0)oF(a);return}function QB(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((c[a+8>>2]|0)-d>>3<<3)|0;SB(a,e,b,e+((c[a+4>>2]|0)-d>>3<<3)|0,b);return}function RB(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((c[a+8>>2]|0)-d>>3<<3)|0;SB(a,d,e,e,d+(b<<3)|0);return}function SB(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function TB(a){a=a|0;WB(a);return}function UB(a){a=a|0;VB(a+24|0);return}function VB(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);oF(d)}return}function WB(a){a=a|0;var b=0;b=zi()|0;Ci(a,1,8,b,XB()|0,2);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function XB(){return 1908}function YB(a,b,d){a=a|0;b=b|0;d=d|0;return _B(c[(ZB(a)|0)>>2]|0,b,d)|0}function ZB(a){a=a|0;return (c[(FB()|0)+24>>2]|0)+(a<<3)|0}function _B(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0;e=l;l=l+32|0;h=e+12|0;g=e+8|0;i=e;j=e+16|0;f=e+4|0;$B(j,b);aC(i,j,b);Bk(f,d);d=Ck(f,d)|0;c[h>>2]=c[i>>2];Kb[a&15](g,h,d);d=bC(g)|0;vf(g);Dk(f);l=e;return d|0}function $B(a,b){a=a|0;b=b|0;return}function aC(a,b,c){a=a|0;b=b|0;c=c|0;cC(a,c);return}function bC(a){a=a|0;return Rg(a)|0}function cC(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;f=l;l=l+16|0;d=f;e=b;if(!(e&1))c[a>>2]=c[b>>2];else{dC(d,0);Na(e|0,d|0)|0;eC(a,d);fC(d)}l=f;return}function dC(b,d){b=b|0;d=d|0;$g(b,d);c[b+4>>2]=0;a[b+8>>0]=0;return}function eC(a,b){a=a|0;b=b|0;c[a>>2]=c[b+4>>2];return}function fC(b){b=b|0;a[b+8>>0]=0;return}function gC(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;g=c[a>>2]|0;f=hC()|0;a=iC(d)|0;ei(g,b,f,a,jC(d,e)|0,e);return}function hC(){var b=0,d=0;if(!(a[9024]|0)){vC(10892);Ja(67,10892,o|0)|0;d=9024;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(10892)|0)){b=10892;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));vC(10892)}return 10892}function iC(a){a=a|0;return a|0}function jC(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0;h=l;l=l+16|0;d=h+8|0;e=h;f=h+4|0;c[e>>2]=a;i=hC()|0;g=i+24|0;c[f>>2]=ii(b,4)|0;a=i+28|0;if((c[a>>2]|0)>>>0<(c[i+32>>2]|0)>>>0){kC(d,g,1);lC(c[a>>2]|0,c[e>>2]|0,c[f>>2]|0);mC(d);i=(c[a>>2]|0)+8|0;c[a>>2]=i;a=i}else{nC(g,e,f);a=c[a>>2]|0}l=h;return (a-(c[g>>2]|0)>>3)+-1|0}function kC(a,b,c){a=a|0;b=b|0;c=c|0;return}function lC(a,b,d){a=a|0;b=b|0;d=d|0;c[a>>2]=b;c[a+4>>2]=d;return}function mC(a){a=a|0;return}function nC(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;i=l;l=l+32|0;g=i;h=a+4|0;e=((c[h>>2]|0)-(c[a>>2]|0)>>3)+1|0;f=oC(a)|0;if(f>>>0<e>>>0)fF(a);j=c[a>>2]|0;m=(c[a+8>>2]|0)-j|0;k=m>>2;pC(g,m>>3>>>0<f>>>1>>>0?(k>>>0<e>>>0?e:k):f,(c[h>>2]|0)-j>>3,a+8|0);h=g+8|0;lC(c[h>>2]|0,c[b>>2]|0,c[d>>2]|0);c[h>>2]=(c[h>>2]|0)+8;qC(a,g);rC(g);l=i;return}function oC(a){a=a|0;return 536870911}function pC(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>536870911)Ia(5761,5798,1734,5908);else{f=mF(b<<3)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d<<3)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b<<3);return}function qC(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;sC(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(0-(f>>3)<<3)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];tC(a,(c[h>>2]|0)-(c[a>>2]|0)>>3);return}function rC(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~((e+-8-b|0)>>>3)<<3);a=c[a>>2]|0;if(a|0)oF(a);return}function sC(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((c[a+8>>2]|0)-d>>3<<3)|0;uC(a,e,b,e+((c[a+4>>2]|0)-d>>3<<3)|0,b);return}function tC(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((c[a+8>>2]|0)-d>>3<<3)|0;uC(a,d,e,e,d+(b<<3)|0);return}function uC(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function vC(a){a=a|0;yC(a);return}function wC(a){a=a|0;xC(a+24|0);return}function xC(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);oF(d)}return}function yC(a){a=a|0;var b=0;b=zi()|0;Ci(a,1,1,b,zC()|0,5);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function zC(){return 1920}function AC(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;CC(c[(BC(a)|0)>>2]|0,b,d,e,f,g);return}function BC(a){a=a|0;return (c[(hC()|0)+24>>2]|0)+(a<<3)|0}function CC(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,m=0;g=l;l=l+32|0;h=g+16|0;i=g+12|0;j=g+8|0;k=g+4|0;m=g;Bk(h,b);b=Ck(h,b)|0;Bk(i,c);c=Ck(i,c)|0;Bk(j,d);d=Ck(j,d)|0;Bk(k,e);e=Ck(k,e)|0;Bk(m,f);f=Ck(m,f)|0;qb[a&1](b,c,d,e,f);Dk(m);Dk(k);Dk(j);Dk(i);Dk(h);l=g;return}
function DC(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;g=c[a>>2]|0;f=EC()|0;a=FC(d)|0;ei(g,b,f,a,GC(d,e)|0,e);return}function EC(){var b=0,d=0;if(!(a[9032]|0)){SC(10928);Ja(68,10928,o|0)|0;d=9032;c[d>>2]=1;c[d+4>>2]=0}if(!(wi(10928)|0)){b=10928;d=b+36|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(d|0));SC(10928)}return 10928}function FC(a){a=a|0;return a|0}function GC(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0;h=l;l=l+16|0;d=h+8|0;e=h;f=h+4|0;c[e>>2]=a;i=EC()|0;g=i+24|0;c[f>>2]=ii(b,4)|0;a=i+28|0;if((c[a>>2]|0)>>>0<(c[i+32>>2]|0)>>>0){HC(d,g,1);IC(c[a>>2]|0,c[e>>2]|0,c[f>>2]|0);JC(d);i=(c[a>>2]|0)+8|0;c[a>>2]=i;a=i}else{KC(g,e,f);a=c[a>>2]|0}l=h;return (a-(c[g>>2]|0)>>3)+-1|0}function HC(a,b,c){a=a|0;b=b|0;c=c|0;return}function IC(a,b,d){a=a|0;b=b|0;d=d|0;c[a>>2]=b;c[a+4>>2]=d;return}function JC(a){a=a|0;return}function KC(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0;i=l;l=l+32|0;g=i;h=a+4|0;e=((c[h>>2]|0)-(c[a>>2]|0)>>3)+1|0;f=LC(a)|0;if(f>>>0<e>>>0)fF(a);j=c[a>>2]|0;m=(c[a+8>>2]|0)-j|0;k=m>>2;MC(g,m>>3>>>0<f>>>1>>>0?(k>>>0<e>>>0?e:k):f,(c[h>>2]|0)-j>>3,a+8|0);h=g+8|0;IC(c[h>>2]|0,c[b>>2]|0,c[d>>2]|0);c[h>>2]=(c[h>>2]|0)+8;NC(a,g);OC(g);l=i;return}function LC(a){a=a|0;return 536870911}function MC(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;c[a+12>>2]=0;c[a+16>>2]=e;do if(b)if(b>>>0>536870911)Ia(5761,5798,1734,5908);else{f=mF(b<<3)|0;break}else f=0;while(0);c[a>>2]=f;e=f+(d<<3)|0;c[a+8>>2]=e;c[a+4>>2]=e;c[a+12>>2]=f+(b<<3);return}function NC(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;PC(a);e=c[a>>2]|0;h=a+4|0;g=b+4|0;f=(c[h>>2]|0)-e|0;d=(c[g>>2]|0)+(0-(f>>3)<<3)|0;c[g>>2]=d;if((f|0)>0){wF(d|0,e|0,f|0)|0;e=g;d=c[g>>2]|0}else e=g;g=c[a>>2]|0;c[a>>2]=d;c[e>>2]=g;d=b+8|0;g=c[h>>2]|0;c[h>>2]=c[d>>2];c[d>>2]=g;d=a+8|0;g=b+12|0;f=c[d>>2]|0;c[d>>2]=c[g>>2];c[g>>2]=f;c[b>>2]=c[e>>2];QC(a,(c[h>>2]|0)-(c[a>>2]|0)>>3);return}function OC(a){a=a|0;var b=0,d=0,e=0;b=c[a+4>>2]|0;d=a+8|0;e=c[d>>2]|0;if((e|0)!=(b|0))c[d>>2]=e+(~((e+-8-b|0)>>>3)<<3);a=c[a>>2]|0;if(a|0)oF(a);return}function PC(a){a=a|0;var b=0,d=0,e=0;e=c[a>>2]|0;d=e;b=e+((c[a+8>>2]|0)-d>>3<<3)|0;RC(a,e,b,e+((c[a+4>>2]|0)-d>>3<<3)|0,b);return}function QC(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a>>2]|0;e=d+((c[a+8>>2]|0)-d>>3<<3)|0;RC(a,d,e,e,d+(b<<3)|0);return}function RC(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return}function SC(a){a=a|0;VC(a);return}function TC(a){a=a|0;UC(a+24|0);return}function UC(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);oF(d)}return}function VC(a){a=a|0;var b=0;b=zi()|0;Ci(a,1,12,b,WC()|0,2);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function WC(){return 1944}function XC(a,b,d){a=a|0;b=b|0;d=d|0;ZC(c[(YC(a)|0)>>2]|0,b,d);return}function YC(a){a=a|0;return (c[(EC()|0)+24>>2]|0)+(a<<3)|0}function ZC(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0;d=l;l=l+16|0;f=d+4|0;e=d;_C(f,b);b=$C(f,b)|0;Bk(e,c);c=Ck(e,c)|0;ub[a&31](b,c);Dk(e);l=d;return}function _C(a,b){a=a|0;b=b|0;return}function $C(a,b){a=a|0;b=b|0;return aD(b)|0}function aD(a){a=a|0;return a|0}function bD(){var b=0;if(!(a[9040]|0)){cD(10964);Ja(69,10964,o|0)|0;b=9040;c[b>>2]=1;c[b+4>>2]=0}if(!(wi(10964)|0))cD(10964);return 10964}function cD(a){a=a|0;fD(a);Ev(a,70);return}function dD(a){a=a|0;eD(a+24|0);return}function eD(a){a=a|0;var b=0,d=0,e=0;d=c[a>>2]|0;e=d;if(d|0){a=a+4|0;b=c[a>>2]|0;if((b|0)!=(d|0))c[a>>2]=b+(~((b+-8-e|0)>>>3)<<3);oF(d)}return}function fD(a){a=a|0;var b=0;b=zi()|0;Ci(a,5,7,b,jD()|0,0);c[a+24>>2]=0;c[a+28>>2]=0;c[a+32>>2]=0;return}function gD(a){a=a|0;hD(a);return}function hD(a){a=a|0;iD(a);return}function iD(b){b=b|0;a[b+8>>0]=1;return}function jD(){return 1984}function kD(){return lD()|0}function lD(){var a=0,b=0,d=0,e=0,f=0,g=0,h=0;b=l;l=l+16|0;f=b+4|0;h=b;d=wA(8)|0;a=d;g=a+4|0;c[g>>2]=mF(1)|0;e=mF(8)|0;g=c[g>>2]|0;c[h>>2]=0;c[f>>2]=c[h>>2];mD(e,g,f);c[d>>2]=e;l=b;return a|0}function mD(a,b,d){a=a|0;b=b|0;d=d|0;c[a>>2]=b;d=mF(16)|0;c[d+4>>2]=0;c[d+8>>2]=0;c[d>>2]=1964;c[d+12>>2]=b;c[a+4>>2]=d;return}function nD(a){a=a|0;gF(a);oF(a);return}function oD(a){a=a|0;a=c[a+12>>2]|0;if(a|0)oF(a);return}function pD(a){a=a|0;oF(a);return}function qD(){var b=0;if(!(a[9048]|0)){xD(11e3);Ja(25,11e3,o|0)|0;b=9048;c[b>>2]=1;c[b+4>>2]=0}return 11e3}function rD(a,b){a=a|0;b=b|0;c[a>>2]=sD()|0;c[a+4>>2]=tD()|0;c[a+12>>2]=b;c[a+8>>2]=uD()|0;c[a+32>>2]=10;return}function sD(){return 11669}function tD(){return 1988}function uD(){return mt()|0}function vD(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;if((kt(d,896)|0)==512){if(c|0){wD(c);oF(c)}}else if(b|0)oF(b);return}function wD(a){a=a|0;a=c[a+4>>2]|0;if(a|0)kF(a);return}function xD(a){a=a|0;bj(a);return}function yD(a,b){a=a|0;b=b|0;c[a>>2]=b;return}function zD(a){a=a|0;return c[a>>2]|0}function AD(b){b=b|0;return a[c[b>>2]>>0]|0}function BD(a,b){a=a|0;b=b|0;var d=0,e=0;d=l;l=l+16|0;e=d;c[e>>2]=c[a>>2];CD(b,e)|0;l=d;return}function CD(a,b){a=a|0;b=b|0;var d=0;d=DD(c[a>>2]|0,b)|0;b=a+4|0;c[(c[b>>2]|0)+8>>2]=d;return c[(c[b>>2]|0)+8>>2]|0}function DD(a,b){a=a|0;b=b|0;var d=0,e=0;d=l;l=l+16|0;e=d;ED(e);a=Rg(a)|0;b=FD(a,c[b>>2]|0)|0;GD(e);l=d;return b|0}function ED(a){a=a|0;c[a>>2]=c[2682];c[a+4>>2]=c[2684];return}function FD(a,b){a=a|0;b=b|0;var c=0;c=Ug(HD()|0)|0;return gb(0,c|0,a|0,zy(b)|0)|0}function GD(a){a=a|0;KA(c[a>>2]|0,c[a+4>>2]|0);return}function HD(){var b=0;if(!(a[9056]|0)){ID(11044);b=9056;c[b>>2]=1;c[b+4>>2]=0}return 11044}function ID(a){a=a|0;eh(a,JD()|0,1);return}function JD(){return 1996}function KD(){LD();return}function LD(){var b=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0;s=l;l=l+16|0;o=s+4|0;p=s;Ea(65536,10728,c[2683]|0,10736);f=Zx()|0;e=c[f>>2]|0;b=c[e>>2]|0;if(b|0){g=c[f+8>>2]|0;f=c[f+4>>2]|0;while(1){Pa(b|0,d[f>>0]|0|0,a[g>>0]|0);e=e+4|0;b=c[e>>2]|0;if(!b)break;else{g=g+1|0;f=f+1|0}}}b=$x()|0;e=c[b>>2]|0;if(e|0)do{Qa(e|0,c[b+4>>2]|0);b=b+8|0;e=c[b>>2]|0}while((e|0)!=0);Qa(MD()|0,5983);n=Lx()|0;b=c[n>>2]|0;a:do if(b|0){do{ND(c[b+4>>2]|0);b=c[b>>2]|0}while((b|0)!=0);b=c[n>>2]|0;if(b|0){m=n;do{while(1){h=b;b=c[b>>2]|0;h=c[h+4>>2]|0;if(!(OD(h)|0))break;c[p>>2]=m;c[o>>2]=c[p>>2];PD(n,o)|0;if(!b)break a}QD(h);m=c[m>>2]|0;e=RD(h)|0;i=Ya()|0;j=l;l=l+((1*(e<<2)|0)+15&-16)|0;k=l;l=l+((1*(e<<2)|0)+15&-16)|0;e=c[(kz(h)|0)>>2]|0;if(e|0){f=j;g=k;while(1){c[f>>2]=c[(iz(c[e+4>>2]|0)|0)>>2];c[g>>2]=c[e+8>>2];e=c[e>>2]|0;if(!e)break;else{f=f+4|0;g=g+4|0}}}t=iz(h)|0;e=SD(h)|0;f=RD(h)|0;g=TD(h)|0;Va(t|0,e|0,j|0,k|0,f|0,g|0,Wx(h)|0);Ha(i|0)}while((b|0)!=0)}}while(0);b=c[(Yx()|0)>>2]|0;if(b|0)do{t=b+4|0;n=dy(t)|0;h=ky(n)|0;i=ey(n)|0;j=(fy(n)|0)+1|0;k=UD(n)|0;m=VD(t)|0;n=wi(n)|0;o=oy(t)|0;p=WD(t)|0;eb(0,h|0,i|0,j|0,k|0,m|0,n|0,o|0,p|0,XD(t)|0);b=c[b>>2]|0}while((b|0)!=0);b=c[(Lx()|0)>>2]|0;b:do if(b|0){c:while(1){e=c[b+4>>2]|0;if(e|0?(q=c[(iz(e)|0)>>2]|0,r=c[(nz(e)|0)>>2]|0,r|0):0){f=r;do{e=f+4|0;g=dy(e)|0;d:do if(g|0)switch(wi(g)|0){case 0:break c;case 4:case 3:case 2:{k=ky(g)|0;m=ey(g)|0;n=(fy(g)|0)+1|0;o=UD(g)|0;p=wi(g)|0;t=oy(e)|0;eb(q|0,k|0,m|0,n|0,o|0,0,p|0,t|0,WD(e)|0,XD(e)|0);break d}case 1:{j=ky(g)|0;k=ey(g)|0;m=(fy(g)|0)+1|0;n=UD(g)|0;o=VD(e)|0;p=wi(g)|0;t=oy(e)|0;eb(q|0,j|0,k|0,m|0,n|0,o|0,p|0,t|0,WD(e)|0,XD(e)|0);break d}case 5:{n=ky(g)|0;o=ey(g)|0;p=(fy(g)|0)+1|0;t=UD(g)|0;eb(q|0,n|0,o|0,p|0,t|0,YD(g)|0,wi(g)|0,0,0,0);break d}default:break d}while(0);f=c[f>>2]|0}while((f|0)!=0)}b=c[b>>2]|0;if(!b)break b}jb()}while(0);za();l=s;return}function MD(){return 11627}function ND(b){b=b|0;a[b+40>>0]=0;return}function OD(b){b=b|0;return (a[b+40>>0]|0)!=0|0}function PD(a,b){a=a|0;b=b|0;b=ZD(b)|0;a=c[b>>2]|0;c[b>>2]=c[a>>2];oF(a);return c[b>>2]|0}function QD(b){b=b|0;a[b+40>>0]=1;return}function RD(a){a=a|0;return c[a+20>>2]|0}function SD(a){a=a|0;return c[a+8>>2]|0}function TD(a){a=a|0;return c[a+32>>2]|0}function UD(a){a=a|0;return c[a+4>>2]|0}function VD(a){a=a|0;return c[a+4>>2]|0}function WD(a){a=a|0;return c[a+8>>2]|0}function XD(a){a=a|0;return c[a+16>>2]|0}function YD(a){a=a|0;return c[a+20>>2]|0}function ZD(a){a=a|0;return c[a>>2]|0}function _D(){return 11056}function $D(a){a=a|0;var b=0,d=0;b=l;l=l+16|0;d=b;c[d>>2]=gE(c[a+60>>2]|0)|0;a=cE(Fa(6,d|0)|0)|0;l=b;return a|0}function aE(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0;n=l;l=l+48|0;k=n+16|0;g=n;f=n+32|0;i=a+28|0;e=c[i>>2]|0;c[f>>2]=e;j=a+20|0;e=(c[j>>2]|0)-e|0;c[f+4>>2]=e;c[f+8>>2]=b;c[f+12>>2]=d;e=e+d|0;h=a+60|0;c[g>>2]=c[h>>2];c[g+4>>2]=f;c[g+8>>2]=2;g=cE(mb(146,g|0)|0)|0;a:do if((e|0)!=(g|0)){b=2;while(1){if((g|0)<0)break;e=e-g|0;p=c[f+4>>2]|0;o=g>>>0>p>>>0;f=o?f+8|0:f;b=(o<<31>>31)+b|0;p=g-(o?p:0)|0;c[f>>2]=(c[f>>2]|0)+p;o=f+4|0;c[o>>2]=(c[o>>2]|0)-p;c[k>>2]=c[h>>2];c[k+4>>2]=f;c[k+8>>2]=b;g=cE(mb(146,k|0)|0)|0;if((e|0)==(g|0)){m=3;break a}}c[a+16>>2]=0;c[i>>2]=0;c[j>>2]=0;c[a>>2]=c[a>>2]|32;if((b|0)==2)d=0;else d=d-(c[f+4>>2]|0)|0}else m=3;while(0);if((m|0)==3){p=c[a+44>>2]|0;c[a+16>>2]=p+(c[a+48>>2]|0);c[i>>2]=p;c[j>>2]=p}l=n;return d|0}function bE(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;f=l;l=l+32|0;g=f;e=f+20|0;c[g>>2]=c[a+60>>2];c[g+4>>2]=0;c[g+8>>2]=b;c[g+12>>2]=e;c[g+16>>2]=d;if((cE(lb(140,g|0)|0)|0)<0){c[e>>2]=-1;a=-1}else a=c[e>>2]|0;l=f;return a|0}function cE(a){a=a|0;if(a>>>0>4294963200){c[(dE()|0)>>2]=0-a;a=-1}return a|0}function dE(){return (eE()|0)+64|0}function eE(){return fE()|0}function fE(){return 2132}function gE(a){a=a|0;return a|0}function hE(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0;g=l;l=l+32|0;f=g;c[b+36>>2]=1;if((c[b>>2]&64|0)==0?(c[f>>2]=c[b+60>>2],c[f+4>>2]=21523,c[f+8>>2]=g+16,_a(54,f|0)|0):0)a[b+75>>0]=-1;f=aE(b,d,e)|0;l=g;return f|0}function iE(b,c){b=b|0;c=c|0;var d=0,e=0;d=a[b>>0]|0;e=a[c>>0]|0;if(d<<24>>24==0?1:d<<24>>24!=e<<24>>24)b=e;else{do{b=b+1|0;c=c+1|0;d=a[b>>0]|0;e=a[c>>0]|0}while(!(d<<24>>24==0?1:d<<24>>24!=e<<24>>24));b=e}return (d&255)-(b&255)|0}function jE(b){b=b|0;var d=0,e=0,f=0;f=b;a:do if(!(f&3))e=4;else{d=f;while(1){if(!(a[b>>0]|0)){b=d;break a}b=b+1|0;d=b;if(!(d&3)){e=4;break}}}while(0);if((e|0)==4){while(1){d=c[b>>2]|0;if(!((d&-2139062144^-2139062144)&d+-16843009))b=b+4|0;else break}if((d&255)<<24>>24)do b=b+1|0;while((a[b>>0]|0)!=0)}return b-f|0}function kE(a,b){a=a|0;b=b|0;var c=0;c=jE(a)|0;return ((lE(a,1,c,b)|0)!=(c|0))<<31>>31|0}function lE(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;f=P(d,b)|0;d=(b|0)==0?0:d;if((c[e+76>>2]|0)>-1){g=(nE(e)|0)==0;a=qE(a,f,e)|0;if(!g)mE(e)}else a=qE(a,f,e)|0;if((a|0)!=(f|0))d=(a>>>0)/(b>>>0)|0;return d|0}function mE(a){a=a|0;return}function nE(a){a=a|0;return 0}function oE(b,e){b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0;m=l;l=l+16|0;j=m;k=e&255;a[j>>0]=k;g=b+16|0;h=c[g>>2]|0;if(!h)if(!(pE(b)|0)){h=c[g>>2]|0;i=4}else f=-1;else i=4;do if((i|0)==4){i=b+20|0;g=c[i>>2]|0;if(g>>>0<h>>>0?(f=e&255,(f|0)!=(a[b+75>>0]|0)):0){c[i>>2]=g+1;a[g>>0]=k;break}if((yb[c[b+36>>2]&15](b,j,1)|0)==1)f=d[j>>0]|0;else f=-1}while(0);l=m;return f|0}function pE(b){b=b|0;var d=0,e=0;d=b+74|0;e=a[d>>0]|0;a[d>>0]=e+255|e;d=c[b>>2]|0;if(!(d&8)){c[b+8>>2]=0;c[b+4>>2]=0;e=c[b+44>>2]|0;c[b+28>>2]=e;c[b+20>>2]=e;c[b+16>>2]=e+(c[b+48>>2]|0);b=0}else{c[b>>2]=d|32;b=-1}return b|0}function qE(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0;f=e+16|0;g=c[f>>2]|0;if(!g)if(!(pE(e)|0)){g=c[f>>2]|0;h=5}else f=0;else h=5;a:do if((h|0)==5){j=e+20|0;i=c[j>>2]|0;f=i;if((g-i|0)>>>0<d>>>0){f=yb[c[e+36>>2]&15](e,b,d)|0;break}b:do if((a[e+75>>0]|0)>-1){i=d;while(1){if(!i){h=0;g=b;break b}g=i+-1|0;if((a[b+g>>0]|0)==10)break;else i=g}f=yb[c[e+36>>2]&15](e,b,i)|0;if(f>>>0<i>>>0)break a;h=i;g=b+i|0;d=d-i|0;f=c[j>>2]|0}else{h=0;g=b}while(0);wF(f|0,g|0,d|0)|0;c[j>>2]=(c[j>>2]|0)+d;f=h+d|0}while(0);return f|0}function rE(a,b){a=a|0;b=b|0;if(!b)b=0;else b=sE(c[b>>2]|0,c[b+4>>2]|0,a)|0;return (b|0?b:a)|0}function sE(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0;o=(c[b>>2]|0)+1794895138|0;h=tE(c[b+8>>2]|0,o)|0;f=tE(c[b+12>>2]|0,o)|0;g=tE(c[b+16>>2]|0,o)|0;a:do if((h>>>0<d>>>2>>>0?(n=d-(h<<2)|0,f>>>0<n>>>0&g>>>0<n>>>0):0)?((g|f)&3|0)==0:0){n=f>>>2;m=g>>>2;l=0;while(1){j=h>>>1;k=l+j|0;i=k<<1;g=i+n|0;f=tE(c[b+(g<<2)>>2]|0,o)|0;g=tE(c[b+(g+1<<2)>>2]|0,o)|0;if(!(g>>>0<d>>>0&f>>>0<(d-g|0)>>>0)){f=0;break a}if(a[b+(g+f)>>0]|0){f=0;break a}f=iE(e,b+g|0)|0;if(!f)break;f=(f|0)<0;if((h|0)==1){f=0;break a}else{l=f?l:k;h=f?j:h-j|0}}f=i+m|0;g=tE(c[b+(f<<2)>>2]|0,o)|0;f=tE(c[b+(f+1<<2)>>2]|0,o)|0;if(f>>>0<d>>>0&g>>>0<(d-f|0)>>>0)f=(a[b+(f+g)>>0]|0)==0?b+f|0:0;else f=0}else f=0;while(0);return f|0}function tE(a,b){a=a|0;b=b|0;var c=0;c=CF(a|0)|0;return ((b|0)==0?a:c)|0}function uE(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;h=d&255;f=(e|0)!=0;a:do if(f&(b&3|0)!=0){g=d&255;while(1){if((a[b>>0]|0)==g<<24>>24){i=6;break a}b=b+1|0;e=e+-1|0;f=(e|0)!=0;if(!(f&(b&3|0)!=0)){i=5;break}}}else i=5;while(0);if((i|0)==5)if(f)i=6;else e=0;b:do if((i|0)==6){g=d&255;if((a[b>>0]|0)!=g<<24>>24){f=P(h,16843009)|0;c:do if(e>>>0>3)while(1){h=c[b>>2]^f;if((h&-2139062144^-2139062144)&h+-16843009|0)break;b=b+4|0;e=e+-4|0;if(e>>>0<=3){i=11;break c}}else i=11;while(0);if((i|0)==11)if(!e){e=0;break}while(1){if((a[b>>0]|0)==g<<24>>24)break b;b=b+1|0;e=e+-1|0;if(!e){e=0;break}}}}while(0);return (e|0?b:0)|0}function vE(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;s=l;l=l+224|0;n=s+120|0;o=s+80|0;q=s;r=s+136|0;f=o;g=f+40|0;do{c[f>>2]=0;f=f+4|0}while((f|0)<(g|0));c[n>>2]=c[e>>2];if((wE(0,d,n,q,o)|0)<0)e=-1;else{if((c[b+76>>2]|0)>-1)p=nE(b)|0;else p=0;e=c[b>>2]|0;m=e&32;if((a[b+74>>0]|0)<1)c[b>>2]=e&-33;f=b+48|0;if(!(c[f>>2]|0)){g=b+44|0;h=c[g>>2]|0;c[g>>2]=r;i=b+28|0;c[i>>2]=r;j=b+20|0;c[j>>2]=r;c[f>>2]=80;k=b+16|0;c[k>>2]=r+80;e=wE(b,d,n,q,o)|0;if(h){yb[c[b+36>>2]&15](b,0,0)|0;e=(c[j>>2]|0)==0?-1:e;c[g>>2]=h;c[f>>2]=0;c[k>>2]=0;c[i>>2]=0;c[j>>2]=0}}else e=wE(b,d,n,q,o)|0;f=c[b>>2]|0;c[b>>2]=f|m;if(p|0)mE(b);e=(f&32|0)==0?e:-1}l=s;return e|0}function wE(d,e,f,g,i){d=d|0;e=e|0;f=f|0;g=g|0;i=i|0;var j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0;H=l;l=l+64|0;D=H+16|0;E=H;B=H+24|0;F=H+8|0;G=H+20|0;c[D>>2]=e;x=(d|0)!=0;y=B+40|0;z=y;B=B+39|0;C=F+4|0;k=0;j=0;p=0;a:while(1){do if((j|0)>-1)if((k|0)>(2147483647-j|0)){c[(dE()|0)>>2]=75;j=-1;break}else{j=k+j|0;break}while(0);k=a[e>>0]|0;if(!(k<<24>>24)){w=87;break}else m=e;b:while(1){switch(k<<24>>24){case 37:{k=m;w=9;break b}case 0:{k=m;break b}default:{}}v=m+1|0;c[D>>2]=v;k=a[v>>0]|0;m=v}c:do if((w|0)==9)while(1){w=0;if((a[m+1>>0]|0)!=37)break c;k=k+1|0;m=m+2|0;c[D>>2]=m;if((a[m>>0]|0)==37)w=9;else break}while(0);k=k-e|0;if(x)xE(d,e,k);if(k|0){e=m;continue}n=m+1|0;k=(a[n>>0]|0)+-48|0;if(k>>>0<10){v=(a[m+2>>0]|0)==36;u=v?k:-1;p=v?1:p;n=v?m+3|0:n}else u=-1;c[D>>2]=n;k=a[n>>0]|0;m=(k<<24>>24)+-32|0;d:do if(m>>>0<32){o=0;q=k;while(1){k=1<<m;if(!(k&75913)){k=q;break d}o=k|o;n=n+1|0;c[D>>2]=n;k=a[n>>0]|0;m=(k<<24>>24)+-32|0;if(m>>>0>=32)break;else q=k}}else o=0;while(0);if(k<<24>>24==42){m=n+1|0;k=(a[m>>0]|0)+-48|0;if(k>>>0<10?(a[n+2>>0]|0)==36:0){c[i+(k<<2)>>2]=10;k=c[g+((a[m>>0]|0)+-48<<3)>>2]|0;p=1;n=n+3|0}else{if(p|0){j=-1;break}if(x){p=(c[f>>2]|0)+(4-1)&~(4-1);k=c[p>>2]|0;c[f>>2]=p+4;p=0;n=m}else{k=0;p=0;n=m}}c[D>>2]=n;v=(k|0)<0;k=v?0-k|0:k;o=v?o|8192:o}else{k=yE(D)|0;if((k|0)<0){j=-1;break}n=c[D>>2]|0}do if((a[n>>0]|0)==46){if((a[n+1>>0]|0)!=42){c[D>>2]=n+1;m=yE(D)|0;n=c[D>>2]|0;break}q=n+2|0;m=(a[q>>0]|0)+-48|0;if(m>>>0<10?(a[n+3>>0]|0)==36:0){c[i+(m<<2)>>2]=10;m=c[g+((a[q>>0]|0)+-48<<3)>>2]|0;n=n+4|0;c[D>>2]=n;break}if(p|0){j=-1;break a}if(x){v=(c[f>>2]|0)+(4-1)&~(4-1);m=c[v>>2]|0;c[f>>2]=v+4}else m=0;c[D>>2]=q;n=q}else m=-1;while(0);t=0;while(1){if(((a[n>>0]|0)+-65|0)>>>0>57){j=-1;break a}v=n+1|0;c[D>>2]=v;q=a[(a[n>>0]|0)+-65+(5994+(t*58|0))>>0]|0;r=q&255;if((r+-1|0)>>>0<8){t=r;n=v}else break}if(!(q<<24>>24)){j=-1;break}s=(u|0)>-1;do if(q<<24>>24==19)if(s){j=-1;break a}else w=49;else{if(s){c[i+(u<<2)>>2]=r;s=g+(u<<3)|0;u=c[s+4>>2]|0;w=E;c[w>>2]=c[s>>2];c[w+4>>2]=u;w=49;break}if(!x){j=0;break a}zE(E,r,f)}while(0);if((w|0)==49?(w=0,!x):0){k=0;e=v;continue}n=a[n>>0]|0;n=(t|0)!=0&(n&15|0)==3?n&-33:n;s=o&-65537;u=(o&8192|0)==0?o:s;e:do switch(n|0){case 110:switch((t&255)<<24>>24){case 0:{c[c[E>>2]>>2]=j;k=0;e=v;continue a}case 1:{c[c[E>>2]>>2]=j;k=0;e=v;continue a}case 2:{k=c[E>>2]|0;c[k>>2]=j;c[k+4>>2]=((j|0)<0)<<31>>31;k=0;e=v;continue a}case 3:{b[c[E>>2]>>1]=j;k=0;e=v;continue a}case 4:{a[c[E>>2]>>0]=j;k=0;e=v;continue a}case 6:{c[c[E>>2]>>2]=j;k=0;e=v;continue a}case 7:{k=c[E>>2]|0;c[k>>2]=j;c[k+4>>2]=((j|0)<0)<<31>>31;k=0;e=v;continue a}default:{k=0;e=v;continue a}}case 112:{n=120;m=m>>>0>8?m:8;e=u|8;w=61;break}case 88:case 120:{e=u;w=61;break}case 111:{n=E;e=c[n>>2]|0;n=c[n+4>>2]|0;r=BE(e,n,y)|0;s=z-r|0;o=0;q=6458;m=(u&8|0)==0|(m|0)>(s|0)?m:s+1|0;s=u;w=67;break}case 105:case 100:{n=E;e=c[n>>2]|0;n=c[n+4>>2]|0;if((n|0)<0){e=rF(0,0,e|0,n|0)|0;n=A;o=E;c[o>>2]=e;c[o+4>>2]=n;o=1;q=6458;w=66;break e}else{o=(u&2049|0)!=0&1;q=(u&2048|0)==0?((u&1|0)==0?6458:6460):6459;w=66;break e}}case 117:{n=E;o=0;q=6458;e=c[n>>2]|0;n=c[n+4>>2]|0;w=66;break}case 99:{a[B>>0]=c[E>>2];e=B;o=0;q=6458;r=y;n=1;m=s;break}case 109:{n=DE(c[(dE()|0)>>2]|0)|0;w=71;break}case 115:{n=c[E>>2]|0;n=n|0?n:6468;w=71;break}case 67:{c[F>>2]=c[E>>2];c[C>>2]=0;c[E>>2]=F;r=-1;n=F;w=75;break}case 83:{e=c[E>>2]|0;if(!m){EE(d,32,k,0,u);e=0;w=84}else{r=m;n=e;w=75}break}case 65:case 71:case 70:case 69:case 97:case 103:case 102:case 101:{k=GE(d,+h[E>>3],k,m,u,n)|0;e=v;continue a}default:{o=0;q=6458;r=y;n=m;m=u}}while(0);f:do if((w|0)==61){u=E;t=c[u>>2]|0;u=c[u+4>>2]|0;r=AE(t,u,y,n&32)|0;q=(e&8|0)==0|(t|0)==0&(u|0)==0;o=q?0:2;q=q?6458:6458+(n>>4)|0;s=e;e=t;n=u;w=67}else if((w|0)==66){r=CE(e,n,y)|0;s=u;w=67}else if((w|0)==71){w=0;u=uE(n,0,m)|0;t=(u|0)==0;e=n;o=0;q=6458;r=t?n+m|0:u;n=t?m:u-n|0;m=s}else if((w|0)==75){w=0;q=n;e=0;m=0;while(1){o=c[q>>2]|0;if(!o)break;m=FE(G,o)|0;if((m|0)<0|m>>>0>(r-e|0)>>>0)break;e=m+e|0;if(r>>>0>e>>>0)q=q+4|0;else break}if((m|0)<0){j=-1;break a}EE(d,32,k,e,u);if(!e){e=0;w=84}else{o=0;while(1){m=c[n>>2]|0;if(!m){w=84;break f}m=FE(G,m)|0;o=m+o|0;if((o|0)>(e|0)){w=84;break f}xE(d,G,m);if(o>>>0>=e>>>0){w=84;break}else n=n+4|0}}}while(0);if((w|0)==67){w=0;n=(e|0)!=0|(n|0)!=0;u=(m|0)!=0|n;n=((n^1)&1)+(z-r)|0;e=u?r:y;r=y;n=u?((m|0)>(n|0)?m:n):m;m=(m|0)>-1?s&-65537:s}else if((w|0)==84){w=0;EE(d,32,k,e,u^8192);k=(k|0)>(e|0)?k:e;e=v;continue}t=r-e|0;s=(n|0)<(t|0)?t:n;u=s+o|0;k=(k|0)<(u|0)?u:k;EE(d,32,k,u,m);xE(d,q,o);EE(d,48,k,u,m^65536);EE(d,48,s,t,0);xE(d,e,t);EE(d,32,k,u,m^8192);e=v}g:do if((w|0)==87)if(!d)if(!p)j=0;else{j=1;while(1){e=c[i+(j<<2)>>2]|0;if(!e)break;zE(g+(j<<3)|0,e,f);j=j+1|0;if((j|0)>=10){j=1;break g}}while(1){if(c[i+(j<<2)>>2]|0){j=-1;break g}j=j+1|0;if((j|0)>=10){j=1;break}}}while(0);l=H;return j|0}function xE(a,b,d){a=a|0;b=b|0;d=d|0;if(!(c[a>>2]&32))qE(b,d,a)|0;return}function yE(b){b=b|0;var d=0,e=0,f=0;e=c[b>>2]|0;f=(a[e>>0]|0)+-48|0;if(f>>>0<10){d=0;do{d=f+(d*10|0)|0;e=e+1|0;c[b>>2]=e;f=(a[e>>0]|0)+-48|0}while(f>>>0<10)}else d=0;return d|0}function zE(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0.0;a:do if(b>>>0<=20)do switch(b|0){case 9:{e=(c[d>>2]|0)+(4-1)&~(4-1);b=c[e>>2]|0;c[d>>2]=e+4;c[a>>2]=b;break a}case 10:{e=(c[d>>2]|0)+(4-1)&~(4-1);b=c[e>>2]|0;c[d>>2]=e+4;e=a;c[e>>2]=b;c[e+4>>2]=((b|0)<0)<<31>>31;break a}case 11:{e=(c[d>>2]|0)+(4-1)&~(4-1);b=c[e>>2]|0;c[d>>2]=e+4;e=a;c[e>>2]=b;c[e+4>>2]=0;break a}case 12:{e=(c[d>>2]|0)+(8-1)&~(8-1);b=e;f=c[b>>2]|0;b=c[b+4>>2]|0;c[d>>2]=e+8;e=a;c[e>>2]=f;c[e+4>>2]=b;break a}case 13:{f=(c[d>>2]|0)+(4-1)&~(4-1);e=c[f>>2]|0;c[d>>2]=f+4;e=(e&65535)<<16>>16;f=a;c[f>>2]=e;c[f+4>>2]=((e|0)<0)<<31>>31;break a}case 14:{f=(c[d>>2]|0)+(4-1)&~(4-1);e=c[f>>2]|0;c[d>>2]=f+4;f=a;c[f>>2]=e&65535;c[f+4>>2]=0;break a}case 15:{f=(c[d>>2]|0)+(4-1)&~(4-1);e=c[f>>2]|0;c[d>>2]=f+4;e=(e&255)<<24>>24;f=a;c[f>>2]=e;c[f+4>>2]=((e|0)<0)<<31>>31;break a}case 16:{f=(c[d>>2]|0)+(4-1)&~(4-1);e=c[f>>2]|0;c[d>>2]=f+4;f=a;c[f>>2]=e&255;c[f+4>>2]=0;break a}case 17:{f=(c[d>>2]|0)+(8-1)&~(8-1);g=+h[f>>3];c[d>>2]=f+8;h[a>>3]=g;break a}case 18:{f=(c[d>>2]|0)+(8-1)&~(8-1);g=+h[f>>3];c[d>>2]=f+8;h[a>>3]=g;break a}default:break a}while(0);while(0);return}function AE(b,c,e,f){b=b|0;c=c|0;e=e|0;f=f|0;if(!((b|0)==0&(c|0)==0))do{e=e+-1|0;a[e>>0]=d[6510+(b&15)>>0]|0|f;b=vF(b|0,c|0,4)|0;c=A}while(!((b|0)==0&(c|0)==0));return e|0}function BE(b,c,d){b=b|0;c=c|0;d=d|0;if(!((b|0)==0&(c|0)==0))do{d=d+-1|0;a[d>>0]=b&7|48;b=vF(b|0,c|0,3)|0;c=A}while(!((b|0)==0&(c|0)==0));return d|0}function CE(b,c,d){b=b|0;c=c|0;d=d|0;var e=0;if(c>>>0>0|(c|0)==0&b>>>0>4294967295){while(1){e=BF(b|0,c|0,10,0)|0;d=d+-1|0;a[d>>0]=e&255|48;e=b;b=zF(b|0,c|0,10,0)|0;if(!(c>>>0>9|(c|0)==9&e>>>0>4294967295))break;else c=A}c=b}else c=b;if(c)while(1){d=d+-1|0;a[d>>0]=(c>>>0)%10|0|48;if(c>>>0<10)break;else c=(c>>>0)/10|0}return d|0}function DE(a){a=a|0;return NE(a,c[(ME()|0)+188>>2]|0)|0}function EE(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0;g=l;l=l+256|0;f=g;if((c|0)>(d|0)&(e&73728|0)==0){e=c-d|0;tF(f|0,b|0,(e>>>0<256?e:256)|0)|0;if(e>>>0>255){b=c-d|0;do{xE(a,f,256);e=e+-256|0}while(e>>>0>255);e=b&255}xE(a,f,e)}l=g;return}function FE(a,b){a=a|0;b=b|0;if(!a)a=0;else a=KE(a,b,0)|0;return a|0}function GE(b,e,f,g,h,i){b=b|0;e=+e;f=f|0;g=g|0;h=h|0;i=i|0;var j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0.0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0;H=l;l=l+560|0;m=H+8|0;u=H;G=H+524|0;F=G;n=H+512|0;c[u>>2]=0;E=n+12|0;HE(e)|0;if((A|0)<0){e=-e;C=1;B=6475}else{C=(h&2049|0)!=0&1;B=(h&2048|0)==0?((h&1|0)==0?6476:6481):6478}HE(e)|0;D=A&2146435072;do if(D>>>0<2146435072|(D|0)==2146435072&0<0){r=+IE(e,u)*2.0;j=r!=0.0;if(j)c[u>>2]=(c[u>>2]|0)+-1;w=i|32;if((w|0)==97){s=i&32;q=(s|0)==0?B:B+9|0;p=C|2;j=12-g|0;do if(!(g>>>0>11|(j|0)==0)){e=8.0;do{j=j+-1|0;e=e*16.0}while((j|0)!=0);if((a[q>>0]|0)==45){e=-(e+(-r-e));break}else{e=r+e-e;break}}else e=r;while(0);k=c[u>>2]|0;j=(k|0)<0?0-k|0:k;j=CE(j,((j|0)<0)<<31>>31,E)|0;if((j|0)==(E|0)){j=n+11|0;a[j>>0]=48}a[j+-1>>0]=(k>>31&2)+43;o=j+-2|0;a[o>>0]=i+15;n=(g|0)<1;m=(h&8|0)==0;j=G;do{D=~~e;k=j+1|0;a[j>>0]=d[6510+D>>0]|s;e=(e-+(D|0))*16.0;if((k-F|0)==1?!(m&(n&e==0.0)):0){a[k>>0]=46;j=j+2|0}else j=k}while(e!=0.0);D=j-F|0;F=E-o|0;E=(g|0)!=0&(D+-2|0)<(g|0)?g+2|0:D;j=F+p+E|0;EE(b,32,f,j,h);xE(b,q,p);EE(b,48,f,j,h^65536);xE(b,G,D);EE(b,48,E-D|0,0,0);xE(b,o,F);EE(b,32,f,j,h^8192);break}k=(g|0)<0?6:g;if(j){j=(c[u>>2]|0)+-28|0;c[u>>2]=j;e=r*268435456.0}else{e=r;j=c[u>>2]|0}D=(j|0)<0?m:m+288|0;m=D;do{y=~~e>>>0;c[m>>2]=y;m=m+4|0;e=(e-+(y>>>0))*1.0e9}while(e!=0.0);if((j|0)>0){n=D;p=m;while(1){o=(j|0)<29?j:29;j=p+-4|0;if(j>>>0>=n>>>0){m=0;do{x=uF(c[j>>2]|0,0,o|0)|0;x=sF(x|0,A|0,m|0,0)|0;y=A;v=BF(x|0,y|0,1e9,0)|0;c[j>>2]=v;m=zF(x|0,y|0,1e9,0)|0;j=j+-4|0}while(j>>>0>=n>>>0);if(m){n=n+-4|0;c[n>>2]=m}}m=p;while(1){if(m>>>0<=n>>>0)break;j=m+-4|0;if(!(c[j>>2]|0))m=j;else break}j=(c[u>>2]|0)-o|0;c[u>>2]=j;if((j|0)>0)p=m;else break}}else n=D;if((j|0)<0){g=((k+25|0)/9|0)+1|0;t=(w|0)==102;do{s=0-j|0;s=(s|0)<9?s:9;if(n>>>0<m>>>0){o=(1<<s)+-1|0;p=1e9>>>s;q=0;j=n;do{y=c[j>>2]|0;c[j>>2]=(y>>>s)+q;q=P(y&o,p)|0;j=j+4|0}while(j>>>0<m>>>0);j=(c[n>>2]|0)==0?n+4|0:n;if(!q){n=j;j=m}else{c[m>>2]=q;n=j;j=m+4|0}}else{n=(c[n>>2]|0)==0?n+4|0:n;j=m}m=t?D:n;m=(j-m>>2|0)>(g|0)?m+(g<<2)|0:j;j=(c[u>>2]|0)+s|0;c[u>>2]=j}while((j|0)<0);j=n;g=m}else{j=n;g=m}y=D;if(j>>>0<g>>>0){m=(y-j>>2)*9|0;o=c[j>>2]|0;if(o>>>0>=10){n=10;do{n=n*10|0;m=m+1|0}while(o>>>0>=n>>>0)}}else m=0;t=(w|0)==103;v=(k|0)!=0;n=k-((w|0)!=102?m:0)+((v&t)<<31>>31)|0;if((n|0)<(((g-y>>2)*9|0)+-9|0)){n=n+9216|0;s=D+4+(((n|0)/9|0)+-1024<<2)|0;n=((n|0)%9|0)+1|0;if((n|0)<9){o=10;do{o=o*10|0;n=n+1|0}while((n|0)!=9)}else o=10;p=c[s>>2]|0;q=(p>>>0)%(o>>>0)|0;n=(s+4|0)==(g|0);if(!(n&(q|0)==0)){r=(((p>>>0)/(o>>>0)|0)&1|0)==0?9007199254740992.0:9007199254740994.0;x=(o|0)/2|0;e=q>>>0<x>>>0?.5:n&(q|0)==(x|0)?1.0:1.5;if(C){x=(a[B>>0]|0)==45;e=x?-e:e;r=x?-r:r}n=p-q|0;c[s>>2]=n;if(r+e!=r){x=n+o|0;c[s>>2]=x;if(x>>>0>999999999){m=s;while(1){n=m+-4|0;c[m>>2]=0;if(n>>>0<j>>>0){j=j+-4|0;c[j>>2]=0}x=(c[n>>2]|0)+1|0;c[n>>2]=x;if(x>>>0>999999999)m=n;else break}}else n=s;m=(y-j>>2)*9|0;p=c[j>>2]|0;if(p>>>0>=10){o=10;do{o=o*10|0;m=m+1|0}while(p>>>0>=o>>>0)}}else n=s}else n=s;n=n+4|0;n=g>>>0>n>>>0?n:g;x=j}else{n=g;x=j}w=n;while(1){if(w>>>0<=x>>>0){u=0;break}j=w+-4|0;if(!(c[j>>2]|0))w=j;else{u=1;break}}g=0-m|0;do if(t){j=((v^1)&1)+k|0;if((j|0)>(m|0)&(m|0)>-5){o=i+-1|0;k=j+-1-m|0}else{o=i+-2|0;k=j+-1|0}j=h&8;if(!j){if(u?(z=c[w+-4>>2]|0,(z|0)!=0):0)if(!((z>>>0)%10|0)){n=0;j=10;do{j=j*10|0;n=n+1|0}while(!((z>>>0)%(j>>>0)|0|0))}else n=0;else n=9;j=((w-y>>2)*9|0)+-9|0;if((o|32|0)==102){s=j-n|0;s=(s|0)>0?s:0;k=(k|0)<(s|0)?k:s;s=0;break}else{s=j+m-n|0;s=(s|0)>0?s:0;k=(k|0)<(s|0)?k:s;s=0;break}}else s=j}else{o=i;s=h&8}while(0);t=k|s;p=(t|0)!=0&1;q=(o|32|0)==102;if(q){v=0;j=(m|0)>0?m:0}else{j=(m|0)<0?g:m;j=CE(j,((j|0)<0)<<31>>31,E)|0;n=E;if((n-j|0)<2)do{j=j+-1|0;a[j>>0]=48}while((n-j|0)<2);a[j+-1>>0]=(m>>31&2)+43;j=j+-2|0;a[j>>0]=o;v=j;j=n-j|0}j=C+1+k+p+j|0;EE(b,32,f,j,h);xE(b,B,C);EE(b,48,f,j,h^65536);if(q){o=x>>>0>D>>>0?D:x;s=G+9|0;p=s;q=G+8|0;n=o;do{m=CE(c[n>>2]|0,0,s)|0;if((n|0)==(o|0)){if((m|0)==(s|0)){a[q>>0]=48;m=q}}else if(m>>>0>G>>>0){tF(G|0,48,m-F|0)|0;do m=m+-1|0;while(m>>>0>G>>>0)}xE(b,m,p-m|0);n=n+4|0}while(n>>>0<=D>>>0);if(t|0)xE(b,6526,1);if(n>>>0<w>>>0&(k|0)>0)while(1){m=CE(c[n>>2]|0,0,s)|0;if(m>>>0>G>>>0){tF(G|0,48,m-F|0)|0;do m=m+-1|0;while(m>>>0>G>>>0)}xE(b,m,(k|0)<9?k:9);n=n+4|0;m=k+-9|0;if(!(n>>>0<w>>>0&(k|0)>9)){k=m;break}else k=m}EE(b,48,k+9|0,9,0)}else{t=u?w:x+4|0;if((k|0)>-1){u=G+9|0;s=(s|0)==0;g=u;p=0-F|0;q=G+8|0;o=x;do{m=CE(c[o>>2]|0,0,u)|0;if((m|0)==(u|0)){a[q>>0]=48;m=q}do if((o|0)==(x|0)){n=m+1|0;xE(b,m,1);if(s&(k|0)<1){m=n;break}xE(b,6526,1);m=n}else{if(m>>>0<=G>>>0)break;tF(G|0,48,m+p|0)|0;do m=m+-1|0;while(m>>>0>G>>>0)}while(0);F=g-m|0;xE(b,m,(k|0)>(F|0)?F:k);k=k-F|0;o=o+4|0}while(o>>>0<t>>>0&(k|0)>-1)}EE(b,48,k+18|0,18,0);xE(b,v,E-v|0)}EE(b,32,f,j,h^8192)}else{G=(i&32|0)!=0;j=C+3|0;EE(b,32,f,j,h&-65537);xE(b,B,C);xE(b,e!=e|0.0!=0.0?(G?6502:6506):G?6494:6498,3);EE(b,32,f,j,h^8192)}while(0);l=H;return ((j|0)<(f|0)?f:j)|0}function HE(a){a=+a;var b=0;h[j>>3]=a;b=c[j>>2]|0;A=c[j+4>>2]|0;return b|0}function IE(a,b){a=+a;b=b|0;return +(+JE(a,b))}function JE(a,b){a=+a;b=b|0;var d=0,e=0,f=0;h[j>>3]=a;d=c[j>>2]|0;e=c[j+4>>2]|0;f=vF(d|0,e|0,52)|0;switch(f&2047){case 0:{if(a!=0.0){a=+JE(a*18446744073709551616.0,b);d=(c[b>>2]|0)+-64|0}else d=0;c[b>>2]=d;break}case 2047:break;default:{c[b>>2]=(f&2047)+-1022;c[j>>2]=d;c[j+4>>2]=e&-2146435073|1071644672;a=+h[j>>3]}}return +a}function KE(b,d,e){b=b|0;d=d|0;e=e|0;do if(b){if(d>>>0<128){a[b>>0]=d;b=1;break}if(!(c[c[(LE()|0)+188>>2]>>2]|0))if((d&-128|0)==57216){a[b>>0]=d;b=1;break}else{c[(dE()|0)>>2]=84;b=-1;break}if(d>>>0<2048){a[b>>0]=d>>>6|192;a[b+1>>0]=d&63|128;b=2;break}if(d>>>0<55296|(d&-8192|0)==57344){a[b>>0]=d>>>12|224;a[b+1>>0]=d>>>6&63|128;a[b+2>>0]=d&63|128;b=3;break}if((d+-65536|0)>>>0<1048576){a[b>>0]=d>>>18|240;a[b+1>>0]=d>>>12&63|128;a[b+2>>0]=d>>>6&63|128;a[b+3>>0]=d&63|128;b=4;break}else{c[(dE()|0)>>2]=84;b=-1;break}}else b=1;while(0);return b|0}function LE(){return fE()|0}function ME(){return fE()|0}function NE(b,e){b=b|0;e=e|0;var f=0,g=0;g=0;while(1){if((d[6528+g>>0]|0)==(b|0)){b=2;break}f=g+1|0;if((f|0)==87){f=6616;g=87;b=5;break}else g=f}if((b|0)==2)if(!g)f=6616;else{f=6616;b=5}if((b|0)==5)while(1){do{b=f;f=f+1|0}while((a[b>>0]|0)!=0);g=g+-1|0;if(!g)break;else b=5}return OE(f,c[e+20>>2]|0)|0}function OE(a,b){a=a|0;b=b|0;return rE(a,b)|0}function PE(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0;a:do if(!d)b=0;else{while(1){e=a[b>>0]|0;f=a[c>>0]|0;if(e<<24>>24!=f<<24>>24)break;d=d+-1|0;if(!d){b=0;break a}else{b=b+1|0;c=c+1|0}}b=(e&255)-(f&255)|0}while(0);return b|0}function QE(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;f=l;l=l+16|0;g=f;c[g>>2]=e;e=RE(a,b,d,g)|0;l=f;return e|0}function RE(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,m=0,n=0;n=l;l=l+128|0;g=n+124|0;m=n;h=m;i=2504;j=h+124|0;do{c[h>>2]=c[i>>2];h=h+4|0;i=i+4|0}while((h|0)<(j|0));if((d+-1|0)>>>0>2147483646)if(!d){b=g;d=1;k=4}else{c[(dE()|0)>>2]=75;d=-1}else k=4;if((k|0)==4){k=-2-b|0;k=d>>>0>k>>>0?k:d;c[m+48>>2]=k;g=m+20|0;c[g>>2]=b;c[m+44>>2]=b;d=b+k|0;b=m+16|0;c[b>>2]=d;c[m+28>>2]=d;d=vE(m,e,f)|0;if(k){m=c[g>>2]|0;a[m+(((m|0)==(c[b>>2]|0))<<31>>31)>>0]=0}}l=n;return d|0}function SE(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=a+20|0;f=c[e>>2]|0;a=(c[a+16>>2]|0)-f|0;a=a>>>0>d>>>0?d:a;wF(f|0,b|0,a|0)|0;c[e>>2]=(c[e>>2]|0)+a;return d|0}function TE(a,b){a=T(a);b=T(b);var c=0,d=0;c=UE(a)|0;do if((c&2147483647)>>>0<=2139095040){d=UE(b)|0;if((d&2147483647)>>>0<=2139095040)if((d^c|0)<0){a=(c|0)<0?b:a;break}else{a=a<b?b:a;break}}else a=b;while(0);return T(a)}function UE(a){a=T(a);return (g[j>>2]=a,c[j>>2]|0)|0}function VE(a,b){a=T(a);b=T(b);var d=0,e=0,f=0,h=0,i=0,k=0,l=0,m=0;h=(g[j>>2]=a,c[j>>2]|0);k=(g[j>>2]=b,c[j>>2]|0);d=h>>>23&255;i=k>>>23&255;l=h&-2147483648;f=k<<1;a:do if((f|0)!=0?!((d|0)==255|((WE(b)|0)&2147483647)>>>0>2139095040):0){e=h<<1;if(e>>>0<=f>>>0){b=T(a*T(0.0));return T((e|0)==(f|0)?b:a)}if(!d){d=h<<9;if((d|0)>-1){e=d;d=0;do{d=d+-1|0;e=e<<1}while((e|0)>-1)}else d=0;e=h<<1-d}else e=h&8388607|8388608;if(!i){h=k<<9;if((h|0)>-1){f=0;do{f=f+-1|0;h=h<<1}while((h|0)>-1)}else f=0;i=f;k=k<<1-f}else k=k&8388607|8388608;f=e-k|0;h=(f|0)>-1;b:do if((d|0)>(i|0)){while(1){if(h)if(!f)break;else e=f;e=e<<1;d=d+-1|0;f=e-k|0;h=(f|0)>-1;if((d|0)<=(i|0))break b}b=T(a*T(0.0));break a}while(0);if(h)if(!f){b=T(a*T(0.0));break}else e=f;if(e>>>0<8388608)do{e=e<<1;d=d+-1|0}while(e>>>0<8388608);if((d|0)>0)d=e+-8388608|d<<23;else d=e>>>(1-d|0);b=(c[j>>2]=d|l,T(g[j>>2]))}else m=3;while(0);if((m|0)==3){b=T(a*b);b=T(b/b)}return T(b)}function WE(a){a=T(a);return (g[j>>2]=a,c[j>>2]|0)|0}function XE(a,b){a=T(a);b=T(b);var c=0,d=0;c=YE(a)|0;do if((c&2147483647)>>>0<=2139095040){d=YE(b)|0;if((d&2147483647)>>>0<=2139095040)if((d^c|0)<0){a=(c|0)<0?a:b;break}else{a=a<b?a:b;break}}else a=b;while(0);return T(a)}function YE(a){a=T(a);return (g[j>>2]=a,c[j>>2]|0)|0}function ZE(a,b){a=a|0;b=b|0;var d=0,e=0;d=l;l=l+16|0;e=d;c[e>>2]=b;b=vE(c[594]|0,a,e)|0;l=d;return b|0}function _E(a,b){a=a|0;b=b|0;return vE(c[594]|0,a,b)|0}function $E(b){b=b|0;var d=0,e=0,f=0,g=0;f=c[594]|0;if((c[f+76>>2]|0)>-1)g=nE(f)|0;else g=0;do if((kE(b,f)|0)<0)b=1;else{if((a[f+75>>0]|0)!=10?(d=f+20|0,e=c[d>>2]|0,e>>>0<(c[f+16>>2]|0)>>>0):0){c[d>>2]=e+1;a[e>>0]=10;b=0;break}b=(oE(f,10)|0)<0}while(0);if(g|0)mE(f);return b<<31>>31|0}function aF(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0;K=l;l=l+16|0;o=K;do if(a>>>0<245){p=a>>>0<11?16:a+11&-8;a=p>>>3;t=c[2780]|0;d=t>>>a;if(d&3|0){a=(d&1^1)+a|0;d=11160+(a<<1<<2)|0;e=d+8|0;f=c[e>>2]|0;g=f+8|0;h=c[g>>2]|0;do if((d|0)!=(h|0)){if(h>>>0<(c[2784]|0)>>>0)jb();b=h+12|0;if((c[b>>2]|0)==(f|0)){c[b>>2]=d;c[e>>2]=h;break}else jb()}else c[2780]=t&~(1<<a);while(0);J=a<<3;c[f+4>>2]=J|3;J=f+J+4|0;c[J>>2]=c[J>>2]|1;J=g;l=K;return J|0}s=c[2782]|0;if(p>>>0>s>>>0){if(d|0){i=2<<a;a=d<<a&(i|0-i);a=(a&0-a)+-1|0;i=a>>>12&16;a=a>>>i;e=a>>>5&8;a=a>>>e;g=a>>>2&4;a=a>>>g;d=a>>>1&2;a=a>>>d;b=a>>>1&1;b=(e|i|g|d|b)+(a>>>b)|0;a=11160+(b<<1<<2)|0;d=a+8|0;g=c[d>>2]|0;i=g+8|0;e=c[i>>2]|0;do if((a|0)!=(e|0)){if(e>>>0<(c[2784]|0)>>>0)jb();f=e+12|0;if((c[f>>2]|0)==(g|0)){c[f>>2]=a;c[d>>2]=e;j=t;break}else jb()}else{j=t&~(1<<b);c[2780]=j}while(0);h=(b<<3)-p|0;c[g+4>>2]=p|3;e=g+p|0;c[e+4>>2]=h|1;c[e+h>>2]=h;if(s|0){f=c[2785]|0;b=s>>>3;d=11160+(b<<1<<2)|0;b=1<<b;if(j&b){b=d+8|0;a=c[b>>2]|0;if(a>>>0<(c[2784]|0)>>>0)jb();else{k=a;m=b}}else{c[2780]=j|b;k=d;m=d+8|0}c[m>>2]=f;c[k+12>>2]=f;c[f+8>>2]=k;c[f+12>>2]=d}c[2782]=h;c[2785]=e;J=i;l=K;return J|0}k=c[2781]|0;if(k){a=(k&0-k)+-1|0;I=a>>>12&16;a=a>>>I;H=a>>>5&8;a=a>>>H;J=a>>>2&4;a=a>>>J;d=a>>>1&2;a=a>>>d;b=a>>>1&1;b=c[11424+((H|I|J|d|b)+(a>>>b)<<2)>>2]|0;a=(c[b+4>>2]&-8)-p|0;d=c[b+16+(((c[b+16>>2]|0)==0&1)<<2)>>2]|0;if(!d){j=b;h=a}else{do{I=(c[d+4>>2]&-8)-p|0;J=I>>>0<a>>>0;a=J?I:a;b=J?d:b;d=c[d+16+(((c[d+16>>2]|0)==0&1)<<2)>>2]|0}while((d|0)!=0);j=b;h=a}f=c[2784]|0;if(j>>>0<f>>>0)jb();i=j+p|0;if(j>>>0>=i>>>0)jb();g=c[j+24>>2]|0;d=c[j+12>>2]|0;do if((d|0)==(j|0)){a=j+20|0;b=c[a>>2]|0;if(!b){a=j+16|0;b=c[a>>2]|0;if(!b){n=0;break}}while(1){d=b+20|0;e=c[d>>2]|0;if(e|0){b=e;a=d;continue}d=b+16|0;e=c[d>>2]|0;if(!e)break;else{b=e;a=d}}if(a>>>0<f>>>0)jb();else{c[a>>2]=0;n=b;break}}else{e=c[j+8>>2]|0;if(e>>>0<f>>>0)jb();b=e+12|0;if((c[b>>2]|0)!=(j|0))jb();a=d+8|0;if((c[a>>2]|0)==(j|0)){c[b>>2]=d;c[a>>2]=e;n=d;break}else jb()}while(0);a:do if(g|0){b=c[j+28>>2]|0;a=11424+(b<<2)|0;do if((j|0)==(c[a>>2]|0)){c[a>>2]=n;if(!n){c[2781]=k&~(1<<b);break a}}else if(g>>>0>=(c[2784]|0)>>>0){c[g+16+(((c[g+16>>2]|0)!=(j|0)&1)<<2)>>2]=n;if(!n)break a;else break}else jb();while(0);a=c[2784]|0;if(n>>>0<a>>>0)jb();c[n+24>>2]=g;b=c[j+16>>2]|0;do if(b|0)if(b>>>0<a>>>0)jb();else{c[n+16>>2]=b;c[b+24>>2]=n;break}while(0);b=c[j+20>>2]|0;if(b|0)if(b>>>0<(c[2784]|0)>>>0)jb();else{c[n+20>>2]=b;c[b+24>>2]=n;break}}while(0);if(h>>>0<16){J=h+p|0;c[j+4>>2]=J|3;J=j+J+4|0;c[J>>2]=c[J>>2]|1}else{c[j+4>>2]=p|3;c[i+4>>2]=h|1;c[i+h>>2]=h;if(s|0){e=c[2785]|0;b=s>>>3;d=11160+(b<<1<<2)|0;b=1<<b;if(t&b){b=d+8|0;a=c[b>>2]|0;if(a>>>0<(c[2784]|0)>>>0)jb();else{q=a;r=b}}else{c[2780]=t|b;q=d;r=d+8|0}c[r>>2]=e;c[q+12>>2]=e;c[e+8>>2]=q;c[e+12>>2]=d}c[2782]=h;c[2785]=i}J=j+8|0;l=K;return J|0}}}else if(a>>>0<=4294967231){a=a+11|0;p=a&-8;k=c[2781]|0;if(k){e=0-p|0;a=a>>>8;if(a)if(p>>>0>16777215)i=31;else{r=(a+1048320|0)>>>16&8;C=a<<r;q=(C+520192|0)>>>16&4;C=C<<q;i=(C+245760|0)>>>16&2;i=14-(q|r|i)+(C<<i>>>15)|0;i=p>>>(i+7|0)&1|i<<1}else i=0;d=c[11424+(i<<2)>>2]|0;b:do if(!d){d=0;a=0;C=81}else{a=0;h=p<<((i|0)==31?0:25-(i>>>1)|0);g=0;while(1){f=(c[d+4>>2]&-8)-p|0;if(f>>>0<e>>>0)if(!f){a=d;e=0;f=d;C=85;break b}else{a=d;e=f}f=c[d+20>>2]|0;d=c[d+16+(h>>>31<<2)>>2]|0;g=(f|0)==0|(f|0)==(d|0)?g:f;f=(d|0)==0;if(f){d=g;C=81;break}else h=h<<((f^1)&1)}}while(0);if((C|0)==81){if((d|0)==0&(a|0)==0){a=2<<i;a=k&(a|0-a);if(!a)break;r=(a&0-a)+-1|0;m=r>>>12&16;r=r>>>m;j=r>>>5&8;r=r>>>j;n=r>>>2&4;r=r>>>n;q=r>>>1&2;r=r>>>q;d=r>>>1&1;a=0;d=c[11424+((j|m|n|q|d)+(r>>>d)<<2)>>2]|0}if(!d){j=a;i=e}else{f=d;C=85}}if((C|0)==85)while(1){C=0;d=(c[f+4>>2]&-8)-p|0;r=d>>>0<e>>>0;d=r?d:e;a=r?f:a;f=c[f+16+(((c[f+16>>2]|0)==0&1)<<2)>>2]|0;if(!f){j=a;i=d;break}else{e=d;C=85}}if((j|0)!=0?i>>>0<((c[2782]|0)-p|0)>>>0:0){f=c[2784]|0;if(j>>>0<f>>>0)jb();h=j+p|0;if(j>>>0>=h>>>0)jb();g=c[j+24>>2]|0;d=c[j+12>>2]|0;do if((d|0)==(j|0)){a=j+20|0;b=c[a>>2]|0;if(!b){a=j+16|0;b=c[a>>2]|0;if(!b){s=0;break}}while(1){d=b+20|0;e=c[d>>2]|0;if(e|0){b=e;a=d;continue}d=b+16|0;e=c[d>>2]|0;if(!e)break;else{b=e;a=d}}if(a>>>0<f>>>0)jb();else{c[a>>2]=0;s=b;break}}else{e=c[j+8>>2]|0;if(e>>>0<f>>>0)jb();b=e+12|0;if((c[b>>2]|0)!=(j|0))jb();a=d+8|0;if((c[a>>2]|0)==(j|0)){c[b>>2]=d;c[a>>2]=e;s=d;break}else jb()}while(0);c:do if(g){b=c[j+28>>2]|0;a=11424+(b<<2)|0;do if((j|0)==(c[a>>2]|0)){c[a>>2]=s;if(!s){t=k&~(1<<b);c[2781]=t;break c}}else if(g>>>0>=(c[2784]|0)>>>0){c[g+16+(((c[g+16>>2]|0)!=(j|0)&1)<<2)>>2]=s;if(!s){t=k;break c}else break}else jb();while(0);a=c[2784]|0;if(s>>>0<a>>>0)jb();c[s+24>>2]=g;b=c[j+16>>2]|0;do if(b|0)if(b>>>0<a>>>0)jb();else{c[s+16>>2]=b;c[b+24>>2]=s;break}while(0);b=c[j+20>>2]|0;if(b)if(b>>>0<(c[2784]|0)>>>0)jb();else{c[s+20>>2]=b;c[b+24>>2]=s;t=k;break}else t=k}else t=k;while(0);do if(i>>>0>=16){c[j+4>>2]=p|3;c[h+4>>2]=i|1;c[h+i>>2]=i;b=i>>>3;if(i>>>0<256){d=11160+(b<<1<<2)|0;a=c[2780]|0;b=1<<b;if(a&b){b=d+8|0;a=c[b>>2]|0;if(a>>>0<(c[2784]|0)>>>0)jb();else{x=a;y=b}}else{c[2780]=a|b;x=d;y=d+8|0}c[y>>2]=h;c[x+12>>2]=h;c[h+8>>2]=x;c[h+12>>2]=d;break}b=i>>>8;if(b)if(i>>>0>16777215)b=31;else{I=(b+1048320|0)>>>16&8;J=b<<I;H=(J+520192|0)>>>16&4;J=J<<H;b=(J+245760|0)>>>16&2;b=14-(H|I|b)+(J<<b>>>15)|0;b=i>>>(b+7|0)&1|b<<1}else b=0;d=11424+(b<<2)|0;c[h+28>>2]=b;a=h+16|0;c[a+4>>2]=0;c[a>>2]=0;a=1<<b;if(!(t&a)){c[2781]=t|a;c[d>>2]=h;c[h+24>>2]=d;c[h+12>>2]=h;c[h+8>>2]=h;break}a=i<<((b|0)==31?0:25-(b>>>1)|0);e=c[d>>2]|0;while(1){if((c[e+4>>2]&-8|0)==(i|0)){C=139;break}d=e+16+(a>>>31<<2)|0;b=c[d>>2]|0;if(!b){C=136;break}else{a=a<<1;e=b}}if((C|0)==136)if(d>>>0<(c[2784]|0)>>>0)jb();else{c[d>>2]=h;c[h+24>>2]=e;c[h+12>>2]=h;c[h+8>>2]=h;break}else if((C|0)==139){b=e+8|0;a=c[b>>2]|0;J=c[2784]|0;if(a>>>0>=J>>>0&e>>>0>=J>>>0){c[a+12>>2]=h;c[b>>2]=h;c[h+8>>2]=a;c[h+12>>2]=e;c[h+24>>2]=0;break}else jb()}}else{J=i+p|0;c[j+4>>2]=J|3;J=j+J+4|0;c[J>>2]=c[J>>2]|1}while(0);J=j+8|0;l=K;return J|0}}}else p=-1;while(0);d=c[2782]|0;if(d>>>0>=p>>>0){b=d-p|0;a=c[2785]|0;if(b>>>0>15){J=a+p|0;c[2785]=J;c[2782]=b;c[J+4>>2]=b|1;c[J+b>>2]=b;c[a+4>>2]=p|3}else{c[2782]=0;c[2785]=0;c[a+4>>2]=d|3;J=a+d+4|0;c[J>>2]=c[J>>2]|1}J=a+8|0;l=K;return J|0}h=c[2783]|0;if(h>>>0>p>>>0){H=h-p|0;c[2783]=H;J=c[2786]|0;I=J+p|0;c[2786]=I;c[I+4>>2]=H|1;c[J+4>>2]=p|3;J=J+8|0;l=K;return J|0}if(!(c[2898]|0)){c[2900]=4096;c[2899]=4096;c[2901]=-1;c[2902]=-1;c[2903]=0;c[2891]=0;a=o&-16^1431655768;c[o>>2]=a;c[2898]=a;a=4096}else a=c[2900]|0;i=p+48|0;j=p+47|0;g=a+j|0;f=0-a|0;k=g&f;if(k>>>0<=p>>>0){J=0;l=K;return J|0}a=c[2890]|0;if(a|0?(x=c[2888]|0,y=x+k|0,y>>>0<=x>>>0|y>>>0>a>>>0):0){J=0;l=K;return J|0}d:do if(!(c[2891]&4)){d=c[2786]|0;e:do if(d){e=11568;while(1){a=c[e>>2]|0;if(a>>>0<=d>>>0?(w=e+4|0,(a+(c[w>>2]|0)|0)>>>0>d>>>0):0)break;a=c[e+8>>2]|0;if(!a){C=163;break e}else e=a}b=g-h&f;if(b>>>0<2147483647){a=AF(b|0)|0;if((a|0)==((c[e>>2]|0)+(c[w>>2]|0)|0)){if((a|0)!=(-1|0)){h=b;g=a;C=180;break d}}else{e=a;C=171}}else b=0}else C=163;while(0);do if((C|0)==163){d=AF(0)|0;if((d|0)!=(-1|0)?(b=d,u=c[2899]|0,v=u+-1|0,b=((v&b|0)==0?0:(v+b&0-u)-b|0)+k|0,u=c[2888]|0,v=b+u|0,b>>>0>p>>>0&b>>>0<2147483647):0){y=c[2890]|0;if(y|0?v>>>0<=u>>>0|v>>>0>y>>>0:0){b=0;break}a=AF(b|0)|0;if((a|0)==(d|0)){h=b;g=d;C=180;break d}else{e=a;C=171}}else b=0}while(0);do if((C|0)==171){d=0-b|0;if(!(i>>>0>b>>>0&(b>>>0<2147483647&(e|0)!=(-1|0))))if((e|0)==(-1|0)){b=0;break}else{h=b;g=e;C=180;break d}a=c[2900]|0;a=j-b+a&0-a;if(a>>>0>=2147483647){h=b;g=e;C=180;break d}if((AF(a|0)|0)==(-1|0)){AF(d|0)|0;b=0;break}else{h=a+b|0;g=e;C=180;break d}}while(0);c[2891]=c[2891]|4;C=178}else{b=0;C=178}while(0);if(((C|0)==178?k>>>0<2147483647:0)?(B=AF(k|0)|0,y=AF(0)|0,z=y-B|0,A=z>>>0>(p+40|0)>>>0,!((B|0)==(-1|0)|A^1|B>>>0<y>>>0&((B|0)!=(-1|0)&(y|0)!=(-1|0))^1)):0){h=A?z:b;g=B;C=180}if((C|0)==180){b=(c[2888]|0)+h|0;c[2888]=b;if(b>>>0>(c[2889]|0)>>>0)c[2889]=b;k=c[2786]|0;do if(k){b=11568;while(1){a=c[b>>2]|0;d=b+4|0;e=c[d>>2]|0;if((g|0)==(a+e|0)){C=190;break}f=c[b+8>>2]|0;if(!f)break;else b=f}if(((C|0)==190?(c[b+12>>2]&8|0)==0:0)?k>>>0<g>>>0&k>>>0>=a>>>0:0){c[d>>2]=e+h;J=k+8|0;J=(J&7|0)==0?0:0-J&7;I=k+J|0;J=(c[2783]|0)+(h-J)|0;c[2786]=I;c[2783]=J;c[I+4>>2]=J|1;c[I+J+4>>2]=40;c[2787]=c[2902];break}b=c[2784]|0;if(g>>>0<b>>>0){c[2784]=g;i=g}else i=b;d=g+h|0;b=11568;while(1){if((c[b>>2]|0)==(d|0)){C=198;break}a=c[b+8>>2]|0;if(!a)break;else b=a}if((C|0)==198?(c[b+12>>2]&8|0)==0:0){c[b>>2]=g;n=b+4|0;c[n>>2]=(c[n>>2]|0)+h;n=g+8|0;n=g+((n&7|0)==0?0:0-n&7)|0;b=d+8|0;b=d+((b&7|0)==0?0:0-b&7)|0;m=n+p|0;j=b-n-p|0;c[n+4>>2]=p|3;do if((b|0)!=(k|0)){if((b|0)==(c[2785]|0)){J=(c[2782]|0)+j|0;c[2782]=J;c[2785]=m;c[m+4>>2]=J|1;c[m+J>>2]=J;break}a=c[b+4>>2]|0;if((a&3|0)==1){h=a&-8;f=a>>>3;f:do if(a>>>0>=256){g=c[b+24>>2]|0;e=c[b+12>>2]|0;do if((e|0)==(b|0)){e=b+16|0;d=e+4|0;a=c[d>>2]|0;if(!a){a=c[e>>2]|0;if(!a){H=0;break}else d=e}while(1){e=a+20|0;f=c[e>>2]|0;if(f|0){a=f;d=e;continue}e=a+16|0;f=c[e>>2]|0;if(!f)break;else{a=f;d=e}}if(d>>>0<i>>>0)jb();else{c[d>>2]=0;H=a;break}}else{f=c[b+8>>2]|0;if(f>>>0<i>>>0)jb();a=f+12|0;if((c[a>>2]|0)!=(b|0))jb();d=e+8|0;if((c[d>>2]|0)==(b|0)){c[a>>2]=e;c[d>>2]=f;H=e;break}else jb()}while(0);if(!g)break;a=c[b+28>>2]|0;d=11424+(a<<2)|0;do if((b|0)!=(c[d>>2]|0))if(g>>>0>=(c[2784]|0)>>>0){c[g+16+(((c[g+16>>2]|0)!=(b|0)&1)<<2)>>2]=H;if(!H)break f;else break}else jb();else{c[d>>2]=H;if(H|0)break;c[2781]=c[2781]&~(1<<a);break f}while(0);e=c[2784]|0;if(H>>>0<e>>>0)jb();c[H+24>>2]=g;a=b+16|0;d=c[a>>2]|0;do if(d|0)if(d>>>0<e>>>0)jb();else{c[H+16>>2]=d;c[d+24>>2]=H;break}while(0);a=c[a+4>>2]|0;if(!a)break;if(a>>>0<(c[2784]|0)>>>0)jb();else{c[H+20>>2]=a;c[a+24>>2]=H;break}}else{d=c[b+8>>2]|0;e=c[b+12>>2]|0;a=11160+(f<<1<<2)|0;do if((d|0)!=(a|0)){if(d>>>0<i>>>0)jb();if((c[d+12>>2]|0)==(b|0))break;jb()}while(0);if((e|0)==(d|0)){c[2780]=c[2780]&~(1<<f);break}do if((e|0)==(a|0))E=e+8|0;else{if(e>>>0<i>>>0)jb();a=e+8|0;if((c[a>>2]|0)==(b|0)){E=a;break}jb()}while(0);c[d+12>>2]=e;c[E>>2]=d}while(0);b=b+h|0;f=h+j|0}else f=j;b=b+4|0;c[b>>2]=c[b>>2]&-2;c[m+4>>2]=f|1;c[m+f>>2]=f;b=f>>>3;if(f>>>0<256){d=11160+(b<<1<<2)|0;a=c[2780]|0;b=1<<b;do if(!(a&b)){c[2780]=a|b;I=d;J=d+8|0}else{b=d+8|0;a=c[b>>2]|0;if(a>>>0>=(c[2784]|0)>>>0){I=a;J=b;break}jb()}while(0);c[J>>2]=m;c[I+12>>2]=m;c[m+8>>2]=I;c[m+12>>2]=d;break}b=f>>>8;do if(!b)b=0;else{if(f>>>0>16777215){b=31;break}I=(b+1048320|0)>>>16&8;J=b<<I;H=(J+520192|0)>>>16&4;J=J<<H;b=(J+245760|0)>>>16&2;b=14-(H|I|b)+(J<<b>>>15)|0;b=f>>>(b+7|0)&1|b<<1}while(0);e=11424+(b<<2)|0;c[m+28>>2]=b;a=m+16|0;c[a+4>>2]=0;c[a>>2]=0;a=c[2781]|0;d=1<<b;if(!(a&d)){c[2781]=a|d;c[e>>2]=m;c[m+24>>2]=e;c[m+12>>2]=m;c[m+8>>2]=m;break}a=f<<((b|0)==31?0:25-(b>>>1)|0);e=c[e>>2]|0;while(1){if((c[e+4>>2]&-8|0)==(f|0)){C=265;break}d=e+16+(a>>>31<<2)|0;b=c[d>>2]|0;if(!b){C=262;break}else{a=a<<1;e=b}}if((C|0)==262)if(d>>>0<(c[2784]|0)>>>0)jb();else{c[d>>2]=m;c[m+24>>2]=e;c[m+12>>2]=m;c[m+8>>2]=m;break}else if((C|0)==265){b=e+8|0;a=c[b>>2]|0;J=c[2784]|0;if(a>>>0>=J>>>0&e>>>0>=J>>>0){c[a+12>>2]=m;c[b>>2]=m;c[m+8>>2]=a;c[m+12>>2]=e;c[m+24>>2]=0;break}else jb()}}else{J=(c[2783]|0)+j|0;c[2783]=J;c[2786]=m;c[m+4>>2]=J|1}while(0);J=n+8|0;l=K;return J|0}b=11568;while(1){a=c[b>>2]|0;if(a>>>0<=k>>>0?(D=a+(c[b+4>>2]|0)|0,D>>>0>k>>>0):0)break;b=c[b+8>>2]|0}f=D+-47|0;a=f+8|0;a=f+((a&7|0)==0?0:0-a&7)|0;f=k+16|0;a=a>>>0<f>>>0?k:a;b=a+8|0;d=g+8|0;d=(d&7|0)==0?0:0-d&7;J=g+d|0;d=h+-40-d|0;c[2786]=J;c[2783]=d;c[J+4>>2]=d|1;c[J+d+4>>2]=40;c[2787]=c[2902];d=a+4|0;c[d>>2]=27;c[b>>2]=c[2892];c[b+4>>2]=c[2893];c[b+8>>2]=c[2894];c[b+12>>2]=c[2895];c[2892]=g;c[2893]=h;c[2895]=0;c[2894]=b;b=a+24|0;do{J=b;b=b+4|0;c[b>>2]=7}while((J+8|0)>>>0<D>>>0);if((a|0)!=(k|0)){g=a-k|0;c[d>>2]=c[d>>2]&-2;c[k+4>>2]=g|1;c[a>>2]=g;b=g>>>3;if(g>>>0<256){d=11160+(b<<1<<2)|0;a=c[2780]|0;b=1<<b;if(a&b){b=d+8|0;a=c[b>>2]|0;if(a>>>0<(c[2784]|0)>>>0)jb();else{F=a;G=b}}else{c[2780]=a|b;F=d;G=d+8|0}c[G>>2]=k;c[F+12>>2]=k;c[k+8>>2]=F;c[k+12>>2]=d;break}b=g>>>8;if(b)if(g>>>0>16777215)d=31;else{I=(b+1048320|0)>>>16&8;J=b<<I;H=(J+520192|0)>>>16&4;J=J<<H;d=(J+245760|0)>>>16&2;d=14-(H|I|d)+(J<<d>>>15)|0;d=g>>>(d+7|0)&1|d<<1}else d=0;e=11424+(d<<2)|0;c[k+28>>2]=d;c[k+20>>2]=0;c[f>>2]=0;b=c[2781]|0;a=1<<d;if(!(b&a)){c[2781]=b|a;c[e>>2]=k;c[k+24>>2]=e;c[k+12>>2]=k;c[k+8>>2]=k;break}a=g<<((d|0)==31?0:25-(d>>>1)|0);e=c[e>>2]|0;while(1){if((c[e+4>>2]&-8|0)==(g|0)){C=292;break}d=e+16+(a>>>31<<2)|0;b=c[d>>2]|0;if(!b){C=289;break}else{a=a<<1;e=b}}if((C|0)==289)if(d>>>0<(c[2784]|0)>>>0)jb();else{c[d>>2]=k;c[k+24>>2]=e;c[k+12>>2]=k;c[k+8>>2]=k;break}else if((C|0)==292){b=e+8|0;a=c[b>>2]|0;J=c[2784]|0;if(a>>>0>=J>>>0&e>>>0>=J>>>0){c[a+12>>2]=k;c[b>>2]=k;c[k+8>>2]=a;c[k+12>>2]=e;c[k+24>>2]=0;break}else jb()}}}else{J=c[2784]|0;if((J|0)==0|g>>>0<J>>>0)c[2784]=g;c[2892]=g;c[2893]=h;c[2895]=0;c[2789]=c[2898];c[2788]=-1;b=0;do{J=11160+(b<<1<<2)|0;c[J+12>>2]=J;c[J+8>>2]=J;b=b+1|0}while((b|0)!=32);J=g+8|0;J=(J&7|0)==0?0:0-J&7;I=g+J|0;J=h+-40-J|0;c[2786]=I;c[2783]=J;c[I+4>>2]=J|1;c[I+J+4>>2]=40;c[2787]=c[2902]}while(0);b=c[2783]|0;if(b>>>0>p>>>0){H=b-p|0;c[2783]=H;J=c[2786]|0;I=J+p|0;c[2786]=I;c[I+4>>2]=H|1;c[J+4>>2]=p|3;J=J+8|0;l=K;return J|0}}c[(dE()|0)>>2]=12;J=0;l=K;return J|0}function bF(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;if(!a)return;d=a+-8|0;h=c[2784]|0;if(d>>>0<h>>>0)jb();a=c[a+-4>>2]|0;b=a&3;if((b|0)==1)jb();e=a&-8;o=d+e|0;a:do if(!(a&1)){a=c[d>>2]|0;if(!b)return;k=d+(0-a)|0;j=a+e|0;if(k>>>0<h>>>0)jb();if((k|0)==(c[2785]|0)){a=o+4|0;b=c[a>>2]|0;if((b&3|0)!=3){r=k;f=j;m=k;break}c[2782]=j;c[a>>2]=b&-2;c[k+4>>2]=j|1;c[k+j>>2]=j;return}e=a>>>3;if(a>>>0<256){b=c[k+8>>2]|0;d=c[k+12>>2]|0;a=11160+(e<<1<<2)|0;if((b|0)!=(a|0)){if(b>>>0<h>>>0)jb();if((c[b+12>>2]|0)!=(k|0))jb()}if((d|0)==(b|0)){c[2780]=c[2780]&~(1<<e);r=k;f=j;m=k;break}if((d|0)!=(a|0)){if(d>>>0<h>>>0)jb();a=d+8|0;if((c[a>>2]|0)==(k|0))g=a;else jb()}else g=d+8|0;c[b+12>>2]=d;c[g>>2]=b;r=k;f=j;m=k;break}g=c[k+24>>2]|0;d=c[k+12>>2]|0;do if((d|0)==(k|0)){d=k+16|0;b=d+4|0;a=c[b>>2]|0;if(!a){a=c[d>>2]|0;if(!a){i=0;break}else b=d}while(1){d=a+20|0;e=c[d>>2]|0;if(e|0){a=e;b=d;continue}d=a+16|0;e=c[d>>2]|0;if(!e)break;else{a=e;b=d}}if(b>>>0<h>>>0)jb();else{c[b>>2]=0;i=a;break}}else{e=c[k+8>>2]|0;if(e>>>0<h>>>0)jb();a=e+12|0;if((c[a>>2]|0)!=(k|0))jb();b=d+8|0;if((c[b>>2]|0)==(k|0)){c[a>>2]=d;c[b>>2]=e;i=d;break}else jb()}while(0);if(g){a=c[k+28>>2]|0;b=11424+(a<<2)|0;do if((k|0)==(c[b>>2]|0)){c[b>>2]=i;if(!i){c[2781]=c[2781]&~(1<<a);r=k;f=j;m=k;break a}}else if(g>>>0>=(c[2784]|0)>>>0){c[g+16+(((c[g+16>>2]|0)!=(k|0)&1)<<2)>>2]=i;if(!i){r=k;f=j;m=k;break a}else break}else jb();while(0);d=c[2784]|0;if(i>>>0<d>>>0)jb();c[i+24>>2]=g;a=k+16|0;b=c[a>>2]|0;do if(b|0)if(b>>>0<d>>>0)jb();else{c[i+16>>2]=b;c[b+24>>2]=i;break}while(0);a=c[a+4>>2]|0;if(a)if(a>>>0<(c[2784]|0)>>>0)jb();else{c[i+20>>2]=a;c[a+24>>2]=i;r=k;f=j;m=k;break}else{r=k;f=j;m=k}}else{r=k;f=j;m=k}}else{r=d;f=e;m=d}while(0);if(m>>>0>=o>>>0)jb();a=o+4|0;b=c[a>>2]|0;if(!(b&1))jb();if(!(b&2)){a=c[2785]|0;if((o|0)==(c[2786]|0)){q=(c[2783]|0)+f|0;c[2783]=q;c[2786]=r;c[r+4>>2]=q|1;if((r|0)!=(a|0))return;c[2785]=0;c[2782]=0;return}if((o|0)==(a|0)){q=(c[2782]|0)+f|0;c[2782]=q;c[2785]=m;c[r+4>>2]=q|1;c[m+q>>2]=q;return}f=(b&-8)+f|0;e=b>>>3;b:do if(b>>>0>=256){g=c[o+24>>2]|0;a=c[o+12>>2]|0;do if((a|0)==(o|0)){d=o+16|0;b=d+4|0;a=c[b>>2]|0;if(!a){a=c[d>>2]|0;if(!a){n=0;break}else b=d}while(1){d=a+20|0;e=c[d>>2]|0;if(e|0){a=e;b=d;continue}d=a+16|0;e=c[d>>2]|0;if(!e)break;else{a=e;b=d}}if(b>>>0<(c[2784]|0)>>>0)jb();else{c[b>>2]=0;n=a;break}}else{b=c[o+8>>2]|0;if(b>>>0<(c[2784]|0)>>>0)jb();d=b+12|0;if((c[d>>2]|0)!=(o|0))jb();e=a+8|0;if((c[e>>2]|0)==(o|0)){c[d>>2]=a;c[e>>2]=b;n=a;break}else jb()}while(0);if(g|0){a=c[o+28>>2]|0;b=11424+(a<<2)|0;do if((o|0)==(c[b>>2]|0)){c[b>>2]=n;if(!n){c[2781]=c[2781]&~(1<<a);break b}}else if(g>>>0>=(c[2784]|0)>>>0){c[g+16+(((c[g+16>>2]|0)!=(o|0)&1)<<2)>>2]=n;if(!n)break b;else break}else jb();while(0);d=c[2784]|0;if(n>>>0<d>>>0)jb();c[n+24>>2]=g;a=o+16|0;b=c[a>>2]|0;do if(b|0)if(b>>>0<d>>>0)jb();else{c[n+16>>2]=b;c[b+24>>2]=n;break}while(0);a=c[a+4>>2]|0;if(a|0)if(a>>>0<(c[2784]|0)>>>0)jb();else{c[n+20>>2]=a;c[a+24>>2]=n;break}}}else{b=c[o+8>>2]|0;d=c[o+12>>2]|0;a=11160+(e<<1<<2)|0;if((b|0)!=(a|0)){if(b>>>0<(c[2784]|0)>>>0)jb();if((c[b+12>>2]|0)!=(o|0))jb()}if((d|0)==(b|0)){c[2780]=c[2780]&~(1<<e);break}if((d|0)!=(a|0)){if(d>>>0<(c[2784]|0)>>>0)jb();a=d+8|0;if((c[a>>2]|0)==(o|0))l=a;else jb()}else l=d+8|0;c[b+12>>2]=d;c[l>>2]=b}while(0);c[r+4>>2]=f|1;c[m+f>>2]=f;if((r|0)==(c[2785]|0)){c[2782]=f;return}}else{c[a>>2]=b&-2;c[r+4>>2]=f|1;c[m+f>>2]=f}a=f>>>3;if(f>>>0<256){d=11160+(a<<1<<2)|0;b=c[2780]|0;a=1<<a;if(b&a){a=d+8|0;b=c[a>>2]|0;if(b>>>0<(c[2784]|0)>>>0)jb();else{p=b;q=a}}else{c[2780]=b|a;p=d;q=d+8|0}c[q>>2]=r;c[p+12>>2]=r;c[r+8>>2]=p;c[r+12>>2]=d;return}a=f>>>8;if(a)if(f>>>0>16777215)a=31;else{p=(a+1048320|0)>>>16&8;q=a<<p;o=(q+520192|0)>>>16&4;q=q<<o;a=(q+245760|0)>>>16&2;a=14-(o|p|a)+(q<<a>>>15)|0;a=f>>>(a+7|0)&1|a<<1}else a=0;e=11424+(a<<2)|0;c[r+28>>2]=a;c[r+20>>2]=0;c[r+16>>2]=0;b=c[2781]|0;d=1<<a;do if(b&d){b=f<<((a|0)==31?0:25-(a>>>1)|0);e=c[e>>2]|0;while(1){if((c[e+4>>2]&-8|0)==(f|0)){a=124;break}d=e+16+(b>>>31<<2)|0;a=c[d>>2]|0;if(!a){a=121;break}else{b=b<<1;e=a}}if((a|0)==121)if(d>>>0<(c[2784]|0)>>>0)jb();else{c[d>>2]=r;c[r+24>>2]=e;c[r+12>>2]=r;c[r+8>>2]=r;break}else if((a|0)==124){a=e+8|0;b=c[a>>2]|0;q=c[2784]|0;if(b>>>0>=q>>>0&e>>>0>=q>>>0){c[b+12>>2]=r;c[a>>2]=r;c[r+8>>2]=b;c[r+12>>2]=e;c[r+24>>2]=0;break}else jb()}}else{c[2781]=b|d;c[e>>2]=r;c[r+24>>2]=e;c[r+12>>2]=r;c[r+8>>2]=r}while(0);r=(c[2788]|0)+-1|0;c[2788]=r;if(!r)a=11576;else return;while(1){a=c[a>>2]|0;if(!a)break;else a=a+8|0}c[2788]=-1;return}function cF(a,b){a=a|0;b=b|0;var d=0,e=0;if(!a){b=aF(b)|0;return b|0}if(b>>>0>4294967231){c[(dE()|0)>>2]=12;b=0;return b|0}d=dF(a+-8|0,b>>>0<11?16:b+11&-8)|0;if(d|0){b=d+8|0;return b|0}d=aF(b)|0;if(!d){b=0;return b|0}e=c[a+-4>>2]|0;e=(e&-8)-((e&3|0)==0?8:4)|0;wF(d|0,a|0,(e>>>0<b>>>0?e:b)|0)|0;bF(a);b=d;return b|0}function dF(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0;o=a+4|0;n=c[o>>2]|0;d=n&-8;k=a+d|0;i=c[2784]|0;e=n&3;if(!((e|0)!=1&a>>>0>=i>>>0&a>>>0<k>>>0))jb();f=c[k+4>>2]|0;if(!(f&1))jb();if(!e){if(b>>>0<256){a=0;return a|0}if(d>>>0>=(b+4|0)>>>0?(d-b|0)>>>0<=c[2900]<<1>>>0:0)return a|0;a=0;return a|0}if(d>>>0>=b>>>0){d=d-b|0;if(d>>>0<=15)return a|0;m=a+b|0;c[o>>2]=n&1|b|2;c[m+4>>2]=d|3;o=m+d+4|0;c[o>>2]=c[o>>2]|1;eF(m,d);return a|0}if((k|0)==(c[2786]|0)){m=(c[2783]|0)+d|0;d=m-b|0;e=a+b|0;if(m>>>0<=b>>>0){a=0;return a|0}c[o>>2]=n&1|b|2;c[e+4>>2]=d|1;c[2786]=e;c[2783]=d;return a|0}if((k|0)==(c[2785]|0)){f=(c[2782]|0)+d|0;if(f>>>0<b>>>0){a=0;return a|0}d=f-b|0;e=n&1;if(d>>>0>15){n=a+b|0;m=n+d|0;c[o>>2]=e|b|2;c[n+4>>2]=d|1;c[m>>2]=d;e=m+4|0;c[e>>2]=c[e>>2]&-2;e=n}else{c[o>>2]=e|f|2;e=a+f+4|0;c[e>>2]=c[e>>2]|1;e=0;d=0}c[2782]=d;c[2785]=e;return a|0}if(f&2|0){a=0;return a|0}l=(f&-8)+d|0;if(l>>>0<b>>>0){a=0;return a|0}m=l-b|0;g=f>>>3;a:do if(f>>>0>=256){h=c[k+24>>2]|0;f=c[k+12>>2]|0;do if((f|0)==(k|0)){f=k+16|0;e=f+4|0;d=c[e>>2]|0;if(!d){d=c[f>>2]|0;if(!d){j=0;break}else e=f}while(1){f=d+20|0;g=c[f>>2]|0;if(g|0){d=g;e=f;continue}f=d+16|0;g=c[f>>2]|0;if(!g)break;else{d=g;e=f}}if(e>>>0<i>>>0)jb();else{c[e>>2]=0;j=d;break}}else{g=c[k+8>>2]|0;if(g>>>0<i>>>0)jb();d=g+12|0;if((c[d>>2]|0)!=(k|0))jb();e=f+8|0;if((c[e>>2]|0)==(k|0)){c[d>>2]=f;c[e>>2]=g;j=f;break}else jb()}while(0);if(h|0){d=c[k+28>>2]|0;e=11424+(d<<2)|0;do if((k|0)==(c[e>>2]|0)){c[e>>2]=j;if(!j){c[2781]=c[2781]&~(1<<d);break a}}else if(h>>>0>=(c[2784]|0)>>>0){c[h+16+(((c[h+16>>2]|0)!=(k|0)&1)<<2)>>2]=j;if(!j)break a;else break}else jb();while(0);f=c[2784]|0;if(j>>>0<f>>>0)jb();c[j+24>>2]=h;d=k+16|0;e=c[d>>2]|0;do if(e|0)if(e>>>0<f>>>0)jb();else{c[j+16>>2]=e;c[e+24>>2]=j;break}while(0);d=c[d+4>>2]|0;if(d|0)if(d>>>0<(c[2784]|0)>>>0)jb();else{c[j+20>>2]=d;c[d+24>>2]=j;break}}}else{e=c[k+8>>2]|0;f=c[k+12>>2]|0;d=11160+(g<<1<<2)|0;if((e|0)!=(d|0)){if(e>>>0<i>>>0)jb();if((c[e+12>>2]|0)!=(k|0))jb()}if((f|0)==(e|0)){c[2780]=c[2780]&~(1<<g);break}if((f|0)!=(d|0)){if(f>>>0<i>>>0)jb();d=f+8|0;if((c[d>>2]|0)==(k|0))h=d;else jb()}else h=f+8|0;c[e+12>>2]=f;c[h>>2]=e}while(0);d=n&1;if(m>>>0<16){c[o>>2]=l|d|2;o=a+l+4|0;c[o>>2]=c[o>>2]|1;return a|0}else{n=a+b|0;c[o>>2]=d|b|2;c[n+4>>2]=m|3;o=n+m+4|0;c[o>>2]=c[o>>2]|1;eF(n,m);return a|0}return 0}function eF(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;o=a+b|0;d=c[a+4>>2]|0;a:do if(!(d&1)){g=c[a>>2]|0;if(!(d&3))return;l=a+(0-g)|0;k=g+b|0;i=c[2784]|0;if(l>>>0<i>>>0)jb();if((l|0)==(c[2785]|0)){a=o+4|0;d=c[a>>2]|0;if((d&3|0)!=3){r=l;f=k;break}c[2782]=k;c[a>>2]=d&-2;c[l+4>>2]=k|1;c[l+k>>2]=k;return}e=g>>>3;if(g>>>0<256){d=c[l+8>>2]|0;b=c[l+12>>2]|0;a=11160+(e<<1<<2)|0;if((d|0)!=(a|0)){if(d>>>0<i>>>0)jb();if((c[d+12>>2]|0)!=(l|0))jb()}if((b|0)==(d|0)){c[2780]=c[2780]&~(1<<e);r=l;f=k;break}if((b|0)!=(a|0)){if(b>>>0<i>>>0)jb();a=b+8|0;if((c[a>>2]|0)==(l|0))h=a;else jb()}else h=b+8|0;c[d+12>>2]=b;c[h>>2]=d;r=l;f=k;break}g=c[l+24>>2]|0;b=c[l+12>>2]|0;do if((b|0)==(l|0)){b=l+16|0;d=b+4|0;a=c[d>>2]|0;if(!a){a=c[b>>2]|0;if(!a){j=0;break}else d=b}while(1){b=a+20|0;e=c[b>>2]|0;if(e|0){a=e;d=b;continue}b=a+16|0;e=c[b>>2]|0;if(!e)break;else{a=e;d=b}}if(d>>>0<i>>>0)jb();else{c[d>>2]=0;j=a;break}}else{e=c[l+8>>2]|0;if(e>>>0<i>>>0)jb();a=e+12|0;if((c[a>>2]|0)!=(l|0))jb();d=b+8|0;if((c[d>>2]|0)==(l|0)){c[a>>2]=b;c[d>>2]=e;j=b;break}else jb()}while(0);if(g){a=c[l+28>>2]|0;d=11424+(a<<2)|0;do if((l|0)==(c[d>>2]|0)){c[d>>2]=j;if(!j){c[2781]=c[2781]&~(1<<a);r=l;f=k;break a}}else if(g>>>0>=(c[2784]|0)>>>0){c[g+16+(((c[g+16>>2]|0)!=(l|0)&1)<<2)>>2]=j;if(!j){r=l;f=k;break a}else break}else jb();while(0);b=c[2784]|0;if(j>>>0<b>>>0)jb();c[j+24>>2]=g;a=l+16|0;d=c[a>>2]|0;do if(d|0)if(d>>>0<b>>>0)jb();else{c[j+16>>2]=d;c[d+24>>2]=j;break}while(0);a=c[a+4>>2]|0;if(a)if(a>>>0<(c[2784]|0)>>>0)jb();else{c[j+20>>2]=a;c[a+24>>2]=j;r=l;f=k;break}else{r=l;f=k}}else{r=l;f=k}}else{r=a;f=b}while(0);h=c[2784]|0;if(o>>>0<h>>>0)jb();a=o+4|0;d=c[a>>2]|0;if(!(d&2)){a=c[2785]|0;if((o|0)==(c[2786]|0)){q=(c[2783]|0)+f|0;c[2783]=q;c[2786]=r;c[r+4>>2]=q|1;if((r|0)!=(a|0))return;c[2785]=0;c[2782]=0;return}if((o|0)==(a|0)){q=(c[2782]|0)+f|0;c[2782]=q;c[2785]=r;c[r+4>>2]=q|1;c[r+q>>2]=q;return}f=(d&-8)+f|0;e=d>>>3;b:do if(d>>>0>=256){g=c[o+24>>2]|0;b=c[o+12>>2]|0;do if((b|0)==(o|0)){b=o+16|0;d=b+4|0;a=c[d>>2]|0;if(!a){a=c[b>>2]|0;if(!a){n=0;break}else d=b}while(1){b=a+20|0;e=c[b>>2]|0;if(e|0){a=e;d=b;continue}b=a+16|0;e=c[b>>2]|0;if(!e)break;else{a=e;d=b}}if(d>>>0<h>>>0)jb();else{c[d>>2]=0;n=a;break}}else{e=c[o+8>>2]|0;if(e>>>0<h>>>0)jb();a=e+12|0;if((c[a>>2]|0)!=(o|0))jb();d=b+8|0;if((c[d>>2]|0)==(o|0)){c[a>>2]=b;c[d>>2]=e;n=b;break}else jb()}while(0);if(g|0){a=c[o+28>>2]|0;d=11424+(a<<2)|0;do if((o|0)==(c[d>>2]|0)){c[d>>2]=n;if(!n){c[2781]=c[2781]&~(1<<a);break b}}else if(g>>>0>=(c[2784]|0)>>>0){c[g+16+(((c[g+16>>2]|0)!=(o|0)&1)<<2)>>2]=n;if(!n)break b;else break}else jb();while(0);b=c[2784]|0;if(n>>>0<b>>>0)jb();c[n+24>>2]=g;a=o+16|0;d=c[a>>2]|0;do if(d|0)if(d>>>0<b>>>0)jb();else{c[n+16>>2]=d;c[d+24>>2]=n;break}while(0);a=c[a+4>>2]|0;if(a|0)if(a>>>0<(c[2784]|0)>>>0)jb();else{c[n+20>>2]=a;c[a+24>>2]=n;break}}}else{d=c[o+8>>2]|0;b=c[o+12>>2]|0;a=11160+(e<<1<<2)|0;if((d|0)!=(a|0)){if(d>>>0<h>>>0)jb();if((c[d+12>>2]|0)!=(o|0))jb()}if((b|0)==(d|0)){c[2780]=c[2780]&~(1<<e);break}if((b|0)!=(a|0)){if(b>>>0<h>>>0)jb();a=b+8|0;if((c[a>>2]|0)==(o|0))m=a;else jb()}else m=b+8|0;c[d+12>>2]=b;c[m>>2]=d}while(0);c[r+4>>2]=f|1;c[r+f>>2]=f;if((r|0)==(c[2785]|0)){c[2782]=f;return}}else{c[a>>2]=d&-2;c[r+4>>2]=f|1;c[r+f>>2]=f}a=f>>>3;if(f>>>0<256){b=11160+(a<<1<<2)|0;d=c[2780]|0;a=1<<a;if(d&a){a=b+8|0;d=c[a>>2]|0;if(d>>>0<(c[2784]|0)>>>0)jb();else{p=d;q=a}}else{c[2780]=d|a;p=b;q=b+8|0}c[q>>2]=r;c[p+12>>2]=r;c[r+8>>2]=p;c[r+12>>2]=b;return}a=f>>>8;if(a)if(f>>>0>16777215)a=31;else{p=(a+1048320|0)>>>16&8;q=a<<p;o=(q+520192|0)>>>16&4;q=q<<o;a=(q+245760|0)>>>16&2;a=14-(o|p|a)+(q<<a>>>15)|0;a=f>>>(a+7|0)&1|a<<1}else a=0;e=11424+(a<<2)|0;c[r+28>>2]=a;c[r+20>>2]=0;c[r+16>>2]=0;d=c[2781]|0;b=1<<a;if(!(d&b)){c[2781]=d|b;c[e>>2]=r;c[r+24>>2]=e;c[r+12>>2]=r;c[r+8>>2]=r;return}d=f<<((a|0)==31?0:25-(a>>>1)|0);e=c[e>>2]|0;while(1){if((c[e+4>>2]&-8|0)==(f|0)){a=121;break}b=e+16+(d>>>31<<2)|0;a=c[b>>2]|0;if(!a){a=118;break}else{d=d<<1;e=a}}if((a|0)==118){if(b>>>0<(c[2784]|0)>>>0)jb();c[b>>2]=r;c[r+24>>2]=e;c[r+12>>2]=r;c[r+8>>2]=r;return}else if((a|0)==121){a=e+8|0;d=c[a>>2]|0;q=c[2784]|0;if(!(d>>>0>=q>>>0&e>>>0>=q>>>0))jb();c[d+12>>2]=r;c[a>>2]=r;c[r+8>>2]=d;c[r+12>>2]=e;c[r+24>>2]=0;return}}function fF(a){a=a|0;Ia(8420,8443,304,8553)}function gF(a){a=a|0;return}function hF(a,b){a=a|0;b=b|0;return 0}function iF(a){a=a|0;if((jF(a+4|0)|0)==-1){tb[c[(c[a>>2]|0)+8>>2]&127](a);a=1}else a=0;return a|0}function jF(a){a=a|0;var b=0;b=c[a>>2]|0;c[a>>2]=b+-1;return b+-1|0}function kF(a){a=a|0;if(iF(a)|0)lF(a);return}function lF(a){a=a|0;if((jF(a+8|0)|0)==-1)tb[c[(c[a>>2]|0)+16>>2]&127](a);return}function mF(a){a=a|0;var b=0;b=(a|0)==0?1:a;while(1){a=aF(b)|0;if(a|0)break;a=pF()|0;if(!a){a=0;break}Lb[a&0]()}return a|0}function nF(a){a=a|0;return mF(a)|0}function oF(a){a=a|0;bF(a);return}function pF(){var a=0;a=c[2904]|0;c[2904]=a+0;return a|0}function qF(){}function rF(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;d=b-d-(c>>>0>a>>>0|0)>>>0;return (A=d,a-c>>>0|0)|0}function sF(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;c=a+c>>>0;return (A=b+d+(c>>>0<a>>>0|0)>>>0,c|0)|0}function tF(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;h=b+e|0;d=d&255;if((e|0)>=67){while(b&3){a[b>>0]=d;b=b+1|0}f=h&-4|0;g=f-64|0;i=d|d<<8|d<<16|d<<24;while((b|0)<=(g|0)){c[b>>2]=i;c[b+4>>2]=i;c[b+8>>2]=i;c[b+12>>2]=i;c[b+16>>2]=i;c[b+20>>2]=i;c[b+24>>2]=i;c[b+28>>2]=i;c[b+32>>2]=i;c[b+36>>2]=i;c[b+40>>2]=i;c[b+44>>2]=i;c[b+48>>2]=i;c[b+52>>2]=i;c[b+56>>2]=i;c[b+60>>2]=i;b=b+64|0}while((b|0)<(f|0)){c[b>>2]=i;b=b+4|0}}while((b|0)<(h|0)){a[b>>0]=d;b=b+1|0}return h-e|0}function uF(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){A=b<<c|(a&(1<<c)-1<<32-c)>>>32-c;return a<<c}A=a<<c-32;return 0}function vF(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){A=b>>>c;return a>>>c|(b&(1<<c)-1)<<32-c}A=0;return b>>>c-32|0}function wF(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;if((e|0)>=8192)return Sa(b|0,d|0,e|0)|0;h=b|0;g=b+e|0;if((b&3)==(d&3)){while(b&3){if(!e)return h|0;a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0;e=e-1|0}e=g&-4|0;f=e-64|0;while((b|0)<=(f|0)){c[b>>2]=c[d>>2];c[b+4>>2]=c[d+4>>2];c[b+8>>2]=c[d+8>>2];c[b+12>>2]=c[d+12>>2];c[b+16>>2]=c[d+16>>2];c[b+20>>2]=c[d+20>>2];c[b+24>>2]=c[d+24>>2];c[b+28>>2]=c[d+28>>2];c[b+32>>2]=c[d+32>>2];c[b+36>>2]=c[d+36>>2];c[b+40>>2]=c[d+40>>2];c[b+44>>2]=c[d+44>>2];c[b+48>>2]=c[d+48>>2];c[b+52>>2]=c[d+52>>2];c[b+56>>2]=c[d+56>>2];c[b+60>>2]=c[d+60>>2];b=b+64|0;d=d+64|0}while((b|0)<(e|0)){c[b>>2]=c[d>>2];b=b+4|0;d=d+4|0}}else{e=g-4|0;while((b|0)<(e|0)){a[b>>0]=a[d>>0]|0;a[b+1>>0]=a[d+1>>0]|0;a[b+2>>0]=a[d+2>>0]|0;a[b+3>>0]=a[d+3>>0]|0;b=b+4|0;d=d+4|0}}while((b|0)<(g|0)){a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0}return h|0}function xF(b){b=b|0;var c=0;c=a[n+(b&255)>>0]|0;if((c|0)<8)return c|0;c=a[n+(b>>8&255)>>0]|0;if((c|0)<8)return c+8|0;c=a[n+(b>>16&255)>>0]|0;if((c|0)<8)return c+16|0;return (a[n+(b>>>24)>>0]|0)+24|0}function yF(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;l=a;j=b;k=j;h=d;n=e;i=n;if(!k){g=(f|0)!=0;if(!i){if(g){c[f>>2]=(l>>>0)%(h>>>0);c[f+4>>2]=0}n=0;f=(l>>>0)/(h>>>0)>>>0;return (A=n,f)|0}else{if(!g){n=0;f=0;return (A=n,f)|0}c[f>>2]=a|0;c[f+4>>2]=b&0;n=0;f=0;return (A=n,f)|0}}g=(i|0)==0;do if(h){if(!g){g=(S(i|0)|0)-(S(k|0)|0)|0;if(g>>>0<=31){m=g+1|0;i=31-g|0;b=g-31>>31;h=m;a=l>>>(m>>>0)&b|k<<i;b=k>>>(m>>>0)&b;g=0;i=l<<i;break}if(!f){n=0;f=0;return (A=n,f)|0}c[f>>2]=a|0;c[f+4>>2]=j|b&0;n=0;f=0;return (A=n,f)|0}g=h-1|0;if(g&h|0){i=(S(h|0)|0)+33-(S(k|0)|0)|0;p=64-i|0;m=32-i|0;j=m>>31;o=i-32|0;b=o>>31;h=i;a=m-1>>31&k>>>(o>>>0)|(k<<m|l>>>(i>>>0))&b;b=b&k>>>(i>>>0);g=l<<p&j;i=(k<<p|l>>>(o>>>0))&j|l<<m&i-33>>31;break}if(f|0){c[f>>2]=g&l;c[f+4>>2]=0}if((h|0)==1){o=j|b&0;p=a|0|0;return (A=o,p)|0}else{p=xF(h|0)|0;o=k>>>(p>>>0)|0;p=k<<32-p|l>>>(p>>>0)|0;return (A=o,p)|0}}else{if(g){if(f|0){c[f>>2]=(k>>>0)%(h>>>0);c[f+4>>2]=0}o=0;p=(k>>>0)/(h>>>0)>>>0;return (A=o,p)|0}if(!l){if(f|0){c[f>>2]=0;c[f+4>>2]=(k>>>0)%(i>>>0)}o=0;p=(k>>>0)/(i>>>0)>>>0;return (A=o,p)|0}g=i-1|0;if(!(g&i)){if(f|0){c[f>>2]=a|0;c[f+4>>2]=g&k|b&0}o=0;p=k>>>((xF(i|0)|0)>>>0);return (A=o,p)|0}g=(S(i|0)|0)-(S(k|0)|0)|0;if(g>>>0<=30){b=g+1|0;i=31-g|0;h=b;a=k<<i|l>>>(b>>>0);b=k>>>(b>>>0);g=0;i=l<<i;break}if(!f){o=0;p=0;return (A=o,p)|0}c[f>>2]=a|0;c[f+4>>2]=j|b&0;o=0;p=0;return (A=o,p)|0}while(0);if(!h){k=i;j=0;i=0}else{m=d|0|0;l=n|e&0;k=sF(m|0,l|0,-1,-1)|0;d=A;j=i;i=0;do{e=j;j=g>>>31|j<<1;g=i|g<<1;e=a<<1|e>>>31|0;n=a>>>31|b<<1|0;rF(k|0,d|0,e|0,n|0)|0;p=A;o=p>>31|((p|0)<0?-1:0)<<1;i=o&1;a=rF(e|0,n|0,o&m|0,(((p|0)<0?-1:0)>>31|((p|0)<0?-1:0)<<1)&l|0)|0;b=A;h=h-1|0}while((h|0)!=0);k=j;j=0}h=0;if(f|0){c[f>>2]=a;c[f+4>>2]=b}o=(g|0)>>>31|(k|h)<<1|(h<<1|g>>>31)&0|j;p=(g<<1|0>>>31)&-2|i;return (A=o,p)|0}function zF(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return yF(a,b,c,d,0)|0}function AF(a){a=a|0;var b=0,d=0;d=a+15&-16|0;b=c[i>>2]|0;a=b+d|0;if((d|0)>0&(a|0)<(b|0)|(a|0)<0){Y()|0;Ua(12);return -1}c[i>>2]=a;if((a|0)>(X()|0)?(W()|0)==0:0){Ua(12);c[i>>2]=b;return -1}return b|0}function BF(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;g=l;l=l+16|0;f=g|0;yF(a,b,d,e,f)|0;l=g;return (A=c[f+4>>2]|0,c[f>>2]|0)|0}function CF(a){a=a|0;return (a&255)<<24|(a>>8&255)<<16|(a>>16&255)<<8|a>>>24|0}function DF(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;qb[a&1](b|0,c|0,d|0,e|0,f|0)}function EF(a,b,c){a=a|0;b=b|0;c=+c;rb[a&31](b|0,+c)}function FF(a,b,c,d){a=a|0;b=b|0;c=T(c);d=T(d);return T(sb[a&0](b|0,T(c),T(d)))}function GF(a,b){a=a|0;b=b|0;tb[a&127](b|0)}function HF(a,b,c){a=a|0;b=b|0;c=c|0;ub[a&31](b|0,c|0)}function IF(a,b){a=a|0;b=b|0;return vb[a&31](b|0)|0}function JF(a,b,c,d,e){a=a|0;b=b|0;c=+c;d=+d;e=e|0;wb[a&1](b|0,+c,+d,e|0)}function KF(a,b,c,d){a=a|0;b=b|0;c=+c;d=+d;xb[a&1](b|0,+c,+d)}function LF(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return yb[a&15](b|0,c|0,d|0)|0}function MF(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return +zb[a&1](b|0,c|0,d|0)}function NF(a,b){a=a|0;b=b|0;return +Ab[a&15](b|0)}function OF(a,b,c){a=a|0;b=b|0;c=+c;return Bb[a&1](b|0,+c)|0}function PF(a,b,c){a=a|0;b=b|0;c=c|0;return Cb[a&15](b|0,c|0)|0}function QF(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=+d;e=+e;f=f|0;Db[a&1](b|0,c|0,+d,+e,f|0)}function RF(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;Eb[a&1](b|0,c|0,d|0,e|0,f|0,g|0)}function SF(a,b,c){a=a|0;b=b|0;c=c|0;return +Fb[a&7](b|0,c|0)}function TF(a){a=a|0;return Gb[a&7]()|0}function UF(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;return Hb[a&1](b|0,c|0,d|0,e|0,f|0)|0}function VF(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=+e;Ib[a&1](b|0,c|0,d|0,+e)}function WF(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=T(d);e=e|0;f=T(f);g=g|0;Jb[a&1](b|0,c|0,T(d),e|0,T(f),g|0)}function XF(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;Kb[a&15](b|0,c|0,d|0)}function YF(a){a=a|0;Lb[a&0]()}function ZF(a,b,c,d){a=a|0;b=b|0;c=c|0;d=+d;Mb[a&15](b|0,c|0,+d)}function _F(a,b,c){a=a|0;b=+b;c=+c;return Nb[a&1](+b,+c)|0}function $F(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;Ob[a&15](b|0,c|0,d|0,e|0)}function aG(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;U(0)}function bG(a,b){a=a|0;b=+b;U(1)}function cG(a,b,c){a=a|0;b=T(b);c=T(c);U(2);return pb}function dG(a){a=a|0;U(3)}function eG(a,b){a=a|0;b=b|0;U(4)}function fG(a){a=a|0;U(5);return 0}function gG(a,b,c,d){a=a|0;b=+b;c=+c;d=d|0;U(6)}function hG(a,b,c){a=a|0;b=+b;c=+c;U(7)}function iG(a,b,c){a=a|0;b=b|0;c=c|0;U(8);return 0}function jG(a,b,c){a=a|0;b=b|0;c=c|0;U(9);return 0.0}function kG(a){a=a|0;U(10);return 0.0}function lG(a,b){a=a|0;b=+b;U(11);return 0}function mG(a,b){a=a|0;b=b|0;U(12);return 0}function nG(a,b,c,d,e){a=a|0;b=b|0;c=+c;d=+d;e=e|0;U(13)}function oG(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;U(14)}function pG(a,b){a=a|0;b=b|0;U(15);return 0.0}function qG(){U(16);return 0}function rG(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;U(17);return 0}function sG(a,b,c,d){a=a|0;b=b|0;c=c|0;d=+d;U(18)}function tG(a,b,c,d,e,f){a=a|0;b=b|0;c=T(c);d=d|0;e=T(e);f=f|0;U(19)}function uG(a,b,c){a=a|0;b=b|0;c=c|0;U(20)}function vG(){U(21)}function wG(a,b,c){a=a|0;b=b|0;c=+c;U(22)}function xG(a,b){a=+a;b=+b;U(23);return 0}function yG(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;U(24)}

// EMSCRIPTEN_END_FUNCS
var qb=[aG,fz];var rb=[bG,Nf,Of,Pf,Qf,Rf,Sf,Tf,Vf,Wf,Yf,Zf,_f,$f,ag,bg,cg,dg,eg,bG,bG,bG,bG,bG,bG,bG,bG,bG,bG,bG,bG,bG];var sb=[cG];var tb=[dG,bF,gF,Oi,Pi,Qi,xo,yo,zo,Nw,Ow,Pw,Jy,Ky,Ly,nD,oD,pD,sf,xf,Uf,Xf,gh,hh,vi,Yi,tj,Xj,uk,Xk,xl,Vl,sm,Tm,qn,On,lo,Yo,up,Sp,oq,Mq,ir,Jr,es,As,_s,lf,Mt,iu,Iu,dv,Av,Mv,Pv,hw,kw,Cw,Sw,Vw,nx,Nx,Zi,mA,aB,xB,UB,wC,TC,dD,gD,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG,dG];var ub=[eG,yf,zf,Cf,Df,Ef,Ff,Gf,Hf,Kf,Lf,Mf,vg,yg,zg,Ag,Bg,Cg,Dg,Ig,Mg,qh,Nr,hs,Mu,pA,Vx,KA,eG,eG,eG,eG];var vb=[fG,aF,$D,rf,ig,mg,ng,og,pg,qg,rg,tg,ug,Jg,Kg,ih,bt,hv,qx,uA,wA,fG,fG,fG,fG,fG,fG,fG,fG,fG,fG,fG];var wb=[gG,jh];var xb=[hG,Fw];var yb=[iG,aE,bE,hE,SE,$k,ap,Qt,YB,iG,iG,iG,iG,iG,iG,iG];var zb=[jG,un];var Ab=[kG,wg,xg,Eg,kh,lh,mh,nh,oh,ph,kG,kG,kG,kG,kG,kG];var Bb=[lG,Iv];var Cb=[mG,cF,hF,Lg,Bi,$j,Bl,Zl,po,yp,Es,of,BB,mG,mG,mG];var Db=[nG,xj];var Eb=[oG,AC];var Fb=[pG,Fg,rh,sh,th,Sn,pG,pG];var Gb=[qG,uh,pf,jf,Uv,ow,_w,kD];var Hb=[rG,fc];var Ib=[sG,sq];var Jb=[tG,Og];var Kb=[uG,jg,sg,Gg,Hg,yk,wm,Qq,mr,nf,Iz,eB,XC,uG,uG,uG];var Lb=[vG];var Mb=[wG,Af,Bf,If,Jf,fg,gg,hg,Wp,Dv,wG,wG,wG,wG,wG,wG];var Nb=[xG,Kw];var Ob=[yG,Xm,jt,mu,qv,_v,uw,fx,Sx,BA,vD,yG,yG,yG,yG,yG];return{_llvm_bswap_i32:CF,getTempRet0:Vb,_llvm_cttz_i32:xF,setThrew:Tb,_bitshift64Lshr:vF,_bitshift64Shl:uF,_memset:tF,_sbrk:AF,_memcpy:wF,stackAlloc:Pb,___uremdi3:BF,_nbind_init:KD,_i64Subtract:rF,___udivmoddi4:yF,setTempRet0:Ub,_i64Add:sF,_emscripten_get_global_libc:_D,__GLOBAL__sub_I_Binding_cc:dA,___udivdi3:zF,stackSave:Qb,__GLOBAL__sub_I_nbind_cc:vh,_free:bF,runPostSets:qF,establishStackSpace:Sb,stackRestore:Rb,_malloc:aF,__GLOBAL__sub_I_common_cc:Ex,stackAlloc:Pb,stackSave:Qb,stackRestore:Rb,establishStackSpace:Sb,setThrew:Tb,setTempRet0:Ub,getTempRet0:Vb,dynCall_viiiii:DF,dynCall_vid:EF,dynCall_fiff:FF,dynCall_vi:GF,dynCall_vii:HF,dynCall_ii:IF,dynCall_viddi:JF,dynCall_vidd:KF,dynCall_iiii:LF,dynCall_diii:MF,dynCall_di:NF,dynCall_iid:OF,dynCall_iii:PF,dynCall_viiddi:QF,dynCall_viiiiii:RF,dynCall_dii:SF,dynCall_i:TF,dynCall_iiiiii:UF,dynCall_viiid:VF,dynCall_viififi:WF,dynCall_viii:XF,dynCall_v:YF,dynCall_viid:ZF,dynCall_idd:_F,dynCall_viiii:$F}})


// EMSCRIPTEN_END_ASM
(Module.asmGlobalArg,Module.asmLibraryArg,buffer);var _llvm_bswap_i32=Module["_llvm_bswap_i32"]=asm["_llvm_bswap_i32"];var getTempRet0=Module["getTempRet0"]=asm["getTempRet0"];var _llvm_cttz_i32=Module["_llvm_cttz_i32"]=asm["_llvm_cttz_i32"];var setThrew=Module["setThrew"]=asm["setThrew"];var _bitshift64Lshr=Module["_bitshift64Lshr"]=asm["_bitshift64Lshr"];var _bitshift64Shl=Module["_bitshift64Shl"]=asm["_bitshift64Shl"];var _memset=Module["_memset"]=asm["_memset"];var _sbrk=Module["_sbrk"]=asm["_sbrk"];var _memcpy=Module["_memcpy"]=asm["_memcpy"];var stackAlloc=Module["stackAlloc"]=asm["stackAlloc"];var ___uremdi3=Module["___uremdi3"]=asm["___uremdi3"];var _nbind_init=Module["_nbind_init"]=asm["_nbind_init"];var _i64Subtract=Module["_i64Subtract"]=asm["_i64Subtract"];var ___udivmoddi4=Module["___udivmoddi4"]=asm["___udivmoddi4"];var setTempRet0=Module["setTempRet0"]=asm["setTempRet0"];var _i64Add=Module["_i64Add"]=asm["_i64Add"];var _emscripten_get_global_libc=Module["_emscripten_get_global_libc"]=asm["_emscripten_get_global_libc"];var __GLOBAL__sub_I_Binding_cc=Module["__GLOBAL__sub_I_Binding_cc"]=asm["__GLOBAL__sub_I_Binding_cc"];var ___udivdi3=Module["___udivdi3"]=asm["___udivdi3"];var stackSave=Module["stackSave"]=asm["stackSave"];var __GLOBAL__sub_I_nbind_cc=Module["__GLOBAL__sub_I_nbind_cc"]=asm["__GLOBAL__sub_I_nbind_cc"];var _free=Module["_free"]=asm["_free"];var runPostSets=Module["runPostSets"]=asm["runPostSets"];var establishStackSpace=Module["establishStackSpace"]=asm["establishStackSpace"];var stackRestore=Module["stackRestore"]=asm["stackRestore"];var _malloc=Module["_malloc"]=asm["_malloc"];var __GLOBAL__sub_I_common_cc=Module["__GLOBAL__sub_I_common_cc"]=asm["__GLOBAL__sub_I_common_cc"];var dynCall_viiiii=Module["dynCall_viiiii"]=asm["dynCall_viiiii"];var dynCall_vid=Module["dynCall_vid"]=asm["dynCall_vid"];var dynCall_fiff=Module["dynCall_fiff"]=asm["dynCall_fiff"];var dynCall_vi=Module["dynCall_vi"]=asm["dynCall_vi"];var dynCall_vii=Module["dynCall_vii"]=asm["dynCall_vii"];var dynCall_ii=Module["dynCall_ii"]=asm["dynCall_ii"];var dynCall_viddi=Module["dynCall_viddi"]=asm["dynCall_viddi"];var dynCall_vidd=Module["dynCall_vidd"]=asm["dynCall_vidd"];var dynCall_iiii=Module["dynCall_iiii"]=asm["dynCall_iiii"];var dynCall_diii=Module["dynCall_diii"]=asm["dynCall_diii"];var dynCall_di=Module["dynCall_di"]=asm["dynCall_di"];var dynCall_iid=Module["dynCall_iid"]=asm["dynCall_iid"];var dynCall_iii=Module["dynCall_iii"]=asm["dynCall_iii"];var dynCall_viiddi=Module["dynCall_viiddi"]=asm["dynCall_viiddi"];var dynCall_viiiiii=Module["dynCall_viiiiii"]=asm["dynCall_viiiiii"];var dynCall_dii=Module["dynCall_dii"]=asm["dynCall_dii"];var dynCall_i=Module["dynCall_i"]=asm["dynCall_i"];var dynCall_iiiiii=Module["dynCall_iiiiii"]=asm["dynCall_iiiiii"];var dynCall_viiid=Module["dynCall_viiid"]=asm["dynCall_viiid"];var dynCall_viififi=Module["dynCall_viififi"]=asm["dynCall_viififi"];var dynCall_viii=Module["dynCall_viii"]=asm["dynCall_viii"];var dynCall_v=Module["dynCall_v"]=asm["dynCall_v"];var dynCall_viid=Module["dynCall_viid"]=asm["dynCall_viid"];var dynCall_idd=Module["dynCall_idd"]=asm["dynCall_idd"];var dynCall_viiii=Module["dynCall_viiii"]=asm["dynCall_viiii"];Runtime.stackAlloc=Module["stackAlloc"];Runtime.stackSave=Module["stackSave"];Runtime.stackRestore=Module["stackRestore"];Runtime.establishStackSpace=Module["establishStackSpace"];Runtime.setTempRet0=Module["setTempRet0"];Runtime.getTempRet0=Module["getTempRet0"];Module["asm"]=asm;function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}ExitStatus.prototype=new Error;ExitStatus.prototype.constructor=ExitStatus;var initialStackTop;var preloadStartTime=null;var calledMain=false;dependenciesFulfilled=function runCaller(){if(!Module["calledRun"])run();if(!Module["calledRun"])dependenciesFulfilled=runCaller};Module["callMain"]=Module.callMain=function callMain(args){args=args||[];ensureInitRuntime();var argc=args.length+1;function pad(){for(var i=0;i<4-1;i++){argv.push(0)}}var argv=[allocate(intArrayFromString(Module["thisProgram"]),"i8",ALLOC_NORMAL)];pad();for(var i=0;i<argc-1;i=i+1){argv.push(allocate(intArrayFromString(args[i]),"i8",ALLOC_NORMAL));pad()}argv.push(0);argv=allocate(argv,"i32",ALLOC_NORMAL);try{var ret=Module["_main"](argc,argv,0);exit(ret,true)}catch(e){if(e instanceof ExitStatus){return}else if(e=="SimulateInfiniteLoop"){Module["noExitRuntime"]=true;return}else{var toLog=e;if(e&&typeof e==="object"&&e.stack){toLog=[e,e.stack]}Module.printErr("exception thrown: "+toLog);Module["quit"](1,e)}}finally{calledMain=true}};function run(args){args=args||Module["arguments"];if(preloadStartTime===null)preloadStartTime=Date.now();if(runDependencies>0){return}preRun();if(runDependencies>0)return;if(Module["calledRun"])return;function doRun(){if(Module["calledRun"])return;Module["calledRun"]=true;if(ABORT)return;ensureInitRuntime();preMain();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();if(Module["_main"]&&shouldRunNow)Module["callMain"](args);postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout((function(){setTimeout((function(){Module["setStatus"]("")}),1);doRun()}),1)}else{doRun()}}Module["run"]=Module.run=run;function exit(status,implicit){if(implicit&&Module["noExitRuntime"]){return}if(Module["noExitRuntime"]){}else{ABORT=true;EXITSTATUS=status;STACKTOP=initialStackTop;exitRuntime();if(Module["onExit"])Module["onExit"](status)}if(ENVIRONMENT_IS_NODE){process["exit"](status)}Module["quit"](status,new ExitStatus(status))}Module["exit"]=Module.exit=exit;var abortDecorators=[];function abort(what){if(what!==undefined){Module.print(what);Module.printErr(what);what=JSON.stringify(what)}else{what=""}ABORT=true;EXITSTATUS=1;var extra="\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";var output="abort("+what+") at "+stackTrace()+extra;if(abortDecorators){abortDecorators.forEach((function(decorator){output=decorator(output,what)}))}throw output}Module["abort"]=Module.abort=abort;if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}var shouldRunNow=true;if(Module["noInitialRun"]){shouldRunNow=false}run()}))





/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(4).Buffer))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

function patch(prototype, name, fn) {

    let original = prototype[name];

    prototype[name] = function (... args) {
        return fn.call(this, original, ... args);
    };

}

module.exports = function (bind, lib) {

    let constants = Object.assign({

        UNDEFINED: NaN

    }, __webpack_require__(10));

    class Layout {

        constructor(left, right, top, bottom, width, height) {

            this.left = left;
            this.right = right;

            this.top = top;
            this.bottom = bottom;

            this.width = width;
            this.height = height;

        }

        fromJS(expose) {

            expose(this.left, this.right, this.top, this.bottom, this.width, this.height);

        }

        toString() {

            return `<Layout#${this.left}:${this.right};${this.top}:${this.bottom};${this.width}:${this.height}>`;

        }

    }

    class Size {

        static fromJS({ width, height }) {

            return new Size(width, height);

        }

        constructor(width, height) {

            this.width = width;
            this.height = height;

        }

        fromJS(expose) {

            expose(this.width, this.height);

        }

        toString() {

            return `<Size#${this.width}x${this.height}>`;

        }

    }

    class Value {

        constructor(unit, value) {

            this.unit = unit;
            this.value = value;

        }

        fromJS(expose) {

            expose(this.unit, this.value);

        }

        toString() {

            switch (this.unit) {

                case constants.UNIT_POINT:
                    return `${this.value}`;

                case constants.UNIT_PERCENT:
                    return `${this.value}%`;

                case constants.UNIT_AUTO:
                    return `auto`;

                default: {
                    return `${this.value}?`;
                }

            }

        }

        valueOf() {

            return this.value;

        }

    }

    for (let fnName of [ `setPosition`, `setMargin`, `setFlexBasis`, `setWidth`, `setHeight`, `setMinWidth`, `setMinHeight`, `setMaxWidth`, `setMaxHeight`, `setPadding` ]) {

        let methods = { [constants.UNIT_POINT]: lib.Node.prototype[fnName], [constants.UNIT_PERCENT]: lib.Node.prototype[`${fnName}Percent`], [constants.UNIT_AUTO]: lib.Node.prototype[`${fnName}Auto`] };

        patch(lib.Node.prototype, fnName, function (original, ... args) {

            // We patch all these functions to add support for the following calls:
            // .setWidth(100) / .setWidth("100%") / .setWidth(.getWidth()) / .setWidth("auto")

            let value = args.pop();
            let unit, asNumber;

            if (value === `auto`) {

                unit = constants.UNIT_AUTO;
                asNumber = undefined;

            } else if (value instanceof Value) {

                unit = value.unit;
                asNumber = value.valueOf();

            } else {

                unit = typeof value === `string` && value.endsWith(`%`) ? constants.UNIT_PERCENT : constants.UNIT_POINT;
                asNumber = parseFloat(value);

            }

            if (!Object.prototype.hasOwnProperty.call(methods, unit))
                throw new Error(`Failed to execute "${fnName}": Unsupported unit.`);

            if (asNumber !== undefined) {
                return methods[unit].call(this, ... args, asNumber);
            } else {
                return methods[unit].call(this, ... args);
            }

        });

    }

    patch(lib.Config.prototype, `free`, function () {

        // Since we handle the memory allocation ourselves (via lib.Config.create), we also need to handle the deallocation

	lib.Config.destroy(this);

    });

    patch(lib.Node, `create`, function (_, config) {

        // We decide the constructor we want to call depending on the parameters

        return config ? lib.Node.createWithConfig(config) : lib.Node.createDefault();

    });

    patch(lib.Node.prototype, `free`, function () {

        // Since we handle the memory allocation ourselves (via lib.Node.create), we also need to handle the deallocation

        lib.Node.destroy(this);

    });

    patch(lib.Node.prototype, `freeRecursive`, function () {

        for (let t = 0, T = this.getChildCount(); t < T; ++t)
            this.getChild(0).freeRecursive();

        this.free();

    });

    patch(lib.Node.prototype, `setMeasureFunc`, function (original, measureFunc) {

        // This patch is just a convenience patch, since it helps write more idiomatic source code (such as .setMeasureFunc(null))
        // We also automatically convert the return value of the measureFunc to a Size object, so that we can return anything that has .width and .height properties

        if (measureFunc) {
            return original.call(this, (... args) => Size.fromJS(measureFunc(... args)));
        } else {
            return this.unsetMeasureFunc();
        }

    });

    patch(lib.Node.prototype, `calculateLayout`, function (original, width = constants.UNDEFINED, height = constants.UNDEFINED, direction = constants.DIRECTION_LTR) {

        // Just a small patch to add support for the function default parameters

        return original.call(this, width, height, direction);

    });

    function getInstanceCount(... args) {

        return lib.getInstanceCount(... args);

    }

    bind(`Layout`, Layout);
    bind(`Size`, Size);
    bind(`Value`, Value);

    return Object.assign({

	Config: lib.Config,
        Node: lib.Node,

        Layout,
        Size,
        Value,

        getInstanceCount

    }, constants);

};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(3)
var ieee754 = __webpack_require__(5)
var isArray = __webpack_require__(6)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 5 */
/***/ function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ },
/* 6 */
/***/ function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ },
/* 7 */
/***/ function(module, exports) {



/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 9 */
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },
/* 10 */
/***/ function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports = {

  ALIGN_COUNT: 8,
  ALIGN_AUTO: 0,
  ALIGN_FLEX_START: 1,
  ALIGN_CENTER: 2,
  ALIGN_FLEX_END: 3,
  ALIGN_STRETCH: 4,
  ALIGN_BASELINE: 5,
  ALIGN_SPACE_BETWEEN: 6,
  ALIGN_SPACE_AROUND: 7,

  DIMENSION_COUNT: 2,
  DIMENSION_WIDTH: 0,
  DIMENSION_HEIGHT: 1,

  DIRECTION_COUNT: 3,
  DIRECTION_INHERIT: 0,
  DIRECTION_LTR: 1,
  DIRECTION_RTL: 2,

  DISPLAY_COUNT: 2,
  DISPLAY_FLEX: 0,
  DISPLAY_NONE: 1,

  EDGE_COUNT: 9,
  EDGE_LEFT: 0,
  EDGE_TOP: 1,
  EDGE_RIGHT: 2,
  EDGE_BOTTOM: 3,
  EDGE_START: 4,
  EDGE_END: 5,
  EDGE_HORIZONTAL: 6,
  EDGE_VERTICAL: 7,
  EDGE_ALL: 8,

  EXPERIMENTAL_FEATURE_COUNT: 1,
  EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS: 0,

  FLEX_DIRECTION_COUNT: 4,
  FLEX_DIRECTION_COLUMN: 0,
  FLEX_DIRECTION_COLUMN_REVERSE: 1,
  FLEX_DIRECTION_ROW: 2,
  FLEX_DIRECTION_ROW_REVERSE: 3,

  JUSTIFY_COUNT: 5,
  JUSTIFY_FLEX_START: 0,
  JUSTIFY_CENTER: 1,
  JUSTIFY_FLEX_END: 2,
  JUSTIFY_SPACE_BETWEEN: 3,
  JUSTIFY_SPACE_AROUND: 4,

  LOG_LEVEL_COUNT: 6,
  LOG_LEVEL_ERROR: 0,
  LOG_LEVEL_WARN: 1,
  LOG_LEVEL_INFO: 2,
  LOG_LEVEL_DEBUG: 3,
  LOG_LEVEL_VERBOSE: 4,
  LOG_LEVEL_FATAL: 5,

  MEASURE_MODE_COUNT: 3,
  MEASURE_MODE_UNDEFINED: 0,
  MEASURE_MODE_EXACTLY: 1,
  MEASURE_MODE_AT_MOST: 2,

  NODE_TYPE_COUNT: 2,
  NODE_TYPE_DEFAULT: 0,
  NODE_TYPE_TEXT: 1,

  OVERFLOW_COUNT: 3,
  OVERFLOW_VISIBLE: 0,
  OVERFLOW_HIDDEN: 1,
  OVERFLOW_SCROLL: 2,

  POSITION_TYPE_COUNT: 2,
  POSITION_TYPE_RELATIVE: 0,
  POSITION_TYPE_ABSOLUTE: 1,

  PRINT_OPTIONS_COUNT: 3,
  PRINT_OPTIONS_LAYOUT: 1,
  PRINT_OPTIONS_STYLE: 2,
  PRINT_OPTIONS_CHILDREN: 4,

  UNIT_COUNT: 4,
  UNIT_UNDEFINED: 0,
  UNIT_POINT: 1,
  UNIT_PERCENT: 2,
  UNIT_AUTO: 3,

  WRAP_COUNT: 3,
  WRAP_NO_WRAP: 0,
  WRAP_WRAP: 1,
  WRAP_WRAP_REVERSE: 2,

};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var nbind = __webpack_require__(1);

var ran = false;
var ret = null;

nbind({}, function (err, result) {

    if (ran)
        return;

    ran = true;

    if (err)
        throw err;

    ret = result;

});

if (!ran)
    throw new Error('Failed to load the yoga module - it needed to be loaded synchronously, but didn\'t');

module.exports = __webpack_require__(2)(ret.bind, ret.lib);


/***/ }
/******/ ]);
});