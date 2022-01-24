function getCase(x, y) {
    let case1 = document.getElementById(y + " " + x)
    return case1
}

function getPion(x, y) {
    let case1 = getCase(x, y)
    return case1.firstElementChild
}

function getColor(pion) {
    if (pion.classList.contains("black")) {
        return "black"
    } else if (pion.classList.contains("white")) {
        return "white"
    }
    return null
}

function getPionJSON(x, y) {
    let pion = getPion(x, y)
    if (pion == null) {
        return null
    }
    let color = getColor(pion)
}

function getCasesAround(x, y) {
    let pionHD = getPion(x+1, y-1)
    let pionHG = getPion(x-1, y-1)
    let pionBD = getPion(x+1, y+1)
    let pionBG = getPion(x-1, y+1)
}

function getPossibleCases(x, y, pionType, pionColor) {

}



let lastPion = null;

let pions = document.getElementsByClassName("pion_border")
for (let pion of pions) {
    pion.addEventListener("click", (ele, ev) => {
        if (lastPion != null) {
            lastPion.classList.remove("border_click")
        }
        pion.classList.add("border_click")
        lastPion = pion
    })
}