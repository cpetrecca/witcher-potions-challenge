import { render, screen } from "@testing-library/react";

import PotionBox from "./PotionBox";
const DUMMY_POTION = {
  potionId: 0,
  name: "testName",
  color: "red",
  amount: 0,
  width: "20%",
};

describe("<PotionBox />", () => {
  test("Should display the potion namel.", () => {
    render(<PotionBox {...DUMMY_POTION} />);
    const potionName = screen.getByText(DUMMY_POTION.name);
    expect(potionName).toBeInTheDocument;
  });
  test("Should show potion amount.", () => {
    render(<PotionBox {...DUMMY_POTION} />);
    const potionAmount = screen.getByText(DUMMY_POTION.amount);
    expect(potionAmount).toBeInTheDocument;
  });
});
