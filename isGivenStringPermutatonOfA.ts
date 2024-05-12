import { generatePermutations } from "./string/permutationsOfAString";

//brute force

export function isSubStringPermuationOfA(stringA:string, stringB:string) {
    const permutations = generatePermutations(stringA);
    if(permutations.includes(stringB)) {
        return true;
    }
    return false;
}

