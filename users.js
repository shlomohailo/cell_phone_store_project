const API_USERS = 'https://my-json-server.typicode.com/Jeck99/fake-server/users';

async function getUsers() {
    try {
        return await fetch(`${API_USERS}`)
            .then((res) => { return res.json() })

    } catch (error) {
        alert(error)
    }
}


let tbody = document.getElementById('tbody')
async function printUser() {
   await getUsers().then(resultuser => {
        resultuser.forEach(elementuser => {
            tbody.innerHTML += `<tr><td> ${elementuser.name.first} ${elementuser.name.last} </td>
            <td> ${elementuser.age}  </td>
            <td> ${elementuser.email}  </td>
            <td> ${elementuser.phone}  </td>
            <td><img src="${'/IMAGES&GIFS/andy-wang-Nfw2A9JGBsw-unsplash.jpg'}" width=100vw   ></td>
            <td> <button onclilck=" delteUser('${elementuser._id})">DELETE</button> </td>

            </tr>`


        });
    })
}
printUser()


async  function delteUser(iduser) {
try {
    return await fetch(`${API_USERS}/${iduser}`,{method:"DELETE"})
} catch (error) {
    alert(error)
}
}

