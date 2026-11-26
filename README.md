# Travel Explorer – Travel Recommendation Website

Travel Explorer is a responsive travel recommendation website built with React and Vite. It helps visitors discover destinations around the world, explore cities and attractions, and view useful local date and time information before planning a trip.

## Live Demo

[Visit Travel Explorer](https://mfirdaus7.github.io/Travel-Agency/)

## Project Repository

[GitHub – Travel-Agency](https://github.com/mfirdaus7/Travel-Agency)

## Features

- **Destination Recommendations** – Browse destinations grouped by country, including Australia, Japan, and Brazil.
- **Category-Based Search** – Search for countries, cities, temples, and beaches.
- **Search and Clear Buttons** – Submit a keyword using the Search button or clear it using the X button.
- **Destination Details** – View destination names, descriptions, categories, and images.
- **Local Date and Time** – View current local date and time for supported destinations.
- **About Us Page** – Learn about the travel agency, its mission, and services.
- **Contact Us Page** – Complete a contact form with name, email, subject, destination, and message.
- **Team Section** – Meet sample team members with profile images.
- **Responsive Design** – Browse the website on desktop, tablet, and mobile devices.

## Destination Categories

| Category             | Sample Destinations                |
| -------------------- | ---------------------------------- |
| Countries and Cities | Australia – Sydney, Melbourne      |
| Countries and Cities | Japan – Tokyo, Kyoto               |
| Countries and Cities | Brazil – Rio de Janeiro, São Paulo |
| Temples              | Angkor Wat, Taj Mahal              |
| Beaches              | Bora Bora, Copacabana Beach        |

## Technology Stack

- React
- Vite
- JavaScript (ES6+)
- Bootstrap 5
- Bootstrap Icons
- React Router
- JSON
- JavaScript Intl.DateTimeFormat API
- Vercel / GitHub Pages deployment

## Getting Started

### Prerequisites

Install Node.js and npm.

### 1. Clone the repository

```bash
git clone https://github.com/mfirdaus7/Travel-Agency.git
```

### 2. Navigate to the project folder

```bash
cd Travel-Agency
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in the terminal.

### 5. Build for production

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

## Project Structure

```text
Travel-Agency/
├── public/
│   └── data/
│       └── travelData.json
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── hooks/
│   │   └── useTravelData.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Contact Form Note

The Contact Us form currently demonstrates front-end form handling. It displays a confirmation message after submission but is not connected to an email service or backend.

Team member profiles and contact details are sample content for this project.

## Future Improvements

- Connect the contact form to an API or email service.
- Add more destinations and travel information.
- Integrate live travel or weather APIs.
- Add user accounts and saved destinations.

---

Built as a React travel recommendation project.
