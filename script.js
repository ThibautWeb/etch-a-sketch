let container = document.querySelector(".container")

for (let i = 1; i <= 16; i++) {
  let gridRowDiv = document.createElement("div")
  container.appendChild(gridRowDiv)
  for (let j = 1; j <= 16; j++) {
    let gridInnerDiv = document.createElement("div")
    gridInnerDiv.addEventListener("mouseover", (e) => {
      e.target.classList.add("hovered")
    })
    gridRowDiv.appendChild(gridInnerDiv)

  }
}


