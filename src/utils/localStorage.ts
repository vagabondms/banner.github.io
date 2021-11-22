import { TData } from '@hooks/useBannerState';

export const setDataInLocalStorage = (key: string, data: TData): void => {
  const stringifiedData = JSON.stringify(data);
  localStorage.setItem(key, stringifiedData);
  return;
};

export const getDataFromLocalStorage = (key: string): TData | void => {
  const data = localStorage.getItem(key) ?? '';
  if (data) {
    const parsedData = JSON.parse(data);
    return parsedData;
  }
};
