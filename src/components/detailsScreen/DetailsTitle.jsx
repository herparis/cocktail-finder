import React from 'react'
import { useNavigationParam } from 'react-navigation-hooks'

import COLORS from '../../assets/colors'
import { TextCustom } from '../common'

const DetailsTitle = () => {
  const { strDrink } = useNavigationParam('itemData')

  return (
    <TextCustom color={COLORS.WHITE} size={60}>
      {strDrink}
    </TextCustom>
  )
}

export default DetailsTitle