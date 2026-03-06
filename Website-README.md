# VVR Rice (India) - Premium Rice Mill Website

![VVR Rice Logo](src/assets/VVR-Logo.png)

> A modern, responsive digital showcase for **VVR Rice (India)** — bringing tradition and technology together since 1960.

---

## 📋 Project Overview

This repository contains the **official website** for VVR Rice (India), a premium rice mill with over 60 years of heritage. The website showcases our product portfolio, heritage story, major clients, and serves as a digital touchpoint for business inquiries and customer engagement.

**Live Website:** [VVR Rice Official Website](https://vvr-rice.com)  
**Company Repository:** [VVR Rice Organization](https://github.com/Shyamanth-3/VVR_Rice)

---

## ✨ Key Features

- **Responsive Design**: Seamlessly adapts from mobile to desktop devices
- **Performance Optimized**: Built with Vite for lightning-fast page loads
- **Smooth Animations**: Enhanced UX with Framer Motion transitions
- **SEO Ready**: Structured data, meta tags, and Open Graph support
- **Accessibility Compliant**: WCAG standards for inclusive browsing
- **Contact Management**: Form submissions with server-side validation
- **Modern Tech Stack**: React 18, Tailwind CSS, and industry best practices

---

## 🏗️ Project Structure

```
Website/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Header.jsx       # Navigation and branding
│   │   ├── Footer.jsx       # Company info and links
│   │   └── Layout.jsx       # Common layout wrapper
│   ├── pages/               # Route-based pages
│   │   ├── Home.jsx         # Landing page
│   │   ├── About.jsx        # Company heritage and values
│   │   ├── Products.jsx     # Product portfolio
│   │   ├── Clients.jsx      # Notable clients and testimonials
│   │   └── Contact.jsx      # Contact form
│   ├── assets/              # Images and media files
│   │   ├── products/        # Product catalog images
│   │   └── clients/         # Client logos
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── server/                  # Backend API
│   ├── server.js            # Express server with contact endpoint
│   └── package.json         # Server dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json             # Frontend dependencies
```

---

## 🛠️ Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Frontend Framework** | React.js | 18.3.1 |
| **Styling** | Tailwind CSS | 3.4.10 |
| **Build Tool** | Vite | 5.4.1 |
| **Routing** | React Router DOM | 6.26.1 |
| **Animations** | Framer Motion | 11.3.28 |
| **Icons** | Lucide React | 0.427.0 |
| **Backend** | Express.js | Latest |
| **CORS** | CORS Middleware | Latest |

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:Shyamanth-3/VVR_Rice.git
   cd VVR_Rice/Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables** (optional for development)
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   # Frontend runs on http://localhost:5173
   ```

5. **Start the backend server** (in another terminal)
   ```bash
   cd server
   npm install
   npm start
   # Server runs on http://localhost:3001
   ```

### Development Paths
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001
- **Contact API**: POST `http://localhost:3001/api/contact`

---

## 📦 Build for Production

### Frontend Build
```bash
npm run build
# Creates optimized production build in 'dist/' folder
```

### Preview Production Build
```bash
npm run preview
```

### Full Deployment
- The `dist/` folder is ready for deployment to Vercel, Netlify, or any static host
- Environment variables should be configured in your hosting platform
- Backend can be deployed to Node.js hosting (Heroku, Railway, etc.)

---

## 🔒 Security & Privacy

### Important Notes
- **Customer Data**: Contact form submissions contain personal information and are stored locally
- **Assets**: The `Assets/` folder contains company branding and is excluded from public distribution
- **Environment Variables**: Never commit `.env` files containing credentials or API keys
- **Production Data**: Ensure proper data handling and privacy compliance (GDPR, local regulations)

### Environment Variables Setup
Create a `.env.local` file in the Website folder:
```env
VITE_API_URL=http://localhost:3001
VITE_API_TIMEOUT=5000
```

---

## 📝 Code Quality

### Linting
```bash
npm run lint
```

Ensures code follows ESLint standards for React applications.

---

## 🤝 Contributing

This is a **company website** for VVR Rice (India). For contribution inquiries or updates to the website:

1. Create a feature branch
2. Make your changes
3. Ensure all checks pass (`npm run lint`)
4. Submit a pull request

---

## 📧 Contact & Support

**Website Inquiries**: Use the contact form on the website  
**Technical Issues**: [Create an issue](https://github.com/Shyamanth-3/VVR_Rice/issues)  
**Company Website**: [vvr-rice.com](https://vvr-rice.com)

---

## ⚖️ License & Copyright

© 2024 **VVR Rice (India)** — All Rights Reserved

This repository contains proprietary source code and branding materials for VVR Rice (India). Unauthorized reproduction, distribution, or modification is prohibited.

---

## 📚 Additional Resources

- **VVR Rice Heritage**: Established in 1960, serving Andhra Pradesh and Telangana
- **4th Generation Family Business**: Combining tradition with modern rice milling technology
- **Quality Assurance**: Fully automated rice mill with premium processing standards

---

**Last Updated**: March 2026  
**Maintained By**: [Nadella Shyamanth](https://github.com/Shyamanth-3)

---

**VVR Rice (India) - Crafted with Tradition, Packed with Care since 1960** 🌾