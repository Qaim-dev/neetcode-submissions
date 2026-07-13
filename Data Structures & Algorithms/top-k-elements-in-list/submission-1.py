class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        numMap = {}
        for n in nums:
            numMap[n] = numMap.get(n,0)+1

        sortedTuples = sorted(numMap.items(),key=lambda item:item[1], reverse=True)[:k]

        finalOutput = []
        for tup in sortedTuples:
            finalOutput.append(tup[0])

        return finalOutput

        