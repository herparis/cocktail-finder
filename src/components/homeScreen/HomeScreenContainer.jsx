import React from 'react'

import { BACKGROUND_IMAGE } from '../../assets/images'
import { Container, ImageCustom } from '../../components/common'

const HomeScreenContainer = ({ children }) => (
  <Container>
    <ImageCustom source={BACKGROUND_IMAGE} />
    {children}
  </Container>
)

export default HomeScreenContainer