const inputs = Array.from(document.querySelectorAll('.otp-input'));
const phoneDisplay = document.getElementById('phoneDisplay');
const verifyBtn = document.getElementById('verifyBtn');
const msg = document.getElementById('msg');

const storedOtp = localStorage.getItem('site_otp_code') || '';
const storedPhone = localStorage.getItem('site_otp_phone') || '-';
phoneDisplay.textContent = storedPhone;

// حرکت خودکار و backspace
inputs.forEach((input, idx)=>{
  input.addEventListener('input', e=>{
    e.target.value = e.target.value.replace(/[^0-9]/g,'');
    if(e.target.value && idx < inputs.length-1) inputs[idx+1].focus();
  });
  input.addEventListener('keydown', e=>{
    if(e.key==='Backspace' && !input.value && idx>0) inputs[idx-1].focus();
  });
});

// فوکس خانه اول
inputs[0].focus();

// تایید کد
verifyBtn.addEventListener('click', ()=>{
  const code = inputs.map(i=>i.value).join('');
  if(code === storedOtp){
    window.location.href='taxi-city.html';
  } else {
    msg.textContent = 'کد اشتباه است.';
  }
});