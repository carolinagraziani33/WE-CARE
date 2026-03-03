console.log("ola tudo bem")

const input = document.getElementById("main-input")
const paragrafo = document.getElementById("resultado")
const button = document.querySelector("mybutton")
const select = document.querySelector("select")
function cliqueinobotao() {
    alert("Olá, você clicou no botão!")
    paragrafo.innerText = input.value
}

function Digitei() {
    console.log(input.value)
}
select.addEventListener("change", function (event) {
console.log("Troquei de valor")
})  