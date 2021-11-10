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
  return (
    <Layout>
      <Provider>
        <Test></Test>
        <Canvas></Canvas>
        <InputBox></InputBox>
        <FontBox></FontBox>
        <BackgroundBox />
      </Provider>
      <Button text="Download" onClick={() => {}}></Button>
    </Layout>
  );
};

export default App;
