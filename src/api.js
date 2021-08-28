import axios from 'axios';

export const pullData = (set) => axios.get('https://demo5115615.mockable.io/dbnew').then(({ data }) => set(data.dates));