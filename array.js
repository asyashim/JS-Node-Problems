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
    for(let k=j;k<array1.length;k++){
        array1[k]=array1[k+1]
        array1.length--
    }j--
}
    

    }
}
console.log(array1)

//  Find the difference between max and min values in an array.
let arr19=[1,2,3,4,5,6,7]
let max2=arr19[0]
let min2=arr19[0]

for(let i=1;i<arr19.length;i++){    
    if(arr19[i]>max2){


        max2=arr19[i]
    }       

    if(arr19[i]<min2){
        min2=arr19[i]
    }       
}
let difference=max2-min2
console.log(`Difference between max and min values in the array is ${difference}`)


//  Check if two arrays are equal.
let arr20=[1,2,3,4,5]
let arr21=[1,2,3,4,5]
let areEqual=true       
if(arr20.length!==arr21.length){
    areEqual=false
}
else{
    for(let i=0;i<arr20.length;i++){
        if(arr20[i]!==arr21[i]){
            areEqual=false
            break
        }
    }   
}
console.log(`Arrays are ${areEqual ? 'equal' : 'not equal'}`)


//  Find common elements between two arrays.
let arr22=[1,2,3,4,5]
let arr23=[4,5,6,7,8]
let commonElements=[]
for(let i=0;i<arr22.length;i++){
    for(let j=0;j<arr23.length;j++){
        if(arr22[i]===arr23[j]){
            commonElements.push(arr22[i])
            break
        }
    }
}
console.log(`Common elements between the two arrays are: ${commonElements}`)

//  Split an array at a given index.
let arr24=[1,2,3,4,5,6,7]
let index2=4
let firstPart=[]
let secondPart=[]
for(let i=0;i<arr24.length;i++){
    if(i<index2){
        firstPart.push(arr24[i])
    }else{
        secondPart.push(arr24[i])
    }   
}
console.log(`First part of the array: ${firstPart}`)
console.log(`Second part of the array: ${secondPart}`)

// Check if an array is a palindrome
let arr25=[1,2,3,2,1]
let isPalindrome=true       
for(let i=0;i<arr25.length/2;i++){
    if(arr25[i]!==arr25[arr25.length-1-i]){
        isPalindrome=false
        break
    }   
}
console.log(`Array is ${isPalindrome ? 'a palindrome' : 'not a palindrome'}`)

//  Find the union of two arrays (no duplicates).
let arr26=[1,2,3,4,5]
let arr27=[4,5,6,7,8]
let union=[]        
for(let i=0;i<arr26.length;i++){
    if(!union.includes(arr26[i])){
        union.push(arr26[i])
    }
}
for(let j=0;j<arr27.length;j++){
    if(!union.includes(arr27[j])){
        union.push(arr27[j])
    }   
}   

console.log(`Union of the two arrays is: ${union}`) 


// Merge two sorted arrays into one sorted array.
let arr28=[1,3,5,7]
let arr29=[2,4,6,8]
let mergedSorted=[] 
let index3=0
for(let i=0;i<arr28.length;i++)  {
    mergedSorted[index3]=arr28[i]
    index3++
} 
for(let j=0;j<arr29.length;j++){
    mergedSorted[index3]=arr29[j]
    index3++
}   
// Sort the merged array
for(let i=0;i<mergedSorted.length-1;i++){
    for(let j=0;j<mergedSorted.length-1-i;j++){         
            
        if(mergedSorted[j]>mergedSorted[j+1]){


            let temp=mergedSorted[j]
            mergedSorted[j]=mergedSorted[j+1]
            mergedSorted[j+1]=temp
        }       

    }
}   

console.log(`Merged and sorted array is: ${mergedSorted}`)
//  Delete even numbers from an array.
let arr30=[1,2,3,4,5,6,7,8,9]
for(let i=0;i<arr30.length;i++){
    if(arr30[i]%2===0){ 
        for(let j=i;j<arr30.length-1;j++){
            arr30[j]=arr30[j+1]
        }           
        arr30.length--
        i--
    }       
}
console.log(`Array after deleting even numbers: ${arr30}`)

//  Delete prime numbers from an array.
let arr31=[1,2,3,4,5,6,7,8,9]
for(let i=0;i<arr31.length;i++){
    let num=arr31[i]        
    let isPrime=true
    if(num<=1){
        isPrime=false
    }       
    else{
        for(let j=2;j<num/2;j++){
            if(num%j===0){
                isPrime=false
                break
            }   
        }
    }       
    if(isPrime){
        for(let k=i;k<arr31.length-1;k++){
            arr31[k]=arr31[k+1]
        }       
        arr31.length--
        i--
    }

}
console.log(`Array after deleting prime numbers: ${arr31}`)

// Find the smallest prime number.
function isPrime(num){
    if(num<=1){
        return false
    }       
    for(let i=2;i<num/2;i++){
        if(num%i===0){
            return false
        }

    }   
    return true
}       
let smallestPrime=null
for(let i=2;i<100;i++){
    if(isPrime(i)){     


        smallestPrime=i
        break
    }       
}
console.log(`Smallest prime number is: ${smallestPrime}`)   

