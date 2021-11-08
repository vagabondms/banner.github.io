import React, { ReactElement, useRef, useEffect } from 'react';

const Canvas = (): ReactElement => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const ctx = canvas?.current?.getContext('2d');
  useEffect(() => {
    if (ctx) {
      ctx.font = '30px serif';
      ctx?.fillText('안녕', 20, 20);
    }
  });

  return <canvas ref={canvas} style={{ width: 1000, height: 300 }}></canvas>;
};

export default Canvas;
