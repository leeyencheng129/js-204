function byId(id) {
  return document.getElementById(id)
}

function clickHandler(button, value, total) {
  button.addEventListener('click', function () {
    total.innerHTML = +total.innerHTML + value
  })
}

const addButton = byId('add')
const minusButton = byId('minus')
const total = byId('total')

clickHandler(addButton, 1, total)
clickHandler(minusButton, -1, total)
