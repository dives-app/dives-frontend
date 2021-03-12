import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />

          {/* Source Sans Pro 400/600, Work Sans 500 */}
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&family=Work+Sans:wght@500&display=swap"
            rel="stylesheet"
          />
          {/* <link */}
          {/*  href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500;700&display=swap" */}
          {/*  rel="stylesheet" */}
          {/* /> */}
          {/* <link */}
          {/*  href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap" */}
          {/*  rel="stylesheet" */}
          {/* /> */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
