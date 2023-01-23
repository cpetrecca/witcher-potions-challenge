import { Box, Icon, Center, Text, Button } from "@chakra-ui/react";
import { GiPotionBall } from "react-icons/gi";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

type Props = {
  name: string;
  color: string;
  width: string;
  amount: number;
};

const PotionBox: React.FC<Props> = ({ name, color, amount, width }) => {
  return (
    <Box width={width} backgroundColor={color} pb="10px" borderRadius="lg" border="1px solid lightgray">
      <Center>
        <Icon as={GiPotionBall} />
        {name}
      </Center>
      <Center>
        <Button colorScheme="gray" size="xs">
          <AddIcon />
        </Button>
        <Text px="10px"> {amount}</Text>
        <Button colorScheme="gray" size="xs">
          <MinusIcon />
        </Button>
      </Center>
    </Box>
  );
};

export default PotionBox;
