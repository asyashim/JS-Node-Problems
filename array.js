//Find the length of without using length property
let arr=[1,2,3,4,5,6,7]
let count=0
for(let i of arr){
    count++
}
console.log(count)

//Add an element to an array without .push or .unshift.
let arr1=[1,2,3,4,5,6,7]
arr1[arr1.length]=8
console.log(arr1)

//Add element at the beginning of an array without .unshift
let arr2=[1,2,3,4,5,6,7]    
for(let i=arr2.length;i>0;i--){
    arr2[i]=arr2[i-1]
}
arr2[0]=0
console.log(arr2)   
//Remove the last element of an array without .pop
let arr3=[1,2,3,4,5,6,7]
arr3.length=arr3.length-1
console.log(arr3)       

//Remove the first element of an array without .shift
let arr4=[1,2,3,4,5,6,7]                    
for(let i=0;i<arr4.length-1;i++){
    arr4[i]=arr4[i+1]
}
arr4.length=arr4.length-1
console.log(arr4)

//
// // Reverse an array without using built-in methods.
let arr5=[1,2,3,4,5,6,7]
let reversed=[]     
for(let i=arr5.length-1;i>=0;i--){
    reversed.push(arr5[i])
}
console.log(reversed)   


 // Merge two arrays manually.
let arr6=[1,2,3]
let arr7=[4,5,6]
let merged=[]      
let index=0
for(let i=0;i<arr6.length;i++){
    merged[index]=arr6[i]
    index++
}
for(let j=0;j<arr7.length;j++){
    merged[index]=arr7[j]
    index++
}
console.log(merged)

 //  Find if a given element exists in an array (no .includes)
 let arr8=[1,2,3,4,5,6,100,7]
 let val=100
 let found=false
 for(let i=0;i<arr8.length;i++){
    if(arr8[i]===val){      
        found=true
        break
    }
    }

if(found){
    console.log(`${val} exists in the array`)
}

//  Find the first occurrence of a target value in an array.
let arr9=[1,2,3,100,4,5,6,100,7]
let target=100
let index1=0  
for(let i=0;i<arr9.length;i++){
    if(arr9[i]===target){
        index1=i
        break
    }
}
console.log(`First occurrence of ${target} is at index ${index1}`)

//  Sum all the elements in an array.
let arr10=[1,2,3,4,5,6,7]
let sum=0   
for(let i=0;i<arr10.length;i++){
    sum+=arr10[i]
}   
console.log(`Sum of all elements in the array is ${sum}`)

//  Find the maximum and minimum values in an array.        
let arr11=[1,2,3,4,5,6,7]

let max=arr11[0]
let min=arr11[0]    
for(let i=1;i<arr11.length;i++){
    if(arr11[i]>max){
        max=arr11[i]
    }       

    if(arr11[i]<min){
        min=arr11[i]
    }           
}
console.log(`Maximum value in the array is ${max}`)
console.log(`Minimum value in the array is ${min}`)

//  Find the average of numbers in an array.
let arr12=[1,2,3,4,5,6,7]
let sum1=0  
for(let i=0;i<arr12.length;i++){
    sum1+=arr12[i]
}
let average=sum1/arr12.length
console.log(`Average of numbers in the array is ${average}`)        

// Count the number of even and odd numbers in an array.
let arr13=[1,2,3,4,5,6,7]
let evenCount=0
let oddCount=0      
for(let i=0;i<arr13.length;i++){


    if(arr13[i]%2===0){
        evenCount++
    }           
    else{
        oddCount++
    }       
}
console.log(`Number of even numbers in the array is ${evenCount}`)
console.log(`Number of odd numbers in the array is ${oddCount}`)


//  Count how many times each element appears.
let arr14=[1,2,3,4,5,6,7,1,2,3]
let freq={}
for(let i=0;i<arr14.length;i++){
    if(freq[arr14[i]]){
        freq[arr14[i]]++
    }else{
        freq[arr14[i]]=1
    }       
}
console.log(freq)

// Find the second largest number.
let num1=100
let num2=300
let num3=200

if(num1>num2 && num1>num3){
    if(num2>num3){
        console.log(`Second largest number is ${num2}`)     
    }else{
        console.log(`Second largest number is ${num3}`)
    }   
}else if(num2>num1 && num2>num3){
    if(num1>num3){
        console.log(`Second largest number is ${num1}`)
    }else{
        console.log(`Second largest number is ${num3}`)
    }
}else{
    if(num1>num2){
        console.log(`Second largest number is ${num1}`)
    }else{
        console.log(`Second largest number is ${num2}`)
    }   
}
 
//  Check if a number is prime or not.
let num4=101
let isPrime=true;   
if(num4<=1){
    console.log(`${num4} is not a prime number`)
}           

else{
    for(let i=2;i<num4/2;i++){
        if(num4%i===0){
            isPrime=false
            break
        }
    }       
    if(isPrime){
        console.log(`${num4} is a prime number`)
    }else{
        console.log(`${num4} is not a prime number`)
    }       
}   

//  Move zeros to the end of an array.
let arr15=[0,1,0,3,12]
let nonZeroIndex=0      

for(let i=0;i<arr15.length;i++){
    if(arr15[i]!==0){
        arr15[nonZeroIndex]=arr15[i]
        nonZeroIndex++
    }       

}
for(let i=nonZeroIndex;i<arr15.length;i++){
    arr15[i]=0
}           
console.log(arr15)      

//  Move zeros to the beginning of an array.
let arr16=[0,1,0,3,12]
let nonZeroIndex1=arr16.length-1    
for(let i=arr16.length-1;i>=0;i--){
    if(arr16[i]!==0){
        arr16[nonZeroIndex1]=arr16[i]
        nonZeroIndex1--
    }       
}
for(let i=nonZeroIndex1;i>=0;i--){
    arr16[i]=0
}
console.log(arr16)

//  Sort an array in ascending order without using built-in methods.
let arr17=[5,2,9,1,5,6]
for(let i=0;i<arr17.length-1;i++){

    for(let j=0;j<arr17.length-1-i;j++){
        if(arr17[j]>arr17[j+1]){
            let temp=arr17[j]
            arr17[j]=arr17[j+1]
            arr17[j+1]=temp
        }   
}
}
console.log(arr17)

//  Print multiples of 3 using a do-while loop.
let num5=1
do{
    if(num5%3===0){     

        console.log(num5)
    }       

}while(num5++<=30) 


    
//  Find all occurrences of a target value in an array.
let array=[1,2,3,100,4,5,6,100,7]
let target1=100
let occurrences=[]
for(let i=0;i<array.length;i++){
    if(array[i]===target1){
        occurrences.push(i)
    }
}
console.log(`Occurrences of ${target} in the array are at indices: ${occurrences}`)

// Find max and min values without Math.max or Math.min.
let arr18=[1,2,3,4,5,6,7]
let max1=-Infinity;
let min1=Infinity;
for(let num of arr18){
    if(num>max1){
        max1=num
    }       
    if(num<min1){
        min1=num
    }


    
}
console.log(`Maximum value in the array is ${max}`)
console.log(`Minimum value in the array is ${min}`)

//  Remove duplicates from an array without built-in methods.
let array1=[1,2,3,4,5,67,1,2,3]
for(let i=0;i<array1.length;i++){
    for(let j=i+1;j<array1.length;j++){
if(array1[i]===array1[j]){
    array1[j]=array1[j+1]
    array1.length++
}
    }
}
console.log(array1)
