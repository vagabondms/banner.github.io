//dummy
export const fontGenerator = (): string[] => {
  const result = [];
  for (let i = 1; i <= 5; i++) {
    result.push(`font${i}`);
  }
  return result;
};
