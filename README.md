# **원티드 프리온보딩 코스 사전과제**

## Version

```
Node: v17.3.0
Nest: 8.2.1
MySQL: 8.0.28
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm run test
```

## api 명세

**→ http://localhost:3000/api (swagger로 작성)**

## 요구사항

- 1: 채용공고 생성
  - POST → /wanted/post
- 2: 채용공고 수정
  - PUT → /wanted/post/:id
- 3: 채용공고 삭제
  - DELETE → /wanted/post
- 4: 채용공고 조회
  - 4-1: GET → /wanted/post/search
  - 4-2: GET → /wanted/post/search/keyword
    - n: number → 보너스가 n이상인 채용공고 조회(보너스 내림차순)
    - s: string → s가 포함된 채용공고 조회 (id 오름차순)
- 5: 상세 채용공고 조회
  - GET → /wanted/post/search/{id}
- 6: 채용공고에 지원
  - POST → /wanted/post/appliment
