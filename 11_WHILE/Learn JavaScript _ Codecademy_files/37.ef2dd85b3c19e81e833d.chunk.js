(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[37],{aDNC:function(e,r,t){"use strict";t.d(r,"a",(function(){return GridForm}));var n=t("q1tI"),o=t("vMX4"),i=t("tXbp"),a=t("gpvl"),c=t("yrBZ"),u=t("QqFe"),l=t("nKUr");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _objectWithoutProperties(e,r){if(null==e)return{};var t,n,o=function _objectWithoutPropertiesLoose(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d={left:"flex-start",center:"center",right:"flex-end",stretch:"stretch"},p={cta:u.a,fill:u.b},s=function GridFormButtons(e){var r=e.type,t=void 0===r?"fill":r,n=_objectWithoutProperties(e,["type"]);return Object(l.jsx)(i.a,{size:n.size,children:Object(l.jsxs)(c.a,{mb:8,alignSelf:"center",justifySelf:d[n.position||"left"],children:[n.cancel&&Object(l.jsx)(u.e,_objectSpread(_objectSpread({},n.cancel),{},{mr:32,"data-testid":"cancel-button"})),Object(l.jsx)(o.g,{as:p[t],mode:n.mode,disabled:n.disabled,loading:n.loading,children:n.contents})]})})},b=t("DZdY"),f=t("630U"),j=t("owCg"),m=t("G8Hi"),O=t("gZmR"),y=t("5sab"),v=t("ZXqN"),h=function GridFormCheckboxInput(e){var r=e.className,t=e.field,n=e.required,o=e.disabled,i=e.error;return Object(l.jsx)(v.a,{defaultValue:Boolean(t.defaultValue),name:t.name,render:function render(e){var a=e.field,c=a.value,u=a.onBlur,d=a.onChange,p=a.name;return Object(l.jsx)(m.a,{"aria-invalid":i,"aria-required":n,checked:c,className:r,disabled:o,htmlFor:p,id:t.id,label:t.description,multiline:t.multiline,name:p,onBlur:u,onChange:function onChange(e){var r;null===(r=t.onUpdate)||void 0===r||r.call(t,e.target.checked),null==d||d(e.target.checked)},spacing:null==t?void 0:t.spacing})},rules:t.validation})},G=function GridFormCustomInput(e){var r=e.className,t=e.error,n=e.field,o=e.register,i=e.setValue;return Object(l.jsx)(l.Fragment,{children:n.render({className:r,error:t,field:n,register:o,setValue:function setValue(e){return i(n.name,e)}})})},_=t("o0o1"),w=t.n(_);function asyncGeneratorStep(e,r,t,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?r(u):Promise.resolve(u).then(n,o)}function GridFormFileInput_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function GridFormFileInput_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?GridFormFileInput_ownKeys(Object(t),!0).forEach((function(r){GridFormFileInput_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):GridFormFileInput_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function GridFormFileInput_defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function GridFormFileInput_objectWithoutProperties(e,r){if(null==e)return{};var t,n,o=function GridFormFileInput_objectWithoutPropertiesLoose(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var g=function GridFormFileInput(e){var r=e.className,t=e.disabled,n=e.error,o=e.field,i=e.register,a=e.required,c=GridFormFileInput_objectSpread({},i(o.name,GridFormFileInput_objectSpread({},o.validation))),u=c.onChange,d=GridFormFileInput_objectWithoutProperties(c,["onChange"]);return Object(l.jsx)(m.g,GridFormFileInput_objectSpread(GridFormFileInput_objectSpread({},d),{},{"aria-invalid":n,"aria-required":a,className:r,disabled:t,error:n,htmlFor:o.name,id:o.id,name:o.name,onChange:function(){var e=function _asyncToGenerator(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var i=e.apply(r,t);function _next(e){asyncGeneratorStep(i,n,o,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(i,n,o,_next,_throw,"throw",e)}_next(void 0)}))}}(w.a.mark((function _callee(e){var r;return w.a.wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return null===(r=o.onUpdate)||void 0===r||r.call(o,e.target.files),t.next=3,u(e);case 3:case"end":return t.stop()}}),_callee)})));return function(r){return e.apply(this,arguments)}}(),type:"file"}))};function GridFormHiddenInput_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function GridFormHiddenInput_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?GridFormHiddenInput_ownKeys(Object(t),!0).forEach((function(r){GridFormHiddenInput_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):GridFormHiddenInput_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function GridFormHiddenInput_defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var F=function GridFormHiddenInput(e){var r=e.field,t=e.register;return Object(l.jsx)(m.g,GridFormHiddenInput_objectSpread(GridFormHiddenInput_objectSpread({},t(r.name)),{},{type:r.type}))},P=t("4qC0"),x=t.n(P);function GridFormRadioGroupInput_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function GridFormRadioGroupInput_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?GridFormRadioGroupInput_ownKeys(Object(t),!0).forEach((function(r){GridFormRadioGroupInput_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):GridFormRadioGroupInput_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function GridFormRadioGroupInput_defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var S=function GridFormRadioGroupInput(e){var r,t=e.className,o=e.disabled,i=e.field,a=e.register,c=e.setValue,u=e.required,d=e.error,p=null!==(r=i.ariaLabel)&&void 0!==r?r:x()(i.label)?i.label:void 0;return Object(l.jsx)(m.i,{"aria-invalid":d,"aria-label":p,"aria-required":u,className:t,htmlForPrefix:i.name,name:i.name,onChange:function onChange(e){var r,t=e.target.value;c(i.name,t),null===(r=i.onUpdate)||void 0===r||r.call(i,t)},role:"radiogroup",children:i.options.map((function(e){var r=e.label,t=e.value;return Object(n.createElement)(m.h,GridFormRadioGroupInput_objectSpread(GridFormRadioGroupInput_objectSpread({},a(i.name,i.validation)),{},{disabled:o,key:t,label:r,value:t,id:i.id,error:d}))}))})};function GridFormSelectInput_asyncGeneratorStep(e,r,t,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?r(u):Promise.resolve(u).then(n,o)}function GridFormSelectInput_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function GridFormSelectInput_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?GridFormSelectInput_ownKeys(Object(t),!0).forEach((function(r){GridFormSelectInput_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):GridFormSelectInput_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function GridFormSelectInput_defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function GridFormSelectInput_objectWithoutProperties(e,r){if(null==e)return{};var t,n,o=function GridFormSelectInput_objectWithoutPropertiesLoose(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var I=function GridFormSelectInput(e){var r=e.className,t=e.disabled,n=e.error,o=e.field,i=e.register,a=e.required,c=GridFormSelectInput_objectSpread({},i(o.name,GridFormSelectInput_objectSpread({},o.validation))),u=c.onChange,d=GridFormSelectInput_objectWithoutProperties(c,["onChange"]);return Object(l.jsx)(m.j,GridFormSelectInput_objectSpread(GridFormSelectInput_objectSpread({},d),{},{"aria-invalid":n,"aria-required":a,className:r,defaultValue:o.defaultValue,disabled:t,error:n,htmlFor:o.name,id:o.id,name:o.name,onChange:function(){var e=function GridFormSelectInput_asyncToGenerator(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var i=e.apply(r,t);function _next(e){GridFormSelectInput_asyncGeneratorStep(i,n,o,_next,_throw,"next",e)}function _throw(e){GridFormSelectInput_asyncGeneratorStep(i,n,o,_next,_throw,"throw",e)}_next(void 0)}))}}(w.a.mark((function _callee(e){var r;return w.a.wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return null==o||null===(r=o.onUpdate)||void 0===r||r.call(o,e.target.value),t.next=3,u(e);case 3:case"end":return t.stop()}}),_callee)})));return function(r){return e.apply(this,arguments)}}(),options:o.options}))};function GridFormSweetContainerInput_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function GridFormSweetContainerInput_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?GridFormSweetContainerInput_ownKeys(Object(t),!0).forEach((function(r){GridFormSweetContainerInput_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):GridFormSweetContainerInput_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function GridFormSweetContainerInput_defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var D=function GridFormSweetContainerInput(e){var r=e.register,t=e.field.name,n=e.label;return Object(l.jsxs)(c.a,{height:"1px",left:"100vw",overflow:"hidden",position:"fixed",top:"0",width:"1px",children:[Object(l.jsx)("label",{htmlFor:t,children:n}),Object(l.jsx)(m.g,GridFormSweetContainerInput_objectSpread(GridFormSweetContainerInput_objectSpread({},r(t)),{},{type:"checkbox",id:t}))]})};function GridFormTextArea_asyncGeneratorStep(e,r,t,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?r(u):Promise.resolve(u).then(n,o)}function GridFormTextArea_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function GridFormTextArea_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?GridFormTextArea_ownKeys(Object(t),!0).forEach((function(r){GridFormTextArea_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):GridFormTextArea_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function GridFormTextArea_defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function GridFormTextArea_objectWithoutProperties(e,r){if(null==e)return{};var t,n,o=function GridFormTextArea_objectWithoutPropertiesLoose(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var T=function GridFormTextArea(e){var r=e.className,t=e.disabled,n=e.error,o=e.field,i=e.register,a=e.required,c=GridFormTextArea_objectSpread({},i(o.name,GridFormTextArea_objectSpread({},o.validation))),u=c.onChange,d=GridFormTextArea_objectWithoutProperties(c,["onChange"]);return Object(l.jsx)(m.l,GridFormTextArea_objectSpread(GridFormTextArea_objectSpread({},d),{},{"aria-invalid":n,"aria-required":a,className:r,disabled:t,error:n,htmlFor:o.name,id:o.id,name:o.name,onChange:function(){var e=function GridFormTextArea_asyncToGenerator(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var i=e.apply(r,t);function _next(e){GridFormTextArea_asyncGeneratorStep(i,n,o,_next,_throw,"next",e)}function _throw(e){GridFormTextArea_asyncGeneratorStep(i,n,o,_next,_throw,"throw",e)}_next(void 0)}))}}(w.a.mark((function _callee(e){var r;return w.a.wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return null==o||null===(r=o.onUpdate)||void 0===r||r.call(o,e.target.value),t.next=3,u(e);case 3:case"end":return t.stop()}}),_callee)})));return function(r){return e.apply(this,arguments)}}(),placeholder:o.placeholder}))};function GridFormTextInput_asyncGeneratorStep(e,r,t,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?r(u):Promise.resolve(u).then(n,o)}function GridFormTextInput_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function GridFormTextInput_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?GridFormTextInput_ownKeys(Object(t),!0).forEach((function(r){GridFormTextInput_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):GridFormTextInput_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function GridFormTextInput_defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function GridFormTextInput_objectWithoutProperties(e,r){if(null==e)return{};var t,n,o=function GridFormTextInput_objectWithoutPropertiesLoose(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var k=function GridFormTextInput(e){var r=e.className,t=e.error,n=e.field,o=e.register,i=e.required,a=e.disabled,c=GridFormTextInput_objectSpread({},o(n.name,GridFormTextInput_objectSpread({},n.validation))),u=c.onChange,d=GridFormTextInput_objectWithoutProperties(c,["onChange"]);return Object(l.jsx)(m.g,GridFormTextInput_objectSpread(GridFormTextInput_objectSpread({},d),{},{"aria-invalid":t,"aria-required":i,className:r,disabled:a,error:t,htmlFor:n.name,id:n.id,name:n.name,onChange:function(){var e=function GridFormTextInput_asyncToGenerator(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var i=e.apply(r,t);function _next(e){GridFormTextInput_asyncGeneratorStep(i,n,o,_next,_throw,"next",e)}function _throw(e){GridFormTextInput_asyncGeneratorStep(i,n,o,_next,_throw,"throw",e)}_next(void 0)}))}}(w.a.mark((function _callee(e){var r;return w.a.wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return null==n||null===(r=n.onUpdate)||void 0===r||r.call(n,e.target.value),t.next=3,u(e);case 3:case"end":return t.stop()}}),_callee)})));return function(r){return e.apply(this,arguments)}}(),placeholder:n.placeholder,type:n.type}))};function GridFormInputGroup_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function GridFormInputGroup_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?GridFormInputGroup_ownKeys(Object(t),!0).forEach((function(r){GridFormInputGroup_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):GridFormInputGroup_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function GridFormInputGroup_defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function GridFormInputGroup_objectWithoutProperties(e,r){if(null==e)return{};var t,n,o=function GridFormInputGroup_objectWithoutPropertiesLoose(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var E=Object(b.a)(j.a,{target:"esxmdo30",label:"ErrorAnchor"})(Object(f.h)({color:"feedback-error"}),""),C=function GridFormInputGroup(e){var r,t,n=e.error,o=e.field,a=e.isFirstError,c=e.isDisabled,u=e.showRequired,d=GridFormInputGroup_objectWithoutProperties(e,["error","field","isFirstError","isDisabled","showRequired"]),p=c||o.disabled,s=n||o.customError,b=GridFormInputGroup_objectSpread({disabled:p},d),f="checkbox"===o.type&&"tight"===(null==o?void 0:o.spacing),j=function getInput(){switch(o.type){case"checkbox":return Object(l.jsx)(h,GridFormInputGroup_objectSpread({field:o},b));case"custom":case"custom-group":return Object(l.jsx)(G,GridFormInputGroup_objectSpread({error:s,field:o},b));case"radio-group":return Object(l.jsx)(S,GridFormInputGroup_objectSpread({error:!!s,field:o},b));case"select":return Object(l.jsx)(I,GridFormInputGroup_objectSpread({error:!!s,field:o},b));case"file":return Object(l.jsx)(g,GridFormInputGroup_objectSpread({error:!!s,field:o},b));case"textarea":return Object(l.jsx)(T,GridFormInputGroup_objectSpread({error:!!s,field:o},b));case"hidden":return Object(l.jsx)(F,GridFormInputGroup_objectSpread({field:o},b));case"sweet-container":return Object(l.jsx)(D,GridFormInputGroup_objectSpread({field:o,label:o.label},b));default:return Object(l.jsx)(k,GridFormInputGroup_objectSpread({error:!!s,field:o},b))}};if(function unwrappedInput(e){return["hidden","sweet-container"].includes(e.type)}(o))return j();if("custom-group"===o.type)return Object(l.jsx)(i.a,{size:null==o?void 0:o.size,rowspan:null!==(t=null==o?void 0:o.rowspan)&&void 0!==t?t:1,children:j()});var v=Object(l.jsx)(m.f,{disabled:p,htmlFor:o.id||o.name,tooltip:o.tooltip,showRequired:u&&(null==d?void 0:d.required),children:o.label});return Object(l.jsx)(i.a,{size:null==o?void 0:o.size,rowspan:null!==(r=null==o?void 0:o.rowspan)&&void 0!==r?r:1,children:Object(l.jsxs)(m.d,{spacing:f?"tight":"padded",children:[o.hideLabel?Object(l.jsx)(O.a,{children:v}):v,j(),s&&Object(l.jsx)(m.c,{role:a?"alert":"status","aria-live":a?"assertive":"off",variant:f?"initial":"absolute",children:Object(l.jsx)(y.a,{overrides:{a:{allowedAttributes:["href","target"],component:E,processNode:function processNode(e,r){return Object(l.jsx)(E,GridFormInputGroup_objectSpread({},r))}}},skipDefaultOverrides:{a:!0},inline:!0,text:s,spacing:"none"})})]})})},K=function GridFormContent(e){var r,t=e.field,n=e.showRequired,i=Object(o.h)({name:t.name,disabled:t.disabled}),a=i.error,c=i.isFirstError,u=i.register,d=i.setValue,p=i.isDisabled,s=!("hidden"===t.type||"sweet-container"===t.type||null===(r=t.validation)||void 0===r||!r.required);return Object(l.jsx)(C,{error:a,isFirstError:c,isDisabled:p,field:t,register:u,setValue:d,required:s,showRequired:n},t.name)},q=function GridFormSection(e){var r=e.fields,t=e.showRequired;return Object(l.jsx)(l.Fragment,{children:r.map((function(e){return Object(l.jsx)(K,{field:e,showRequired:t},e.name)}))})},A=t("uQrA"),R=function GridFormSectionTitle(e){var r=e.as,t=void 0===r?"h2":r,n=e["data-testid"],o=e.layout,a=void 0===o?"center":o,c=e.numberOfFields,u=e.title,d=e.variant,p="center"===a?12:3,s="center"===a?1:c;return Object(l.jsx)(i.a,{size:{_:12,md:p},gridRowEnd:{_:"span 1",md:"span ".concat(s)},"data-testid":n,children:Object(l.jsx)(A.a,{as:t,variant:d,children:u})})},W=t("8J4F").f.compose(f.y.border,f.y.color,f.y.layout),N=Object(b.a)("hr",{target:"evz4fju0",label:"SectionBreak"})(W,""),L=function GridFormSectionBreak(e){return"none"===e.breakType?null:Object(l.jsx)(i.a,{size:12,children:Object(l.jsx)(N,{borderTop:"none",borderX:"none",border:1,borderColorBottom:"text","data-testid":"form-section-break",width:"100%",role:"separator"})})},V=t("Z0cm"),H=t.n(V);function GridForm_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function GridForm_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?GridForm_ownKeys(Object(t),!0).forEach((function(r){GridForm_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):GridForm_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function GridForm_defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function GridForm_objectWithoutProperties(e,r){if(null==e)return{};var t,n,o=function GridForm_objectWithoutPropertiesLoose(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var B={_:8,sm:32},U=function isGridFormSection(e){return void 0!==e.title};function GridForm(e){var r=e.breakType,t=e.cancel,i=e.children,c=e.columnGap,u=void 0===c?B:c,d=e.fields,p=void 0===d?[]:d,b=e.rowGap,f=void 0===b?16:b,j=e.submit,m=e.validation,O=void 0===m?"onSubmit":m,y=e.showRequired,v=void 0!==y&&y,h=GridForm_objectWithoutProperties(e,["breakType","cancel","children","columnGap","fields","rowGap","submit","validation","showRequired"]),G=p.flatMap((function(e){return U(e)?e.fields:e})).reduce((function(e,r){return GridForm_objectSpread(GridForm_objectSpread({},e),{},GridForm_defineProperty({},r.name,void 0===r.defaultValue?function assignDefaultValue(e){switch(e.type){case"checkbox":case"radio-group":return!1;case"select":return H()(e.options)?e.options[0]:Object.keys(e.options)[0];case"text":case"textarea":return""}}(r):r.defaultValue))}),{});return Object(l.jsx)(o.a,GridForm_objectSpread(GridForm_objectSpread({validation:O,defaultValues:G,display:"flex",flexDirection:"column"},h),{},{children:Object(l.jsxs)(a.a,{columnGap:u,rowGap:f,children:[Object(l.jsx)(l.Fragment,{children:p.map((function(e){if(U(e)){var t=e.title,o=e.as,i=e.layout,a=e.fields,c=e.variant;return Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)(R,{title:t,as:o,layout:i,numberOfFields:a.length,variant:c}),Object(l.jsx)(q,{fields:a,showRequired:v}),Object(l.jsx)(L,{breakType:r})]},t)}return Object(l.jsx)(K,{field:e,showRequired:v},e.name)}))}),Object(l.jsx)(s,GridForm_objectSpread({cancel:t},j)),i]})}))}}}]);
//# sourceMappingURL=37.ef2dd85b3c19e81e833d.chunk.js.map