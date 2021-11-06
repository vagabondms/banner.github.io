import React, { ReactElement } from 'react';

import styled from '@emotion/styled';

const StyledDiv = styled.div`
  margin: 15px 0 15px 0;
  border: 0.5px solid lightgrey;
`;

const Divider = (): ReactElement => {
  return <StyledDiv></StyledDiv>;
};

export default Divider;
