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
      </Head>
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
