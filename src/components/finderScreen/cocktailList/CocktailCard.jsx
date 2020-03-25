import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import COLORS from '../../../assets/colors'
import { ButtonCustom, ImageCustom, TextCustom } from '../../common'

const CocktailCard = ({ item, onClick }) => {
  const { strDrink, strDrinkThumb } = item

  const handleItemDataNavigation = () => onClick(item)

  return (
    <ButtonCustom
      flex
      borderRadius={6}
      justifyContent='flex-start'
      marginHorizontal={15}
      marginVertical={5}
      paddingVertical={15}
      underlayColor={COLORS.COCKTAIL_RED_TRANSLUCID}
      onPress={handleItemDataNavigation}
    >
      <Fragment>
        <ImageCustom
          borderRadius={50}
          height={70}
          marginHorizontal={20}
          position='relative'
          source={{ uri: strDrinkThumb }}
          width={70}
        />
        <TextCustom width={40}>{strDrink}</TextCustom>
      </Fragment>
    </ButtonCustom>
  )
}

export default CocktailCard