import React, { useReducer } from "react";
import { IPotion } from "./../dataModels/Potion";
import { potions, PotionType } from "./../config/PotionConfig";

type IPotionContext = {
  potions: IPotion[];
  removePotion: (potionId: number) => void;
  addPotion: (potionId: number) => void;
  resetPotions: () => void;
};

enum PotionActionKind {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
  RESET = "RESET",
}

interface ICountAction {
  type: PotionActionKind;
  potionId?: PotionType;
}

function reducer(state: IPotion[], action: ICountAction): IPotion[] {
  const { type, potionId } = action;
  let initHelper: IPotion[];
  switch (type) {
    case PotionActionKind.INCREASE:
      initHelper = state.map((potion) => {
        if (potion.id === potionId)
          return { ...potion, amount: potion.amount + 1 };
        else return potion;
      });
      return [...initHelper];
    case PotionActionKind.DECREASE:
      initHelper = state.map((potion) => {
        if (potion.id === potionId){
          const potionAmount=potion.amount>0?potion.amount - 1:0;
          return { ...potion, amount:potionAmount};}
        else return potion;
      });
      return [...initHelper];
    case PotionActionKind.RESET:
      return potions;
    default:
      return state;
  }
}

export const PotionContext = React.createContext<IPotionContext>({
  potions: [],
  removePotion: (potionId: number) => {},
  addPotion: (potionId: number) => {},
  resetPotions: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const PotionContextProvider: React.FC<Props> = (props) => {
  const [state, dispatch] = useReducer(reducer, potions);
  const removePotionHandler = (potionId: number): void => {
    dispatch({ type: PotionActionKind.DECREASE, potionId: potionId });
  };
  const addPotionHandler = (potionId: number): void => {
    dispatch({ type: PotionActionKind.INCREASE, potionId: potionId });
  };
  const resetPotionsHandler = () => {
    dispatch({ type: PotionActionKind.RESET});
  };

  return (
    <PotionContext.Provider
      value={{
        potions: state,
        removePotion: removePotionHandler,
        addPotion: addPotionHandler,
        resetPotions: resetPotionsHandler,
      }}
    >
      {props.children}
    </PotionContext.Provider>
  );
};
