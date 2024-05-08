class PermutationsOfAinB {
    private charPrimeNumberMap = { a: 2, b: 3, c: 5, d: 7, e: 11, f: 13, g: 17, h: 19, i: 23, j: 29, k: 31, l: 37, m: 41, n: 43, o: 47, p: 53, q: 59, r: 61, s: 67, t: 71, u: 73, v: 79, w: 83, x: 89, y: 97, z: 101 }
    private stringA = '';
    private stringB = '';

    constructor(stringA: string, stringB:string) {    
        this.stringA = stringA;
        this.stringB = stringB;
    }
    
    slidingWindowMethod() {
        let results: Array<Record<string, string | number>> = []
        let a = this.stringA;
        let b = this.stringB;
        let j = 0;
        while (j <= (b.length - a.length)) {
            let substr = '';
            for (let i = j; i < (j + a.length); i++) {
                substr = substr + b[i];

            }
            if (this.isSubStringPermuationOfA(substr)) {
                results.push({
                    startIndex: j ,
                    endIndex: j+ a.length-1,
                    substr
                })
            }
            j++;

        }
        return results
    }
    
    primeNumberMethod() {
        let multiplication = 1;
        let multiplicationOfCharsinA = 1;
        let results: Array<Record<string,string | number>> = []
        for(let i=0; i<this.stringA.length; i++) {
            const lowerCasedStingA = this.stringA[i].toLowerCase();
            const charNumber = this.charPrimeNumberMap[lowerCasedStingA];
            multiplicationOfCharsinA = multiplicationOfCharsinA*charNumber;
        }
        for(let i=0; i<this.stringB.length; i++) {
            const lowerCasedStingB = this.stringB[i].toLowerCase();
            const charNumber = this.charPrimeNumberMap[lowerCasedStingB];
            multiplication = multiplication*charNumber;
           
            if(i>=this.stringA.length) {
                console.log(this.stringB.length, i)
                multiplication = multiplication/this.charPrimeNumberMap[this.stringB[i-this.stringA.length]]
            }
            
            if(multiplication === multiplicationOfCharsinA) {
                results.push({
                    startIndex: i - (this.stringA.length-1),
                    endIndex: i
                   
                    
                })
            }
            
        }
        return results;
    }
    private isSubStringPermuationOfA(substring: string) {
        const permutations = this.generatePermutations(this.stringA);
        if(permutations.includes(substring)) {
            return true;
        }
        return false;
    }

    private generatePermutations(str: string, out='') {
        let permutations:Array<string> = [];
        if(!str) {
           return [out];
        }
        for(let i =0; i < str.length; i++) {
            const chartAtIndex = str[i];
             const subStringWithOutCharAtIndex =  str.substring(0,i)+ str.substring(i+1);
             let permutation = this.generatePermutations(subStringWithOutCharAtIndex, `${out}${chartAtIndex}`)
             permutations = [...permutations, ...permutation]
        }
        return permutations;
    }
    
   
}

console.log(new PermutationsOfAinB('abbc', 'cbabadcbbabbcbabaabccbabc').slidingWindowMethod())

