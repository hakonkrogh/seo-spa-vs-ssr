import View from "../shared/frontpage/view";
import dataLoader from "../shared/frontpage/data-loader";

const Frontpage = data => {
  return <View {...data} />;
};

Frontpage.getInitialProps = () => {
  return dataLoader();
};

export default Frontpage;
