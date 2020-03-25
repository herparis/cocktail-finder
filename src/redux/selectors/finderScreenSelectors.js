const getSearchBarText = ({ finderScreen: { searchBarText } }) => searchBarText

const getCocktailsData = ({ finderScreen: { cocktailsData } }) => cocktailsData

const getCocktailsDataLoading = ({ finderScreen: { cocktailsDataLoading } }) => cocktailsDataLoading

export default {
  getSearchBarText,
  getCocktailsData,
  getCocktailsDataLoading,
}