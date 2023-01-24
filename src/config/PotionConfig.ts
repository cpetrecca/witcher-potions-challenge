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
