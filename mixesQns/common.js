//switch
let day=3
switch(day){
    case 1:
        console.log("sunday")
        break;

        case 2:
            console.log("Tuesday")
            break;

            case 3:
                console.log("Wednesday")
                break;

                case 4:
                    console.group("Thursday")
                    break;

                    case 5:
                        console.log("Friday")
                        break;

                        case 6:
                            console.log("Saturday")
                            break;

                            case 7:
                                console.log("Monday")
                                break;

                                default :
                                console.log("Pls enter a valid number")


                                

}

////Optional Chaining
let user={
    name:"Asiaybi",
    address:{
        place:"Kasaragod",
        state:"Kerala"
    }
}

console.log(user.address?.state)

//Deep copy
const result = JSON.parse(JSON.stringify(user))
result.address.state="Tamilnadu"
console.log(user)
console.log(result)


//shallow copy
let shallow1={...user}
let shallow2= Object.assign({},user)
console.log(shallow1)
console.log(shallow2)

//set Interval &clearInterval
let i=1
const timer =setInterval(()=>{
    console.log(i)
    if(i>10){
        clearInterval(timer)
    }i++
    }
,2000)

//setTimeout 
setTimeout(()=>{
    for(let i=1;i<=10;i++){
        console.log(i)
    }
},1000)

function add (callback,...nums){
    let sum =nums.reduce((acc,curr)=>acc+curr,0)
    callback(sum)
}
function print(result){
    console.log(`Result is ${result}`)
}

add(print,1,2,3,4,5,6)