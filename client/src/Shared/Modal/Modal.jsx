import { useEffect } from "react";

import { ContentBox } from "../styles";
import { StyledModal, StyledModalBackground } from "./styles";

export const Modal = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <StyledModalBackground>
      <StyledModal>
        <ContentBox>
          {children}
        </ContentBox>
      </StyledModal>
    </StyledModalBackground>);
}
