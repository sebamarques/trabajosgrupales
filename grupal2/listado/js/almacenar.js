function mostrarListaGuardada() {
    let array = localStorage
    for (let i = 0; i < array.length; i++) {
        guardar.innerHTML += `
        <li>`+ array[i] + `</li>
`   
    id = localStorage.length
    }
}

let id = 0
let guardar = document.getElementById("contenedor")

document.getElementById("agregar").addEventListener("click",function(){
    lists = document.getElementById("item").value
    agregar_html = `` 
        if(lists.length>0){
            localStorage.setItem(id,lists)
            valor = localStorage.getItem(id)
            agregar_html+=`
            <li>${valor}</li>
            `
            id += 1
            guardar.innerHTML += agregar_html
            document.getElementById("item").value = ""
        }
        });
        
    
        document.getElementById("limpiar").addEventListener("click",function(){
            localStorage.clear()
            id = 0
            guardar.innerHTML = ``
        })
document.addEventListener("DOMContentLoaded", mostrarListaGuardada);



        
        
    


