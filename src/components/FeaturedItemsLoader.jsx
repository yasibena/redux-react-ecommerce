import React from "react";
import ContentLoader from "react-content-loader";

const FeaturedItemsLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1300}
    height={200}
    viewBox="0 0 1300 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="20" y="20" rx="2" ry="2" width="240" height="160" /> 
    <rect x="280" y="20" rx="2" ry="2" width="240" height="160" /> 
    <rect x="540" y="20" rx="2" ry="2" width="240" height="160" /> 
    <rect x="800" y="20" rx="2" ry="2" width="240" height="160" /> 
    <rect x="1060" y="20" rx="2" ry="2" width="240" height="160" />
  </ContentLoader>
);

export default FeaturedItemsLoader;
