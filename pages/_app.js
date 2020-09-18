import "../styles/globals.css";
import AppThemeProvider from "../components/AppThemeProvider";

function MyApp({ Component, pageProps }) {
  return (
    <AppThemeProvider>
      <Component {...pageProps} />
    </AppThemeProvider>
  );
}

export default MyApp;
