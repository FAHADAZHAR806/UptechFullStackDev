let users = [];
let editUserId = null;

document.addEventListener("DOMContentLoaded", loadUsers);

async function loadUsers() {
  showLoader();

  try {
    users = await getUsers();

    renderUsers(users);
  } catch (error) {
    showMessage("Failed to load users");
  }

  hideLoader();
}

document
  .getElementById("userForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const user = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
    };

    try {
      if (editUserId) {
        await updateUser(editUserId, user);

        showMessage("User updated");

        editUserId = null;
      } else {
        const newUser = await createUser(user);

        users.push(newUser);

        showMessage("User added");
      }

      renderUsers(users);

      resetForm();
    } catch (error) {
      showMessage("Operation failed");
    }
  });

async function handleDelete(id) {
  try {
    await deleteUser(id);

    users = users.filter((user) => user.id !== id);

    renderUsers(users);

    showMessage("User deleted");
  } catch {
    showMessage("Delete failed");
  }
}

function handleEdit(id) {
  const user = users.find((u) => u.id === id);

  document.getElementById("firstName").value = user.firstName;
  document.getElementById("lastName").value = user.lastName;
  document.getElementById("email").value = user.email;
  document.getElementById("phone").value = user.phone;

  editUserId = id;
}

document
  .getElementById("searchInput")
  .addEventListener("input", async function () {
    const query = this.value;

    if (query === "") {
      renderUsers(users);

      return;
    }

    const results = await searchUsers(query);

    renderUsers(results);
  });
