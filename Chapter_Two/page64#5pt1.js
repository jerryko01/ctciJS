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

function sumLists(inputNode1, inputNode2) {
    let carry = 0;
    let result = 0;
    let outputHead = null;
    let outputPtr = null;
    while (inputNode1 !== null || inputNode2 !== null || carry !== 0) {
        if (inputNode1 !== null) {
            result = result + inputNode1.data;
            inputNode1 = inputNode1.next;
        }
        if (inputNode2 !== null) {
            result = result + inputNode2.data;
            inputNode2 = inputNode2.next;
        }
        result += carry;
        carry = Math.floor(result / 10);
        let newNode = new Node(result % 10);
        if (outputHead === null) {
            outputHead = newNode;
            outputPtr = outputHead;
        }
        else {
            outputPtr.next = newNode;
            outputPtr = newNode;
        }
        result = 0;
    }
    return outputHead;
}

let test1 = new LinkedList();
test1.insertFirst(7)
test1.insertLast(1)
test1.insertLast(6)

let test2 = new LinkedList();
test2.insertFirst(5)
test2.insertLast(9)
test2.insertLast(2)

// let test1 = new Node(7);
// let b = new Node(1)
// let c = new Node(6)

// test1.next = b;
// b.next = c;


// let test2 = new Node(5);
// let b = new Node(1)
// let c = new Node(6)

// test1.next = b;
// b.next = c;