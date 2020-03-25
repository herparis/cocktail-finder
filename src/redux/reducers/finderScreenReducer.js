import { ACTION_TYPES } from '../../constants'
import { finderScreenReducerState } from './initialState'

const {
  FINDER_SCREEN_ACTIONS: {
    SEARCH_BAR_TEXT,
    FETCH_COCKTAILS_DATA_LOADING,
    FETCH_COCKTAILS_DATA_SUCCESS
  }
} = ACTION_TYPES

const FinderScreenReducer = (state = finderScreenReducerState, action) => {
  switch (action.type) {
    case SEARCH_BAR_TEXT:
      return { ...state, searchBarText: action.searchBarText }
    case FETCH_COCKTAILS_DATA_LOADING:
      return { ...state, cocktailsDataLoading: action.cocktailsDataLoading }
    case FETCH_COCKTAILS_DATA_SUCCESS:
      return { ...state, cocktailsData: action.cocktailsData }
    default:
      return state
  }
}

export default FinderScreenReducer