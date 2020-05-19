export const formatNumber = number =>
  number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0;

export const log = (...args) => console.log(...args);
