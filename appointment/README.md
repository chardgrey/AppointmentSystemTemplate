# Appointment Pro

![Appointment Pro](public/logo.png)

A modern, responsive appointment scheduling application built with React and Vite, designed to streamline booking processes for businesses of all sizes.

## 🚀 Features

- **Intuitive Booking Interface**: Simple and fast appointment scheduling
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Performance Optimized**: Fast loading times with optimized assets
- **Accessibility Compliant**: Built with a11y best practices in mind

## 🛠️ Technologies

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: TailwindCSS 4
- **Animations**:
  - AOS (Animate On Scroll)
  - Three.js with React Three Fiber for background effects
- **Icons**: Lucide React
- **Linting**: ESLint with React-specific plugins

## 📋 Requirements

- Node.js 18.x or higher
- npm 8.x or higher

## 🔧 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/appointment-pro.git
   cd appointment-pro
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173/
   ```

## 🧪 Building for Production

```bash
npm run build
```

This will create a `dist` folder with optimized production build.

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── App.jsx             # Main application component
├── App.css             # Global CSS and custom utilities
├── main.jsx            # Entry point
├── index.css           # CSS imports and variables
├── components/         # React components
│   ├── landing/        # Landing page sections
│   │   ├── Hero.jsx       # Hero section with main CTA
│   │   ├── Features.jsx   # Product features display
│   │   ├── AboutUs.jsx    # Company information
│   │   ├── BookingSection.jsx  # Booking call-to-action
│   │   └── Testimonials.jsx  # User testimonials
│   ├── layout/         # Layout components
│   │   ├── Header.jsx     # Navigation header
│   │   └── Footer.jsx     # Page footer
│   ├── pages/          # Page components
│   │   └── Landing.jsx    # Main landing page
│   └── ui/             # Reusable UI components
│       ├── Loader.jsx     # Loading screen
│       ├── Silk.jsx       # Three.js background effect
│       ├── Spotlight.jsx  # Spotlight card effect
│       └── TeamCard.jsx   # Team member cards
└── hooks/              # Custom React hooks
    └── useInView.js    # Intersection Observer hook
```

## ✨ Key Features Explained

### Interactive Scheduling

The application provides an intuitive booking interface that allows users to select services, choose available time slots, and confirm appointments in less than 2 minutes.

### Smart Reminders

Automatic email and SMS reminders help reduce no-shows and keep both clients and service providers on schedule.

### Calendar Integration

Seamlessly integrates with popular calendar services like Google Calendar, Outlook, and Apple Calendar.

## 🔒 Environment Variables

Create a `.env` file in the root directory to configure environment-specific variables:

```
VITE_API_URL=your_api_url_here
VITE_DEBUG_MODE=false
```

## 📄 Documentation

For more detailed information, check out the [full documentation](DOCUMENTATION.md).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Lucide Icons](https://lucide.dev/)
