import React, { CSSProperties, forwardRef, ReactElement, ReactNode } from 'react';

import styled from '@emotion/styled';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 20px 0;
  box-sizing: border-box;
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
