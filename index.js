function fetchBooks() {
  // Fetch request to the Game of Thrones API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json()) // Convert the response to JSON
    .then((json) => renderBooks(json)); // Call renderBooks() with the JSON data
}

// Function to render the fetched books data
function renderBooks(books) {
  // Assuming there's an element with id "book-list" in your HTML where you want to render the book titles
  const bookList = document.getElementById("book-list");
  
  // Clear any existing content
  bookList.innerHTML = "";
  
  // Loop through the books array and create list items for each book title
  books.forEach(book => {
    const listItem = document.createElement("li");
    listItem.textContent = book.name;
    bookList.appendChild(listItem);
  });
}

// Call fetchBooks() when the index.html page is loaded
document.addEventListener("DOMContentLoaded", fetchBooks);
