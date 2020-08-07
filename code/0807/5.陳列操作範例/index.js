const a = [1, 2, 3, 4, 5]

for (let i = 0; i < a.length; i++) {
  // 對陣列元素作某些事
  a[i] = a[i] * 3
}

////////////////////

const b = [1, 2, 3, 4, 5]
const c = []

b.forEach(function (v, i, array) {
  // callback
  c.push(v * 3)
})

/////////////////////

const d = [1, 2, 3, 4, 5]

const e = d.map(function (v, i, array) {
  return v * 3
})

//////////

const f = [3, 4, 5, 1, 2]

// 12345
f.sort(function (a, b) {
  return a - b
})

const g = [3, 4, 5, 1, 2]

// 54321
g.sort(function (a, b) {
  return b - a
})

///////////////////

// 尋找

const h = ['a', 'b', 'a', 'c', 'k']

const valueFound = h.find(function (v, i, array) {
  return v === 'a'
})

const indexFound = h.findIndex(function (v, i, array) {
  return v === 'a'
})

////////////////

// 刪除成員

const l = [1, 2, 3, 4, 5, 2, 6]

const newL = []

for (let i = 0; i < l.length; i++) {
  if (l[i] !== 2) {
    newL.push(l[i])
  }
}

const m = [1, 2, 3, 4, 5, 2, 6]

const newM = m.filter(function (v) {
  return v !== 2
})
