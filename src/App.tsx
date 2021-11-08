import React, { ReactElement } from 'react';

import Button from '@atoms/Button';
import Canvas from '@atoms/Canvas';
import { Layout } from '@atoms/Layout';
import Test from '@atoms/Test';
import { Provider } from '@hooks/useContext';
import BackgroundBox from '@organisms/BackgroundBox';
import FontBox from '@organisms/FontBox';
import InputBox from '@organisms/InputBox';
const App = (): ReactElement => {
  // context를 사용해서 canvas와 각각의 Box에 value를 주입해야함.
  return (
    <Layout>
      <Layout style={{ backgroundColor: 'white', width: 600 }}>
        <Provider>
          <Test></Test>
          <Canvas></Canvas>
          <InputBox></InputBox>
          <FontBox></FontBox>
          <BackgroundBox />
        </Provider>

        <Button text="Download" onClick={() => {}}></Button>
      </Layout>
    </Layout>
  );
};

export default App;
