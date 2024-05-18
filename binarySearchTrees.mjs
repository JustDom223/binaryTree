class Node{
    constructor(data,left = null, right = null){
        this.data = data
        this.left = left
        this.right = right
    }
}

class Tree{
    constructor(array){
        this.root = this.buildTree(array)
    }

    buildTree(array) {
        // Sort the array and remove duplicates
        const sortedArray = [...new Set(array)].sort((a, b) => a - b);
        // first time using these 3 things so reread this when you look at this code again
        // const arraySet = new Set(array)//new Set(array): Creates a new Set object from the array. A Set is a collection of values where each value must be unique. This effectively removes any duplicate values from the array.
        // let convertedSet = [...arraySet]//Using ... operator will convert the set into an Array
        // let sortedArray = convertedSet.sort((a, b)=> a - b) //sort will sort the array (pretty self explanatory )


        return this.buildTreeRecursive(sortedArray, 0, sortedArray.length - 1);
      }

    buildTreeRecursive(array, start, end) {
        if (start > end) return null;
      
        let mid = Math.floor((start + end) / 2);
        let node = new Node(array[mid]);
      
        node.left = this.buildTreeRecursive(array, start, mid - 1);
        node.right = this.buildTreeRecursive(array, mid + 1, end);
      
        return node;
      } 
      insert(key){
        let newNode = new Node(key)
        let currentNode = this.root
        let previousNode,direction//create a direction boolean so that i know what leaf to place the new node onto
        while(currentNode){
          if(currentNode.data > newNode.data){
            previousNode = currentNode
            currentNode = currentNode.left
            direction = true
          }else{
            previousNode = currentNode
            currentNode = currentNode.right
            direction = false
          }
        }
        if(direction){
          previousNode.left = newNode
        }else{
          console.log(previousNode)
          previousNode.right = newNode
        }

      }
      delete(key,node = this.root) {
        if(node == null){
          return null
        }
        if (key < node.data){
          node.left = this.delete(key,node.left)
        }else if (key > node.data){
          node.right = this.delete(key,node.right)
        }else{
          let temp;
          if(node.left === null && node.right === null){
            return null
          }else if(node.left == null || node.right == null){
            temp = node.left?node.left:node.right//first time using a ternary operator. Remember to look over this to help reinforce 
            return temp
          }else if (node.left !== null && node.right !== null){
            temp = node.right
            while(temp.left !== null){
              temp = temp.left
            }
            node.data = temp.data
            node.right = this.delete(key, node.right)
            return node
          }
        }
        return node
      }
      find(key,node = this.root){
        if(node == null) return null;

        if(key < node.data){
          node.left = this.find(key,node.left)
        }else if(key > node.data){
          node.right = this.find(key,node.right)
        }else{
          return node
        }
        return node
      }

      levelOrder(callback) {
        let node = this.root;
        if (node == null) return [];
        const queue = [node];
        const resultArray = [];
      
        while (queue.length > 0) {
          const currentNode = queue.shift();
          if (callback) {
            callback(currentNode.data);
          } else {
            resultArray.push(currentNode.data);
          }
      
          if (currentNode.left) queue.push(currentNode.left);
          if (currentNode.right) queue.push(currentNode.right);
        }
      
        if (!callback) {
          return resultArray;
        }
      }

      inOrder(node = this.root, callback){
        if(node == null) return []
        let newArray = this.inOrder(node.left)
        if(callback){
          callback(node.data)
        }else{
          newArray = newArray.concat(node.data)
        }
        newArray = newArray.concat(this.inOrder(node.right))
        return newArray
        
      }
      postOrder(node = this.root, callback){
        if(node == null) return []
        let newArray = this.postOrder(node.left)
        newArray = newArray.concat(this.postOrder(node.right))
        if(callback){
          callback(node.data)
        }else{
          newArray = newArray.concat(node.data)
        }
        return newArray
        
      }

      height(node){
        if(node == null) return -1

        const leftCount = this.height(node.left)
        const rightCount = this.height(node.right)

        return Math.max(leftCount,rightCount) + 1
      }

      depth(node){
        if(node == null) return -1

        const count = 
      }
    }


const thisArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

const BST = new Tree(thisArray)


const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
 

prettyPrint(BST.root)
BST.insert(69)
BST.insert(14)
BST.insert(1345)
BST.insert(1234)
BST.insert(24)
BST.insert(2)
BST.insert(10)
prettyPrint(BST.root)
BST.delete(10)
prettyPrint(BST.root)
BST.delete(9)
prettyPrint(BST.root)
BST.delete(6345)
prettyPrint(BST.root)
BST.delete(67)
prettyPrint(BST.root)
// BST.delete(5)
// prettyPrint(BST.root)
// BST.delete(3)
// prettyPrint(BST.root)
// BST.delete(4)
// prettyPrint(BST.root)
// BST.delete(67)
// prettyPrint(BST.root)
console.log(BST.find(8))

let newNode=BST.find(8)
console.log(BST.height(newNode))

// const result = BST.inOrder();
// console.log(result)
// const result2 = BST.postOrder();
// console.log(result2)