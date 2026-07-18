const counterElements = document.querySelectorAll("[data-counter-target]");

const animateCounter = (element) => {
  const target = Number(element.dataset.counterTarget);
  const duration = 1400;
  const startTime = performance.now();

  const updateCounter = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.floor(easedProgress * target);

    element.textContent = target === 100 ? `${currentValue}%` : `${currentValue}+`;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target === 100 ? "100%" : `${target}+`;
    }
  };

  requestAnimationFrame(updateCounter);
};

if ("IntersectionObserver" in window) {
  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.45 }
  );

  counterElements.forEach((counter) => counterObserver.observe(counter));
} else {
  counterElements.forEach(animateCounter);
}

document.querySelectorAll(".navbar-collapse .nav-link, .navbar-collapse .navbar-cta").forEach((link) => {
  link.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse.show");

    if (navbarCollapse && window.bootstrap) {
      window.bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
    }
  });
});

const filterButtons = document.querySelectorAll("[data-filter]");
const projectItems = document.querySelectorAll(".project-item[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      filterButton.classList.toggle("active", filterButton === button);
    });

    projectItems.forEach((item) => {
      const isVisible = selectedFilter === "all" || item.dataset.category === selectedFilter;

      item.classList.toggle("is-hidden", !isVisible);
    });
  });
});
