"use strict";(self.webpackChunkanaglyph_letter_puzzle_game_frontend=self.webpackChunkanaglyph_letter_puzzle_game_frontend||[]).push([[86],{"./src/stories/TherapistPage/Charts/ClicksChart.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExampleChart:()=>ExampleChart,default:()=>ClicksChart_stories});var _ExampleChart$paramet,_ExampleChart$paramet2,_ExampleChart$paramet3,_ExampleChart$paramet4,_ExampleChart$paramet5,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),ResponsiveContainer=__webpack_require__("./node_modules/recharts/es6/component/ResponsiveContainer.js"),LineChart=__webpack_require__("./node_modules/recharts/es6/chart/LineChart.js"),CartesianGrid=__webpack_require__("./node_modules/recharts/es6/cartesian/CartesianGrid.js"),XAxis=__webpack_require__("./node_modules/recharts/es6/cartesian/XAxis.js"),YAxis=__webpack_require__("./node_modules/recharts/es6/cartesian/YAxis.js"),Tooltip=__webpack_require__("./node_modules/recharts/es6/component/Tooltip.js"),Legend=__webpack_require__("./node_modules/recharts/es6/component/Legend.js"),Line=__webpack_require__("./node_modules/recharts/es6/cartesian/Line.js"),__jsx=react.createElement,Title=function Title(_ref){var title=_ref.title;return __jsx("h2",{className:"text-xl font-medium mt-3 mb-4 xs1-max:px-4"},title," ")};function ClicksChart(props){var _useState=(0,react.useState)([]),clickData=_useState[0],setClickData=_useState[1],_useState2=(0,react.useState)([]),accData=_useState2[0],setAccData=_useState2[1];return(0,react.useEffect)((function(){var __clickData=[],__accData=[];Array.isArray(props.data)&&(props.data.forEach((function(clickDetail,i){if(clickDetail.correct&&clickDetail.total){var correct=parseInt(clickDetail.correct),total=parseInt(clickDetail.total);isNaN(correct)||isNaN(total)||(__clickData.push({Day:i,correct,total}),total>0&&__accData.push({Day:i,acc:correct/total}))}})),setClickData(__clickData),setAccData(__accData))}),[props.data]),__jsx("section",{className:""},clickData&&__jsx("div",{className:"my-6"},__jsx(Title,{title:"Total Clicks vs Correct Clicks"}),__jsx(ResponsiveContainer.h,{minWidth:250,minHeight:300},__jsx(LineChart.w,{width:500,height:300,data:clickData,margin:{top:5,right:30,left:20,bottom:5}},__jsx(CartesianGrid.q,{strokeDasharray:"3 3"}),__jsx(XAxis.K,{dataKey:"Day"}),__jsx(YAxis.B,null),__jsx(Tooltip.u,null),__jsx(Legend.D,null),__jsx(Line.x,{type:"monotone",dataKey:"total",stroke:"#8884d8"}),__jsx(Line.x,{type:"monotone",dataKey:"correct",stroke:"#82ca9d"})))),accData&&__jsx("div",{className:"my-6"},__jsx(Title,{title:"Accuracy"}),__jsx(ResponsiveContainer.h,{minWidth:250,minHeight:300},__jsx(LineChart.w,{width:500,height:300,data:accData,margin:{top:5,right:30,left:20,bottom:5}},__jsx(CartesianGrid.q,{strokeDasharray:"3 3"}),__jsx(XAxis.K,{dataKey:"Day"}),__jsx(YAxis.B,null),__jsx(Tooltip.u,null),__jsx(Legend.D,null),__jsx(Line.x,{type:"monotone",dataKey:"acc",stroke:"#8884d8"})))))}Title.displayName="Title",ClicksChart.displayName="ClicksChart",ClicksChart.__docgenInfo={description:"Generates a chart given an array of `{correct: number, total: number}` objects",methods:[],displayName:"ClicksChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"DocumentData"}],raw:"DocumentData[]"},description:""}}};try{ClicksChart.displayName="ClicksChart",ClicksChart.__docgenInfo={description:"Generates a chart given an array of `{correct: number, total: number}` objects",displayName:"ClicksChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"DocumentData[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TherapistPage/Charts/ClicksChart.tsx#ClicksChart"]={docgenInfo:ClicksChart.__docgenInfo,name:"ClicksChart",path:"src/components/TherapistPage/Charts/ClicksChart.tsx#ClicksChart"})}catch(__react_docgen_typescript_loader_error){}var ClicksChart_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const ClicksChart_stories={title:"ClicksChart",component:ClicksChart,tags:["autodocs"]};var ExampleChart=function ExampleChart(_ref){var data=_ref.data;return ClicksChart_stories_jsx(ClicksChart,{data})};ExampleChart.displayName="ExampleChart",ExampleChart.args={data:[{correct:5,total:8},{correct:4,total:7},{correct:6,total:8},{correct:7,total:9},{correct:11,total:12},{correct:12,total:13}]},ExampleChart.parameters=_objectSpread(_objectSpread({},ExampleChart.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ExampleChart$paramet=ExampleChart.parameters)||void 0===_ExampleChart$paramet?void 0:_ExampleChart$paramet.docs),{},{source:_objectSpread({originalSource:"({\n  data\n}: {\n  data: ClickCartDataDtype[];\n}) => <ClicksChart data={data} />"},null===(_ExampleChart$paramet2=ExampleChart.parameters)||void 0===_ExampleChart$paramet2||null===(_ExampleChart$paramet3=_ExampleChart$paramet2.docs)||void 0===_ExampleChart$paramet3?void 0:_ExampleChart$paramet3.source),description:_objectSpread({story:"Chart filled with random increasing data"},null===(_ExampleChart$paramet4=ExampleChart.parameters)||void 0===_ExampleChart$paramet4||null===(_ExampleChart$paramet5=_ExampleChart$paramet4.docs)||void 0===_ExampleChart$paramet5?void 0:_ExampleChart$paramet5.description)})}),ExampleChart.__docgenInfo={description:"Chart filled with random increasing data",methods:[],displayName:"ExampleChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"ClickCartDataDtype"}],raw:"ClickCartDataDtype[]"},description:""}}};try{ExampleChart.displayName="ExampleChart",ExampleChart.__docgenInfo={description:"Chart filled with random increasing data",displayName:"ExampleChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ClickCartDataDtype[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/TherapistPage/Charts/ClicksChart.stories.tsx#ExampleChart"]={docgenInfo:ExampleChart.__docgenInfo,name:"ExampleChart",path:"src/stories/TherapistPage/Charts/ClicksChart.stories.tsx#ExampleChart"})}catch(__react_docgen_typescript_loader_error){}}}]);