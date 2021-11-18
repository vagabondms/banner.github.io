import React, { ReactElement } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export type TSlidingModalProps = {
  children?: ReactElement[] | ReactElement;
  visible: boolean;
};

const handleVisible = ({ visible }: TSlidingModalProps) => {
  switch (visible) {
    case true:
      return css`
        width: 190px;
        opacity: 1;
      `;
    case false:
      return css`
        width: 0px;
        opacity: 0;
        * {
          display: none;
        }
      `;
    default:
      return css``;
  }
};

const StyledDiv = styled.div`
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #7281945f;
  z-index: 1;

  ${handleVisible}
  transition : 0.5s
`;

const SlidingModalInnerWrapper = styled.div`
  padding: 40px;
`;

const SlidingModal = ({ children, ...rest }: TSlidingModalProps): ReactElement => {
  return (
    <StyledDiv {...rest}>
      <SlidingModalInnerWrapper> {children}</SlidingModalInnerWrapper>
    </StyledDiv>
  );
};

export default SlidingModal;
