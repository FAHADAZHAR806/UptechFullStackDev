function renderUsers(users) {
  const table = document.getElementById("userTable");

  table.innerHTML = "";

  users.forEach((user) => {
    const row = document.createElement("tr");

    row.innerHTML = `

<td class="p-2">${user.id}</td>
<td class="p-2">${user.firstName}</td>
<td class="p-2">${user.lastName}</td>
<td class="p-2">${user.email}</td>
<td class="p-2">${user.phone}</td>

<td class="p-2 space-x-2">

<button
onclick="handleEdit(${user.id})"
class="bg-yellow-400 px-2 py-1 rounded">
Edit
</button>

<button
onclick="handleDelete(${user.id})"
class="bg-red-500 text-white px-2 py-1 rounded">
Delete
</button>

</td>

`;

    table.appendChild(row);
  });
}
