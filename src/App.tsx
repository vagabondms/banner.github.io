import React, { ReactElement, useRef, useState } from 'react';

import Button from '@atoms/Button';
import { Layout } from '@atoms/Layout';
import Wrapper from '@atoms/Wrapper';
import { useData } from '@hooks/useData';
import Banner from '@molecules/Banner';
import Header from '@molecules/Header';
import BackgroundBox from '@organisms/BackgroundBox';
import InputBox from '@organisms/InputBox';
import SlidingMenu from '@organisms/SlidingMenu';
import capture from 'html2canvas';

const App = (): ReactElement => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { title } = useData();

  const captureImage = async () => {
    if (bannerRef.current) {
      const result = await capture(bannerRef.current);
      if (result) {
        const link = document.createElement('a');
        const underbarTitle = title.replaceAll(/(\s)+/g, '_');
        link.download = `${underbarTitle}.png`;
        link.href = result?.toDataURL() ?? '';
        link.click();
      }
    }
  };

  return (
    <>
      <Header />
      <Layout>
        <Banner ref={bannerRef}></Banner>
        <InputBox></InputBox>
        <BackgroundBox />
        <Wrapper wrapperType="button">
          <Button
            text="다운로드"
            buttonType="point"
            onClick={() => {
              captureImage();
            }}
          ></Button>
          <Button
            text={`추가 설정 ${visible ? '닫기' : '열기'}`}
            onClick={() => {
              setVisible(!visible);
            }}
          ></Button>
        </Wrapper>
        <SlidingMenu visible={visible}></SlidingMenu>
      </Layout>
    </>
  );
};

export default App;
