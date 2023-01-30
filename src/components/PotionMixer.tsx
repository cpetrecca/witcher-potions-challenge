import { Box, Center, Stack, Button, Icon } from "@chakra-ui/react";
import { GiAssassinPocket } from "react-icons/gi";
import PotionBox from "./PotionBox";
import { useContext } from "react";
import { PotionContext } from "../store/potion-context";
import PotionAttackResult from "./PotionAttackResult";
import usePotionMixer from "../hooks/usePotionMixer";




const PotionMixer = () => {
  const { potions, resetPotions} = useContext(PotionContext);
  const {calculateBestAttackCombination, bestAttackCombination, totalDamageBonus}=usePotionMixer(potions);
  const potionBoxWith = 100 / potions.length + 1;
  const spacing = potionBoxWith / potions.length + 1;
  return (
    <Center>
      <Box w="95%" minWidth={400} h="100%" mt="5px">
        <Stack direction={"row"} spacing={spacing + "px"}>
          {potions.map((potion) => {
            return (
              <PotionBox
                data-testid="potion-box"
                key={potion.id}
                potionId={potion.id}
                width={potionBoxWith + "%"}
                color={potion.color}
                name={potion.name}
                amount={potion.amount}
              />
            );
          })}
        </Stack>
        <Center>
          <Button size="sm" mt="10px" onClick={calculateBestAttackCombination} >
            <Icon as={GiAssassinPocket} mr="10px" />
            Attack!
          </Button>
          <Button size="sm" ml="10px" mt="10px" onClick={resetPotions}>
            reset!
          </Button>
        </Center>
        <Center>
        {bestAttackCombination.length>0 && <PotionAttackResult totalDamageBonus={totalDamageBonus} attackResult={bestAttackCombination} />}
        </Center>
      </Box>
    </Center>
  );
};

export default PotionMixer;
