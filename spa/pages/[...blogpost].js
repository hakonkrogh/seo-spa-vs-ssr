import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import Layout from "../shared/layout";
const Blogpost = dynamic(() => import("../spa-pages/blogpost"));

export default () => {
  const [atClient, setAtClient] = useState(null);

  useEffect(() => {
    setAtClient(true);
  }, []);

  if (!atClient) {
    return <Layout loading />;
  }

  return <Blogpost />;
};
