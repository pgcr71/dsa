


// Every TrieNode is the array of size `dict.length`
// You could fill the array with `null` values
//  but this is unnecessary for JS/TS

class Trie {
    #root = {};
    #ends = new WeakSet<{}>();
    isNullOrUndefined(value) {
        return ((value ?? null) === null)
    }
    insert(word: string): void {
        let node = this.#root;

        for (const ch of word) {

            // move to next node and create it if necessary
            if (!node[ch]) {
                node[ch] = {};
            }
            node = node[ch];
        }

        this.#ends.add(node);
    }

    // private method to iterate over nodes
    // returns the last node in word or null 
    #search(word: string): {} | null {
        let node = this.#root;

        for (const ch of word) {
            const next = node[ch];
            if (!next) return null;
            node = next;
        }

        return node;
    }

    search(word: string): boolean {
        return this.#ends.has(this.#search(word) ?? {});
    }

    startsWith(prefix: string): boolean {
        return this.#search(prefix) !== null;
    }
}