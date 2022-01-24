function getCase(x, y) {
    let case1 = document.getElementById(y + " " + x)
    console.log(case1)
    console.log(y + " " + x)
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
        console.log("no case")
        return null
    }
    let pion = getPion(x, y)
    if (pion == null) {
        return {
            case: getCase(x, y),
            x: x,
            y: y,
            pion: null
        }
    }
    let color = getColor(pion)
    return {
        case: getCase(x, y),
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
    let pionHD = getPionJSON(x + 1, y - 1)
    let pionHG = getPionJSON(x - 1, y - 1)
    let pionBD = getPionJSON(x + 1, y + 1)
    let pionBG = getPionJSON(x - 1, y + 1)
    return {
        hd: pionHD,
        hg: pionHG,
        bd: pionBD,
        bg: pionBG
    }
}

function pushElement(cases_list, case_info, pionColor, x, y) {
    if (case_info != null) {
        if (case_info.pion == null) {
            cases_list.push({ where: case_info, eat: null })
        } else if (case_info.pion.color != pionColor) {
            let p = getPionJSON(x, y)
            if (p != null && p.pion == null) {
                cases_list.push({ where: p, eat: case_info })
            }
        }
    }
}

function getPossibleCases(x, y, pionType, pionColor) {
    let cases = getCasesAround(x, y)
    let cases_list = []
    console.log(cases)
    pushElement(cases_list, cases.bd, pionColor, x+2, y+2)
    pushElement(cases_list, cases.bg, pionColor, x-2, y+2)
    pushElement(cases_list, cases.hd, pionColor, x+2, y-2)
    pushElement(cases_list, cases.hg, pionColor, x-2, y-2)
    console.log(cases_list)
    return cases_list
}

let colorsCases = []

function setColorHelp(x, y, pionType, pionColor) {
    for (let c of colorsCases) {
        if (c != null && c.where != null) {
            c.where.case.classList.remove("help")
        }
    }
    colorsCases = getPossibleCases(x, y, pionType, pionColor)
    console.log(colorsCases)
    for (let c of colorsCases) {
        console.log(c)
        if (c != null && c.where != null) {
            c.where.case.classList.add("help")
        }
    }
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
        let e = pion.parentElement.id.split(" ")
        setColorHelp(parseInt(e[1]), parseInt(e[0]))
    })
}