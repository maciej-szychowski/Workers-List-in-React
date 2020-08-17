import React, { Component } from "react";
import AppContext from "context";
import styled from "styled-components";
import UserTemplate from "template/UserTemplate";
import DataTable from "components/organism/DataTable";
import List from "components/molecules/List";
import avatarIcon from "assets/icons/avatar.svg";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1.5rem 1rem;
  font-size: 1rem;
  height: 20rem;
  max-height: 30vh;

  @media (min-width: 760px) {
    font-size: 1.3rem;
    padding-right: 10%;
  }

  @media (min-width: 1024px) {
    font-size: 1.6rem;
    height: 30rem;
  }
`;

const AvatarWrapper = styled.div`
  background-image: url(${avatarIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  width: 5rem;
  height: 5rem;
  line-height: 5rem;

  @media (min-width: 760px) {
    width: 7rem;
    height: 7rem;
    line-height: 7rem;
  }

  @media (min-width: 1024px) {
    width: 8rem;
    height: 8rem;
    line-height: 8rem;
  }
`;

const TextWrapper = styled.div`
  background-color: ${({ theme, cardType }) => theme[cardType]};
  padding: 0.5rem 1rem;
  margin-right: -1rem;
  border-top-left-radius: 4rem;
  border-bottom-left-radius: 4rem;
  color: rgb(255, 255, 255);
  font-weight: ${({ theme }) => theme.bold};
`;

const MainView = () => (
  <AppContext.Consumer>
    {(context) => (
      <UserTemplate cardType="main">
        <Wrapper>
          <TextWrapper cardType="main">
            Zatrudnionych {context.listWorkers.length} pracowników
          </TextWrapper>
          <AvatarWrapper />
        </Wrapper>
        <List cardType="main" sortList={context.sortList} />
        <DataTable
          cardType="main"
          workers={context.listWorkers}
          dark={context.isDark}
        />
      </UserTemplate>
    )}
  </AppContext.Consumer>
);

export default MainView;
