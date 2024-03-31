class Node{
    constructor (element){
        this.element=element
        this.next=null
    }
}

class linkedlist{
    constructor (){
        this.head=null
        this.size=0
        // console.log('yes')
    }
    addElementAtEnd(element){
        var node=new Node(element)
        if(this.head==null){

            this.head=node
            // console.log(node.element)
        }else{
            let current;
            current=this.head
            while(current.next){
                current=current.next
            }
            current.next=node
            // console.log(node.element)
        }
        
    }
    addElementAtHead(element){
        var node=new Node(element)
        node.next=this.head
        this.head=node
    }
}



function displaylist(linkedlist){
    if(linkedlist.head==null){
        console.log("list empty")
    }else{
        let current;
        current=linkedlist.head
        while(current.next){
            console.log(current.element)
            current=current.next
        }
        console.log(current.element)
    }

}
   

// function display(linkedlist){
//     while(Node.next){
//         console.log(Node.element)
//     }
// }

var newlist= new linkedlist()
newlist.addElementAtEnd(12)
newlist.addElementAtEnd(13)
newlist.addElementAtHead(14)

displaylist(newlist)