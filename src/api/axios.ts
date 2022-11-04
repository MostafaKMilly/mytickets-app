import axios from "axios";
import { TGetRequest } from "../types";
import { errorHandling } from "./utils/errorHandling";

export const client = axios.create({
  baseURL: "https://mytickets-cms.herokuapp.com/api",
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
  console.log(response.data);
  return response.data;
};

export const postRequest = (url: string, payload: any) => {
  client.post(`/${url}`, payload).then((response) => {
    console.log(response.data);
  });
};

export const putRequest = (url: string, payload: any) => {
  client
    .patch(`/${url}`, payload)
    .then((response) => console.log(response.data));
};

export const deleteRequest = (url: string) => {
  client.delete(`/${url}`).then((response) => console.log(response));
};
