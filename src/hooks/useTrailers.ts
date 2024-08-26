import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const useTrailers = (gameId: number) => {
  return useQuery({
    queryKey: ["trailor", gameId],
    queryFn: () =>
      apiClient.get(`/games/${gameId}/movies`).then((res) => res.data),
  });
};

export default useTrailers;
