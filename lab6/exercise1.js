const isPrime = num => new Promise(function(resolve, reject) {
    setTimeout(function (){ 
        
        for(let i = 2, s = Math.sqrt(num); i <=s; i++)
                if(num % i === 0) 
                reject ({prime: false})
                else
                resolve ({prime: num > 1})
                   
    }, 500);
});

//async function asyncFun(num){
   let asyncFun= async (num)=>{
    try{
        console.log(await isPrime(num));
    }catch(error){
        console.log("error")
    }
       
}

console.log ('start');
asyncFun(11)
// isPrime(11)
    // .then(message=> console.log(message))
    // .catch(error=> console.log(error))
console.log ('end');
