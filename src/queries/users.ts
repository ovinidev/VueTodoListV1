import { useQuery } from "@tanstack/vue-query";
import { getUsers } from "../api/axiosInstance";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    staleTime: 1000 * 60 * 5,
  });
};
