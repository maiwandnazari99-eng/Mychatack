 document.getElementById("driverForm").addEventListener("submit", function(e) {
            e.preventDefault();
            // بعد از تایید فرم به صفحه دیگر برویم
            window.location.href = "driver_success.html";
        });