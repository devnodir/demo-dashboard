import { queryClient } from '@/utils/props.ts';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import "./i18n.ts";
import "@/assets/bootstrap/bootstrap.min.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
)

