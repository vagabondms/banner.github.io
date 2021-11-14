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
  for (let i = 600; i <= 1000; i += 50) {
    result.push(i);
  }
  return result;
};

export const heightGenerator = (): number[] => {
  const result = [];
  for (let i = 250; i <= 400; i += 50) {
    result.push(i);
  }
  return result;
};
