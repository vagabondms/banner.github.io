import React, { CSSProperties, ReactElement } from 'react';

import styled from '@emotion/styled';

export interface ILayoutProps {
  children: ReactElement[] | ReactElement;
  style?: CSSProperties;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100vw;
  height: 100vh;
  background-color: #5ec59a67;
  padding: 30px;
`;

export const Layout = ({ children, ...rest }: ILayoutProps): ReactElement => {
  return <StyledDiv {...rest}>{children}</StyledDiv>;
};
