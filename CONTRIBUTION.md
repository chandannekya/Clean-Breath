## 🤝 Contributing

We welcome all kinds of contributions!  
Please read our [CONTRIBUTING.md](CONTRIBUTING.md) file for detailed guidelines before submitting a pull request.

---

## 🛠️ How to Contribute

### 1️⃣ Fork the Repository

Click the **Fork** button (top right of this page) to create a copy of this repository under your GitHub account.

---

### 2️⃣ Clone Your Fork

```bash
git clone https://github.com/<your-username>/clean-breath.git
cd clean-breath
````

---

### 3️⃣ Install Dependencies

Make sure **Node.js** (v16+) is installed on your machine.

* For the frontend (React + Vite):

```bash
npm install
```

* For the backend (Node + Express):

```bash
cd server
npm install
```

---

### 4️⃣ Create a New Branch

Before making any changes:

```bash
git checkout -b feature/your-feature-name
```

Use a meaningful branch name (e.g., `feature/plant-suggestions`, `bugfix/payment-error`).

---

### 5️⃣ Make Your Changes

* Follow the current file and folder structure
* Write clean, modular, and well-documented code
* Avoid making unnecessary changes in unrelated files
* If UI-related, test responsiveness on mobile and desktop
* For new pages or components, use **Tailwind CSS**

---

### 6️⃣ Test Your Changes

Make sure everything runs smoothly:

* **Frontend**:

```bash
npm run dev
```

* **Backend**:

```bash
cd server
npm start
```

---

### 7️⃣ Commit Your Changes

Use meaningful commit messages:

```bash
git add .
git commit -m "feat: add SO2 filter logic to plant list"
```

Use `feat:`, `fix:`, `docs:`, `style:`, `refactor:` etc., to keep commits consistent.

---

### 8️⃣ Push Your Branch

```bash
git push origin feature/your-feature-name
```

---

### 9️⃣ Create a Pull Request

1. Go to your forked repository on GitHub
2. Click **Compare & pull request**
3. Set the base branch to `main`
4. Add a **clear title** and **detailed description**
5. Click **Create pull request**

✅ That’s it! A maintainer will review your PR shortly.
We may suggest a few changes — don’t worry, collaboration is the goal. 🌱

---

## 🙌 Need Help?

Feel free to open an [issue](https://github.com/chandannekya/clean-breath/issues) or reach out via [email](mailto:chadnannekya@gmail.com). We're here to help!

---

Thank you for helping improve Clean Breath! 💚

````

---

### 🔁 What to Do Next:

1. **Create a new file** in the root directory of your project:
   - `CONTRIBUTING.md`

2. **Paste the above content** into it.

3. In your `README.md`, update the **Contributing** section like this:

```md
## 🤝 Contributing

We welcome all kinds of contributions!  
Please read our [CONTRIBUTING.md](CONTRIBUTING.md) file for detailed guidelines before submitting a pull request.
````

---

### ✅ PR Info

Here’s your PR description to go with it:

---

#### 📄 Add CONTRIBUTING.md for Contributor Guidelines

**Description:**
This PR adds a detailed `CONTRIBUTING.md` file that outlines the steps for forking, branching, testing, committing, and submitting a pull request. This aligns with open-source best practices and improves contributor onboarding.

**Changes Made:**

* Added `CONTRIBUTING.md` with step-by-step contribution process
* Updated `README.md` to link to the new contribution guidelines

**Labels:** `documentation`, `enhancement`, `good first issue`, `level-1`

**Issue Reference:** Closes #<your-issue-number>

