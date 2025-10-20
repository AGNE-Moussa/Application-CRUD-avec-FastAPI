const API_URL = "http://localhost:8000/api/v1/users";

const userList = document.getElementById("userList");
const userForm = document.getElementById("userForm");

let editingUserId = null; // Sert à savoir si on modifie ou ajoute

// Charger tous les utilisateurs
async function loadUsers() {
  userList.innerHTML = "<p>Chargement...</p>";
  const response = await fetch(API_URL);
  const users = await response.json();

  userList.innerHTML = users
    .map(
      (u) => `
      <div class="border p-3 rounded flex justify-between items-center">
        <div>
          <p><strong>${u.first_name} ${u.last_name}</strong> (${u.gender})</p>
          <p class="text-sm text-gray-500">Rôles : ${u.roles.join(", ")}</p>
        </div>
        <div class="flex gap-2">
          <button onclick="editUser('${u.id}', '${u.first_name}', '${u.last_name}', '${u.gender}', '${u.roles[0]}')" 
            class="text-blue-600 hover:underline">Modifier</button>
          <button onclick="deleteUser('${u.id}')" 
            class="text-red-600 hover:underline">Supprimer</button>
        </div>
      </div>
    `
    )
    .join("");
}

// Ajouter ou modifier un utilisateur
userForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userData = {
    first_name: document.getElementById("first_name").value,
    last_name: document.getElementById("last_name").value,
    gender: document.getElementById("gender").value,
    roles: [document.getElementById("roles").value],
  };

  if (editingUserId) {
    // --- Mode édition (PUT)
    const response = await fetch(`${API_URL}/${editingUserId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      alert("Utilisateur mis à jour !");
      editingUserId = null;
      userForm.reset();
      document.querySelector("button[type='submit']").textContent = "➕ Ajouter un utilisateur";
      loadUsers();
    } else {
      alert("Erreur lors de la mise à jour.");
    }
  } else {
    // --- Mode ajout (POST)
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      alert("Utilisateur ajouté !");
      userForm.reset();
      loadUsers();
    } else {
      alert("Erreur lors de l’ajout de l’utilisateur.");
    }
  }
});

// Supprimer un utilisateur
async function deleteUser(id) {
  if (!confirm("Voulez-vous vraiment supprimer cet utilisateur ?")) return;

  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    alert("Utilisateur supprimé !");
    loadUsers();
  } else {
    alert("Erreur lors de la suppression.");
  }
}

// Pré-remplir le formulaire pour modifier
function editUser(id, first_name, last_name, gender, role) {
  document.getElementById("first_name").value = first_name;
  document.getElementById("last_name").value = last_name;
  document.getElementById("gender").value = gender;
  document.getElementById("roles").value = role;

  editingUserId = id;
  document.querySelector("button[type='submit']").textContent = "✏️ Mettre à jour l’utilisateur";
}

// Charger les utilisateurs au démarrage
loadUsers();
