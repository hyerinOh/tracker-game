# 여기없대
# Introduction

**여기없대**는 **Facebook 로그인** 기능을 기반으로 **Mapbox**와 **geolocation**을 이용한 간단한 위치 맞추기 게임입니다.

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