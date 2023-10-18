const producto=document.getElementById('productos');
fetch('celulares.json')
.then((resp)=>resp.json())
.then((data)=>{
    producto.innerHTML="";
    data.forEach(celulares => {
        let div = document.createElement('div');
        div.innerHTML+=`
        <h2>nombre: ${celulares.name}</h2>
        <p>version: ${celulares.version}</p>
        <p>precio: ${celulares.precio}</p>
        <img src="${celulares.imagen}"></img>`
        producto.append(div)
    })
})