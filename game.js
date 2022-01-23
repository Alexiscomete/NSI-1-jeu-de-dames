


let pions = document.getElementsByClassName("pion_border")
for (let pion of pions) {
    pion.addEventListener("click", (ele, ev) => {
        pion.classList.add("border_click")
    })
}