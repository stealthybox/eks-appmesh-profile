(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{207:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[s._v("#")]),s._v(" Prerequisites")]),s._v(" "),t("p",[s._v("You'll need the following tools installed locally:")]),s._v(" "),t("ul",[t("li",[s._v("AWS CLI")]),s._v(" "),t("li",[s._v("kubectl")]),s._v(" "),t("li",[s._v("git")])]),s._v(" "),t("h2",{attrs:{id:"git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git","aria-hidden":"true"}},[s._v("#")]),s._v(" git")]),s._v(" "),t("p",[s._v("Create a GitHub repository and clone it locally\n(replace the "),t("code",[s._v("GHUSER")]),s._v(" value with your GitHub username):")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GHUSER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("username\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${GHUSER}")]),s._v("/appmesh-dev\n")])])]),t("p",[s._v("Set your GitHub username and email:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" appmesh-dev\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${GHUSER}")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your@main.address"')]),s._v("\n")])])]),t("h2",{attrs:{id:"eksctl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eksctl","aria-hidden":"true"}},[s._v("#")]),s._v(" eksctl")]),s._v(" "),t("p",[s._v("Install eksctl for macOS:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("brew tap weaveworks/tap\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" weaveworks/tap/eksctl\n")])])]),t("p",[s._v("Install eksctl for Windows:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("chocolatey "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" eksctl\n")])])]),t("p",[s._v("Install eksctl for Linux:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --silent --location "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/weaveworks/eksctl/releases/download/latest_release/eksctl_'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -s"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('_amd64.tar.gz"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xz -C /tmp\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /tmp/eksctl /usr/local/bin\n")])])]),t("p",[s._v("Verify the install with:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("eksctl version\n")])])]),t("h2",{attrs:{id:"fluxctl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fluxctl","aria-hidden":"true"}},[s._v("#")]),s._v(" fluxctl")]),s._v(" "),t("p",[s._v("Install fluxctl for macOS:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" fluxctl\n")])])]),t("p",[s._v("Install fluxctl for Windows:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("choco "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" fluxctl\n")])])]),t("p",[s._v("Install fluxctl for Linux:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sL https://fluxcd.io/install "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.fluxcd/bin\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);