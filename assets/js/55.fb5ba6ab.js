(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{345:function(e,t,a){"use strict";a.r(t);var s=a(10),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"views"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#views"}},[e._v("#")]),e._v(" Views")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#introduction"}},[e._v("Introduction")])]),t("li",[t("a",{attrs:{href:"#directory-structure"}},[e._v("Directory Structure")]),t("ul",[t("li",[t("a",{attrs:{href:"#adding-html-content"}},[e._v("Adding HTML Content")])])])]),t("li",[t("a",{attrs:{href:"#load-views-from-package"}},[e._v("Load Views from Package")])]),t("li",[t("a",{attrs:{href:"#rendering-views"}},[e._v("Rendering Views")])]),t("li",[t("a",{attrs:{href:"#blade-file-naming-convention"}},[e._v("Blade File Naming Convention")]),t("ul",[t("li",[t("a",{attrs:{href:"#listing-index-blade"}},[e._v("Listing (Index Blade):")])]),t("li",[t("a",{attrs:{href:"#creation-create-blade"}},[e._v("Creation (Create Blade):")])]),t("li",[t("a",{attrs:{href:"#updating-edit-blade"}},[e._v("Updating (Edit Blade):")])])])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("Views in Laravel are responsible for separating the application's logic from the presentation layer. They provide a clean way to manage and organize the HTML content of your application. Views are typically stored in the "),t("code",[e._v("resources/views")]),e._v(" directory and are rendered using the Blade templating engine, which offers a simple and powerful way to create dynamic content.")]),e._v(" "),t("p",[e._v("By using views, you can create reusable templates and components, making your code more maintainable and easier to understand. Blade templates allow you to use control structures like loops and conditionals, as well as to include other templates, which helps to keep your views organized and modular.")]),e._v(" "),t("p",[e._v("To learn in detail about Views, you can visit the Laravel documentation "),t("a",{attrs:{href:"https://laravel.com/docs/11.x/views",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Here's a basic example of a Blade template:")]),e._v(" "),t("h2",{attrs:{id:"directory-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure"}},[e._v("#")]),e._v(" Directory Structure")]),e._v(" "),t("p",[e._v("To organize the views for our "),t("code",[e._v("Category")]),e._v(" package, we need to set up a specific directory structure. Follow the steps below to create the necessary directories.")]),e._v(" "),t("h4",{attrs:{id:"create-the-resources-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-the-resources-directory"}},[e._v("#")]),e._v(" Create the "),t("code",[e._v("Resources")]),e._v(" Directory")]),e._v(" "),t("ul",[t("li",[e._v("Navigate to the "),t("code",[e._v("packages/Webkul/Category/src")]),e._v(" directory.")]),e._v(" "),t("li",[e._v("Create a directory named "),t("code",[e._v("Resources")]),e._v(".")])]),e._v(" "),t("h4",{attrs:{id:"create-the-views-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-the-views-directory"}},[e._v("#")]),e._v(" Create the "),t("code",[e._v("views")]),e._v(" Directory")]),e._v(" "),t("ul",[t("li",[e._v("Inside the "),t("code",[e._v("Resources")]),e._v(" directory, create another directory named "),t("code",[e._v("views")]),e._v(" and inside the views directory create category directory.")]),e._v(" "),t("li",[e._v("Inside the "),t("code",[e._v("views/category")]),e._v(" directory, create a file named "),t("code",[e._v("index.blade.php")]),e._v(", "),t("code",[e._v("create.blade.php")]),e._v(", "),t("code",[e._v("edit.blade.php")]),e._v(" .")])]),e._v(" "),t("p",[e._v("The updated directory structure will look like this:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("  └── packages\n      └── Webkul\n          └── Category\n              └── src\n                  ├── "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n                  └── Resources\n                      └── views\n                          └── category\n                              ├── create.blade.php\n                              ├── edit.blade.php\n                              └── index.blade.php\n")])])]),t("h3",{attrs:{id:"adding-html-content"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-html-content"}},[e._v("#")]),e._v(" Adding HTML Content")]),e._v(" "),t("p",[e._v("Below is an example of basic HTML content that you can add to each "),t("code",[e._v("index.blade.php")]),e._v(" file.")]),e._v(" "),t("h4",{attrs:{id:"index-blade-php-in-the-category-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#index-blade-php-in-the-category-directory"}},[e._v("#")]),e._v(" "),t("code",[e._v("index.blade.php")]),e._v(" in the "),t("code",[e._v("category")]),e._v(" Directory")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("@extends('admin::layouts.master')\n\n@section('page_title')\n    {{ __('category::app.categories.index.title') }}\n@endsection\n\n@section('content-wrapper')\n\n@endsection\n")])])]),t("h2",{attrs:{id:"load-views-from-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-views-from-package"}},[e._v("#")]),e._v(" Load Views from Package")]),e._v(" "),t("p",[e._v("To make the views in our package accessible, we need to register them in the service provider's "),t("code",[e._v("boot")]),e._v(" method. This involves updating the "),t("code",[e._v("CategoryServiceProvider.php")]),e._v(" file to include the view loading logic. Follow the steps below:")]),e._v(" "),t("h4",{attrs:{id:"open-the-service-provider-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#open-the-service-provider-file"}},[e._v("#")]),e._v(" Open the Service Provider File")]),e._v(" "),t("ul",[t("li",[e._v("Navigate to the "),t("code",[e._v("packages/Webkul/Category/src/Providers")]),e._v(" directory.")]),e._v(" "),t("li",[e._v("Open the "),t("code",[e._v("CategoryServiceProvider.php")]),e._v(" file.")])]),e._v(" "),t("h4",{attrs:{id:"update-the-boot-method"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-the-boot-method"}},[e._v("#")]),e._v(" Update the "),t("code",[e._v("boot")]),e._v(" Method")]),e._v(" "),t("ul",[t("li",[e._v("Inside the "),t("code",[e._v("boot")]),e._v(" method of the "),t("code",[e._v("CategoryServiceProvider")]),e._v(" class, add the logic to load views from the package.")])]),e._v(" "),t("h4",{attrs:{id:"updated-categoryserviceprovider-php"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updated-categoryserviceprovider-php"}},[e._v("#")]),e._v(" Updated "),t("code",[e._v("CategoryServiceProvider.php")])]),e._v(" "),t("p",[e._v("Here is the updated code for "),t("code",[e._v("CategoryServiceProvider.php")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("<?php")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("Webkul"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Category"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Providers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("Illuminate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Support"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("ServiceProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[e._v("CategoryServiceProvider")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("extends")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ServiceProvider")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * Bootstrap services.\n     *\n     * @return void\n     */")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[e._v("boot")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ... ")]),e._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("loadViewsFrom")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[e._v("__DIR__")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'/../Resources/views'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'category'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),t("h4",{attrs:{id:"explanation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#explanation"}},[e._v("#")]),e._v(" Explanation")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("The "),t("code",[e._v("namespace")]),e._v(" keyword defines the namespace for the "),t("code",[e._v("CategoryServiceProvider")]),e._v(" class, which is "),t("code",[e._v("Webkul\\Category\\Providers")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("The "),t("code",[e._v("CategoryServiceProvider")]),e._v(" class extends Laravel's base "),t("code",[e._v("ServiceProvider")]),e._v(" class.")])]),e._v(" "),t("li",[t("p",[e._v("The "),t("code",[e._v("boot")]),e._v(" method is used to bootstrap any application services.")])]),e._v(" "),t("li",[t("p",[e._v("Inside the "),t("code",[e._v("boot")]),e._v(" method, we use the "),t("code",[e._v("$this->loadViewsFrom")]),e._v(" method to register the views from the package.")])]),e._v(" "),t("li",[t("p",[e._v("The "),t("code",[e._v("loadViewsFrom")]),e._v(" method takes two arguments:")]),e._v(" "),t("ul",[t("li",[e._v("The path to the views directory within the package: "),t("code",[e._v("__DIR__ . '/../Resources/views'")]),e._v(".")]),e._v(" "),t("li",[e._v("A namespace for the views: "),t("code",[e._v("'category'")]),e._v(".")])])])]),e._v(" "),t("h2",{attrs:{id:"rendering-views"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rendering-views"}},[e._v("#")]),e._v(" Rendering Views")]),e._v(" "),t("p",[e._v("In Laravel applications, views are typically rendered from controller methods using the "),t("code",[e._v("view")]),e._v(" helper function. This section describes how views are invoked and passed data from a controller.")]),e._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("<?php")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("Webkul"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Category"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Controllers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Shop")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("Illuminate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("View"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("View")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("Webkul"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Category"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Controllers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Controller")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("Webkul"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Category"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Repository"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("CategoryRepository")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[e._v("CategoryController")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("extends")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Controller")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * Create a controller instance.\n     * \n     * @return void\n     */")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[e._v("__construct")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("protected")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[e._v("CategoryRepository")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$categoryRepository")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * Display the listing of the resource.\n     */")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[e._v("index")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name return-type"}},[e._v("View")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$categories")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[e._v("categoryRepository")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("with")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'author'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("view")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'category::category.index'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("compact")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'categories'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),t("h4",{attrs:{id:"explanation-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#explanation-2"}},[e._v("#")]),e._v(" Explanation")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("The "),t("code",[e._v("view")]),e._v(" helper function in Laravel is used within the "),t("code",[e._v("index")]),e._v(" method of the "),t("code",[e._v("CategoryController")]),e._v(" to render the "),t("code",[e._v("category::category.index")]),e._v(" view.")])]),e._v(" "),t("li",[t("p",[e._v("It accepts two parameters the name of the view ("),t("code",[e._v("category::category.index")]),e._v(") and an array of data ("),t("code",[e._v("compact('categories')")]),e._v(") to pass to the "),t("code",[e._v("view")]),e._v(".")])])]),e._v(" "),t("h2",{attrs:{id:"blade-file-naming-convention"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blade-file-naming-convention"}},[e._v("#")]),e._v(" Blade File Naming Convention")]),e._v(" "),t("p",[e._v("Krayin utilizes Blade templates to handle "),t("code",[e._v("listing")]),e._v(", "),t("code",[e._v("creation")]),e._v(", and "),t("code",[e._v("updating")]),e._v(" operations for resources like products, leads, persons, organizations, and categories. This section provides a detailed guide on how to implement these operations using Blade templates within your Krayin package.")]),e._v(" "),t("h3",{attrs:{id:"listing-index-blade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#listing-index-blade"}},[e._v("#")]),e._v(" Listing (Index Blade):")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("The "),t("code",[e._v("index.blade.php")]),e._v(" template is used to display a list of all records (categories).")])]),e._v(" "),t("li",[t("p",[e._v("The controller's "),t("code",[e._v("index")]),e._v(" method fetches all categories and passes them to the view.")])])]),e._v(" "),t("h3",{attrs:{id:"creation-create-blade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creation-create-blade"}},[e._v("#")]),e._v(" Creation (Create Blade):")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("The "),t("code",[e._v("create.blade.php")]),e._v(" template contains a form for creating new records.")])]),e._v(" "),t("li",[t("p",[e._v("The controller's "),t("code",[e._v("create")]),e._v(" method renders this view.")])])]),e._v(" "),t("h3",{attrs:{id:"updating-edit-blade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updating-edit-blade"}},[e._v("#")]),e._v(" Updating (Edit Blade):")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("The "),t("code",[e._v("edit.blade.php")]),e._v(" template contains a form for editing existing records.")])]),e._v(" "),t("li",[t("p",[e._v("The controller's "),t("code",[e._v("edit")]),e._v(" method fetches the specific categories and passes it to the view.")])])]),e._v(" "),t("p",[e._v("By following these steps, you can effectively utilize Blade templates in Krayin for listing, creating, and updating resources, ensuring a structured and maintainable approach to managing CRUD operations within your application.")])])}),[],!1,null,null,null);t.default=n.exports}}]);