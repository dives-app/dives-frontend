import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from '../src/types';
import theme from '../src/theme';
import client from '../src/apolloClient';

function App({ Component, pageProps }: AppProps) {
  const layout = Component.layout || (page => page);

  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>{layout(<Component {...pageProps} />)}</ApolloProvider>
    </ChakraProvider>
  );
}

export default appWithTranslation(App);
