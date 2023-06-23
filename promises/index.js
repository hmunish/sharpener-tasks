// const posts = [
//     {id: 1, body: "First Post" },
//     {id: 2, body: "Second Post" }
// ]

// let userLastActivityTime;

// const createPost = function(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push({id: 3, body: "third post"});
//             resolve(posts);
//         }, 2000);
//     })
// }

// const deletePost = function(){
//     return new Promise((resolve, reject) => {
//         posts.pop();
//         resolve(posts);
//     })
// }

// const updateLastUserActivityTime =  function(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             userLastActivityTime = new Date();
//             resolve(userLastActivityTime);
//         }, 1000)
//     })
// }

// const result = Promise.all([createPost(), updateLastUserActivityTime()]);
// result.then((res) => {
//     console.log(res);
//     return deletePost();
// }).then((res) => console.log(posts));


// Movie example

const person3Ticket = new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, 'ticket');
    });

const getPopcorn =  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'popcorn');
});

const addButter =  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'butter');
});

const getColdDrinks = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Cold drinks');
})

const movie = async function(){
    try{
    let [ticket, popcorn, butter, coldDrinks] = await Promise.all([person3Ticket, getPopcorn, addButter, getColdDrinks]);

  console.log(`got the ${ticket}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "i am hungry"`);
  console.log(`Husband: here is ${popcorn}`);
	console.log(`Husband:we should go in now`);
  console.log(`Wife: "I dont like popcorn without butter!"`);
  console.log(`added ${butter}`);
  console.log(`Husband:Anything else darling`);
	console.log(`Wife: lets go we are going to miss the preivew`);
  console.log(`Husband: thanks for the reminder *grin*`);
  console.log(`Husband: I got ${coldDrinks}`);
  
  return ticket;
}catch(err){
    console.log(err);
    return 'Error';   
  }
}

movie().then((res) => console.log("Person 4 shows ", res));

// Converting create & delete post to async & await

const posts = [
    {id: 1, body: "First Post" },
    {id: 2, body: "Second Post" }
]

// let userLastActivityTime;

const createPost = async function(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                posts.push({id: 3, body: "third post"});
                resolve(posts);
        }, 1000);
    })
}

const deletePost = async function(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.pop();
            resolve(posts);
        }, 1000);
    })
}

const updateLastUserActivityTime =  async function(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            userLastActivityTime = new Date();
            resolve(userLastActivityTime);
        }, 1000)
    })
}

const addPost = async function(){
    let posts = await createPost();
    console.log(posts);
    let time = await updateLastUserActivityTime();
    console.log(time);
    posts = await deletePost(); 
    console.log(posts);
} 

addPost();


