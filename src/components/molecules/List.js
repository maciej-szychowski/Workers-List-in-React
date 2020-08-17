import React, { Component } from "react";
import styled from "styled-components";
import Button from "components/atoms/Button";

const Wrapper = styled.div`
  align-self: center;
  width: 90%;
  max-width: 80rem;
`;

const Container = styled.div`
  width: 17rem;
  z-index: 999;
  position: relative;
  margin-bottom: 0.5rem;
`;

const StyledButton = styled(Button)`
  z-index: 99;
  border: 0.2rem solid rgb(255, 255, 255);
  font-size: 1rem;
  width: 4rem;
  &:hover {
    opacity: 1;
  }

  @media (min-width: 760px) {
    font-size: 1.2rem;
    width: 5rem;
    height: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
    width: 6.5rem;
    height: 3rem;
  }
`;

const ListUl = styled.ul`
  position: absolute;
  z-index: -1;
  padding: 1.5rem 0.5rem 1rem 0.2rem;
  margin-top: -0.8rem;
  background-color: ${({ cardType, theme }) => theme[cardType]};
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  color: rgb(255, 255, 255);
`;

const Item = styled.li`
  list-style-type: none;
  font-size: 1rem;
  margin-left: 0.7rem;
  padding: 0.2rem;
  transition: transform 0.1s ease-out;

  &:hover {
    cursor: pointer;
    transform: translateX(3%);
  }

  @media (min-width: 760px) {
    font-size: 1.2rem;
  }

  @media (min-width: 760px) {
    font-size: 1.4rem;
  }
`;

class List extends Component {
  state = {
    hover: false,
  };

  onHover = () => {
    this.setState({
      hover: true,
    });
  };

  offHover = () => {
    this.setState({
      hover: false,
    });
  };
  render() {
    const { cardType, sortList } = this.props;
    const { hover } = this.state;
    return (
      <Wrapper>
        <Container>
          <StyledButton
            secondary
            cardType={cardType}
            onMouseEnter={this.onHover}
            onMouseLeave={this.offHover}
          >
            Sortuj
          </StyledButton>
          {hover && (
            <ListUl
              cardType={cardType}
              onMouseEnter={this.onHover}
              onMouseLeave={this.offHover}
            >
              <Item
                name="alphabeticallyName"
                onClick={() => sortList("alphabeticallyName")}
              >
                Alfabetycznie imie
              </Item>
              <Item
                name="alphabeticallySurname"
                onClick={() => sortList("alphabeticallySurname")}
              >
                Alfabetycznie nazwisko
              </Item>
              <Item
                name="earningsAscending"
                onClick={() => sortList("earningsAscending")}
              >
                Zarobki rosnąco
              </Item>
              <Item
                name="earningsDescending"
                onClick={() => sortList("earningsDescending")}
              >
                Zarobki malejąco
              </Item>
            </ListUl>
          )}
        </Container>
      </Wrapper>
    );
  }
}

export default List;
