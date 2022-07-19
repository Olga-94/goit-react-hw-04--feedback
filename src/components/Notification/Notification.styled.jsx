import styled from 'styled-components';

export const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: #3c3c3c;
  & svg {
    margin-left: 10px;
  }
`;