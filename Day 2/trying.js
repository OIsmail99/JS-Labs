var users = [
    {
        "id": 1,
        "name": "Ahmed",
        "email": "ahmed@gmail.com",
        "dob": "1990-05-15",
        "skills": ["Java", "React", "NodeJS"]
    },
    {
        "id": 2,
        "name": "mohamed",
        "email": "mohamed@test.com",
        "dob": "1999-10-15",
        "skills": ["HTML", "CSS", "Javascript", "React", "NodeJS"]
    },
    {
        "id": 3,
        "name": "rahma",
        "email": "rahma@example.com",
        "dob": "2001-02-05",
        "skills": ["python", "Java", "Django", "Data analysis"]
    },
]

var tasks = [
    {
        "id": 101,
        "description": "develop the api endpoint",
        "assignedTo": 1,
        "dueAT": "2025-05-15",
        "status": "Pending"

    },
    {
        "id": 102,
        "description": "design the new home page",
        "assignedTo": 2,
        "dueAT": "2024-12-11",
        "status": "Pending"
    },
    {
        "id": 103,
        "description": "develop the api endpoint",
        "assignedTo": 2,
        "dueAT": "2024-12-11",
        "status": "Pending"
    },
    {
        "id": 104,
        "description": "complete the project documentation",
        "assignedTo": 3,
        "dueAT": "2024-12-10",
        "status": "Pending"
    },
]
// //usernames
// let usernames = users.map(function(user){
//     return user.name;
// })
// console.log(usernames);



























// var userNames2 = users.map(function (user) {
//     return user.name;
// })
// // console.log(userNames2)

// var filteredUsers = users.filter(function (user) {
//     return user.id !== 2;
// });
// // ==  ===
// // !=  !==

// // console.log(filteredUsers)

// var userIndex = users.findIndex(function(user){ //returns the user index
//     return user.id === 2
// })
// var user = users.find(function(user){ //returns the user
//     return user.id === 2
// })
// //console.log(userIndex)

// users.splice(userIndex, 1) remove the user
// console.log(users);
// users.splice(userIndex, 0 ,user); add the user again.
// console.log(users);

// let userDomains = users.map(function(user){
//    // let sub1 = user.email.substring(user.email.lastIndexOf("@") + 1, user.email.lastIndexOf("."));
//     let sub2;
//     let sub3 = user.email.split("@")[1].split(".")[0];
//     let index2;
//     let index1;
//     for(let i= user.email.length -1 ; i >= 0; i--){
//             if(user.email[i] === "."){
//                 index2 = i;
//             }
//             if(user.email[i] === "@"){
//                 index1 = i;
//                 break;
//             }
//     }
//     sub2 = user.email.substring(index1 +1, index2);
//     return sub3;
// })

// console.log(userDomains);














// // var userDomains = users.map(function(user){
// //     // return user.email.split('@')[1].split('.')[0]
// //     return user.email.substring(user.email.indexOf("@") + 1,
// //     user.email.lastIndexOf("."));
// // })

// // console.log(userDomains)

// // for (var i = 0; i < users.length; i++) {

// // rahma tasks

let rahmaTasks = tasks.map(function(tasks){
       let user =  users.map(function(user){
            return user.name === "rahma";
        })
        if(tasks.assignedTo === )
})



// var userId = users.findIndex(function(user){
//     return user.name === 'rahma'
// })

// console.log(users[userId])

// var user = users.find(function (user) {
//     return user.name === 'rahma'
// })
// // console.log(user.id)

// var rahmasTasks = tasks.filter(function (task) {
//     return task.assignedTo === user.id;
// })

// // console.log(rahmasTasks)

// var userWithTasks = users.map(function (user) {
//     var userId = user.id;
//     var userTasks = tasks.filter(function (task) {
//         return task.assignedTo === userId;
//     })
//     return {
//         id: userId,
//         name: user.name,
//         email: user.email,
//         dob: user.dob,
//         skills: user.skills,
//         userTasks: userTasks,
//     };
// });
// // console.log(userWithTasks)
// // console.log(users)

// // var usersSkills = users.map(function(user){
// //     console.log(user.skills.join(','))
// //     return (user.skills.join(',')
// //     .toLowerCase()
// //     .replaceAll('java,','javascript,').split(',')) 
// // })
// // console.log(usersSkills)


// // var usersSkills = users.map(function(user){
// //     // console.log(user.skills.join(''))
// //     var skills= user.skills.map(function(skill, i){
// //         return skill.toLowerCase() === 'java' ? 'javascript' : skill 
// //     })
// //     return {
// //         id: user.id,
// //         name: user.name,
// //         email: user.email,
// //         dob: user.dob,
// //         skills: skills,
// //     }
// // })
// // console.log(usersSkills)

// // var longestUserName = users.reduce(function(longest, user, i, arr){
// //    longest = user.name.length > longest.length ? user.name : longest;
// //    return longest
// // }, "")

// // console.log(longestUserName)



// // return a users array witht the users that passed the tasks deadline
// //  "dueAT": "2025-05-15",

// var filteredTasks = tasks.filter(function (task) {
//     return (task.status.toLowerCase() === 'pending'
//         && new Date() > new Date(task.dueAT))
// })

// var newUsers = users.filter(function (user) { 
  
//     return (filteredTasks.findIndex(function (task) {
//         return user.id == task.assignedTo
//     })) != -1

// })
// console.log(newUsers);