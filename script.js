var apple = document.getElementsByClassName('apple')
var appleDiv = document.getElementById('apple-container')
var scoreNum = document.getElementById('scoreNum')
var score = 0
var water = document.getElementById('watering-can')
var rottenAppleCount = 0


// Watering - makes apples grow but when watered too much, they rot
water.addEventListener('click', function() {

  for (var i = 0; i < apple.length; i++) {
     if (apple[i].src !== 'file:///Users/JaeH/devacademy/fruity/images/apple.png') {
       rottenAppleCount += 1
     } else {
       rottenAppleCount = 0
     }
   }

   if (rottenAppleCount <= 5) {
     var randomNumber = Math.floor(Math.random() * 5)
     growApples(randomNumber)

   } else {
     var confirmRestart = confirm('Game Over! Click "OK" to start the game again.')
     if (confirmRestart) {
       resetGame()
     }
   }

    // var randomNumber = Math.floor(Math.random() * 5)
    // growApples(randomNumber)
})

function resetGame() {
  for (var i = 0; i < apple.length; i++) {
    apple[i].setAttribute('src', 'images/apple.png')
    apple[i].style.height = '0vh'
    apple[i].style.display = 'initial'
  }
  score = 0
  scoreNum.innerHTML = score
  rottenAppleCount = 0
}

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
  // el.parentNode.removeChild(el)
  el.style.display = 'none'
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
