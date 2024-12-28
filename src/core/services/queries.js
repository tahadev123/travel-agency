import { useQuery } from "@tanstack/react-query";

import api from "../config/api";
import QueryString from "qs";

const useGetTours = (query) => {
  const url = "tour?" + QueryString.stringify(query);

  const queryFn = () => api.get(url);
  const queryKey = ["tour", query];

  return useQuery({ queryFn, queryKey, enabled: false });
};

const useGetUserData = () => {
  const queryFn = async () => await api.get("user/profile");
  const queryKey = ["user-data"];

  return useQuery({ queryFn, queryKey });
};

const useGetUserTours = () => {
  const queryFn = async () => await api.get("/user/tours");
  const queryKey = ["user-tours"];

  return useQuery({ queryFn, queryKey });
};

const useGetUserTransactions = () => {
  const queryFn = async () => await api.get("/user/transactions");
  const queryKey = ["user-transactions"];

  return useQuery({ queryFn, queryKey });
};

export { useGetTours, useGetUserData, useGetUserTours, useGetUserTransactions };
