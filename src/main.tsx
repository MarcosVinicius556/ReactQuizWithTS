//React
import React from 'react'
import ReactDOM from 'react-dom/client'

//CSS
import './index.css'

//Redux 
import { Provider } from 'react-redux'
import applicationStore from './redux/store.ts'

//Componentes
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={applicationStore}>
      <App />
    </Provider>
)
