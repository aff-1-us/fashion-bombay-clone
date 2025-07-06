# Fashion Bombay Clone

A pixel-perfect clone of the Fashion Bombay website built with modern web technologies. This project demonstrates advanced UI cloning skills and modern React development practices.

![Fashion Bombay Clone](https://same-lopzw4wdkck-latest.netlify.app)

## 🚀 Live Demo

- **Live Website**: [https://same-lopzw4wdkck-latest.netlify.app](https://same-lopzw4wdkck-latest.netlify.app)
- **Original Website**: [https://www.fashion-bombay.com](https://www.fashion-bombay.com)

## ✨ Features

- 🎨 **Pixel-Perfect Design** - Exact replica of the original Fashion Bombay website
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Modern Tech Stack** - Built with Next.js 15, TypeScript, and Tailwind CSS
- 🎯 **Component-Based** - Using shadcn/ui for consistent, accessible components
- 🖼️ **Image Optimization** - Optimized images with Next.js Image component
- 🔍 **SEO Friendly** - Proper meta tags and semantic HTML structure
- 🎨 **Custom Styling** - Tailwind CSS for rapid UI development
- 📊 **Recent Content** - All articles updated with recent dates (Dec 2024 - Apr 2025)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Netlify
- **Package Manager**: Bun

## 📋 Project Structure

```
fashion-bombay-clone/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── lib/
│       └── utils.ts
├── public/
├── components.json
├── tailwind.config.ts
├── next.config.js
├── package.json
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aff-1-us/fashion-bombay-clone.git
   cd fashion-bombay-clone
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   bun dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design Features

### Header Section
- Top navigation bar with date and utility links
- Colorful Fashion Bombay logo
- Main navigation menu with hover effects
- Search functionality

### Featured Articles
- Three-column grid layout
- Image overlays with gradient effects
- Category badges (Fashion, Hair Care, etc.)
- Hover animations and transitions

### Content Sections
- **Fashion**: Large featured article + grid layout
- **Hair Care**: Two-column article display
- **Lifestyle**: Three-column responsive grid
- Pagination component

### Sidebar
- Recent Posts with thumbnail images
- Hover effects and interactive elements

### Footer
- Three-column layout
- Brand information and contact details
- Popular posts and categories
- Social links and legal pages

## 📱 Responsive Design

- **Desktop**: Full multi-column layout
- **Tablet**: Adapted grid systems
- **Mobile**: Single-column stacked layout
- **Images**: Responsive with proper aspect ratios

## 🎯 Key Components

- **Article Cards**: Reusable components with image, title, metadata
- **Category Badges**: Color-coded tags for different content types
- **Navigation Menu**: Responsive navigation with active states
- **Pagination**: Interactive page navigation
- **Sidebar Widgets**: Recent posts and popular content

## 🚀 Deployment

The project is configured for easy deployment on Netlify:

1. **Netlify Configuration** (`netlify.toml` included)
2. **Build Command**: `bun run build`
3. **Environment Variables**: None required for basic functionality

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/aff-1-us/fashion-bombay-clone)

## 🔧 Development

### Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint

### Adding Components

This project uses shadcn/ui. To add new components:

```bash
bunx shadcn@latest add [component-name]
```

## 📝 Content Updates

All article dates have been updated to reflect recent months (December 2024 - April 2025) to maintain content freshness and relevance.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for educational and demonstration purposes only. All design rights belong to the original Fashion Bombay website.

## 🙏 Acknowledgments

- Original design inspiration from [Fashion Bombay](https://www.fashion-bombay.com)
- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

## 📞 Contact

For questions or feedback about this clone project, please open an issue in this repository.

---

**Note**: This is a clone project created for educational purposes. All content and design rights belong to their respective owners.
