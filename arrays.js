var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (arr, toAdd) {
  var newArray = [toAdd, ...arr]
  return newArray
}

function destructivelyAddElementToBeginningOfArray (arr, toAdd) {
  arr.push(toAdd)
  return arr
}