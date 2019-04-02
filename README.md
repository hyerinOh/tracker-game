# 여기없대
# Introduction

**여기없대**는 **Facebook 로그인** 기능을 기반으로 **Mapbox**와 **geolocation**을 이용한 간단한 위치 맞추기 게임입니다. 
만약 정답이 사용자가 입력한 값 보다 큰 숫자일 경우 'UP' 팝업이, 작을 경우 'DOWN' 팝업이 띄워지게 되며, 주어진 시간 안에 답을 맞추지 못할 경우 'Time out' 팝업이 띄워지게 됩니다. 상대방이 정답을 맞췄다면 'OO(상대방 이름) found your location' 팝업이 띄워지며, 맞춘 사용자에게는 'You found' 팝업이 띄워지게 됩니다.

![여기없대](https://user-images.githubusercontent.com/38285577/55370436-6b19ee80-5535-11e9-9473-0e956ff83c0b.gif)

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

## Features
- Facebook을 이용한 로그인 구현
- geolocation을 이용하여 현재 위치(위도, 경도) 가져오기
- Mapbox를 이용하여 지도와 마커 생성 기능 구현
- Socket.io를 이용한 실시간 양방향 통신 구현
- Socket.io를 이용한 방 생성과 방 제거 기능 구현

## Client-side
- Babel을 통한 모던 자바스크립트 (ES2015+)
- React를 사용한 컴포넌트 베이스 UI 아키텍처 구현
- Redux 라이브러리를 사용한 state 관리
- 실시간 양방향 소통을 위한 Socket.io client 사용

## Test
- 자바스크립트 테스트 프레임워크 Jest, Enzyme

## Deployment
### Client
- Netlify

## Version control
- client, server의 독립적인 관리를 위한 GIT Repo 구분
- Branch, Pull Request 기반 개발 진행

## Challenges
- Facebook 로그인 기능을 이용하던 중 갑자기 ID가 유효기간이 만료되었다는 에러가 발생하여 하루를 꼬박 이 문제를 해결하는 데에 썼습니다. 결국 Firebase와 Facebook에서 새로운 프로젝트를 생성하여 문제를 해결하였습니다. 하지만 앞으로도 이러한 문제가 발생할 수 있으니 원인을 자세히 알아보려 합니다.
- AWS를 이용하여 서버를 배포하려하면 항상 문제가 발생하여 배포에 대한 깊은 학습을 더 해보려합니다.

## Things to do
처음 기획할 때에는 이것저것 여러가지 기능을 많이 넣고 싶었지만 2주라는 기한을 정하고 시작하였기 때문에 핵심적인 기능만 넣어 완성을 목표로 하였습니다. 아직 많이 미숙한 상태이지만 조금은 게임답게 완성시킨 것 같아 성취감을 얻은 작업이었습니다. 그래도 실제 게임처럼 보이기위해 조금 더 철저한 대응방식과 기능들이 필요하다는 것을 느껴 더 보완해 나갈 예정입니다.
- 두 명의 사용자 중 한 명이 나갔을 때 게임이 끝나도록 대응
- 타이머를 클라이언트 쪽에서 관리하다보면 한쪽이 딜레이가 생길 수 있으므로 서버쪽에서 처리하기
- 사용자가 입력한 값들을 저장하여 히스토리로 보여주기
- 현재는 시간 안에 먼저 맞히는 사람이 이기는 게임이지만, 서로 번갈아 가면서 답을 입력해서 승자 가리는 방법 생각해보기

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

## Sincere Thanks
[Ken Huh](https://github.com/Ken123777) / Vanilla Coding







