const backend = [
  {
    number: "01",
    title: "Git & GitHub을 활용한 협업과 버전 관리",
    description: `Git의 기본 개념을 이해하고, .gitignore 설정과 커밋, 푸시 과정을 실습하며 협업에 필요한 버전 관리 능력을 기릅니다.
    또한, Spring Boot 프로젝트를 생성하고 build.gradle을 이용한 의존성 설정을 통해 프로젝트의 초기 구성을 익힙니다.`,
  },
  {
    number: "02",
    title: "HTTP와 웹 API의 개념 및 구현",
    description: `서버와 클라이언트 간의 통신 구조를 이해하고, HTTP 요청/응답 구조와 메서드, 상태 코드의 의미를 학습합니다. 
    Controller에 각 HTTP 메서드를 연결해 API를 구현하고, Postman을 활용해 테스트하며 RESTful API 설계와 검증 과정을 
    실습합니다.`,
  },
  {
    number: "03",
    title: "MVC 패턴과 계층형 아키텍처 설계",
    description: `백엔드 시스템의 핵심 구조인 MVC 패턴과 계층형 아키텍처의 개념을 이해하고 적용합니다. Controller, Service, Repository 
    계층의 역할을 분리하여 비즈니스 로직을 효율적으로 관리하며, 의존성 주입을 통해 유지보수가 쉬운 구조를 설계합니다.`,
  },
  {
    number: "04",
    title: "데이터베이스 연동 및 JPA 활용",
    description: `관계형 데이터베이스의 기본 구조를 이해하고, ERD를 직접 설계하며 JPA를 활용한 CRUD 기능을 구현합니다. 
    트랜잭션과 객체-관계 매핑을 통해 데이터 저장, 조회, 수정, 삭제 과정을 효과적으로 처리하는 방법을 학습합니다.`,
  },
  {
    number: "05",
    title: "AWS를 활용한 서버 배포",
    description: `AWS의 EC2, RDS, S3를 활용하여 서버를 구성하고, 빌드 파일 배포, 데이터베이스 연결, 파일 저장소 구성 등의 과정을 실습합
    니다. 클라우드 환경에서 실제 애플리케이션을 서비스하는 데 필요한 기본적인 인프라 이해와 배포 역량을 기릅니다.`,
  },
  {
    number: "06",
    title: "GitHub Actions를 활용한 자동 배포 (CI/CD)",
    description: `GitHub Actions를 통해 코드 푸시만으로 S3 업로드부터 EC2 배포까지 자동으로 이루어지는 배포 파이프라인을 구축합니다. 
    deploy.yml, appspec,yml, deploy.sh 파일을 연동하고, GitHub Secrets, IAM 권한, CodeDeploy 설정을 통해 안정적인 
    자동 배포 환경을 구현합니다. `,
  },
];

export default backend;
