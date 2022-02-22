function dataLoad(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responsive => responsive.json())
    .then(data => getData(data))
}

function getData(data){
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `name: ${user.name} 
        email: ${user.email}`;
        ul.appendChild(li);
    }
}