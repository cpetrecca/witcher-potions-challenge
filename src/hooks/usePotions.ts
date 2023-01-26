import {useState, useContext} from "react";
import { PotionContext } from "../store/potion-context";

const usePotionMixer=()=>{
    const [isLoading, setIsLoading] = useState(false);
    const {potions}=useContext(PotionContext);

    const checkBestAttackCombination=()=>{

    }

    return {isLoading, checkBestAttackCombination}

}

export default usePotionMixer;