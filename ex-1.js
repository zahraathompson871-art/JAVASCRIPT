function multiply(a,b,c){
    return a*b*c
};

let convertToSeconds = function(minutes) {
    return minutes*60;
};

function fahrenheitToCelsius(farenheit){
    return(farenheit - 32) * 5/9
};

function reverseOfString(str){
    return str.split("").reverse().join("");
};

function countVowels(str){
    let count=0;
    const vowels = "aeiouAEIOU";
    for (let i = 0;i<str.length;i++){
        if(vowels.includes(str[i]))
            count++;
    }
    return count
};

function isPrime(number){
    if(number<2)return false;

    for(let i=2;i<=Math.sqrt(number);i++){
        if(number% i===0){
            return false;
        }
    }

    return true;
}