import ThemeProvider from "../src/components/ThemeProvider";
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
        <ThemeProvider>
          <AuthLayout>
            <Component {...pageProps} />
          </AuthLayout>
        </ThemeProvider>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
