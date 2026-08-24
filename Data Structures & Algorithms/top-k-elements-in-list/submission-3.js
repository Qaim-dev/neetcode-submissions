class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const m = {}
        for (let n of nums)
        {
            m[n] = (m[n] ?? 0) + 1;
        } 

        const ent = Object.entries(m).sort((a,b)=> b[1] - a[1] ).slice(0,k).map(v => v[0]);

        return ent

    }
}
