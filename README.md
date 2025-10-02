# 🚀 LinguaLeap - Language Learning Flashcard App

<div align="center">

![LinguaLeap Banner](https://img.shields.io/badge/LinguaLeap-Language%20Learning-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)

**Master new languages with intelligent flashcard system** 🎓

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack)

</div>

---

## ✨ Features

### 📚 **Deck Management**
- Create custom flashcard decks for any language
- Add, edit, and delete flashcards with ease
- Visual deck cards with dynamic images
- Track card count per deck

### 🎯 **Study Mode**
- Interactive flip-card studying experience
- Mark cards as "Known" or "Unknown"
- Progress tracking during study sessions
- Navigate through cards with Previous/Next buttons

### 🔍 **Smart Organization**
- Search flashcards within decks
- Sort cards alphabetically (A-Z, Z-A)
- Filter by studied/unstudied cards
- List and Grid view modes

### 👤 **User Authentication**
- Simple login system (no real authentication yet)
- Protected routes for authenticated users
- User-friendly interface

### 📊 **Statistics Dashboard**
- Coming soon: Track your learning progress
- Analyze study patterns and accuracy
- Set and achieve language goals

---

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/thegreatfeez/LinguaLeap.git
cd lingualeap
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
```
Navigate to http://localhost:5173
```

---

## 💡 Usage

### Getting Started

1. **Login** 
   - Click "Log In to Continue" from the homepage
   - Enter any email and password (authentication is not yet implemented)
   - Click "Log in" to access the app

2. **Create a Deck**
   - Navigate to "Decks" from the header
   - Click "Add New Deck" or "Create New Deck"
   - Enter deck name and description
   - Add flashcards with front (term) and back (definition)
   - Click "Save Deck"

3. **Study Your Cards**
   - Click on any deck to view details
   - Click "Start Study Session"
   - Click the card to flip between front and back
   - Mark cards as "Known" ✅ or "Unknown" ❌
   - Track your progress in real-time

4. **Manage Cards**
   - Edit existing cards with the ✏️ icon
   - Delete cards with the 🗑️ icon
   - Search for specific cards
   - Sort cards by front or back text

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| ⚛️ **React** | Frontend framework |
| 🎨 **Tailwind CSS** | Styling and UI components |
| 🧭 **React Router** | Navigation and routing |
| 🔄 **Context API** | State management |
| 🎭 **Lucide React** | Icon library |
| 📦 **Vite** | Build tool and dev server |

---

## 📁 Project Structure

```
lingualeap/
├── src/
│   ├── components/
│   │   ├── AddToDeck.jsx       # Create new deck form
│   │   ├── ErrorAlert.jsx      # Error notification
│   │   ├── Footer.jsx          # App footer
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Layout.jsx          # Main layout wrapper
│   │   └── SuccessAlerts.jsx   # Success notification
│   ├── context/
│   │   ├── AuthContext.jsx     # Authentication state
│   │   └── DeckContext.jsx     # Deck management state
│   ├── Pages/
│   │   ├── DeckDetails.jsx     # Individual deck view
│   │   ├── Decks.jsx           # All decks overview
│   │   ├── Home.jsx            # Landing page
│   │   ├── Login.jsx           # Login page
│   │   ├── Stats.jsx           # Statistics dashboard
│   │   └── StudyFlasgCard.jsx  # Study mode
│   ├── App.jsx                 # Main app component
│   └── main.jsx               # Entry point
└── package.json
```

---

## 🎯 Roadmap

- [x] Basic flashcard functionality
- [x] Deck management
- [x] Study mode with flip cards
- [x] Simple authentication
- [ ] Persistent storage (localStorage/database)
- [ ] Statistics and analytics
- [ ] Spaced repetition algorithm
- [ ] User profiles and real authentication
- [ ] Mobile responsive design improvements
- [ ] Dark mode support

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@thegreatfeez](https://github.com/thegreatfeez)
- Email: adamsafeez4@gmail.com

---

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Images from [Picsum Photos](https://picsum.photos/)
- Inspired by language learning platforms like Anki

---

<div align="center">

**Made with ❤️ for language learners worldwide**

⭐ Star this repo if you find it helpful!

</div>