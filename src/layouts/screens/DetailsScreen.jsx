import React from 'react'

import {
  CocktailImage,
  DetailsScreenContainer,
  DetailsTitle,
  HeaderDetailsScreen,
  IngredientsList } from '../../components/detailsScreen'

const DetailsScreen = () => (
  <DetailsScreenContainer>
    <HeaderDetailsScreen />
    <DetailsTitle />
    <CocktailImage />
    <IngredientsList />
  </DetailsScreenContainer>
)

export default DetailsScreen