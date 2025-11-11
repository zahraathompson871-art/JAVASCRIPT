function validateAge(age){
    if (age === undefined || age === null){
        throw new Error("You must provide an input");
    }

    if (typeof age !== "number"){
        throw new TypeError("Input must be a number");
    }

    return "Valid age";

}

console.log(validateAge())

try{
    function add(a,b){
        console.log(x);
        return a+b;
    }
    add(2,3)
}
catch(error){
    console.error("An error occured: ",error.message);
}

const stringHelpers = {
    capitalize: (str) => str.charAt(0).toUpperCase()+str.slice(1),
    reverse: (str) => str.split("").reverse().join(""),
    toSnake: (str) => str.trim().toLowerCase().replace (/\s+/g,"_")
};

const arrayHelpers = {
    sum: (arr) => arr.reduce((a,b)=> a+b, 0),
    max: (arr) => Math.max(...arr),
    unique: (arr) => [...new Set(arr)]
};
