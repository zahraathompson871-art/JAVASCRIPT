// TODO: Create a Promise that simulates fetching user data
// - The Promise should resolve after 1.5 seconds
// - If userId is positive, resolve with user data object
// - If userId is negative or zero, reject with an error
// - User data should include: id, name, email, and registrationDate

const fetchingUserData = new Promise ((resolve,reject)=>{
    console.log("Fetching User Data...")

    setTimeout(()=>{
        const success= true
        if(success){
            resolve({
                id:162231143419,
                name: "Zahraa Thompson",
                email:"zahraathompson@gmail.com",
                registrationDate : "11 October 2078"
            });
        }else{
            reject("Failed to fetch data")
        }
    },1500);
});

fetchingUserData.then(user =>{
    console.log("User data received",user);
})
.catch(error => { console.log("Error",error);
});

// TODO: Create a function that uses template literals for HTML generation

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

// TODO: Create a Promise that simulates fetching user posts
// - Should resolve after 1 second
// - Return an array of post objects
// - Each post should have: id, title, content, and userId
// - If userId doesn't exist, reject with error

const fetchingUserPost = new Promise ((resolve,reject)=>{
    console.log("Fetching User Post...")

    setTimeout(()=>{
        const success= true
        if(success){
            resolve([{
                id:162231143419,
                title: "Zahraa Thompson",
                content:"????",
                userid: 12345
            },
            {
                id:162231143419,
                title: "Nina Lewis",
                content:"????",
                userid: 2467
            },
            {
                id:162231143419,
                title: "Yaseen Essack",
                content:"????",
                userid: 68252
            }]
        );
        }else{
            reject("Failed to fetch data")
        }
    },1000);
});

fetchingUserPost.then(posts =>{
    console.log("User Posts",posts);
})
.catch(error => { console.log("Error",error);
});

// TODO: Create a function that chains multiple Promises together
// - First fetch user data
// - Then fetch their posts
// - Combine the data into a single object
// - Handle any errors that occur in the chain

function fetchUserData(){
     return new Promise ((resolve)=>{
    setTimeout(()=>{
            resolve({
                id:162231143419,
                name: "Zahraa Thompson",
                email:"zahraathompson@gmail.com",
                registrationDate : "11 October 2078"
            });
    },1500);
});
}