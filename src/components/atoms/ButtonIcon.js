import styled, { css } from "styled-components";
import Button from "components/atoms/Button";

const ButtonIcon = styled(Button)`
  display: block;
  width: 3.5rem;
  height: 3.5rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70%;
  border-radius: 20%;
  background-color: transparent;

  &.active {
    background-color: ${({ details }) => (details ? "transparent" : "white")};
  }

  @media (min-width: 760px) {
    width: 4rem;
    height: 4rem;
  }

  @media (min-width: 1024px) {
    width: 5.5rem;
    height: 5.5rem;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      text-decoration: none;
      width: 6rem;
      height: 2.6rem;
      line-height: 2.6rem;
      border-radius: 2rem;
      background-color: ${({ bg }) => bg};
      background-size: 28%;
      background-position: 0.5rem center;
      padding: 0 0.2rem 0 1.5rem;
      font-size: 1rem;
    `}
`;

export default ButtonIcon;
