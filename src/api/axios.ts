import axios from "axios";
import { TGetRequest } from "../types";

export const BASE_URL = "https://mytickets-cms.herokuapp.com/api";

export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

client.interceptors.request.use((config) => {
  const token = localStorage.getItem("ourToken");
  const userToken = token ? `Bearer ${token}` : "";
  config.headers = {
    ...config.headers,

    Authorization: userToken, //TO ADD
  };
  return config;
});

client.interceptors.response.use(
  (sucRes) => {
    //TODO: modify response
    console.log("success");
    return sucRes;
  },
  (errRes) => {
    // errorHandling(errRes); // TODO: implement this method
    return Promise.reject(errRes);
  }
);
//TODO: add mapper function that takes the models as a paramete to the get request.
//make this parameter as a type object that takes a url and anything we need to pass.
//
export const getRequest = async (getReqParams: TGetRequest) => {
  const response = await client.get(getReqParams.url, getReqParams.params);
  return response;
};

export const postRequest = async (postReqParams: TGetRequest) => {
  const response = await client.post(postReqParams.url, postReqParams.params);
  return response;
};

export const putRequest = async (putReqParams: TGetRequest) => {
  const response = await client.put(putReqParams.url, putReqParams.params);
  return response;
};

export const deleteRequest = async (deleteReqParams: TGetRequest) => {
  const response = await client.delete(deleteReqParams.url, deleteReqParams.params);
  return response;
};
