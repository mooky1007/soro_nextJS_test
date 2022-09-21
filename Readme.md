# SORO NEXT JS TEST 저장소

해당 저장소는 next js 업무 전 다양한 테스트 및 테스트 결과 공유를 위한 페이지입니다.  
해당 저장소 클론 후 npm i 이후 작업 진행해주세요.


```
node: 16.16.0v
create-next-app: 12.3.1v
```
*노드 버전이 17.~ 이상일 경우 export 에러가 발생합니다.*  
*nvm 혹은 16.~ 버전으로 설치 후 테스트 권장드립니다.*

next js 사용 개요 : 기존 react로 제작된 프로젝트들의 SEO 설정 이슈로 사용

- - -
### 타임라인

하기에 추가적으로 생기는 이슈 및 대략적인 타임라인을 정리합니다.  

1. 2022.09.21 - 저장소 생성
2. 2022.09.21 - next js 프로젝트 설치

- - -

### NEXT 관련 정보 이슈

하기에는 NEXT 관련하여 학습중 공유하고 싶은 내용을 순서에 맞게 정리하여 추가합니다.

0. npm run dev로 개발서버 실행
    - 이부분은 리액트랑 다르게 확인되는데, next start의 경우 프로덕션 서버를 실행하는데 사용된다고 합니다.  
    [참고링크 : next dev, build, start의 차이](https://maybe-b50.tistory.com/79)
1. pages 폴더의 역할
    - 자동 증산 및 번들링(웹팩 및 바벨 포함)
    - 핫 코드 다시 로드
    - ./pages/의 서버 렌더링 및 인덱싱
    - 정적 파일 serving ./public/이 /에 매핑됩니다(프로젝트 내에 ./public/ 디렉토리를 생성하면).  
2. /pages/index.js 내부의 `<Head>`태그는 선언이 되어 있지 않고 `/next/head`로 임포트 되고 있는데,  
    - 뭔가 자동으로 생성되는듯?.. 시간날때 한번 알아봐야 할것 같음..  
    아마.. DOM 적인 요소는 아니고 SEO 관련 meta에 관여하는듯  
    [참고링크1 : NEXT HEAD에 대하여](https://velog.io/@cyranocoding/NEXT-HEAD-%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC)  
    [참고링크2 : next Vacel - API Ref 정리 페이지](https://nextjs.org/docs/api-reference/next/head)
3. _app.js와 _document.js라는 개념이 있는데 한번 알아봐야 할듯
    - [참고링크 : Next.js 설치와 폴더 구조](https://jobdong7757.tistory.com/153)
4. 기존 라우터와 다른 라우팅 방식
    - 이것도 시간나면 알아봐야함.  
    [참고링크 : [Next.js] 파일 기반 라우팅](https://hyemgu.tistory.com/253)
5. pages 폴더 내에 aboutUs 로 폴더를 만들고 내부에 index.js를 만들었을때 라우팅이 제대로 되지 않았다.
    - 기존 react 컴포넌트와 마찬가지로 폴더명이 대문자여야만 인식하는듯.
- - -

### 폴더구조

2022.09.21 최초 생성 이후 파일구조입니다.  
이후 협의에 따라 폴더트리 변경시 하기 내용 변경 부탁드립니다.

```
📦soro_next_test  
 ┣ 📂layouts  
 ┣ 📂pages  
 ┃ ┣ 📂main  
 ┃ ┣ 📂api  
 ┣ 📂public  
 ┣ 📂styles  
 ```