import React, { ReactElement } from 'react';

import styled from '@emotion/styled';

export interface IBoxWrapperProps {
  children: ReactElement | ReactElement[];
}

const StyledDivWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: 'center';
  width: 500px;
  height: 150px;
  border: 1px solid lightgrey;
  padding: 10px;
`;

const BoxWrapper = ({ children }: IBoxWrapperProps): ReactElement => {
  return <StyledDivWrapper>{children}</StyledDivWrapper>;
};

export default BoxWrapper;
