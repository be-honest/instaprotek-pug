let isShown = false

document.querySelector('.modal_img').addEventListener('click', function () {
  const element = document.querySelector('.left-content-video')
  element.classList.add('hide')
  isShown = true
})

document.querySelector('.section4').addEventListener('click', function () {
  const element = document.querySelector('.left-content-video')
  if (isShown == true) {
    element.classList.add('hide')
  } else {
    element.classList.remove('hide')
  }
  isShown = !isShown // assign new value
})
