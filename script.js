// Handle tab switching
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const target = btn.getAttribute('data-tab');
    document.querySelectorAll('.form-container').forEach(form => {
      form.classList.remove('active');
    });
    document.getElementById(target).classList.add('active');
  });
});

// Login form handler
function handleLogin(e) {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  if (email && password) {
    alert(`Welcome back, ${email}!`);
  } else {
    alert('Please fill in all fields.');
  }
  return false;
}

// Sign Up form handler
function handleSignUp(e) {
  e.preventDefault();

  const name = document.getElementById('signUpName').value;
  const email = document.getElementById('signUpEmail').value;
  const password = document.getElementById('signUpPassword').value;

  if (name && email && password) {
    alert(`Account created for ${name}!`);
  } else {
    alert('Please fill in all fields.');
  }
  return false;
}
