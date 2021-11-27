import { css } from '@emotion/react';

const defaultFlex = css`
  display: flex;
  align-items: center;
  text-align: center;
  -webkit-flex-align: center;
`;

export const centering = css`
  justify-content: center;
  ${defaultFlex}
`;

export const spaceBetween = css`
  ${defaultFlex}
  justify-content: space-between;
`;

export default {
  centering,
  spaceBetween,
};
