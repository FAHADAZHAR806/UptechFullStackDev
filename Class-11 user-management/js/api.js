const BASE_URL = "https://dummyjson.com/users";

async function getUsers() {
  try {
    const res = await fetch(BASE_URL);

    const data = await res.json();

    return data.users;
  } catch (error) {
    throw error;
  }
}

async function createUser(user) {
  try {
    const res = await fetch(`${BASE_URL}/add`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(user),
    });

    return await res.json();
  } catch (error) {
    throw error;
  }
}

async function updateUser(id, user) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(user),
    });

    return await res.json();
  } catch (error) {
    throw error;
  }
}

async function deleteUser(id) {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    throw error;
  }
}

async function searchUsers(query) {
  try {
    const res = await fetch(`${BASE_URL}/search?q=${query}`);

    const data = await res.json();

    return data.users;
  } catch (error) {
    throw error;
  }
}
