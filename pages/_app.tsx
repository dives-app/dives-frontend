import ThemeProvider from "../components/ThemeProvider";
import GlobalStyle from "../styles/GlobalStyle";
import AuthLayout from "../layouts/AuthLayout";
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
          <GlobalStyle />
          <AuthLayout>
            <Component {...pageProps} />
          </AuthLayout>
        </ThemeProvider>
      </ChakraProvider>
    );
  }

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
