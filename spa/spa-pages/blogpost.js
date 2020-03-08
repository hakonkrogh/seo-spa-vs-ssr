import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "../shared/layout";
import View from "../shared/blogpost/view";
import dataLoader from "../shared/blogpost/data-loader";

export default () => {
  const [data, setData] = useState(false);
  const router = useRouter();

  useEffect(() => {
    (async function load() {
      const r = await dataLoader({ path: router.asPath });

      setData(r);
    })();
  }, []);

  if (!data) {
    return <Layout loading>Getting blogpost data...</Layout>;
  }

  return <View {...data} />;
};
