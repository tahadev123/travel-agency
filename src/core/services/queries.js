import { useQuery } from "@tanstack/react-query";

import api from "../config/api";

const useGetAllTour = () => {
  const queryFn = async () => await api.get("/tour");
  const queryKey = ["tour-data"];

  return useQuery({ queryFn, queryKey });
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

export {
  useGetAllTour,
  useGetUserData,
  useGetUserTours,
  useGetUserTransactions,
};
