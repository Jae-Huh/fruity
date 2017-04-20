var appleDiv = document.getElementById('apple-container')

var fruitCounter = document.getElementById('fruit-count')
var fruitCount = 0;
var water = document.getElementById('watering-can')


// water.addEventListener

// click apples to pick and show the number of picked apples on the basket
appleDiv.addEventListener('click', function(event) {
  pickApple(event.target)
})

function pickApple(el) {
  el.parentNode.removeChild(el)
  fruitCount += 1
  fruitCounter.innerHTML = fruitCount
}
