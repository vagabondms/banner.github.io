import React, { ReactElement } from 'react';

import Divider from '@atoms/Divider';
import GithubIcon from '@atoms/GithubIcon';
import { colors, fonts } from '@css';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${colors.black};
  ${fonts.buttonSize}
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  font-weight: bold;
  color: ${colors.red};
  z-index: 10;
  border-bottom: 1px solid #b3b1b5;
`;

const StyledA = styled.a`
  margin-top: 4px;
`;

const Header = (): ReactElement => {
  return (
    <StyledDiv>
      <StyledA
        style={{ marginTop: 4 }}
        href="https://github.com/vagabondms/banner.github.io"
        title="repo"
        target="_blank"
        rel="noreferrer"
      >
        <GithubIcon />
      </StyledA>
      <Divider dividerType="vertical" />
      <div>BannerMaker</div>
    </StyledDiv>
  );
};

export default Header;