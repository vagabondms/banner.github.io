import React, { ReactElement, useRef, CSSProperties, ReactNode, useState } from 'react';

import BackgroundBox from '@components/BackgroundBox';
import Banner from '@components/Banner';
import Button from '@components/Button';
import Header from '@components/Header';
import InputBox from '@components/InputBox';
import SlidingMenu from '@components/SlidingMenu';
import Wrapper from '@components/Wrapper';
import styled from '@emotion/styled';
import { useData } from '@hooks/useDataContext';
import capture from 'html2canvas';

export interface ILayoutProps {
  children: ReactElement[] | ReactElement | ReactNode;
  style?: CSSProperties;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: calc(100% - 50px);
  position: relative;
`;

const App = (): ReactElement => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const {
    data: { title },
  } = useData();

  const captureImage = async () => {
    const result = await capture(bannerRef.current as HTMLDivElement);
    if (result) {
      const link = document.createElement('a');
      const underbarTitle = title.replaceAll(/(\s)+/g, '_');
      link.download = `${underbarTitle}.png`;
      link.href = result?.toDataURL() ?? '';
      link.click();
    }
  };

  const handleBanner = (isOpen: boolean) => {
    setIsVisible(isOpen);
  };

  return (
    <>
      <Header />
      <StyledDiv>
        <Banner ref={bannerRef} />
        <InputBox />
        <BackgroundBox isVisible={isVisible} handleBanner={handleBanner} />
        <Wrapper wrapperType="button">
          <Button
            text="다운로드"
            buttonType="point"
            onClick={() => {
              captureImage();
            }}
          ></Button>
        </Wrapper>
        <SlidingMenu isVisible={isVisible}></SlidingMenu>
      </StyledDiv>
    </>
  );
};

export default App;
