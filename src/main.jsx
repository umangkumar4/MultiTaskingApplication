import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './global-state-management/store/index.js'
  import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Provider store={store}>
       <BrowserRouter>
        <App />
        <Toaster position="top-center" />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
