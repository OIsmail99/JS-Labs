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
        "skills": ["HTML", "CSS","Javascript", "React", "NodeJS"]
    },
    {
        "id": 3,
        "name": "rahma",
        "email": "rahma@example.com",
        "dob": "2001-02-05",
        "skills": ["python", "Java","Django", "Data analysis"]
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

function getAge(dob){
    let dobDate = new Date(dob);
    let now = new Date();
    let age = Math.floor((now-dobDate)/(1000 * 60 * 60 * 24 * 30 * 12));
    return age;
}

let userAges = users.map(function(user){
    let age = getAge(user.dob);
    return user.name + ": " + age;
})

console.log(userAges);





// var userNames = [];
// users.forEach(function(user, i){
//     // console.log(users[i].name)
//     // console.log({user: user, index: index})
//     userNames.push(user['name']);
// })
// // console.log(userNames)


// var userNames2 = users.map(function(user){
//     return user.name;
// })
// // console.log(userNames2)

// var filteredUsers = users.filter(function(user){
//     return user.id !== 2;
// });
// // ==  ===
// // !=  !==

// // console.log(filteredUsers)

// // var userIndex = users.findIndex(function(user){
// //     return user.id === 2
// // })
// // console.log(userIndex)

// // users.splice(userIndex, 1)
// // console.log(users);




// // var userDomains = users.map(function(user){
// //     // return user.email.split('@')[1].split('.')[0]
// //     return user.email.substring(user.email.indexOf("@") + 1,
// //     user.email.lastIndexOf("."));
// // })

// // console.log(userDomains)

// // for (var i = 0; i < users.length; i++) {
    
// // }

// // var userId = users.findIndex(function(user){
// //     return user.name === 'rahma'
// // })

// // console.log(users[userId])

// var user = users.find(function(user){
//     return user.name === 'rahma'
// })
// // console.log(user.id)

// var rahmasTasks = tasks.filter(function(task){
//     return task.assignedTo === user.id;
// })

// // console.log(rahmasTasks)

// var userWithTasks = users.map(function(user){
//     var userId = user.id;
//     var userTasks = tasks.filter(function(task){
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

// var filteredTasks = tasks.filter(function(task){
//     return (task.status.toLowerCase() === 'pending' 
//     && new Date() > new Date(task.dueAT))
// })
// console.log(filteredTasks)