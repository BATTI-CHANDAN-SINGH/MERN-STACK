# CineHub

A modern, interactive web application for discovering and exploring movies and TV shows. CineHub leverages The Movie Database (TMDB) API to provide users with real-time access to trending content, popular releases, and upcoming films.

## Features

- 🎬 **Trending Content**: Display the latest trending movies and TV shows updated weekly
- 🔍 **Search Functionality**: Search for any movie or TV show by name
- ⭐ **Browse Categories**: 
  - Popular movies
  - Now Playing films
  - Upcoming releases
  - Top-rated content
- ❤️ **Favorites**: Save your favorite movies locally for quick access
- 📊 **Movie Details**: View comprehensive information including:
  - Movie poster and artwork
  - Release date
  - IMDb ratings and vote counts
  - Genres
  - Links to full TMDB movie page
- 📱 **Responsive Design**: Fully responsive interface that works on desktop, tablet, and mobile devices

## Tech Stack

- **Frontend Framework**: HTML5, CSS3, JavaScript (Vanilla)
- **UI Library**: Bootstrap 5.3.3
- **Icons**: Font Awesome 6.6.0
- **jQuery**: 3.3.1 (via CDN)
- **API**: The Movie Database (TMDB) API
- **Version Control**: Git

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/BATTI-CHANDAN-SINGH/MERN-STACK.git
   cd CineHub
   ```

2. **Open the project**:
   - Navigate to the project directory
   - Open `index.html` in your web browser

## Usage

### Searching for Movies/TV Shows
1. Enter the movie or TV show name in the search bar at the top
2. Click the "Search" button
3. Browse through the search results

### Browsing Categories
- Click on any category in the navigation bar:
  - **Popular**: Trending popular content
  - **Now Playing**: Currently in theaters
  - **Upcoming**: Upcoming releases
  - **Top Rated**: Highest-rated content
  - **Your Favourites**: Your saved favorites

### Viewing Movie Details
- Each movie card displays:
  - Poster image
  - Title
  - Genres
  - Release date
  - Rating (out of 10)
  - Vote count
- Click "Know More" to view the full movie page on TMDB
- Click "Add ❤️" to add the movie to your favorites

## API Integration

CineHub uses the TMDB API v3 (Bearer Token Authentication) to fetch:
- Trending movies and TV shows
- Popular content
- Now playing films
- Upcoming releases
- Top-rated movies
- Genre information
- Search results

### API Configuration
The API token is embedded in the JavaScript file. For production use, consider:
- Moving the API key to environment variables
- Using a backend proxy to protect the API key
- Implementing proper authentication

## Project Structure

```
CineHub/
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

## File Descriptions

### index.html
- Navigation bar with category links and search form
- Main container for displaying movie cards
- Bootstrap and Font Awesome CDN imports

### style.css
- Modern gradient background styling
- Responsive card layouts
- Smooth hover animations and transitions
- Custom navbar with gradient text effect
- Mobile-first responsive design

### script.js
- TMDB API integration
- Movie/TV show fetching and filtering
- Dynamic card generation
- Favorites management using localStorage
- Event listeners for user interactions

## Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## Features Explanation

### Trending Page
Default page on load, displaying weekly trending content from TMDB using the trending endpoint.

### Dynamic Content Loading
All content is fetched dynamically from the TMDB API and rendered without page reloads, providing a smooth user experience.

### Responsive Grid Layout
Movie cards are displayed in a responsive grid that adapts to different screen sizes using CSS Flexbox and Bootstrap utilities.

### Favorites System
Movies added to favorites are stored in the browser's localStorage, persisting across sessions.

## Future Enhancements

- User authentication and account creation
- Personalized recommendations based on watch history
- Movie ratings and reviews
- Watchlist functionality
- Social sharing features
- Dark/Light theme toggle
- Multiple language support

## API Limits

Please be aware of TMDB API rate limits:
- Free tier: 40 requests per 10 seconds
- Implement request throttling for production

## Credits

- **API**: [The Movie Database (TMDB)](https://www.themoviedb.org/)
- **Framework**: [Bootstrap](https://getbootstrap.com/)
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Fonts**: [Google Fonts](https://fonts.google.com/)

## License

This project is provided as-is for educational purposes. Please ensure compliance with TMDB API terms of service when deploying.

## Support & Contact

For issues, bugs, or feature requests, please open an issue in the repository or contact the project maintainer.

---

**Happy watching! 🎬🍿**
