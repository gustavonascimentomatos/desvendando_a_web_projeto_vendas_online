export const setItemStorage = (key: string, value: string) => localStorage.setItem(key, value);

export const removeItemStorage = (key: string) => localStorage.removeItem(key);

export const getIntemStorage = (key: string) => localStorage.getItem(key);
