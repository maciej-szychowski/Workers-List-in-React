import React from "react";
import styled from "styled-components";
import AppContext from "context";
import Input from "components/atoms/Input";
import moonIcon from "assets/icons/brightness.svg";
import sunIcon from "assets/icons/brightness2.svg";

const Wrapper = styled.div`
  position: absolute;
  width: 3.4rem;
  height: 1.8rem;

  input[type="checkbox"]:before {
    background-color: ${({ theme, cardType }) => theme[cardType]};
  }

  input:checked[type="checkbox"]:before {
    left: 1.7rem;
    background-color: rgb(111, 114, 114);
  }

  input:checked[type="checkbox"] {
    background-color: ${({ theme, cardType }) => theme[cardType]};
  }

  input[type="checkbox"] {
    position: relative;
    top: 0;
    left: 0;
    -webkit-appearance: none;
    width: 3.4rem;
    height: 1.8rem;
    background-color: rgb(68, 68, 68);
    outline: none;
    border-radius: 2rem;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    transition: 0.2s background-color ease-in;
  }

  input[type="checkbox"]:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 2%;
    transform: translateY(-50%);
    height: 1.6rem;
    width: 1.6rem;
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.2s left ease-in, 0.2s background-color;
    z-index: 3;
  }

  @media (min-width: 760px) {
    width: 4rem;
    height: 2.2rem;

    input:checked[type="checkbox"]:before {
      left: 2rem;
    }

    input[type="checkbox"] {
      width: 4rem;
      height: 2.2rem;
    }
  }

  @media (min-width: 1024px) {
    width: 5rem;
    height: 2.8rem;

    input:checked[type="checkbox"]:before {
      left: 2.5rem;
    }

    input[type="checkbox"] {
      width: 5rem;
      height: 2.8rem;
    }

    input[type="checkbox"]:before {
      height: 2.4rem;
      width: 2.4rem;
    }
  }
`;

const ContainerMoon = styled.img`
  position: absolute;
  top: 50%;
  right: 0.4rem;
  transform: translateY(-50%);
  z-index: 2;
  height: 60%;

  @media (min-width: 1024px) {
    height: 70%;
  }
`;

const ContainerSun = styled.img`
  position: absolute;
  top: 50%;
  left: 0.4rem;
  transform: translateY(-50%);
  z-index: 2;
  height: 60%;

  @media (min-width: 1024px) {
    height: 70%;
  }
`;

const StyleInput = styled(Input)``;

const CheckInput = ({ cardType }) => (
  <AppContext.Consumer>
    {(context) => (
      <Wrapper cardType={cardType}>
        <ContainerMoon src={moonIcon} />
        <ContainerSun src={sunIcon} />
        <StyleInput
          type="checkbox"
          onChange={context.changeColor}
          checked={context.isDark}
        ></StyleInput>
      </Wrapper>
    )}
  </AppContext.Consumer>
);

export default CheckInput;
