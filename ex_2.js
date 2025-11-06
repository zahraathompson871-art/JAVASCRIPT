function sum(z){
    if (typeof z!== "number"){
        return "The value is not a number";
    }
    if (z % 1 !== 0){
        return "The value is not a number";
    }
    let total = 0;
    for (let i = 0; i<=z; i++){
        total += i;
    }
    return total;
};

console.log(sum(11))
console.log(sum(38))
console.log(sum(3.9))
console.log(sum("tears"))

function factorial(a){
    let result=1;

    for(let i=a; i >0;i--){
        result*=i;
    }

    return result;
};

console.log(factorial(5));

function funkyMath(a,b,c,d){
    if (arguments.length===2){
        return b-a;
    }else if (arguments.length===3){
        return a+b+c;
    }else if (arguments.length===4){
        return (a+b)/(c+d);
    }else{
        return "invalid arguments"
    }
};

console.log(funkyMath(8,2));
console.log(funkyMath(1,2,3));
console.log(funkyMath(8,2,3,5));

let numbers=[1, 2 , 33, 45, 6,44]
let oddNumbers = [];

for(let i=0; i<numbers.length;i++){
    if(numbers[i]%2 !==0){
        oddNumbers.push(numbers[i]);
    }
};

console.log(oddNumbers);

let me = {
    firstName:'Zahraa',
    lastName:'Thompson',
    age:19,
    favouriteColour:'lilac',
    dreamCar: 'VW Beetle'
};

me.favouriteColour.food='pasta';

delete me.dreamCar;


