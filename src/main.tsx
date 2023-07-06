import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store, persistor } from './stores/index'
import { PersistGate } from 'redux-persist/integration/react'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <PersistGate
          loading={null}
          persistor={persistor}
          defaultNS={'translation'}
        >
          <App />
        </PersistGate>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
)
