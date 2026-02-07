# Quiz Game

A simple and interactive quiz application with a clean, modern interface. Test your knowledge with multiple-choice questions and get instant feedback on your answers!

## Description

This is an adaptive quiz game created in vanilla JavaScript, which has:

- Multiple choice questions and instant feedback
- Tracking the results throughout the test
- Visual progress indicator
- Color-coded answers (correct/incorrect)
- Performance-based reports of results
- Smooth transitions between screens

## Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Styling with CSS custom properties (variables) and responsive design
- **JavaScript (ES6+)** - Game logic, DOM manipulation, and ES6 modules
- **ES6 Modules** - Modular code organization

## Features to Add

Here are some potential improvements and features that could be added:

- [ ] Timer for each question or the entire quiz
- [ ] Difficulty levels (Easy, Medium, Hard)
- [ ] Question categories (Science, History, Sports, etc.)
- [ ] Leaderboard with local storage
- [ ] Sound effects for correct/incorrect answers
- [ ] Dark mode toggle
- [ ] Keyboard navigation support
- [ ] Hint system
- [ ] Multi-language support

## How to Run

Since this is a vanilla JavaScript project with ES6 modules, you need to run it through a local server:

### Option 1: Using VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Open the project folder in VS Code
3. Right-click on `index.html` and select "Open with Live Server"

### Option 2: Using Python

```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

### Option 3: Using Node.js http-server

```bash
# Install http-server globally
npm install -g http-server

# Run in project directory
http-server

# Then open http://localhost:8080 in your browser
```

### Option 4: Using npx (no installation needed)

```bash
npx http-server
```

> **Note:** Simply opening `index.html` directly in a browser won't work due to CORS restrictions with ES6 modules. A local server is required.

## Project Demo

https://github.com/user-attachments/assets/52c74988-654d-4b97-82a5-58a3606f1930



```
Quiz-Game/
├── index.html          # Main HTML structure
├── style.css           # Styles with CSS variables
├── script.js           # Main game logic
├── data.js             # Quiz questions data
└── README.md           # Project documentation
```

**Made with ❤️ by [elizaveta-rybina](https://github.com/elizaveta-rybina)**
**Author of the idea: Codesistency**
