const firstNumberValue = document.getElementById('firstNumber');
const secondNumberValue = document.getElementById('secondNumber');
const sumBtn = document.getElementById('sum');
const minusBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');

// TODO: use it in the code to optimize it
const listener = cb => (e) => {
  e.preventDefault()
  const resultValue = document.getElementById('result')
  resultValue.value = calc(+firstNumberValue.value, +secondNumberValue.value, cb)
}

sumBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const resultValue = document.getElementById('result')
  resultValue.value = calc(+firstNumberValue.value, +secondNumberValue.value, sum)
})

minusBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const resultValue = document.getElementById('result')
  resultValue.value = calc(+firstNumberValue.value, +secondNumberValue.value, minus)
})

multiplyBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const resultValue = document.getElementById('result')
  resultValue.value = calc(+firstNumberValue.value, +secondNumberValue.value, multiply)
})

divideBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const resultValue = document.getElementById('result')
  resultValue.value = calc(+firstNumberValue.value, +secondNumberValue.value, divide)
})