class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {


        const stk = [];
        const output = new Array(temperatures.length).fill(0);

        for (let [tIndex,t] of temperatures.entries())
        {

            while(stk.at(-1) && stk.at(-1)[0] < t)
            {
                const [_,i] = stk.at(-1);
                output[i] = tIndex - i;
                stk.pop();
            }
            stk.push([t,tIndex]);
        }
        return output;

    }
}
