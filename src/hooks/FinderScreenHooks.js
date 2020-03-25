import { useDispatch, useSelector } from 'react-redux'

import { FinderScreenActions } from '../redux/actions'
import { FinderScreenSelectors } from '../redux/selectors'

const {
  doChangeSearchBarText,
  doFetchCocktailData,
  doFetchCocktailsDataSuccess
} = FinderScreenActions

const { getSearchBarText, getCocktailsData, getCocktailsDataLoading } = FinderScreenSelectors

function useSearchBar() {
  const dispatch = useDispatch()

  const searchBarText = useSelector(getSearchBarText)
  const setSearchBarText = text => dispatch(doChangeSearchBarText(text))

  return [searchBarText, setSearchBarText]
}

function useCocktailLoading() {
  const cocktailsDataLoading = useSelector(getCocktailsDataLoading)

  return [cocktailsDataLoading]
}

function useCocktailsData() {
  const dispatch = useDispatch()

  const cocktailsData = useSelector(getCocktailsData)
  const setCocktailsData = data => dispatch(doFetchCocktailsDataSuccess(data))

  return [cocktailsData, setCocktailsData]
}

export default {
  useSearchBar,
  useCocktailsData,
  useCocktailLoading
}