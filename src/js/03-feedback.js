import throttle from 'lodash.throttle';
import { save, load } from './storage';

const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener("input", throttle(onFormData, 500));
form.addEventListener("submit", onSubmitForm);

let formData = {};

function onSubmitForm(e) {
	console.log(load(LOCALSTORAGE_KEY));
	e.preventDefault();
	e.currentTarget.reset();
	localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onFormData(e) {
	formData[e.target.name] = e.target.value;
	save(LOCALSTORAGE_KEY, formData);
}

(function dataFromLocalStorage() {
	const data = load(LOCALSTORAGE_KEY);
	const email = document.querySelector('.feedback-form input');
	const message = document.querySelector('.feedback-form textarea');

	if (data) {
		formData = data;
		email.value = formData.email || '';
		message.value = formData.message || '';
	}
})();

