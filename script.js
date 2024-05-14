let container = document.querySelector('.container');
let range = container.querySelector('.range');
let passLength = container.querySelector('.pass-length');
let inputText = container.querySelector('.pass__box');
let lowerCase = container.querySelector('.lowercase');
let UpperCase = container.querySelector('.upperercase');
let number = container.querySelector('.number');
let symbol = container.querySelector('.symbol');
let generate = container.querySelector('.generate-btn');
let copy = container.querySelector('.copy');

passLength.textContent = range.value;
range.addEventListener('input', () => {
  passLength.textContent = range.value;
});

let ABCD = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let abcd = 'abcdefghijklmnopqrstuvwxyz';
let nmbrs = '0123456789';
let symbl = '!@#$%^&*~';

let passGen = () => {
  let genPass = '';
  let allchars = '';

  allchars += UpperCase.checked ? ABCD : '';
  allchars += lowerCase.checked ? abcd : '';
  allchars += number.checked ? nmbrs : '';
  allchars += symbol.checked ? symbl : '';

  if (allchars == '' || allchars.length == 0) {
    return genPass;
  }
  for (let i = 1; i <= range.value; i++) {
    genPass += allchars.charAt(Math.floor(Math.random() * allchars.length));
  }
  return genPass;
};

generate.addEventListener('click', () => {
  inputText.value = passGen();
});

copy.addEventListener('click', () => {
  if (inputText.value != '' || inputText.value.length >= 1) {
    navigator.clipboard.writeText(inputText.value);
    copy.innerHTML = 'check';
    copy.classList.add('cpy');

    setTimeout(() => {
      copy.innerHTML = 'content_copy';
      copy.classList.remove('cpy');
    }, 1000);
  }
});
