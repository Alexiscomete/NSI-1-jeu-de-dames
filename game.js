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
    if (getCase(x, y) == null) {
        return null
    }
    let pion = getPion(x, y)
    if (pion == null) {
        return {
            x: x,
            y: y,
            pion: null
        }
    }
    let color = getColor(pion)
    return {
        x: x,
        y: y,
        pion: {
            color: color,
            type: "normal",
            pion: pion
        }
    }
}

function getCasesAround(x, y) {
    let pionHD = getPionJSON(x+1, y-1)
    let pionHG = getPionJSON(x-1, y-1)
    let pionBD = getPionJSON(x+1, y+1)
    let pionBG = getPionJSON(x-1, y+1)
    return {
        hd: pionHD,
        hg: pionHG,
        bd: pionBD,
        bg: pionBG
    }
}

function getPossibleCases(x, y, pionType, pionColor) {
    let cases = getCasesAround(x, y)
    let cases_list = []
    if (cases.bd != null) {
        if (cases.bd.pion == null) {
            cases_list += {where: cases.bd, eat: null}
        } else if (cases.bd.pion.color != pionColor) {
            let p = getPionJSON(x+2, y+2)
            if (p != null && p.pion == null) {
                cases_list += {where: p, eat: cases.bd}
            }
        }
    }
    if (cases.bg != null) {
        if (cases.bg.pion == null) {
            cases_list += {where: cases.bg, eat: null}
        } else if (cases.bg.pion.color != pionColor) {
            let p = getPionJSON(x-2, y+2)
            if (p != null && p.pion == null) {
                cases_list += {where: p, eat: cases.bg}
            }
        }
    }
    if (cases.hd != null) {
        if (cases.hd.pion == null) {
            cases_list += {where: cases.hd, eat: null}
        } else if (cases.hd.pion.color != pionColor) {
            let p = getPionJSON(x+2, y-2)
            if (p != null && p.pion == null) {
                cases_list += {where: p, eat: cases.hd}
            }
        }
    }
    if (cases.hg != null) {
        if (cases.hg.pion == null) {
            cases_list += {where: cases.hg, eat: null}
        } else if (cases.hg.pion.color != pionColor) {
            let p = getPionJSON(x-2, y-2)
            if (p != null && p.pion == null) {
                cases_list += {where: p, eat: cases.hg}
            }
        }
    }
    return cases_list
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