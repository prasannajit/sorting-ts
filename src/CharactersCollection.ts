import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
    constructor(private collection: string) { 
        super();
    }
    get length(): number {
        return this.collection.length;
    }
    print():void{
        console.log(this.collection);
    }
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.collection[leftIndex].toLowerCase() > this.collection[rightIndex].toLowerCase();
    }
    swap(leftIndex: number, rightIndex: number): void {
        let arr = this.collection.split('');
        [arr[leftIndex],arr[rightIndex]]=[arr[rightIndex],arr[leftIndex]];
        this.collection=arr.join('');
    }
}