import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { NodeCollection } from './NodeCollection';

const numberCollection=new NumbersCollection([1,10,9,23,11,2,5,77,152,29,34,14,99]);
numberCollection.sort();
numberCollection.print();
const charactersCollection = new CharactersCollection('heLloP');
charactersCollection.sort();
charactersCollection.print();

let nodes = new NodeCollection();
nodes.add(23);
nodes.add(12);
nodes.add(17);
nodes.add(14);
nodes.add(8);
nodes.add(6);
nodes.sort();
nodes.print();