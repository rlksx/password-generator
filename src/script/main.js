const sliderElement = document.getElementById('slider')
const buttonElement = document.getElementById('button')
buttonElement.addEventListener('click', generatePassword)

const sizePassword = document.getElementById('value')
const password = document.getElementById('password')

const containerPassword = document.getElementById('container-password')

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*+-/'
let newPassword = ''

sizePassword.innerHTML = sliderElement.value

slider.oninput = function () {
  sizePassword.innerHTML = this.value
}

function generatePassword() {
  let n = charset.length
  let pass = ''
  let i = ''

  for (i = 0; i < sliderElement.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * n))
  }
  containerPassword.classList.remove('hide')
  password.innerHTML = pass
  newPassword = pass
}
