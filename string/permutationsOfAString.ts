


export function generatePermutations(str: string, out='') {
    let permutations:Array<string> = [];
    if(!str) {
       return [out];
    }
    for(let i =0; i < str.length; i++) {
        const chartAtIndex = str[i];
         const subStringWithOutCharAtIndex =  str.substring(0,i)+ str.substring(i+1);
         let permutation = generatePermutations(subStringWithOutCharAtIndex, `${out}${chartAtIndex}`)
         permutations = [...permutations, ...permutation]
    }
    return permutations;
}