  document.getElementById('start').textContent = localStorage.getItem('start');
  document.getElementById('end').textContent = localStorage.getItem('end');
  document.getElementById('type').textContent = localStorage.getItem('taxiType');
  document.getElementById('distance').textContent = localStorage.getItem('distance');
  document.getElementById('price').textContent = localStorage.getItem('taxiPrice');
  document.getElementById('taxiImg').src = localStorage.getItem('taxiImg');
  setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("final").style.display = "block";
      }, 3000);