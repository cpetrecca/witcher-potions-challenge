import { Box, Text } from "@chakra-ui/react";
import estrige from "./../assets/images/estrige.png";
import { IDamageOutput } from "../dataModels/Potion";
import {attacksToStringOp, totalAttackDamageToString} from "../utils/potionUtils"

type Props = {
  attackResult: IDamageOutput[];
  totalDamageBonus: number;
};

const PotionAttackResult: React.FC<Props> = ({
  attackResult,
  totalDamageBonus,
}) => {
  const totalDamageBonusInPercentil = totalAttackDamageToString(totalDamageBonus);
  const attackResultToString= attackResult.map((attack, i)=>{return attacksToStringOp(attack, i+1)})
  return (
    <Box
      borderRadius="sm"
      color="white"
      width="90%"
      backgroundImage={`url(${estrige})`}
      backgroundPosition="left top"
      backgroundRepeat="no-repeat"
      bgSize="100px "
      border="1px solid #800000"
      mt="10px"
      p="10px"
      minH="100px"
    >
      {attackResultToString.map((attack, i) => {
        return (
          <Text key={i} ml="100px">
            {attack}
          </Text>
        );
        
      })}
      <Text  ml="100px">{totalDamageBonusInPercentil}</Text>
    </Box>
  );
};

export default PotionAttackResult;
