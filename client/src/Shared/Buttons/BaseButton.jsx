import { useEffect, useRef } from "react";

import { updateImgRotate } from "../helpers";
import { StyledButton } from "./styles";

const randBtnRotate = () => updateImgRotate(5);

export const Button = ({ type = 'button', className = 'green', children, ...props }) => {
  const btnRef = useRef();

  useEffect(() => {
    const btnElm = btnRef.current;
    if (!btnElm) {
      return () => { }
    }

    btnElm?.addEventListener('mouseenter', randBtnRotate)

    return (() => {
      btnElm?.removeEventListener('mouseenter', randBtnRotate)
    })
  }, []);

  return (<StyledButton type={type} ref={btnRef} className={className} props={{ ...props }}>{children}</StyledButton>);
}
