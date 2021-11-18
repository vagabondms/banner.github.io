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
  margin: 0 auto;
  width: 100%;
  height: calc(100% - 50px);
  position: relative;
`;

export const Layout = ({ children, ...rest }: ILayoutProps): ReactElement => {
  return <StyledDiv {...rest}>{children}</StyledDiv>;
};
