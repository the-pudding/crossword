import React from "react"
import { Helmet } from "react-helmet"
import meta from "../data/meta.json"

const Meta = () => {
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="description" content={meta.description} />
      <meta name="news_keywords" content={meta.keywords} />

      <meta property="og:title" content={meta.title} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="en_US" />

      <meta property="og:image" content={meta.imgFacebook} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={meta.site} />
      <meta name="twitter:creator" content={meta.author.twitterHandle} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image:src" content={meta.imgTwitter} />

      <meta name="robots" content="max-image-preview:large" />

      <link rel="canonical" href={meta.url} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://pudding.cool/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://pudding.cool/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://pudding.cool/favicon-16x16.png"
      />
      <link rel="manifest" href="https://pudding.cool/site.webmanifest" />
      <link
        rel="mask-icon"
        href="https://pudding.cool/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#ffc40d" />
      <meta name="theme-color" content="#ffffff" />

      <link
        rel="preload"
        type="font/woff2"
        as="font"
        crossorigin
        href="../styles/fonts/national/National2Web-Regular.woff2"
      />
      <link
        rel="preload"
        type="font/woff2"
        as="font"
        crossorigin
        href="../styles/fonts/national/National2Web-Bold.woff2"
      />
      <link
        rel="preload"
        type="font/woff2"
        as="font"
        crossorigin
        href="../styles/fonts/national/National2NarrowWeb-Regular.woff2"
      />
      <link
        rel="preload"
        type="font/woff2"
        as="font"
        crossorigin
        href="../styles/fonts/national/National2NarrowWeb-Bold.woff2"
      />
      <link
        rel="preload"
        type="font/woff2"
        as="font"
        crossorigin
        href="../styles/fonts/tiempos/TiemposTextWeb-Regular.woff2"
      />
      <link
        rel="preload"
        type="font/woff2"
        as="font"
        crossorigin
        href="../styles/fonts/tiempos/TiemposTextWeb-Bold.woff2"
      />
      <link
        rel="preload"
        type="font/woff2"
        as="font"
        crossorigin
        href="../styles/fonts/tiempos/TiemposHeadlineWeb-Regular.woff2"
      />
    </Helmet>
  )
}

export default Meta
