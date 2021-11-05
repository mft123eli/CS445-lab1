const isPrime = num => new Promise(function(resolve, reject) {
    setTimeout(function (){ 
        
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
                if(num % i === 0) 
                reject ({prime: false})     
                else
                resolve ({prime: true})  
                
    }, 500);
});
console.log ('start');
isPrime(4)
    .then(message=> console.log(message))
    .catch(error=> console.log(error))
console.log ('end');

