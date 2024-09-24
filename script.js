document.addEventListener("keyup", e=>{

    if(e.target.matches("#search-input")){
        document.querySelectorAll(".Articulo").forEach(libro => {
         
            libro.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?libro.classList.remove("filtro")
            :libro.classList.add("filtro")
        })
    }
    
})