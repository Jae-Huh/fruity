var apple = document.getElementsByClassName('apple')
var fruitCounter = document.getElementById('fruit-count')
var fruitCount = 0;


for (var i = 0; i < apple.length; i++) {
  apple[i].addEventListener('click', function(event) {
    // apple[i].parentNode.removeChild(apple[i])
    event.target.parentNode.removeChild(event.target)
    fruitCount += 1
    fruitCounter.innerHTML = fruitCount
  })
}
