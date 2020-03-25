import PropType from 'prop-types'
import React from 'react'

import COLORS from '../../../assets/colors'
import { STRINGS } from '../../../constants'
import { ButtonCustom, TextCustom } from '../../common'

const CancelButton = ({ onClick }) => (
  <ButtonCustom
    underlayColor={COLORS.WHITE}
    width={20}
    onPress={onClick}
  >
    <TextCustom
      color={COLORS.COCKTAIL_RED}
      size={20}
    >
      {STRINGS.FINDER_SCREEN.CANCEL_BUTTON}
    </TextCustom>
  </ButtonCustom>
)

CancelButton.prototype = {
  onClick: PropType.func.isRequired
}

export default CancelButton