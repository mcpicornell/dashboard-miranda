import { getObjInLocalStorage } from "../data/localStorage";
import { IUsers, IRooms, IBookings, IContacts } from "./interfaces";
import fetch from "cross-fetch";



export const fetchApi = async (
  body: string | IUsers | IRooms | IBookings | IContacts,
  method: string,
  url: string,
) => {

  try {
    const token = getObjInLocalStorage("auth")?.token;
    console.log(token)
    const response = await fetch(url, {
      method: method,
      mode: "cors",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    } else {
      return await response.json();
    }
  } catch (err) {
    console.error(err);
  }
};

export const getApi = async (url: string) => {
  try {
    const token = getObjInLocalStorage("auth")?.token;
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    } else {
      return await response.json();
    }
  } catch (err) {
    console.error(err);
  }
};
