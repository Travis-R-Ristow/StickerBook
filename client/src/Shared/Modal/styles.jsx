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

export const Title = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 3rem;
  justify-content: center;
  margin-bottom: 1rem;
  border-bottom: solid 0.25rem green;
`;

export const ChildWrapper = styled.div`
  flex-direction: column; 
  justify-content: center;
`;
