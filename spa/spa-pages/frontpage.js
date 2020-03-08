import { useState, useEffect } from "react";

import Layout from "../shared/layout";
import View from "../shared/frontpage/view";
import dataLoader from "../shared/frontpage/data-loader";

export default () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    (async function load() {
      const r = await dataLoader();

      setData(r);
    })();
  }, []);

  if (!data) {
    return <Layout loading>Getting frontpage data...</Layout>;
  }

  return <View {...data} />;
};
