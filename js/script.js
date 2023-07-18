const API_URL = 'https://api.adviceslip.com/advice';
const adviceNumber = document.querySelector('.advice__number');
const adviceText = document.querySelector('.advice__text');
const btn = document.querySelector('.advice__btn');

const generateNewAdvice = async () => {
  const response = await fetch(API_URL);
  const { slip: data } = await response.json();
  adviceNumber.innerText = data.id;
  adviceText.innerText = data.advice;
};

btn.addEventListener('click', generateNewAdvice);
