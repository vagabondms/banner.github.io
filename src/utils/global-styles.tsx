import React, { ReactElement, ReactNode } from 'react';

import { Global, css } from '@emotion/react';

const GlobalStyles = (): ReactElement => {
  return (
    <Global
      styles={css`
        html {
          height: 100vh;
          width: 100vw;
        }
        body {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
        }
      `}
    ></Global>
  );
};

export default GlobalStyles;
