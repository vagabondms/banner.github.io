import React, { ReactElement, useLayoutEffect, useRef } from 'react';

import BannerWrapper from '@atoms/BannerWrapper';
import Button from '@atoms/Button';
import ButtonWrapper from '@atoms/ButtonWrapper';
import { Layout } from '@atoms/Layout';
import ModalWrapper from '@atoms/ModalWrapper';

type TPreviewProps = {
  visible: boolean;
  onClosePreview: () => void;
  capturedResult?: HTMLCanvasElement;
};

const Preview = ({ visible, onClosePreview, capturedResult }: TPreviewProps): ReactElement => {
  const previewRef = useRef<HTMLDivElement>(null);

  const onClickClose = () => {
    if (previewRef.current) {
      previewRef.current.innerHTML = '';
    }

    onClosePreview();
  };

  const onClickDownload = () => {
    const link = document.createElement('a');
    link.download = '배너.png';
    link.href = capturedResult?.toDataURL() ?? '';
    link.click();
  };

  useLayoutEffect(() => {
    if (capturedResult) {
      if (previewRef.current) {
        previewRef.current.appendChild(capturedResult);
      }
    }
  }, [capturedResult]);

  return (
    <>
      <ModalWrapper display={visible}>
        <Layout>
          <BannerWrapper ref={previewRef} />
          <ButtonWrapper>
            <Button text="닫기" onClick={onClickClose} style={{ width: 100, zIndex: 1 }}></Button>
            <Button text="다운로드" onClick={onClickDownload} style={{ width: 100, zIndex: 1 }}></Button>
          </ButtonWrapper>
        </Layout>
      </ModalWrapper>
    </>
  );
};

export default Preview;
