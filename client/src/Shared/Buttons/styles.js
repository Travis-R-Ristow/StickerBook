import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  width: fit-content;
  min-width: 5rem;

  border: 3px dashed #333;
  border-radius: 10px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;

  &.red {
    background-color: #ff6f61;
  }
  &.green {
    background-color: #008000;
  }

  &:hover {
    &.red {
      background-color: #ff8c61;
    }
    &.green {
      background-color: #4caf50;
    }

    transform: rotate(var(--rand-img-rotate)) scale(1.05);
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(2px) scale(0.98);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
