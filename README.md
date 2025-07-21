# od-api-doc

> 본 프로젝트는 웹에서 가져온 OpenAPI 3 파일을 React 기반 Swagger UI로 변환하여 API 문서를 제공합니다. <br>
> 이는 서비스 코드에 침투적인 Swagger의 단점과 문서를 직접 작성해야 하는 RestDocs의 단점을 모두 해소하는 방식입니다. <br>
> 각 프로젝트는 고유한 URI를 선언할 수 있으며, 프로젝트 내부에서 도메인별로 API 문서를 체계적으로 관리할 수 있습니다. <br>
> OpenAPI 3 파일을 생성하는 방법은 [다음 링크](https://github.com/AkkeSun/restdocs-swagger-sample)를 참고하세요

<br />

## API 문서를 추가하는 방법
1. public 에 프로젝트 이름의 폴더를 생성한 후 해당 폴더에 swagger yaml 파일을 추가합니다.
2. src/component/project 에 프로젝트 이름의 js 파일을 하나 복사한 후 function 이름과 urls 를 변경합니다.
3. 만약 매번 swagger yaml 파일 변경이 번거롭다면 yaml 파일을 각 서버에 배포한 후 src/component/project 에서 배포한 서버 url 을 작성하면 됩니다.
4. src/App.js 의 project 객채에 프로젝트를 등록합니다.

<br />
