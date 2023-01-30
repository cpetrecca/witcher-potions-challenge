import { useEffect, useState } from "react";
import { potionDamage } from "../config/PotionConfig";
import { IPotion, IPotionDamage, IDamageOutput } from "../dataModels/Potion";


type IDamageCalculation = {
  amountOfPotions: number;
  damageBonusPerPotion: number;
};


const compareDamage = (a: IDamageCalculation, b: IDamageCalculation) => {
  if (a.damageBonusPerPotion < b.damageBonusPerPotion) {
    return 1;
  }
  if (
    a.damageBonusPerPotion === b.damageBonusPerPotion &&
    a.amountOfPotions < b.amountOfPotions
  ) {
    return 1;
  }
  if (a.damageBonusPerPotion > b.damageBonusPerPotion) {
    return -1;
  }
  if (
    a.damageBonusPerPotion === b.damageBonusPerPotion &&
    a.amountOfPotions > b.amountOfPotions
  ) {
    return -1;
  }
  return 0;
};

const usePotionMixer = (potions: IPotion[]) => {
  // const { potions } = useContext(PotionContext);
  const [totalDamageBonus, setTotalDamageBonus] = useState<number>(0);
  const [bestAttackCombination, setBestAttackCombination] = useState<
    IDamageOutput[]
  >([]);
  let potionsAvailableForUse: IPotion[] = potions.map((pot) => {
    return { ...pot };
  });

  useEffect(() => {
    //reset provided result on potion change
    setBestAttackCombination([]);
  }, [potions]);

  const toDamageCalculationPerPotion = (
    potionDamage: IPotionDamage
  ): IDamageCalculation => {
    return {
      amountOfPotions: potionDamage.amountOfPotions,
      damageBonusPerPotion:
        potionDamage.overallDamage / potionDamage.amountOfPotions,
    };
  };

  const orderByDamage = (damageCalculation: IDamageCalculation[]) => {
    //Places the best damage option first and goes like that always trying to use the most amount of potions that deals more damage
    return damageCalculation.sort(compareDamage);
  };

  const orderByAmountOfPotions = (potionsAvailableForUse: IPotion[]) => {
    return potionsAvailableForUse.sort((b, a) => {
      return a.amount - b.amount;
    });
  };

  const havingAmountOfPotions = (amountOfPotionsNeeded: number) => {
    let differentPotionsAvailables = 0;

    potionsAvailableForUse.forEach((potionAvail) => {
      if (potionAvail.amount > 0) {
        differentPotionsAvailables += 1;
      }
    });
    return differentPotionsAvailables >= amountOfPotionsNeeded;
  };

  const removePotionsFromAvailables = (
    amountOfPotionsNeeded: number,
    damage: number
  ) => {
    const attackDamage = amountOfPotionsNeeded * damage;
    const opDamage = {
      amountOfPotionsUsed: amountOfPotionsNeeded,
      attackDamage:attackDamage,
    };

    /*Here reorder the array from more potions to less so always have best possible combinations available
    Doesnt change much with the actual damage configuration but could change: for example if you have: 
    2 red, 2 blue, 2 green, 2 yellow, 2 gray and the combinations of using two potions is better than using just one as now 
    and using 4 potions is better than five
    its desirable to have 2 different potions left instead of two potions of the same type.*/
    orderByAmountOfPotions(potionsAvailableForUse);
    /////////////////////////////////////////////

    let removedPotions = 0;
    potionsAvailableForUse.forEach((potionAvail) => {
      if (removedPotions < amountOfPotionsNeeded && potionAvail.amount > 0) {
        removedPotions += 1;
        potionAvail.amount -= 1;
      }
    });
    setTotalDamageBonus((prev) => {
      return prev + attackDamage;
    });
    setBestAttackCombination((prev) => {
      return [...prev, opDamage];
    });
  };

  const iteratePotions = (orderedDamageCalculated: IDamageCalculation[]) => {
    orderedDamageCalculated.forEach((damageDetails) => {
      const amountOfPotionsNeeded = damageDetails.amountOfPotions;
      while (havingAmountOfPotions(amountOfPotionsNeeded)) {
        removePotionsFromAvailables(
          amountOfPotionsNeeded,
          damageDetails.damageBonusPerPotion
        );
      }
    });
  };

  const calculateBestAttackCombination = () => {
    //reset on new attack
    setTotalDamageBonus(0);
    setBestAttackCombination([]);
    //The idea is to check which of the potion combinations makes best bonus damage per potion and try using it as much as its possible
    //The calculation per potion is in place
    const damageCalculation: IDamageCalculation[] = potionDamage.map(
      (potionDamage) => {
        return toDamageCalculationPerPotion(potionDamage);
      }
    );
    //We order the array
    const orderedDamagePriority = orderByDamage(damageCalculation);

    //We iterate through damage calculations and potions
    iteratePotions(orderedDamagePriority);
  };
  return {
    calculateBestAttackCombination,
    bestAttackCombination,
    totalDamageBonus:+totalDamageBonus.toFixed(2),
  };
};

export default usePotionMixer;
