let container = document.querySelector(".container")
createGrid(container, 16)

function createGrid(container, size) {
  for (let i = 1; i <= size; i++) {
    let gridRowDiv = document.createElement("div")
    container.appendChild(gridRowDiv)
    for (let j = 1; j <= size; j++) {
      let gridInnerDiv = document.createElement("div")
      gridInnerDiv.addEventListener("mouseenter", (e) => {
        e.target.classList.add("hovered")
      })
      gridRowDiv.appendChild(gridInnerDiv)
    }
  }
}

let button = document.querySelector("button")
button.addEventListener("click", () => resetGrid(container))

function resetGrid(container) {
  console.log("hi")
  let size = 0
  while (size < 2 || size > 100) {
    size = prompt("Enter a grid size between 2 and 100:")
  }
  container.querySelectorAll("div").forEach(el => el.remove())
  createGrid(container, size)
}
