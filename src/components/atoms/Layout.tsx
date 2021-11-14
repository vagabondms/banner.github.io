import React, { CSSProperties, ReactElement, ReactNode } from 'react';

import styled from '@emotion/styled';

export interface ILayoutProps {
  children: ReactElement[] | ReactElement | ReactNode;
  style?: CSSProperties;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 1100px;
  height: 100vh;
  padding: 15px;
  box-sizing: border-box;
`;

export const Layout = ({ children, ...rest }: ILayoutProps): ReactElement => {
  return <StyledDiv {...rest}>{children}</StyledDiv>;
};