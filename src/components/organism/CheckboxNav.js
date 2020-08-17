import React from "react";
import CheckInput from "components/molecules/CheckInput";
import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  height: 6rem;
  padding: 0 3rem;
`;

const CheckboxNav = ({ cardType }) => (
  <Wrapper>
    <CheckInput cardType={cardType} />
  </Wrapper>
);

export default CheckboxNav;
