// NOT Allowed to writr 2 Constrouctor 
class Demo
{
    constructor() // Default 
    {   
        this.No1 = 0;
        this.No2 = 0;

        console.log("Inside constructor");

    }
    constructor(A,B) // Parmetrise
    {   
        this.No1 = A;
        this.No2 = B;

        console.log("Inside  Parmetrised constructor");

    }
}
function main()
{
    let  obj1 = new Demo();
    
    let  obj2 = new Demo(10,11);
    
    
      
}

main();