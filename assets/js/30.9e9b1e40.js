(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{316:function(t,e,a){"use strict";a.r(e);var s=a(10),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"override-core-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#override-core-model"}},[t._v("#")]),t._v(" Override Core Model")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),e("li",[e("a",{attrs:{href:"#overriding-a-model-class"}},[t._v("Overriding a Model Class")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("Krayin utilizes Concord, a Laravel extension, for building modules on top of Laravel's built-in service providers. Concord introduces the concept of model proxies, which allow you to override and extend core models in a modular way.")]),t._v(" "),e("p",[t._v("Concord requires the existence of an interface, such as "),e("strong",[t._v("Category")]),t._v(", which serves as a contract that can be bound to a concrete class using Concord's "),e("strong",[t._v("registerModel()")]),t._v(" method.")]),t._v(" "),e("p",[t._v("By default, the "),e("strong",[e("code",[t._v("Models\\Category")])]),t._v(" class is bound to the "),e("strong",[e("code",[t._v("Contracts\\Category")])]),t._v(" interface within the module. If you want to extend or override this class, you can use Concord's "),e("strong",[t._v("registerModel()")]),t._v(" method.")]),t._v(" "),e("p",[t._v("The "),e("strong",[t._v("registerModel()")]),t._v(" method handles the binding of the interface and implementation in Laravel's service container, enabling you to easily type-hint the interface for automatic injection.")]),t._v(" "),e("p",[t._v("For more details, you can visit the "),e("a",{attrs:{href:"https://github.com/artkonekt/concord",target:"_blank",rel:"noopener noreferrer"}},[t._v("Concord GitHub repository"),e("OutboundLink")],1),t._v(" or refer to the "),e("a",{attrs:{href:"https://artkonekt.github.io/concord/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Concord documentation"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"overriding-a-model-class"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overriding-a-model-class"}},[t._v("#")]),t._v(" Overriding a Model Class")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("In Concord modules, an interface is typically defined for each Eloquent model. If you wish to override a model, you can instruct Concord to use another class for that interface. Here's an example:")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Category"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ServiceProvider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("CategoryServiceProvider")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceProvider")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Bootstrap any application services.\n     *\n     * @return void\n     */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("boot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n        \n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("app")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("concord")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerModel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Category"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Contracts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Category")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Category")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),e("li",[e("p",[t._v("In the code above, the "),e("strong",[t._v("registerModel()")]),t._v(" method accepts two parameters:")]),t._v(" "),e("ul",[e("li",[t._v("The first parameter specifies the path to the interface (contract) you want to override.")]),t._v(" "),e("li",[t._v("The second parameter specifies the path to the model class that will override the default implementation.")])])]),t._v(" "),e("li",[e("p",[t._v("The model class you're overriding must extend your specified model path, as shown in the example below:")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Category"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Category")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" CategoryBaseModel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("Category")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CategoryBaseModel")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])]),t._v(" "),e("p",[t._v("By following this approach, you can override core models in Krayin using Concord's module system.")])])}),[],!1,null,null,null);e.default=n.exports}}]);