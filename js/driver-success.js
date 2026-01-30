 document.getElementById('taxiForm').addEventListener('submit', function(e){
      e.preventDefault();

      // ساده‌سازی: اعتبارسنجی فایل‌ها انجام شده و سپس به صفحه موفقیت هدایت می‌کنیم
      // (در پروژه واقعی، باید فایل‌ها به سرور آپلود شوند و پاسخ از سرور گرفته شود)

      // بررسی حداقل یک عکس تاکسی (چک می‌کند مرورگر فایل انتخاب کرده)
      const taxiPhotos = document.querySelector('input[name="taxiPhotos"]').files;
      if(!taxiPhotos || taxiPhotos.length === 0){
        alert('لطفاً حداقل یک عکس از تاکسی انتخاب کنید.');
        return;
      }

    });