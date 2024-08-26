import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import Game from "../entities/Game";

const useGame = (slug: string | number) => {
  return useQuery({
    queryKey: ["game", slug],
    queryFn: () =>
      apiClient.get<Game>("/games/" + slug).then((res) => res.data),
  });
};

export default useGame;
