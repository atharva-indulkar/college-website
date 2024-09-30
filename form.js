document.getElementById('registration-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value.trim();
  const age = document.getElementById('age').value;
  const dob = document.getElementById('dob').value;
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone-number').value.trim();
  const password = document.getElementById('password').value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const department = document.querySelector('input[name="department-choice"]:checked');

  let isValid = true;

  // Clear previous error messages
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(msg => msg.remove());

  // Validate fields
  if (!username) {
      isValid = false;
      showError('username', 'Please enter your name.');
  }
  if (!age || age < 1) {
      isValid = false;
      showError('age', 'Please enter a valid age.');
  }
  if (!dob) {
      isValid = false;
      showError('dob', 'Please select your date of birth.');
  }
  if (!email) {
      isValid = false;
      showError('email', 'Please enter your email.');
  }
  if (!phone) {
      isValid = false;
      showError('phone-number', 'Please enter your phone number.');
  }
  if (!password || password.length < 8) {
      isValid = false;
      showError('password', 'Password must be at least 8 characters long.');
  }
  if (!gender) {
      isValid = false;
      showError('gender', 'Please select your gender.');
  }
  if (!department) {
      isValid = false;
      showError('department-choice', 'Please select a department.');
  }

  if (isValid) {
      alert('Form submitted successfully!');
      this.reset(); // Reset the form after successful submission
  }
});

function showError(inputId, message) {
  const inputField = document.getElementById(inputId);
  const error = document.createElement('div');
  error.className = 'error-message text-danger';
  error.textContent = message;
  inputField.classList.add('is-invalid'); // Add Bootstrap error class
  inputField.parentElement.appendChild(error); // Append error message after input
}
