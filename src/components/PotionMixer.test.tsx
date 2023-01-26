import { potions } from "./../config/PotionConfig";
import { render, screen } from "@testing-library/react";
import { PotionContextProvider } from "../store/potion-context";
import PotionMixer from "./PotionMixer";

describe("<PotionMixer />", () => {
  test("Should display the same amount of PotionBoxes than potions in the config", () => {
    render(
      <PotionContextProvider>
        <PotionMixer />
      </PotionContextProvider>
    );
    const potionBoxs = screen.getAllByTestId("potion-box");
    expect(potionBoxs.length).toBe(potions.length);
  });
});
