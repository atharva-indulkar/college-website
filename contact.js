document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission
  
      // Get form elements
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      const message = document.getElementById('message');
  
      // Reset previous validation states
      resetValidation(name);
      resetValidation(email);
      resetValidation(phone);
      resetValidation(message);
  
      let isValid = true;
  
      // Name validation (at least 2 characters, only letters and spaces)
      const namePattern = /^[A-Za-z\s]{2,}$/;
      if (!namePattern.test(name.value)) {
        showError(name, "Please enter a valid name (at least 2 characters, letters only).");
        isValid = false;
      }
  
      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value)) {
        showError(email, "Please enter a valid email address.");
        isValid = false;
      }
  
      // Phone validation (optional, 10 digits)
      if (phone.value) {
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone.value)) {
          showError(phone, "Please enter a valid phone number (10 digits).");
          isValid = false;
        }
      }
  
      // Message validation
      if (!message.value.trim()) {
        showError(message, "Please enter a message.");
        isValid = false;
      }
  
      // If all validations pass, you can process the form data (e.g., send it via AJAX)
      if (isValid) {
        alert("Form submitted successfully!");
  
        // Here you can handle the form data as needed (e.g., send it via AJAX)
  
        // Optionally, you can reset the form after submission
        this.reset();
      }
    });
  
    function showError(element, message) {
      element.classList.add('is-invalid');
      const feedback = document.createElement('div');
      feedback.className = 'invalid-feedback';
      feedback.textContent = message;
      element.parentNode.appendChild(feedback);
    }
  
    function resetValidation(element) {
      element.classList.remove('is-invalid');
      element.classList.remove('is-valid');
      const feedback = element.parentNode.querySelector('.invalid-feedback');
      if (feedback) {
        feedback.remove();
      }
    }
  });
  