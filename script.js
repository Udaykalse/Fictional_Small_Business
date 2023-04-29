const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const successMessage = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	// Validate form inputs
	if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
		errorMessage.textContent = 'Please fill in all fields.';
		successMessage.textContent = '';
		return;
	}
	
	if (!isValidEmail(emailInput.value)) {
		errorMessage.textContent = 'Please enter a valid email address.';
		successMessage.textContent = '';
		return;
	}
	
	// Submit form if all inputs are valid
	successMessage.textContent = 'Your message has been sent!';
	errorMessage.textContent = '';
	form.reset();
});

function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}
