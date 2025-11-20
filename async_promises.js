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
    };

    function fetchUserPosts(userId){
        return new Promise ((resolve)=>{
        setTimeout(()=>{
                resolve({
                    id: userId,
                    title: "Zahraa Thompson",
                    content:"????",
                    userid: 12345
                });
        },2000);
    });
    }


function getUserInfo(){
    fetchUserData()
    .then((user)=>{
        return fetchUserPosts(user.id).then((posts)=>{
            return{user,posts};
        });
    })
    .then((combinedData)=>{
        console.log("Combined Data:", combinedData);
    })
    .catch((error)=>{
        console.error("Error:",error);
    });
}

getUserInfo();

// TODO: Convert the above Promise chain to use async/await
// - Use try/catch for error handling
// - Log each step of the process
// - Return combined user and posts data

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
    };

    function fetchUserPosts(userId){
        return new Promise ((resolve)=>{
        setTimeout(()=>{
                resolve({
                    id: userId,
                    title: "Zahraa Thompson",
                    content:"????",
                    userid: 12345
                });
        },2000);
    });
    }

async function getUserInfo() {
    try{
        console.log("Getting data...");
        const user = await fetchUserData();
        console.log("data received:",user);

        console.log("Getting posts...")
        const posts = await fetchUserPosts(user.id);
        console.log("Posts received:", posts );

        const combinedData = {user, posts};
        console.log("Combined data ready:",combinedData)

        return combinedData;

    }catch(error){
        console.error("Error occured:", error);
    }
}

getUserInfo();

// TODO: Create a function that fetches multiple users in parallel
// - Take an array of userIds
// - Fetch all users simultaneously using Promise.all
// - Handle errors for individual user fetches
// - Return array of successfully fetched users

const users = [
    { id:12345, name: "Zahraa Thompson", email:"zahraathompson@gmail.com",registrationDate : "11 October 2078"},
    { id:23456, name: "Nina Lewis", email:"ninalewis@gmail.com",registrationDate : "11 October 2078"},
    { id:34567, name: "Yaseen Esseck", email:"yaseenesseck@gmail.com",registrationDate : "11 October 2078"},
];

function getUserData(userId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const user=users.find(u=>u.id === userId);

            if (user){
                resolve(user);
            }else{
                reject("User not found");
            }
        },1000);
    });
}

function fetchMultipleUsers(userIds){
    return Promise.allSettled(userIds.map(getUserData))
      .then(results => results
        .filter(res => res.status === 'fulfilled')
        .map(res => res.value))
      .catch(()=>[]);
}

fetchMultipleUsers([12345,23456,34567]).then(console.log);

// TODO: Create a function that fetches users and their posts in parallel
// - Fetch user data for multiple users
// - Once user data is received, fetch all their posts in parallel
// - Combine user and posts data
// - Handle errors appropriately

const Users = [
    { id:12345, name: "Zahraa Thompson", email:"zahraathompson@gmail.com",registrationDate : "11 October 2078"},
    { id:23456, name: "Nina Lewis", email:"ninalewis@gmail.com",registrationDate : "11 October 2078"},
    { id:34567, name: "Yaseen Esseck", email:"yaseenesseck@gmail.com",registrationDate : "11 October 2078"},
];

const Posts = [
    { postId: 101, userId:12345, content: "Hi", postDate: "12 August 3078"},
    { postId: 102, userId:23456, content: "Hey", postDate: "28 July 3040"},
    { postId: 103, userId:34567, content: "Hello", postDate: "1 February 2089"},
];

async function fetchUsersAndPosts(userIds){
    try{
        const users = await fetchUsersAndPosts(userIds);
    }catch (error){
        console.error(`failed to fetch posts for user ${Users.id}:`,error);
        return [];
    }
});

function linkPostsToUsers(posts, users){
    return posts.map(post => {
        const user = users.find(u => u.id === post.userId);
        
        if (user){
          return {
            postId: post.postId,
            content: post.content,
            postDate: post.postDate,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                registrationDate: user.registrationDate
            }
          };
        }else{
            return{
                postId: post.postId,
                content: post.content,
                postDate: post.postDate,
                user: "Unknown user"
            };
        }  
    });
}

console.log(linkPostsToUsers(Posts, Users));










function getUserData(userId){
        return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            const success= true;
            if(success){
                resolve([{
                    id: userId,
                    title: "Zahraa Thompson",
                    content:"????",
                    userid: 12345
                },
                {   
                    id: userId,
                    title: "Nina Lewis",
                    content:"????",
                    userid: 23456
                },
                {
                    id: userId,
                    title: "Yaseen Esseck",
                    content:"????",
                    userid: 34567
                }
                ]);
            }else{
                reject("Failed to get data");
            }

        },2000);
    });
    }

    function fetchMultipleUsers(userIds){
        const userPromises = userIds.map(userId => getUserData(userId));

        return Promise.allSettled(userPromises)
        .then(results=>{
            const successfulResults= results
            .filter(result=> result.status === 'fulfilled')
            .map(result => result.value);

            return successfulResults;
        })
        .catch(error =>{
            console.error("Error getting users:",error);
            return[];
        });
    }

    fetchMultipleUsers([12345,23456,34567])
       .then(sucessfulUsers =>{
          console.log("Successfully fetched users:", sucessfulUsers);
       })
       .catch(error=>{
        console.error("Error:",error)
       });













































function getUserPosts(){
    return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        const success= true;
        if(success){
            resolve([{
                id:162231143419,
                title: "Zahraa Thompson",
                content:"????",
                userid: 12345
            },
            {
                id:162239143419,
                title: "Nina Lewis",
                content:"????",
                userid: 2467
            },
            {
                id:162231148419,
                title: "Yaseen Essack",
                content:"????",
                userid: 68252
            }
        ]);
        }else{
            reject("Failed to fetch data");
        }
    },1000);
});
}