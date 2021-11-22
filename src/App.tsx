import React, { ReactElement, useRef } from 'react';

import Button from '@atoms/Button';
import { Layout } from '@atoms/Layout';
import Wrapper from '@atoms/Wrapper';
import { useData } from '@hooks/useDataContext';
import Banner from '@molecules/Banner';
import Header from '@molecules/Header';
import BackgroundBox from '@organisms/BackgroundBox';
import InputBox from '@organisms/InputBox';
import capture from 'html2canvas';

const App = (): ReactElement => {
  const bannerRef = useRef<HTMLDivElement>(null);

  const {
    data: { title },
  } = useData();
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
        <Banner ref={bannerRef} />
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
        </Wrapper>
      </Layout>
    </>
  );
};

export default App;
