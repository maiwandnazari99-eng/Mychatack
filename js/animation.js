const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.3
    }
  );

  document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
  });
  