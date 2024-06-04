//This is a util to clear local storage when needed.
//LocalStorage name (string) as argument.

export const ClearLocalStorage = (storage: string) => {
  localStorage.removeItem(storage);
};
