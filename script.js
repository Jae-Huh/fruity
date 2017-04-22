var apple = document.getElementsByClassName('apple')
var appleDiv = document.getElementById('apple-container')
var scoreNum = document.getElementById('scoreNum')
var score = 0
var water = document.getElementById('watering-can')
var rottenAppleCount = 0


// Watering - makes apples grow but when watered too much, they rot
water.addEventListener('click', function() {
    var randomNumber = Math.floor(Math.random() * 5)
    growApples(randomNumber)
})

function growApples(randomNumber) {
  if (!apple[randomNumber] || apple[randomNumber].getAttribute('src') === 'images/apple-rotten.png') {
    return growApples(Math.floor(Math.random() * 5))
  }
  if (apple[randomNumber].style.height === '18vh') {
    apple[randomNumber].setAttribute('src', 'images/apple-rotten.png')
  } else {
    if (!apple[randomNumber].style.height) {
      apple[randomNumber].style.height = '0vh'
    }
    apple[randomNumber].style.height = parseInt(apple[randomNumber].style.height) + 3 + 'vh'
  }
}


// Click apples to pick and show the number of picked apples on the basket
appleDiv.addEventListener('click', function(event) {
  pickApple(event.target)
})

function pickApple(el) {
  el.parentNode.removeChild(el)
  switch(el.style.height) {
    case '3vh':
      score += 1
      break
    case '6vh':
      score += 2
      break
    case '9vh':
      score += 3
      break
    case '12vh':
      score += 4
      break
    case '15vh':
      score += 5
      break
    case '18vh':
      if (el.getAttribute('src') === 'images/apple-rotten.png') {
        score -= 3
      } else {
        score += 6
      }
      break
    }
  scoreNum.innerHTML = score
}
