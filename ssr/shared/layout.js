import React from "react";
import Head from "next/head";
import Link from "next/link";

import Spinner from "./spinner";

export default function Layout({
  title = "",
  description = "",
  children,
  loading
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
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

        .loading {
          text-align: center;
          margin: 4rem;
        }

        .loading-spinner {
          margin-bottom: 4rem;
        }
      `}</style>
      <header>
        <Link href="/">
          <a>My Tech Blog</a>
        </Link>
      </header>
      <main>
        {loading ? (
          <div className="loading">
            <div className="loading-spinner">
              <Spinner />
            </div>
            {children}
          </div>
        ) : (
          children
        )}
      </main>
    </>
  );
}
