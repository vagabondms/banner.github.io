import React from 'react';

import styled from '@emotion/styled';

const ToggleOuter = styled.div`
  width: 50px;
  position: relative;
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  background-color: #ff5959;
`;

const ToggleInner = styled.div``;

const Toggle = () => {
  return (
    <ToggleOuter>
      <ToggleInner />
    </ToggleOuter>
  );
};

export default Toggle;
