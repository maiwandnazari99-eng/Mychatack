// گرفتن فاصله ذخیره‌شده از فایل قبلی
    const distance = parseFloat(localStorage.getItem('distance')) || 0;
    const start = localStorage.getItem('start');
    const end = localStorage.getItem('end');

    // اگر عکس‌ها را در پوشه assets/images دارید:
    const taxis = [
      { name: "تکسی مدرن ", rate: 20, img: "../../photos/12 (2).PNG" },
      { name: "تکسی معمولی", rate: 15, img: "../../photos/12.PNG" },
      { name: "ریکشا شهری", rate: 10, img: "../../photos/14.jpg" }
    ];

    const container = document.getElementById('taxiContainer');

    taxis.forEach(t => {
      const price = (distance * t.rate).toFixed(0);
      container.innerHTML += `
        <div class="col-md-4">
          <div class="card h-100">
            <img id="taxiImg" src="${t.img}" alt="${t.name}">
            <div class="card-body">
              <h4 class="card-title">${t.name}</h4>
              <p class="card-text btn-outline-custom1"> فاصله: ${distance} کیلومتر</p>
              <p class="price btn-outline-custom1"> قیمت: ${price} افغانی</p>
              <button class="btn btn-outline-custom w-100 btn-select" onclick="selectTaxi('${t.name}', ${price})">
                انتخاب تکسی
              </button>
            </div>
          </div>
        </div>`;
    });

    function selectTaxi(type, price) {
      localStorage.setItem('taxiType', type);
      localStorage.setItem('taxiPrice', price);
      
      window.location.href = 'radar.html';
    }