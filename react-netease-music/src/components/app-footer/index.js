import React, { memo } from 'react'
import FooterLeft from './footer-left'
import FooterRight from './footer-right'

import {
  Wrapper
} from './style'

export default memo(function NWAppFooter() {
  return (
    <Wrapper>
      <FooterLeft />
      <FooterRight />
    </Wrapper>
  )
})