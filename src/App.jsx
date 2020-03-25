import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Colors from './assets/colors'
import { Screens } from './layouts'
import { Store } from './redux'

const App = () => (
  <Provider store={Store}>
    <ThemeProvider theme={Colors}>
      <Screens />
    </ThemeProvider>
  </Provider>
)

export default App
