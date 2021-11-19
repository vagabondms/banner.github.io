import React, { CSSProperties, forwardRef, ReactElement, ReactNode } from 'react';

import styled from '@emotion/styled';
import { justifying } from '@styles/css';

const StyledDiv = styled.div`
  ${justifying.centering}
  flex-direction: column;
  overflow: hidden;
  padding: 20px 0;
  position: relative;
`;
type TBannerBackground = {
  children: ReactElement[] | ReactNode;
  style: CSSProperties;
};

const BannerBackground = forwardRef<HTMLDivElement, TBannerBackground>(
  ({ children, ...rest }: TBannerBackground, ref): ReactElement => {
    return (
      <StyledDiv ref={ref} {...rest}>
        {children}
      </StyledDiv>
    );
  },
);

BannerBackground.displayName = 'BannerBackground';

export default BannerBackground;
