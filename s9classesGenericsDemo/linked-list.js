// class ListNode<T> {
//   next?: ListNode<T>;
//   constructor(public value: T) {}
// }
// class LinkedList<T> {
//   private root?: ListNode<T>;
//   private length = 0;
//   add(value: T) {
//     const node = new ListNode<T>(value);
//     if (!this.root) {
//       this.root = node;
//     } else {
//       let current = this.root;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = node;
//     }
//     this.length++;
//   }
// }
// const numberList = new LinkedList<number>();
// for (let i = 0; i < 5; i++) {
//   const value = Math.floor(Math.random() * 100) + 1;
//   numberList.add(value);
// }
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
    }
    LinkedList.prototype.add = function (value) {
        var node = new ListNode(value);
        if (!this.root || !this.root) {
            this.root = node;
            this.tail = node;
        }
        else if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    };
    LinkedList.prototype.getLength = function () {
        return this.length;
    };
    LinkedList.prototype.print = function () {
        var _a;
        var current = this.root;
        while (current) {
            console.log("current.value:".concat(current.value));
            console.log("current.next:".concat((_a = current.next) === null || _a === void 0 ? void 0 : _a.value));
            current = current.next;
        }
    };
    return LinkedList;
}());
var numberList = new LinkedList();
for (var i = 0; i < 5; i++) {
    var value = Math.floor(Math.random() * 100) + 1;
    numberList.add(value);
}
console.log("length of the linked list is: ".concat(numberList.getLength()));
console.log("Values of the linked list are");
numberList.print();
