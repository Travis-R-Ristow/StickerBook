import styled from "styled-components";

import { ContentBox } from "../Shared/styles";

export const NavBar = styled.div`
  background: var(--green);
  width: 100%;
  justify-content: space-evenly;

  & > div {
    margin: 1rem;
    justify-content: center;
    width: -webkit-fill-available
  }
  
  & > div:hover {
    scale: 105%;
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ToolBar = styled.div`
  background: var(--green);
  margin: 1rem 0;
  justify-content: space-evenly;
  padding: 0.5rem;

  & > div {
    min-width: 4rem;
  }

  & > div:hover {
    scale: 105%;
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Wrapper = styled.div`
  display: block;
  width: 100%;
`;

export const FolderWrapper = styled.div`
  justify-content: space-evenly;
  width: 75%;
  margin: auto;
  flex-wrap: wrap;
  
  &.slim {
    height: 15vh;
    overflow: auto;
  }
`;

export const Folder = styled(ContentBox)`
  min-width: 5rem;
`;

export const StickerWrapper = styled.div`
  flex-wrap: wrap;
  justify-content: center;

  & > img {
    width: auto;
    height: 12rem;
  } 


  & > img:hover {
    scale: 105%;
    rotate: var(--rand-img-rotate);
  }
`;
