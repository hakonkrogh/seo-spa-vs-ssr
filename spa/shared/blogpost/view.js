import React from "react";
import ContentTransformer from "@crystallize/content-transformer/react";
import ContentTransformerToText from "@crystallize/content-transformer/toText";
import Image from "@crystallize/react-image";

import Layout from "../layout";

const dateWithDayMonthAndYear = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "long",
  day: "2-digit"
});

export function toDateWithDayMonthAndYear(dateString) {
  return dateWithDayMonthAndYear.format(new Date(dateString));
}

function Images({ images }) {
  if (!images?.length) {
    return null;
  }

  return (
    <div>
      <Image
        {...images[0]}
        loading="lazy"
        sizes="(min-width: 900px) 900px, 100vw"
      />
    </div>
  );
}

function Paragraph({ title, body, images }) {
  return (
    <div className="outer">
      <style jsx>{`
        .outer:not(:last-child) {
          margin: 0 0 4rem;
        }

        h2,
        .body {
          margin: 0 var(--content-padding) 2rem var(--content-padding);
        }

        .body {
          line-height: 1.5rem;
        }
      `}</style>
      <style jsx global>{`
        .body p {
          margin: 0 0 1rem;
        }
      `}</style>
      {title?.text && <h2>{title.text}</h2>}
      <div className="body">
        <ContentTransformer {...body.json} />
      </div>
      <Images images={images} />
    </div>
  );
}

export default ({ title, data: { catalogue } }) => {
  const ps = catalogue?.body?.content?.paragraphs ?? [];

  const description = ContentTransformerToText(ps[0]?.body.json);

  return (
    <Layout title={title} description={description}>
      <style jsx global>{`
        .top {
          display: flex;
          flex-direction: column;
        }

        h1 {
          order: 2;
          font-size: 3rem;
          flex: 1;
          width: 100%;
          margin: 4rem auto;
        }
        .h1-spacer {
          display: block;
          padding: 0 var(--content-padding);
        }
        .top-image {
          order: 1;
        }
        .top-image img {
          max-height: 50vh;
          width: 100%;
          object-fit: cover;
        }

        .h1-spacer,
        .content {
          max-width: 900px;
          margin: 0 auto;
        }
      `}</style>
      <article>
        <header className="top">
          <h1>
            <span className="h1-spacer">{catalogue?.name}</span>
          </h1>
          <Image
            className="top-image"
            {...catalogue?.topImage?.content?.images?.[0]}
            sizes="100vw"
            loading="lazy"
            width="100%"
            height="50%"
          />
        </header>

        <div className="content">
          {ps.map((p, i) => (
            <Paragraph key={i} {...p} />
          ))}
        </div>
      </article>
    </Layout>
  );
};
