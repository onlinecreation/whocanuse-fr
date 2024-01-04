import React from 'react'
import { PassFailTextWrapper } from './styled'

/*----------------------------------------------------------
   Vision Table
----------------------------------------------------------*/
export function renderPassFail(rating) {
  return rating !== 'FAIL' ? (
    <PassFailTextWrapper pass={true}>{rating}</PassFailTextWrapper>
  ) : (
    <PassFailTextWrapper pass={false} style={{ letterSpacing: "-1px" }}>Échec</PassFailTextWrapper>
  )
}
