import { useEffect, useRef } from "react";

import { ContentBox } from "../styles";
import { ChildWrapper, StyledModal, StyledModalBackground, Title } from "./styles";

export const Modal = ({ title, children, setModalClose = () => { } }) => {
  const modalBackgroundRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const modalBackgroundElm = modalBackgroundRef.current;
    if (!modalBackgroundElm) {
      return () => { }
    }

    const handleBackgroundClick = ({ target }) => {
      if (target === modalBackgroundElm) {
        setModalClose();
      }
    };

    if (modalBackgroundElm) {
      document.addEventListener('mousedown', handleBackgroundClick);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleBackgroundClick);
    };
  }, []);

  return (
    <StyledModalBackground ref={modalBackgroundRef}>
      <StyledModal>
        <ContentBox>
          {title &&
            <Title>
              {title}
            </Title>
          }
          {children &&
            <ChildWrapper>
              {children}
            </ChildWrapper>}
        </ContentBox>
      </StyledModal>
    </StyledModalBackground>);
}
