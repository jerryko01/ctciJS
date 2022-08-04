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

function deleteMiddleNode(inputNode) {
    if (inputNode === null || inputNode.next === null) {
        return false;
    }
    let next = inputNode.next;
    inputNode.data = next.data;
    inputNode.next = next.next;
}

let testLL = new LinkedList();

testLL.insertFirst(1);
testLL.insertLast(2);
testLL.insertLast(3);
testLL.insertLast(4);
testLL.insertLast(5);

// Testing Example: deleteMiddleNode(testLL.head.next.next)