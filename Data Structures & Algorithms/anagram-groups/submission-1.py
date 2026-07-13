class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:


        finalOutput = []
        sortedMap = {}
        for word in strs:
            sortedWord = "".join(sorted(word))
            sortedMap[sortedWord] = sortedMap.get(sortedWord,[])
            sortedMap[sortedWord].append(word)
        
        for key in sortedMap:
            finalOutput.append(sortedMap[key])

        return finalOutput
        