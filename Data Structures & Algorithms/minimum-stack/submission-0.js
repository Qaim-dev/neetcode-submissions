class MinStack {
    constructor() {
        this.stk = [];
        this.secondary = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stk.push(val);
       this.secondary.push(this.secondary.length ? Math.min(val,this.secondary.at(-1)) : val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.secondary.pop();
        return this.stk.pop();

    }

    /**
     * @return {number}
     */
    top() {

        return this.stk[this.stk.length - 1]

    }

    /**
     * @return {number}
     */
    getMin() {
        return this.secondary.at(-1);
    }
}
