//Generator function

function* count(){
    for(let i=10;i>=2;i-=2){
        yield i
    }
}
let gen = count()
for(let val of gen){
console.log(val)
}