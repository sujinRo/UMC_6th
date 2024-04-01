//각 input value
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const age = document.getElementById('age');
const pwd = document.getElementById('pwd');
const rePwd = document.getElementById('rePwd');

//에러 or 성공
const showError = (input, msg) => {
  const formControl = input.parentElement;
  formControl.className = 'showError';
  const small = formControl.querySelector('small');
  small.innerText = msg;
};

const showSuccess = (input, msg) => {
  const formControl = input.parentElement;
  formControl.className = 'showSuccess';
  const small = formControl.querySelector('small');
  small.innerText = msg;
};

//유효성 검사
const isRequired = inputArr => {
  inputArr.forEach(input => {
    if (input.value.trim() == '') {
      if (input == name) {
        showError(input, '이름을 입력해주세요!');
      } else if (input.name == email) {
        showError(input, '이메일을 입력해주세요!');
      } else if (input == age) {
        showError(input, '나이를 입력해주세요!');
      } else if (input.name == pwd) {
        showError(input, '비밀번호를 입력해주세요!');
      }
    } else {
      if (input == name) {
        showSuccess(input, '멋진 이름이네요!');
      } else if (input.name == email) {
        showSuccess(input, '올바른 이메일 형식입니다!');
      } else if (input == age) {
        showSuccess(input, '올바른 나이 형식입니다!');
      } else if (input.name == pwd) {
        showSuccess(input, '올바른 비밀번호 형식입니다!');
      }
    }
  });
};

const isValidEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value)) {
    showSuccess(email, '올바른 이메일 형식입니다!');
  } else {
    showError(email, '올바른 이메일 형식이 아닙니다!');
  }
};

const isValidAge = age => {
  const re = /^[1-9]\d*$/;
  if (age.value >= 19 && re.test(age.value)) {
    showSuccess(age, '올바른 나이 형식입니다!');
  } else {
    if (age.value < 19) {
      showError(age, '19세 이상이어야 합니다!');
    } else showError(age, '올바른 나이 형식이 아닙니다!');
  }
};

const isValidPwd = pwd => {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{4,12}$/;
  if (re.test(pwd.value)) {
    showSuccess(pwd, '올바른 비밀번호입니다!');
  } else {
    showError(pwd, '올바른 비밀번호가 아닙니다!');
  }
};

const checkPwdMatch = (pwd, rePwd) => {
  if (pwd.value !== rePwd.value || pwd.value.trim() == '') {
    showError(rePwd, '비밀번호가 일치하지 않습니다.');
  } else {
    showSuccess(rePwd, '비밀번호가 일치합니다');
  }
};

form.addEventListener('submit', e => {
  e.preventDefault();

  isRequired([name, email, age, pwd]);
  isValidEmail(email);
  isValidAge(age);
  isValidPwd(pwd);
  checkPwdMatch(pwd, rePwd);
});
