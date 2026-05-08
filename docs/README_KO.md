# 🧪 트루스 랩 - 미디어 리터러시 교육 플랫폼

## 🌟 개요

트루스 랩은 디지털 시대에 정보 검증 능력과 미디어 리터러시를 갖춘 청소년을 지원하기 위해 설계된 상호작용적 다국어 교육 플랫폼입니다. 이 플랫폼은 인공지능과 지능형 분석을 포함한 최첨단 기술을 사용하여 포괄적이고 효과적인 교육 경험을 제공합니다.

## 🎯 주요 목표

- **청소년 지원**: 다음 세대가 비판적 사고와 정보 검증 능력을 갖추도록 지원
- **상호작용적 학습**: 모든 연령대에 적합한 상호작용적 교육 콘텐츠 제공
- **다국어 지원**: 4개 주요 언어 지원 (아랍어, 영어, 독일어, 한국어)
- **교육 표준**: 교육 콘텐츠의 최고 품질 표준 준수

## 🏗️ 프로젝트 구조

```
truthlab-kids/
├── src/
│   ├── app/                    # Next.js 페이지
│   │   ├── [locale]/          # 다국어 페이지
│   │   │   ├── page.tsx       # 홈페이지
│   │   │   ├── age-selection/  # 연령 선택
│   │   │   ├── path/           # 학습 경로
│   │   │   ├── truth-lab/      # 트루스 랩
│   │   │   └── spread-simulator/ # 확산 시뮬레이터
│   ├── components/            # React 컴포넌트
│   │   ├── ui/               # UI 컴포넌트
│   │   ├── ProfessionalPath.tsx
│   │   ├── ProfessionalTruthLab.tsx
│   │   └── ProfessionalAgeSelection.tsx
│   ├── messages/             # 번역 파일
│   │   ├── ar.json           # 아랍어
│   │   ├── en.json           # 영어
│   │   ├── de.json           # 독일어
│   │   └── ko.json           # 한국어
│   ├── store/                # Zustand 상태 관리
│   └── i18n/                 # 국제화 설정
├── docs/                     # 문서 파일
├── public/                   # 공개 파일
└── README.md                 # 메인 파일
```

## 🛠️ 사용된 기술

### 프론트엔드
- **Next.js 16.2.4** - React 프레임워크
- **TypeScript** - 타입 안전 프로그래밍
- **Tailwind CSS** - 디자인 프레임워크
- **Framer Motion** - 애니메이션
- **Lucide React** - 아이콘

### 국제화 및 현지화
- **next-intl** - 번역 및 i18n 관리
- **i18n routing** - 다국어 라우팅

### 상태 관리
- **Zustand** - 경량 상태 관리

### 폰트
- **Lexend** - 영어용 기본 폰트
- **Noto Sans Arabic** - 아랍어 언어 지원
- **Noto Sans KR** - 한국어 언어 지원

## 🚀 빠른 시작

### 전제 조건
- Node.js 18+ 
- npm 또는 yarn 또는 pnpm

### 설치 및 설정

```bash
# 프로젝트 복제
git clone <repository-url>
cd truthlab-kids

# 의존성 설치
npm install
# 또는
yarn install

# 개발 서버 실행
npm run dev
# 또는
yarn dev

# 브라우저에서 열기
http://localhost:3001
```

### 빌드 및 배포 명령

```bash
# 프로덕션용 빌드
npm run build

# 프로덕션 버전 실행
npm run start

# 코드 린트
npm run lint
```

## 🌍 국제화 및 현지화

프로젝트는 4개 언어를 완전히 지원합니다:

### 지원되는 언어
1. **아랍어 (ar)** - 오른쪽에서 왼쪽 방향
2. **영어 (en)** - 기본 언어
3. **독일어 (de)** - 왼쪽에서 오른쪽 방향
4. **한국어 (ko)** - 왼쪽에서 오른쪽 방향

### 번역 구조
```
src/messages/
├── ar.json    # 아랍어 번역
├── en.json    # 영어 번역
├── de.json    # 독일어 번역
└── ko.json    # 한국어 번역
```

### 새 번역 추가
1. `src/messages/`에 새 번역 파일 추가
2. `src/i18n/routing.ts`에서 언어 지정
3. `src/app/[locale]/layout.tsx`에 적절한 폰트 추가

## 🎨 코딩 표준

### 컴포넌트 구조
```typescript
// 전문 컴포넌트 예시
interface ComponentProps {
  translations: {
    title: string;
    subtitle: string;
    // ... 기타 번역 키
  };
}

export function Component({ translations }: ComponentProps) {
  // 번역 사용
  return (
    <div>
      <h1>{translations.title}</h1>
      <p>{translations.subtitle}</p>
    </div>
  );
}
```

### 명명 규칙
- **컴포넌트**: PascalCase (예: `ProfessionalPath`)
- **파일**: kebab-case (예: `professional-path.tsx`)
- **변수**: camelCase (예: `userName`)
- **상수**: UPPER_SNAKE_CASE (예: `API_BASE_URL`)

### 모범 사례
1. **TypeScript 사용** 모든 새 컴포넌트에
2. **완전한 번역** 모든 사용자 대면 텍스트에
3. **반응형 디자인** 다양한 화면 크기에
4. **SEO 최적화** 검색 엔진에
5. **테스트** 주요 컴포넌트에

## 📱 주요 페이지 및 컴포넌트

### 1. 홈페이지 (`/`)
- 플랫폼 개요
- 언어 선택
- 주요 기능 미리보기

### 2. 연령 선택 (`/age-selection`)
- 적절한 연령 그룹 선택
- 연령에 맞는 콘텐츠 표시
- 사용자를 학습 경로로 안내

### 3. 학습 경로 (`/path`)
- 교육 모듈 표시
- 진행 상황 추적
- 성취 및 도전

### 4. 트루스 랩 (`/truth-lab`)
- 이미지 검증 도구
- 소스 조사
- 메타데이터 분석

### 5. 확산 시뮬레이터 (`/spread-simulator`)
- 정보 확산 시뮬레이션
- 소셜 네트워크 분석
- 바이럴 콘텐츠 동역학 이해

## 🔧 개발 및 유지보수

### 새 페이지 추가
1. `src/app/[locale]/`에 새 폴더 생성
2. 적절한 콘텐츠로 `page.tsx` 추가
3. 언어 파일에 번역 추가
4. 필요시 탐색 업데이트

### 새 컴포넌트 추가
1. `src/components/`에 컴포넌트 파일 생성
2. 정의에 TypeScript 사용
3. 필요한 번역 추가
4. 코딩 표준 준수

### 새 번역 추가
1. `src/i18n/routing.ts` 편집
2. `src/messages/`에 언어 파일 추가
3. `src/app/[locale]/layout.tsx` 업데이트
4. 새 번역 테스트

## 📊 데이터 구조 및 저장

### 상태 관리
```typescript
// Zustand 스토어 예시
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

### 번역 구조
```json
{
  "Common": {
    "title": "트루스 랩",
    "nav": [
      { "label": "퍼실리테이터 대시보드", "href": "/facilitator" },
      { "label": "확산 시뮬레이터", "href": "/spread-simulator" }
    ]
  },
  "PageName": {
    "title": "페이지 제목",
    "subtitle": "페이지 설명"
  }
}
```

## 🎯 성능 및 최적화

### 이미지 최적화
- 최신 WebP 형식 사용
- 이미지 지연 로딩
- 모바일 기기용 이미지 압축

### 성능 최적화
- 코드 분할
- 중요한 페이지 사전 로드
- First Contentful Paint (FCP) 최적화

### SEO 최적화
- 적절한 메타 태그 사용
- 페이지 제목 최적화
- 구조화된 데이터 사용

## 🧪 테스트 및 품질

### 테스트 유형
- **단위 테스트**: 컴포넌트 및 함수용
- **통합 테스트**: 컴포넌트 흐름용
- **E2E 테스트**: 완전한 사용자 여정용

### 테스트 도구
- Jest 단위 테스트용
- React Testing Library 컴포넌트 테스트용
- Playwright E2E 테스트용

## 🚀 배포 및 운영

### 지원되는 환경
- **개발**: `npm run dev`
- **프로덕션**: `npm run build && npm start`
- **분석**: `npm run analyze`

### 배포 플랫폼
- Vercel (Next.js용 권장)
- Netlify
- Docker
- AWS Amplify

## 📞 지원 및 도움

### 추가 문서
- [개발자 가이드](./DEVELOPER_GUIDE_KO.md)
- [API 참조](./API_REFERENCE_KO.md)
- [모범 사례](./BEST_PRACTICES_KO.md)

### 일반적인 문제
- [문제 해결](./TROUBLESHOOTING_KO.md)
- [FAQ](./FAQ_KO.md)

### 프로젝트 기여
1. 프로젝트 포크
2. 새 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경사항 커밋 (`git commit -m 'Add amazing feature'`)
4. 브랜치 푸시 (`git push origin feature/amazing-feature`)
5. Pull Request 생성

## 📄 라이선스

이 프로젝트는 [MIT License](LICENSE)로 라이선스되었습니다.

## 🙏 감사의 말

- **개발팀**: 이 프로젝트에 기여한 모든 개발자
- **사용자**: 플랫폼에서 혜택을 받는 청소년과 교사
- **지원자**: 이 프로젝트를 지원한 기관

---

**트루스 랩** - 더 인식하고 판별력 있는 미래 구축 🌟
