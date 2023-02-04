import { useEffect, useState } from "react";

 type PropsType = {
    alt: string,
    src: string,
 }
 
 const LazyImage  = (props: PropsType) => {
    const [loaded, setLoaded] = useState(false);
    const {alt,  src } = props

 useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoaded(true);
    };
  }, [src]);

    return loaded  ? <img src={src} alt={alt} /> : null;

 }

 export default LazyImage 