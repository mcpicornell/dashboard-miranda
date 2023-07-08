import { loginInfo } from "./interfaces";

const urlLogin = `https://g0mvg1qy2l.execute-api.eu-west-3.amazonaws.com/dev/login`;


export const loginPost = async (body: loginInfo) => {
  console.log(body)
  try {
    const response = await fetch(urlLogin, {
      method: "POST",
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
  } catch (error) {
    console.error(error);
    throw error;
  }
};
