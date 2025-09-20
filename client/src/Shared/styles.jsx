import styled from "styled-components";

export const HeaderWrapper = styled.div`
  justify-content: center;
  font-size: 5rem;
  color: green;
  
  & > h1, h2 {
    margin: auto;
  }
`;

export const ContentBox = styled.div`
  background: white;
  border-radius: 1rem;
  border: solid var(--border-width) green;
  margin: 1rem;
  padding: 1rem;
  text-align: center;
  width: 100%;
`;
