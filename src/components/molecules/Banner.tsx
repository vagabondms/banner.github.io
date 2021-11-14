import React, { forwardRef } from 'react';

import BannerBackground from '@atoms/BannerBackground';
import BannerText from '@atoms/BannerText';
import BannerWrapper from '@atoms/BannerWrapper';
import { useData } from '@hooks/useData';

const Preview = forwardRef<HTMLDivElement>((_, ref) => {
  const { title, subTitle, tag, font, width, height, backgroundColor, fontColor } = useData();

  return (
    <BannerWrapper>
      <BannerBackground
        ref={ref}
        style={{
          width: Number(width),
          height: Number(height),
          font,
          backgroundColor,
          color: fontColor,
        }}
      >
        <BannerText
          style={{
            fontSize: 45,
            borderBottom: subTitle ? `3px solid ${fontColor}` : 'none',
            fontWeight: 'bold',
            height: 55,
          }}
        >
          {title}
        </BannerText>
        {subTitle && <BannerText style={{ fontSize: 25, marginTop: 10 }}>{subTitle}</BannerText>}
        {tag && <BannerText style={{ fontSize: 15, position: 'absolute', bottom: 40 }}>{tag}</BannerText>}
      </BannerBackground>
    </BannerWrapper>
  );
});
Preview.displayName = 'Preview';

export default Preview;
