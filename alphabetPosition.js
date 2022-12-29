
/* The goal here is to return a combination of numbers from a text string
if a charcter is not a valid character do not return it */



function alphabetPosition(text){
    return text.split("").filter(char => /\w/.test(char)).map(character =>{
            return (character.toLowerCase().charCodeAt() - 96)
}).join(" ")};







let alphabetsoup = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

console.log(alphabetsoup("the sunset sets at twelve o\' clock."))
console.log(alphabetsoup("20 -21 43"))




function alphabet(text){
    var result = "";

    for(var i = 0; i< text.length; i++){
        var code = text.toUpperCase().charCodeAt(i)
        if(code > 64 && code < 91) result += (code-64) + " ";
    }
    return result.slice(0, result.length-1)

}



console.log(alphabet("The sun sets at twelve o\' clock"))
console.log(alphabet("29 14 23"))