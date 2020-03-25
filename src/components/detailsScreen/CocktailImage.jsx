import React from 'react'
import { useNavigationParam } from 'react-navigation-hooks'

import { ImageCustom } from '../common'

const CocktailImage = () => {
  const { strDrinkThumb } = useNavigationParam('itemData')

  return (
    <ImageCustom
      borderRadius={90}
      height={175}
      marginHorizontal={20}
      marginVertical={20}
      position='relative'
      source={{ uri: strDrinkThumb }}
      width={175}
    />
  )
}

export default CocktailImage