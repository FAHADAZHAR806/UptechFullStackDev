function showLoader() {
  document.getElementById("loader").classList.remove("hidden");
}

function hideLoader() {
  document.getElementById("loader").classList.add("hidden");
}

function resetForm() {
  document.getElementById("userForm").reset();
}

function showMessage(msg) {
  alert(msg);
}
