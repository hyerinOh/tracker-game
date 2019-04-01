# 여기없대
# Introduction

**여기없대**는 **Facebook 로그인** 기능을 기반으로 **Mapbox**와 **geolocation**을 이용한 간단한 위치 맞추기 게임입니다. 
만약 정답이 사용자가 입력한 값 보다 큰 숫자일 경우 'UP' 팝업이, 작을 경우 'DOWN' 팝업이 띄워지게 되며, 주어진 시간 안에 답을 맞추지 못할 경우 'Time out' 팝업이 띄워지게 됩니다. 상대방이 정답을 맞췄다면 'OO(상대방 이름) found your location' 팝업이 띄워지며, 맞춘 사용자에게는 'You found' 팝업이 띄워지게 됩니다.

<img width="200" src="https://user-images.githubusercontent.com/38285577/55343236-a7256300-54e5-11e9-9d8b-782bac1fca74.png">

## Requirements
- Facebook 가입이 선행되어야 합니다.
- Chrome Browser를 권장합니다.

## Prerequisites
- Node.js 설치

## Installation

### Client
```
git clone https://github.com/hyerinOh/tracker-game.git
cd tracker-game
npm install
npm start
```

### Server
```
git clone https://github.com/hyerinOh/tracker-game-server.git
cd tracker-game-server
npm install
npm start
```
## Features
- Facebook을 이용한 로그인 구현
- geolocation을 이용하여 현재 위치(위도, 경도) 가져오기
- Mapbox를 이용하여 지도와 마커 생성 기능 구현
- Socket.IO를 이용한 실시간 양방향 통신 구현
- Socket.IO를 이용한 방 생성과 방 제거 기능 구현

## Client-side
- Babel을 통한 모던 자바스크립트 (ES2015+)
- React를 사용한 컴포넌트 베이스 UI 아키텍처 구현
- Redux 라이브러리를 사용한 state 관리
- 실시간 양방향 소통을 위한 Socket.io

## Test
- 자바스크립트 테스트 프레임워크 Jest, Enzyme

## Deployment
### Client
- Netlify

## Version control
- client, server의 독립적인 관리를 위한 GIT Repo 구분
- Branch, Pull Request 기반 개발 진행

## Images
### Sign In Page
<img width="200" src="https://user-images.githubusercontent.com/38285577/55343236-a7256300-54e5-11e9-9d8b-782bac1fca74.png">

### Matching Page
<img width="200" src="https://user-images.githubusercontent.com/38285577/55343644-7bef4380-54e6-11e9-8d46-f08fe20a85d2.png">

### Game Page
<img width="200" src="https://user-images.githubusercontent.com/38285577/55343775-bc4ec180-54e6-11e9-8668-b72a349bf962.png">

- 정답보다 클 경우
<img width="200" src="https://user-images.githubusercontent.com/38285577/55343903-0cc61f00-54e7-11e9-8564-0ec357ffd342.png">

- 정답보다 작을 경우
<img width="200" src="https://user-images.githubusercontent.com/38285577/55344193-bad1c900-54e7-11e9-9358-259cf0b4b79d.png">

- 시간이 초과 되었을 경우
<img width="200" src="https://user-images.githubusercontent.com/38285577/55344239-d3da7a00-54e7-11e9-9971-24ed25e6f06b.png">

- 정답을 맞췄을 경우
<div>
    <img width="200" height="300" src="https://user-images.githubusercontent.com/38285577/55344386-1f8d2380-54e8-11e9-820c-cb9b35154869.png">
    <img width="200" height="300" src="https://user-images.githubusercontent.com/38285577/55344398-2b78e580-54e8-11e9-88f8-40f9ec587094.png">
</div>






