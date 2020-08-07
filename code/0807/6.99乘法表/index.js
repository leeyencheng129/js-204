let display = '<tbody>'

for (let i = 1; i < 10; i++) {
  // 相當於 display = display + '<tr>'
  display += '<tr>'

  for (let j = 1; j < 10; j++) {
    display += '<td>'
    display += `${i} x ${j} = ${i * j}`
    display += '</td>'
  }

  display += '</tr>'
}

display += '</tbody>'

document.getElementById('result').innerHTML = display
