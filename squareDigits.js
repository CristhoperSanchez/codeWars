




function squareDigits(num){
    var numbers = num.toString().split("").map(number=>{
        return Math.pow(Number(number),2);
    });
    return numbers.join("")
}


function square(num){
    var numbers =  num.toString().split("").map(number=>{
        return Math.pow(Number(number,2))
    })

        console.log(numbers);
    return numbers.join("")

}









console.log(squareDigits(3212));
console.log(square(3212));
