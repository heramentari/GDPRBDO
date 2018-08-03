// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/.cache/dev-404-page.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/src/pages/404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/.cache/json/layout-index.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/.cache/json/dev-404-page.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/.cache/json/404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/.cache/json/index.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/.cache/layouts/index.js")
}