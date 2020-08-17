import styled, { css } from "styled-components";

const Button = styled.button`
  width: ${({ large }) => (large ? "12rem" : "5rem")};
  height: 2.2rem;
  padding: 0.5rem 0.5rem;
  border: none;
  border-radius: 2rem;
  outline: none;
  color: white;
  font-size: ${({ theme }) => theme.m};
  background-color: ${({ theme, cardType }) => theme[cardType]};

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: ${({ theme }) => theme.m};
      padding: 0.2rem 0.5rem;
      height: 2.2rem;
    `}

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export default Button;
