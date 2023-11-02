
// pizza order using promise

let pizza=new Promise((resolve,reject)=>{
    let order=prompt("Enter Your Order");

    if((order=="Pizza")||(order=="pizza")){
        setTimeout(()=>{
        resolve("Thank You, Order is Placed")
    },1000)
    }

    else if(order!=="Pizza"){
        reject(`${order} is not available`) 
    }
})

pizza.then((ans)=>{
    console.log(ans);
}).then(function(){
    setTimeout(function(){
        console.log("Please Wait order is preparing in PizzaHub")
    },3000)
}).then(function(){
    setTimeout(function(){
        console.log("Order on the way, thank you Robin for the your order")
    },5000)
})
.catch((err)=>{
    console.log(err);
})



// head or tail using promise


let coin=new Promise((resolve,reject)=>{
    let value=prompt("Head or Tail");
    if((value=="Head")||(value=="head")){
        resolve("Win")
    }
    else if((value=="Tail")||(value=="tail")){
        reject("Loss")
    }
    else{
        reject(" Value Error")
    }
})

coin.then((head)=>{
    console.log(head);
})
.catch((head)=>{
    console.log(head);
})