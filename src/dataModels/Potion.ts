export type IPotion = {
  id: number;
  name: string;
  color: string;
  amount: number;
};

export type IPotionDamage = {
  amountOfPotions: number;
  overallDamage: number;
};

export type IDamageOutput = {
  amountOfPotionsUsed: number;
  attackDamage: number;
};
