





function toCamel(string){
    if(string.len < 1) return;
    var modified = string.split(/[\W_]/);
    for(let i=0; i<modified.length; i++){
        if(i > 0){
            var word = modified[i].toLowerCase()
            modified[i] = modified[i][0].toUpperCase() + word.split(1)
        }
    }

    return modified.join("")
};




function toCamelCase(str){
    return str.split(/-|_/g)
    .map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
  }




console.log(toCamel("the-stealth-warrior"))
console.log(toCamel("the_stealth_warrior"))





console.clear()



var string = ["Test", "Okay", "again"];

string.map((word,index,thrid) =>{
    console.log("Word: ", word, "\nIndex: ", index, "\nThird: " , thrid)

})









