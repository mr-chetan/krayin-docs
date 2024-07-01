(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{341:function(t,a,e){"use strict";e.r(a);var s=e(10),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"layouts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layouts"}},[t._v("#")]),t._v(" Layouts")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),a("li",[a("a",{attrs:{href:"#category-layout"}},[t._v("Category Layout")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("Layouts in Krayin are fundamental to structuring your application's views in a consistent and reusable way. They provide a template for rendering HTML across multiple pages, ensuring a unified design and user experience. By defining layouts, you can streamline development, improve maintainability, and enhance the overall aesthetics of your web application.")]),t._v(" "),a("p",[t._v("To learn in detail about Layouts, you can visit the Laravel documentation "),a("a",{attrs:{href:"https://laravel.com/docs/11.x/blade",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"category-layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#category-layout"}},[t._v("#")]),t._v(" Category Layout")]),t._v(" "),a("p",[a("code",[t._v("@extends('category::layouts.master')")]),t._v(" This "),a("code",[t._v("@extends")]),t._v(' Blade directive to specify which layout the child view should "inherit".')]),t._v(" "),a("p",[t._v("To extend the default layout of the Krayin admin panel, you'll create or modify the "),a("code",[t._v("index.blade.php")]),t._v(" file located at "),a("code",[t._v("packages/Webkul/Category/src/Resources/views/admin/index.blade.php")]),t._v(". Below is a detailed breakdown of how to integrate and customize the layout:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("@extends('category::layouts.master')\n\n@push('css')\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*  */")]),t._v("\n    ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n@endpush\n\n@section('page_title')\n    {{ __('category::categories.index.title') }}\n@endsection\n\n@section('content-wrapper')\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("content full-page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n@endsection\n\n@push('scripts')\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n    ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n@endpush\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[a("code",[t._v("@extends('category::layouts.master')")])])]),t._v(" "),a("td",[t._v("This "),a("code",[t._v("@extends")]),t._v(' Blade directive to specify which layout the child view should "inherit"')])]),t._v(" "),a("tr",[a("td",[a("strong",[a("code",[t._v("@section('page_title')")])])]),t._v(" "),a("td",[t._v("This is used to define the title of the page.")])]),t._v(" "),a("tr",[a("td",[a("strong",[a("code",[t._v("@section('content-wrapper')")])])]),t._v(" "),a("td",[t._v("This is used to define the body of the page.")])]),t._v(" "),a("tr",[a("td",[a("strong",[a("code",[t._v("@push('css')")])])]),t._v(" "),a("td",[t._v("This is used to add additional css.")])]),t._v(" "),a("tr",[a("td",[a("strong",[a("code",[t._v("@push('scripts')")])])]),t._v(" "),a("td",[t._v("This is used to add additional javascript.")])])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Notice that there are translations used in the blade files, so you will also need to add the corresponding translations in "),a("strong",[a("code",[t._v("lang/app.php")])]),t._v(".")])]),t._v(" "),a("p",[t._v("If you don't want to include these layouts, you can create your own master file inside the creation layouts directory inside "),a("code",[t._v("Resources\\Views\\Layouts\\master.blade.php")])])])}),[],!1,null,null,null);a.default=n.exports}}]);