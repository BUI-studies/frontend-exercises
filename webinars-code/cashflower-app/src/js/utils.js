export const Storage = {
  setItem(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
  },
  getItem(key) {
    return JSON.parse(localStorage.getItem(key))
  }
}

export const cleanPage = () => {
  document.querySelector('.screen__bg')?.remove()
  document.querySelector('.screen .container').innerHTML = `
    <nav class="navigation">
      <h1 class="company-logo">CASHFLOWER</h1>
      <a href="./sign-in" class="navigation__link">Sign in</a>
    </nav>
    <div class="content"></div>
  `
}
