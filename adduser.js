const API_USERS = 'https://my-json-server.typicode.com/Jeck99/fake-server/users';

async function addUser() {
    const data = {
        name: {
            first: document.getElementById('inputfirstlname').value,
            last: document.getElementById('inputlastname').value,
        },
        age: document.getElementById('inputage').value,
        email: document.getElementById('inputemail').value,
        index: document.getElementById('inputindex').value,
        phone: document.getElementById('inputphone').value,
        picture: document.getElementById('inputpicture').value,
    };

    let response = await fetch(API_USERS, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })

        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}

