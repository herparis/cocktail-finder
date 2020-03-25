import React from 'react'
import { ActivityIndicator } from 'react-native'

import COLORS from '../../../assets/colors'
import { Container } from '../../common'

const CocktailListLoading = () => (
  <Container backgroundColor='transparent'>
    <ActivityIndicator color={COLORS.WHITE} size='large' />
  </Container>
)

export default CocktailListLoading