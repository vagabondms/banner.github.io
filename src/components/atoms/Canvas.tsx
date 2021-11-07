import React, { ReactElement, useRef } from 'react';

const Canvas = (): ReactElement => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const ctx = canvas?.current?.getContext('2d');
  if (ctx) {
    ctx.font = '30px serif';
    ctx?.fillText('하이요', 0, 20);
  }

  return <canvas ref={canvas} style={{ width: 1000, height: 300 }}></canvas>;
};

export default Canvas;
