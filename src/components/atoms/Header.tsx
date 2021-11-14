import React, { ReactElement } from 'react';

import styled from '@emotion/styled';

const StyledDiv = styled.div`
  width: 100%;
  min-width: 1100px;
  height: 50px;
  background-color: #ff5959;
  position: absolute;
  font-size: 20px;
  display: flex;
  padding: 0 10px;
  flex-direction: row-reverse;
  box-sizing: border-box;
  align-items: center;
  font-weight: bold;
  color: #233142;
`;

const Header = (): ReactElement => {
  return <StyledDiv>BannerMaker</StyledDiv>;
};

export default Header;
