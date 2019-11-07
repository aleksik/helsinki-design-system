(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{172:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_Button_module_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(280),_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_1__);__webpack_exports__.a=function(_ref){var children=_ref.children;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{type:"button",className:_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button},children)}},173:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_HeaderWithWave_module_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(281),_HeaderWithWave_module_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_HeaderWithWave_module_css__WEBPACK_IMPORTED_MODULE_1__);__webpack_exports__.a=function HeaderWithWave(_ref){var headingText=_ref.headingText;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_HeaderWithWave_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headerWithWave},headingText)}},174:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_WallOfText_module_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(282),_WallOfText_module_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_WallOfText_module_css__WEBPACK_IMPORTED_MODULE_1__);__webpack_exports__.a=function(_ref){var children=_ref.children;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_WallOfText_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wallOfText},children)}},28:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react),IconLock=function(_ref){var fill=_ref.fill;return react_default.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"23",viewBox:"0 0 16 23"},react_default.a.createElement("path",{fill:fill,fillRule:"nonzero",d:"M2.824 9.109V5.322C2.824 2.66 5.14.5 8 .5c2.859 0 5.176 2.161 5.176 4.822V9.11h1.05c.98 0 1.774.858 1.774 1.911v9.568c0 1.056-.793 1.912-1.773 1.912H1.773C.794 22.5 0 21.642 0 20.588V11.02C0 9.965.793 9.11 1.773 9.11h1.05zm-.942 1.913v9.565h12.236v-9.565H1.882zm9.412-1.913V5.322c0-1.566-1.44-2.909-3.294-2.909-1.855 0-3.294 1.341-3.294 2.91v3.786h6.588zM7.06 14.642c0-.529.418-.957.941-.957.52 0 .941.425.941.957v2.87a.947.947 0 0 1-.941.956.946.946 0 0 1-.941-.956v-2.87z"}))},TextInput_module=__webpack_require__(30),TextInput_module_default=__webpack_require__.n(TextInput_module);__webpack_exports__.a=function(_ref){var id=_ref.id,_ref$labelText=_ref.labelText,labelText=void 0===_ref$labelText?void 0:_ref$labelText,_ref$labelledBy=_ref.labelledBy,labelledBy=void 0===_ref$labelledBy?void 0:_ref$labelledBy,_ref$alternative=_ref.alternative,alternative=void 0!==_ref$alternative&&_ref$alternative,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$defaultValue=_ref.defaultValue,defaultValue=void 0===_ref$defaultValue?void 0:_ref$defaultValue,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$helperText=_ref.helperText,helperText=void 0===_ref$helperText?void 0:_ref$helperText,_ref$hideLabel=_ref.hideLabel,hideLabel=void 0!==_ref$hideLabel&&_ref$hideLabel,_ref$invalid=_ref.invalid,invalid=void 0!==_ref$invalid&&_ref$invalid,_ref$invalidText=_ref.invalidText,invalidText=void 0===_ref$invalidText?void 0:_ref$invalidText,_ref$onChange=_ref.onChange,onChange=void 0===_ref$onChange?function(){return null}:_ref$onChange,_ref$placeholder=_ref.placeholder,placeholder=void 0===_ref$placeholder?"":_ref$placeholder,_ref$readOnly=_ref.readOnly,readOnly=void 0!==_ref$readOnly&&_ref$readOnly,_ref$tooltipText=_ref.tooltipText,tooltipText=void 0===_ref$tooltipText?void 0:_ref$tooltipText,_ref$type=_ref.type,type=void 0===_ref$type?"text":_ref$type,_ref$value=_ref.value,value=void 0===_ref$value?void 0:_ref$value,label=labelText?react_default.a.createElement("label",{htmlFor:id,className:"".concat(TextInput_module_default.a.label," ").concat(hideLabel?TextInput_module_default.a.hiddenLabel:"")},labelText):null,tooltip=tooltipText?react_default.a.createElement("div",null," ",tooltipText):null,helper=helperText?react_default.a.createElement("div",{className:TextInput_module_default.a.helperText},helperText):null,invalidMsg=invalidText?react_default.a.createElement("div",{className:TextInput_module_default.a.invalidText},invalidText):null,inputIcon=readOnly?react_default.a.createElement("div",{className:TextInput_module_default.a.inputIcon},react_default.a.createElement(IconLock,{fill:"var(".concat(alternative?"--hds-theme-color-secondary":"--hds-ui-color-black-80",")")})):null;return react_default.a.createElement("div",{className:"\n      ".concat(alternative?TextInput_module_default.a.alternative:"","\n      ").concat(disabled?TextInput_module_default.a.disabled:"","\n      ").concat(readOnly?TextInput_module_default.a.readOnly:"","\n      ").concat(invalid?TextInput_module_default.a.invalid:"","\n      ").concat(className)},label,tooltip,react_default.a.createElement("div",{className:TextInput_module_default.a.inputWrapper},react_default.a.createElement("input",{className:TextInput_module_default.a.input,defaultValue:defaultValue,"aria-labelledby":labelledBy,disabled:disabled,id:id,readOnly:readOnly,onChange:onChange,placeholder:placeholder,type:type,value:value}),inputIcon),helper,invalidMsg)}},280:function(module,exports,__webpack_require__){module.exports={button:"Button_button__2cZ5P"}},281:function(module,exports,__webpack_require__){module.exports={headerWithWave:"HeaderWithWave_headerWithWave__3fUEE"}},282:function(module,exports,__webpack_require__){module.exports={wallOfText:"WallOfText_wallOfText__2A_c7"}},283:function(module,exports,__webpack_require__){__webpack_require__(284),__webpack_require__(396),module.exports=__webpack_require__(397)},30:function(module,exports,__webpack_require__){module.exports={label:"TextInput_label__13MAH helsinki_text-sm__2ITAh helsinki_text-bold__1OM_D",hiddenLabel:"TextInput_hiddenLabel__1GX9q helsinki_hiddenFromScreen__3Ef8R",inputWrapper:"TextInput_inputWrapper__2R39j",helperText:"TextInput_helperText__1_D7n helsinki_text-sm__2ITAh",invalidText:"TextInput_invalidText__2YpkN helsinki_text-sm__2ITAh",input:"TextInput_input__1Ded8 helsinki_text-md__bADWj",disabled:"TextInput_disabled__jNfZ7",invalid:"TextInput_invalid__2whyp",readOnly:"TextInput_readOnly__23Swk",inputIcon:"TextInput_inputIcon__3Yslw",alternative:"TextInput_alternative__3gvcJ"}},305:function(module,exports){},397:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(279);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_1__.withA11y),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({options:{storySort:function storySort(a,b){return a[1].id.localeCompare(b[1].id)}}});var req=__webpack_require__(593);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(80)(module))},593:function(module,exports,__webpack_require__){var map={"./components/button/Button.stories.tsx":594,"./components/header/HeaderWithWave.stories.tsx":603,"./components/textinput/TextInput.stories.tsx":604,"./components/walloftext/WallOfText.stories.tsx":605};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=593},594:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(172),withSourceLoader=__webpack_require__(125).withSource,__STORY__="import React from 'react';\nimport { storiesOf } from '@storybook/react';\n\nimport Button from './Button';\n\n(Button as React.FC).displayName = 'Button';\n\nstoriesOf('Button', module).add('Button', () => <Button>Button</Button>);\n",__ADDS_MAP__={"button--button":{startLoc:{col:32,line:8},endLoc:{col:71,line:8},startBody:{col:42,line:8},endBody:{col:71,line:8}}};_Button__WEBPACK_IMPORTED_MODULE_2__.a.displayName="Button",Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Button",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/Button.stories.tsx",[],{},"/home/runner/work/helsinki-design-system/helsinki-design-system/packages/react/src/components/button",{})).add("Button",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,"Button")}))}.call(this,__webpack_require__(80)(module))},603:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),_HeaderWithWave__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(173),withSourceLoader=__webpack_require__(125).withSource,__STORY__="import React from 'react';\nimport { storiesOf } from '@storybook/react';\n\nimport HeaderWithWave from './HeaderWithWave';\n\n(HeaderWithWave as React.FC).displayName = 'HeaderWithWave';\n\nstoriesOf('HeaderWithWave', module).add('HeaderWithWave', () => <HeaderWithWave headingText=\"HeaderWithWave\" />);\n",__ADDS_MAP__={"headerwithwave--headerwithwave":{startLoc:{col:40,line:8},endLoc:{col:111,line:8},startBody:{col:58,line:8},endBody:{col:111,line:8}}};_HeaderWithWave__WEBPACK_IMPORTED_MODULE_2__.a.displayName="HeaderWithWave",Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("HeaderWithWave",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/HeaderWithWave.stories.tsx",[],{},"/home/runner/work/helsinki-design-system/helsinki-design-system/packages/react/src/components/header",{})).add("HeaderWithWave",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderWithWave__WEBPACK_IMPORTED_MODULE_2__.a,{headingText:"HeaderWithWave"})}))}.call(this,__webpack_require__(80)(module))},604:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),_TextInput__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(28),withSourceLoader=__webpack_require__(125).withSource,__SOURCE_PREFIX__="/home/runner/work/helsinki-design-system/helsinki-design-system/packages/react/src/components/textinput",__STORY__="import React from 'react';\nimport { storiesOf } from '@storybook/react';\n\nimport TextInput from './TextInput';\n\n// A simple Wrapper to control max-width and the spacing around inputs.\nconst WrapperDecorator = storyFn => <div style={{ padding: '10px', maxWidth: '400px' }}> {storyFn()}</div>;\n\n(TextInput as React.FC).displayName = 'TextInput';\n\nconst textInputProps = {\n  id: 'hdsInput',\n  labelText: 'HDS input field',\n  placeholder: 'A placeholder text',\n};\n\nstoriesOf('TextInput', module)\n  .addDecorator(WrapperDecorator)\n  .add('default', () => <TextInput {...textInputProps} />);\n\nstoriesOf('TextInput', module)\n  .addDecorator(WrapperDecorator)\n  .add('with default value', () => <TextInput {...textInputProps} defaultValue=\"This is the default value\" />);\n\nstoriesOf('TextInput', module)\n  .addDecorator(WrapperDecorator)\n  .add('without placeholder', () => <TextInput {...textInputProps} placeholder={undefined} />);\n\nstoriesOf('TextInput', module)\n  .addDecorator(WrapperDecorator)\n  .add('disabled', () => <TextInput {...textInputProps} disabled />);\n\nstoriesOf('TextInput', module)\n  .addDecorator(WrapperDecorator)\n  .add('read only', () => <TextInput {...textInputProps} readOnly defaultValue=\"This is the default value\" />);\n\nstoriesOf('TextInput', module)\n  .addDecorator(WrapperDecorator)\n  .add('alternative', () => <TextInput {...textInputProps} alternative />);\n\nstoriesOf('TextInput', module)\n  .addDecorator(WrapperDecorator)\n  .add('alternative read only', () => (\n    <TextInput {...textInputProps} alternative readOnly defaultValue=\"This is the default value\" />\n  ));\n\nstoriesOf('TextInput', module)\n  .addDecorator(WrapperDecorator)\n  .add('with label hidden', () => <TextInput {...textInputProps} hideLabel />);\n\nstoriesOf('TextInput', module)\n  .addDecorator(WrapperDecorator)\n  .add('with tooltip', () => <TextInput {...textInputProps} tooltipText=\"Tooltip goes here\" />);\n\nstoriesOf('TextInput', module)\n  .addDecorator(WrapperDecorator)\n  .add('with helper text', () => <TextInput {...textInputProps} helperText=\"Helper text goes here\" />);\n\nstoriesOf('TextInput', module)\n  .addDecorator(WrapperDecorator)\n  .add('with invalid input', () => (\n    <TextInput {...textInputProps} invalid invalidText=\"This explains why the value is invalid\" />\n  ));\n",__ADDS_MAP__={"textinput--default":{startLoc:{col:7,line:19},endLoc:{col:57,line:19},startBody:{col:18,line:19},endBody:{col:57,line:19}},"textinput--with-default-value":{startLoc:{col:7,line:23},endLoc:{col:109,line:23},startBody:{col:29,line:23},endBody:{col:109,line:23}},"textinput--without-placeholder":{startLoc:{col:7,line:27},endLoc:{col:93,line:27},startBody:{col:30,line:27},endBody:{col:93,line:27}},"textinput--disabled":{startLoc:{col:7,line:31},endLoc:{col:67,line:31},startBody:{col:19,line:31},endBody:{col:67,line:31}},"textinput--read-only":{startLoc:{col:7,line:35},endLoc:{col:109,line:35},startBody:{col:20,line:35},endBody:{col:109,line:35}},"textinput--alternative":{startLoc:{col:7,line:39},endLoc:{col:73,line:39},startBody:{col:22,line:39},endBody:{col:73,line:39}},"textinput--alternative-read-only":{startLoc:{col:7,line:43},endLoc:{col:3,line:45},startBody:{col:32,line:43},endBody:{col:3,line:45}},"textinput--with-label-hidden":{startLoc:{col:7,line:49},endLoc:{col:77,line:49},startBody:{col:28,line:49},endBody:{col:77,line:49}},"textinput--with-tooltip":{startLoc:{col:7,line:53},endLoc:{col:94,line:53},startBody:{col:23,line:53},endBody:{col:94,line:53}},"textinput--with-helper-text":{startLoc:{col:7,line:57},endLoc:{col:101,line:57},startBody:{col:27,line:57},endBody:{col:101,line:57}},"textinput--with-invalid-input":{startLoc:{col:7,line:61},endLoc:{col:3,line:63},startBody:{col:29,line:61},endBody:{col:3,line:63}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={},WrapperDecorator=function WrapperDecorator(storyFn){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{padding:"10px",maxWidth:"400px"}}," ",storyFn())};_TextInput__WEBPACK_IMPORTED_MODULE_2__.a.displayName="TextInput";var textInputProps={id:"hdsInput",labelText:"HDS input field",placeholder:"A placeholder text"};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("TextInput",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/TextInput.stories.tsx",__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__)).addDecorator(WrapperDecorator).add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_2__.a,textInputProps)})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("TextInput",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/TextInput.stories.tsx",__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__)).addDecorator(WrapperDecorator).add("with default value",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},textInputProps,{defaultValue:"This is the default value"}))})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("TextInput",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/TextInput.stories.tsx",__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__)).addDecorator(WrapperDecorator).add("without placeholder",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},textInputProps,{placeholder:void 0}))})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("TextInput",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/TextInput.stories.tsx",__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__)).addDecorator(WrapperDecorator).add("disabled",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},textInputProps,{disabled:!0}))})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("TextInput",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/TextInput.stories.tsx",__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__)).addDecorator(WrapperDecorator).add("read only",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},textInputProps,{readOnly:!0,defaultValue:"This is the default value"}))})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("TextInput",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/TextInput.stories.tsx",__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__)).addDecorator(WrapperDecorator).add("alternative",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},textInputProps,{alternative:!0}))})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("TextInput",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/TextInput.stories.tsx",__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__)).addDecorator(WrapperDecorator).add("alternative read only",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},textInputProps,{alternative:!0,readOnly:!0,defaultValue:"This is the default value"}))})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("TextInput",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/TextInput.stories.tsx",__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__)).addDecorator(WrapperDecorator).add("with label hidden",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},textInputProps,{hideLabel:!0}))})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("TextInput",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/TextInput.stories.tsx",__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__)).addDecorator(WrapperDecorator).add("with tooltip",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},textInputProps,{tooltipText:"Tooltip goes here"}))})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("TextInput",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/TextInput.stories.tsx",__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__)).addDecorator(WrapperDecorator).add("with helper text",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},textInputProps,{helperText:"Helper text goes here"}))})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("TextInput",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/TextInput.stories.tsx",__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__)).addDecorator(WrapperDecorator).add("with invalid input",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},textInputProps,{invalid:!0,invalidText:"This explains why the value is invalid"}))}))}.call(this,__webpack_require__(80)(module))},605:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),_WallOfText__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(174),withSourceLoader=__webpack_require__(125).withSource,__STORY__="import React from 'react';\nimport { storiesOf } from '@storybook/react';\n\nimport WallOfText from './WallOfText';\n\n(WallOfText as React.FC).displayName = 'WallOfText';\n\nstoriesOf('Text', module).add('Wall of text', () => (\n  <WallOfText>\n    <h3>Lots of text</h3>\n    <p>\n      Lorem ipsum dolor sit amet, sententiae scribentur disputando eu his. Qui aliquip adversarium no, falli scriptorem\n      consequuntur vis ex. Soluta assueverit duo et, iudico meliore expetenda cu eum, nec ferri graeco in. Tamquam\n      consequuntur te eos.\n    </p>\n    <p>\n      Erat labore vis at, audire splendide consetetur id eam. Eu platonem intellegam ius, graeci dissentiet disputationi\n      vix ad, dicit similique ne vel. Illum insolens eos ut, graeco menandri ex duo. Cu nam dico simul qualisque, ex\n      brute facete dissentiunt usu, exerci vidisse petentium ea cum.\n    </p>\n    <p>\n      Persecuti vituperata appellantur vim id, qui porro accusam noluisse no. Legere doming ea vel, quas atqui recusabo\n      ad est, sea te error quaestio. Vix at porro homero. Est sonet qualisque id, cu feugait convenire consulatu cum.\n      Nam ex nisl percipitur, ea vim nemore fuisset blandit, mel feugait iudicabit pertinacia eu. Mutat atomorum\n      euripidis ad pro, ad mel augue iuvaret.\n    </p>\n    <p>\n      Ius ut viris expetendis, legere scriptorem vix no. Cum et dolor laudem labore. Mei munere efficiendi ei,\n      dissentiet reprehendunt eos et. An sed dicam gloriatur, vidisse scripta atomorum te vim. Facete consetetur ne vix,\n      primis fabulas sit in. Tota volumus ei eos.\n    </p>\n    <p>\n      Cum solet pertinacia in, ut per velit errem epicurei. Sea te bonorum inermis corpora. Duo no odio partem\n      complectitur, sed alia iusto at. Tota vituperatoribus sed ne, copiosae mediocritatem concludaturque sea ea. Nec no\n      omnis saepe.\n    </p>\n    <h3>A lot more text</h3>\n    <p>\n      Lorem ipsum dolor sit amet, sententiae scribentur disputando eu his. Qui aliquip adversarium no, falli scriptorem\n      consequuntur vis ex. Soluta assueverit duo et, iudico meliore expetenda cu eum, nec ferri graeco in. Tamquam\n      consequuntur te eos.\n    </p>\n    <p>\n      Erat labore vis at, audire splendide consetetur id eam. Eu platonem intellegam ius, graeci dissentiet disputationi\n      vix ad, dicit similique ne vel. Illum insolens eos ut, graeco menandri ex duo. Cu nam dico simul qualisque, ex\n      brute facete dissentiunt usu, exerci vidisse petentium ea cum.\n    </p>\n    <p>\n      Persecuti vituperata appellantur vim id, qui porro accusam noluisse no. Legere doming ea vel, quas atqui recusabo\n      ad est, sea te error quaestio. Vix at porro homero. Est sonet qualisque id, cu feugait convenire consulatu cum.\n      Nam ex nisl percipitur, ea vim nemore fuisset blandit, mel feugait iudicabit pertinacia eu. Mutat atomorum\n      euripidis ad pro, ad mel augue iuvaret.\n    </p>\n    <p>\n      Ius ut viris expetendis, legere scriptorem vix no. Cum et dolor laudem labore. Mei munere efficiendi ei,\n      dissentiet reprehendunt eos et. An sed dicam gloriatur, vidisse scripta atomorum te vim. Facete consetetur ne vix,\n      primis fabulas sit in. Tota volumus ei eos.\n    </p>\n    <p>\n      Cum solet pertinacia in, ut per velit errem epicurei. Sea te bonorum inermis corpora. Duo no odio partem\n      complectitur, sed alia iusto at. Tota vituperatoribus sed ne, copiosae mediocritatem concludaturque sea ea. Nec no\n      omnis saepe.\n    </p>\n  </WallOfText>\n));\n",__ADDS_MAP__={"text--wall-of-text":{startLoc:{col:30,line:8},endLoc:{col:1,line:65},startBody:{col:46,line:8},endBody:{col:1,line:65}}};_WallOfText__WEBPACK_IMPORTED_MODULE_2__.a.displayName="WallOfText",Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Text",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/WallOfText.stories.tsx",[],{},"/home/runner/work/helsinki-design-system/helsinki-design-system/packages/react/src/components/walloftext",{})).add("Wall of text",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WallOfText__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Lots of text"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Lorem ipsum dolor sit amet, sententiae scribentur disputando eu his. Qui aliquip adversarium no, falli scriptorem consequuntur vis ex. Soluta assueverit duo et, iudico meliore expetenda cu eum, nec ferri graeco in. Tamquam consequuntur te eos."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Erat labore vis at, audire splendide consetetur id eam. Eu platonem intellegam ius, graeci dissentiet disputationi vix ad, dicit similique ne vel. Illum insolens eos ut, graeco menandri ex duo. Cu nam dico simul qualisque, ex brute facete dissentiunt usu, exerci vidisse petentium ea cum."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Persecuti vituperata appellantur vim id, qui porro accusam noluisse no. Legere doming ea vel, quas atqui recusabo ad est, sea te error quaestio. Vix at porro homero. Est sonet qualisque id, cu feugait convenire consulatu cum. Nam ex nisl percipitur, ea vim nemore fuisset blandit, mel feugait iudicabit pertinacia eu. Mutat atomorum euripidis ad pro, ad mel augue iuvaret."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Ius ut viris expetendis, legere scriptorem vix no. Cum et dolor laudem labore. Mei munere efficiendi ei, dissentiet reprehendunt eos et. An sed dicam gloriatur, vidisse scripta atomorum te vim. Facete consetetur ne vix, primis fabulas sit in. Tota volumus ei eos."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Cum solet pertinacia in, ut per velit errem epicurei. Sea te bonorum inermis corpora. Duo no odio partem complectitur, sed alia iusto at. Tota vituperatoribus sed ne, copiosae mediocritatem concludaturque sea ea. Nec no omnis saepe."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"A lot more text"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Lorem ipsum dolor sit amet, sententiae scribentur disputando eu his. Qui aliquip adversarium no, falli scriptorem consequuntur vis ex. Soluta assueverit duo et, iudico meliore expetenda cu eum, nec ferri graeco in. Tamquam consequuntur te eos."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Erat labore vis at, audire splendide consetetur id eam. Eu platonem intellegam ius, graeci dissentiet disputationi vix ad, dicit similique ne vel. Illum insolens eos ut, graeco menandri ex duo. Cu nam dico simul qualisque, ex brute facete dissentiunt usu, exerci vidisse petentium ea cum."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Persecuti vituperata appellantur vim id, qui porro accusam noluisse no. Legere doming ea vel, quas atqui recusabo ad est, sea te error quaestio. Vix at porro homero. Est sonet qualisque id, cu feugait convenire consulatu cum. Nam ex nisl percipitur, ea vim nemore fuisset blandit, mel feugait iudicabit pertinacia eu. Mutat atomorum euripidis ad pro, ad mel augue iuvaret."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Ius ut viris expetendis, legere scriptorem vix no. Cum et dolor laudem labore. Mei munere efficiendi ei, dissentiet reprehendunt eos et. An sed dicam gloriatur, vidisse scripta atomorum te vim. Facete consetetur ne vix, primis fabulas sit in. Tota volumus ei eos."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Cum solet pertinacia in, ut per velit errem epicurei. Sea te bonorum inermis corpora. Duo no odio partem complectitur, sed alia iusto at. Tota vituperatoribus sed ne, copiosae mediocritatem concludaturque sea ea. Nec no omnis saepe."))}))}.call(this,__webpack_require__(80)(module))}},[[283,1,2]]]);
//# sourceMappingURL=main.26e4eda6c3b6b7593237.bundle.js.map