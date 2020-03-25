import React, { useCallback } from 'react'

import { SCREENS } from '../../../constants'
import { FinderScreenHooks } from '../../../hooks'
import { Header } from '../../common'
import { BackButton } from '../../common/fabric'
import { CancelButton, SearchBar } from './index'

const HeaderFinderScreen = () => {
  const [searchBarText, setSearchBarText] = FinderScreenHooks.useSearchBar()

  const isCancelButton = !!searchBarText
  const isBackButton = !searchBarText

  const handleCancelButtonClick = useCallback(() => setSearchBarText(''), [setSearchBarText])

  return (
    <Header>
      {isBackButton && <BackButton page={SCREENS.HOME_SCREEN}/>}
      <SearchBar searchBarText={searchBarText} setSearchBarText={setSearchBarText} />
      {isCancelButton && <CancelButton onClick={handleCancelButtonClick} />}
    </Header>
  )
}

export default HeaderFinderScreen