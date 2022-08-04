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

function linkedToNum(inputNode) {
    let array = [];
    while (inputNode !== null) {
        array.push(Number(inputNode.data));
        inputNode = inputNode.next;
    }
    return Number(array.join(''));
}

function sumLists(inputNode1, inputNode2) {
    let sum = linkedToNum(inputNode1) + linkedToNum(inputNode2);
    let sumString = String(sum);
    let resultHead = null;
    let resultPtr = null;
    for (let i = 0; i < sumString.length; i += 1) {
        let newNode = new Node(Number(sumString[i]));
        if (resultHead === null) {
            resultHead = newNode;
            resultPtr = resultHead;
        } else {
            resultPtr.next = newNode;
            resultPtr = resultPtr.next;
        }
    }
    return resultHead;
}

let test1 = new LinkedList();
test1.insertFirst(6)
test1.insertLast(1)
test1.insertLast(7)

let test2 = new LinkedList();
test2.insertFirst(2)
test2.insertLast(9)
test2.insertLast(5)