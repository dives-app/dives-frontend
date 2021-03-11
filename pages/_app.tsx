import AuthLayout from "../src/layouts/AuthLayout";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme";
import { Provider, createClient } from "urql";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
if (!API_ENDPOINT) {
  throw new Error(
    "Could not find NEXT_PUBLIC_API_ENDPOINT in env variables. Remember to setup .env.{YOUR_ENV} files."
  );
}

const client = createClient({
  url: API_ENDPOINT,
  fetchOptions: {
    credentials: "include",
  },
});

function MyApp({ Component, pageProps, router }: AppProps) {
  if (
    router.pathname.startsWith("/signup") ||
    router.pathname.startsWith("/login")
  ) {
    return (
      <ChakraProvider theme={theme}>
        <Provider value={client}>
          <AuthLayout>
            <Component {...pageProps} />
          </AuthLayout>
        </Provider>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
