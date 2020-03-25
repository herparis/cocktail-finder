import React from 'react'

import {
  CocktailList,
  FinderScreenContainer,
  HeaderFinderScreen
} from '../../components/finderScreen'

const FinderScreen = () => (
  <FinderScreenContainer>
    <HeaderFinderScreen />
    <CocktailList />
  </FinderScreenContainer>
)

export default FinderScreen