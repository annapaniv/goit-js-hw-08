// import throttle from "lodash.throttle";

const LOCALSTORAGE_KEY = "feedback-form-state";

let formData = {};
const form = document.querySelector('.feedback-form');
form.addEventListener('input', onInput);

function onInput(evt){
    formData[evt.target.name] = evt.target.value.trim();
    console.log(formData);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData))

}


