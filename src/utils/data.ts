export const fontSizeGenerator = (): number[] => {
  const result = [];
  for (let i = 2; i <= 30; i += 2) {
    result.push(i);
  }
  return result;
};

export const fontGenerator = (): string[] => {
  const result = [];
  for (let i = 1; i <= 5; i++) {
    result.push(`font${i}`);
  }
  return result;
};
