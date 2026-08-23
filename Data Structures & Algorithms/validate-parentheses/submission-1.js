class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stk = [];

        const closeToOpen = 
        {
            ")" : "(",
            "}" : "{",
            "]" : "["
        };

        for (let c of s)
        {
            if (!Object.hasOwn(closeToOpen,c))
            {
                stk.push(c);
            }
            else
            {
                const open = stk.pop();
                if (open != closeToOpen[c]) return false
                
            }
        }
        return !stk.length;




    }
}
