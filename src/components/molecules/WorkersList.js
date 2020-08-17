import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import articleIcon from "assets/icons/article.svg";

const Table = styled.table`
  align-self: center;
  width: 90%;
  max-width: 80rem;
  box-shadow: ${({ dark, theme, cardType }) =>
    dark
      ? `${0}px ${0}px ${16}px ${-7}px ${theme[cardType]}`
      : `${0}px ${0}px ${16}px ${-7}px rgba(0, 0, 0, 1)`};
  font-size: ${({ theme }) => theme.xs};

  @media (min-width: 500px) {
    font-size: ${({ theme }) => theme.s};
  }

  @media (min-width: 760px) {
    font-size: ${({ theme }) => theme.m};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.l};
  }
`;

const TableHead = styled.thead`
  background-color: ${({ theme, cardType }) => theme[cardType]};
`;

const TableRow = styled.tr`
  text-align: center;
`;

const TableHeadCol = styled.th`
  padding: 0.2rem 0.1rem;
  min-width: 1.8rem;

  @media (min-width: 760px) {
    padding: 0.5rem 0.1rem;
  }
`;

const TableBody = styled.tbody``;

const TableBodyCol = styled.td`
  height: 2.2rem;

  @media (min-width: 1024px) {
    height: 2.4rem;
  }
`;

const ImgContainer = styled.div`
  background-image: url(${articleIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1.4rem;
  background-color: ${({ cardType, theme }) => theme[cardType]};
  width: 100%;
  height: 100%;
  padding: 0.5rem 0.2rem;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  @media (min-width: 760px) {
    background-size: 1.8rem;
  }

  @media (min-width: 760px) {
    background-size: 2.2rem;
  }
`;

class WorkersList extends Component {
  state = {
    isRedirect: false,
    id: "",
  };

  handleClick = (e) => {
    const id = e.target.parentElement.parentElement.id;
    this.setState({
      isRedirect: true,
      id,
    });
  };

  render() {
    const { workers, cardType, dark } = this.props;
    const { isRedirect } = this.state;
    if (isRedirect) {
      return <Redirect to={`/${cardType}/${this.state.id}`} />;
    }
    return (
      <Table dark={dark} cardType={cardType}>
        <TableHead cardType={cardType}>
          <TableRow>
            <TableHeadCol>Imię</TableHeadCol>
            <TableHeadCol>Nazwisko</TableHeadCol>
            <TableHeadCol>Dział</TableHeadCol>
            <TableHeadCol>Wynagrodzenie</TableHeadCol>
            <TableHeadCol>Waluta</TableHeadCol>
            {cardType === "main" && <TableHeadCol></TableHeadCol>}
          </TableRow>
        </TableHead>
        <TableBody>
          {workers.map((worker) => {
            const earnings = parseFloat(worker.earnings).toFixed(2);
            return (
              <TableRow key={worker.id} id={worker.id}>
                <TableBodyCol>{worker.name}</TableBodyCol>
                <TableBodyCol>{worker.surname}</TableBodyCol>
                <TableBodyCol>{worker.section}</TableBodyCol>
                <TableBodyCol>{earnings}</TableBodyCol>
                <TableBodyCol>{worker.currency}</TableBodyCol>
                {cardType === "main" && (
                  <TableBodyCol onClick={(e) => this.handleClick(e)}>
                    <ImgContainer cardType={cardType} />
                  </TableBodyCol>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

export default WorkersList;
