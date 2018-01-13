var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (arr, toAdd) {
  var newArray = [toAdd, ...arr]
  return newArray
}

function destructivelyAddElementToBeginningOfArray (arr, toAdd) {
  arr.unshift(toAdd)
  return arr
}

function addElementToEndOfArray (arr, toAdd) {
  var newArray = [...arr, toAdd]
  return newArray
}

function destructivelyAddElementToEndOfArray (arr, toAdd) {
  arr.push(toAdd)
  return arr
}

function accessElementInArray (arr, index) {
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray (arr) {
  return arr.unshift
}

function removeElementFromBeginningOfArray (arr) {
  var newArray = arr.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray (arr) {
  return arr.pop()
}

function removeElementFromEndofArray (arr) {
  return arr.slice(0, arr.length)
}

