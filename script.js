const board = document.querySelector('#board')
const SQUARES_COUNT = 600

const setColor = (element) => {
  const color = chroma.random()
  element.style.background = color
  element.style.boxShadow = `0 0 12px ${color}, 0 0 10px ${color}`
}
const removeColor = (element)=>{
  element.style.background = "#1d1d1d"
  element.style.boxShadow = `0 0 2px #000`
}

for (let index = 0; index < SQUARES_COUNT; index++) {
  const square = document.createElement('div')
  square.classList.add("square")
  square.addEventListener("mouseenter",()=>setColor(square))
  square.addEventListener("mouseleave", ()=>removeColor(square))
  board.append(square)
}