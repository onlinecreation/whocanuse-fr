import React, { useState, useEffect } from 'react'
import chroma from 'chroma-js'
import styled from '@emotion/styled'
import Layout from '../layout/layout'
import queryString from 'query-string'
import { Hero } from '../components/hero'
import { Heading } from '../components/typography'
import { VisionTable } from '../components/table/vision-table'
import { VisionTableAlt } from '../components/table/vision-table-alt'
import { VisionRow } from '../components/table/vision-row'
import { VisionRowAlt } from '../components/table/vision-row-alt'
import { About } from '../components/about'
import { SmallInfoBars } from '../components/small-info-bars'
import { linkPath } from '../helpers/link'

import { Text } from '@chakra-ui/react'

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const MainLayout = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  '@media screen and (max-width: 1200px)': {
    flexDirection: 'column',
  },
})

const ContentWrapper = styled('div')({
  height: '100%',
  width: '60%',
  marginLeft: '40%',
  padding: '60px 40px 40px 0',
  '@media screen and (max-width: 1400px)': {
    marginLeft: '550px',
  },
  '@media screen and (max-width: 1200px)': {
    width: '100%',
    marginLeft: '0',
    padding: '20px',
  },
})

const StatsWrapper = styled('div')({
  background: '#f6f8fa',
  padding: '20px',
  marginTop: '20px',
  borderRadius: '8px',
})

/*----------------------------------------------------------
   Main Layout
----------------------------------------------------------*/

const minFontSize = 10
const maxFontSize = 60

const IndexPage = () => {
  // The resulting colour value is lossy, the user inputting FFF is a colour of FFFFFF
  // HSL is the same, [155, 0, 0] is #000000, we have lost the Hue
  const [foreground, setForeground] = useState({
    color: chroma('#FFFFFF'),
    valueKind: 'hex',
    // This can be invalid, the colour is the source of truth for the last valid colour
    value: 'FFFFFF',
  })
  const [background, setBackground] = useState({
    color: chroma('#663399'),
    valueKind: 'hex',
    // This can be invalid, the colour is the source of truth for the last valid colour
    value: '663399',
  })
  const [fontSize, setFontSize] = useState({ value: 16, text: '16' })
  const [bold, setBold] = useState(false)

  useEffect(() => {
    const qs =
      typeof window === 'undefined'
        ? {}
        : queryString.parse(window.location.search)
    if (qs.fg && chroma.valid(qs.fg) && foreground.value !== qs.fg) {
      setForeground({
        color: chroma(`#${qs.fg}`),
        value: qs.fg,
        valueKind: 'hex',
      })
    }
    if (qs.bg && chroma.valid(qs.bg) && background.value !== qs.bg) {
      setBackground({
        color: chroma(`#${qs.bg}`),
        value: qs.bg,
        valueKind: 'hex',
      })
    }

    const paramFontSize = (Number(qs.fs) || '16').toString()
    if (
      paramFontSize >= minFontSize &&
      paramFontSize <= maxFontSize &&
      paramFontSize !== fontSize
    ) {
      setFontSize({ value: paramFontSize, text: paramFontSize })
    }

    const paramBold = qs.fw === 'b'
    if (qs.fw && paramBold !== bold) {
      setBold(paramBold)
    }
  }, [])

  function setColoursCallback(newColours) {
    if (newColours.background) {
      setBackground(newColours.background)
    }
    if (newColours.foreground) {
      setForeground(newColours.foreground)
    }

    updatePath(
      (newColours.background || background).color.hex().replace('#', ''),
      (newColours.foreground || foreground).color.hex().replace('#', ''),
      fontSize.value,
      bold,
    )
  }

  function setFontSizeCallback(fontSizeText) {
    const newFontSize = !isNaN(Number(fontSizeText))
      ? fontSizeText > 60
        ? 60
        : fontSizeText
      : fontSizeText
    setFontSize({
      value: newFontSize,
      text: fontSizeText,
    })
    updatePath(
      background.color.hex().replace('#', ''),
      foreground.color.hex().replace('#', ''),
      newFontSize,
      bold,
    )
  }

  return (
    <Layout background={background} foreground={foreground}>
      <MainLayout>
        <Hero
          setColours={setColoursCallback}
          foreground={foreground}
          background={background}
          setFontSize={setFontSizeCallback}
          fontSize={fontSize.value.toString()}
          fontSizeText={fontSize.text}
          minFontSize={minFontSize}
          maxFontSize={maxFontSize}
          bold={bold}
          setBold={(value) => {
            setBold(value)
            updatePath(
              background.color.hex().replace('#', ''),
              foreground.color.hex().replace('#', ''),
              fontSize.value,
              value,
            )
          }}
        />
        <ContentWrapper>
          <Heading align="left">Qui peut utiliser cette combinaison de couleurs ?</Heading>
          <StatsWrapper>
            <SmallInfoBars
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
          </StatsWrapper>
          <VisionTable>
            <VisionRow
              name="Vision courante (trichromatique)"
              description="Peut distinguer les trois couleurs primaires, avec peu ou pas de flou."
              percent="68"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Protanomalie"
              simType="protanomaly"
              description="Sensibilité réduite au rouge - difficulté à distinguer les rouges et les verts"
              percent="1.3"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Protanopie"
              simType="protanopia"
              description="Cécité au rouge - Ne voit pas du tout les rouges"
              percent="1.5"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Deutéranomalie"
              simType="deuteranomaly"
              description="Sensibilité réduite au vert - Difficulté à distinguer les rouges et les verts"
              percent="5.3"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Deutéranopie"
              simType="deuteranopia"
              description="Cécité verte - Ne voit pas du tout les verts"
              percent="1.2"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Tritanomalie"
              simType="tritanomaly"
              description="Difficulté à distinguer les bleus et les verts, les jaunes et les rouges"
              percent="0.02"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Tritanopie"
              simType="tritanopia"
              description="Incapacité à distinguer les bleus et les verts, les violets et les rouges, les jaunes et les roses"
              percent="0.03"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Achromatomie"
              simType="achromatomaly"
              description="Le daltonisme partiel, qui voit l'absence de la plupart des couleurs."
              percent="0.09"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Achromatopsie"
              simType="achromatopsia"
              description="Cécité totale des couleurs, ne voit que les nuances"
              percent="0.05"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Cataractes"
              simType="cataracts"
              description="Trouble du cristallin de l'œil qui affecte la vision"
              percent="33"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
              contrastModifier={-0.2}
            />
            <VisionRow
              name="Glaucome"
              simType="glaucoma"
              description="Légère perte de vision"
              percent="2"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Basse vision"
              simType="lowvision"
              description="Diminution et/ou trouble de la vision (non corrigeable par les moyens habituels tels que les lunettes)"
              percent="31"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
              contrastModifier={-0.2}
            />
          </VisionTable>
          <Text fontWeight="600" fontSize="lg" mb={4} mt={8}>
            Situations
          </Text>
          <VisionTableAlt>
            <VisionRowAlt
              name="Lumière directe du soleil"
              simType="sunlight"
              description="Simuler l'effet de la lumière directe du soleil sur un téléphone ou un écran"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              contrastModifier={-0.4}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRowAlt
              name="Mode nuit"
              simType="nightshift"
              description="Simuler l'effet du mode nuit sur un téléphone ou un écran"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              contrastModifier={-0.1}
              bold={bold}
              fontSize={fontSize.value}
            />
          </VisionTableAlt>
          <About />
        </ContentWrapper>
      </MainLayout>
    </Layout>
  )
}

export default IndexPage

function updatePath(background, foreground, fontSize, bold) {
  if (typeof window === 'undefined') {
    return
  }
  window.history.replaceState(
    undefined,
    '',
    linkPath(background, foreground, fontSize, bold),
  )
}
