# 🦁 광운대 멋쟁이사자처럼 홈페이지

> **BE THE LION, CODE YOUR FUTURE AND RULE YOUR WORLD** 🌟

광운대 멋쟁이사자처럼의 공식 홈페이지입니다. 동아리 소개, 프로젝트 포트폴리오, 블로그, 팀 소개 및 신입 모집까지 한 번에!

## 🚀 프로젝트 개요

이 프로젝트는 광운대학교 멋쟁이사자처럼 동아리의 디지털 허브입니다. 방문자들에게 동아리의 정체성을 소개하고, 멤버들의 프로젝트를 전시하며, 새로운 사자들을 모집하는 플랫폼 역할을 합니다.

### ✨ 주요 기능

- 🏠 **홈페이지**: 동적 애니메이션과 함께하는 인상적인 첫 인상
- 🎯 **About**: 동아리 활동 소개 (OT, 아이디어톤, 해커톤, 프로젝트)
- 📝 **블로그**: 베스트 포스트와 일반 포스트 관리
- 🚀 **프로젝트**: 포트폴리오 전시 및 상세 정보
- 👥 **팀 소개**: 운영진과 아기사자들 프로필
- 📢 **모집 공고**: 파트별 모집 정보 및 타임라인
- 🔧 **관리자 패널**: 콘텐츠 관리 (비밀스럽게...)

## ⚒️ 기술 스택

### Frontend
- **React 19.1.0** - 최신 리액트로 안정적인 UI
- **Vite 6.3.5** - 번개같이 빠른 개발 환경
- **Tailwind CSS 4.1.7** - 유틸리티 퍼스트 스타일링
- **React Router DOM 7.6.0** - SPA 라우팅

### 상태관리 & 데이터
- **Zustand 5.0.4** - 간단하고 강력한 상태관리
- **TanStack Query 5.76.1** - 서버 상태 관리의 끝판왕

### 애니메이션 & UX
- **React Spring 10.0.1** - 부드러운 전환 효과
- **React Icons 5.5.0** - 아이콘 라이브러리

### 개발 도구
- **ESLint** - 코드 품질 관리
- **Node.js 18.18.0** - 런타임 환경

## 🏃🏻 빠른 시작

```bash
# 레포지토리 클론
git clone https://github.com/your-repo/homepage-client.git
cd homepage-client

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

개발 서버는 기본적으로 `http://localhost:5173`에서 실행됩니다.

## 🗂️ 프로젝트 구조

```
src/
├── app/                    # 라우팅 (Next.js 스타일)
│   ├── (home)/            # 메인 사이트
│   │   ├── about/         # 동아리 소개
│   │   ├── blogs/         # 블로그
│   │   ├── projects/      # 프로젝트 포트폴리오
│   │   ├── teams/         # 팀 소개
│   │   └── recruit/       # 모집 공고
│   └── admin/             # 관리자 패널 (🤫)
├── components/            # UI 컴포넌트 (Atomic Design)
│   ├── (home)/           # 홈 관련 컴포넌트
│   └── admin/            # 관리자 관련 컴포넌트
├── hooks/                # 커스텀 훅
├── service/              # API 서비스
├── store/                # 상태 관리
└── utils/                # 유틸리티 함수
```

### 🏛️ 아키텍처 철학

- **Atomic Design Pattern**: 재사용 가능한 컴포넌트 설계
- **Feature-Sliced Design**: 기능별 모듈화로 확장성 확보
- **Next.js 라우팅**: 직관적인 파일 기반 라우팅

## 🎨 주요 페이지 구성

### 🏠 메인 홈페이지
- 인터랙티브 애니메이션으로 사용자의 시선을 사로잡는 히어로 섹션
- 동아리 핵심 가치와 비전 소개
- 프로젝트 미리보기 및 빠른 네비게이션

### 📖 About 섹션
- **OT**: 첫 걸음을 위한 오리엔테이션
- **아이디어톤**: 5월의 창의적 경쟁
- **해커톤**: 8월의 무박 2일 코딩 마라톤
- **프로젝트**: 기획부터 구현까지의 협업 여정

### 🚀 프로젝트 포트폴리오
- 검색 기능으로 프로젝트 필터링
- 상세 페이지에서 기술 스택, 팀원, 프로젝트 기간 등 정보 제공
- GitHub, Instagram 등 외부 링크 연동

### 👥 팀 소개
- **운영진**: 대표, 부대표, 파트장들
- **아기사자**: 각 파트별 신입 멤버들
- SNS 링크와 기술 스택 정보

### 📢 모집 공고
- 파트별 모집 정보 (프론트엔드, 백엔드, 디자인, 기획)
- 모집 일정 타임라인
- 지원하기 버튼으로 외부 폼 연동

## 🔧 관리자 페널 (Admin)
### 🕵️ 접근 방법
마법을 부리면 들어갈 수 있어요 ㅎ

### 🎛️ 관리 기능
- **📊 대시보드**: 전체 콘텐츠 현황 한눈에 보기
- **📝 블로그 관리**: 포스트 등록, 베스트 설정, 삭제
- **🚀 프로젝트 관리**: 포트폴리오 등록 및 편집
- **👥 멤버 관리**: 기수별 멤버 추가/수정/삭제
- **📢 모집 관리**: 지원 현황 및 공고 관리

## 🌐 환경 설정

### 환경 변수
```bash
VITE_API_ORIGIN=your_api_server_url
```

### API 프록시
개발 환경에서 `/api` 요청은 자동으로 백엔드 서버로 프록시됩니다.

## 📚 개발 가이드

### Git Convention
```
type(scope): subject

# type 종류
- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 수정
- style: 코드 스타일 수정
- refactor: 코드 리팩토링
- test: 테스트 코드 추가
- chore: 빌드 프로세스 또는 도구 수정
```

### 컴포넌트 명명 규칙
```
components/
├── atom/          # 기본 UI 요소
├── molecule/      # atom 조합
├── organism/      # molecule 조합
└── template/      # 페이지 레이아웃
```

## 📦 배포

### Netlify 설정
`netlify.toml` 파일에 배포 설정이 포함되어 있습니다.

```bash
# 프로덕션 빌드
npm run build

# dist 폴더가 생성되며, 이를 호스팅 서비스에 배포
```

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat(component): Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<div align="center">

**💫 "BE THE LION, CODE YOUR FUTURE" 💫**

**광운대 멋쟁이사자처럼 13기**

*© 2025 LIKELION KWUNIV. All rights reserved.*

</div>
