class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}
class SetNode {
    constructor(key, value) {
        this.key = key;
        this.next = null;
    }
}
// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
// }



class HashSet{
    constructor(size = 16){
        this.size = size;
        this.buckets = new Array(this.size).fill(null)
        this.count = 0
    }

    hash(key){
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i<key.length; i++){
            hashCode = (primeNumber * hashCode + key.charCodeAt(i));
        }
        // I had the modular above and it executed incorrectly. My understanding is that 
        // I didnt add brackets to make sure it happened in the correct order. 
        // moving it to the return means that it is divided at the end
        return hashCode  % this.size
    };
    // set the key value pair or replace the value of a key if it already exists
    set(key){
        let index = this.hash(key);
        let newNode = new SetNode(key);
        if(!this.buckets[index]){
            this.buckets[index] = newNode
            this.count ++
        }
        let currentNode = this.buckets[index];
        while(currentNode){
            if(currentNode.key === key){
                return currentNode.key = key;
            }else if (!currentNode.next){
                return currentNode.next = newNode;
            }
            currentNode = currentNode.next
        }

    };
    get(key){
        let index = this.hash(key)
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }else if(!this.buckets[index]){
            return null
        }else{
            let currentNode = this.buckets[index]
            while(currentNode){
                if(currentNode.key === key){
                    return currentNode.key;
                }
                currentNode = currentNode.next
            }
        }
    };
    has(key){
        let index = this.hash(key)
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }else if(!this.buckets[index]){
            return false
        }else{
            let currentNode = this.buckets[index]
            while(currentNode){
                if(currentNode.key === key){
                    return true
                }
                currentNode = currentNode.next
            }
            return false
        }
    };
    remove(key){
        let index = this.hash(key)
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }else if(!this.buckets[index]){
            throw new Error('Nothing matches the key you provided')
        }else{
            let currentNode = this.buckets[index]
            let previousNode = null;
            while(currentNode){
                if(currentNode.key === key){
                    if (previousNode == null) {
                        this.buckets[index] = currentNode.next;
                    } else {
                        previousNode.next = currentNode.next;
                    }
                    this.count--
                    return true;
                }
                previousNode = currentNode;
                currentNode = currentNode.next;
        }}};

    length(){
        return this.count

    };
    clear(){
        this.head = null;
        this.size = 0

    };
    keys() {
        let keysArray = [];
        for (let i = 0; i < this.buckets.length; i++) {
            let currentNode = this.buckets[i];
            while (currentNode) {
                keysArray.push(currentNode.key);
                currentNode = currentNode.next;
            }
        }
        return keysArray;
    }
}
class HashTable{
    constructor(size = 16){
        this.size = size;
        this.buckets = new Array(this.size).fill(null)
        this.count = 0
    }

    hash(key){
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i<key.length; i++){
            hashCode = (primeNumber * hashCode + key.charCodeAt(i));
        }
        // I had the modular above and it executed incorrectly. My understanding is that 
        // I didnt add brackets to make sure it happened in the correct order. 
        // moving it to the return means that it is divided at the end
        return hashCode  % this.size
    };
    // set the key value pair or replace the value of a key if it already exists
    set(key, value){
        let index = this.hash(key);
        let newNode = new Node(key, value);
        if(!this.buckets[index]){
            this.buckets[index] = newNode
            this.count ++
        }
        let currentNode = this.buckets[index];
        while(currentNode){
            if(currentNode.key === key){
                return currentNode.value = value;
            }else if (!currentNode.next){
                return currentNode.next = newNode;
            }
            currentNode = currentNode.next
        }

    };
    get(key){
        let index = this.hash(key)
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }else if(!this.buckets[index]){
            return null
        }else{
            let currentNode = this.buckets[index]
            while(currentNode){
                if(currentNode.key === key){
                    return currentNode.value;
                }
                currentNode = currentNode.next
            }
        }
    };
    has(key){
        let index = this.hash(key)
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }else if(!this.buckets[index]){
            return false
        }else{
            let currentNode = this.buckets[index]
            while(currentNode){
                if(currentNode.key === key){
                    return true
                }
                currentNode = currentNode.next
            }
            return false
        }
    };
    remove(key){
        let index = this.hash(key)
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }else if(!this.buckets[index]){
            throw new Error('Nothing matches the key you provided')
        }else{
            let currentNode = this.buckets[index]
            let previousNode = null;
            while(currentNode){
                if(currentNode.key === key){
                    if (previousNode == null) {
                        this.buckets[index] = currentNode.next;
                    } else {
                        previousNode.next = currentNode.next;
                    }
                    this.count--
                    return true;
                }
                previousNode = currentNode;
                currentNode = currentNode.next;
        }}};

    length(){
        return this.count

    };
    clear(){
        this.head = null;
        this.size = 0

    };
    keys() {
        let keysArray = [];
        for (let i = 0; i < this.buckets.length; i++) {
            let currentNode = this.buckets[i];
            while (currentNode) {
                keysArray.push(currentNode.key);
                currentNode = currentNode.next;
            }
        }
        return keysArray;
    }

    values(){
        let valuesArray = [];
        for (let i = 0; i < this.buckets.length; i++) {
            let currentNode = this.buckets[i];
            while (currentNode) {
                valuesArray.push(currentNode.value);
                currentNode = currentNode.next;
            }
        }
        return valuesArray;
    };
    entries(){
        let entriesArray = [];
        for (let i = 0; i < this.buckets.length; i++) {
            let currentNode = this.buckets[i];
            while (currentNode) {
                entriesArray.push([currentNode.key,currentNode.value]);
                currentNode = currentNode.next;
            }
        }
        return entriesArray;
    };


}
const la = new HashSet()
const ll = new HashTable() 
ll.set('Dominic', 'Nugent')
ll.set('Fab', 'Marshall')
ll.set('Jiah', 'Reiners')


la.set('Dominic', 'Nugent')
la.set('Fab', 'Marshall')
la.set('Jiah', 'Reiners')

console.log(ll.length())
console.log(ll.has('Domini'))
console.log(ll.buckets)
console.log(ll.keys())
console.log(ll.values())
console.log(ll.entries())
console.log(ll.buckets.length)

console.log(la.length())
console.log(la.has('Domini'))
console.log(la.buckets)
console.log(la.keys())


console.log(la.buckets.length)