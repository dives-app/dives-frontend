import AuthLayout from "../src/layouts/AuthLayout";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme";

function MyApp({ Component, pageProps, router }: AppProps) {
  if (
    router.pathname.startsWith("/signup") ||
    router.pathname.startsWith("/login")
  ) {
    return (
      <ChakraProvider theme={theme}>
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
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
