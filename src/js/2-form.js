const formData = {
  email: '',
  message: '',
};

const localStorageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const textArrea = form.elements.message;
const input = form.elements.email;

if (localStorage.length !== 0) {
  textArrea.value = JSON.parse(localStorage.getItem(localStorageKey)).message;
  input.value = JSON.parse(localStorage.getItem(localStorageKey)).email;
}

form.addEventListener('input', event => {
  formData.message = textArrea.value.trim();
  formData.email = input.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (textArrea.value.trim() !== '' && input.value.trim() !== '') {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
    formData.email = '';
    formData.message = '';
  } else {
    alert('Fill please all fields');
  }
});
