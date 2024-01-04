import React from 'react'
import styled from '@emotion/styled'
import { theme } from './theme'
import { TwitterShareButton } from 'react-twitter-embed'
import { linkPath } from '../helpers/link'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const ActionsWrapper = styled('div')((props) => ({
  gridArea: '5 / 1 / 6 / 4',
  display: 'flex',
  alignItems: 'center',
  input: {
    borderRadius: '3px',
    fontSize: '14px',
    color: theme.color.grey,
    fontFamily: theme.fontFamily,
    border: `1px solid ${theme.color.lightgrey}`,
    width: '100%',
    padding: '8px 4px',
    marginRight: '10px',
    transition: 'all 0.2s ease',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#f9f9f9',
      transition: 'all 0.2s ease',
    },
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  iframe: {
    marginLeft: '10px',
  },
  div: {
    display: 'flex',
    alignItems: 'center',
  },
}))

/*----------------------------------------------------------
   Actions and Sharing Bar
----------------------------------------------------------*/

export const Actions = ({
  children,
  foreground,
  background,
  fontSize,
  bold,
  ...rest
}) => {
  const copyRef = React.useRef()

  return (
    <ActionsWrapper {...rest}>
      <form>
        <Tippy
          content="Click to copy"
          placement="bottom"
          animation="shift-away"
          arrow={true}
        >
          <input
            type="text"
            id="permalink"
            name="permalink"
            value={`contraste.onlinecreation.pro/${linkPath(
              background,
              foreground,
              fontSize,
              bold,
            )}`}
            readOnly="readonly"
            ref={copyRef}
            onClick={() => {
              copyRef.current.select()
              document.execCommand('copy')
            }}
          />
        </Tippy>
      </form>
      <TwitterShareButton
        url={'https://contraste.onlinecreation.pro'}
        options={{
          text: `Un outil facile à utiliser qui permet de savoir quels types de vision peuvent voir votre combinaison de couleurs.`,
          via: 'onlinecreation',
        }}
      />
      <iframe
        title="Github Star"
        src="https://ghbtns.com/github-btn.html?user=onlinecreation&repo=whocanuse-fr&type=star&count=true"
        frameBorder="0"
        scrolling="0"
        width="60"
        height="20px"
      />
    </ActionsWrapper>
  )
}
