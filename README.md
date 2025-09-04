# 📖 Portfolio Book

An interactive, 3D book-style portfolio website showcasing Md Obaidullah Bin Taher's (Sameer) journey as a Computer Vision & Full-Stack Developer. The portfolio is designed as a beautifully crafted digital book with animated page turns, realistic 3D effects, and a premium user experience.

## 🌐 Live Demo

**[📖 View Live Portfolio](https://sam-port-book.vercel.app/)**

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.5.2-black) ![React](https://img.shields.io/badge/React-19.1.0-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-teal) ![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000)

## ✨ Features

### 🎨 Design & Aesthetics

- **3D Leather Book Design**: Realistic leather spine, parchment pages, and multi-layer shadows
- **Premium Color Palette**: Forest Green & Gold theme with elegant gradients
- **Responsive Layout**: Optimized for desktop and mobile devices
- **Smooth Animations**: Page-turning effects and transitions
- **Custom Scrollbars**: Styled scrollbars for content areas

### 📚 Interactive Book Experience

- **8 Chapters**: Cover, Introduction, About, Education, Skills, Projects, Experience, Certificates, Contact
- **Page Navigation**: Vertical dot navigation on the right side
- **Realistic Page Turns**: Smooth animated transitions between pages
- **Fixed Headers/Footers**: Chapter numbers and page indicators
- **Content Scrolling**: Vertical scrollbars within each page

### 💼 Content Sections

1. **Cover Page**: Elegant book cover with title, author, and "Open Portfolio" button
2. **Introduction**: Welcome message with call-to-action buttons
3. **About**: Personal introduction, mission statement, and background
4. **Education**: Academic journey from primary school to master's degree
5. **Skills**: Technical skills, programming languages, and research focus
6. **Projects**: Featured projects with descriptions and technologies
7. **Experience**: Professional experience and achievements
8. **Certificates**: Awards, competitions, and recognitions
9. **Contact**: Contact information and collaboration opportunities

## 🛠️ Technologies Used

- **Framework**: [Next.js 15.5.2](https://nextjs.org/) with App Router
- **Frontend**: [React 19.1.0](https://reactjs.org/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Development**: Turbopack for faster builds
- **Icons**: Custom SVG icons and emoji
- **Fonts**: Serif typography for premium look

## 📁 Project Structure

```
port-book/
├── src/
│   ├── app/
│   │   ├── layout.js              # Root layout component
│   │   ├── page.js                # Book cover page
│   │   ├── globals.css            # Global styles & custom scrollbars
│   │   ├── introduction/page.js   # Introduction chapter
│   │   ├── about/page.js          # About chapter
│   │   ├── education/page.js      # Education chapter
│   │   ├── skills/page.js         # Skills chapter
│   │   ├── projects/page.js       # Projects chapter
│   │   ├── experience/page.js     # Experience chapter
│   │   ├── certificates/page.js   # Certificates chapter
│   │   └── contact/page.js        # Contact chapter
│   └── components/
│       ├── BookLayout.js          # Main book layout wrapper
│       ├── BookNavigation.js      # Navigation component
│       └── PageTransition.js      # Page transition animations
├── public/
│   ├── resume.pdf                 # Resume file
│   └── *.svg                      # Icon assets
├── package.json                   # Dependencies & scripts
└── README.md                      # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd port-book
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📖 Usage

### Navigation

- **Book Cover**: Click "Open Portfolio" to begin
- **Page Navigation**: Use the vertical dots on the right side to navigate between chapters
- **Content Scrolling**: Scroll within each page to view full content
- **Smooth Transitions**: Enjoy animated page turns between sections

### Content Overview

The portfolio showcases:

- **Academic Excellence**: From primary education to Master's in Computer Science
- **Technical Expertise**: Python, C++, JavaScript, MERN Stack, Computer Vision
- **Research Focus**: AI, Machine Learning, Contrastive Learning
- **Professional Experience**: Research, management, and leadership roles
- **Project Portfolio**: Color Picker tool, To-Do app, Document Scanner, Sam Motors
- **Achievements**: CSC Scholarship, AI Competition winner, leadership awards

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

### Customization

#### Changing Content

1. Edit the respective page files in `src/app/` directory
2. Update personal information, projects, and experiences
3. Modify the navigation in `src/components/BookNavigation.js` if adding new pages

#### Styling Customization

1. Modify color palette in component files (currently Forest Green & Gold)
2. Adjust animations in `src/components/PageTransition.js`
3. Update layout dimensions in `src/components/BookLayout.js`

#### Adding New Pages

1. Create new directory in `src/app/`
2. Add `page.js` file with your content
3. Update the `pages` array in both `BookLayout.js` and `BookNavigation.js`
4. Ensure consistent styling with existing pages

## 🚀 Deployment

### 🌐 Live Deployment

**Current Live Version**: [https://sam-port-book.vercel.app/](https://sam-port-book.vercel.app/)

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

**✅ Successfully deployed on Vercel with automatic CI/CD**

### Other Platforms

The app can be deployed to any platform supporting Next.js:

- **Netlify**: Connect repository and deploy
- **Railway**: Use the Next.js template
- **AWS Amplify**: Import from GitHub
- **Docker**: Use the included Dockerfile (if available)

### Build for Production

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code structure and naming conventions
- Ensure responsive design for all new components
- Test animations and transitions on different devices
- Maintain the 3D book aesthetic and color scheme

## 📄 License

This project is private and proprietary. All rights reserved.

## 👨‍💻 Author

**Md Obaidullah Bin Taher (Sameer)**

- 🎓 Master's Student in Computer Science, Tiangong University, China
- 🏆 CSC Scholarship Recipient
- 🔬 Computer Vision & Full-Stack Developer
- 📧 sameerbintaher@gmail.com
- 🔗 [GitHub](https://github.com/sameerbintaher)
- 💼 [LinkedIn](https://linkedin.com/in/sameerbintaher)

## 🙏 Acknowledgments

- Inspired by innovative portfolio designs
- Built with modern web technologies
- Special thanks to the open-source community

---

**Ready to explore the portfolio?** 📖 Click "Open Portfolio" and start your journey through the chapters of innovation and excellence!
