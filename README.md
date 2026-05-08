# 🧪 Truth Lab - Media Literacy Educational Platform

<div align="center">
  <img src="https://github.com/obadadallo95/truthlab-kids/blob/main/public/assets/truthlab-logo.svg" alt="Truth Lab Logo" width="200" height="200">
</div>

## 🌟 Overview

Truth Lab is an interactive multilingual educational platform designed to empower youth with information verification skills and media literacy in the digital age. The platform uses advanced technologies including artificial intelligence and intelligent analytics to provide a comprehensive and effective educational experience.

## 🎯 Main Objectives

- **Empower Youth**: Equip the next generation with critical thinking and information verification skills
- **Interactive Learning**: Deliver interactive educational content suitable for all ages
- **Multilingual Support**: Support four major languages (Arabic, English, German, Korean)
- **Educational Standards**: Commit to the highest quality standards in educational content

## 🏗️ Project Structure

```
truthlab-kids/
├── src/
│   ├── app/[locale]/          # Next.js pages
│   ├── components/            # React components
│   ├── messages/             # Translation files
│   ├── store/                # Zustand state management
│   └── i18n/                 # Internationalization settings
├── docs/                     # Documentation files
├── public/                   # Public files
└── README.md                 # Main file
```

## 🛠️ Technologies Used

- **Next.js 16.2.4** - React framework
- **TypeScript** - Type-safe programming
- **Tailwind CSS** - Design framework
- **next-intl** - Translation and i18n management
- **Zustand** - State management
- **Framer Motion** - Animations

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Installation & Setup

```bash
# Clone the project
git clone <repository-url>
cd truthlab-kids

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser at
http://localhost:3001
```

### Build & Deploy Commands

```bash
# Build for production
npm run build

# Run production version
npm run start

# Lint code
npm run lint
```

## 🌍 Multilingual Support

The project fully supports four languages:
- **Arabic (ar)** - Right-to-left direction
- **English (en)** - Default language
- **German (de)** - Left-to-right direction
- **Korean (ko)** - Left-to-right direction

## 📱 Main Features

- **Age Selection**: Choose appropriate learning paths for different age groups (6-9, 10-13, 14-17)
- **Learning Path**: Interactive modules with progress tracking
- **Truth Lab**: Advanced verification tools for images, sources, and metadata
- **Spread Simulator**: Understand how information spreads through networks
- **Facilitator Dashboard**: Tools for teachers and facilitators

## 📚 Documentation

- **[Arabic Documentation](./docs/README_AR.md)** - الدليل الكامل باللغة العربية
- **[English Documentation](./docs/README_EN.md)** - Complete guide in English
- **[German Documentation](./docs/README_DE.md)** - Vollständige Anleitung auf Deutsch
- **[Korean Documentation](./docs/README_KO.md)** - 한국어 완전 가이드
- **[Developer Guide](./docs/DEVELOPER_GUIDE_AR.md)** - دليل المطور
- **[Coding Standards](./docs/CODING_STANDARDS_AR.md)** - معايير الترميز

## 🎨 Pages & Components

### Main Pages
- **Home** (`/`) - Platform overview and language selection
- **Age Selection** (`/age-selection`) - Choose age-appropriate content
- **Learning Path** (`/path`) - Educational modules and progress
- **Truth Lab** (`/truth-lab`) - Verification tools and analysis
- **Spread Simulator** (`/spread-simulator`) - Information spread simulation
- **Facilitator** (`/facilitator`) - Teacher dashboard

### Key Components
- `ProfessionalPath` - Learning path interface
- `ProfessionalTruthLab` - Investigation tools
- `ProfessionalAgeSelection` - Age group selection
- UI Components - Reusable design system

## 🔧 Development

### Adding New Content
1. Add translations to all language files in `src/messages/`
2. Create components following TypeScript standards
3. Use responsive design with Tailwind CSS
4. Test across all supported languages

### Code Standards
- Use TypeScript for all new components
- Follow naming conventions (PascalCase for components, camelCase for variables)
- Implement proper error handling
- Include comprehensive documentation
- Test on multiple devices and browsers

## 🌟 Key Features

### 🎯 Age-Appropriate Learning
- **6-9 years**: Basic concepts and visual literacy
- **10-13 years**: Critical thinking and source analysis
- **14-17 years**: Advanced AI concepts and evidence standards

### 🔍 Investigation Tools
- **Image Analysis**: AI-powered image verification
- **Source Investigation**: Multi-platform source tracking
- **Metadata Analysis**: Detailed file examination

### 📊 Progress Tracking
- Module completion tracking
- Achievement system
- Performance analytics
- Learning time statistics

## 🤝 Contributing

1. Fork the project
2. Create new branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push branch (`git push origin feature/amazing-feature`)
5. Create Pull Request

## 📄 License

This project is licensed under [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Development Team**: All developers who contributed to this project
- **Users**: Youth and teachers who benefit from the platform
- **Supporters**: Organizations that supported this project

---

**Truth Lab** - Building a more aware and discerning future 🌟

For detailed documentation in your preferred language, check the `docs/` directory.
