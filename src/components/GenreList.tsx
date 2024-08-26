import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "./../services/img-url";
import AsideSkeleton from "./AsideSkeleton";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  const setSelectedGenreId = useGameQueryStore((s) => s.setGenereId);
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return null;

  return (
    <>
      <Heading marginBottom={3} fontSize="3xl">
        Genres
      </Heading>
      {isLoading && skeletons.map((_) => <AsideSkeleton key={_} />)}
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize={8}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => setSelectedGenreId(genre.id)}
                whiteSpace="normal"
                textAlign="left"
                variant="link"
                fontSize="lg"
                fontWeight={genre.id === genreId ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
