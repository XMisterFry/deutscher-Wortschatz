# 🇩🇪 Deutscher Wortschatz

**Deutscher Wortschatz** is a simple, mobile-friendly German vocabulary browser.  
It works entirely in your browser and is designed for **GitHub Pages**.

---

## ✨ Features

- **Organized Vocabulary**
  - Words are grouped into categories: Verbs, Adjectives, Things, Professions, Places, Days, Numbers, Animals, Prepositions, and Actions.
  
- **Quick Search**
  - Search bar always visible to find words instantly.

- **Smart Display**
  - On first load: shows only **first 5** words in *All* category for faster browsing.
  - In other categories: shows **all words**.
  - Searching always shows **all matching results**.

- **Example Sentences**
  - Each entry shows the word, meaning, gender (if applicable), example sentence, and simple form (for verbs).

- **Mobile Friendly**
  - Hamburger menu turns into a sidebar on mobile.
  - Centered layout for comfortable reading on small screens.

---

## 📂 Project Structure

german-vocab/
│
├── index.html # Main vocabulary browser
├── script.js # Logic for browsing and filtering
├── style.css # Styles
├── dictionary.json # Vocabulary database
└── README.md



---

## 🚀 How to Use

1. **Browse Vocabulary**
   - Open `index.html` (on GitHub Pages or locally).
   - Click a category or use the search bar.

2. **Search**
   - Type a German or English word into the search bar.
   - Results will appear instantly.

3. **Categories**
   - Click a category in the menu.
   - *All* category shows **first 5** words unless searching.
   - Other categories show **all words**.

---

## 🧹 Cleaning Duplicates

If you are editing `dictionary.json` manually, run the provided Node.js script locally to remove duplicates and sort words:

```bash
node check-duplicates.js

This ensures:

No duplicate words (case-insensitive)

Alphabetical order by German word

📌 Limitations
GitHub Pages is static hosting → the app cannot modify dictionary.json from the browser.

To add or change words, you must edit dictionary.json manually and commit changes to the repository.

🔮 Possible Improvements
“Load More” button for All category to show more than 5 words without searching.

Import/Export CSV for batch vocabulary management.

Form for Adding Words directly in the browser.

Text-to-Speech for hearing pronunciation.

📄 License
This project is for personal use while learning German.
You are free to modify it for your own study needs.