# 🧪 Wahrheitslabor - Medienkompetenz-Bildungsplattform

## 🌟 Überblick

Das Wahrheitslabor ist eine interaktive mehrsprachige Bildungsplattform, die darauf ausgelegt ist, Jugendliche mit Fähigkeiten zur Informationsüberprüfung und Medienkompetenz im digitalen Zeitalter auszustatten. Die Plattform nutzt fortschrittliche Technologien einschließlich künstlicher Intelligenz und intelligenter Analysen, um eine umfassende und effektive Bildungserfahrung zu bieten.

## 🎯 Hauptziele

- **Jugendliche befähigen**: Die nächste Generation mit kritischem Denken und Informationsüberprüfungsfähigkeiten ausstatten
- **Interaktives Lernen**: Interaktive Bildungsinhalte für alle Altersgruppen bereitstellen
- **Mehrsprachige Unterstützung**: Vier Hauptsprachen unterstützen (Arabisch, Englisch, Deutsch, Koreanisch)
- **Bildungsstandards**: Sich an die höchsten Qualitätsstandards für Bildungsinhalte halten

## 🏗️ Projektstruktur

```
truthlab-kids/
├── src/
│   ├── app/                    # Next.js Seiten
│   │   ├── [locale]/          # Mehrsprachige Seiten
│   │   │   ├── page.tsx       # Startseite
│   │   │   ├── age-selection/  # Altersauswahl
│   │   │   ├── path/           # Lernpfad
│   │   │   ├── truth-lab/      # Wahrheitslabor
│   │   │   └── spread-simulator/ # Verbreitungs-Simulator
│   ├── components/            # React Komponenten
│   │   ├── ui/               # UI Komponenten
│   │   ├── ProfessionalPath.tsx
│   │   ├── ProfessionalTruthLab.tsx
│   │   └── ProfessionalAgeSelection.tsx
│   ├── messages/             # Übersetzungsdateien
│   │   ├── ar.json           # Arabisch
│   │   ├── en.json           # Englisch
│   │   ├── de.json           # Deutsch
│   │   └── ko.json           # Koreanisch
│   ├── store/                # Zustand State Management
│   └── i18n/                 # Internationalisierungseinstellungen
├── docs/                     # Dokumentationsdateien
├── public/                   # Öffentliche Dateien
└── README.md                 # Hauptdatei
```

## 🛠️ Verwendete Technologien

### Frontend
- **Next.js 16.2.4** - React Framework
- **TypeScript** - Typsichere Programmierung
- **Tailwind CSS** - Design-Framework
- **Framer Motion** - Animationen
- **Lucide React** - Icons

### Internationalisierung & Lokalisierung
- **next-intl** - Übersetzungs- und i18n-Management
- **i18n routing** - Mehrsprachiges Routing

### State Management
- **Zustand** - Leichtgewichtiges State Management

### Schriftarten
- **Lexend** - Primäre Schriftart für Englisch
- **Noto Sans Arabic** - Arabische Sprachunterstützung
- **Noto Sans KR** - Koreanische Sprachunterstützung

## 🚀 Schnellstart

### Voraussetzungen
- Node.js 18+ 
- npm oder yarn oder pnpm

### Installation & Einrichtung

```bash
# Projekt klonen
git clone <repository-url>
cd truthlab-kids

# Abhängigkeiten installieren
npm install
# oder
yarn install

# Entwicklungsserver starten
npm run dev
# oder
yarn dev

# Browser öffnen unter
http://localhost:3001
```

### Build & Deploy Befehle

```bash
# Für Produktion bauen
npm run build

# Produktionsversion starten
npm run start

# Code linten
npm run lint
```

## 🌍 Internationalisierung & Lokalisierung

Das Projekt unterstützt vier Sprachen vollständig:

### Unterstützte Sprachen
1. **Arabisch (ar)** - Rechts-nach-links Richtung
2. **Englisch (en)** - Standardsprache
3. **Deutsch (de)** - Links-nach-rechts Richtung
4. **Koreanisch (ko)** - Links-nach-rechts Richtung

### Übersetzungsstruktur
```
src/messages/
├── ar.json    # Arabische Übersetzungen
├── en.json    # Englische Übersetzungen
├── de.json    # Deutsche Übersetzungen
└── ko.json    # Koreanische Übersetzungen
```

### Neue Übersetzung hinzufügen
1. Neue Übersetzungsdatei in `src/messages/` hinzufügen
2. Sprache in `src/i18n/routing.ts` spezifizieren
3. Geeignete Schriftarten in `src/app/[locale]/layout.tsx` hinzufügen

## 🎨 Codierungsstandards

### Komponentenstruktur
```typescript
// Beispiel professionelle Komponente
interface ComponentProps {
  translations: {
    title: string;
    subtitle: string;
    // ... andere Übersetzungsschlüssel
  };
}

export function Component({ translations }: ComponentProps) {
  // Übersetzungen verwenden
  return (
    <div>
      <h1>{translations.title}</h1>
      <p>{translations.subtitle}</p>
    </div>
  );
}
```

### Namenskonventionen
- **Komponenten**: PascalCase (z.B. `ProfessionalPath`)
- **Dateien**: kebab-case (z.B. `professional-path.tsx`)
- **Variablen**: camelCase (z.B. `userName`)
- **Konstanten**: UPPER_SNAKE_CASE (z.B. `API_BASE_URL`)

### Best Practices
1. **TypeScript verwenden** für alle neuen Komponenten
2. **Vollständige Übersetzung** für alle benutzerseitigen Texte
3. **Responsives Design** für verschiedene Bildschirmgrößen
4. **SEO-Optimierung** für Suchmaschinen
5. **Testing** für Hauptkomponenten

## 📱 Hauptseiten & Komponenten

### 1. Startseite (`/`)
- Plattformübersicht
- Sprachauswahl
- Hauptfunktionen-Vorschau

### 2. Altersauswahl (`/age-selection`)
- Geeignete Altersgruppe wählen
- Altersgerechte Inhalte anzeigen
- Benutzer zum Lernpfad leiten

### 3. Lernpfad (`/path`)
- Bildungsmodule anzeigen
- Fortschrittsverfolgung
- Erfolge und Herausforderungen

### 4. Wahrheitslabor (`/truth-lab`)
- Bildüberprüfungstools
- Quellenuntersuchung
- Metadatenanalyse

### 5. Verbreitungs-Simulator (`/spread-simulator`)
- Informationsverbreitungssimulation
- Social-Network-Analyse
- Verständnis viraler Inhaltsdynamik

## 🔧 Entwicklung & Wartung

### Neue Seite hinzufügen
1. Neuen Ordner in `src/app/[locale]/` erstellen
2. `page.tsx` mit passendem Inhalt hinzufügen
3. Übersetzungen in Sprachdateien hinzufügen
4. Navigation bei Bedarf aktualisieren

### Neue Komponente hinzufügen
1. Komponentendatei in `src/components/` erstellen
2. TypeScript für Definitionen verwenden
3. Notwendige Übersetzungen hinzufügen
4. Codierungsstandards befolgen

### Neue Übersetzung hinzufügen
1. `src/i18n/routing.ts` bearbeiten
2. Sprachdatei in `src/messages/` hinzufügen
3. `src/app/[locale]/layout.tsx` aktualisieren
4. Neue Übersetzung testen

## 📊 Datenstruktur & Speicherung

### State Management
```typescript
// Beispiel Zustand Store
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

### Übersetzungsstruktur
```json
{
  "Common": {
    "title": "Wahrheitslabor",
    "nav": [
      { "label": "Facilitator Dashboard", "href": "/facilitator" },
      { "label": "Verbreitungs-Simulator", "href": "/spread-simulator" }
    ]
  },
  "PageName": {
    "title": "Seitentitel",
    "subtitle": "Seitenbeschreibung"
  }
}
```

## 🎯 Leistung & Optimierung

### Bildoptimierung
- Moderne WebP-Formate verwenden
- Lazy Loading Bilder
- Bilder für mobile Geräte komprimieren

### Leistungsoptimierung
- Code Splitting
- Wichtige Seiten vorladen
- First Contentful Paint (FCP) optimieren

### SEO-Optimierung
- Geeignete Meta-Tags verwenden
- Seitentitel optimieren
- Strukturierte Daten verwenden

## 🧪 Testing & Qualität

### Testtypen
- **Unit Tests**: Für Komponenten und Funktionen
- **Integration Tests**: Für Komponentenflüsse
- **E2E Tests**: Für vollständige Benutzerreisen

### Testing-Tools
- Jest für Unit Tests
- React Testing Library für Komponententests
- Playwright für E2E Tests

## 🚀 Deployment & Betrieb

### Unterstützte Umgebungen
- **Entwicklung**: `npm run dev`
- **Produktion**: `npm run build && npm start`
- **Analyse**: `npm run analyze`

### Deployment-Plattformen
- Vercel (empfohlen für Next.js)
- Netlify
- Docker
- AWS Amplify

## 📞 Support & Hilfe

### Zusätzliche Dokumentation
- [Entwicklerleitfaden](./DEVELOPER_GUIDE_DE.md)
- [API Referenz](./API_REFERENCE_DE.md)
- [Best Practices](./BEST_PRACTICES_DE.md)

### Häufige Probleme
- [Fehlerbehebung](./TROUBLESHOOTING_DE.md)
- [FAQ](./FAQ_DE.md)

### Zum Projekt beitragen
1. Projekt forken
2. Neuen Branch erstellen (`git checkout -b feature/amazing-feature`)
3. Änderungen committen (`git commit -m 'Add amazing feature'`)
4. Branch pushen (`git push origin feature/amazing-feature`)
5. Pull Request erstellen

## 📄 Lizenz

Dieses Projekt ist unter [MIT License](LICENSE) lizenziert.

## 🙏 Danksagungen

- **Entwicklungsteam**: Alle Entwickler, die zu diesem Projekt beigetragen haben
- **Benutzer**: Jugendliche und Lehrer, die von der Plattform profitieren
- **Unterstützer**: Organisationen, die dieses Projekt unterstützt haben

---

**Wahrheitslabor** - Eine bewusstere und diskriminierendere Zukunft aufbauen 🌟
