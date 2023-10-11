import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeletone from "./GameCardSkeletone";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
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
        {isLoading &&  skeletones.map(skeletone => <GameCardContainer><GameCardSkeletone key={skeletone}></GameCardSkeletone></GameCardContainer>)}
        {data.map((game) => (
          <GameCardContainer><GameCard key={game.id} game={game} /></GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
