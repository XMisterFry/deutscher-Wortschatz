let vocabulary = [];
let isSearching = false;

// Sidebar toggle for mobile
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("show");
});

// Load dictionary.json
fetch("dictionary.json")
  .then(res => res.json())
  .then(data => {
    vocabulary = data;
    displayWords(vocabulary.slice(0, 5)); // Show only first 5 on load
  });

const searchInput = document.getElementById("search");
const wordList = document.getElementById("word-list");
const categoryButtons = document.querySelectorAll("#sidebar button");

// Display words
function displayWords(words) {
  wordList.innerHTML = "";
  if (words.length === 0) {
    wordList.innerHTML = "<p>No words found.</p>";
    return;
  }
  words.forEach(word => {
    const div = document.createElement("div");
    div.className = "word-card";
    div.innerHTML = `
      <h3>${word.word} ${word.gender ? "(" + word.gender + ")" : ""}</h3>
      <p><strong>Meaning:</strong> ${word.meaning}</p>
      ${word.simpleForm ? `<p><strong>Simple form:</strong> ${word.simpleForm}</p>` : ""}
      <p><em>${word.example}</em></p>
    `;
    wordList.appendChild(div);
  });
}

// Search functionality
searchInput.addEventListener("input", () => {
  const term = searchInput.value.trim().toLowerCase();
  isSearching = term.length > 0;

  if (isSearching) {
    const filtered = vocabulary.filter(w =>
      w.word.toLowerCase().includes(term) ||
      w.meaning.toLowerCase().includes(term)
    );
    displayWords(filtered);
  } else {
    // No search → show first 5 only
    displayWords(vocabulary.slice(0, 5));
  }
});

// Category filter
categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    document.getElementById("sidebar").classList.remove("show"); // close sidebar on mobile

    if (category === "All") {
      if (isSearching) {
        displayWords(vocabulary);
      } else {
        displayWords(vocabulary.slice(0, 5)); // First 5 for "All"
      }
    } else {
      const filtered = vocabulary.filter(w => w.category === category);
      displayWords(filtered); // Always show all in specific category
    }
  });
});

