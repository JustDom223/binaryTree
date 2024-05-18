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
      find(key, node = this.root) {
        if (node === null) return null;

        if (key < node.data) return this.find(key, node.left);
        else if (key > node.data) return this.find(key, node.right);
        else return node;
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

      preOrder(node = this.root, callback) {
        if (node == null) return [];
        let newArray = [];
        if (callback) {
          callback(node.data);
        } else {
          newArray.push(node.data);
        }
  
        newArray = newArray.concat(this.preOrder(node.left, callback));
      
        newArray = newArray.concat(this.preOrder(node.right, callback));
      
        return newArray;
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

      depth(key, node = this.root, count = 0){
        if (node === null) return -1;
        
        if (key < node.data) return this.depth(key, node.left, count + 1);
        else if (key > node.data) return this.depth(key, node.right, count + 1);
        else return count  + 1;
      }

      isBalanced(node = this.root){
          if(node == null) return true

          const leftHeight = this.height(node.left)
          const rightHeight = this.height(node.right)
          const isCurrentNodeBalanced = Math.abs(leftHeight - rightHeight) <= 1
          return isCurrentNodeBalanced && this.isBalanced(node.left) && this.isBalanced(node.right)
         
      }

      rebalance(){
        const dataArray = this.inOrder()

        this.root = this.buildTree(dataArray)
      }
    }
    
    //take the node that you are looking for
    //starting at the root we need to recursivly check if the left or right node is the one we are looking for. 
    //each time we go deeper into the tree we need to increase the count

function randomNumber(size, min, max){
  let numRay = []
  for(let i = 0; i < size; i++){
    numRay.push(Math.floor(Math.random() * (max - min) + min))
  }
  return numRay
}

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


function testBSTClassFunctions(){
  console.log('Testing BST class Functions')
  
  
  console.log('Create array of 100 random numbers')
  const arrayOf100 = randomNumber(50,0,100)
  
  
  console.log('Create a new tree from the array')
  const BST = new Tree(arrayOf100)
  prettyPrint(BST.root)

  console.log(`The binary tree is balanced:${BST.isBalanced()}`)
  
  
  console.log('Traversing the BST')
  console.log('Level Order Traversal: This is also known as breadth-first traversal. The tree is traversed level by level, starting from the root and moving horizontally across each level from left to right.\n This traversal uses a queue to keep track of the nodes at the current level before moving on to the next level.')
  console.log(BST.levelOrder())
  
  console.log('Pre-Order Traversal: In this depth-first traversal method, the nodes are visited in the following order: root, left subtree, and then right subtree.\n Starting from the root, you process the current node’s data, then recursively traverse the left subtree, followed by the right subtree.')
  console.log(BST.preOrder())
  
  console.log('Post-Order Traversal: Another depth-first approach where the nodes are visited in the following order: left subtree, right subtree, and then root. This means you first traverse the left subtree, then the right subtree, and finally process the current node’s data.\n This traversal is often used for operations like deleting the tree, as it processes children before their parent.')
  console.log(BST.postOrder())
  
  console.log('In-Order Traversal: This traversal method is also depth-first and specifically for binary search trees (BSTs), it results in visiting the nodes in ascending order. The order of visitation is left subtree, root, and then right subtree.\n By recursively traversing the left subtree, processing the current node’s data, and then traversing the right subtree, you can retrieve all the nodes in sorted order.')
  console.log(BST.inOrder())
  
  
  console.log('Adding numbers above 100:')
  BST.insert(101)
  BST.insert(102)
  BST.insert(103)
  BST.insert(104)
  BST.insert(105)
  BST.insert(106)
  BST.insert(107)
  BST.insert(108)
  BST.insert(109)
  BST.insert(110)
  prettyPrint(BST.root)
  console.log(`The binary tree is balanced:${BST.isBalanced()}`)
  BST.rebalance()
  prettyPrint(BST.root)
  console.log(`The binary tree is balanced:${BST.isBalanced()}`)
  console.log('Traversing the BST')
  console.log('Level Order Traversal: This is also known as breadth-first traversal. The tree is traversed level by level, starting from the root and moving horizontally across each level from left to right.\n This traversal uses a queue to keep track of the nodes at the current level before moving on to the next level.')
  console.log(BST.levelOrder())
  
  console.log('Pre-Order Traversal: In this depth-first traversal method, the nodes are visited in the following order: root, left subtree, and then right subtree.\n Starting from the root, you process the current node’s data, then recursively traverse the left subtree, followed by the right subtree.')
  console.log(BST.preOrder())
  
  console.log('Post-Order Traversal: Another depth-first approach where the nodes are visited in the following order: left subtree, right subtree, and then root. This means you first traverse the left subtree, then the right subtree, and finally process the current node’s data.\n This traversal is often used for operations like deleting the tree, as it processes children before their parent.')
  console.log(BST.postOrder())
  
  console.log('In-Order Traversal: This traversal method is also depth-first and specifically for binary search trees (BSTs), it results in visiting the nodes in ascending order. The order of visitation is left subtree, root, and then right subtree.\n By recursively traversing the left subtree, processing the current node’s data, and then traversing the right subtree, you can retrieve all the nodes in sorted order.')
  console.log(BST.inOrder())
}

testBSTClassFunctions()





















































// prettyPrint(BST.root)
// BST.insert(69)
// BST.insert(14)
// BST.insert(1345)
// BST.insert(1234)
// BST.insert(1233)
// BST.insert(1232)
// BST.insert(1231)
// BST.insert(1230)
// BST.insert(24)
// BST.insert(2)
// BST.insert(10)
// prettyPrint(BST.root)
// BST.delete(10)
// prettyPrint(BST.root)
// BST.delete(9)
// prettyPrint(BST.root)
// BST.delete(6345)
// prettyPrint(BST.root)
// BST.delete(67)
// prettyPrint(BST.root)
// // BST.delete(5)
// // prettyPrint(BST.root)
// // BST.delete(3)
// // prettyPrint(BST.root)
// // BST.delete(4)
// // prettyPrint(BST.root)
// // BST.delete(67)
// // prettyPrint(BST.root)
// // console.log(BST.find(8))

// // let newNode=BST.find(8)
// // console.log(BST.height(newNode))

// // const result = BST.inOrder();
// // console.log(result)
// // const result2 = BST.postOrder();
// // console.log(result2)

// // const depthNode = BST.find(1234)

// // console.log(BST.depth(depthNode.data))
// console.log(BST.isBalanced())


// BST.rebalance()

// prettyPrint(BST.root)
// console.log(BST.isBalanced())



// console.log(arrayOf100)