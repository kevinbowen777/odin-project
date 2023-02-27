// Used by test8.html
const theme = document.querySelector('#theme')
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

theme.addEventListener('change', () => theme.value === 'black'
  ? update('black', 'white')
  : update('white', 'black')
);
