// Fetch first movie details
fetch('http://localhost:3000/films/1')
  .then(response => response.json())
  .then(data => {
    // Example: Update poster image source
    const posterImg = document.getElementById('poster');
    posterImg.src = data.poster;

    // Example: Update title
    document.getElementById('title').textContent = data.title;

    // Example: Update runtime
    document.getElementById('runtime').textContent = `${data.runtime} mins`;

    // Example: Update showtime
    document.getElementById('showtime').textContent = data.showtime;

    // Example: Calculate and update available tickets
    const capacity = data.capacity;
    const ticketsSold = data.tickets_sold;
    const availableTickets = capacity - ticketsSold;
    document.getElementById('available-tickets').textContent = availableTickets;
  })
  .catch(error => {
    console.error('Error fetching movie details:', error);
  });

// Fetch all movies for the menu
fetch('http://localhost:3000/films')
  .then(response => response.json())
  .then(data => {
    const filmsList = document.getElementById('films');
    // Clear existing list items
    filmsList.innerHTML = '';

    // Populate movie menu
    data.forEach(movie => {
      const li = document.createElement('li');
      li.textContent = movie.title;
      li.classList.add('film', 'item');
      li.addEventListener('click', () => {
        // Update movie details when clicked
        // Implement this part based on your requirements
        console.log('Clicked on:', movie.title);
      });
      filmsList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error fetching movies:', error);
  });

