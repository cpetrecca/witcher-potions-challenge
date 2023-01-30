import {IPotion, IPotionDamage} from "./../dataModels/Potion"

export enum PotionType {Red, Blue, Green, Yellow, Gray}

export const potions: IPotion[] = [
  {id: PotionType.Red,  name: "Red", color: "red", amount: 0 },
  {id: PotionType.Blue, name: "Blue", color: "blue", amount: 0 },
  {id: PotionType.Green, name: "Green", color: "green", amount: 0 },
  {id: PotionType.Yellow, name: "Yellow", color: "yellow", amount: 0 },
  {id: PotionType.Gray, name: "Gray", color: "gray", amount: 0 },
];

export const potionDamage: IPotionDamage[] = [
  { amountOfPotions: 1, overallDamage: 0.03 },
  { amountOfPotions: 2, overallDamage: 0.05 },
  { amountOfPotions: 3, overallDamage: 0.1 },
  { amountOfPotions: 4, overallDamage: 0.2 },
  { amountOfPotions: 5, overallDamage: 0.25 },
];

export const TEST_CASE_1 = {
  potions: [
    { id: 1, name: "Red", color: "red", amount: 2 },
    { id: 2, name: "Blue", color: "blue", amount: 1 },
    { id: 3, name: "Green", color: "green", amount: 1 },
    { id: 4, name: "Yellow", color: "yellow", amount: 0 },
    { id: 5, name: "Gray", color: "gray", amount: 0 },
  ],
  totalDamage: 0.13,
  potionUsage: [
    { amountOfPotionsUsed: 3, attackDamage: 0.1 },
    { amountOfPotionsUsed: 1, attackDamage: 0.03 },
  ],
};
export const TEST_CASE_2 = {
  potions: [
    { id: 1, name: "Red", color: "red", amount: 2 },
    { id: 2, name: "Blue", color: "blue", amount: 2 },
    { id: 3, name: "Green", color: "green", amount: 1 },
    { id: 4, name: "Yellow", color: "yellow", amount: 1 },
    { id: 5, name: "Gray", color: "gray", amount: 1 },
  ],
  totalDamage: 0.31,
  potionUsage: [
    { amountOfPotionsUsed: 5, attackDamage: 0.25 },
    { amountOfPotionsUsed: 1, attackDamage: 0.03 },
    { amountOfPotionsUsed: 1, attackDamage: 0.03 },
  ],
};