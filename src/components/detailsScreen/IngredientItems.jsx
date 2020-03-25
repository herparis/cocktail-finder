import React from 'react'
import { useNavigationParam } from 'react-navigation-hooks'

import COLORS from '../../assets/colors'
import { TextCustom } from '../common'

const IngredientItems = () => {
  const item = useNavigationParam('itemData')

  let ingredientList = []

  function getIngredients(ingredientList){
    Object.keys(item).forEach(e => {
      if(item[e] && e === `strIngredient${(ingredientList.length) + 1}`) {
        ingredientList.push(item[e])
      }
    })
  }

  getIngredients(ingredientList)

  return ingredientList.map((ingredient, index) => 
    <TextCustom color={COLORS.WHITE} key={index}>{ingredient}</TextCustom>
  )
}

export default IngredientItems