import {Helmet} from 'react-helmet'

export default (content, extractor, state) => {
  const helmet = Helmet.renderStatic()
  return `
  <!DOCTYPE html>
    <html dir="ltr" lang="en">
    <head>
      ${title}
      ${meta}
      ${link}
      ${extractor.getLinkTags()}
      ${extractor.getStyleTags()}
      ${noscript}
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${helmet.style.toString()}
      ${helmet.script.toString()}
      ${helmet.noscript.toString()}
    </head>
    <body style="margin:0">
      <div id="app">${content}</div>
      <script>
        window.__STATE__ = ${JSON.stringify(state)}
      </script>
      ${extractor.getScriptTags()}         
    </body>
    </html>
  `
}

const title = `<title>devolon test</title>`

const meta = `
  <meta http-equiv="Content-Type" content="text/html;" charset="utf-8" />
  <meta name="theme-color" content="#ED0C6F" />
  <meta http-equiv="Accept-CH" content="DPR,Viewport-Width,Width" />
  <meta http-equiv="Cache-Control" content="no-store" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="snappfood" content="snappfood" />
  <meta name="google-site-verification" content="voSoozouuCknw0hzLJEt4LL3WM8V2iPFuRIYyZ-qnis" />
`

const link = `
  <link rel="icon" href="./images/favicon.ico" />
`

const noscript = `<noscript>Please enable javascript.</noscript>`
