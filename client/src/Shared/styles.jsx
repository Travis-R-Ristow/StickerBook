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
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  text-align: center;
  width: 25%;

  & > h3 {
    font-size: 2rem;
  }
  
  & > p {
    font-size: 1.5rem;
    margin: 0;
  }
  
  &:hover:not(.not-clickable) {
    cursor: pointer;
    scale: 105%;
    text-decoration: underline;
  }
`;
