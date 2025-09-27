import { useEffect, useRef } from "react";

import { ContentBox } from "../styles";
import { ChildWrapper, StyledModal, StyledModalBackground, Title } from "./styles";

export const Modal = ({ title, children, setModalClose = () => { } }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const modalElm = modalRef.current;
    if (!modalElm) {
      return () => { }
    }

    const handleBackgroundClick = ({ target }) => {
      if (target !== modalElm) {
        setModalClose();
      }
    };

    if (modalElm) {
      document.addEventListener('mousedown', handleBackgroundClick);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleBackgroundClick);
    };
  }, []);

  return (
    <StyledModalBackground>
      <StyledModal ref={modalRef}>
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
