import React, { ReactElement, useRef, useState } from 'react';

import Banner from '@atoms/Banner';
import Button from '@atoms/Button';
import { Layout } from '@atoms/Layout';
import { Provider } from '@hooks/useData';
import BackgroundBox from '@organisms/BackgroundBox';
import InputBox from '@organisms/InputBox';
import Preview from '@organisms/Preview';
import capture from 'html2canvas';
const App = (): ReactElement => {
  const [visible, setVisible] = useState(false);

  const bannerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const onClosePreview = () => {
    setVisible(false);
    if (previewRef && previewRef.current) {
    }
  };

  const captureImage = async () => {
    if (bannerRef.current) {
      const capturedResult = await capture(bannerRef.current);
      if (capturedResult) {
        if (previewRef.current) {
          previewRef.current.appendChild(capturedResult);
          console.log(capturedResult);
        }
      }
    }
  };

  return (
    <Layout>
      <Provider>
        <Banner ref={bannerRef}></Banner>
        <InputBox></InputBox>
        <BackgroundBox />
      </Provider>
      <Button
        text="미리보기"
        onClick={() => {
          setVisible(true);
          captureImage();
        }}
      ></Button>
      <Preview visible={visible} ref={previewRef} onClosePreview={onClosePreview}></Preview>
    </Layout>
  );
};

export default App;
