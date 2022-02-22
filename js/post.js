function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(responsive => responsive.json())
    .then(data => displayPost(data))
}
loadPosts();
function displayPost (posts) {
    const postContainer = document.getElementById('posts');
    for(const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</P>
        `;
        postContainer.appendChild(div);
    }
}

function addPost () {
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body:JSON.stringify({
            title: 'My new post',
            body: 'This is my posts',
            userId: 1
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(res => res.json())
    .then(data => console.log(data))
}