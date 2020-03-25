import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'

import {
  CocktailIcon,
  HomeScreenContainer,
  HomeTitle,
  SearchButton } from '../../components/homeScreen'

const HomeScreen = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <HomeScreenContainer>
      <CocktailIcon />
      <HomeTitle />
      <SearchButton />
    </HomeScreenContainer>
  )
}

export default HomeScreen