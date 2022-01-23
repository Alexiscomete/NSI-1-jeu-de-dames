let element = document.getElementById("grid")

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        let ele = document.createElement("div")
        ele.classList.add("grid_element_"+(j+i%2)%2)
        ele.id = i + " " + j
        if ((j+i%2)%2 == 1) {
            if (i < 4) {
                let pionCon = document.createElement("div")
                pionCon.classList.add("pion_border")
                let pion = document.createElement("div")
                let pion_img = document.createElement("img")
                pion_img.setAttribute("src", "./img/pion_white.drawio.svg")
                pion_img.classList.add("pion_img")
                pion_img.setAttribute("alt", "eee")
                pion.appendChild(pion_img)
                pion.classList.add("pion")
                pion.classList.add("white")
                pionCon.appendChild(pion)
                ele.appendChild(pionCon)
            } if (i > 5) {
                let pionCon = document.createElement("div")
                pionCon.classList.add("pion_border")
                let pion = document.createElement("div")
                let pion_img = document.createElement("img")
                pion_img.setAttribute("src", "img/pion_black.drawio.svg")
                pion_img.classList.add("pion_img")
                pion_img.setAttribute("alt", "eee")
                pion_img.onerror = function(messageOrEvent, source, noligne, nocolonne, erreur) {
                    console.log(messageOrEvent)
                }
                pion.appendChild(pion_img)
                pion.classList.add("pion")
                pion.classList.add("black")
                pionCon.appendChild(pion)
                ele.appendChild(pionCon)
            }
        }
        element.appendChild(ele)
    }
}

let sc = document.createElement("script")
sc.src = "./game.js"
element.appendChild(sc)