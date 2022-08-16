class threeStacks {
    constructor(stackCapacity) {
        this.stackCapacity = stackCapacity;
        this.values = [];
        this.sizes = [0, 0, 0];
    }

    isFull(stackNum) {
        return this.sizes[stackNum] === this.stackCapacity;
    }

    isEmpty(stackNum) {
        return this.sizes[stackNum] === 0;
    }

    indexOfTop(stackNum) {
        let offset = this.stackCapacity * stackNum;
        // offset is the starting point of the different stacks in the array
        let size = this.sizes[stackNum];
        // if you look at push, there is already += 1 of size before indexOfTop is called
        return offset + size - 1;
    }

    push(stackNum, value) {
        // stackNum can either be 0, 1, or 2
        if (this.isFull(stackNum) || stackNum > 2) {
            return false;
        }

        this.sizes[stackNum] += 1;
        this.values[this.indexOfTop(stackNum)] = value;
    }

    pop(stackNum) {
        if (this.isEmpty(stackNum) || stackNum > 2) {
            return false
        }
        const topIndex = this.indexOfTop(stackNum);
        const value = this.values[topIndex];
        this.values[topIndex] = undefined;
        this.sizes[stackNum] -= 1;

        return value;
    }

    peek(stackNum) {
        if (this.isEmpty(stackNum) || stackNum > 2) {
            return false;
        }

        return this.values[this.indexOfIop(stackNum)];
    }
}
