const tags = []

const text = "Text text text text text text text text text text text text text text text text text text text text text text text text text"

for(let i=0; i<10; i++) {
    tags.push({
        header: `header ${i+1}`,
        text: text,
        bottom: `bottom ${i+1}`
    })
}


function elemCreator(elemName) {
    switch(elemName) {
        case "header":
            return createElem("h2", [{name: "class", value:"item__header"}])
        case "text":
            return createElem("div", [{name: "class", value:"item__text"}])
        case "bottom":
            return createElem("div", [{name: "class", value:"item__bottom"}])
    }
}

function createElem(name, attrs = []) {
    const item = document.createElement(name)
    attrs.forEach(attr => {
        item.setAttribute(attr.name, attr.value)
    })
    return item
}

window.addEventListener("load", () => {
    const slider = document.getElementById("slider")
    console.log(slider)

    tags.forEach(tag => {
        const main = document.createElement("div")
        main.setAttribute("class", "item")
        Object.keys(tag).forEach(item => {
            const elem = elemCreator(item)
            elem.append(document.createTextNode(tag[item]))
            main.append(elem)
        })
        slider.appendChild(main)
    })

    setInterval(() => {
        slider.children[0].classList.remove("slider--top")
        const item = slider.lastChild
        slider.removeChild(item)
        slider.classList.add("slider--move")
        setTimeout(() => {
            slider.classList.remove("slider--move")
        }, 500)
        item.classList.add("slider--top")
        slider.insertBefore(item, slider.firstChild)
        
    }, 2000)
})
