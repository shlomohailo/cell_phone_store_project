const API = 'https://my-json-server.typicode.com/Jeck99/fake-server/devices'


let counter = 0;
function photoForCard() {
    let array = [
        "/IMAGES&GIFS/photo10.webp",
        "/IMAGES&GIFS/photo1.webp",
        "/IMAGES&GIFS/photo6.webp",
        "/IMAGES&GIFS/photo4.webp",
        "/IMAGES&GIFS/photo7.webp",
        "/IMAGES&GIFS/photo6.webp",
        "/IMAGES&GIFS/photo4.webp",
        "/IMAGES&GIFS/photo1.webp",
        "/IMAGES&GIFS/photo10.webp",
        "/IMAGES&GIFS/photo6.webp",
        "/IMAGES&GIFS/photo1.webp",
        "/IMAGES&GIFS/photo7.webp",
        "/IMAGES&GIFS/photo5.webp",
        "/IMAGES&GIFS/photo6.webp",
        "/IMAGES&GIFS/photo10.webp",



    ];
    let pic = array[counter];
    counter++;
    return pic;
}

async function getDevices() {
    try {

         container.innerHTML = `<img style="margin:auto auto;height: 50vh; "  src="https://media0.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif">`

        return await fetch(`${API}`)
            .then((res) => {
                return res.json()
            })

    } catch (error) {
        err => console.log(err)
    }
    finally {
        container.innerHTML = ""
    }


}

async function printdiveces() {
    await getDevices().then((result) => {
        result.forEach(element => {
            container.innerHTML += `<div class="card mx-5 id=${element.id}" >
           <div><img src="${photoForCard()}" width=100%><div>
           <div>${element.brand}</div>
           <div>${element.price}</div>
           <div>${element.isAvailable}</div>
           <div>${element.createdAt}</div>
           <div>${element.color}</div>
           <div>${element.ram}</div>
          <div  class=""><button id=bttn onclick="delteDevices('${element.id}')">DELETE</button></div>
           </div>
           `

        });
    })
}
printdiveces()


async function delteDevices(id) {
    return await fetch(`${API}/${id}`, { method: "DELETE" })
        .then(response => response.json())
        .catch(err)
}



