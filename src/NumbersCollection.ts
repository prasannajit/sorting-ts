import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
    constructor(private collection: number[]) { 
        super();
    }
    get length(): number {
        return this.collection.length;
    }
    print():void{
        console.log(this.collection);
    }
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.collection[leftIndex] > this.collection[rightIndex];
    }
    swap(leftIndex: number, rightIndex: number): void {
        [this.collection[leftIndex], this.collection[rightIndex]] = [this.collection[rightIndex], this.collection[leftIndex]];
    }
}