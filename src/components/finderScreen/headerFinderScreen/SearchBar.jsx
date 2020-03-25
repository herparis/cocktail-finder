import PropType from 'prop-types'
import React from 'react'

import COLORS from '../../../assets/colors'
import { ICONS } from '../../../constants'
import { Container, IconCustom, TextInputCustom } from '../../common'

const SearchBar = ({ searchBarText, setSearchBarText }) => (
  <Container
    backgroundColor={COLORS.COCKTAIL_GREY}
    borderRadius={9}
    flexDirection='row'
    height={50}
    marginHorizontal={15}
  >
    <IconCustom
      alignSelf='center'
      color={COLORS.COCKTAIL_GREY_TEXT}
      marginHorizontal={15}
      marginVertilal={15}
      name={ICONS.SEARCH}
      size={20}
    />
    <TextInputCustom
      placeholder='Search'
      placeholderTextColor={COLORS.COCKTAIL_GREY_TEXT}
      value={searchBarText}
      onChangeText={setSearchBarText}
    />
  </Container>
)

SearchBar.prototype = {
  searchBarText: PropType.string.isRequired,
  setSearchBarText: PropType.func.isRequired
}

export default SearchBar