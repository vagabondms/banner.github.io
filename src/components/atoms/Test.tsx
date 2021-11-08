import React from 'react';

import { useData } from '@hooks/useContext';

const Test = () => {
  const { title, subTitle, tag, height, width } = useData();
  return (
    <>
      <div>{title}</div>
      <div>{subTitle}</div>
      <div>{tag}</div>
      <div>{height}</div>
      <div>{width}</div>
    </>
  );
};
export default Test;
