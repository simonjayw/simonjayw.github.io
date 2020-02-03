(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{238:function(a,e,s){"use strict";s.r(e);var t=s(0),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"docker-入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-入门"}},[a._v("#")]),a._v(" Docker 入门")]),a._v(" "),s("h2",{attrs:{id:"dockerfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[a._v("#")]),a._v(" Dockerfile")]),a._v(" "),s("div",{staticClass:"language-dockerfile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[s("code",[a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# image 文件构建阶段执行，执行结果会被打包进入 image 文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RUN")]),a._v(" npm install\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 容器启动后执行")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CMD")]),a._v(" node index.js\n")])])]),s("h2",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("docker container start")]),a._v(" "),s("p",[a._v("生成/启动容器，但不会重复生成容器；；； docker container run 会重复生成")])])]),a._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[a._v("$ docker container "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("start")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("[containerID]")]),a._v("\n")])])]),s("p",[a._v("更多参数:")]),a._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("d ：在后台运行\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("it : 容器的 shell 映射到当前的 shell ， 然后在本机窗口输入命令，会传入容器\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("p 80:3000 ：将容器的 3000 端口映射到宿主机的 80 端口\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" : 容器停止运行后，自动删除容器文件\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("name xxx : 容器名字为 xxx\n")])])]),s("ul",[s("li",[s("p",[a._v("docker container stop")]),a._v(" "),s("p",[a._v("终止容器运行，相当于先发起 SIGTERM 信号，过段时间再发出 SIGKILL；；docker container kill 会直接发出 sigkill")])])]),a._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[a._v("$ docker container stop "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("[containerID]")]),a._v("\n")])])]),s("ul",[s("li",[s("p",[a._v("docker container exec")]),a._v(" "),s("p",[a._v("进入一个正在运行的 docker 容器")])])]),a._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[a._v("$ docker container exec "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("it "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("[containerID]")]),a._v(" bash\n")])])]),s("p",[a._v("通过 "),s("code",[a._v("ctrl + p +q")]),a._v(" 可以推出当前容器且不会关闭容器")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("docker container cp")]),a._v(" "),s("p",[a._v("从正在运行的 Docker 容器里，将文件拷贝到本机")])])]),a._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[a._v("$ docker container "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("[containID]")]),a._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("to"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n")])])]),s("h2",{attrs:{id:"docker-build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-build"}},[a._v("#")]),a._v(" docker build")]),a._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[a._v("$ docker build "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("[OPTIONS]")]),a._v(" PATH "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("|")]),a._v(" URL "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);