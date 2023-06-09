import { Head, Html, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html lang="fr">
      <Head />
      <body className="loading">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
