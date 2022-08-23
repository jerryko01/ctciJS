class stackOfPlates {
    constructor(capacity) {
        this.capacity = capacity;
        this.stackSet = [];
    }
    getLastStack() {
        return this.stackSet[this.stackSet.length - 1];
    }
    push(value) {
        let last = this.getLastStack;
        if (this.stackSet.length === 0 || last.length === capacity) {
            let newStack = [];
            newStack.push(value);
            this.stackSet.push(newStack);
        }
        else {
            last.push(value);
        }
    }
    pop() {
        let last = this.getLastStack();
        if (this.stackSet.length === 0) {
            return undefined;
        }
        else {
            let value = last.pop();
            if (last.length === 0) {
                this.stackSet.splice((this.stackSet.length - 1), 1)
            }
            return value;
        }
    }
    peek() {
        let value = this.getLastStack();
        return value[value.length - 1];
    }
    isEmpty() {
        return this.stackSet.length === 0;
    }
    popAt(index) {
        let value = this.stackSet[index].pop();
        if (this.stackSet[index].length === 0) {
            this.stackSet.splice(index, 1);
        }
        return value;
    }
}