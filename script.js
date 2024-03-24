const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');
let filteredValue;

const filter = () => {
  const regex = /[^a-z0-9]/gi;
  filteredValue = textInput.value.replace(regex, '').toLowerCase();
};

const isPalindrome = () => {
  filter();
  const reversedInput = filteredValue.split('').reverse().join('');
  if (filteredValue === reversedInput) {
    result.innerHTML = `<p><span style="font-weight: bold">${textInput.value}</span> is a palindrome.</p>`;
  } else {
    result.innerHTML = `<p><span style="font-weight: bold">${textInput.value}</span> is not a palindrome.</p>`;
  }
};

checkBtn.addEventListener('click', () => {
  if (textInput.value === '') {
    alert('Please input a value');
  } else {
    isPalindrome();
    textInput.value = '';
  }
});
