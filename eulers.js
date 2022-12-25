



function spinWords(string){
    var array = string.split(" ")
    function flip(string){
        if(string.length < 4) return string;
        string = string.split("").reverse().join("");
        return string
    }
    var newArray = array.map(element => 
        flip(element)
    );

    return newArray.join(" ")
}








// Best Practice


function spinWords2(words){
    return words.split(' ').map(function(word){
        return (word.length > 4) ? word.split("").reverse().join("")
         : word; }).join(' ');
};





// Using Regular Expressions
function spinWords3(string){
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
  }


console.log(spinWords("Welcome to the jungle"));

console.log(spinWords2("Welcome to the jungle"));

console.log(spinWords3("Welcome to the jungle"));
