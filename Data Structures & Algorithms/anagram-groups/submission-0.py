class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        arraysByCount = {}
        charMap = {}
        finalOutput = []
        for item in strs:
            arraysByCount[len(item)] = arraysByCount.get(len(item), [])
            arraysByCount[len(item)].append(item)

        for key in arraysByCount:
            lenGroup = arraysByCount.get(key)
            charMap[key] = []
            for index,word in enumerate(lenGroup):
                charMap[key].append({})
                thisWordMap = charMap[key][index]
                for char in word:
                    wordOrd = ord(char) - ord('a')
                    thisWordMap[wordOrd] = thisWordMap.get(wordOrd,0) + 1
            usedUp = []
            for index,wordMap in enumerate(charMap[key]):
                common = []
                if wordMap in usedUp:
                    continue
                usedUp.append(wordMap)
                for compareIndex,compareMap in enumerate(charMap[key]):
                    if wordMap == compareMap:
                        common.append(lenGroup[compareIndex])
                finalOutput.append(common)
        return finalOutput
        