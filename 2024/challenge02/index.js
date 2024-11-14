import fs from 'fs'
const log = fs.readFileSync('log.txt', 'utf-8')

function checkPassword(password) {
  for (let i = 0; i < password.length; i++) {
    const isNumber = !isNaN(password[i])
    if (isNumber) {
      const currentNumber = Number(password[i])
      const nextNumber = password[i + 1]
      if (nextNumber == null) continue
      if (currentNumber > Number(nextNumber)) return false
    } else {
      const currentLetter = password.at(i)
      const nextLetter = password[i + 1]
      if (nextLetter == null) continue

      if (!isNaN(nextLetter) || currentLetter > nextLetter) {
        return false
      }
    }
  }

  return true
}

function challenge02(data) {
  let totalFalse = 0, totalTrue = 0
  const passwords = data.split('\n')

  for (const pwd of passwords) {
    const isValid = checkPassword(pwd)
    if (!isValid) {
      totalFalse++
    } else {
      totalTrue++
    }
  }

  return `submit ${totalTrue}true${totalFalse}false`
}

console.log(challenge02('12345')) // true
console.log(challenge02('abc')) // true
console.log(challenge02('a123')) // false
console.log(challenge02('123abc')) // true
console.log(challenge02('iey5099')) // false
console.log(challenge02('12345abc69z')) // false
console.log(challenge02('2361')) // false
console.log(challenge02("7hwrzw9r")) //false
console.log(challenge02(log)) // false