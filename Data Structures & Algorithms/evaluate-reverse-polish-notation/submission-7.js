class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stk = [];
        const operators = {
            "+" : (f,s)=>f+s,
            "-" : (f,s)=>f-s,
            "*":(f,s)=>f*s,
            "/":(f,s)=>Math.trunc(f/s)
        }

        for (let t of tokens)
        {
            if (t in operators)
            {
                const s = stk.pop();
                const f = stk.pop();
                stk.push(Number(operators[t](f,s)))
            }
            else
            {
                stk.push(Number(t));
            }
        }

        return stk.pop();



    }
}
