import { ACTION_TYPES } from '../../constants'

const {
  FINDER_SCREEN_ACTIONS: {
    SEARCH_BAR_TEXT,
    FETCH_COCKTAILS_DATA_LOADING,
    FETCH_COCKTAILS_DATA_SUCCESS
  }
} = ACTION_TYPES

const doChangeSearchBarText = searchBarText => ({
  type: SEARCH_BAR_TEXT,
  searchBarText
})

const doFetchCocktailsDataLoading = cocktailsDataLoading => ({
  type: FETCH_COCKTAILS_DATA_LOADING,
  cocktailsDataLoading
})

const doFetchCocktailsDataSuccess = cocktailsData => ({
  type: FETCH_COCKTAILS_DATA_SUCCESS,
  cocktailsData,
})

export default {
  doChangeSearchBarText,
  doFetchCocktailsDataLoading,
  doFetchCocktailsDataSuccess,
}