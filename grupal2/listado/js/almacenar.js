let guardar = document.getElementById("contenedor")
let id = 0

console.log(document.getElementById("item").value)
document.getElementById("agregar").addEventListener("click",function(){
    lists = document.getElementById("item").value
    agregar_html = `` 
    if(lists.length>0){
        
        localStorage.setItem(id,lists)
        valor = localStorage.getItem(id)
        agregar_html+=`
        <li>`+valor+`</li>
        `
        id += 1
    guardar.innerHTML += agregar_html
    valor = ""
    }

});

document.getElementById("limpiar").addEventListener("click",function(){
    localStorage.clear()
    id = 0
    guardar.innerHTML = ``
})