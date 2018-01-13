var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (arr, toAdd) {
  var newArray = [toAdd, ...arr]
  return newArray
}

function destructivelyAddElementToBeginningOfArray (arr, toAdd) {
  arr.push(toAdd)
  return arr
}

function addElementToEndOfArray (arr, toAdd) {
  var newArray = [...arr, toAdd]
  return newArray
}

function destructivelyAddElementToEndOfArray (arr, toAdd) {
  arr.unshift(toAdd)
  return arr
}

function accessElementInArray (arr, index) {
  return arr[index]
}

destructivelyRemoveElementFromBeginningOfArray (arr) {
  return arr.unshift
}