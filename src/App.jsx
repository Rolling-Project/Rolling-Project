import { Global } from '@emotion/react';
import Routers from './Routers/Routers';
import reset from './styles/reset';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Global styles={reset} />
    <Routers />
    <ReactQueryDevtools />
  </QueryClientProvider>
);

export default App;
