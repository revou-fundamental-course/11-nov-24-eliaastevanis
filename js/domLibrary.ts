document.getElementById('myForm').addEventListener('submit', validateForm);
{
  function validateForm(event) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const interest = document.getElementById('interest');

    // Reset message error
    name.textContent = '';
    email.textContent = '';
    interest.textContent = '';

    let isValid = true;

    // Valid nama
    if (name.value.trim() === '') {
      nameError.textContent = 'Name is required.'; // isi nama errornya
      isValid = false;
    }

    // Valid email
    if (email.value.trim() === '') {
      emailError.textContent = 'Email is required.'; // isi email errornya
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      emailError.textContent = 'Please enter a valid email address.'; // error valid email
      isValid = false;
    }

    // Valid interest
    if (interest.value === '') {
      interestError.textContent = 'Please select an option.'; // isi error option
      isValid = false;
    }

    // valid true, nampilin alert sukses
    if (isValid) {
      alert('Form submitted successfully!'); //
      // refresh/tuju ke halaman yang dipengen
      window.location.href = '/assignment/index.html'; //
    }

    return isValid; //
  }
}

declare var document: Document;
