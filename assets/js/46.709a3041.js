(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{336:function(a,t,s){"use strict";s.r(t);var n=s(10),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"migrations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrations"}},[a._v("#")]),a._v(" Migrations")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#introduction"}},[a._v("Introduction")])]),t("li",[t("a",{attrs:{href:"#using-krayin-package-generator"}},[a._v("Using Krayin Package Generator")])]),t("li",[t("a",{attrs:{href:"#using-laravel-artisan-command"}},[a._v("Using Laravel Artisan Command")]),t("ul",[t("li",[t("a",{attrs:{href:"#loading-migration-from-package"}},[a._v("Loading Migration from Package")])]),t("li",[t("a",{attrs:{href:"#creating-tables-from-migrations"}},[a._v("Creating Tables from Migrations")])])])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),t("p",[a._v("Migrations are like version control for your database, allowing your team to define and share the application's database schema definition.")]),a._v(" "),t("p",[a._v("Krayin leverages the Laravel Schema facade to offer database-agnostic support for creating and manipulating tables across various database systems supported by Laravel. Migrations in Krayin utilize this powerful feature to manage database schema changes efficiently.")]),a._v(" "),t("p",[a._v("To understand Migrations in detail, you can visit the Laravel documentation "),t("a",{attrs:{href:"https://laravel.com/docs/10.x/migrations",target:"_blank",rel:"noopener noreferrer"}},[a._v("here"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("p",[a._v("Let's create a new migration file for your application. We will assume that the package name is \""),t("strong",[a._v("Category")]),a._v('". Follow these steps:')]),a._v(" "),t("h2",{attrs:{id:"using-krayin-package-generator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-krayin-package-generator"}},[a._v("#")]),a._v(" Using Krayin Package Generator")]),a._v(" "),t("p",[a._v("This command creates a new migration class in the "),t("strong",[t("code",[a._v("packages/Webkul/Category/src/Database/Migrations")])]),a._v(" directory.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("php artisan package:make-migration CreateCategoryTable Webkul/Category\n")])])]),t("ul",[t("li",[t("code",[a._v("CreateCategoryTable")]),a._v(" Specifies the name of the migration file.")]),a._v(" "),t("li",[t("code",[a._v("Webkul/Category")]),a._v(" Specifies the package name")])]),a._v(" "),t("h2",{attrs:{id:"using-laravel-artisan-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-laravel-artisan-command"}},[a._v("#")]),a._v(" Using Laravel Artisan Command")]),a._v(" "),t("p",[a._v("Create a "),t("code",[a._v("Database")]),a._v(" directory in the "),t("code",[a._v("packages/Webkul/Category/src")]),a._v(" path. Inside the "),t("code",[a._v("Database")]),a._v(" directory, create "),t("code",[a._v("Migrations")]),a._v(" and "),t("code",[a._v("Seeders")]),a._v(" folders.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("└── packages\n    └── Webkul\n        └── Category\n            └── src\n                ├── ...\n                └── Database\n                    ├── Migrations\n                    └── Seeders\n")])])]),t("p",[a._v("Run the following command with the "),t("code",[a._v("--path")]),a._v(" option to specify where your migration file will be placed.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("php artisan make:migration create_categories_table "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("packages/Webkul/Category/src/Database/Migrations\n")])])]),t("p",[a._v("To create a new database table Copy the code provided here and paste it into your migration file. The create method used on the Schema facade. The create method accepts two arguments: the first is the name of the table, while the second is a closure which receives a Blueprint object that may be used to define the new table:")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("Illuminate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Database"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Migrations"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Migration")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("Illuminate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Database"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Schema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Blueprint")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("Illuminate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Support"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Facades"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Schema")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[a._v("extends")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Migration")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * Run the migrations.\n     *\n     * @return void\n     */")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[a._v("up")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name static-context"}},[a._v("Schema")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("create")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'categories'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[a._v("Blueprint")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$table")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$table")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$table")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("integer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'parent_id'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$table")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[a._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'title'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("nullable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$table")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("longText")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'description'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("nullable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$table")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tinyInteger")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'status'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("default")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$table")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("timestamps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * Reverse the migrations.\n     *\n     * @return void\n     */")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[a._v("down")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name static-context"}},[a._v("Schema")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("dropIfExists")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'categories'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])]),t("h3",{attrs:{id:"loading-migration-from-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loading-migration-from-package"}},[a._v("#")]),a._v(" Loading Migration from Package")]),a._v(" "),t("p",[a._v("We need to add the migrations to our service provider to load them.")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("namespace")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("Webkul"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Category"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Providers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("Illuminate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Support"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("ServiceProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[a._v("CategoryServiceProvider")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ServiceProvider")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * Bootstrap services.\n    *\n    * @return void\n    */")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[a._v("boot")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("          \n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("loadMigrationsFrom")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("__DIR__")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'/../Database/Migrations'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])]),t("h3",{attrs:{id:"creating-tables-from-migrations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-tables-from-migrations"}},[a._v("#")]),a._v(" Creating Tables from Migrations")]),a._v(" "),t("p",[a._v("Run the following command to create the "),t("strong",[t("code",[a._v("Category")])]),a._v(" table in your database.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("php artisan migrate\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);