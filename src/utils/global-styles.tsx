import React, { ReactElement } from 'react';

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
          color: white;
          background-color: #233142;
        }
      `}
    ></Global>
  );
};

export default GlobalStyles;
