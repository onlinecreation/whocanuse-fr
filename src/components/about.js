import React, { Component } from 'react'
import { Text, MediumText, Heading } from './typography'
import { theme } from '../components/theme'
import styled from '@emotion/styled'
import Image from 'next/image'
import avatar from '../images/avatar.png'
import { Link } from '@chakra-ui/react'

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const AboutWrapper = styled('div')({
  marginTop: '60px',
  background: '#f6f8fa',
  padding: '40px',
  borderRadius: '10px',
  h2: {
    marginTop: '30px',
    marginBottom: '5px',
  },
})

const ButtonWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  span: {
    marginRight: '6px',
  },
})

const Author = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  margin: '14px 0',
  'p, a': {
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    margin: '0 5px 0 10px',
  },
})

/*----------------------------------------------------------
   Actions and Sharing Bar
----------------------------------------------------------*/

export const About = () => (
  <div>
    <AboutWrapper>
      <Heading margin="0 0 20px 0">Contraste•OnlineCreation ?</Heading>
      <Text>
        Contraste•OnlineCreation est la traduction française de <a href="https://www.whocanuse.com/" target="_blank" rel="noopener noreferrer">WhoCanUse.com</a>, un outil qui permet d'attirer l'attention et de comprendre comment le contraste des couleurs peut affecter différentes personnes souffrant de déficiences visuelles.
      </Text>

      <Text>
        Les{' '}<Link fontWeight="bold" href="https://www.w3.org/Translations/WCAG21-fr/" target="_blank" rel="noopener noreferrer">règles pour l’accessibilité des contenus Web (WCAG)</Link>{' '}
        couvrent un large éventail de recommandations visant à rendre le contenu du web plus accessible. L'adaptation aux personnes atteintes d'une forme de cécité ou de malvoyance n'est qu'une infime partie de l'amélioration de l'accessibilité du web.
      </Text>
      <Text>
        Le système de notation standard (AA et AAA) est un bon début, mais l'objectif de WhoCanUse est d'humaniser les personnes qui sont affectées par les différentes notes.
      </Text>

      <MediumText>D'où viennent ces informations ?</MediumText>
      <Text>
        Les percentages viennent de{' '}
        <Link
          fontWeight="bold"
          href="https://www.colour-blindness.com"
          isExternal
        >
          colour-blindness.com
        </Link>{' '}
        et{' '}
        <Link
          fontWeight="bold"
          href="https://www.visionaustralia.org/"
          isExternal
        >
          Vision Australia
        </Link>
        . Merci à eux ✌️
      </Text>

      <MediumText>Votre calcul est erroné, le total n'est pas de 100 % !</MediumText>
      <Text>
        Bien vu ! (haha) Les données démographiques fournies sont des estimations pour des déficiences individuelles et ne couvrent pas le grand nombre de déficiences visuelles dans le monde. Il s'agit de vous faire comprendre non seulement{' '}<strong>comment</strong>{' '}le contraste des couleurs affecte différentes personnes, mais aussi{' '}<strong>qui</strong>{' '}il peut affecter.
      </Text>

      <MediumText>
        Je suis fasciné par le fonctionnement de cet outil, pouvez-vous m'en dire plus ?
      </MediumText>
      <Text>
        Bien sûr ! Le processus se déroule en plusieurs étapes. Tout d'abord, nous déterminons le contraste entre deux valeurs HEX. Pour cela, nous utilisons un plugin appelé{' '}
        <Link fontWeight="bold" href="https://vis4.net/chromajs/" isExternal>
          Chroma.js
        </Link>{' '}
        qui fait le gros du travail pour nous. Une fois que nous avons le ratio (et en utilisant la taille et le poids de la police), nous pouvons appliquer une note à cette combinaison de couleurs spécifique.
      </Text>
      <Text>
        Pour les options de daltonisme, nous utilisons un autre plugin appelé{' '}
        <Link
          fontWeight="bold"
          href="https://github.com/skratchdot/color-blind"
          isExternal
        >
          Color-blind
        </Link>{' '}
        qui convertit nos codes HEX en codes qui seraient vus par les personnes atteintes des différentes déficiences, puis nous pouvons appliquer notre même processus pour obtenir les rapports de couleur et déterminer leur note.
      </Text>
      <Text>
        Pour la cataracte, le glaucome, la basse vision et les événements situationnels, les simulations ont été créées par WhoCanUse.com.
      </Text>

      <MediumText>Que signifie une note insuffisante ?</MediumText>
      <Text>
        Le classement utilise une combinaison du contraste des couleurs, de la taille et du poids du texte. Un échec signifie simplement que la combinaison de couleurs représente une contrainte visuelle pour la personne qui la voit et qu'elle doit être évitée dans la mesure du possible.
      </Text>

      <MediumText>Puis-je apporter ma contribution ?</MediumText>
      <Text>
        Absolument ! N'hésitez pas à forker le dépôt GitHub et à soumettre une PR pour tout ajout ou changement utile.
      </Text>
    </AboutWrapper>
    <Author>
      <ButtonWrapper>
        <Link
          fontWeight="bold"
          href="https://github.com/coreyginnivan/whocanuse/"
          aria-label="coreyginnivan/whocanuse sur GitHub"
          isExternal
        >
          GitHub (WhoCanUse.com)
        </Link>

        <Link
          fontWeight="bold"
          href="https://github.com/onlinecreation/whocanuse-fr"
          aria-label="onlinecreation/whocanuse-fr sur GitHub"
          isExternal
        >
          GitHub (Contraste•OnlineCreation)
        </Link>

        <Link
          fontWeight="bold"
          style={{ marginLeft: '10px' }}
          href="https://github.com/sponsors/coreyginnivan"
          isExternal
          aria-label="Sponsor @coreyginnivan on GitHub"
        >
          Donner à WhoCanUse.com
        </Link>

        <Link
          fontWeight="bold"
          style={{ marginLeft: '10px' }}
          href="https://onlinecreation.pro"
          isExternal
          aria-label="OnlineCreation.pro"
        >
          OnlineCreation • Agence web à Bordeaux
        </Link>
      </ButtonWrapper>
      <div style={{ display: 'flex' }}>
        <Text>Créé &amp; maintenu par</Text>
        <Link
          href="https://twitter.com/coreyginnivan"
          isExternal
          style={{ marginLeft: '10px' }}
          fontWeight="bold"
        >
          <Image
            alt="Corey"
            src={avatar}
            width="30"
            height="30"
            style={{
              borderRadius: '30px',
              overflow: 'hidden',
            }}
          />
          @CoreyGinnivan
        </Link>
        <Text>Traduit en français par</Text>
        <Link
          href="https://onlinecreation.pro"
          isExternal
          style={{ marginLeft: '10px' }}
          fontWeight="bold"
        >
          OnlineCreation
        </Link>
      </div>
    </Author>
  </div>
)
