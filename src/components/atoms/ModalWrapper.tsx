import React, { CSSProperties, ReactElement } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

type TModalWrapper = {
  children: ReactElement;
  display: boolean;
};

const handleDisplay = ({ display }: TModalWrapper) => {
  switch (display) {
    case true:
      return css`
        display: block;
      `;
    case false:
      return css`
        display: none;
      `;
    default:
      return css``;
  }
};

const StyledDiv = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(204, 204, 204, 0.97);
  ${handleDisplay}
`;

const ModalWrapper = ({ children, display }: TModalWrapper): ReactElement => {
  return <StyledDiv display={display}>{children}</StyledDiv>;
};

export default ModalWrapper;
