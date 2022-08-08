export const STATUSES = Object.freeze({
  PICKED: "picked",
  FREE: "free",
  CHOICE: "choice",
});

export const SEAT_SVG =
  '<svg width="100%" height="100%" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.75 52.5C15.825 52.5 17.5 50.825 17.5 48.75V45H42.5V48.75C42.5 50.825 44.175 52.5 46.25 52.5C48.325 52.5 50 50.825 50 48.75V42.5C50 39.75 47.75 37.5 45 37.5H15C12.25 37.5 10 39.75 10 42.5V48.75C10 50.825 11.675 52.5 13.75 52.5ZM50 25H52.5C53.875 25 55 26.125 55 27.5V30C55 31.375 53.875 32.5 52.5 32.5H50C48.625 32.5 47.5 31.375 47.5 30V27.5C47.5 26.125 48.625 25 50 25ZM7.5 25H10C11.375 25 12.5 26.125 12.5 27.5V30C12.5 31.375 11.375 32.5 10 32.5H7.5C6.125 32.5 5 31.375 5 30V27.5C5 26.125 6.125 25 7.5 25ZM42.5 32.5H17.5V12.5C17.5 9.75 19.75 7.5 22.5 7.5H37.5C40.25 7.5 42.5 9.75 42.5 12.5V32.5Z" /></svg>';

export const setStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorageItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
