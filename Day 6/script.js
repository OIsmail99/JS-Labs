
async function getUsers() {
    //promise resolved object is assigned to response, response is NOT A PROMISE
    let response = await fetch("https://jsonplaceholder.typicode.com/users"); //async operation
    let users = await response.json(); //extracting the JSON from the http request is also an async operation.. users is now a parsed javascript object or array, even tho json() returns a promise, its resolved object //will be assigned to users, so users is not a promise anymore.
    return users;
}
//getUsers().then(console.log); //array of objects

async function logNames() {
    let users = await getUsers();
    users.map(
        (user) => {
            let username = user.username
            let usernamesTD = document.getElementById('usernames');
            let div = document.createElement('div');
            div.textContent = username;
            usernamesTD.appendChild(div);
        }
    );
}

async function logEmails() {
    let users = await getUsers();
    users.map(
        (user) => {
            let email = user.email
            let emailTD = document.getElementById('emails');
            let div = document.createElement('div');
            div.textContent = email;
            emailTD.appendChild(div);
        }
    );
}

async function logCompanies() {
    let users = await getUsers();
    users.map(
        (user) => {
            let company = user.company.name;
            let companyTD = document.getElementById('companies');
            let div = document.createElement('div');
            div.textContent = company;
            companyTD.appendChild(div);
        }
    );
}

async function logLat() {
    let users = await getUsers();
    users.map(
        (user) => {
            let lat = user.address.geo.lat;
            let latTD = document.getElementById('lat');
            let div = document.createElement('div');
            div.textContent = lat;
            latTD.appendChild(div);
        }
    );
}

async function logLng() {
    let users = await getUsers();
    users.map(
        (user) => {
            let lng = user.address.geo.lng;
            let lngTD = document.getElementById('lng');
            let div = document.createElement('div');
            div.textContent = lng;
            lngTD.appendChild(div);
        }
    );
}

async function displayInfo() {
    // console.log('osama');

    await logLat();
    await logLng();
    await logCompanies();
    await logEmails();
    await logNames();
    await getPostsWithComments();
}

async function getPosts() {
    let responsePosts = await fetch("https://jsonplaceholder.typicode.com/posts");
    let users = await getUsers();
    let posts = await responsePosts.json();
    //let users = await responseUser.json();
    console.log(posts);
    for (let i = 0; i < users.length; i++) {
        let filteredPosts = posts.filter((post) => { return post.userId === users[i].id });
        let postsTD = document.getElementById("posts");
        let ul = document.createElement("ul");
        for (let j = 0; j < filteredPosts.length; j++) {
            ul.innerHTML += "<li>" + filteredPosts[j].title + "</li>";
        }
        postsTD.appendChild(ul);
    }
}

async function getPostsWithComments() {
    let responsePosts = await fetch("https://jsonplaceholder.typicode.com/posts");
    let responseComments = await fetch("https://jsonplaceholder.typicode.com/comments");
    let posts = await responsePosts.json();
    let comments = await responseComments.json();
    let users = await getUsers();

    console.log(posts);

    for (let i = 0; i < users.length; i++) {
        let filteredPosts = posts.filter(post => post.userId === users[i].id);
        let postsTD = document.getElementById("posts");
        let ul = document.createElement("ul");

        for (let post of filteredPosts) {
            // Count comments for each post
            let postComments = comments.filter(comment => comment.postId === post.id).length;
            ul.innerHTML += `<li>${post.title} - Comments: ${postComments}</li>`;
        }

        postsTD.appendChild(ul);
    }
}
displayInfo();
