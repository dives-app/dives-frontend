import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { AppProps } from '../src/types';
import theme from '../src/theme';
import client from '../src/apolloClient';

function App({ Component, pageProps }: AppProps) {
  const layout = Component.layout || (page => page);

  return (
    <ChakraProvider theme={theme}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <ApolloProvider client={client}>{layout(<Component {...pageProps} />)}</ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
