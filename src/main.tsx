import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@Pages/App'
import './styles/index.css'
import { ThemeProvider } from '@mui/material'
import theme from '@Styles/theme'
import { Provider } from 'react-redux'
import { store } from '@Redux/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode >
)
