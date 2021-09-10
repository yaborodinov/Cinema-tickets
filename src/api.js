const url = 'https://demo5115615.mockable.io/dbnew';

export const fetchData = async () => {
  const response = await fetch(url);
  return await response.json()
}
