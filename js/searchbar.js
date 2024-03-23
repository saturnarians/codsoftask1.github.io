const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');
const searchInputContainer = document.querySelector('.search-input-container');

searchIcon.addEventListener('click', () => {
  searchInputContainer.style.width = '150px'; // Adjust the width as needed
  searchInput.style.display = 'block';
  searchInput.focus();
});

searchInput.addEventListener('blur', () => {
  if (searchInput.value === '') {
    searchInputContainer.style.width = '0';
    searchInput.style.display = 'none';
  }
});
