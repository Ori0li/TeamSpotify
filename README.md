<div align="center">

<img src="https://wwwmarketing.scdn.co/img/structured-data/logo.png" width="400"/>

# Spotify 프로젝트 🖍️

Next.js와 TypeScript 학습 이후, 이를 직접 적용해보고자 **Spotify 클론 코딩** 프로젝트를 진행했습니다.

</div>

<br/>

## 📝 프로젝트 개요

Spotify 사이트를 참고하여 클론 코딩하였으며, 주요 기능 구현과 UI/UX에 중점을 두고 제작하였습니다.

작성된 내용은 다음과 같습니다:

- 프로젝트 개요
- 프로젝트 화면 구성
- 사용한 기술 스택
- 기술적 이슈와 해결 과정
- 프로젝트 팀원

<br/>

## 🎬 화면 구성

### ✅ 메인 화면

|                      화면                      | 설명                                                     |
| :--------------------------------------------: | -------------------------------------------------------- |
| <img src="./public/mainpage.png" width="250"/> | 스포티파이 영상과 함께 아티스트 모음집을 볼 수 있습니다. |

### ✅ 상세 화면

|                        화면                        | 설명                                                             |
| :------------------------------------------------: | ---------------------------------------------------------------- |
|  <img src="./public/detailpage.png" width="250"/>  | 아티스트 상세 페이지로, 해당 아티스트의 앨범들을 볼 수 있습니다. |
|  <img src="./public/trackpage.png" width="250"/>   | 앨범을 클릭하면 트랙 리스트가 나타납니다.                        |
|  <img src="./public/searchpage.png" width="250"/>  | 검색 기능을 통해 원하는 아티스트를 찾을 수 있습니다.             |
| <img src="./public/detailMobile.png" width="250"/> | 모바일에서도 상세 페이지를 확인할 수 있습니다.                   |
| <img src="./public/trackMobile.png" width="250"/>  | 모바일 트랙 페이지도 반응형으로 구현되어 있습니다.               |

<br/>

## ⚙ 기술 스택

### 🧩 Front-end

<div>
<img src="https://img.shields.io/badge/Next.js-black?logo=next.js"/>
<img src="https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white"/>
</div>

### 🛠 Tools

<div>
<img src="https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=white"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white"/>
<img src="https://img.shields.io/badge/Framer_Motion-black?logo=framer&logoColor=white"/>
<img src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB"/>
</div>

<br/>

## 🤔 기술적 이슈와 해결 과정

- **Framer Motion 반응형 디자인**

  - 공식 문서([motion.dev](https://motion.dev))를 참고하여 애니메이션과 반응형 디자인을 구현하였습니다.

- **TypeScript 타입 관리**

  - 공통 타입을 정의하여 재사용성을 높였고, `Params` 등 라우터 관련 타입도 명확하게 설정하였습니다.

- **Navigation Bar 검색 기능**

  - 수업에서 진행한 Todo 프로젝트에서의 `localStorage` 적용을 참고하여 검색 기능 구현에 활용하였습니다.

- **Firebase 및 컴포넌트 분리**
  - 구글링 및 참고자료를 통해 Firebase 사용법을 익혔고, 기능별·타입별 컴포넌트 분리를 진행하였습니다.

<br/>

## 👨‍👩‍👧 프로젝트 팀원

|  이름  |                 GitHub                  |
| :----: | :-------------------------------------: |
| 박준용 |   [Ori0li](https://github.com/Ori0li)   |
| 이광녕 |   [GN-Lee](https://github.com/GN-Lee)   |
| 김수임 |  [KImSuim](https://github.com/KImSuim)  |
| 유가영 | [asom0160](https://github.com/asom0160) |

---
