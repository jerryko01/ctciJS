// class threeStacks {
//     constructor(stackCapacity) {
//         this.stackCapacity = stackCapacity;
//         this.values = [];
//         this.sizes = [0, 0, 0];
//     }

//     isFull(stackNum) {
//         return this.sizes[stackNum] === this.stackCapacity;
//     }

//     isEmpty(stackNum) {
//         return this.sizes[stackNum] === 0;
//     }

//     indexOfTop(stackNum) {
//         let offset = this.stackCapacity * stackNum;
//         // offset is the starting point of the different stacks in the array
//         let size = this.sizes[stackNum];
//         // if you look at push, there is already += 1 of size before indexOfTop is called
//         return offset + size - 1;
//     }

//     push(stackNum, value) {
//         // stackNum can either be 0, 1, or 2
//         if (this.isFull(stackNum) || stackNum > 2) {
//             return false;
//         }

//         this.sizes[stackNum] += 1;
//         this.values[this.indexOfTop(stackNum)] = value;
//     }

//     pop(stackNum) {
//         if (this.isEmpty(stackNum) || stackNum > 2) {
//             return false
//         }
//         const topIndex = this.indexOfTop(stackNum);
//         const value = this.values[topIndex];
//         this.values[topIndex] = undefined;
//         this.sizes[stackNum] -= 1;

//         return value;
//     }

//     peek(stackNum) {
//         if (this.isEmpty(stackNum) || stackNum > 2) {
//             return false;
//         }

//         return this.values[this.indexOfIop(stackNum)];
//     }
// }

class threeInOne {
    constructor() {
        this.container = [];
        this.middleBottom = 0;
        this.middleTop = 0;
    }

    isEmpty1() {
        return middleBottom === 0;
    }

    peek1() {
        return this.isEmpty1() ? null : this.container[0]
    }

    push1(value) {
        this.container.unshift(value);
        this.middleBottom += 1;
        this.middleTop += 1;
    }

    pop1() {
        if (this.isEmpty1) {
            return false;
        }

        let value = this.container.shift();
        if (this.middleBottom > 0) {
            this.middleBottom -= 1;
            this.middleTop -= 1;
        }
        return value;
    }

    isEmpty2() {
        return this.middleBottom === this.middleTop;
    }

    peek2() {
        return this.isEmpty2 ? undefined : this.container[this.middleTop - 1];
    }

    push2(value) {
        this.container.splice(this.middleTop, 0, value);
        middleTop++;
    }

    pop2() {
        if (this.isEmpty2()) {
            return false;
        }

        var value = this.container[this.middleTop - 1];
        this.container.splice(this.middleTop - 1, 1);
        if (this.middleBottom < this.middleTop) {
            this.middleTop -= 1;
        }
        return answer;
    }

    isEmpty3() {
        return this.middleTop === this.container.length;
    }

    peek3() {
        return this.isEmpty3 ? undefined : this.container[this.container.length - 1];
    }

    push3(value) {
        this.container.push(value);
    }

    pop3() {
        if (this.isEmpty3()) { return false; }
        return this.container.pop();
    }
}
