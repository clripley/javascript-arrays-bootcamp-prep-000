var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(chocolateBars,Twix){
  return [Twix, ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, Twix){
  return [...chocolateBars, Twix]
}
function addElementToEndOfArray(chocolateBars, Twix){
  return [...chocolatebars, Twix]
}