const API = "https://jsonplaceholder.typicode.com/posts";

// GET RANDOM POST
function getPost() {
  const randomId = Math.floor(Math.random() * 100) + 1; // 1 se 100
  fetch(`${API}/${randomId}`)
    .then((res) => {
      console.log("GET Response Status:", res.status); // status dekhne ke liye
      return res.json();
    })
    .then((data) => {
      displayTitle.innerText = data.title;
      displayBody.innerText = data.body;
      console.log("GET Data:", data);
      alert("You can view data");
    })
    .catch((err) => console.error("GET Error:", err));
}

// CREATE POST
function createPost() {
  const newPost = {
    title: title.value,
    body: body.value,
    userId: 1,
  };

  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  })
    .then((res) => {
      console.log("POST Response Status:", res.status);
      return res.json();
    })
    .then((data) => {
      displayTitle.innerText = data.title;
      displayBody.innerText = data.body;
      // just for testing  debugger;
      console.log("POST Data:", data);
      // just for testing  debugger;
      alert("Post Created!");
    })
    .catch((err) => console.error("POST Error:", err));
}

// UPDATE POST
function updatePost() {
  const randomId = Math.floor(Math.random() * 100) + 1; // random post update
  const updatedPost = {
    title: title.value || "Updated Title",
    body: body.value || "Updated Body",
    userId: 1,
  };

  fetch(`${API}/${randomId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedPost),
  })
    .then((res) => {
      console.log("UPDATE Response Status:", res.status);
      return res.json();
    })
    .then((data) => {
      displayTitle.innerText = data.title;
      displayBody.innerText = data.body;
      console.log("UPDATE Data:", data);
      alert("Post Updated!");
    })
    .catch((err) => console.error("UPDATE Error:", err));
}

// DELETE POST
function deletePost() {
  const randomId = Math.floor(Math.random() * 100) + 1; // random post delete

  fetch(`${API}/${randomId}`, { method: "DELETE" })
    .then((res) => {
      console.log("DELETE Response Status:", res.status);
      displayTitle.innerText = "";
      displayBody.innerText = "";
      alert("Post Deleted!");
    })
    .catch((err) => console.error("DELETE Error:", err));
}
