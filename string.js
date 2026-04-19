//Find the length of a a string
let str="hello world";
let count=0
let word=str.split("")
for(let num of word){
    count++
}
console.log(count)

//Count how many times each letter appears in a string
let str1="hello world";
let freq={}
for(let char of str1){
    if(freq[char]){
        freq[char]++
    }else{
        freq[char]=1
    }
}
console.log(freq)

//Remove vowels from a astring
let str2="hello world";
let vowels="aeiou";
let res=""
for(let char of str2){
    if(!vowels.includes(char)){
        res+=char

    }
}
console.log(res)

let str3="hello world"

let result=""
let v=["a","e","i","o","u"]
for(let i=0;i<str3.length;i++){
    let isVowel=false
    for(let j=0;j<v.length;j++){
        if(str3[i]!==v[j]){
            isVowel=true
            break
        }
    }
    if(!isVowel){
        result+=str3[i]
    }
}
console.log(result)

//Reverse a astring
let str4="hello world"
let reversed="" 
for(let i=str4.length-1;i>=0;i--){
    reversed+=str4[i]
}       
console.log(reversed)

//Check if a string is palindrome or not
let str5="madam"
let reversed1=""        
for(let i=str5.length-1;i>=0;i--){
    reversed1+=str5[i]
}   
if(str5===reversed1){
    console.log(`${str5} is a palindrome`)
}
else{
    console.log(`${str5} is not a palindrome`)
}


//Find the longest string in an array

let arr=["hello","world","javascript","nodejs"]
let longest=""              
for(let str of arr){
  if(str.length>longest.length){
        longest=str
    }       
}
console.log(`The longest string is: ${longest}`)  

//sort an array of strings based on their lengths
let arr1=["hello","world","javascript","nodejs"]
arr1.sort((a,b)=>b.length-a.length)
console.log(arr1)   