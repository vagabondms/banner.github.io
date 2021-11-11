import { useRef, RefObject } from 'react';

const useCanvasRef = (): [RefObject<HTMLCanvasElement>, HTMLCanvasElement | null, any] => {
  const refObj = useRef<HTMLCanvasElement>(null);
  const canvas = refObj.current;
  const ctx = canvas?.getContext('2d');
  return [refObj, canvas, ctx];
};
export default useCanvasRef;
