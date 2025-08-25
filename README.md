# Bahaa Youssof - Portfolio Website

A modern, responsive portfolio website built with React.js showcasing my skills, experience, and projects as a Software Engineer.

## 🌟 Live Demo

**[View Live Portfolio](https://bahaayoussof.vercel.app/)**

## ✨ Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Toggle between dark and light themes
- **Smooth Animations**: Built with Framer Motion for engaging user experience
- **Performance Optimized**: Lazy loading and optimized assets for fast loading
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **Contact Form**: Integrated contact form with EmailJS
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Technologies Used

- **Frontend**: React.js 18.3.1
- **Styling**: SCSS/Sass
- **Animations**: Framer Motion
- **Icons**: Tabler Icons React
- **Notifications**: React Hot Toast
- **Email Service**: EmailJS
- **Build Tool**: Create React App
- **Deployment**: Vercel

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── NavigationDots.jsx
│   │   ├── SocialMedia.jsx
│   │   └── ToggleTheme.jsx
│   ├── container/
│   │   ├── Header/
│   │   ├── About/
│   │   ├── Work/
│   │   ├── Experience/
│   │   └── Footer/
│   ├── assets/
│   ├── constants/
│   ├── context/
│   ├── wrapper/
│   ├── App.js
│   └── index.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/bahaayoussof/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 📱 Sections

### Header

- Hero section with animated text
- Social media links
- Call-to-action buttons (Resume download, Contact)

### About

- Personal introduction
- Key highlights and skills
- Professional summary

### Experience

- Work history with detailed descriptions
- Achievements and responsibilities
- Technologies used in each role

### Work

- Portfolio projects showcase
- Project descriptions and technologies
- Live demo and GitHub links

### Contact

- Contact form with EmailJS integration
- Social media links
- Professional information

## 🎨 Customization

### Theme Configuration

The app uses a theme context for dark/light mode. You can customize colors in:

- `src/context/theme.js`
- `src/App.scss`

### Content Updates

- Update personal information in `src/data.js`
- Modify project images in `src/assets/`
- Update constants in `src/constants/`

### Styling

- Main styles: `src/App.scss`
- Component-specific styles in respective `.scss` files
- Global styles: `src/index.css`

## 🔧 Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service
3. Update the EmailJS configuration in your contact form component

### Deployment

The project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the React app
3. Deploy with default settings

---

⭐ If you found this portfolio helpful, please give it a star!
