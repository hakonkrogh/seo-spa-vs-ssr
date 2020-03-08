import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import Layout from "../shared/layout";
const Frontpage = dynamic(() => import("../spa-pages/frontpage"));

export default () => {
  const [atClient, setAtClient] = useState(null);

  useEffect(() => {
    setAtClient(true);
  }, []);

  if (!atClient) {
    return <Layout loading />;
  }

  return <Frontpage />;
};
