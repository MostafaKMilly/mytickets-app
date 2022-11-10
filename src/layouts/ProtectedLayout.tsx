import React from "react";
import { QueryClient } from "@tanstack/react-query";
import { LoaderFunctionArgs, Outlet, redirect } from "react-router-dom";
import API from "../client/api";

const userInfoQuery = {
  queryKey: ["UserInfo"],
  queryFn: () => API.get("users/me"),
};

const loader = (client: QueryClient) => async ({request }: LoaderFunctionArgs) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/login");
  }
  const user =
    client.getQueryData(userInfoQuery.queryKey) ??
    (await client.fetchQuery(userInfoQuery));
  if (!user) {
    localStorage.clear();
    return redirect("/login");
  }
};

export const ProtectedLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

ProtectedLayout.loader = loader;
