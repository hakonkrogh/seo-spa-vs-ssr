import { simplyFetch } from "../graph";

export default ({ path }) =>
  simplyFetch({
    query: `query BLOGPOST ($path: String!){
  catalogue(path: $path) {
    name
    topImage: component(id: "image") {
      content {
        ... on ImageContent {
          images {
            altText
            caption {
              json
            }
            variants {
              url
              width
            }
          }
        }
      }
    }
    body: component(id: "body") {
      content {
        ... on ParagraphCollectionContent {
          paragraphs {
            title {
              text
            }
            body {
              ... on RichTextContent {
                json
              }
            }
            images {
              altText
              variants {
                url
                width
              }
            }
          }
        }
      }
    }
  }
}`,
    variables: { path }
  });
