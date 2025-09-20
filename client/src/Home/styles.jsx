import styled from 'styled-components';

import { ContentBox } from '../Shared/styles';

export const Wrapper = styled.div`
  display: block;
  width: 100%;
`;

export const SearchWrapper = styled.div`
  margin-top: 2rem;
  justify-content: center;
`;

export const SearchInput = styled.input`
  border-radius: 1rem;
  font-size: 4rem;
  width: 75%;
  border: solid var(--border-width) green;
`;


export const ContentWrapper = styled.div`
  margin: 2rem;
  justify-content: center;
  font-weight: bold;
`;


export const ShowcaseWrapper = styled.div`
  background: darkgreen;
  height: 10vh;
  justify-content: space-evenly;
  padding: 2rem;
  
  & > img {
    scale: 150%;
  }
`;

export const ContentBlock = styled(ContentBox)`
  flex-direction: column;
  justify-content: center;
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
