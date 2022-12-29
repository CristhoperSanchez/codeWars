


function count(string){
    var dict = {}
    if(string.len <1) return dict;

    string.split("").map(letter=>{
        if(dict[letter] == undefined) dict[letter] = 1;
        else{
            dict[letter] +=1;
        }
    })


    return dict
 }









console.log(count("ababa"))