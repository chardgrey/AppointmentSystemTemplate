# Appointment Pro Frontend Documentation

This documentation provides an overview of the Appointment Pro frontend application, describing the project structure, key components, and how they work together.

## Project Overview

Appointment Pro is a modern appointment scheduling application built with React and Vite. It features a responsive design, smooth animations, and an intuitive user interface for booking appointments effortlessly.

## Tech Stack

- **React 19** - JavaScript library for building user interfaces
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Three.js & React Three Fiber** - For advanced UI effects like the silk background
- **AOS** - Animate On Scroll library for scroll animations
- **Lucide React** - Icon library

## Project Structure

```
src/
├── App.jsx             # Main application component
├── App.css             # Global CSS and custom utilities
├── main.jsx            # Entry point
├── index.css           # CSS imports and variables
├── components/         # React components organized by purpose
│   ├── landing/        # Landing page sections
│   ├── layout/         # Layout components (header, footer)
│   ├── pages/          # Page components
│   └── ui/             # Reusable UI components
└── hooks/              # Custom React hooks
```

## Key Components

### Landing Page Components

#### Hero.jsx

The main hero section displayed when users first visit the site.

**Key Features:**

- Eye-catching gradient background with SilkBackground effect
- Responsive content layout that adapts to mobile and desktop views
- Feature card with animated icons showcasing key benefits
- Call-to-action buttons for booking appointments
- Image preloading for optimal performance

#### Features.jsx

Displays the key features of the appointment scheduling system.

**Key Features:**

- Grid layout of feature cards with icons
- Responsive design adjusting columns based on screen size
- Intersection Observer implementation for scrolling animations
- Visual indicators with color-coded icons

#### BookingSection.jsx

Call-to-action section encouraging users to book an appointment.

**Key Features:**

- SilkBackground effect for dynamic visual appeal
- Statistics display with animated counters
- Benefits list with numbered steps
- Prominent call-to-action button

#### Testimonials.jsx

Showcases customer testimonials to build trust.

**Key Features:**

- Desktop grid view of all testimonials
- Mobile carousel with auto-sliding functionality
- Manual navigation controls
- Rating system display

#### AboutUs.jsx

Company information and team presentation section.

**Key Features:**

- Company story with visual imagery
- Core values display with SpotlightCard component
- Team member carousel for mobile devices
- Fanned-out team cards for desktop view

### Layout Components

#### Header.jsx

Navigation header with responsive mobile menu.

**Key Features:**

- Fixed position header with background change on scroll
- Mobile hamburger menu with slide-in navigation
- Desktop horizontal navigation
- Company logo and CTA buttons

#### Footer.jsx

Page footer with links and company information.

**Key Features:**

- Responsive grid layout
- Social media links
- Organized link sections
- Copyright information

### UI Components

#### Loader.jsx

Loading screen displayed while the application initializes.

**Key Features:**

- Full-screen overlay with SilkBackground
- Centered loading indicator
- Accessibility attributes for screen readers

#### Silk.jsx

Three.js powered animated background shader.

**Key Features:**

- WebGL shader implementation
- Configurable parameters for color, speed, and noise
- Performance optimized rendering

#### TeamCard.jsx

Card component for displaying team member information.

**Key Features:**

- Interactive hover effects showing additional information
- Mobile-specific tap interaction
- Social media links for team members

## Hooks

### useInView.js

Custom hook for detecting when elements enter the viewport.

**Key Features:**

- Uses Intersection Observer API
- Configurable threshold and root margin
- Optional "once" parameter to trigger only once

## Getting Started

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

### Building for Production

To build the application for production:

```
npm run build
```

The built files will be in the `dist` directory.

## Performance Optimizations

The application includes several performance optimizations:

- Lazy loading of page components
- Image preloading for critical assets
- Efficient animation handling with AOS
- Mobile-specific optimizations for responsive design
- Three.js rendering optimizations

## Accessibility Features

- Semantic HTML structure
- ARIA attributes on interactive elements
- Focus management for navigation
- Screen reader friendly loading states
- Color contrast compliance

## Browser Compatibility

The application is designed to work on modern browsers including:

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
