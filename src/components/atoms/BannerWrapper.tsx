import React, { forwardRef, ReactElement } from 'react';

import styled from '@emotion/styled';

const StyledDiv = styled.div`
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

type TBannerWrapperProps = {
  children?: ReactElement;
};

const BannerWrapper = forwardRef<HTMLDivElement, TBannerWrapperProps>(({ children }: TBannerWrapperProps, ref): ReactElement => {
  return <StyledDiv ref={ref}>{children}</StyledDiv>;
});

BannerWrapper.displayName = 'BannerWrapper';

export default BannerWrapper;
