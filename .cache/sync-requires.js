// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/.cache/json/dev-404-page.json"),
  "404.json": require("/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/.cache/json/404.json"),
  "index.json": require("/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/.cache/json/index.json"),
  "404-html.json": require("/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/.cache/json/404-html.json")
}