var globalCount = "Hi";

function greet(){
      let name="Zahraa";
      return "Hello " + name + "!"
}

console.log(greet())

function modify(){
    let globalCount = "Hey";
    let name = "Zaggie"
}

console.log(globalCount)
console.log(greet())

function Student(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getInfo=function(){
    return this.firstName +' '+this.lastName+' is '+this.age
    }
};

const student1 = new Student('Zahraa','Thompson',19);
const student2 = new Student('Nina','Lewis',25);
const student3 = new Student('Aaminah','Thompson',12);

console.log(student1.getInfo());
console.log(student2.getInfo());
console.log(student3.getInfo());

let profile={
    name:'Zahraa',
    age:19,
    address:{
        street: '12 Rainbow street',
        area: 'Lansdowne',
        City:'Cape Town'
    }
}

console.log(profile.name,profile.age,profile.address)