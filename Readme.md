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
    - 기본적으로 라우팅 기능을 한다고 보면 될것 같고.. 대문자 폴더나 파일이 들어있을 경우  
    자동으로 해당 경로가 라우팅 됨. 별개로 api 폴더 내부에는 각각 api를 선언하여 사용 할 수 있고  
    이경우엔 /api/파일명 으로 요청하고 export default로 handler 선언 해주면 api 사용이 가능할듯.  
    [참고링크 : [NEXT.js] 넥스트 JS를 배워보자 4편 - API](https://mingeesuh.tistory.com/entry/NEXTjs-%EB%84%A5%EC%8A%A4%ED%8A%B8-JS%EB%A5%BC-%EB%B0%B0%EC%9B%8C%EB%B3%B4%EC%9E%90-4%ED%8E%B8-API-Routes)
2. /pages/index.js 내부의 `<Head>`태그는 선언이 되어 있지 않고 `/next/head`로 임포트 되고 있는데,  
    - next내 기능중 하나로 /next/head로 임포트 후 사용시 내부의 title, meta 등이 페이지 타이틀로  
    렌더링됨, Header 에서 사용 시 전체적인 사이트의 기본 SEO 설정을 지정 할 수 있고 이후
    각 페이지별 별도의 SEO설정이 필요할 경우 페이지 내부에 `<Head>`로 선언할 경우
    후에 들어간 설정이 적용 되니 참고.
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