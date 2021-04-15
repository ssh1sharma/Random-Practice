const characterCounterEl = document.querySelector('#characterCounter');
const lowerCheckboxEl = document.querySelector('#lowerCheckbox');
const upperCheckboxEl = document.querySelector('#upperCheckbox');
const numberCheckboxEl = document.querySelector('#numberCheckbox');
const specialCheckboxEl = document.querySelector('#specialCheckbox');
const passwordResultEl = document.querySelector('#passwordResult');
const passwordButtonEl = document.querySelector('#passwordButton');
const eachCheckBoxEl = document.querySelectorAll('.eachCheckBox');

const lowerCaseCharacter = "abcdefghijklmnopqrstuvwxyz";
const copyCharacter = lowerCaseCharacter;
const upperCaseCharacter = copyCharacter.toUpperCase();
const specialCharacter = "!#$%&?@_";
const numberCharacter = "0123456789";

passwordButtonEl.addEventListener('click', generatePassword);
function generatePassword() {
  selectedCharacter();
}


let checkedCharacters = '';
function selectedCharacter() {
  // Checking if the character option is checked or not
  if (!lowerCheckboxEl.checked && !upperCheckboxEl.checked && !numberCheckboxEl.checked && !specialCheckboxEl.checked) {
    alert("You must check at least one character option!");
  }
  // Collecting selected character option
  if (lowerCheckboxEl.checked) { checkedCharacters+=(lowerCaseCharacter); }
  if (upperCheckboxEl.checked) { checkedCharacters+=(upperCaseCharacter); }
  if (numberCheckboxEl.checked) { checkedCharacters+=(numberCharacter); }
  if (specialCheckboxEl.checked) { checkedCharacters+=(specialCharacter); }

  console.log(checkedCharacters);
  console.log(checkedCharacters.length);


  // Randomising selected characters
  function randomizeCharacter(random) {
    let randomizedCharacters = '';
    for (let i = 0; i < checkedCharacters.length; i++) {
      randomizedCharacters += Math.floor(Math.random() * characterCounterEl.value)

      //randomizedArray.push(random[i].sort(() => Math.random() - 0.5));
    }
    console.log(randomizedCharacters);
  }
  randomizeCharacter(checkedCharacters);
}
