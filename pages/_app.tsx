import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { AppProps } from '../src/types';
import { theme } from '../src/theme';
import { apolloClient } from '../src/apolloClient';

function App({ Component, pageProps }: AppProps) {
  const layout = Component.layout || (page => page);

  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={apolloClient}>{layout(<Component {...pageProps} />)}</ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
