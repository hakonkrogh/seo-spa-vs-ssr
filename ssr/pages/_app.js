import React from "react";
import NextApp from "next/app";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

// Implement getInitialProps if your Page components call getInitialProps themselves.
// https://nextjs.org/docs/advanced-features/custom-app
App.getInitialProps = async ctx => {
  // Enable Zeit Now edge caching
  ctx?.ctx?.res?.setHeader(
    "cache-control",
    "s-maxage=1, stale-while-revalidate"
  );

  const appProps = await NextApp.getInitialProps(ctx);

  return {
    ...appProps
  };
};

export default App;
