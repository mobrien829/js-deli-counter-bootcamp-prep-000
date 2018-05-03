var katzDeliLine = []
var n = 1

function takeANumber (katzDeliLine) {
  katzDeliLine.push(n++)
  return `Welcome. You are number ${n} in line.`
}

function nowServing (line) {
  if (line.length === 0) {
    return `There is nobody waiting to be served!`
  }
  else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine (line) {
  let newarray = []
  if (line.length === 0) {
    return `The line is currently empty.`
  }
  else {
    for (let n = 0; n < line.length; n++) {
      newarray.push(`${n+1}. ${line[n]}`)
    }
    return `The line is currently: ${newarray.join(`, `)}`
    }
  }