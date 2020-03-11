import React, { useEffect } from "react";
import Head from "next/head";

import Spinner from "./spinner";

export default function Layout({
  title = "My tech blog",
  description = "My blog where I write about technical web-related stuff. Mostly React and friends",
  children,
  loading
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <style jsx>{`
        .loading {
          text-align: center;
          margin: 4rem;
        }

        .loading-spinner {
          margin-bottom: 4rem;
        }
      `}</style>

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
    </>
  );
}
