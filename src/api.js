export const pullData = (set) => {
  (
  fetch('https://demo5115615.mockable.io/dbnew')
    .then((resp) => resp.json())
    .then((json) => {
      set(json.dates);
    })
)}