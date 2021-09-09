export const fetchData = async () => {
  const response = await fetch('https://demo5115615.mockable.io/dbnew');
  return await response.json()
}