const dict = "abcdefghijklmnopqrstuvwxyz";
const charMap = new Map([...dict].map((v, i) => [v, i]));
type TrieNode = TrieNode[];
// Every TrieNode is the array of size `dict.length`
// You could fill the array with `null` values
//  but this is unnecessary for JS/TS

class Trie {
  #root: TrieNode[] = Array(dict.length);
  #ends = new WeakSet<TrieNode>();

  insert(word: string): void {
    let node = this.#root;

    for (const ch of word) {
      // move to next node and create it if necessary
      node = node[charMap.get(ch)!] ??= Array(dict.length);
    }

    this.#ends.add(node);
  }

  // private method to iterate over nodes
  // returns the last node in word or null 
  #search(word: string): TrieNode | null {
    let node = this.#root;

    for (const ch of word) {
      const next = node[charMap.get(ch) ?? -1];
      if (!next) return null;
      node = next;
    }

    return node;
  }

  search(word: string): boolean {
    return this.#ends.has(this.#search(word) ?? []);
  }

  startsWith(prefix: string): boolean {
    return this.#search(prefix) !== null;
  }
}