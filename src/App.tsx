import React, { ReactElement, useState, useRef } from 'react';

import Button from '@atoms/Button';
import ButtonWrapper from '@atoms/ButtonWrapper';
import Header from '@atoms/Header';
import { Layout } from '@atoms/Layout';
import { Provider } from '@hooks/useData';
import Banner from '@molecules/Banner';
import BackgroundBox from '@organisms/BackgroundBox';
import InputBox from '@organisms/InputBox';
import Preview from '@organisms/Preview';
import capture from 'html2canvas';
const App = (): ReactElement => {
  const [visible, setVisible] = useState(false);
  const [capturedResult, setCapturedResult] = useState<HTMLCanvasElement>();
  const bannerRef = useRef<HTMLDivElement>(null);

  const onClosePreview = () => {
    setVisible(false);
  };

  const captureImage = async () => {
    if (bannerRef.current) {
      const result = await capture(bannerRef.current);
      if (result) {
        setCapturedResult(result);
      }
    }
  };

  return (
    <>
      <Header />
      <Layout>
        <Provider>
          <Banner ref={bannerRef}></Banner>
          <InputBox></InputBox>
          <BackgroundBox />
        </Provider>
        <ButtonWrapper>
          <Button
            text="미리보기"
            onClick={() => {
              setVisible(true);
              captureImage();
            }}
          ></Button>
        </ButtonWrapper>

        <Preview capturedResult={capturedResult} visible={visible} onClosePreview={onClosePreview}></Preview>
      </Layout>
    </>
  );
};

export default App;
