# 20171117 Fri.

마크업 할 __논리적 순서__
- `<header>`
    - `<h1>` 로고 
    - `<ul>` 멤버
    - `<form>` 검색폼
- `<nav>`
    - `<ul>` 메인메뉴
- `<main>`
    - `<section>`
    - `<article>` 뉴스 
    - `<div>`
- `<aside>` 배너
- `<footer>`
    - `<address>` 주소

---

마우스, 키보드 대응 이벤트
* focus : li -> a
* 키보드 : focus | blur , focusin | focusout

jQuery 이벤트핸들러
- toggleClass()
- addClass() | removeClass()

vanilaJS, prototype..

`<script>` 위치
1) `<body>` 의 안쪽, 가장 마지막 위치
- 성능면에서 권장
```html
    <script src="./js/jquery.js"></script>
    <script src="./js/menu-tab.js"></script>
  </body>
</html>
```

2) `<head>` 안쪽에 위치
```html
  <head>
      <meta charset="UTF-8">
      <title>웹카페-HTML5, CSS3, 웹접근성</title>
      <link rel="stylesheet" href="css/style.css">
      <script src="./js/jquery.js"></script>
      <script src="./js/menu-tab.js"></script>
  </head>
```

- 숨김콘텐츠 사이트마다 달라 찾아보고 분석해보기
---

- animation
- transform
- transition
- 배경 muli background

Sass - 올드문법, 간결
Scss - 최신문법, CSS와 외관 모습 비슷


mobile first - 우선
desktop

device-width 물리적해상도
width=device-width

div
    h2
    form
    fieldset
        legend
        p
            label
            input


fieldset
    fieldset(연관된 데이터를 그룹핑)
        legend
        p

    fieldset(div)
        legend
        p

button type ="submit"