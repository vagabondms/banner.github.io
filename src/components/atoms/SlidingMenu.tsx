import React, { ReactNode, ReactElement } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

type TSlidingMenuProps = {
  children?: ReactNode;
  visible: boolean;
};

const handleVisible = ({ visible }: TSlidingMenuProps) => {
  switch (visible) {
    case true:
      return css`
        visibility: visible;
      `;
    case false:
      return css`
        visibility: hidden;
      `;
    default:
      return css``;
  }
};

const StyledDiv = styled.div`
  height: 100% - 50px;
  margin-top: 50px;
  width: 300px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #7281945f;
  z-index: 1;
  ${handleVisible}
`;

const SlidingMenu = ({ children, ...rest }: TSlidingMenuProps): ReactElement => {
  return <StyledDiv {...rest}>{children}</StyledDiv>;
};

export default SlidingMenu;
