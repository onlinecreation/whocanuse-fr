import React from 'react'
import SEO from '../components/seo'

const Layout = ({ children, background, foreground }) => (
  <React.Fragment>
    <SEO title="Contraste•OnlineCreation" background={background} foreground={foreground} />
    <div>{children}</div>
  </React.Fragment>
)

export default Layout
