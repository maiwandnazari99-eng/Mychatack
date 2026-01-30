 let map = L.map('map').setView([34.52, 69.18], 13); // کابل پیش‌ فرض
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; Chatack Group'
  }).addTo(map);

  let control, distanceKm = 0;

  document.getElementById('showRoute').addEventListener('click', () => {
    const start = document.getElementById('start').value.trim();
    const end = document.getElementById('end').value.trim();

    if (!start || !end) {
      alert('لطفاً مبدا و مقصد را وارد کنید.');
      return;
    }

    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${start}`)
      .then(r => r.json())
      .then(startData => {
        if (!startData.length) return alert('مبدا پیدا نشد!');
        const s = [startData[0].lat, startData[0].lon];

        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${end}`)
          .then(r => r.json())
          .then(endData => {
            if (!endData.length) return alert('مقصد پیدا نشد!');
            const e = [endData[0].lat, endData[0].lon];

            if (control) map.removeControl(control);
            control = L.Routing.control({
              waypoints: [L.latLng(s[0], s[1]), L.latLng(e[0], e[1])],
              lineOptions: { styles: [{ color: 'blue', weight: 5 }] },
              routeWhileDragging: false,
              addWaypoints: false,
            }).addTo(map);

            control.on('routesfound', function(e) {
              distanceKm = (e.routes[0].summary.totalDistance / 1000).toFixed(2);
              document.getElementById('confirm').disabled = false;
              alert(`فاصله مسیر: ${distanceKm} کیلومتر`);
            });
          });
      });
  });

  document.getElementById('confirm').addEventListener('click', () => {
    localStorage.setItem('distance', distanceKm);
    window.location.href = 'taxi-type.html';
  });