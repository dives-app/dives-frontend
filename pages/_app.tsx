import ThemeProvider from "../components/ThemeProvider";
import GlobalStyle from "../styles/GlobalStyle";
import AuthLayout from "../layouts/AuthLayout";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps, router }: AppProps) {
  if (
    router.pathname.startsWith("/signup") ||
    router.pathname.startsWith("/login")
  ) {
    return (
      <ThemeProvider>
        <GlobalStyle />
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      </ThemeProvider>
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
