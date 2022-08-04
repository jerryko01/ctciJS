class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size += 1;
    }

    // Insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;

        // If empty, make head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = node;
        }
        this.size += 1;
    }

    //Print list data
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

function partition(inputNode, inputInt) {
    let beforeStart = null;
    let beforeEnd = null;
    let afterStart = null;
    let afterEnd = null;

    while (inputNode !== null) {
        let next = inputNode.next;
        inputNode.next = null;
        if (inputNode.data < inputInt) {
            if (beforeStart === null) {
                beforeStart = inputNode;
                beforeEnd = beforeStart;
            } else {
                beforeEnd.next = inputNode;
                beforeEnd = inputNode;
            }
        }
        else {
            if (afterStart === null) {
                afterStart = inputNode;
                afterEnd = afterStart;
            }
            else {
                afterEnd.next = inputNode;
                afterEnd = inputNode;
            }
        }
        inputNode = next;
    }
    if (beforeStart === null) {
        return afterStart;
    }
    beforeEnd.next = afterStart;
    return beforeStart;
}


let testLL = new LinkedList();
testLL.insertFirst(3);
testLL.insertLast(5);
testLL.insertLast(8);
testLL.insertLast(5);
testLL.insertLast(10);
testLL.insertLast(2);
testLL.insertLast(1);