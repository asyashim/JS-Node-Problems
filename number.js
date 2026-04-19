//Find the number is prime or not
let num=101
let isPrime=true;
if(num<=1){
    console.log(`${num } is not a prime number`)
}
else{
    for(let i=2;i<num/2;i++){
        
        if(num%i===0){
            isPrime=false
            break
        }
    }
    if(isPrime){
        console.log(`${num} is a prime number`)
    }else{
        console.log(`${num} is not a prime number`)
    }
}