import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const useScreenShots = (gameId: number) =>
  useQuery({
    queryKey: ["games", gameId],
    queryFn: () =>
      apiClient.get(`/games/${gameId}/screenshots`).then((res) => res.data),
  });

export default useScreenShots;
