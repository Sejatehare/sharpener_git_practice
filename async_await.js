async function picnicReady() {
    // Write your code here
    try{
        function checkCar(){
        return new Promise((resolve,reject) =>{
            setTimeout(() => {
            const carReady = Math.random() > 0.5;
            if (carReady){
                resolve("Car is ready")
            }
            else{
                reject("Error: Car needs maintenance")
            }
            },2000);
        });
        }
    
        function packForPicnic(){
        return new Promise((resolve,reject) =>{
            setTimeout(() => {
            const itemPacked = Math.random() > 0.5;
            if (itemPacked){
                resolve("Packed everything for picnic")
            }
            else{
                reject("Error: Not have some essentials")
            }
            },1000);
        });
        }
        const step1 = await checkCar();
        console.log(step1)
        
        const step2 = await packForPicnic();
        console.log(step2)
    }
    catch(error){
      console.log(error);
    }
    
  }
  
  picnicReady();