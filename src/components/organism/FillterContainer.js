import React, { Component } from "react";
import styled from "styled-components";
import SearchInput from "components/atoms/SearchInput";
import searchIcon from "assets/icons/search.svg";
import Input from "components/atoms/Input";

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  padding: 1rem 1rem;
  margin-top: 1rem;
  max-height: 35rem;
  
  @media (min-width: 760px) {
    height: 35vh;
    transform: translateY(15%);
  }

  & > label {
    font-size: 1rem;

    @media (min-width: 1024px) {
    font-size: 1.6rem;
  }
  }

  & > * {
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
    margin-bottom: 2rem;
  }
  }

  input[type="range"] {
    -webkit-appearance: none; 
    width: 40%; 
    background: transparent;
  }

  input[type="range"]:focus {
    outline: none; 

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    width: 50%;
    height: 8px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: ${({ theme, cardType }) => theme[cardType]};
    border-radius: 1.3px;
    border: 0.2px solid #010101;

  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1px solid #000000;
    height: 16px;
    width: 16px;
    border-radius: 3px;
    background: ${({ theme, cardType }) => theme[cardType]};
    cursor: pointer;
    margin-top: -6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
`;

const LabelWrapper = styled.div`
  font-size: ${({ theme }) => theme.s};

  & > label {
    margin-left: 0.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;

const SectionName = styled.div`
  font-size: ${({ theme }) => theme.m};
  text-align: center;
  color: ${({ cardType, theme }) => theme[cardType]};
  font-weight: ${({ theme }) => theme.semiBold};
  padding-bottom: 0.5rem;

  @media (min-width: 1024px) {
    font-size: 1.6rem;
  }
`;

const EarningsWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;

  @media (min-width: 760px) {
    font-size: ${({ theme }) => theme.m};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.l};
  }
`;

const Earnings = styled.div`
  width: 5rem;
  text-align: left;
`;

class FillterContainer extends Component {
  constructor(props) {
    super(props);
    this.filterName = this.props.filterName;
  }
  state = {
    text: "",
    section: "",
    earnings: 0,
  };

  handleChange = (e) => {
    if (e.target.name === "section") {
      this.setState({
        [e.target.name]: e.target.id,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.filterName(this.state);
    }
  }

  render() {
    const { cardType, filterValues, workers } = this.props;
    const sortedEarnings = workers
      .map((worker) => parseFloat(worker.earnings))
      .sort((a, b) => b - a);
    const maxEarnings = sortedEarnings[0];
    return (
      <Wrapper cardType={cardType}>
        <SearchInput
          icon={searchIcon}
          cardType={cardType}
          placeholder="Szukaj"
          name="text"
          value={filterValues.text}
          onChange={(e) => this.handleChange(e)}
        />
        <LabelWrapper>
          <SectionName cardType={cardType}>Dział</SectionName>
          <label>
            <Input
              type="radio"
              name="section"
              id="IT"
              value={filterValues.section}
              onChange={(e) => this.handleChange(e)}
              checked={filterValues.section === "IT" ? true : false}
            />
            IT
          </label>
          <label>
            <Input
              type="radio"
              name="section"
              id="Administracja"
              value={filterValues.section}
              onChange={(e) => this.handleChange(e)}
              checked={filterValues.section === "Administracja" ? true : false}
            />
            Administracja
          </label>
          <label>
            <Input
              type="radio"
              name="section"
              id="Handlowiec"
              value={filterValues.section}
              onChange={(e) => this.handleChange(e)}
              checked={filterValues.section === "Handlowiec" ? true : false}
            />
            Handlowiec
          </label>
          <label>
            <Input
              type="radio"
              name="section"
              id="Wszystkie"
              value={filterValues.section}
              onChange={(e) => this.handleChange(e)}
              checked={filterValues.section === "Wszystkie" ? true : false}
            />
            Wszystkie
          </label>
        </LabelWrapper>
        <EarningsWrapper>
          <label htmlFor="sallary">Zarobki</label>
          <Input
            type="range"
            min="0"
            max={maxEarnings}
            id="sallary"
            name="earnings"
            value={filterValues.earnings}
            onChange={(e) => this.handleChange(e)}
          />
          <Earnings>{filterValues.earnings} PLN</Earnings>
        </EarningsWrapper>
      </Wrapper>
    );
  }
}

export default FillterContainer;
