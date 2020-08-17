import styled from "styled-components";

const SearchInput = styled.input`
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 1rem center;
  background-size: 10%;
  padding: 0.5rem 1rem 0.5rem 3.5rem;
  border: 0.2rem solid ${({ cardType, theme }) => theme[cardType]};
  border-radius: 1rem;
  outline: none;

  @media (min-width: 1024px) {
    width: 40%;
    height: 5rem;
    padding-left: 5rem;
    font-size: 1.8rem;
  }
`;

export default SearchInput;
