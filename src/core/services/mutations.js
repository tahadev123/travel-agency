import { useMutation, useQueryClient } from "@tanstack/react-query";

import api from "../config/api";
import { setCookie } from "../utils/cookie";

const useSendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);

  return useMutation({ mutationFn });
};

const useCheckOtp = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.post("auth/check-otp", data);

  const onSuccess = (data) => {
    setCookie("accessToken", data?.data?.accessToken, 30);
    setCookie("refreshToken", data?.data?.refreshToken, 365);
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  };

  return useMutation({ mutationFn, onSuccess });
};

const useAddToCart = () => {
  const mutationFn = (id) => api.put(`/basket/${id}`);

  return useMutation({ mutationFn });
};

const useCheckout = () => {
  const mutationFn = (data) => api.post("/order", data);

  return useMutation({ mutationFn });
};

const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.put("user/profile", data);

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  };

  return useMutation({ mutationFn, onSuccess });
};

export { useSendOtp, useCheckOtp, useAddToCart, useCheckout, useUpdateProfile };
