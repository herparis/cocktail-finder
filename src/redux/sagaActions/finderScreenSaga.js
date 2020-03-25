import { call, put, select, takeLatest } from 'redux-saga/effects'

import { FinderScreenAPI } from '../../apis'
import { ACTION_TYPES, APIS } from '../../constants'
import { FinderScreenActions } from '../actions'
import { FinderScreenSelectors } from '../selectors'
 
const { FINDER_SCREEN_ACTIONS: { SEARCH_BAR_TEXT } } = ACTION_TYPES

const {
  doFetchCocktailsDataLoading,
  doFetchCocktailsDataSuccess
} = FinderScreenActions

const { fetchCocktailData } = FinderScreenAPI

const { getSearchBarText } = FinderScreenSelectors

function* doFetchByCocktailName() {
  yield put(doFetchCocktailsDataLoading(true))
  const cocktailName = yield select(getSearchBarText)

  let cocktails = []

  if(cocktailName && cocktailName.trim()) {
    const url = `${APIS.BASE_URL}${cocktailName}`
    const { drinks } = yield call(fetchCocktailData, url)
    
    cocktails = drinks
  }

  yield put(doFetchCocktailsDataSuccess(cocktails))
  yield put(doFetchCocktailsDataLoading(false))
}

function* FinderScreenSagaActions() {
  yield takeLatest(SEARCH_BAR_TEXT, doFetchByCocktailName)
}

export default FinderScreenSagaActions