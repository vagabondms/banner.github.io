import React, { ReactElement } from 'react';

import Divider from '@atoms/Divider';
import GithubIcon from '@atoms/GithubIcon';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  width: 100%;
  min-width: 1100px;
  height: 50px;
  background-color: #ff5959;
  font-size: 20px;
  display: flex;
  padding: 10px;
  flex-direction: row-reverse;
  align-items: center;
  font-weight: bold;
  color: #233142;
  z-index: 0;
`;

const Header = (): ReactElement => {
  return (
    <StyledDiv style={{ zIndex: 10 }}>
      <a href="https://github.com/vagabondms/banner.github.io" title="repo" target="_blank" rel="noreferrer">
        <GithubIcon />
      </a>
      <Divider dividerType="vertical" />
      <div>BannerMaker</div>
    </StyledDiv>
  );
};

export default Header;
