import React, { useCallback } from 'react'
import { useNavigation } from 'react-navigation-hooks'

import { SCREENS } from '../../../constants'
import { FinderScreenHooks } from '../../../hooks'
import { FlatListCustom } from '../../common'
import { CocktailCard, CocktailListEmpty } from './index'

const CocktailListData = () => {
  const { useCocktailsData } = FinderScreenHooks
  
  const { navigate } = useNavigation()
  const [cocktailsData] = useCocktailsData()
  
  const navigateDetailsScreen = useCallback(itemData => navigate(SCREENS.DETAILS_SCREEN, { itemData }), [navigate])
  const renderCard = listData => <CocktailCard {...listData} onClick={navigateDetailsScreen} />

  return (
    <FlatListCustom
      bounces={false}
      data={cocktailsData}
      keyExtractor={({ idDrink }) => idDrink}
      ListEmptyComponent={CocktailListEmpty}
      renderItem={renderCard}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default CocktailListData