# 📖 دليل المطور - مختبر الحقائق

## 🎯 مقدمة

هذا الدليل مصمم للمطورين الجدد الذين ينضمون إلى فريق مختبر الحقائق. يغطي كل ما تحتاجه للبدء في تطوير وصيانة هذه المنصة التعليمية المتعددة اللغات.

## 🏗️ فهم بنية المشروع

### الهيكل العام
```
truthlab-kids/
├── src/
│   ├── app/[locale]/          # صفحات Next.js متعددة اللغات
│   ├── components/            # مكونات React
│   ├── messages/              # ملفات الترجمة
│   ├── store/                 # Zustand state management
│   └── i18n/                  # إعدادات التدويل
├── docs/                      # ملفات التوثيق
├── public/                    # الملفات العامة
└── package.json              # إدارة الاعتماديات
```

### التكنولوجيا الرئيسية
- **Next.js 16.2.4** - إطار العمل React
- **TypeScript** - البرمجة النوعية
- **Tailwind CSS** - إطار العمل للتصميم
- **next-intl** - إدارة الترجمة
- **Zustand** - إدارة الحالة

## 🚀 إعداد بيئة التطوير

### المتطلبات الأساسية
```bash
# Node.js 18+ (موصى به 20+)
node --version

# npm أو yarn أو pnpm
npm --version
```

### خطوات الإعداد
1. **استنساخ المشروع**
```bash
git clone <repository-url>
cd truthlab-kids
```

2. **تثبيت الاعتماديات**
```bash
npm install
# أو
yarn install
```

3. **تشغيل خادم التطوير**
```bash
npm run dev
```

4. **فتح المتصفح على `http://localhost:3001`**

### أدوات التطوير الموصى بها
- **VS Code** مع الإضافات:
  - ES7+ React/Redux/React-Native snippets
  - TypeScript Importer
  - Tailwind CSS IntelliSense
  - Prettier - Code formatter
  - ESLint

## 📝 معايير الترميز

### قواعد TypeScript
```typescript
// ✅ جيد: استخدام واجهات قوية
interface UserProps {
  name: string;
  age: number;
  translations: {
    title: string;
    subtitle: string;
  };
}

// ❌ سيئ: استخدام any
const user: any = {};
```

### هيكل المكونات
```typescript
// ✅ مثال على مكون احترافي
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProfessionalComponentProps {
  translations: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  className?: string;
}

export function ProfessionalComponent({ 
  translations, 
  className = '' 
}: ProfessionalComponentProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className={`p-6 bg-white rounded-lg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-2xl font-bold mb-4">
        {translations.title}
      </h1>
      <p className="text-gray-600 mb-6">
        {translations.subtitle}
      </p>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {translations.buttonText}
      </button>
    </motion.div>
  );
}
```

### قواعد التسمية
- **المكونات**: `PascalCase` - `UserProfile`, `NavigationMenu`
- **الملفات**: `kebab-case` - `user-profile.tsx`, `navigation-menu.tsx`
- **المتغيرات**: `camelCase` - `userName`, `isLoading`
- **الثوابت**: `UPPER_SNAKE_CASE` - `API_BASE_URL`, `MAX_FILE_SIZE`
- **الدوال**: `camelCase` - `handleSubmit`, `getUserData`

## 🌍 العمل مع الترجمة

### هيكل ملفات الترجمة
```json
// src/messages/ar.json
{
  "Common": {
    "title": "مختبر الحقائق",
    "nav": [
      { "label": "الرئيسية", "href": "/" },
      { "label": "المسار التعليمي", "href": "/path" }
    ]
  },
  "HomePage": {
    "title": "مرحباً بك",
    "subtitle": "ابدأ رحلة التعلم",
    "features": {
      "title": "الميزات الرئيسية",
      "items": [
        "التحقق من الصور",
        "تحليل المصادر",
        "فهم الانتشار"
      ]
    }
  }
}
```

### استخدام الترجمة في المكونات
```typescript
// في صفحة Next.js
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
      <h2>{t('features.title')}</h2>
      <ul>
        {t.raw('features.items').map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// في مكون
interface ComponentProps {
  translations: {
    title: string;
    subtitle: string;
  };
}

export function Component({ translations }: ComponentProps) {
  return (
    <div>
      <h1>{translations.title}</h1>
      <p>{translations.subtitle}</p>
    </div>
  );
}
```

### إضافة ترجمات جديدة
1. **أضف المفتاح لجميع اللغات**
```bash
# العربية
src/messages/ar.json
# الإنجليزية
src/messages/en.json
# الألمانية
src/messages/de.json
# الكورية
src/messages/ko.json
```

2. **استخدم المفتاح في الكود**
```typescript
const t = useTranslations('NewSection');
const title = t('newKey');
```

## 🎨 التصميم والأنماط

### استخدام Tailwind CSS
```typescript
// ✅ جيد: استخدام فئات Tailwind
<div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
  <h2 className="text-2xl font-bold text-white mb-4">
    {translations.title}
  </h2>
  <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
    {translations.buttonText}
  </button>
</div>

// ❌ سيئ: أنماط مضمنة
<div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#3B82F6' }}>
```

### مكونات واجهة المستخدم
```typescript
// استخدام المكونات الموجودة
import { ProfessionalCard, FeatureCard, StatsCard } from '@/components/ui/ProfessionalCards';

export function MyComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProfessionalCard className="p-6">
        <h3>بطاقة احترافية</h3>
      </ProfessionalCard>
      <FeatureCard
        icon={<Star className="w-6 h-6" />}
        title="ميزة رائعة"
        description="وصف الميزة"
      />
      <StatsCard
        value="95%"
        label="دقة عالية"
        trend="up"
      />
    </div>
  );
}
```

## 🔧 إدارة الحالة

### استخدام Zustand
```typescript
// src/store/useAppStore.ts
import { create } from 'zustand';

interface AppState {
  // الحالة
  userAge: string;
  currentModule: number;
  isLoading: boolean;
  
  // الإجراءات
  setUserAge: (age: string) => void;
  setCurrentModule: (module: number) => void;
  setLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  userAge: '10-13',
  currentModule: 1,
  isLoading: false,

  setUserAge: (age) => set({ userAge: age }),
  setCurrentModule: (module) => set({ currentModule: module }),
  setLoading: (loading) => set({ isLoading: loading }),
}));

// استخدام في المكون
import { useAppStore } from '@/store/useAppStore';

export function AgeSelector() {
  const { userAge, setUserAge } = useAppStore();

  return (
    <select 
      value={userAge} 
      onChange={(e) => setUserAge(e.target.value)}
      className="border rounded p-2"
    >
      <option value="6-9">6-9 سنوات</option>
      <option value="10-13">10-13 سنة</option>
      <option value="14-17">14-17 سنة</option>
    </select>
  );
}
```

## 📱 الاستجابة والتصميم المتجاوب

### نقاط التوقف الرئيسية
```css
/* Tailwind CSS breakpoints */
sm: 640px   /* أجهزة صغيرة */
md: 768px   /* أجهزة متوسطة */
lg: 1024px  /* أجهزة كبيرة */
xl: 1280px  /* أجهزة كبيرة جداً */
```

### أفضل الممارسات
```typescript
// ✅ جيد: تصميم متجاوب
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-8">
  <Card className="w-full" />
  <Card className="w-full" />
  <Card className="w-full" />
</div>

// ✅ جيد: استخدام flexbox للتخطيط
<div className="flex flex-col lg:flex-row gap-8">
  <div className="flex-1">
    <h3>المحتوى الرئيسي</h3>
    <p>نصوص طويلة...</p>
  </div>
  <div className="w-full lg:w-80">
    <h3>الشريط الجانبي</h3>
    <p>محتوى ثانوي</p>
  </div>
</div>
```

## 🧪 الاختبار

### اختبار المكونات
```typescript
// src/components/__tests__/MyComponent.test.tsx
import { render, screen } from '@testing-library/react';
import { MyComponent } from '../MyComponent';

describe('MyComponent', () => {
  it('renders title correctly', () => {
    const translations = {
      title: 'عنوان الاختبار',
      subtitle: 'عنوان فرعي'
    };

    render(<MyComponent translations={translations} />);
    
    expect(screen.getByText('عنوان الاختبار')).toBeInTheDocument();
  });

  it('calls callback when button is clicked', () => {
    const mockCallback = jest.fn();
    // ... اختبار التفاعل
  });
});
```

### تشغيل الاختبارات
```bash
# تشغيل جميع الاختبارات
npm test

# تشغيل في وضع المراقبة
npm run test:watch

# تغطية الكود
npm run test:coverage
```

## 🐛 تصحيح الأخطاء

### أدوات التصحيح
- **React Developer Tools** - فحص مكونات React
- **Redux DevTools** - تصحيح Zustand store
- **Network Tab** - فحص طلبات الشبكة
- **Console** - عرض الأخطاء والسجلات

### أخطاء شائعة وحلولها

#### خطأ next-intl
```typescript
// ❌ خطأ
MISSING_MESSAGE: Could not resolve 'Page.key'

// ✅ الحل: تأكد من وجود المفتاح في جميع ملفات الترجمة
// src/messages/ar.json
// src/messages/en.json
// src/messages/de.json
// src/messages/ko.json
```

#### خطأ TypeScript
```typescript
// ❌ خطأ
Property 'translations' does not exist on type

// ✅ الحل: حدد الواجهة الصحيحة
interface ComponentProps {
  translations: {
    title: string;
    subtitle: string;
  };
}
```

## 🚀 عملية النشر

### بناء للإنتاج
```bash
# بناء التطبيق
npm run build

# التحقق من البناء
npm run build:analyze

# تشغيل نسخة الإنتاج
npm start
```

### متغيرات البيئة
```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_ENVIRONMENT=production
```

## 📚 موارد إضافية

### وثائق مهمة
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)

### أدوات مفيدة
- [React Icons](https://react-icons.github.io/react-icons/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

## 🤝 المساهمة في المشروع

### عملية العمل
1. **إنشاء فرع جديد**
```bash
git checkout -b feature/new-feature
```

2. **إجراء التغييرات**
- اتبع معايير الترميز
- أضف الاختبارات اللازمة
- حدّث الوثائق

3. **الاختبار والتأكد**
```bash
npm run lint
npm test
npm run build
```

4. **إرسال التغييرات**
```bash
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature
```

5. **إنشاء Pull Request**
- اشرح التغييرات بوضوح
- أضف لقطات شاشة إذا لزم الأمر
- انتظر المراجعة

## 📞 الحصول على المساعدة

### قنوات التواصل
- **GitHub Issues** - للإبلاغ عن المشاكل
- **Slack/Discord** - للمناقشات اليومية
- **Email** - للتواصل الهام

### عند مواجهة مشكلة
1. **ابحث في Issues الموجودة**
2. **تحقق من الوثائق**
3. **اسأل في القنوات المناسبة**
4. **كن واضحاً ومفصلاً في سؤالك**

---

**مرحباً بك في فريق مختبر الحقائق!** 🌟

نحن متحمسون لانضمامك ونتطلع إلى العمل معك لبناء منصة تعليمية رائعة. إذا كان لديك أي أسئلة، فلا تتردد في طرحها!
