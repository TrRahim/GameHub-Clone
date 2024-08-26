import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  if (isLoading) return <Spinner />;

  if (error) throw error;

  const first = data?.results[0];

  if (first) {
    <video src={first[0]} />;
  }

  return first ? (
    <video src={first.data["max"]} controls poster={first.preview} />
  ) : null;
};

export default GameTrailer;
