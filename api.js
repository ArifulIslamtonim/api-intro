function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responsive => responsive.json())
    .then(data => newData(data))


}

function loadPost() {
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(responsive => responsive.json())
   .then(data => console.log(data))
}
function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(responsive => responsive.json())
    .then(json => console.log(json))

}


function newData (data) {
    const ul = document.getElementById('users');
    for(const user of data){
        const li = document.createElement('li');
        li.innerText = `name: ${user.name}
            email: ${user.email}`;
        ul.appendChild(li);
    }
}
