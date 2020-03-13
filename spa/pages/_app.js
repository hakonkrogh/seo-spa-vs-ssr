import React, { useEffect } from "react";
import NextApp from "next/app";
import Router from "next/router";
import Head from "next/head";
import Link from "next/link";

function Layout({ children }) {
  useEffect(() => {
    const handleRouteChange = url => {
      dataLayer.push({
        event: "nextjs-changed-url",
        url
      });
    };

    requestAnimationFrame(() => {
      Router.events.on("routeChangeComplete", handleRouteChange);
    });

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KMXBQB7');`
          }}
        />
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KMXBQB7"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <style jsx global>{`
        :root {
          --content-padding: 2rem;
        }
        html {
          font-size: 18px;
          font-family: "Open Sans", sans-serif;
        }
        body {
          margin: 0;
        }

        * {
          box-sizing: border-box;
        }

        img {
          max-width: 100%;
        }
      `}</style>
      <style jsx>{`
        header {
          padding: 2rem;
          background: #000;
          margin: 0;
          font-size: 2rem;
          position: relative;
          z-index: 1;
          color: #fff;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
      <header>
        <Link href="/">
          <a>My Tech Blog</a>
        </Link>
      </header>
      <main>{children}</main>
    </>
  );
}

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
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
