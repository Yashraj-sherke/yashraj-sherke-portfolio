# 🚀 Yashraj Sherke - Full-Stack Developer Portfolio

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**A premium, award-worthy portfolio showcasing cutting-edge web development with stunning 3D visuals and smooth animations.**

[Live Demo](#) • [Report Bug](https://github.com/Yashraj-sherke/portfolio/issues) • [Request Feature](https://github.com/Yashraj-sherke/portfolio/issues)

</div>

---

## 📸 Screenshots

### 🏠 Hero Section
<!-- Add screenshot here: Take a screenshot of the hero section and save it as screenshots/hero.png -->
![Hero Section](./screenshots/hero.png)
*Landing page with animated 3D background and introduction*

### 👤 About Section
<!-- Add screenshot here: Take a screenshot of the about section and save it as screenshots/about.png -->
![About Section](./screenshots/about.png)
*Professional profile with skills and social links*

### 💼 Projects Section
<!-- Add screenshot here: Take a screenshot of the projects section and save it as screenshots/projects.png -->
![Projects Section](./screenshots/projects.png)
*Showcase of featured projects with live demos and GitHub links*

### 🎓 Experience Section
<!-- Add screenshot here: Take a screenshot of the experience section and save it as screenshots/experience.png -->
![Experience Section](./screenshots/experience.png)
*Professional experience and achievements*

### 📧 Contact Section
<!-- Add screenshot here: Take a screenshot of the contact section and save it as screenshots/contact.png -->
![Contact Section](./screenshots/contact.png)
*Get in touch form with social media links*

---

## ✨ Features

### 🎨 **Premium Design**
- **Luxury Dark Theme** - Sophisticated color palette with `#0b0b0b` background and `#f5f5f5` accents
- **Glassmorphism Effects** - Modern glass-like UI components with backdrop blur
- **Smooth Animations** - Powered by Framer Motion for buttery-smooth transitions
- **3D Background Scene** - Interactive Three.js/React Three Fiber 3D environment
- **Responsive Design** - Fully optimized for all devices (mobile, tablet, desktop)

### 🛠️ **Technical Highlights**
- **Modern Tech Stack** - React 18, TypeScript, Vite for blazing-fast performance
- **Advanced Animations** - GSAP ScrollTrigger for scroll-based animations
- **Component Architecture** - Clean, reusable component structure
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Performance Optimized** - Lazy loading, code splitting, and optimized assets

### 📱 **Sections**
1. **Hero** - Eye-catching introduction with animated text and CTA buttons
2. **About** - Professional profile with skills, experience, and social links
3. **Services** - Overview of development services offered
4. **Projects** - Featured projects with live demos and GitHub repositories
5. **Experience** - Work experience and professional journey
6. **Integration** - Technology stack and tools
7. **Testimonials** - Client feedback and recommendations
8. **Contact** - Contact form and social media links
9. **Outro** - Final call-to-action section

---

## 🏗️ Project Structure

```
Portfolio-main/
├── src/
│   ├── components/
│   │   ├── 3d/              # Three.js 3D components
│   │   │   └── Scene3D.tsx
│   │   ├── layout/          # Layout components
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/        # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Integration.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Outro.tsx
│   │   └── ui/              # Reusable UI components
│   │       ├── GlowButton.tsx
│   │       └── SectionTitle.tsx
│   ├── assets/              # Images and static files
│   │   ├── profile.png
│   │   ├── bitbuds.png
│   │   ├── payease.png
│   │   ├── hiresphere.png
│   │   └── certificates/
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Public assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

---

## 🚀 Tech Stack

### **Frontend Framework**
- **React 18.3.1** - Modern UI library with hooks and concurrent features
- **TypeScript 5.5.3** - Type-safe JavaScript for better developer experience
- **Vite 5.4.2** - Next-generation frontend tooling for fast builds

### **Styling**
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Custom Design System** - Luxury color palette and typography
  - Colors: `luxury-black`, `luxury-charcoal`, `luxury-gray`, `luxury-white`
  - Fonts: Nunito (body), Oswald (headings)

### **Animation Libraries**
- **Framer Motion 12.29.2** - Production-ready motion library for React
- **GSAP 3.14.2** - Professional-grade animation platform
- **ScrollTrigger** - Scroll-based animations

### **3D Graphics**
- **Three.js 0.182.0** - JavaScript 3D library
- **React Three Fiber 8.16.0** - React renderer for Three.js
- **React Three Drei 9.0.0** - Useful helpers for React Three Fiber
- **Simplex Noise 4.0.3** - Noise generation for 3D effects

### **Icons**
- **Lucide React 0.344.0** - Beautiful & consistent icon toolkit

### **Development Tools**
- **ESLint** - Code linting and quality
- **PostCSS** - CSS transformations
- **Autoprefixer** - Automatic vendor prefixes

---

## 📦 Installation & Setup

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Yashraj-sherke/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:5173/`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 🎯 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🎨 Design System

### Color Palette
```css
--luxury-black: #0b0b0b;      /* Primary background */
--luxury-charcoal: #121212;   /* Secondary background */
--luxury-gray: #a6a6a6;       /* Text and accents */
--luxury-white: #f5f5f5;      /* Primary text */
```

### Typography
- **Headings**: Oswald (400, 500, 600, 700)
- **Body**: Nunito (300, 400, 500, 600, 700, 800)

### Animations
- **Float**: Smooth floating effect (6s loop)
- **Glow**: Pulsing glow effect (2s alternate)
- **Fade In**: Entrance animation (0.8s)
- **Slide Up**: Upward slide animation (0.8s)

---

## 🌟 Key Features Breakdown

### 1. **Loading Screen**
- Animated "YS" logo with expanding line
- Smooth fade-out transition
- 2-second duration for optimal UX

### 2. **3D Background Scene**
- Interactive particle system
- Responsive to viewport size
- Optimized performance with WebGL

### 3. **Navigation**
- Sticky header with blur effect
- Smooth scroll to sections
- Resume download link
- Social media icons

### 4. **Hero Section**
- Large typography with gradient effects
- Vertical text decorations
- Dual CTA buttons (View Projects, Contact Me)
- Animated scroll indicator

### 5. **About Section**
- Professional profile image with grayscale filter
- Detailed bio and information
- Skill cards grid (6 categories)
- Social media links (GitHub, LinkedIn, LeetCode, Portfolio)

### 6. **Projects Section**
- Grid layout (responsive: 1/2/3 columns)
- Project cards with:
  - Featured images
  - Technology tags
  - Live demo links
  - GitHub repository links
- Hover effects with scale and glow

### 7. **Contact Section**
- Contact form with validation
- Direct email integration
- Social media links
- Professional contact information

---

## 📱 Responsive Design

The portfolio is fully responsive across all devices:

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 640px | Single column, stacked sections |
| Tablet | 640px - 1024px | 2-column grid for projects |
| Desktop | > 1024px | 3-column grid, full layout |
| Large Desktop | > 1280px | Optimized spacing and typography |

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Deploy!

### Deploy to Netlify
1. Push your code to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Configure build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. Deploy!

### Deploy to Render
1. Create a new Static Site on [Render](https://render.com)
2. Connect your GitHub repository
3. Configure:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. Deploy!

---

## 🎓 Featured Projects

### 1. **BitBuds**
A kids coding platform designed to make learning programming fun and interactive.
- **Tech Stack**: React, Node.js, MongoDB, Express
- **GitHub**: [View Repository](https://github.com/Yashraj-sherke/BitBuds)

### 2. **PayEase**
Secure MERN-based payment system with authentication and transaction processing.
- **Tech Stack**: React, Node.js, MongoDB, Express, JWT
- **GitHub**: [View Repository](https://github.com/Yashraj-sherke/PayEase)

### 3. **HireSphere**
Full-stack recruitment platform for job postings and application management.
- **Tech Stack**: React, Node.js, MongoDB, Express, REST API
- **GitHub**: [View Repository](https://github.com/Yashraj-sherke/Hire-Sphere)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Yashraj Sherke**

- 🌐 Portfolio: [yashraj-sherke.github.io](https://yashraj-sherke.github.io/yashraj-sherke-portfolio/)
- 💼 LinkedIn: [@yashraj-sherke](https://www.linkedin.com/in/yashraj-sherke)
- 🐙 GitHub: [@Yashraj-sherke](https://github.com/Yashraj-sherke)
- 💻 LeetCode: [@yashrajsherke19](https://leetcode.com/u/yashrajsherke19)

---

## 🙏 Acknowledgments

- **Google Fonts** - Nunito and Oswald typefaces
- **Lucide Icons** - Beautiful icon set
- **Three.js Community** - 3D graphics inspiration
- **Framer Motion** - Smooth animation library
- **Tailwind CSS** - Utility-first CSS framework

---

## 📞 Contact

Feel free to reach out for collaborations, opportunities, or just to say hi!

- 📧 Email: yashrajsherke@example.com
- 💬 Open for: Internships, Freelance Projects, Collaborations

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

**Made with ❤️ by Yashraj Sherke**

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=Yashraj-sherke.portfolio)

</div>
