let numbers = [1,2,3,4,5];
for(let a=1; a<6; a++){
    console.log(a)
}
let a= numbers.length -1;
while(a>=0){
    console.log(numbers[a]);
    a--;
}

for(let a=0; a<6; a++){
    if(numbers[a]%2===0){
        console.log(numbers[a]);
    }
}

let sum=0
for(let a=0; a<numbers.length; a++){
    // while(a<numbers.length){
        sum+=numbers[a];
        console.log(sum);
}