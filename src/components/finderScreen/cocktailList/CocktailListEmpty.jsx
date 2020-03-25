import React from 'react'

import COLORS from '../../../assets/colors'
import { STRINGS } from '../../../constants'
import { FinderScreenHooks } from '../../../hooks'
import { TextCustom } from '../../common'

const CocktailListEmpty = () => {
  const { useSearchBar } = FinderScreenHooks
  const [searchBarText] = useSearchBar()

  const text = searchBarText && searchBarText.trim()
    ? STRINGS.FINDER_SCREEN.COCKTAIL_NOT_FOUND
    : STRINGS.FINDER_SCREEN.EMPTY_LIST
  
  return (
    <TextCustom
      color={COLORS.WHITE}
      marginVertical={50}
      size={28}
    >
      {text}
    </TextCustom>
  )
}

export default CocktailListEmpty