import React, { ReactElement, forwardRef } from 'react';

type TPreviewProps = {
  visible: boolean;
  onClosePreview: () => void;
};

const Preview = forwardRef<HTMLDivElement, TPreviewProps>(({ visible, onClosePreview }: TPreviewProps, ref): ReactElement => {
  const onClickClose = () => {
    onClosePreview();
  };

  return (
    <>
      <div
        ref={ref}
        style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          visibility: visible ? 'visible' : 'hidden',
          background: 'rgba(204,204,204,0.97)',
          opacity: 0.97,
          padding: 20,
        }}
      >
        <div onClick={onClickClose} style={{ position: 'absolute', right: 20, top: 20 }}>
          x
        </div>
      </div>
    </>
  );
});
Preview.displayName = 'Preview';

export default Preview;
