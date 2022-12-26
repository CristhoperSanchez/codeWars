
/* The goal here is to return a combination of numbers from a text string
if a charcter is not a valid character do not return it */



function alphabetPosition(text){
    return text.split("").filter(char => /\w/.test(char)).map(character =>{
            return (character.toLowerCase().charCodeAt() - 96)
}).join(" ")};


console.log(alphabetPosition("The sunset sets at twelve o\' clock."))