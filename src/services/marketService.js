import { FOUR_COINS, FETCH_COINS } from "../routes/ThirdPartyApi";
import http from "./httpService";

export async function getMarketTrends() {
  try {
    const { data } = await http.get(`${FOUR_COINS}`);
    return data;
  } catch (err) {
    let error = {};
    if (err && err.response.data) {
      error = { message: err.response.data.message };
    } else {
      error = { message: "NetWork Error" };
    }
    return error;
  }
}

export async function getAllCoins() {
  try {
    const { data } = await http.get(`${FETCH_COINS}`);
    return data;
  } catch (err) {
    let error = {};
    if (err && err.response.data) {
      error = { message: err.response.data.message };
    } else {
      error = { message: "NetWork Error" };
    }
    return error;
  }
}

