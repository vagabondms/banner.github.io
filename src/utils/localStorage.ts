import { TData } from '@hooks/useDataContext';

import { isJSON } from './data';

export const setDataInLocalStorage = (key: string, data: TData): void => {
  const stringifiedData = JSON.stringify(data);
  localStorage.setItem(key, stringifiedData);
  return;
};

export const getDataFromLocalStorage = (key: string): TData | void => {
  const data = localStorage.getItem(key) ?? '';
  if (isJSON(data)) {
    const parsedData = JSON.parse(data);
    return parsedData;
  }
};
