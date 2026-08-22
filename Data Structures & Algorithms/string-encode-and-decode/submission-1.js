class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        let prefix = "";

        for (let str of strs)
        {
            prefix += str.length + "-";
        }
        if (!prefix) return "";
        return prefix + "#" + strs.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        if (!str) return []
        const separatorIdx = str.indexOf("#");
        const rawPrefix = str.slice(0,separatorIdx - 1);
        const processedStr = str.slice(separatorIdx +1);

        const nums = rawPrefix.split("-").map(n => +n);
        
        const output = [];
        let currIdx = 0;
        nums.forEach(n => {
            output.push(processedStr.slice(currIdx,currIdx + n));
            currIdx +=n;
        })

        return output;

    }
}


const s = ["QaimQaimQaim","World"];

const sol = new Solution();

const encoded = sol.encode(s);
const solution = sol.decode(encoded);


