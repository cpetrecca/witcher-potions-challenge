import { render, screen } from "@testing-library/react";
import PotionAttackResult from "./PotionAttackResult";
import { IDamageOutput } from "../dataModels/Potion";
import {attacksToStringOp, totalAttackDamageToString} from "../utils/potionUtils"

const DUMMY_ATTACK: IDamageOutput[] = [
  { amountOfPotionsUsed: 5, attackDamage: 0.25 },
  { amountOfPotionsUsed: 1, attackDamage: 0.3 },
  { amountOfPotionsUsed: 1, attackDamage: 0.3 },
];

const DUMMY_TOTALDAMAGE: number =0.31;

describe("<PotionAttackResult />", () => {
  test("Should display all attacks.", () => {
    render(
      <PotionAttackResult
        attackResult={DUMMY_ATTACK}
        totalDamageBonus={DUMMY_TOTALDAMAGE}
      />
    );
    const attack1 = screen.getByText(
      attacksToStringOp(DUMMY_ATTACK[0], 1)
    );
    const attack2 = screen.getByText(
      attacksToStringOp(DUMMY_ATTACK[1], 2)
    );
    const attack3 = screen.getByText(
      attacksToStringOp(DUMMY_ATTACK[2], 3)
    );
    expect(attack1).toBeInTheDocument;
    expect(attack2).toBeInTheDocument;
    expect(attack3).toBeInTheDocument;
  });
  test("Should show total damage bounus.", () => {
    render(
      <PotionAttackResult
        attackResult={DUMMY_ATTACK}
        totalDamageBonus={DUMMY_TOTALDAMAGE}
      />
    );
    const totalDamage = screen.getByText(totalAttackDamageToString(DUMMY_TOTALDAMAGE));
    expect(totalDamage).toBeInTheDocument;
  });
});
