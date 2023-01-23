import React from "react";
import { IPotion } from "./../dataModels/Potion";
import { potions } from "./../config/PotionConfig";

type IPotionContext = {
  potions: IPotion[];
  restPotion: (potionName: string) => void;
  addPotion: (potionName: string) => void;
  resetPotions: () => void;
};

export const PotionContext = React.createContext<IPotionContext>({
  potions: [],
  restPotion: (potionName: string) => {},
  addPotion: (potionName: string) => {},
  resetPotions: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const PotionContextProvider: React.FC<Props> = (props) => {
  const restPotionHandler = (potionName: string): void => {};
  const addPotionHandler = (potionName: string): void => {};
  const resetPotionsHandler = () => {};

  return (
    <PotionContext.Provider
      value={{
        potions: potions,
        restPotion: restPotionHandler,
        addPotion: addPotionHandler,
        resetPotions: resetPotionsHandler,
      }}
    >
      {props.children}
    </PotionContext.Provider>
  );
};
