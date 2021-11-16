import React, { ReactElement } from 'react';

import styled from '@emotion/styled';

const StyledDiv = styled.div`
  margin-bottom: 20px;
  padding-top: 20px;
  border-bottom: 1px solid lightgrey;
  width: 110px;
`;
const Divider = (): ReactElement => {
  return <StyledDiv></StyledDiv>;
};

export default Divider;
