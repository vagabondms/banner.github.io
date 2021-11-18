import React, { ReactElement, forwardRef } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

type TWrapperType = 'box' | 'button' | 'sub' | 'banner' | 'label';

type TWrapperProps = {
  children: ReactElement[] | ReactElement;
  wrapperType: TWrapperType;
};

const handleWrapperType = ({ wrapperType }: TWrapperProps) => {
  switch (wrapperType) {
    case 'box':
      return css`
        width: 650px;
        justify-content: space-between;
        align-items: center;
      `;
    case 'button':
      return css`
        flex-direction: row-reverse;
        justify-content: space-between;
        width: 650px;
        align-items: center;
      `;
    case 'sub':
      return css`
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      `;
    case 'banner':
      return css`
        justify-content: center;
        height: 450px;
        align-items: center;
      `;
    case 'label':
      return css`
        display: flex;
        flex-direction: column;
      `;
    default:
      return css``;
  }
};

const StyledDiv = styled.div`
  display: flex;
  margin: 5px 0;
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
