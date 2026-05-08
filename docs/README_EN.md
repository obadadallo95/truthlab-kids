# 🧪 Truth Lab - Media Literacy Educational Platform

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
│   ├── app/                    # Next.js pages
│   │   ├── [locale]/          # Multilingual pages
│   │   │   ├── page.tsx       # Home page
│   │   │   ├── age-selection/  # Age selection
│   │   │   ├── path/           # Learning path
│   │   │   ├── truth-lab/      # Truth lab
│   │   │   └── spread-simulator/ # Spread simulator
│   ├── components/            # React components
│   │   ├── ui/               # UI components
│   │   ├── ProfessionalPath.tsx
│   │   ├── ProfessionalTruthLab.tsx
│   │   └── ProfessionalAgeSelection.tsx
│   ├── messages/             # Translation files
│   │   ├── ar.json           # Arabic
│   │   ├── en.json           # English
│   │   ├── de.json           # German
│   │   └── ko.json           # Korean
│   ├── store/                # Zustand state management
│   └── i18n/                 # Internationalization settings
├── docs/                     # Documentation files
├── public/                   # Public files
└── README.md                 # Main file
```

## 🛠️ Technologies Used

### Frontend
- **Next.js 16.2.4** - React framework
- **TypeScript** - Type-safe programming
- **Tailwind CSS** - Design framework
- **Framer Motion** - Animations
- **Lucide React** - Icons

### Internationalization & Localization
- **next-intl** - Translation and i18n management
- **i18n routing** - Multilingual routing

### State Management
- **Zustand** - Lightweight state management

### Fonts
- **Lexend** - Primary font for English
- **Noto Sans Arabic** - Arabic language support
- **Noto Sans KR** - Korean language support

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
# or
yarn install

# Run development server
npm run dev
# or
yarn dev

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

## 🌍 Internationalization & Localization

The project fully supports four languages:

### Supported Languages
1. **Arabic (ar)** - Right-to-left direction
2. **English (en)** - Default language
3. **German (de)** - Left-to-right direction
4. **Korean (ko)** - Left-to-right direction

### Translation Structure
```
src/messages/
├── ar.json    # Arabic translations
├── en.json    # English translations
├── de.json    # German translations
└── ko.json    # Korean translations
```

### Adding New Translation
1. Add new translation file in `src/messages/`
2. Specify language in `src/i18n/routing.ts`
3. Add appropriate fonts in `src/app/[locale]/layout.tsx`

## 🎨 Coding Standards

### Component Structure
```typescript
// Example professional component
interface ComponentProps {
  translations: {
    title: string;
    subtitle: string;
    // ... other translation keys
  };
}

export function Component({ translations }: ComponentProps) {
  // Use translations
  return (
    <div>
      <h1>{translations.title}</h1>
      <p>{translations.subtitle}</p>
    </div>
  );
}
```

### Naming Conventions
- **Components**: PascalCase (e.g., `ProfessionalPath`)
- **Files**: kebab-case (e.g., `professional-path.tsx`)
- **Variables**: camelCase (e.g., `userName`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)

### Best Practices
1. **Use TypeScript** for all new components
2. **Complete translation** for all user-facing text
3. **Responsive design** for different screen sizes
4. **SEO optimization** for search engines
5. **Testing** for major components

## 📱 Main Pages & Components

### 1. Home Page (`/`)
- Platform overview
- Language selection
- Main features preview

### 2. Age Selection (`/age-selection`)
- Choose appropriate age group
- Display age-appropriate content
- Guide user to learning path

### 3. Learning Path (`/path`)
- Display educational modules
- Progress tracking
- Achievements and challenges

### 4. Truth Lab (`/truth-lab`)
- Image verification tools
- Source investigation
- Metadata analysis

### 5. Spread Simulator (`/spread-simulator`)
- Information spread simulation
- Social network analysis
- Understanding viral content dynamics

## 🔧 Development & Maintenance

### Adding New Page
1. Create new folder in `src/app/[locale]/`
2. Add `page.tsx` with appropriate content
3. Add translations in language files
4. Update navigation if needed

### Adding New Component
1. Create component file in `src/components/`
2. Use TypeScript for definitions
3. Add necessary translations
4. Follow coding standards

### Adding New Translation
1. Edit `src/i18n/routing.ts`
2. Add language file in `src/messages/`
3. Update `src/app/[locale]/layout.tsx`
4. Test new translation

## 📊 Data Structure & Storage

### State Management
```typescript
// Example Zustand store
import { create } from 'zustand';

interface AppState {
  ageGroup: string;
  setAgeGroup: (group: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  ageGroup: '10-13',
  setAgeGroup: (group) => set({ ageGroup: group }),
}));
```

### Translation Structure
```json
{
  "Common": {
    "title": "Truth Lab",
    "nav": [
      { "label": "Facilitator Dashboard", "href": "/facilitator" },
      { "label": "Spread Simulator", "href": "/spread-simulator" }
    ]
  },
  "PageName": {
    "title": "Page Title",
    "subtitle": "Page Description"
  }
}
```

## 🎯 Performance & Optimization

### Image Optimization
- Use modern WebP formats
- Lazy loading images
- Compress images for mobile devices

### Performance Optimization
- Code splitting
- Preload important pages
- Optimize First Contentful Paint (FCP)

### SEO Optimization
- Use appropriate meta tags
- Optimize page titles
- Use structured data

## 🧪 Testing & Quality

### Test Types
- **Unit Tests**: For components and functions
- **Integration Tests**: For component flows
- **E2E Tests**: For complete user journeys

### Testing Tools
- Jest for unit tests
- React Testing Library for component tests
- Playwright for E2E tests

## 🚀 Deployment & Operations

### Supported Environments
- **Development**: `npm run dev`
- **Production**: `npm run build && npm start`
- **Analysis**: `npm run analyze`

### Deployment Platforms
- Vercel (recommended for Next.js)
- Netlify
- Docker
- AWS Amplify

## 📞 Support & Help

### Additional Documentation
- [Developer Guide](./DEVELOPER_GUIDE_EN.md)
- [API Reference](./API_REFERENCE_EN.md)
- [Best Practices](./BEST_PRACTICES_EN.md)

### Common Issues
- [Troubleshooting](./TROUBLESHOOTING_EN.md)
- [FAQ](./FAQ_EN.md)

### Contributing to Project
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
