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
  width: 1000px;
  height: 100%;
  background-color: #5ec59a;
  padding: 30px;
`;

export const Layout = ({ children, ...rest }: ILayoutProps): ReactElement => {
  return <StyledDiv {...rest}>{children}</StyledDiv>;
};