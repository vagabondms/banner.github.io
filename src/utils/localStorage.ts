export const setDataInLocalStorage = (key: string, data: Record<string, string | number>): void => {
  const stringifiedData = JSON.stringify(data);
  localStorage.setItem(key, stringifiedData);
  return;
};

export const getDataFromLocalStorage = (key: string): Record<string, string | number> => {
  const data = localStorage.getItem(key) ?? '';
  const parsedData = JSON.parse(data);
  return parsedData;
};
