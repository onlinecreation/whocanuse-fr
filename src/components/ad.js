import React from 'react'
import styled from '@emotion/styled'

const StyledAd = styled('div')`
  display: flex;
  grid-area: 6 / 1 / 7 / 4;
  justify-content: center;
  position: relative;
  max-width: 684px;
  width: 100%;
  justify-self: center;
  &:before {
    content:
      "";
    position: absolute;
    top: 0;
    display: flex;
    background-color: #f6f8fa;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    color: #8c8c8c;
    padding: 20px 40px;
    height: 90px;
  }
  @media screen and (max-width: 1200px) {
    max-width: 470px;
  }
}`

export const Ad = ({ children }) => {
  const ref = React.useRef(null)
  React.useEffect(() => {
    if (ref.current) {
      const txt = document.createElement('p')
      txt.innerHTML = '<a href="https://commercedigital.fr/" target="_blank"><strong>Créer une e-boutique en 2 heures</strong><br>Téléchargez le e-book vidéo et découvrez comment démarrer votre affaire en ligne en moins de deux heures.<br>Pour seulement 9,99&nbsp;€, obtenez les clés pour changer de vie grace au web&nbsp;!</a>';
      ref.current.appendChild(txt)
    }
  }, [])

  return <StyledAd ref={ref}>{children}</StyledAd>
}
