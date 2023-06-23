const posts = [
    {id: 1, body: "First Post" },
    {id: 2, body: "Second Post" }
]

let userLastActivityTime;

const createPost = function(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({id: 3, body: "third post"});
            resolve(posts);
        }, 2000);
    })
}

const deletePost = function(){
    return new Promise((resolve, reject) => {
        posts.pop();
        resolve(posts);
    })
}

const updateLastUserActivityTime =  function(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            userLastActivityTime = new Date();
            resolve(userLastActivityTime);
        }, 1000)
    })
}

const result = Promise.all([createPost(), updateLastUserActivityTime()]);
result.then((res) => {
    console.log(res);
    return deletePost();
}).then((res) => console.log(posts));