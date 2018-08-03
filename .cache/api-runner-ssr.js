var plugins = [{
      plugin: require('/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/node_modules/gatsby-plugin-emotion/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"GDPR Checklist","short_name":"GDPR Checklist","start_url":"/","background_color":"#FFF","theme_color":"#057de6","display":"minimal-ui","icon":"src/images/favicon.png"},
    },{
      plugin: require('/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-113160447-1"},
    },{
      plugin: require('/Applications/XAMPP/xamppfiles/htdocs/GDPRBDO/node_modules/gatsby-plugin-favicon/gatsby-ssr'),
      options: {"plugins":[],"logo":"./src/images/favicon.png","injectHTML":true,"icons":{"android":true,"appleIcon":true,"appleStartup":true,"coast":false,"favicons":true,"firefox":true,"twitter":true,"yandex":false,"windows":false}},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  let results = plugins.map(plugin => {
    if (plugin.plugin[api]) {
      const result = plugin.plugin[api](args, plugin.options)
      return result
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
