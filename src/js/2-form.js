const formData = {
  email: '',
  message: '',
};

const localStorageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const textArrea = form.elements.message;
const input = form.elements.email;

const savedData = localStorage.getItem(localStorageKey);

if (savedData) {
  const parsedData = JSON.parse(savedData);
  textArrea.value = parsedData.message || '';
  input.value = parsedData.email || '';
}

form.addEventListener('input', event => {
  formData.message = textArrea.value.trim();
  formData.email = input.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const emailValue = input.value.trim();
  const messageValue = textArrea.value.trim();

  if (emailValue !== '' && messageValue !== '') {
    console.log({ email: emailValue, message: messageValue });
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert('Fill please all fields');
  }
});
