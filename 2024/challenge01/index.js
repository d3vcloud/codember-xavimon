function unlockTerminal(input) {
  const [numbers, combination] = input.split(' ')
  let index = 0
  const digits = numbers.split('').map(n => parseInt(n))
  const lastIndexNumbers = digits.length - 1

  for (const comb of combination) {
    let currentDigit = digits.at(index)
    if (comb === 'U') {
      if (currentDigit === 9) {
        digits[index] = 0
      } else {
        digits[index] = digits[index] + 1
      }
    } else if (comb === 'R') {
      if (lastIndexNumbers === index) {
        index = 0
      } else {
        index++
      }
    } else if (comb === 'L') {
      if (index === 0) {
        index = lastIndexNumbers
      } else {
        index--
      }
    } else if (comb === 'D') {
      if (currentDigit === 0) {
        digits[index] = 9
      } else {
        digits[index] = digits[index] - 1
      }
    }
  }

  return digits.join('')
}

console.log(unlockTerminal("000 URURD")) // 119
console.log(unlockTerminal("1111 UUURUUU")) // 4411
console.log(unlockTerminal("9999 LULULULD")) // 8000
console.log(unlockTerminal("528934712834 URDURUDRUDLLLLUUDDUDUDUDLLRRRR")) // 628934712834