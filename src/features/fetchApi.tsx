
import { IUsers, IRooms, IBookings } from './interfaces';


export const fetchApi = async (body: string | IUsers | IRooms | IBookings, method: string, url: string) => {
    try {
      const response = await fetch(url, {
        method: method,
        mode: "cors",
        headers: {
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