const a = [
  [2, 9, 4],
  [7, 5, 3],
  [6, 1, 8],
]

// 淺拷貝
const b = [...a]

const c = []

for (let i = 0; i < a.length; i++) {
  const tmp = []
  for (let j = 0; j < a[i].length; j++) {
    tmp.push(a[i][j])
  }
  c.push(tmp)
}

a[2][1] = 10

//////////////////////

// const c = [2, 7, 6]

// const d = [...c]

// c[2] = 10
