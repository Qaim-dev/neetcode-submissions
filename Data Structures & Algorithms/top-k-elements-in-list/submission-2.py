class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        numMap = {}
        for n in nums:
            numMap[n] = numMap.get(n,0)+1

        return sorted(numMap,key=lambda item:numMap[item], reverse=True)[:k]

      
        