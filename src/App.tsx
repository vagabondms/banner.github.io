import React, { ReactElement } from 'react';

import Button from '@atoms/Button';
import { Layout } from '@atoms/Layout';
import Preview from '@atoms/Preview';
import { Provider } from '@hooks/useData';
import BackgroundBox from '@organisms/BackgroundBox';
import InputBox from '@organisms/InputBox';
const App = (): ReactElement => {
  return (
    <Layout>
      <Provider>
        <Preview></Preview>
        <InputBox></InputBox>
        <BackgroundBox />
      </Provider>
      <Button text="Download" onClick={() => {}}></Button>
    </Layout>
  );
};

export default App;
