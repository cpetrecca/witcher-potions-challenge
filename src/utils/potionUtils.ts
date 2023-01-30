import { IDamageOutput } from "../dataModels/Potion";

export const attacksToStringOp = (attack: IDamageOutput, i: number) => {
  return `Attack ${i}:Used ${attack.amountOfPotionsUsed} different potions and dealed ${attack.attackDamage*100}% damage.`;
};

export const totalAttackDamageToString = (totalDamage:number) => {return `The total damage bonus is ${totalDamage*100}%.`};
