const form = document.querySelector('.feedback-form');
const localStorageKeyM = 'goit-example-message';
const localStorageKeyE = 'goit-example-email';

let formData = { email: '', message: '' };

const localStorageKey = 'feedback-form-state';

formData.message =
  JSON.parse(localStorage.getItem(localStorageKey)).message ?? '';
formData.email = JSON.parse(localStorage.getItem(localStorageKey)).email ?? '';

form.elements.message.value = formData.message;
form.elements.email.value = formData.email;

form.addEventListener('input', evt => {
  if (evt.target.name == 'message') {
    formData.message = evt.target.value;
  }
  if (evt.target.name == 'email') {
    formData.email = evt.target.value;
  }
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (formData.email == '' || formData.email == '') {
    console.log('Please fill in all fields');
  } else {
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});