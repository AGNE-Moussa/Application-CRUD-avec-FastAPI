# 🚀 Application CRUD avec FastAPI et Frontend Simple

Ce projet est un **exemple complet d’application CRUD (Créer, Lire, Mettre à jour, Supprimer)** construite avec **FastAPI** côté back-end et une **interface web minimaliste en HTML/JS** côté front-end.  
Il permet de gérer une liste d’utilisateurs stockée dans une base de données en mémoire.

---

## 📋 Fonctionnalités

### 🧠 Côté API (FastAPI)
- ✅ Créer un utilisateur  
- ✅ Lire la liste des utilisateurs  
- ✅ Mettre à jour un utilisateur existant  
- ✅ Supprimer un utilisateur  
- ✅ Base de données en mémoire  
- ✅ Documentation automatique avec Swagger UI (`/docs`)

### 💻 Côté Frontend
- ✅ Interface simple et responsive avec TailwindCSS  
- ✅ Affichage de tous les utilisateurs  
- ✅ Formulaire pour ajouter ou modifier un utilisateur  
- ✅ Bouton “Supprimer” et “Modifier”  
- ✅ Connexion directe avec les endpoints FastAPI via `fetch`  
- ✅ Gestion automatique du mode “Ajout” ou “Édition”

---

## 🧩 Structure du projet

fastapi-crud/
├── main.py # Fichier principal FastAPI
├── models.py # Modèles Pydantic (User, UpdateUser)
├── requirements.txt # Dépendances Python
└── frontend/
├── index.html # Interface utilisateur
└── script.js # Logique frontend (liaison API)


## ⚙️ Installation et exécution

### 1️⃣ Cloner le projet
```bash
git clone https://github.com/ton-nom-utilisateur/fastapi-crud.git
cd fastapi-crud


Créer un environnement virtuel
python -m venv venv
source venv/bin/activate   # Sur Windows : venv\Scripts\activate

Installer les dépendances

Crée un fichier requirements.txt :

fastapi
uvicorn
pydantic


Puis installe-les :

pip install -r requirements.txt

4️⃣ Lancer le serveur FastAPI
uvicorn main:app --reload


Le serveur sera disponible sur :
👉 http://localhost:8000

Et la documentation automatique ici :
👉 http://localhost:8000/docs

## 🌐 Frontend

Le front se trouve dans le dossier frontend/.

📄 index.html

C’est la page principale qui contient :

Un formulaire pour créer ou modifier un utilisateur

Une liste affichant les utilisateurs existants

Des boutons “Modifier” et “Supprimer”

⚙️ script.js

Le script communique directement avec ton API FastAPI :

GET /api/v1/users → Récupère tous les utilisateurs

POST /api/v1/users → Ajoute un utilisateur

PUT /api/v1/users/{id} → Met à jour un utilisateur

DELETE /api/v1/users/{id} → Supprime un utilisateur

Il gère automatiquement le mode édition :

Quand tu cliques sur “Modifier”, le formulaire est pré-rempli.

Le bouton change de texte pour “✏️ Mettre à jour l’utilisateur”.

## 🧱 Middleware CORS (obligatoire)

Pour permettre la communication entre ton front (index.html) et ton API FastAPI, ajoute ce code dans ton main.py :

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

🧩 Exemple d’utilisation

Lancer le serveur :

uvicorn main:app --reload


Ouvrir frontend/index.html dans ton navigateur.

Ajouter un utilisateur via le formulaire.
Il apparaîtra dans la liste avec des boutons Modifier et Supprimer.

Cliquer sur Modifier : le formulaire se remplit automatiquement.
Clique sur Mettre à jour l’utilisateur pour sauvegarder les changements.

Cliquer sur Supprimer pour retirer un utilisateur.



## Améliorations possibles

Ajouter une base de données réelle (SQLite, PostgreSQL…)

Gérer l’authentification des utilisateurs

Ajouter une recherche ou un filtre (par prénom ou rôle)

