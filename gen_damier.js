let element = document.getElementById("grid")

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        let ele = document.createElement("div")
        ele.classList.add("grid_element_"+(j+i%2)%2)
        ele.id = i + " " + j
        if ((j+i%2)%2 == 1) {
            if (i < 4) {
                let pion = document.createElement("div")
                let pion_img = document.createElement("img")
                pion_img.setAttribute("scr", "./img/pion_white.drawio.svg")
                pion.appendChild(pion_img)
                pion.classList.add("pion")
                pion.classList.add("white")
                ele.appendChild(pion)
            } if (i > 5) {
                let pion = document.createElement("div")
                let pion_img = document.createElement("img")
                pion_img.setAttribute("scr", "./img/pion_black.drawio.svg")
                pion.appendChild(pion_img)
                pion.classList.add("pion")
                pion.classList.add("black")
                ele.appendChild(pion)
            }
        }
        element.appendChild(ele)
    }
}