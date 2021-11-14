import React, { ReactElement, useState, useRef } from 'react';

import Button from '@atoms/Button';
import ButtonWrapper from '@atoms/ButtonWrapper';
import Header from '@atoms/Header';
import { Layout } from '@atoms/Layout';
import { useData } from '@hooks/useData';
import Banner from '@molecules/Banner';
import BackgroundBox from '@organisms/BackgroundBox';
import InputBox from '@organisms/InputBox';
import capture from 'html2canvas';

const App = (): ReactElement => {
  const bannerRef = useRef<HTMLDivElement>(null);
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
        <ButtonWrapper>
          <Button
            text="다운로드"
            onClick={() => {
              captureImage();
            }}
          ></Button>
        </ButtonWrapper>
      </Layout>
    </>
  );
};

export default App;
