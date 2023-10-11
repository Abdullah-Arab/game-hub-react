import { FaThumbsUp } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";
import { BiMehBlank } from "react-icons/bi";
import { Text } from "@chakra-ui/react";

interface Props {
  raiting: number;
}
const Emojy = ({ raiting }: Props) => {
  const emojyMap: { [key: number]: any } = {
    3: <BiMehBlank />,
    4: <FaThumbsUp />,
    5: <GiBullseye />,
  };
  if (raiting < 3) {
    return <Text fontSize={"2xl"}>{emojyMap[3]}</Text>;
  }
  return <Text marginTop={2} fontSize={"2xl"}>{emojyMap[raiting]}</Text>;
};

export default Emojy;
