import React from "react";
import NavBar from "components/organism/NavBar";
import CheckboxNav from "components/organism/CheckboxNav";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 4rem;
  display: flex;
  flex-direction: column;
`;

const UserTemplate = ({ children, cardType, details }) => (
  <>
    <CheckboxNav cardType={cardType} />
    <NavBar cardType={cardType} details={details} />
    <Wrapper>{children}</Wrapper>
  </>
);

export default UserTemplate;
