import React from 'react'

import { FinderScreenHooks } from '../../../hooks'
import { CocktailListData, CocktailListLoading } from './index'

const CocktailList = () => {
  const { useCocktailLoading } = FinderScreenHooks
  const [cocktailsDataLoading] = useCocktailLoading()

  return cocktailsDataLoading ? <CocktailListLoading /> : <CocktailListData />
}

export default CocktailList