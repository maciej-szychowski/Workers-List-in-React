import React, { Component } from "react";
import { Link } from "react-router-dom";
import { routes } from "route/Route.js";
import styled from "styled-components";
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 55rem;

  & > input,
  & > textarea,
  & > div {
    position: relative;
    margin-top: 1.2rem;
    outline: none;
    font-family: inherit;
    width: 80%;
    font-size: ${({ theme }) => theme.s};
    color: ${({ dark, theme, cardType }) => dark && theme[cardType]};

    @media (min-width: 760px) {
      font-size: ${({ theme }) => theme.l};
      margin-top: 2rem;
    }
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({ dark, theme, cardType }) => dark && theme[cardType]};
  }

  & > input,
  & > textarea {
    background-color: ${({ dark }) => dark && "black"};
  }

  & > input {
    position: relative;
    border-bottom: 1px solid ${({ theme, cardType }) => theme[cardType]};
    transition: border-bottom 0.1s ease-in;
  }

  & > textarea {
    border-bottom: 0.1rem solid ${({ theme, cardType }) => theme[cardType]};
    margin-bottom: 4rem;
    transition: border 0.1s linear;
  }

  & > *:not(textarea):focus {
    border-bottom: 0.2rem solid ${({ theme, cardType }) => theme[cardType]};
  }

  & > textarea:focus {
    border-bottom: 0.2rem solid ${({ theme, cardType }) => theme[cardType]};
  }

  @media (min-width: 500px) {
    width: 70%;
  }
`;

const Info = styled.div`
  color: rgb(239, 1, 1);
  text-align: center;
`;

const RadioWrapper = styled.div`
  display: flex;
  font-size: 1.2rem;
  color: grey;
  justify-content: center;

  & > div {
    margin-left: 1rem;

    & > label {
      margin-left: 0.2rem;
    }
  }
`;

const SectionWrapper = styled.div`
  font-size: 1.4rem;
  color: grey;
  text-align: center;
`;

const LabelWrapper = styled.div``;

const Label = styled.label``;

const ButtonStyle = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media (min-width: 760px) {
    font-size: ${({ theme }) => theme.xl};
    padding: 1.6rem;
  }
`;

class Form extends Component {
  state = {
    id: null,
    name: "",
    surname: "",
    section: "",
    earnings: "",
    description: "",
    currency: "PLN",
  };

  handleInputs = (e) => {
    if (e.target.type === "radio") {
      this.setState({
        section: e.target.id,
      });
    } else {
      const value =
        e.target.value.charAt(0).toUpperCase() +
        e.target.value.slice(1).toLowerCase();
      this.setState({
        [e.target.name]: value,
      });
    }
  };
  componentDidMount() {
    const {
      id,
      name,
      surname,
      description,
      earnings,
      section,
    } = this.props.editedWorker;
    if (this.props.editedWorker) {
      this.setState({
        id,
        name,
        surname,
        description,
        earnings,
        section,
      });
    }
  }

  render() {
    const {
      cardType,
      addNewWorker,
      isValidate,
      message,
      editedWorker,
      dark,
    } = this.props;
    return (
      <Wrapper>
        <FormWrapper cardType={cardType} dark={dark}>
          {!isValidate && <Info>{message}</Info>}
          <Input
            name="name"
            placeholder="Imię"
            value={this.state.name}
            onChange={(e) => this.handleInputs(e)}
          />
          <Input
            name="surname"
            placeholder="Nazwisko"
            value={this.state.surname}
            onChange={(e) => this.handleInputs(e)}
          />
          <Input
            name="earnings"
            type="number"
            placeholder="Wynagrodzenie"
            value={this.state.earnings}
            onChange={(e) => this.handleInputs(e)}
          />
          <SectionWrapper>Dział</SectionWrapper>
          <RadioWrapper>
            <LabelWrapper>
              <Input
                type="radio"
                name="section"
                id="IT"
                checked={this.state.section === "IT" && true}
                onChange={(e) => this.handleInputs(e)}
              />
              <Label>IT</Label>
            </LabelWrapper>
            <LabelWrapper>
              <Input
                type="radio"
                name="section"
                id="Administracja"
                checked={this.state.section === "Administracja" && true}
                onChange={(e) => this.handleInputs(e)}
              />
              <Label>Administracja</Label>
            </LabelWrapper>
            <LabelWrapper>
              <Input
                type="radio"
                name="section"
                id="Handlowiec"
                checked={this.state.section === "Handlowiec" && true}
                onChange={(e) => this.handleInputs(e)}
              />
              <Label>Handlowiec</Label>
            </LabelWrapper>
          </RadioWrapper>
          <Input
            tag="textarea"
            name="description"
            placeholder="Opis pracownika"
            maxLength={600}
            value={this.state.description}
            onChange={(e) => this.handleInputs(e)}
          />
          <ButtonStyle
            cardType={cardType}
            large="true"
            onClick={(e) => addNewWorker(e, this.state)}
            as={Link}
            to={routes.main}
          >
            {editedWorker ? "Edytuj" : "Dodaj"}
          </ButtonStyle>
        </FormWrapper>
      </Wrapper>
    );
  }
}

export default Form;
