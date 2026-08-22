class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */


    boxIndex(c,r)
    {
        const boxC = Math.floor(c/3)
        const boxR = Math.floor(r/3)
        return `${boxR},${boxC}`
    }

    isValidSudoku(board) {

        let r = 0, c = 0
        const columns = [], rows = [], boxes = [];

        while (r < 9 && c < 9)

        {
            const val = board[r][c];

            if (+val)
            {
                 columns[c] = columns[c] ?? {};
                if (columns[c][val]) return false;
                else columns[c][val] = 1;
                //console.log("Reached!");

                rows[r] = rows[r] ?? {};
                if (rows[r][val]) return false;
                else rows[r][val] = 1;

                const box = this.boxIndex(c,r);
                boxes[box] = boxes[box] ?? {};
                if (boxes[box][val]) return false;
                else boxes[box][val] = 1
            }
      



            c++;
            if (c == 9)
            {
                r++;
                if (r == 9) return true;
                c = 0;
            }
        }

    }
}


const cool = new Solution();
