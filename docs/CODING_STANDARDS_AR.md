# 📋 معايير الترميز - مختبر الحقائق

## 🎯 مقدمة

هذا المستند يحدد معايير الترميز وأفضل الممارسات التي يجب اتباعها عند تطوير مختبر الحقائق. الهدف هو الحفاظ على جودة الكود، قابلية القراءة، وسهولة الصيانة عبر المشروع بأكمله.

## 🏗️ معايير TypeScript

### تعريفات الواجهات
```typescript
// ✅ جيد: واجهات مفصلة وقوية
interface UserProfile {
  id: string;
  name: string;
  age: number;
  email: string;
  avatar?: string; // اختياري
  preferences: UserPreferences;
}

interface UserPreferences {
  language: 'ar' | 'en' | 'de' | 'ko';
  theme: 'light' | 'dark';
  notifications: boolean;
}

// ❌ سيئ: استخدام any
const user: any = {};
```

### أنواع المكونات
```typescript
// ✅ جيد: تحديد أنواع الخصائص بوضوح
interface ProfessionalCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

// ✅ جيد: استخدام أنواع الاتحاد
type Status = 'loading' | 'success' | 'error' | 'idle';

type UserRole = 'admin' | 'facilitator' | 'student';

// ✅ جيد: استخدام أنواع التعداد
enum ModuleStatus {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  LOCKED = 'locked'
}
```

## 🎨 معايير المكونات

### هيكل المكونات
```typescript
// ✅ مثال على مكون احترافي
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, Search, Shield } from 'lucide-react';

interface InvestigationToolProps {
  translations: {
    title: string;
    subtitle: string;
    imageAnalysis: string;
    sourceInvestigation: string;
    metadataAnalysis: string;
  };
  className?: string;
}

export function InvestigationTool({ 
  translations, 
  className = '' 
}: InvestigationToolProps) {
  const [activeTab, setActiveTab] = useState<'image' | 'source' | 'metadata'>('image');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // منطق التهيئة
  }, []);

  const handleTabChange = (tab: typeof activeTab) => {
    setActiveTab(tab);
    setIsLoading(true);
    // محاكاة تحميل البيانات
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <motion.div 
      className={`p-6 bg-white rounded-lg shadow-lg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {translations.title}
        </h1>
        <p className="text-gray-600">
          {translations.subtitle}
        </p>
      </header>

      <nav className="flex space-x-4 mb-6 border-b">
        <button
          onClick={() => handleTabChange('image')}
          className={`pb-2 px-1 border-b-2 transition-colors ${
            activeTab === 'image' 
              ? 'border-blue-500 text-blue-600' 
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <Eye className="w-4 h-4 inline ml-2" />
          {translations.imageAnalysis}
        </button>
        {/* أزرار أخرى */}
      </nav>

      <main>
        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div>
            {/* محتوى التبويب النشط */}
          </div>
        )}
      </main>
    </motion.div>
  );
}
```

### قواعد المكونات
1. **استخدام 'use client'** للمكونات التي تستخدم hooks
2. **تحديد الواجهات** لجميع الخصائص
3. **توفير قيم افتراضية** للخصائص الاختيارية
4. **استخدام TypeScript** للتعريفات
5. **فصل المنطق** عن العرض قدر الإمكان

## 📝 قواعد التسمية

### المكونات والملفات
```typescript
// ✅ مكونات: PascalCase
export const UserProfile = () => {};
export const NavigationMenu = () => {};
export const InvestigationTool = () => {};

// ✅ ملفات: kebab-case
// user-profile.tsx
// navigation-menu.tsx
// investigation-tool.tsx
```

### المتغيرات والدوال
```typescript
// ✅ متغيرات: camelCase
const userName = 'Ahmed';
const isLoading = false;
const selectedModule = 1;

// ✅ دوال: camelCase
const handleSubmit = () => {};
const getUserData = () => {};
const setAgeGroup = (age: string) => {};

// ✅ ثوابت: UPPER_SNAKE_CASE
const API_BASE_URL = 'https://api.truthlab.com';
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const DEFAULT_LANGUAGE = 'en';

// ✅ أنواع: PascalCase
interface UserData {}
type StatusType = 'loading' | 'success';
enum ModuleStatus {}
```

### CSS Classes
```typescript
// ✅ استخدام BEM methodology
.component {}
.component__element {}
.component--modifier {}

// ✅ مع Tailwind CSS
<div className="flex items-center justify-center p-4 bg-blue-500 rounded-lg">
```

## 🌍 معايير الترجمة

### هيكل ملفات الترجمة
```json
{
  "Common": {
    "title": "مختبر الحقائق",
    "subtitle": "منصة تعليمية لمحو الأمية الإعلامية",
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

### استخدام الترجمة
```typescript
// ✅ في صفحات Next.js
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

// ✅ في المكونات
interface ComponentProps {
  translations: {
    title: string;
    subtitle: string;
    features: {
      title: string;
      items: string[];
    };
  };
}
```

### قواعد الترجمة
1. **ترجمة جميع النصوص** المعروضة للمستخدم
2. **استخدام مفاتيح وصفية** وذات معنى
3. **الحفاظ على الاتساق** عبر اللغات
4. **تجنب النصوص المضمنة** في الكود
5. **اختبار جميع اللغات** قبل النشر

## 🎨 معايير التصميم

### استخدام Tailwind CSS
```typescript
// ✅ جيد: استخدام فئات المنفعة
<div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
  <h2 className="text-2xl font-bold text-white mb-4">
    {translations.title}
  </h2>
</div>

// ❌ سيئ: أنماط مضمنة
<div style={{ 
  display: 'flex', 
  flexDirection: 'column', 
  backgroundColor: '#3B82F6' 
 }}>
```

### الاستجابة
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
  </div>
  <div className="w-full lg:w-80">
    <h3>الشريط الجانبي</h3>
  </div>
</div>
```

## 🔧 معايير إدارة الحالة

### استخدام Zustand
```typescript
// ✅ جيد: store منظم
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  // الحالة
  user: User | null;
  ageGroup: string;
  currentModule: number;
  isLoading: boolean;
  
  // الإجراءات
  setUser: (user: User | null) => void;
  setAgeGroup: (age: string) => void;
  setCurrentModule: (module: number) => void;
  setLoading: (loading: boolean) => void;
  
  // الإجراءات المركبة
  initializeUser: (userData: User) => void;
  resetUser: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      // الحالة الابتدائية
      user: null,
      ageGroup: '10-13',
      currentModule: 1,
      isLoading: false,

      // الإجراءات البسيطة
      setUser: (user) => set({ user }),
      setAgeGroup: (age) => set({ ageGroup: age }),
      setCurrentModule: (module) => set({ currentModule: module }),
      setLoading: (loading) => set({ isLoading: loading }),

      // الإجراءات المركبة
      initializeUser: (userData) => {
        set({ 
          user: userData,
          isLoading: false 
        });
      },

      resetUser: () => {
        set({ 
          user: null,
          ageGroup: '10-13',
          currentModule: 1 
        });
      }
    }),
    {
      name: 'user-storage',
    }
  )
);
```

## 🧪 معايير الاختبار

### اختبار المكونات
```typescript
// ✅ جيد: اختبار شامل
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { InvestigationTool } from '../InvestigationTool';

describe('InvestigationTool', () => {
  const mockTranslations = {
    title: 'أدوات التحقيق',
    subtitle: 'استخدم الأدوات المتقدمة للتحقق',
    imageAnalysis: 'تحليل الصور',
    sourceInvestigation: 'تحقيق المصدر',
    metadataAnalysis: 'تحليل البيانات الوصفية'
  };

  it('renders title and subtitle correctly', () => {
    render(<InvestigationTool translations={mockTranslations} />);
    
    expect(screen.getByText('أدوات التحقيق')).toBeInTheDocument();
    expect(screen.getByText('استخدم الأدوات المتقدمة للتحقق')).toBeInTheDocument();
  });

  it('switches tabs when clicked', async () => {
    render(<InvestigationTool translations={mockTranslations} />);
    
    const sourceTab = screen.getByText('تحقيق المصدر');
    fireEvent.click(sourceTab);
    
    await waitFor(() => {
      expect(sourceTab).toHaveClass('border-blue-500');
    });
  });

  it('shows loading state when switching tabs', () => {
    render(<InvestigationTool translations={mockTranslations} />);
    
    const imageTab = screen.getByText('تحليل الصور');
    fireEvent.click(imageTab);
    
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
```

## 📂 تنظيم الملفات

### هيكل المجلدات
```
src/
├── app/[locale]/              # صفحات Next.js
│   ├── page.tsx              # الصفحة الرئيسية
│   ├── age-selection/        # اختيار العمر
│   ├── path/                 # المسار التعليمي
│   ├── truth-lab/            # مختبر الحقائق
│   └── spread-simulator/     # محاكي الانتشار
├── components/               # المكونات
│   ├── ui/                  # مكونات واجهة المستخدم
│   ├── ProfessionalPath.tsx  # المسار الاحترافي
│   ├── ProfessionalTruthLab.tsx
│   └── ProfessionalAgeSelection.tsx
├── hooks/                   # React hooks مخصصة
├── lib/                     # وظائف مساعدة
├── store/                   # Zustand stores
├── types/                   # تعريفات TypeScript
├── utils/                   # أدوات مساعدة
└── messages/                # ملفات الترجمة
    ├── ar.json
    ├── en.json
    ├── de.json
    └── ko.json
```

### قواعد تنظيم الملفات
1. **تسمية الملفات** بوضوح ووصفية
2. **فصل المكونات** عن الصفحات
3. **تنظيم المكونات** حسب الوظيفة
4. **استخدام المجلدات الفرعية** للملفات الكبيرة
5. **الحفاظ على هيكل ثابت** عبر المشروع

## 🚀 معايير الأداء

### تحسين المكونات
```typescript
// ✅ جيد: استخدام React.memo للمكونات باهظة الثمن
export const ExpensiveComponent = React.memo(({ data }: Props) => {
  return (
    <div>
      {data.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
});

// ✅ جيد: استخدام useMemo للحسابات المكلفة
const expensiveValue = useMemo(() => {
  return data.reduce((sum, item) => sum + item.value, 0);
}, [data]);

// ✅ جيد: استخدام useCallback للدوال
const handleClick = useCallback((id: string) => {
  onItemClick(id);
}, [onItemClick]);
```

### تحسين الصور
```typescript
// ✅ جيد: استخدام Next.js Image
import Image from 'next/image';

<Image
  src="/path/to/image.jpg"
  alt="وصف الصورة"
  width={500}
  height={300}
  className="rounded-lg"
  priority // للصور الهامة
/>
```

## 🔍 معايير الأمان

### التعامل مع البيانات
```typescript
// ✅ جيد: التحقق من المدخلات
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// ✅ جيد: تنظيف المدخلات
const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

// ✅ جيد: استخدام متغيرات البيئة
const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
```

## 📝 معايير التوثيق

### توثيق الكود
```typescript
/**
 * مكون لعرض أدوات التحقيق في مختبر الحقائق
 * 
 * @param translations - كائن الترجمة الذي يحتوي على جميع النصوص
 * @param className - فئات CSS إضافية اختيارية
 * @returns مكون React لعرض أدوات التحقيق
 * 
 * @example
 * ```tsx
 * <InvestigationTool 
 *   translations={translations} 
 *   className="custom-class" 
 * />
 * ```
 */
export function InvestigationTool({ 
  translations, 
  className = '' 
}: InvestigationToolProps) {
  // ...
}

/**
 * التحقق من صحة البريد الإلكتروني
 * 
 * @param email - البريد الإلكتروني للتحقق
 * @returns true إذا كان البريد صالحاً، false خلاف ذلك
 */
const validateEmail = (email: string): boolean => {
  // ...
};
```

## 🔄 مراجعة الكود

### قائمة التحقق للمراجعة
- [ ] يتبع معايير TypeScript
- [ ] جميع النصوص مترجمة
- [ ] التصميم متجاوب
- [ ] يعمل على جميع المتصفحات
- [ ] لا يوجد أخطاء في الكونسول
- [ ] الاختبارات تمر بنجاح
- [ ] الأداء مقبول
- [ ] التوثيق مكتمل

---

**هذه المعايير تساعد في الحفاظ على جودة واتساق الكود عبر المشروع بأكمله.** 🌟
