import styled from 'styled-components';

export const Btn = styled.button`
  width: 175px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #f0f0f3;
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  outline: none;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  background-color: transparent;
  box-shadow: -7px -7px 25px 0 #b4b4b4, 10px 10px 20px 0 #ffffff;
  
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus-visible {
    transform: scale(1.2);
  }
`;