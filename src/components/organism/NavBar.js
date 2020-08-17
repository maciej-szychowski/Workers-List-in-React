import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { routes } from "route/Route";
import ButtonIcon from "components/atoms/ButtonIcon";
import logoIcon from "assets/icons/logo.svg";
import libraryIcon from "assets/icons/library.svg";
import searchIcon from "assets/icons/person_search.svg";
import addIcon from "assets/icons/add.svg";

const Wrapper = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 5rem;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: ${({ theme, cardType }) => theme[cardType]};

  @media (min-width: 760px) {
    width: 6rem;
  }

  @media (min-width: 1024px) {
    width: 8rem;
  }
`;

const LogoWrapper = styled.div`
  margin-top: 2rem;
  height: 10%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 90%;

  & > a {
    margin-top: 0.7rem;
  }
`;

const NavBar = ({ cardType, details }) => (
  <Wrapper cardType={cardType}>
    <LogoWrapper>
      <ButtonIcon icon={logoIcon} />
    </LogoWrapper>
    <ButtonWrapper>
      <ButtonIcon
        as={NavLink}
        to={routes.main}
        icon={libraryIcon}
        details={details}
      />
      <ButtonIcon as={NavLink} to={routes.add} icon={addIcon} />
      <ButtonIcon as={NavLink} to={routes.search} icon={searchIcon} />
    </ButtonWrapper>
  </Wrapper>
);

export default NavBar;
