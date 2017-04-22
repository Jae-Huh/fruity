var apple = document.getElementsByClassName('apple')
var appleDiv = document.getElementById('apple-container')

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
  growApples(randomNumber)
})

  // This could be refactored to reduce code.
  // You could create a function that accepts the random number
  // And applys the going / if statement to that number
  // e.g.
  // apple[randNum].setAttribute('src', 'images/apple-rotten.png')
  // You also already have the hieght as
  // apple[0].style.height, so instead fo storing it as a var you could just check that value

  function growApples(randomNumber) {
    if (apple[randomNumber].style.height === '18vh') {
      apple[randomNumber].setAttribute('src', 'images/apple-rotten.png')
    } else {
      apple[randomNumber].style.height = parseInt(apple[randomNumber].style.height) + 3 + 'vh'
    }
  }


//   if (randomNumber === 0) {
//     if (apple1height === 18) {
//       apple[0].style.height = '18vh'
//       apple[0].setAttribute('src', 'images/apple-rotten.png')
//     } else {
//       apple1height += 3
//       apple[0].style.height = apple1height + 'vh'
//     }
//   } else if (randomNumber === 1) {
//     if (apple2height === 18) {
//       apple[1].style.height = '18vh'
//       apple[1].setAttribute('src', 'images/apple-rotten.png')
//     } else {
//       apple2height += 3
//       apple[1].style.height = apple2height + 'vh'
//     }
//   } else if (randomNumber === 2) {
//     if (apple3height === 18) {
//       apple[2].style.height = '18vh'
//       apple[2].setAttribute('src', 'images/apple-rotten.png')
//     } else {
//       apple3height += 3
//       apple[2].style.height = apple3height + 'vh'
//     }
//   } else if (randomNumber === 3) {
//     if (apple4height === 18) {
//       apple[3].style.height = '18vh'
//       apple[3].setAttribute('src', 'images/apple-rotten.png')
//     } else {
//       apple4height += 3
//       apple[3].style.height = apple4height + 'vh'
//     }
//   } else if (randomNumber === 4) {
//     if (apple5height === 18) {
//       apple[4].style.height = '18vh'
//       apple[4].setAttribute('src', 'images/apple-rotten.png')
//     } else {
//       apple5height += 3
//       apple[4].style.height = apple5height + 'vh'
//     }
//   }
//   console.log(randomNumber, apple1height, apple2height, apple3height, apple4height)
// })

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
