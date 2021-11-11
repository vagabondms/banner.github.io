export const fontSizeGenerator = (): number[] => {
  const result = [];
  for (let i = 20; i <= 100; i += 5) {
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
