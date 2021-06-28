import { Sorter } from "./Sorter";

class Node {
    constructor(public data: Number, public next: Node | null = null) { }
}
export class NodeCollection extends Sorter {
    private head: Node | null = null;
    
    print():void{
        if (this.head) {
            let node = this.head;
            while (node) {
                console.log(`Data is ${node.data}`);
                node = node.next;
            }
        }
    }
    get length(): number {
        let length = 1;
        if (this.head) {
            let node = this.head;
            while (node.next) {
                node = node.next;
                length++;
            }
        }
        return length;
    }
    add(data: number): void {
        if (!this.head) {
            this.head = new Node(data);
        } else {
            let node = this.head;
            while (node.next) {
                node = node.next;
            }
            node.next = new Node(data);
        }
    }
    at(index: number): Node | null {
        if (this.head) {
            let node:Node|null = this.head;
            let i = 0;
            while (i !== index) {
                if(node){
                    node = node.next;
                }
                i++;
            }
            return node;
        }
        return null;
    }
    compare(leftIndex: number, rightIndex: number): boolean {
        if (this.head && this.head.next) {
            let first = this.at(leftIndex);
            let second = this.at(rightIndex);
            if (first && second) {
                return first.data > second.data;
            }
            return false;
        }
        return false;
    }
    swap(leftIndex: number, rightIndex: number): void {
        if (this.head && this.head.next) {
            let first = this.at(leftIndex);
            let second = this.at(rightIndex);
            if (first && second) {
                [first.data, second.data] = [second.data, first.data];
            }
        }
    }
}