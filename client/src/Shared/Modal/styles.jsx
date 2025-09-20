import styled from "styled-components";

export const StyledModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  
  .no-scroll {
    overflow: hidden;
  }
`;

export const StyledModal = styled.div`
  width: 60vw;
  height: 60vh;
  margin: auto;
`;
