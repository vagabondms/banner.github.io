import React, { ReactElement } from 'react';

import styled from '@emotion/styled';

export interface IWrapperBoxProps {
  children: ReactElement | ReactElement[];
}

const StyledDivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: 'center';
  padding: 5px;
`;

const WrapperBox = ({ children }: IWrapperBoxProps): ReactElement => {
  return <StyledDivWrapper>{children}</StyledDivWrapper>;
};

export default WrapperBox;
