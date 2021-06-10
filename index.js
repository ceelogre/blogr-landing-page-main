const setThemeToDark = () => {
  document.getElementById('main-container').style.backgroundColor = '#15202b'
  document.getElementById('main-container').style.color = '#ffffff'
}

const setThemeToLight = () => {
  document.getElementById('main-container').style.backgroundColor = '#ffffff'
  document.getElementById('main-container').style.color = '#000000'
}
document.getElementById('theme-slider').addEventListener('click', () => {
  let currentTheme = window.getComputedStyle(document.getElementById('main-container')).backgroundColor
  currentTheme == 'rgb(21, 32, 43)'? setThemeToLight(): setThemeToDark()
}
)