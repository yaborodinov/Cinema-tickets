const url = 'https://demo5115615.mockable.io/dbnew';

export const fetchedData = async () => {
  const response = await fetch(url);
  return await response.json();
}
