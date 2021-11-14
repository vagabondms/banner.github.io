import React, { ReactElement } from 'react';

import styled from '@emotion/styled';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  width: 650px;
  margin: 15px 0;
`;
type TButtonWrapper = {
  children: ReactElement;
};
const ButtonWrapper = ({ children }: TButtonWrapper): ReactElement => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default ButtonWrapper;
