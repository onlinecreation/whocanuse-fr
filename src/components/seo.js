import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import config from '../../config'

export default function SEO({ title, background, foreground }) {
  const siteTitle = config.title

  const newFaviconUri = renderSVGToDataURI(
    foreground.color.hex(),
    background.color.hex(),
  )

  return (
    <Head>
      <title>{`${siteTitle || title}`}</title>
      <meta name="theme-color" content={background.color.hex() || '#fff'} />
      <meta
        name="description"
        content="Un outil qui sensibilise à la manière dont le contraste des couleurs peut affecter les personnes souffrant de différentes déficiences visuelles et qui permet de mieux les comprendre."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://contraste.onlinecreation.pro" />
      <meta property="og:title" content="Contraste•OnlineCreation" />
      <meta
        property="og:image"
        content="https://contraste.onlinecreation.pro/whocanuse_banner.png"
      />
      <meta
        property="og:description"
        content="Un outil qui sensibilise à la manière dont le contraste des couleurs peut affecter les personnes souffrant de différentes déficiences visuelles et qui permet de mieux les comprendre."
      />
      <meta property="og:site_name" content={siteTitle || title} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:image"
        content="https://contraste.onlinecreation.pro/whocanuse_banner.png"
      />
      <meta property="twitter:creator" content="@OnlineCreation" />
      <meta property="twitter:title" content="Contraste•OnlineCreation" />
      <meta
        property="twitter:description"
        content="Un outil qui sensibilise à la manière dont le contraste des couleurs peut affecter les personnes souffrant de différentes déficiences visuelles et qui permet de mieux les comprendre."
      />
      <link rel="icon" href="favicon.png" type="image/png" />
      <link rel="icon" href="favicon.ico" sizes="any" />
      <link rel="icon" href="favicon.svg" type="image/svg+xml" />
      <link rel="icon" href={newFaviconUri} type="image/svg+xml" />
    </Head>
  )
}

function renderSVGToDataURI(frontColour = '#639', backColour = '#fff') {
  const svgString = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
      <rect fill="${backColour}" stroke="#555" stroke-opacity="0.2" x="1" y="1" width="10" height="10" rx="2" ry="2" />
      <rect fill="${frontColour}" stroke="#555" stroke-opacity="0.2" x="5" y="5" width="10" height="10" rx="2" ry="2" />
    </svg>`
      .replace(/\r?\n|\r/gm, '')
      .trim(),
  )
  return `data:image/svg+xml;utf8,${svgString}`
}
