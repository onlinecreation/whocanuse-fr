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
      ref.current = txt
    }
  }, [])

  return <StyledAd ref={ref}>{children}</StyledAd>
}
