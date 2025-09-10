//responsvel por chamar a função que troca imagem na tela
window.addEventListener("load", () => {
    console.log("Página Caregada!")
    chengeImg()
});
const img = document.getElementById("banner");
const input = document.getElementById("inputBuscar")

let url = 0;

//reponsavel por trocar de imagem na tela
function chengeImg() {
    console.log(200)

    setInterval(() => {
        url++;
        img.src = `src/img/baner/img_ (${url}).jpg`;
        url = url === 12 ? 0 : url;
    }, 3000);

}

//faz uma varedura no banco de dados procurando um livro especificado 
function buscar() {
    input.value =""
}