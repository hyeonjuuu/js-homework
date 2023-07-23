const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@',
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

//   - false면 해당 input에 is--invalid 추가
//  - true면 해당 input에 is--invalid 제거

// ^ 1. email 정규표현식을 사용한 조건처리
const userId = document.querySelector('.user-email-input');

userId.addEventListener('input', function () {
  const value = userId.value;
  const isValidId = emailReg(value);

  if (isValidId) {
    this.classList.remove('is--invalid');
  } else {
    this.classList.add('is--invalid');
  }
});

// ^ 2. pw 정규표현식을 사용한 validation
const userPw = document.querySelector('.user-password-input');

userPw.addEventListener('input', function () {
  const value = userPw.value;
  const isValidPw = pwReg(value);

  if (isValidPw) {
    this.classList.remove('is--invalid');
  } else {
    this.classList.add('is--invalid');
  }
});

// ^ 3. 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
const loginBtn = document.querySelector('.btn-login');
const result = {};

loginBtn.addEventListener('click', function (event) {
  event.preventDefault();

  if (userId.value === user.id) {
    // alert('O');
    result.idMatch = true;
  } else {
    // alert('X');
    result.idMatch = false;
  }

  // ^ 4. 로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교
  if (userPw.value === user.pw) {
    // alert('O');
    result.pwMatch = true;
  } else {
    // alert('X');
    result.pwMatch = false;
  }

  // ^ 5. 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동
  if (result.idMatch && result.pwMatch) {
    location.href = './../welcome.html';
  } else {
    alert('로그인 실패');
  }
});

// 사용자가 이메일을 잘 입력 했는지 확인하는 식 > true, false로
function emailReg(text) {
  const re =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
