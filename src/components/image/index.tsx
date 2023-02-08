import { useEffect, useState } from "react";

 type PropsType = {
    alt: string,
    src: string,
    width?: number,
    height?: number
 }
 
 const LazyImage  = (props: PropsType) => {
    const [loaded, setLoaded] = useState(false);
    const {alt,  src,width, height } = props

 useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoaded(true);
    };
  }, [src]);

    return loaded  ? <img width={width} height={height} src={src} alt={alt} /> : null;

 }

 export default LazyImage 