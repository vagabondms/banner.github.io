import React, { forwardRef } from 'react';

import { useData } from '@hooks/useData';

/*
  구현 조건
  1. 제목만 있을 때
  햣2. 제목과 부제목만 있을 때,
  3. 부제목과 태그만 있을 때.

  --> 이때 사용자들이 제목을 입력하지 않고 부제목이나 태그만 먼저 입력하는 경우에 대한 대응이 필요.



   */
const Preview = forwardRef<HTMLDivElement>((_, ref) => {
  const { title, subTitle, tag, font, width, height, backgroundColor, fontColor } = useData();

  return (
    <div
      ref={ref}
      style={{
        width: Number(width),
        height: Number(height),
        font,
        backgroundColor,
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        justifyContent: 'center',
        color: fontColor,
      }}
    >
      <div
        style={{ display: 'inline-block', fontSize: 40, borderBottom: `1px solid ${fontColor}`, marginBottom: 10, marginTop: 50 }}
      >
        {title}
      </div>
      <div style={{ fontSize: 25, marginBottom: 50 }}>{subTitle}</div>
      <div style={{ fontSize: 15 }}>{tag}</div>
    </div>
  );
});
Preview.displayName = 'Preview';

export default Preview;
