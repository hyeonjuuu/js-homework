

# 포스터 미션

### 1. 클릭 이벤트 활성화
```js
const navigation = getNode('nav');
const visualImage = getNode('img');

function handleClick(event) {
  
  
  const target = event.target.closest('li');
  const thumb = event.target.closest('img');
  
  if(!target || !thumb) return;

  const list = getNodes('nav li');
    list.forEach(li => {
    removeClass(li, 'is-active')
  });
  
  addClass(target, 'is-active');
}

navigation.addEventListener('click',handleClick);
```

- ```getNode()```함수를 통해 ```nav```와 ```img``` 에 접근하였으며, ```nav```에 이벤트를 적용했습니다.
- target에 closest를 통해 가장 가까운 ```li```, ```img```를 변수에 지정했습니다.
- target,thumb 가 없을때 함수가 실행되지 않도록 ```return```을 주었습니다.
- ```nav```의 모든 ```li``` 클래스를 ```forEach```를 통해 제거하였습니다.
- 클릭 대상인 target에 ```is-active```클래스를 추가했습니다.

### 2. nav 클릭시 배경 색상 변경
```js
const bgColor = getNode('body');
const index = attr(target, 'data-index');

  const colorA = data[index - 1].color[0];
  const colorB = data[index - 1].color[1];


  bgColor.style.background = `linear-gradient(to bottom, ${colorA},${colorB})`;

```

- ```target```의 ```data-index``` 값을 받아 ```index```변수에 값을 담았습니다.
- colorA와 colorB를 각각 ```data```의 ```[index-1]```배열의 컬러의 0번째와 1번째로 지정하였습니다.
- ```bgColor```에 배경 스타일을 템플릿 리터럴에 각각 변수를 담아 색상을 적용하였습니다.

### 3. 이미지 변경
```js
  const thumb = event.target.closest('img');

visualImage.src = attr(thumb, 'src', `./../assets/${data.name}`.src);

visualImage.alt = attr(thumb, 'alt', `./${data.alt}`.alt);
```
- ```visualImage```의 ```src```경로에 ```thumb```의 ```src```값을 템플릿리터럴을 통해 가져와 적용하였습니다.
- ```visualImage```의 ```alt```값을 ```thumb```의 ```alt```값을 템플릿리터럴을 통해 가져와 적용하였습니다.

### 4. 텍스트 변경
```js
const nickName = getNode('.nickName');

nickName.textContent = data[index-1].name;

```
- ```getNode()```를 통해 ```.nickName``` 클래스를 가진 ```h1```에 접근하였으며, 해당 요소의 textContent를 ```data[index-1].name```으로 적용하였습니다.

### 5. 함수 분리
```js

// 1. setBgColor
function setBgColor(node) {
    getNode(node)
    const index = attr(node, 'data-index');
    // 컬러값 변수 지정
    const colorA = data[index - 1].color[0];
    const colorB = data[index - 1].color[1];
  
  
    node.style.background = `linear-gradient(to bottom, ${colorA},${colorB})`;
}

// 2. setImage
function setImage(node) {
  const target = event.target.closest(node);
  
  if(!target) return;
  
  
  const list = getNodes(`${node} li`);
  
  list.forEach(li => {
    removeClass(li, 'is-active')
  });
  
  addClass(target, 'is-active');
}

// 3. setName
function setName(node) {
  const index = attr(target, 'data-index');
  Node.textContent = data[index-1].name;
}

navigation.addEventListener('click',handleClick);

```
- 위의 함수들을 각각 ```setBgColor```, ```setImage```, ```setName``` 함수로 분리하였습니다.