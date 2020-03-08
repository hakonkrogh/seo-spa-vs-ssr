import React from "react";
import Link from "next/link";

import Layout from "../layout";

const dateWithDayMonthAndYear = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "long",
  day: "2-digit"
});

export function toDateWithDayMonthAndYear(dateString) {
  return dateWithDayMonthAndYear.format(new Date(dateString));
}

function Card({ path, name, createdAt }) {
  return (
    <li>
      <style jsx>{`
        li {
          display: block;
          margin: 2rem;
          max-width: 400px;
        }

        h2 {
          margin: 1rem 0 0;
        }

        a {
          color: inherit;
          display: block;
          text-decoration: none;
          background: #fff;
          border-radius: 50px;
          background: #fffcf7;
          box-shadow: 20px 20px 60px #d9d6d2, -20px -20px 60px #ffffff;
          padding: 4rem;
        }
      `}</style>
      <Link as={path} href="[...blogpost]">
        <a>
          <time dateTime={createdAt}>
            {toDateWithDayMonthAndYear(createdAt)}
          </time>
          <h2>{name}</h2>
        </a>
      </Link>
    </li>
  );
}

export default ({ title, data }) => (
  <Layout title={title}>
    <style jsx>{`
      ul {
        display: block;
        list-style: none;
        margin: 4rem 0;
        padding: 0;
      }
    `}</style>
    <ul>
      {data.catalogue.children.map(child => (
        <Card key={child.path} {...child} />
      ))}
    </ul>
  </Layout>
);
