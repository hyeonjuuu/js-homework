

/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const navigation = getNode('nav');

const visualImage = getNode('img');

const nickName = getNode('.nickName');

const bgColor = getNode('body');



function handleClick(event) {
  
  
  const target = event.target.closest('li');
  const thumb = event.target.closest('img');
  
  if(!target || !thumb) return;
  
  
  const list = getNodes('nav li');
  // target의 index 넘버
  const index = attr(target, 'data-index');
  
  list.forEach(li => {
    removeClass(li, 'is-active')
  });
  
  addClass(target, 'is-active');
  
  // 비주얼 이미지 변경
  visualImage.src = attr(thumb, 'src', `./../assets/${data.name}`.src);
  // 비주얼 이미지 alt 값 변경
  visualImage.alt = attr(thumb, 'alt', `./${data.alt}`.alt);

  // 닉네임 변경
  nickName.textContent = data[index-1].name;

  // 컬러값 변수 지정
  const colorA = data[index - 1].color[0];
  const colorB = data[index - 1].color[1];


  bgColor.style.background = `linear-gradient(to bottom, ${colorA},${colorB})`;


}

/* --------------------------함수 분리------------------------------------- */

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








