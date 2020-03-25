import React, { Fragment } from 'react'

import COLORS from '../../assets/colors'
import { STRINGS } from '../../constants'
import { TextCustom } from '../common'
import { IngredientItems } from './index'

const IngredientsList = () => (
  <Fragment>
    <TextCustom
      color={COLORS.WHITE}
      marginVertical={5}
      size={28}
    >
      {STRINGS.DETAILS_SCREEN.INGREDIETNS_SUBTITLE}
    </TextCustom>
    <IngredientItems />
  </Fragment>
)

export default IngredientsList