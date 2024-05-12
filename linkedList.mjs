
class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
        
        
    }
    
    // Insert first node
    // prepend(value) adds a new node containing value to the start of the list
    insertFirst(data){
        this.head = new Node(data, this.head)
        this.size ++
    }
    
    
    // Insert last node
    // append(value) adds a new node containing value to the end of the list
    insertLast(data){
        let node = new Node(data)
        let current
        
        // if empty, make head
        if(!this.head){
            this.head = node
        }else{
            current = this.head
            
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
    
    // Insert at index
    
    insertAtIndex(index, data){
        // If index is out of range then return
        if(index > 0 && index > this.size){
            return
        }
        // If first index
        if(index === 0){
            this.insertFirst(data)
            return
        }
        const node = new Node(data)
        let current,previous;
        
        // Set current to first
        current = this.head
        let count = 0;
        
        while(count < index){
            previous = current; //Node before the index
            count ++;
            current = current.next; // Node after the index
        }
        node.next = current;
        previous.next = node;
        
        this.size ++
    }
    // Get at index
    getIndex(index){
        let current = this.head;
        let count = 0;
        
        while(current){
            if(count == index){
                console.log(current.data)
            }
            count ++;
            current = current.next
        }
        
        return null;
    }
    // head returns the first node in the list
    returnHead(){
        return this.head
    }
    // tail returns the last node in the list
    returnTail(){
            let current = this.head
            
            while(current.next){
                current = current.next
            }
            return current
        }

    
    // size returns the total number of nodes in the list
    returnNodeCount(){
        return this.size
    }
    // Remove first
    removeFirst(){
        if(this.head){
            this.head = this.head.next
            this.size--
        }
    }
    // Remove last
    removeLast(){
        let current = this.head
        let previous
        while(current.next){
            previous = current
            current = current.next
        }
        previous.next = null
        this.size --
    }
    // Get first
    // Get last
    // at(index) returns the node at the given index
    // pop removes the last element from the list
    // contains(value) returns true if the passed in value is in the list and otherwise returns false.
    // find(value) returns the index of the node containing value, or null if not found.
    // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    
    
    
    
    
    // Remove at index
    removeAtIndex(index){
        if(index > 0 && index > this.size){
            return
        }
        let current = this.head
        let previous
        let count = 0
        // Remove first
        if (index === 0){
            this.head = current.next
        }else{
            while (count < index){
            count++
            previous = current
            current = current.next
        }
        previous.next = current
        }
        this.size--
    }
    // Clear list

    clearList(){
        this.head = null;
        this.size = 0
    }

    // Print list data

    printListData(){
        let current = this.head

        while(current){
            console.log(current.data)
            current = current.next
        }
    }






}


const ll = new LinkedList()

ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertFirst(400)
ll.insertAtIndex(0,350)

// ll.insertLast(500)

// ll.printListData()

ll.getIndex(0)
ll.removeAtIndex(0)
ll.getIndex(0)

console.log(ll.returnTail())
console.log(ll.returnHead())

console.log(ll.returnNodeCount())