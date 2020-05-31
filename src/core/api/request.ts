const BAE_URL = 'https://api.stackexchange.com';
const API_VER = '2.2';
const KEY = process.env.REACT_APP_STACKOVERFLOW_API_KEY;

if (!KEY) {
  throw new Error(
    'Необходимо добавить ключ для STACKOVERFLOW API: REACT_APP_STACKOVERFLOW_API_KEY.',
  );
}

const signRequest = (url: string): string => `${url}&key=${KEY}`;

export const makeRequest = <T>(
  url: string,
  transformFn: Function,
): Promise<T> => fetch(signRequest(`${BAE_URL}/${API_VER}${url}`))
    .then((response) => response.json())
    .then(({ items }) => transformFn(items));
