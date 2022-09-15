let busco = document.getElementById("btnBuscar")
let url = "https://images-api.nasa.gov/search?q="
let contenedor = document.getElementById("contenedor")
let agregarhtml=``
datos = []
busco.addEventListener("click",function(){
    function mostrarimg(){
        console.log(hola)
    }
    let dato = document.getElementById("inputBuscar").value
    
    fetch(url+dato)
    .then(response => response.json())
    .then(data =>{
        agregarhtml = ``
        for(let i = 0; i<data.collection.items.length;i++){
            datos = data.collection.items[i]
            console.log(datos)
            datos2 = datos.href
             console.log(datos2)
            /*  getJSONData(datos2).then(function(resultObj){
                if(resultObj.status == "ok"){
                    imagenes = resultObj.data
                    console.log(imagenes)
                    mostrarimg()
                }
            });   */
            agregarhtml = `
            <div>
            <p>${datos.data[0].description}</p>
            <p></p>
            <img href ="${data.collection.items[i].data[0].href}" heigth="20px">
            </div>
            `
            contenedor.innerHTML = agregarhtml
        }
})
    .catch(err=>console.log(err))
})