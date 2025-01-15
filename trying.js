// // Classes ES6  and function constructor

// // function User(name){
// //     this.name = name
// // }

// // User.prototype.getName = function(){
// //     return this.name
// // }

// // const user = new User('name')

// // console.log(user)

// // syntactic sugar for function constructor

// // class User {
// //     static isPerson = true

// //     constructor(name){
// //         if(User.isPerson){

// //         }
// //         this.name = name;
// //     }

// //     getName(){
// //         return this.name;
// //     }

// //     static sayHello(){
// //         return 'Hello '
// //     }
// // }
// // console.log(User.sayHello())
// // const user = new User('name');

// // class Admin extends User {
// //     constructor(){
// //         super('admin')
// //         this.isAdmin = true;
// //     }
// // }

// // const admin = new Admin();
// // console.log(admin.getName())

// // class User {
// //     constructor(name) {
// //         this.name = name;
// //     }
// //     getName() {
// //         console.log(this.name);
// //     }
// // }

// // class Admin extends User {
// //     constructor() {
// //         super('admin')

// //     }

// //     getName() {
// //         console.log('admin here')
// //     }

// // }

// // const admin = new Admin();





// // Callbacks and callback hell

// console.log('before')
// setTimeout(()=>{
//     console.log('inside timeout');
// }, 0);
// console.log('after')


// function user(name, callback) {
//     console.log('user: '+ name);
//     callback(name);
// }

// function sayHello(doSth){
//     console.log('say hello');
//     return doSth;
// }
// function doSth(){
//     console.log('last callback');
// }

// user('osama', sayHello(doSth));


// // callback hell 
// // synchronous code
// // synchronous code

// // synchronous code

// setTimeout(() => {
//     console.log('first')
//     setTimeout(() => {
//         console.log('second')
//         setTimeout(() => {
//             console.log('third')
//         }, 3000)

//         setTimeout(() => {
//             console.log('fourth')
//         }, 500)

//     }, 2000)
// }, 500)
// console.log("hello");


// function getUser(userId, cb) {
//     setTimeout(() => {
//         console.log('fetched user data from server')
//         cb({ id: userId, name: 'name' })
//     }, 2000)
// }

// function getOrder(user, cb) {
//     setTimeout(() => {
//         console.log('Got the orders! for user: ' + user.name)
//         cb(['order1', 'order2'])
//     }, 1000)
// }

// function sendEmail(orders, cb) {
//     setTimeout(() => {
//         console.log('sent Email successfully!')
//         cb();
//     }, 1000)
// }

// getUser(1, (user) => {
//     getOrder(user, (orders) => {
//         sendEmail(orders, () => {
//             console.log('finished elhamdulallah')
//         })
//     })
// })







// function handleUser(user){
//     getOrder(user, handleOrders)
// }

// function handleOrders(orders){
//     sendEmail(orders, handleEmail)
// }

// function handleEmail(){
//     console.log('finished')
// }

// getUser(1, handleUser)














// // Asynchronous programming



// // Promises

// // new Promise()
//an object that represent an async operation with the following state:
// // pending // fullfilled // rejected

//promise accepts a function called "executor" that takes two callbacks, resolve and reject.
//resolve is the function to call when the operation succeeds and reject is the func to call when 
// //the operation fails
// const promise = new Promise((resolve, reject) => {
//     // reject(
//     //     {
//     //         message: 'error occurres', error: {
//     //             err: 'error occurres'
//     //         }
//     //     }
//     // );

//     resolve("I did mu job, here is the data");
// })


// promise.then((data) => {
//     console.log("then: resolve replied with: " + data)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => {
//     console.log('finally')
// })


// const promise = new Promise((resolve, reject) => {

//     const state = false;

//     setTimeout(() => {
//         if (state) resolve('promise complete')
//         else reject('promise rejected')
//     }, 0)

// });

// promise.then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => {
//     console.log('finally')
// })

// console.log('first')

// fetchUser().then((res) => console.log(res.user))
//     .catch((rej) => console.log(rej))
//     .finally(() => console.log("finally!!!"));

// const fetchUser = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('user')
//             resolve({ user: 'Ahmed' })
//         }, 500)
//     })
// }


// const fetchOrders = (user) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('orders')
//             resolve("failed to fetch orders")
//         }, 1000)
//     })
// }

// const sendEmail = (orders) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('email')
//             resolve(`Email sent with ${orders}`)
//         }, 1000)
//     })
// }

// fetchUser() // user
//     .then((user) => fetchOrders(user))
//     .then((orders) => sendEmail(orders))
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err))

// // console.log('last')

// const promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('promise 1 resolved')
//     }, 1000)
// })


// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('promise 2 rejected')
//     }, 2000)
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('promise 3 resolved')
//     }, 1000)
// })

// Promise.allSettled([promise1, promise2, promise3])
//     .then(console.log)
//     .catch(console.error)


//all resolved or the first rejected
//returns a promise which will be resolved only if all promises were fulfilled otherwise rejected.
// Promise.all([promise1, promise2, promise3])
//     .then((res) => {
//         console.log(res)
//     })
//     .catch(console.error)


// // Promise.race

// Promise.any // first one fulfilled or all errors

//fetch returns a promise
// const posts = fetch('https://jsonplaceholder.typicode.com/posts')

// posts
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch(console.error)

// Promise.resolve("hello").then(console.log)
// Promise.reject("hello").catch(console.error)


// Async Await

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ error: true, message: 'sth went wrong' })
    }, 2000)
})

async function getPromise() {
    try {
        const promise = await promise2
        console.log(promise)
    } catch (error) {
        if (error.message === 'jdsa')
            console.log({ error })
    }
}

getPromise()

// console.log('after async function')
