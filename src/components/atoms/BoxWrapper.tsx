import React, { ReactElement } from 'react';

import styled from '@emotion/styled';
export interface IBoxWrapperProps {
  children: ReactElement | ReactElement[];
  name?: string;
  direction?: string;
}

const StyledDivWrapper = styled.div<IBoxWrapperProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 650px;
  padding: 5px;
  background: transparent;
  margin: 8px 0;
`;

const BoxWrapper = ({ children, name, ...rest }: IBoxWrapperProps): ReactElement => {
  return (
    <StyledDivWrapper id={name} {...rest}>
      {children}
    </StyledDivWrapper>
  );
};

export default BoxWrapper;
