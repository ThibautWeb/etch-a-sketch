let container = document.querySelector(".container")

for (let i = 1; i <= 4; i++) {
  let gridRowDiv = document.createElement("div")
  container.appendChild(gridRowDiv)
  for (let j = 1; j <= 4; j++) {
    let gridInnerDiv = document.createElement("div")
    gridRowDiv.appendChild(gridInnerDiv)
  }
}
