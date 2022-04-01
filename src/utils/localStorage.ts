import { Data } from '@data/data';

import { isJSON } from './data';

export const setDataInLocalStorage = (key: string, data: Data): void => {
  const stringifiedData = JSON.stringify(data);
  localStorage.setItem(key, stringifiedData);
  return;
};

export const getDataFromLocalStorage = (key: string): Data | void => {
  const data = localStorage.getItem(key) ?? '';
  if (isJSON(data)) {
    const parsedData = JSON.parse(data);
    return parsedData;
  }
};
