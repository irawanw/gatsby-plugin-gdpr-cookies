const {
  validLinkedinTrackingId,
  getCookie
} = require('../helper')

exports.addHubspot = (options) => {
  return new Promise((resolve, reject) => {
    if (window.gatsbyPluginGDPRCookiesHubspotAdded) return resolve(true)
    const head = document.getElementsByTagName('head')[0]
    const script = document.createElement(`script`)
    script.type = `text/javascript`
    script.onload = () => {
      window.gatsbyPluginGDPRCookiesGoogleAnalyticsAdded = true
      resolve(true)
    }
    script.src = `https://js.hs-scripts.com/${trackingId}.js`

    head.appendChild(script);
  })
}

exports.initializeHubspot = (options) => {
  if (
    !window.gatsbyPluginGDPRCookiesHubspotInitialized &&
    getCookie(options.cookieName) === `true` &&
    validHubspot(options)
  ) {
      window.gatsbyPluginGDPRCookiesHubspotInitialized = true
  }
}
