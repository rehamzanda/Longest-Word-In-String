//declare a new fun return the longest word in string
//declare new var to save the array
//declare a default value for the longest word as it is the first word in string or the first element in the array
//for lop insode the array
//if statment to compare the length of each word and get the longest word
//return the number of letters in the word
//call the function 


function findLongestWord(str){
    const myArray= str.split(' ');
    let longeststr = myArray[0];
    for(i=1; i< myArray.length ; i++){
        if (myArray[i].length> longeststr.length){
            longeststr=myArray[i];
        }
    }
    return longeststr.length;
}


//console.log(findLongestWord("The quick brown fox jumped over the lazy dog")) ; 
console.log(findLongestWord("May the force be with you"));