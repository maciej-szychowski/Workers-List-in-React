import React, { Component } from "react";
import { Link } from "react-router-dom";
import { routes } from "route/Route";
import UserTemplate from "template/UserTemplate";
import AppContext from "context";
import styled from "styled-components";
import menIcon from "assets/icons/men.svg";
import womenIcon from "assets/icons/women.svg";
import ButtonIcon from "components/atoms/ButtonIcon";
import deleteIcon from "assets/icons/delete.svg";
import editIcon from "assets/icons/edit-pen.svg";

const Wrapper = styled.section`
  position: absolute;
  top: 50%;
  left: calc(50% + 2.5rem);
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 70%;
  max-width: 50rem;
  height: 50%;
  box-shadow: 0rem 0rem 1rem -0.5rem black;
  box-shadow: ${({ dark, cardType, theme }) =>
    dark
      ? `${0}rem ${0}rem ${2}rem ${-0.5}rem ${theme[cardType]}`
      : `${0}rem ${0}rem ${1}rem ${-0.5}rem black`};
`;

const SectionWrapper = styled.div`
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.light};
  font-style: italic;
  margin: 0.5rem 0 0 1rem;
`;

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.bold};
  height: 7rem;
  padding: 0 2rem;
  background-color: ${({ theme, cardType }) => theme[cardType]};
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AvatarWrapper = styled.div`
  position: absolute;
  right: 1rem;
  bottom: -2rem;
  width: 7rem;
  height: 7rem;
  background-image: url(${({ women }) => (women ? womenIcon : menIcon)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 90%;
  border-radius: 50%;
`;

const DescriptionWrapper = styled.div`
  padding: 4rem 2rem;
  height: 75%;
  font-size: ${({ theme }) => theme.l};
  font-weight: ${({ theme }) => theme.light};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  height: 2.2rem;
  width: 5rem;

  @media (min-width: 760px) {
    height: 2.5rem;
    width: 6rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  min-height: 4rem;
  background-color: ${({ theme, cardType }) => theme[cardType]};
`;

class DetailsPage extends Component {
  render() {
    const id = this.props.match.params.id;

    return (
      <AppContext.Consumer>
        {(context) => {
          const worker = context.listWorkers.find((worker) => worker.id == id);
          return (
            <UserTemplate cardType="main" details="details">
              <Wrapper cardType="main" dark={context.isDark}>
                <HeadingWrapper cardType="main">
                  <NameWrapper>
                    {`${worker.name} ${worker.surname}`}
                    <SectionWrapper>
                      <em>{worker.section}</em>
                    </SectionWrapper>
                  </NameWrapper>
                  <AvatarWrapper women={worker.isWomen} />
                </HeadingWrapper>
                <DescriptionWrapper>{worker.description}</DescriptionWrapper>
                <ButtonWrapper cardType="main">
                  <StyledButtonIcon
                    secondary="secondary"
                    bg="red"
                    icon={deleteIcon}
                    onClick={() => context.deleteWorker(worker.id)}
                    as={Link}
                    to={routes.main}
                  >
                    Usuń
                  </StyledButtonIcon>
                  <StyledButtonIcon
                    secondary="secondary"
                    bg="yellow"
                    icon={editIcon}
                    onClick={() => context.editWorker(worker)}
                    as={Link}
                    to={routes.add}
                  >
                    Edytuj
                  </StyledButtonIcon>
                </ButtonWrapper>
              </Wrapper>
            </UserTemplate>
          );
        }}
      </AppContext.Consumer>
    );
  }
}
export default DetailsPage;
