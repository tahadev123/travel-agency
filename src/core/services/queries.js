import { useQuery } from "@tanstack/react-query";

import api from "../config/api";

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

export { useGetUserData, useGetUserTours, useGetUserTransactions };
