const phoneInput = document.getElementById('phone');
const sendBtn = document.getElementById('sendBtn');
const code = document.getElementById("code");
const card2 = document.getElementById("card2")
const card1 = document.getElementById("card1");
const btncode = document.getElementById("btncode");

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
  card1.style.display="none";
  card2.style.display="block";
  code.innerHTML=otp;
});
btncode.addEventListener('click',()=>{
  window.location.href='verify.html';
})