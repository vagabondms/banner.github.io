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
        left: 0;
        opacity: 1;
      `;
    case false:
      return css`
        left: -190px;
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
  width: 190px;
  top: 0;
  bottom: 0;
  background-color: #3c4246;
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
