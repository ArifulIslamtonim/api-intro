function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));
}


function loadUsers() {
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(responsive => responsive.json())
   .then(json => console.log(json));
}
function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(responsive => responsive.json())
    .then(json => console.log(json))

}