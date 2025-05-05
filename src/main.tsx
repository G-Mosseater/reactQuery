import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient , QueryClientProvider} from '@tanstack/react-query';

//changing query settings
// staleTime is the most important

const queryClient = new QueryClient({
  defaultOptions:{
    queries: {
      retry: 3,
      cacheTime: 300_000,
      staleTime: 10 * 1000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    }
  }
}) 


ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
  </React.StrictMode>
);
