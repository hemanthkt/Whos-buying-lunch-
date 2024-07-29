var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]


function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    var random =  Math.floor(Math.random() * names.length);
    var randomName = names[random];
    return (randomName + " is going to buy lunch today");
    
    
    


/******Don't change the code below*******/    
}

console.log(whosPaying(names));
