import { simplyFetch } from "../graph";

export default () =>
  simplyFetch({
    query: `{
  catalogue(path: "/") {
    children {
      path
      name
      createdAt
    }
  }
}`
  });
