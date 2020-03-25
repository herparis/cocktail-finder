import React from 'react'
import { useNavigation } from 'react-navigation-hooks'

import { ButtonCustom, IconCustom } from '..'
import COLORS from '../../../assets/colors'
import { ICONS } from '../../../constants'

const BackButton = ({ page }) => {
  const { navigate } = useNavigation()

  function navigateScreen(){
    navigate(page)
  }

  return (
    <ButtonCustom
      underlayColor={COLORS.WHITE}
      width={8}
      onPress={navigateScreen}
    >
      <IconCustom
        color={COLORS.BLACK}
        name={ICONS.ARROW_LEFT}
        size={20}
      />
    </ButtonCustom>
  )
}

export default BackButton