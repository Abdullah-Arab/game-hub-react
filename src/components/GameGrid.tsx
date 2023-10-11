import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeletone from "./GameCardSkeletone";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";


interface Props{
  selectedGenre: Genre | null;
}
const GameGrid = ({selectedGenre}: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletones = [1,2,3,4,5,6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        spacing={3}
        padding={8}
      >
        {isLoading &&  skeletones.map(skeletone => <GameCardContainer key={skeletone}><GameCardSkeletone ></GameCardSkeletone></GameCardContainer>)}
        {data.map((game) => (
          <GameCardContainer key={game.id}><GameCard  game={game} /></GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
