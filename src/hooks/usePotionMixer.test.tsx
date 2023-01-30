import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import UsePotionMixer from "./usePotionMixer";
import { IPotion, IDamageOutput } from "./../dataModels/Potion";
import { attacksToStringOp } from "./../utils/potionUtils";
import { TEST_CASE_1, TEST_CASE_2 } from "../config/PotionConfig";

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
    render(<ToTestPotionMixerHook potions={TEST_CASE_1.potions} />);
    const callHook = screen.getByTestId("trigger-hook");
    fireEvent.click(callHook);
    const totalDamage = screen.getByTestId("total-damage");
    expect(+totalDamage.textContent!).toBe(TEST_CASE_1.totalDamage);
  });
  test("Should bring proper total damage case 2.", () => {
    render(<ToTestPotionMixerHook potions={TEST_CASE_2.potions} />);
    const callHook = screen.getByTestId("trigger-hook");
    fireEvent.click(callHook);
    const totalDamage = screen.getByTestId("total-damage");
    expect(+totalDamage.textContent!).toBe(TEST_CASE_2.totalDamage);
  });
  test("Should bring proper best case potion usage case 1.", () => {
    render(<ToTestPotionMixerHook potions={TEST_CASE_1.potions} />);
    const callHook = screen.getByTestId("trigger-hook");
    fireEvent.click(callHook);
    const potionUsage = screen.getByTestId("potion-usage");
    expect(potionUsage.textContent).toBe(
      bestAttackCombinationToStringToCompare(TEST_CASE_1.potionUsage)
    );
  });
  test("Should bring proper best case potion usage case 2.", () => {
    render(<ToTestPotionMixerHook potions={TEST_CASE_2.potions} />);
    const callHook = screen.getByTestId("trigger-hook");
    fireEvent.click(callHook);
    const potionUsage = screen.getByTestId("potion-usage");
    expect(potionUsage.textContent).toBe(
      bestAttackCombinationToStringToCompare(TEST_CASE_2.potionUsage)
    );
  });
});
