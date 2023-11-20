import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from '@/store/index.ts';
import { QueryClientProvider } from "react-query";
import { queryClient } from '@/utils/props.ts';
import App from './App.tsx'
import React from 'react';
import "./i18n.ts"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)


