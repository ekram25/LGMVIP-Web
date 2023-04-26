const form = document.getElementById("registration-form");
const results = document.getElementById("registration-results");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from submitting and refreshing page

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Display the results on the page
  results.innerHTML = `
    <h2>Registration successful!</h2>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Password: ${password}</p>
  `;

  // Clear the form fields
  form.reset();
});
