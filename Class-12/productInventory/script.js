const API = "https://fakestoreapi.com/products";

const productContainer = document.getElementById("products");
const form = document.getElementById("productForm");
const loading = document.getElementById("loading");
const categoryFilter = document.getElementById("categoryFilter");

let products = [];

// SHOW LOADING
function showLoading() {
  loading.classList.remove("hidden");
}

function hideLoading() {
  loading.classList.add("hidden");
}

// FETCH PRODUCTS
async function fetchProducts() {
  try {
    showLoading();

    const res = await fetch(API);
    const data = await res.json();

    products = data;
    renderProducts(products);
  } catch (error) {
    console.error(error);
    alert("Failed to fetch products");
  } finally {
    hideLoading();
  }
}

// RENDER PRODUCTS
function renderProducts(items) {
  productContainer.innerHTML = "";

  if (items.length === 0) {
    productContainer.innerHTML = "<p>No products found</p>";
    return;
  }

  items.forEach((product) => {
    const card = document.createElement("div");

    card.className = "bg-white p-4 rounded shadow hover:shadow-xl transition";

    card.innerHTML = `
 <img src="${product.image}" 
 class="h-40 mx-auto object-contain">

 <h3 class="font-bold mt-3">
 ${product.title.substring(0, 40)}
 </h3>

 <p class="${product.price < 20 ? "text-green-600 font-bold" : ""}">
 $${product.price}
 </p>

 <p class="text-sm text-gray-600">
 ${product.description.substring(0, 60)}...
 </p>

 <p class="text-xs text-blue-600">${product.category}</p>

 <div class="flex gap-2 mt-3">

 <button onclick="deleteProduct(${product.id})"
 class="bg-red-500 text-white px-3 py-1 rounded">
 Delete
 </button>

 <button onclick="editProduct(${product.id})"
 class="bg-yellow-500 text-white px-3 py-1 rounded">
 Edit
 </button>

 </div>
 `;

    productContainer.appendChild(card);
  });
}

// CREATE PRODUCT
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newProduct = {
    title: title.value,
    price: price.value,
    description: description.value,
    image: image.value,
    category: category.value,
  };

  try {
    const res = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const data = await res.json();

    products.unshift(data);

    renderProducts(products);

    alert("Product Added");

    form.reset();
  } catch (error) {
    console.error(error);
    alert("Failed to add product");
  }
});

// DELETE PRODUCT
async function deleteProduct(id) {
  try {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    products = products.filter((p) => p.id !== id);

    renderProducts(products);

    alert("Product Deleted");
  } catch (error) {
    console.error(error);
  }
}

// EDIT PRODUCT
async function editProduct(id) {
  const title = prompt("Enter new title");

  if (!title) return;

  try {
    const res = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
      }),
    });

    const updated = await res.json();

    products = products.map((p) => (p.id === id ? { ...p, ...updated } : p));

    renderProducts(products);

    alert("Product Updated");
  } catch (error) {
    console.error(error);
  }
}

// FILTER CATEGORY
categoryFilter.addEventListener("change", async () => {
  const category = categoryFilter.value;

  if (category === "all") {
    renderProducts(products);
    return;
  }

  try {
    showLoading();

    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`,
    );

    const data = await res.json();

    renderProducts(data);
  } catch (error) {
    console.error(error);
  } finally {
    hideLoading();
  }
});

// INITIAL LOAD
fetchProducts();
