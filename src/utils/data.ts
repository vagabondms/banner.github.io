//dummy
export const fontGenerator = (): string[] => {
  const result = [];
  for (let i = 1; i <= 5; i++) {
    result.push(`font${i}`);
  }
  return result;
};

export const widthGenerator = (): number[] => {
  const result = [];
  for (let i = 600; i <= 1000; i += 100) {
    result.push(i);
  }
  return result;
};

export const heightGenerator = (): number[] => {
  const result = [];
  for (let i = 300; i <= 500; i += 100) {
    result.push(i);
  }
  return result;
};
