import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeletone from "./GameCardSkeletone";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
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
        spacing={10}
        padding={10}
      >
        {isLoading &&  skeletones.map(skeletone => <GameCardSkeletone key={skeletone}></GameCardSkeletone>)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
