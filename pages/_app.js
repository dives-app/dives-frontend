// import "../styles/globals.css";
import ThemeProvider from "../components/ThemeProvider";
import GlobalStyle from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
