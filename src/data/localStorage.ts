import { localStorageObj } from "../features/interfaces";

export function saveInLocalStorage(
  key: string,
  userObj: localStorageObj
): void {
  localStorage.setItem(key, JSON.stringify(userObj));
}

export function getObjInLocalStorage(clave: string): localStorageObj | null {
  const value = localStorage.getItem(clave);
  if (value) {
    const dataValue = JSON.parse(value);
    return dataValue;
  }
  return null;
}

export function deleteDataLocalStorage(key: string): void {
  localStorage.removeItem(key);
}
