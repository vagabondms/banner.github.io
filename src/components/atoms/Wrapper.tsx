import React, { ReactElement, forwardRef } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { justifying, spacing } from '@styles/css';

type TWrapperType = 'box' | 'button' | 'sub' | 'banner' | 'label';

type TWrapperProps = {
  children: ReactElement[] | ReactElement;
  wrapperType: TWrapperType;
};

const handleWrapperType = ({ wrapperType }: TWrapperProps) => {
  switch (wrapperType) {
    case 'box':
      return css`
        width: 700px;
        ${justifying.spaceBetween}
      `;
    case 'button':
      return css`
        flex-direction: row-reverse;
        ${justifying.spaceBetween}
        margin-top : 10px;
        width: 700px;
      `;
    case 'sub':
      return css`
        flex-direction: column;
        ${justifying.centering}
      `;
    case 'banner':
      return css`
        ${justifying.centering}
        height: 410px;
      `;
    case 'label':
      return css`
        display: flex;
        flex-direction: column;
        text-align: left;
      `;
    default:
      return css``;
  }
};

const StyledDiv = styled.div`
  ${handleWrapperType};
`;

const Wrapper = forwardRef<HTMLDivElement, TWrapperProps>(({ children, ...rest }: TWrapperProps, ref): ReactElement => {
  return (
    <StyledDiv ref={ref} {...rest}>
      {children}
    </StyledDiv>
  );
});

Wrapper.displayName = 'Wrapper';

export default Wrapper;
