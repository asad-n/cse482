class Node {
    constructor(val) {
	this.val = val
	this.left = null
	this.right = null
    }
}

class BST {
    constructor() {
	this.root = new Node(null)
    }

    insert(val) {
	this.insert_val(val, this.root)
	console.log(`${val} has been inserted`)
    }

    insert_val(val, node) {
	if(node.val == null) {
	    node.val = val
	    return
	} else if(val < node.val) {
	    if(node.left == null)
		node.left = new Node(null)
	    this.insert_val(val, node.left)
	} else {
	    if(node.right == null)
		node.right = new Node(null)
	    this.insert_val(val, node.right)
	}
    }

    print_level_order() {
	if(this.root.val == null)
	    return `Empty tree`

	let visited = [],
	    queue = [],
	    current = this.root
	
	queue.push(current)

	while(queue.length) {
	    current = queue.shift()
	    visited.push(current.val)

	    if(current.left != null)
		queue.push(current.left)

	    if(current.right != null)
		queue.push(current.right)
	}
	return visited
    }

    search(val) {
	if(this.root.val === null)
	    return `Empty tree`

	let current = this.root

	while(current !== null) {
	    if(val === current.val)
		return true
	    else if(val < current.val)
		current = current.left
	    else
		current = current.right
	}
	return false
    }

    print_pre_order() {
	if(this.root.val === null)
	    return `Empty tree`

	this.print_pre_order_helper(this.root)
    }

    print_pre_order_helper(current) {
	if(current !== null) {
	    console.log(current.val)
	    this.print_pre_order_helper(current.left)
	    this.print_pre_order_helper(current.right)
	}
    }
    
    // print_post_order() {

    // }
}
