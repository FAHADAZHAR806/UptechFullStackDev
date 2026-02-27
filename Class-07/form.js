const data = [];
function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  data.push(name, email, age, phone, message);
  console.log(data);
}
