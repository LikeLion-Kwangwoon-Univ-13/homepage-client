# HOMEPAGE CLIENT
## ⚒️ TECH STACK
- javascript
- node 18.18.0
- react 19.1.0
- react-dom 19.1.0
- react-router-dom 7.6.0
- @tanstack/react-query
- zustand
- tailwindcss

## 🏃🏻 GETTING STARTED
```bash
# installation
npm install

# run development-mode
npm run dev

# run production-mode
npm start
```

## 📚 GIT CONVENTION
- commit message는 `type(scope): subject` 형식으로 작성합니다.
- type은 `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore` 등이 있습니다.
	- `feat`: 새로운 기능 추가
	- `fix`: 버그 수정
	- `docs`: 문서 수정
	- `style`: 코드 스타일 수정
	- `refactor`: 코드 리팩토링
	- `test`: 테스트 코드 추가
	- `chore`: 빌드 프로세스 또는 auxiliary tools 수정
- scope는 변경된 파일의 경로를 의미합니다.
- subject는 변경된 내용을 간략하게 설명합니다.

## 🗂️ FOLDER CONVENTION
[폴더 구조는 Next.js 표준을 지향하고 있습니다.](https://nextjs.org/docs)

### public
public 폴더에는 이미지, 동영상 등의 리소스를 보관합니다.

### app
routing을 담당합니다. routing 규칙은 next.js 표준을 따릅니다.

page.tsx는 해당 폴더 경로의 페이지를 의미합니다.
layout.tsx는 자식 노드를 감싸는 공통 컴포넌트를 정의합니다.

### asset
asset 폴더에는 정적인 파일을 보관합니다.

보통 json 파일을 보관합니다.

### components
JSX 문법으로 작성된 모듈을 보관합니다.
주로 UI를 요소를 보관합니다. 기본적으로 유지보수성을 위해 [atomic-design-pattern](https://yozm.wishket.com/magazine/detail/1531/)을 지향합니다.

다만 [FSD 아키텍처](https://emewjin.github.io/feature-sliced-design/)를 적극적으로 사용해야하는 상황이라면, 다른 `react-hook`이나 함수를 보관해도 무방합니다.

### hook
hook 폴더에는 react-hook을 보관합니다.
react-hook은 반드시 함수명이 `use`로 시작해야합니다.

### util
util 폴더에는 유용한 유틸함수를 보관합니다.
