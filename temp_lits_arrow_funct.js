let message = `Hi,
Javacript is showing me flames
I'm gonna crash out`

console.log(message)


function renderUser(user){
    return `
    <div class="user">
    <h2>${user.name}</h2>
    <p>Age: ${user.age}</p>
    <p>City: ${user.city}</p>
    </div>
    `;
}

const html = renderUser({ name: "Alice", age: 25, city: "Paris" });
document.body.innerHTML = html;

const hello = () => greet = "Hello Zahraa";
hello()
console.log(greet)

const numbers = [1,2,3,4,5]
const doubled = numbers.map(n => n*2);
console.log(doubled);