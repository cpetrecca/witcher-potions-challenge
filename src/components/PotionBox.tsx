import { Box, Icon, Center, Text, Button } from "@chakra-ui/react";
import { GiPotionBall } from "react-icons/gi";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { PotionType } from "./../config/PotionConfig";
import { useContext } from "react";
import { PotionContext } from "../store/potion-context";

type Props = {
  potionId: PotionType;
  name: string;
  color: string;
  width: string;
  amount: number;
};

const PotionBox: React.FC<Props> = ({
  potionId,
  name,
  color,
  amount,
  width,
}) => {
  const { addPotion, removePotion } = useContext(PotionContext);

  const addPotionHandler = () => {
    addPotion(potionId);
  };

  const removePotionHandler = () => {
    removePotion(potionId);
  };

  return (
    <Box
      width={width}
      backgroundColor={color}
      pb="10px"
      borderRadius="lg"
      border="1px solid lightgray"
    >
      <Center>
        <Icon as={GiPotionBall} />
        {name}
      </Center>
      <Center>
        <Button colorScheme="gray" size="xs" onClick={addPotionHandler}>
          <AddIcon />
        </Button>
        <Text px="10px"> {amount} </Text>
        <Button colorScheme="gray" size="xs" onClick={removePotionHandler}>
          <MinusIcon />
        </Button>
      </Center>
    </Box>
  );
};

export default PotionBox;
