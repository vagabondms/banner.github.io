import React from 'react';

// import Canvas from './components/atoms/Canvas';
import BackgroundBox from '@organisms/BackgroundBox';
import FontBox from '@organisms/FontBox';
import InputBox from '@organisms/InputBox';

function App() {
  return (
    <>
      <InputBox></InputBox>
      <FontBox></FontBox>
      <BackgroundBox />
    </>
  );
}

export default App;
