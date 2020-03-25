import React, { Fragment } from 'react'
import { Platform } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'

import COLORS from '../../assets/colors'
import { ICONS, SCREENS, STRINGS } from '../../constants'
import { ButtonCustom, IconCustom, TextCustom } from '../common'

const SearchButton = () => {
  const { navigate } = useNavigation()

  function navigateFinderScreen() {
    navigate(SCREENS.FINDER_SCREEN)
  }

  return (
    <ButtonCustom
      borderRadius={9}
      height={Platform.select({ ios: 7, android: 10 })}
      justifyContent='flex-start'
      marginVertical={20}
      underlayColor={COLORS.COCKTAIL_RED_TRANSLUCID}
      width={90}
      onPress={navigateFinderScreen}
    >
      <Fragment>
        <IconCustom
          color={COLORS.COCKTAIL_RED}
          marginHorizontal={30}
          name={ICONS.SEARCH}
        />
        <TextCustom color={COLORS.COCKTAIL_GREY_TEXT}>
          {STRINGS.HOME_SCREEN.SEARCH_BUTTON_TEXT}
        </TextCustom>
      </Fragment>
    </ButtonCustom>
  )}

export default SearchButton