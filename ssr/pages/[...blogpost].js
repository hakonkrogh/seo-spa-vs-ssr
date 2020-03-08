import View from "../shared/blogpost/view";
import dataLoader from "../shared/blogpost/data-loader";

const Blogpost = data => {
  return <View {...data} />;
};

Blogpost.getInitialProps = ({ asPath }) => {
  return dataLoader({ path: asPath });
};

export default Blogpost;
