const fibonacci=(function(){

    const cashe = new Map();
    function fib(n){
        let result;
        if (n in cashe){
            result=cashe[n];
        }else{
            if (n <= 1){
                result=n;
            }else{
                result=fib(n-1) + fib(n-2);
            }
            cashe.set(n, result);

        }
        return result;
    }
    return fib;

})();

function fibonacci2(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.time("memorized part")
console.log(fibonacci(40))
console.timeEnd("memorized part")

console.time(" not memorized part")
console.log(fibonacci2(40))
console.timeEnd(" not memorized part")

