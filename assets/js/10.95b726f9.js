(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{410:function(t,v,_){"use strict";_.r(v);var a=_(27),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"question-list"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#question-list"}},[t._v("#")]),t._v(" Question List")]),t._v(" "),_("h2",{attrs:{id:"css"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("对 bfc （块级格式上下文）的理解。")]),t._v(" "),_("ul",[_("li",[t._v("上下两个 div 。margin 重叠")]),t._v(" "),_("li",[t._v("清除浮动")]),t._v(" "),_("li",[t._v("阻止被浮动元素覆盖")])])]),t._v(" "),_("li",[_("p",[t._v("实现，正方形在页面中自适应展示，一行只展示三个，多了自动换行")]),t._v(" "),_("div",{staticClass:"language-css extra-class"},[_("pre",{pre:!0,attrs:{class:"language-css"}},[_("code",[_("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".outter")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-wrap")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wrap"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".inner")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0 33%"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-bottom")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 33%"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),_("h2",{attrs:{id:"js"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#js"}},[t._v("#")]),t._v(" JS")]),t._v(" "),_("ul",[_("li",[t._v("闭包\n"),_("ul",[_("li",[t._v("绑定了执行环境的一个函数")])])]),t._v(" "),_("li",[t._v("promise 取消")]),t._v(" "),_("li",[t._v("async await")]),t._v(" "),_("li",[t._v("setTimeout 、setInterval 计时不准\n"),_("ul",[_("li",[t._v("递归执行 setTimeout ，每个下一次的 setTimeout 执行时机应该通过 当前时间不断修正，来达到尽量的精准性。")])])]),t._v(" "),_("li",[t._v("防抖、节流")]),t._v(" "),_("li",[t._v("深拷贝的实现\n"),_("ul",[_("li",[_("code",[t._v("JSON.stringify()")]),t._v(" 有什么缺点(引用类型、函数、循环引用、undefined)")])])]),t._v(" "),_("li",[t._v("对于类而言，箭头函数和类普通函数、constructor 里 bind 的函数有什么区别\n"),_("ul",[_("li",[t._v("class 会把用 = 号声明的方法、变量作为实例的属性")]),t._v(" "),_("li",[t._v("非 = 号声明的，则是放在原型链上。")])])])]),t._v(" "),_("h2",{attrs:{id:"浏览器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器"}},[t._v("#")]),t._v(" 浏览器")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("跨域方案")]),t._v(" "),_("ul",[_("li",[t._v("JSONP（只能 get）")]),t._v(" "),_("li",[t._v("跨域资源共享 （CORS "),_("code",[t._v("Access-Control-Allow-Origin")]),t._v("。如果需要带 cookie 前后端都要设置")]),t._v(" "),_("li",[t._v("nginx 反向代理接口跨域")]),t._v(" "),_("li",[t._v("Postmessage")]),t._v(" "),_("li",[t._v("Domain")])])]),t._v(" "),_("li",[_("p",[t._v("跨域，为什么会有 options 请求")]),t._v(" "),_("ul",[_("li",[t._v("预检请求，获知服务器是否允许跨域")]),t._v(" "),_("li",[t._v("简单请求：get、post、head。仅仅包含 "),_("code",[t._v("accept")]),t._v("、"),_("code",[t._v("content-language")]),t._v(" 等，"),_("code",[t._v("content-type")]),t._v(" 只限三个值")]),t._v(" "),_("li",[t._v("复杂请求：put、delete 。不仅包含上述头信息，"),_("code",[t._v("content-type='application/json'")]),t._v(" 等超出限制")])])]),t._v(" "),_("li",[_("p",[t._v("如何避免 options 请求")]),t._v(" "),_("ul",[_("li",[t._v("服务端带上 Access-Control-Max-Age 来缓存 options 请求")])])]),t._v(" "),_("li",[_("p",[t._v("后端响应头部设置 "),_("code",[t._v("Access-Control-Max-Age")]),t._v(" 缓存起来")])]),t._v(" "),_("li",[_("p",[t._v("事件循环")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("微任务优先宏任务执行")])]),t._v(" "),_("li",[_("p",[t._v("宏任务：script、setTimeout、setInterval 由宿主发起的")]),t._v(" "),_("p",[t._v("微任务：Promise、process.nextTick 由 JS 引擎发起的")])]),t._v(" "),_("li",[_("p",[t._v("JavaScript 引擎等待宿主环境分配宏观任务，通常等待的行为都是一个事件循环")])]),t._v(" "),_("li",[_("p",[t._v("每次执行过程，其实就是一个宏观任务，所以"),_("strong",[t._v("宏观任务的列队")]),t._v("就相当于事件循环")])]),t._v(" "),_("li",[_("p",[t._v("每个宏观任务又包含一个微观任务列队")])])])]),t._v(" "),_("li",[_("p",[t._v("缓存")]),t._v(" "),_("ul",[_("li",[t._v("强缓存：优先级 "),_("code",[t._v("Expires")]),t._v(" http1.0  <  "),_("code",[t._v("Cache-control")]),t._v(" http1.1")]),t._v(" "),_("li",[t._v("协商缓存："),_("code",[t._v("Last-Modified")]),t._v(" 本地文件最后修改日期 < "),_("code",[t._v("ETag")]),t._v(" 文件指纹")]),t._v(" "),_("li",[t._v("策略：\n"),_("ul",[_("li",[t._v("不需要缓存："),_("code",[t._v("Cache-control: no-store")])]),t._v(" "),_("li",[t._v("频繁变动资源："),_("code",[t._v("Cache-control: no-store")]),t._v(" 配合 "),_("code",[t._v("ETag")]),t._v(" 。资源被缓存，但是每次都会发送请求询问是否更新")]),t._v(" "),_("li",[t._v("使用 "),_("code",[t._v("Cache-Control: max-age=31536000")]),t._v(" 配合策略缓存使用，然后对文件进行指纹处理。一旦变动立即下载。")])])])])]),t._v(" "),_("li",[_("p",[t._v("浏览器解析过程")]),t._v(" "),_("ul",[_("li",[t._v("解析 html dom 树 =>  解析 css dom 树 => 合成 render 树 => 布局render树 => 绘制render树")])])]),t._v(" "),_("li",[_("p",[t._v("回流重绘？怎么优化？")])]),t._v(" "),_("li",[_("h2",{attrs:{id:"fetch-和-ajax-有什么区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#fetch-和-ajax-有什么区别"}},[t._v("#")]),t._v(" Fetch 和 ajax 有什么区别")])])]),t._v(" "),_("h2",{attrs:{id:"网络协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络协议"}},[t._v("#")]),t._v(" 网络协议")]),t._v(" "),_("ul",[_("li",[t._v("http 、https 区别\n"),_("ul",[_("li",[t._v("https 在 TLS 协议进行了加密。使用对称加密和非对称加密。")]),t._v(" "),_("li",[t._v("TLS 握手阶段使用非对称加密，正式传输两端使用对称加密。")])])])]),t._v(" "),_("h2",{attrs:{id:"react"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#react"}},[t._v("#")]),t._v(" React")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("为什么文件顶部必须要 import React 呢")]),t._v(" "),_("ul",[_("li",[t._v("因为 "),_("code",[t._v("React.createElement")])])])]),t._v(" "),_("li",[_("p",[t._v("react 组件之间有哪些通信方式")])]),t._v(" "),_("li",[_("p",[t._v("setState 什么时候同步什么时候异步")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("由 React 引发事件处理函数（合成事件、钩子函数等），会调用 bathedUpdated ，isBatchingUpdateds -> true 异步")])]),t._v(" "),_("li",[_("p",[t._v("默认 false ，同步，在 setTimeout 、原生事件中")])])])]),t._v(" "),_("li",[_("p",[t._v("React 事件处理和原生的事件处理有什么区别")]),t._v(" "),_("ul",[_("li",[t._v("React 并不是直接把事件绑定在元素上，而是在 document 上监听，当事件冒泡到 document 上，react 会把事件封装并交给处理函数处理。")]),t._v(" "),_("li",[t._v("如果使用原生事件绑定，原生会先执行。")]),t._v(" "),_("li",[t._v("如果原生阻止冒泡，React 的就不会执行")])])]),t._v(" "),_("li",[_("p",[t._v("react hooks")]),t._v(" "),_("ul",[_("li",[t._v("useEffect 闭包陷阱。\n"),_("ul",[_("li",[t._v("函数式组件每次渲染都会重新执行，从而产生一个闭包环境")]),t._v(" "),_("li",[t._v("useEffect 重复调用了已经改变的 state ，但都是之前的值。（设置 依赖）")])])])])]),t._v(" "),_("li",[_("p",[t._v("Diff 算法")])])]),t._v(" "),_("h3",{attrs:{id:"router"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#router"}},[t._v("#")]),t._v(" router")]),t._v(" "),_("ul",[_("li",[t._v("Hash 模式和 history 模式区别\n"),_("ul",[_("li",[t._v("History 模式的坑")])])])]),t._v(" "),_("h3",{attrs:{id:"redux"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redux"}},[t._v("#")]),t._v(" redux")]),t._v(" "),_("ul",[_("li",[t._v("dispatch 做了什么")])]),t._v(" "),_("h3",{attrs:{id:"优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[t._v("#")]),t._v(" 优化")]),t._v(" "),_("ul",[_("li",[t._v("React 项目有哪些可以优化的点，实际项目中你是怎么处理的")])]),t._v(" "),_("h2",{attrs:{id:"vue"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[t._v("#")]),t._v(" Vue")]),t._v(" "),_("ul",[_("li",[t._v("双向绑定的原理\n"),_("ul",[_("li",[t._v("definedProperty")])])])]),t._v(" "),_("h2",{attrs:{id:"库的实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#库的实现"}},[t._v("#")]),t._v(" 库的实现")]),t._v(" "),_("ul",[_("li",[t._v("antd Modal 弹窗")])]),t._v(" "),_("h2",{attrs:{id:"其他"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),_("ul",[_("li",[t._v("前端项目部署\n"),_("ul",[_("li",[t._v("docker、jenkins")])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);