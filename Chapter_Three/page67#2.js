class Stack {
    // First In, Last Out
    constructor() {
        this.data = [];
    }

    size() {
        return this.data.length;
    }

    isEmpty() {
        return this.size() == 0;
    }

    push(value) {
        this.data.push(value);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.data[this.size() - 1];
    }

    _toArray() {
        return this.data;
    }
}

class stackMin extends Stack {
    constructor() {
        super();
        this.minStack = new Stack();
        this.minimum = null;
    }

    push(value) {
        super.push(value);
        if (this.minimum === null || value <= this.minimum) {
            this.minimum = value;
            this.minStack.push(value);
        }
    }

    pop() {
        let value = super.pop();
        if (value === this.minStack.peek()) {
            this.minStack.pop();
            this.minimum = this.minStack.peek();
        }
        return value;
    }

    min() {
        return this.minimum;
    }
}
