const phoneInput = document.getElementById('phone');
const sendBtn = document.getElementById('sendBtn');

function validPhone(v){ return /^07\d{8}$/.test(v); }

phoneInput.addEventListener('input', ()=>{
  phoneInput.value = phoneInput.value.replace(/[^0-9]/g,'');
  sendBtn.disabled = !validPhone(phoneInput.value.trim());
});

sendBtn.addEventListener('click', ()=>{
  const phone = phoneInput.value.trim();
  if(!validPhone(phone)){ alert('شماره معتبر وارد کنید.'); return; }
  const otp = Math.floor(1000 + Math.random()*9000).toString();
  localStorage.setItem('site_otp_code', otp);
  localStorage.setItem('site_otp_phone', phone);
  alert('کد شما: ' + otp);
  window.location.href='verify2.html';
});