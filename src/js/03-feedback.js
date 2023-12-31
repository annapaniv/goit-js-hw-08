import throttle from "lodash.throttle";

const LOCALSTORAGE_KEY = "feedback-form-state";

let formData = {};
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function onInput(evt) {
    formData[evt.target.name] = evt.target.value.trim();
    console.log(formData);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData))
}

populateTextarea();

function populateTextarea() {
    const savedMessage = localStorage.getItem(LOCALSTORAGE_KEY);
    if (savedMessage) {
      formData = JSON.parse(savedMessage) || {};
      input.value = formData.email || '';
      textarea.value = formData.message || '';
    }
  }

function onSubmit(evt) {
    evt.preventDefault();
    const { email, message } = evt.currentTarget.elements;
    if (email.value === "" || message.value === "") {
        return alert(`Please fill in all the fields!`);
    }
    console.log(formData);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    evt.currentTarget.reset();
    formData = {};
}
