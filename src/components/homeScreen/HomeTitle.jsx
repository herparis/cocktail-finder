import React from 'react'

import COLORS from '../../assets/colors'
import { STRINGS } from '../../constants'
import { TextCustom } from '../common'

const HomeTitle = () => (
  <TextCustom color={COLORS.WHITE} size={40}>
    <TextCustom color={COLORS.WHITE} size={40} weight='bold'>{STRINGS.HOME_SCREEN.TITLE.BOLD}</TextCustom>
    {STRINGS.HOME_SCREEN.TITLE.NORMAL}
  </TextCustom>
)

export default HomeTitle