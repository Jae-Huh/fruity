var apple = document.getElementsByClassName('apple')
var appleDiv = document.getElementById('apple-container')

// var fruitCounter = document.getElementById('fruit-count')
// var fruitCount = 0
var scoreNum = document.getElementById('scoreNum')
var score = 0

var water = document.getElementById('watering-can')
var apple1height = 0
var apple2height = 0
var apple3height = 0
var apple4height = 0
var apple5height = 0

// Watering - makes apples grow but when watered too much, they rot
water.addEventListener('click', function() {
  var randomNumber = Math.floor(Math.random() * 5)
  if (randomNumber === 0) {
    if (apple1height === 18) {
      apple[0].style.height = '18vh'
      apple[0].setAttribute('src', 'images/apple-rotten.png')
    } else {
      apple1height += 3
      apple[0].style.height = apple1height + 'vh'
    }
  } else if (randomNumber === 1) {
    if (apple2height === 18) {
      apple[1].style.height = '18vh'
      apple[1].setAttribute('src', 'images/apple-rotten.png')
    } else {
      apple2height += 3
      apple[1].style.height = apple2height + 'vh'
    }
  } else if (randomNumber === 2) {
    if (apple3height === 18) {
      apple[2].style.height = '18vh'
      apple[2].setAttribute('src', 'images/apple-rotten.png')
    } else {
      apple3height += 3
      apple[2].style.height = apple3height + 'vh'
    }
  } else if (randomNumber === 3) {
    if (apple4height === 18) {
      apple[3].style.height = '18vh'
      apple[3].setAttribute('src', 'images/apple-rotten.png')
    } else {
      apple4height += 3
      apple[3].style.height = apple4height + 'vh'
    }
  } else if (randomNumber === 4) {
    if (apple5height === 18) {
      apple[4].style.height = '18vh'
      apple[4].setAttribute('src', 'images/apple-rotten.png')
    } else {
      apple5height += 3
      apple[4].style.height = apple5height + 'vh'
    }
  }
  console.log(randomNumber, apple1height, apple2height, apple3height, apple4height)
})

// Click apples to pick and show the number of picked apples on the basket
appleDiv.addEventListener('click', function(event) {
  pickApple(event.target)
})

function pickApple(el) {
  el.parentNode.removeChild(el)
  if (el.style.height === '3vh') {
    score += 0
    scoreNum.innerHTML = score
  } else if (el.style.height === '6vh') {
    score += 1
    scoreNum.innerHTML = score
  } else if (el.style.height === '9vh') {
    score += 2
    scoreNum.innerHTML = score
  } else if (el.style.height === '12vh') {
    score += 3
    scoreNum.innerHTML = score
  } else if (el.style.height === '15vh') {
    score += 4
    scoreNum.innerHTML = score
  } else if (el.getAttribute('src') === 'images/apple-rotten.png') {
    score -= 3
    scoreNum.innerHTML = score
  } else if (el.style.height === '18vh') {
    score += 5
    scoreNum.innerHTML = score
  }
}
