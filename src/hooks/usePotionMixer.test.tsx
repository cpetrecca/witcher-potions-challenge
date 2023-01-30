import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import UsePotionMixer from "./usePotionMixer";
import { IPotion, IDamageOutput } from "./../dataModels/Potion";
import { attacksToStringOp } from "./../utils/potionUtils";

const CASE_TEST_1 = {
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
const CASE_TEST_2 = {
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

type Props = {
  potions: IPotion[];
};

const bestAttackCombinationToStringToCompare = (
  bestAttackCombination: IDamageOutput[]
) => {
  return bestAttackCombination
    .map((el, i) => {
      return attacksToStringOp(el, i + 1);
    })
    .join(",");
};

const ToTestPotionMixerHook: React.FC<Props> = ({ potions }) => {
  const {
    calculateBestAttackCombination,
    bestAttackCombination,
    totalDamageBonus,
  } = UsePotionMixer(potions);
  return (
    <div>
      <button
        data-testid="trigger-hook"
        onClick={calculateBestAttackCombination}
      ></button>

      <p data-testid="total-damage">{totalDamageBonus}</p>
      <p data-testid="potion-usage">
        {bestAttackCombinationToStringToCompare(bestAttackCombination)}
      </p>
    </div>
  );
};

describe("UsePotions Custom Hook.", () => {
  test("Should bring proper total damage case 1.", () => {
    render(<ToTestPotionMixerHook potions={CASE_TEST_1.potions} />);
    const callHook = screen.getByTestId("trigger-hook");
    fireEvent.click(callHook);
    const totalDamage = screen.getByTestId("total-damage");
    expect(+totalDamage.textContent!).toBe(CASE_TEST_1.totalDamage);
  });
  test("Should bring proper total damage case 2.", () => {
    render(<ToTestPotionMixerHook potions={CASE_TEST_2.potions} />);
    const callHook = screen.getByTestId("trigger-hook");
    fireEvent.click(callHook);
    const totalDamage = screen.getByTestId("total-damage");
    expect(+totalDamage.textContent!).toBe(CASE_TEST_2.totalDamage);
  });
  test("Should bring proper best case potion usage case 1.", () => {
    render(<ToTestPotionMixerHook potions={CASE_TEST_1.potions} />);
    const callHook = screen.getByTestId("trigger-hook");
    fireEvent.click(callHook);
    const potionUsage = screen.getByTestId("potion-usage");
    expect(potionUsage.textContent).toBe(
      bestAttackCombinationToStringToCompare(CASE_TEST_1.potionUsage)
    );
  });
  test("Should bring proper best case potion usage case 2.", () => {
    render(<ToTestPotionMixerHook potions={CASE_TEST_2.potions} />);
    const callHook = screen.getByTestId("trigger-hook");
    fireEvent.click(callHook);
    const potionUsage = screen.getByTestId("potion-usage");
    expect(potionUsage.textContent).toBe(
      bestAttackCombinationToStringToCompare(CASE_TEST_2.potionUsage)
    );
  });
});
