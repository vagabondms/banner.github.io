import React, { ReactElement, useRef, useEffect } from 'react';

import { useData } from '@hooks/useContext';
const Canvas = (): ReactElement => {
  const { title, subTitle, tag, height, width } = useData();
  const canvas = useRef<HTMLCanvasElement>(null);
  const ctx = canvas?.current?.getContext('2d');
  useEffect(() => {
    if (ctx) {
      ctx.font = '30px serif';
      ctx.fillStyle = 'red';
      ctx.textAlign = 'center';
      ctx.fillText('안녕', 20, 20);
    }
  });

  return <canvas ref={canvas} style={{ width: Number(width), height: Number(height) }}></canvas>;
};

export default Canvas;
