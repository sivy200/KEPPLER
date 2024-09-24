
function searchBook() {   
    let input = document.getElementById('searchInput').value;
    console.log("Buscando:", input);
}
function addBook() {
    let input = document.getElementById('searchInput').value;

}
    if (input) {
        let newBook = document.createElement('div')
        newBook.className = 'book'
        newBook.innerHTML = '<img src="placeholder.png" alt="${input}">'
       document.getElementById('searchInput').value = ''
    } else {
        alert("Por favor, ingrese el nombre del libro.")
    }
    