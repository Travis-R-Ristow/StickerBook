import { useEffect, useRef } from "react";

import { updateImgRotate } from "../helpers";
import { StickerImg } from "./styles";

export const Sticker = ({ src, key, alt, className }) => {
  const stickerRef = useRef();

  useEffect(() => {
    const stickerElm = stickerRef.current;
    if (!stickerElm) {
      return () => { }
    }

    stickerElm?.addEventListener('mouseenter', updateImgRotate)

    return (() => {
      stickerElm?.removeEventListener('mouseenter', updateImgRotate)
    })
  }, []);

  return (
    <StickerImg src={src} key={key ? key : 'sticker'} alt={alt ? alt : 'sticker'} ref={stickerRef} className={className} />
  )
}
