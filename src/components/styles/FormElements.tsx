import styled from 'styled-components';
import { handleFlex } from './utils/helpers';

export const Form = styled.form`
  ${handleFlex('column', 'center', 'center')};
  padding: 2rem 1rem;
  width: 55rem;
  border: 2px solid purple;
  margin: 1rem auto;
`;

export const Label = styled.label`
  ${handleFlex('column', 'center', 'center')};
  padding: 1rem 0;
  width: 80%;
  span {
    display: block;
    margin-right: auto;
    font-size: 1.4rem;
    text-transform: capitalize;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  transition: ${({ theme }) => theme.transition.mainTransition};
  width: 100%;
  outline: 0;
  display: block;
  position: relative;
  font-size: 1.6rem;
  &:focus {
    width: 90%;
    /* border-bottom: 0; */
  }
  &::placeholder {
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`;

export const Select = styled.select``;
