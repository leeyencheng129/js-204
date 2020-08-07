const numbers = ['amy', 'john', 'bill', 'jobs', 'may']
//////////////// 0, 1, 2, 3, 4

/////////////////////// 5
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 'bill') {
    console.log('FIND YOU! ' + numbers[i])

    // continue 會不再執行下面的程式，跳到另一個值繼續
    // continue
    // break 會直接跳出迴圈
    break
  }

  console.log(numbers[i])
}
