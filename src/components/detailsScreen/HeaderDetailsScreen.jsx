import React from 'react'

import { SCREENS, STRINGS } from '../../constants'
import { Header, TextCustom } from '../common'
import { BackButton } from '../common/fabric'

const HeaderFinderScreen = () => (
  <Header justifyContent='space-between'>
    <BackButton page={SCREENS.FINDER_SCREEN}/>
    <TextCustom >{STRINGS.DETAILS_SCREEN.HEADER_TITLE}</TextCustom>
  </Header>
)

export default HeaderFinderScreen