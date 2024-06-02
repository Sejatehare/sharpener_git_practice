function orderFood() {
    return new Promise((resolve,reject) =>{
      setTimeout(() =>{
        const foodDelivered = Math.random() > 0.5;
        if(foodDelivered){
          resolve("Food delivered")
        }
        else{
          reject("Food not delivered")
        }
      },2000);
    });
  }
  
  function orderDessert() {
    return new Promise((resolve,reject) =>{
      setTimeout(() =>{
        const dessertDelivered = Math.random() > 0.5;
        if(dessertDelivered){
          resolve("Dessert delivered")
        }
        else{
          reject("Dessert not delivered")
        }
      },2000);
    });
  }
  
  orderFood()
    .then((foodMsg) => {
      console.log(foodMsg);
      return orderDessert();
    })
    .then((dessertMsg) => {
      console.log(dessertMsg);
      console.log("Dream meal fulfilled");
    })
    .catch((error) => {
      console.log(error);
      console.log("Dream meal failed");
    })