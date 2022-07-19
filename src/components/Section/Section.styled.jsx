import styled from 'styled-components';

export const Title = styled.h2`
  margin: 40px 0;
  text-transform: uppercase;
  font-size: ${p => p.theme.fontSizes.l};
  text-align: center;
  color: #3b3b3b;
  background-color: #ba9c9c;
  box-shadow: 10px 10px 20px 0 #ede6e6;
  & svg {
    margin-left: 20px;
  }
`;
