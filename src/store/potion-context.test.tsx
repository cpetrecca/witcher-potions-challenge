import { render, screen, fireEvent } from "@testing-library/react";
import { PotionContext, PotionContextProvider } from "./potion-context";
import { useContext } from "react";
import { PotionType, potions } from "../config/PotionConfig";

//props array of ids for test
type Props = {
  potionsToAdd?: PotionType[];
  potionsToRemove?: PotionType[];
};

const TestPotionContext: React.FC<Props> = ({
  potionsToAdd = [],
  potionsToRemove = [],
}) => {
  const potionIds = Array.from(new Set([...potionsToAdd, ...potionsToRemove]));
  const potionCTX = useContext(PotionContext);
  const removePotionHandler = () => {
    potionsToRemove.forEach((element) => {
      potionCTX.removePotion(element);
    });
  };
  const addPotionHandler = () => {
    potionsToAdd.forEach((element) => {
      potionCTX.addPotion(element);
    });
  };
  const resetPotionHandler = () => {
    potionCTX.resetPotions();
  };

  return (
    <>
      {potionIds.map((potionId) => {
        return (
          <p key={potionId} data-testid={"potion" + potionId}>
            {potionCTX.potions[potionId].amount}
          </p>
        );
      })}
      <button data-testid="add" onClick={addPotionHandler}></button>
      <button data-testid="remove" onClick={removePotionHandler}></button>
      <button data-testid="reset" onClick={resetPotionHandler}></button>
    </>
  );
};

describe("<potion context tests of amount logics />", () => {
  test("Should add one on add", () => {
    render(
      <PotionContextProvider>
        <TestPotionContext
          potionsToAdd={[
            PotionType.Red,
            PotionType.Green,
            PotionType.Green,
            PotionType.Green,
          ]}
        />
      </PotionContextProvider>
    );
    const add = screen.getByTestId("add");
    fireEvent.click(add);
    const potionRed = screen.getByTestId("potion" + PotionType.Red);
    const potionGreen = screen.getByTestId("potion" + PotionType.Green);
    expect(potionRed.textContent).toBe("1");
    expect(potionGreen.textContent).toBe("3");
  });
  test("Should substract on remove", () => {
    render(
      <PotionContextProvider>
        <TestPotionContext
          potionsToAdd={[PotionType.Red, PotionType.Green, PotionType.Green]}
          potionsToRemove={[PotionType.Red, PotionType.Green]}
        />
      </PotionContextProvider>
    );
    const add = screen.getByTestId("add");
    fireEvent.click(add);
    const remove = screen.getByTestId("remove");
    fireEvent.click(remove);
    const potionRed = screen.getByTestId("potion" + PotionType.Red);
    const potionGreen = screen.getByTestId("potion" + PotionType.Green);
    expect(potionRed.textContent).toBe("0");
    expect(potionGreen.textContent).toBe("1");
  });
  test("Should NOT substract to less than zero on  remove", () => {
    render(
      <PotionContextProvider>
        <TestPotionContext
          potionsToAdd={[PotionType.Red]}
          potionsToRemove={[PotionType.Red, PotionType.Red, PotionType.Red]}
        />
      </PotionContextProvider>
    );
    const add = screen.getByTestId("add");
    fireEvent.click(add);
    const remove = screen.getByTestId("remove");
    fireEvent.click(remove);
    const potionRed = screen.getByTestId("potion" + PotionType.Red);
    expect(potionRed.textContent).toBe("0");
  });
  test("Should place all amount on zero on reset", () => {
    render(
      <PotionContextProvider>
        <TestPotionContext
          potionsToAdd={[
            PotionType.Red,
            PotionType.Green,
            PotionType.Yellow,
            PotionType.Blue,
            PotionType.Blue,
          ]}
        />
      </PotionContextProvider>
    );
    const add = screen.getByTestId("add");
    fireEvent.click(add);
    const reset = screen.getByTestId("reset");
    fireEvent.click(reset);
    const potionRed = screen.getByTestId("potion" + PotionType.Red);
    const potionGreen = screen.getByTestId("potion" + PotionType.Green);
    const potionYellow = screen.getByTestId("potion" + PotionType.Yellow);
    const potionBlue = screen.getByTestId("potion" + PotionType.Blue);
    expect(potionRed.textContent).toBe("0");
    expect(potionGreen.textContent).toBe("0");
    expect(potionYellow.textContent).toBe("0");
    expect(potionBlue.textContent).toBe("0");
  });
});
