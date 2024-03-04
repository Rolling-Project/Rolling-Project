import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Global } from '@emotion/react';
import Routers from './Routers/Routers';
import reset from './styles/reset';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={reset} />
      <Routers />
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}

export default App;
