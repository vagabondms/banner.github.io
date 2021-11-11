import React, { ReactElement, useEffect } from 'react';

import useCanvasRef from '@hooks/useCanvasRef';
import { useData } from '@hooks/useContext';
const Canvas = (): ReactElement => {
  const { title, subTitle, tag, height, width, fontSize } = useData();
  const [ref, canvas, ctx] = useCanvasRef();

  useEffect(() => {
    if (canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.width = Number(width);
      canvas.height = Number(height);
      ctx.font = `${fontSize}px san-serif`;
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';

      ctx.font = `${fontSize}px san-serif`;
      ctx.fillText(title, canvas.width / 2, (canvas.height * 2) / 5);
      ctx.font = `${Number(fontSize) * 0.7}px san-serif`;
      ctx.fillText(subTitle, canvas.width / 2, (canvas.height * 3) / 5);
      ctx.font = `${Number(fontSize) * 0.5}px san-serif`;
      ctx.fillText(tag, canvas.width / 2, (canvas.height * 4) / 5);
    }
  }, [title, ctx, canvas, width, height, subTitle, tag, fontSize]);

  return <canvas ref={ref} style={{ border: '1px solid black' }}></canvas>;
};

export default Canvas;
