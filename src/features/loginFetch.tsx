import { createAsyncThunk } from '@reduxjs/toolkit';
import {  loginInfo } from './interfaces'

import config from '../config';

const url = `${config.REACT_APP_API_URL}/login`

export const loginPost = async (body: loginInfo) => {
    try {
      const response = await fetch(url, {
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
    } catch (err) {
      console.error(err);
    }
  };