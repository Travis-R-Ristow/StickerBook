import styled from "styled-components";

export const Wrapper = styled.div`
  justify-content: space-evenly;
  margin: 1rem;

  &.column {
    flex-direction: column;
  }
`;

export const InputWrapper = styled(Wrapper).attrs((props) => ({
  className: "column",
}))`
  width: 65%;
  margin: auto;
`;

export const Input = styled.input`
  text-align: center;
  border-radius: 0.5rem;
  margin: 0.5rem;
  font-size: 2rem;
`;
