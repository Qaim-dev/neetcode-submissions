class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const wordMap = {};
        for (let word of strs)
        {
            const sorted = word.split("").sort().join("");
            wordMap[sorted] = [...(wordMap[sorted] ?? []),word]
        }
        const finalOutput = [];
        for (let x in wordMap)
        {
            finalOutput.push(wordMap[x]);
        }
        return finalOutput


    }
}
