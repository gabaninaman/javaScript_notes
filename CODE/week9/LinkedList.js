let head=null;

function Node(v){
    this.v=v;
    this.next=null;
}

function print(){
    console.log("Printing List");
    if(head==null){
        console.log("list is empty");
        return;
    }
    let temp=head;
    while(temp !=null){
        console.log(temp.v);
        temp=temp.next;
        }
}

function interNode(n){
    if(head == null){
        head=n;
        return;
    }
    var temp=head;
    while(temp.next !=null){
        temp=temp.next;
    }
    temp.next=n;
}

function deleteNode(v){
    if(head == null) return -2;
    let leader = head;
    let follower = head;
    while(leader!=null && leader.v != v){
        follower = leader;
        leader = leader.next;
    }
    if(leader == null) return -1;
    if(head == leader){
        head = head.next;
    }
    else{
        follower.next = leader.next
    }
 }
 
 print();
 insertNode(new Node(10));
 insertNode(new Node(20));
 print();
 insertNode(new Node(30));
 print();
 deleteNode(20);
 print();
 deleteNode(10);
 print();