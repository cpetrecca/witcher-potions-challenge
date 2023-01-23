import { Box, Center, Stack, Button, Icon } from "@chakra-ui/react";
import { GiAssassinPocket } from "react-icons/gi";
import PotionBox from "./PotionBox";
import { useContext } from "react";
import { PotionContext } from "../store/potion-context";

const PotionMixer = () => {
  const { potions } = useContext(PotionContext);
  const potionBoxWith = 100 / potions.length + 1;
  const spacing = potionBoxWith / potions.length + 1;

  return (
    <Center>
      <Box w="95%" minWidth={400} h="100%" mt="5px">
        <Stack direction={"row"} spacing={spacing + "px"}>
          {potions.map((potion) => {
            return (
              <PotionBox
                key={potion.name}
                width={potionBoxWith + "%"}
                color={potion.color}
                name={potion.name}
                amount={potion.amount}
              />
            );
          })}
        </Stack>
        <Center>
          <Button size="sm" mt="10px">
            <Icon as={GiAssassinPocket} mr="10px" />
            Attack!
          </Button>
        </Center>
      </Box>
    </Center>
  );
};

export default PotionMixer;
