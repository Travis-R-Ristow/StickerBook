import styled from "styled-components";

export const StickerImg = styled.img`
  width: auto;
  height: 6rem;

  &.big {
    height: 12rem;
  }

  &:hover {
    scale: 105%;
    rotate: var(--rand-img-rotate);
  }
`;
