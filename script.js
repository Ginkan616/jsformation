const images = [
    {
      "title": "Beach 1",
      "keywords": ["beach", "plage", "sable"],
      "src": "images/beach1.jpg"
    },
    {
      "title": "Beach 2",
      "keywords": ["beach", "plage", "mer"],
      "src": "images/beach2.jpg"
    },
    {
      "title": "Temple 1",
      "keywords": ["temple", "asie", "culture"],
      "src": "images/temple1.jpg"
    },
    {
      "title": "Temple 2",
      "keywords": ["temple", "bouddha", "religion"],
      "src": "images/temple2.jpg"
    },
    {
      "title": "Country 1",
      "keywords": ["paysage", "nature", "montagne"],
      "src": "images/country1.jpg"
    },
    {
      "title": "Country 2",
      "keywords": ["ville", "urbain", "monument"],
      "src": "images/country2.jpg"
    }
  ];
  
  function searchImages(keyword) {
    return images.filter(image => {
      return image.keywords.some(kw => kw.includes(keyword.toLowerCase()));
    });
  }
  
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  const clearButton = document.getElementById('clearButton');
  
  searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const searchTerm = searchInput.value;
      const results = searchImages(searchTerm);
  
      const searchResults = document.getElementById('searchResults');
      searchResults.innerHTML = '';
  
      if (results.length === 0) {
          searchResults.innerHTML = '<p>Aucun résultat trouvé.</p>';
      } else {
          results.forEach(image => {
              const imgElement = document.createElement('img');
              imgElement.src = image.src;
              imgElement.alt = image.title;
              searchResults.appendChild(imgElement);
          });
      }
  });
  
  clearButton.addEventListener('click', function() {
      searchInput.value = '';
      const searchResults = document.getElementById('searchResults');
      searchResults.innerHTML = ''; // Efface aussi les résultats de la recherche
  });