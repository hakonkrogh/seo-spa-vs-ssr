import "isomorphic-unfetch";

export async function simplyFetch({ query, variables }) {
  const response = await fetch(
    "https://api.crystallize.com/my-tech-blog/catalogue",
    {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ query, variables })
    }
  );

  if (!response.ok) {
    throw new Error(await response.text());
  }
  return response.json();
}
