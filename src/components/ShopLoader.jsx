import React,{useEffect,useState} from "react";
import ContentLoader from "react-content-loader";

const ShopLoader = ({ items, rectWidth = 240, rectHeight = 160, spacing = 20 }) => {
  const [columns, setColumns] = useState(5); 
  const rows = Math.ceil(items?.length / columns);
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth > 1200) {
        setColumns(5); 
      } else if (windowWidth > 768) {
        setColumns(2);
      } else {
        setColumns(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ContentLoader 
      speed={2}
      width={columns * (rectWidth + spacing)}
      height={rows * (rectHeight + spacing)}
      viewBox={`0 0 ${columns * (rectWidth + spacing)} ${rows * (rectHeight + spacing)}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      {items.map((item, index) => {
        const x = (index % columns) * (rectWidth + spacing) + spacing;
        const y = Math.floor(index / columns) * (rectHeight + spacing) + spacing;
        return (
          <rect 
            key={index}
            x={x} 
            y={y} 
            rx="2" 
            ry="2" 
            width={rectWidth} 
            height={rectHeight} 
          />
        );
      })}
    </ContentLoader>
  );
};

export default ShopLoader;
