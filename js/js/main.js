// ============================================
// PAGE LOADER
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    const pageLoader = document.getElementById("pageLoader");

    if (pageLoader) {
        pageLoader.classList.add("is-hidden");
    }


    // ========================================
    // CURRENT YEAR
    // ========================================

    const currentYear = new Date().getFullYear();

    document.querySelectorAll("[data-current-year]")
        .forEach(element => {
            element.textContent = currentYear;
        });


    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================

    const navbar = document.querySelector(".navbar-premium");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 40) {
                navbar.classList.add("navbar-scrolled");
            } else {
                navbar.classList.remove("navbar-scrolled");
            }

        });

    }


    // ========================================
    // PROJECT FILTER
    // ========================================

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const projectItems =
        document.querySelectorAll(".project-item");

    if (filterButtons.length && projectItems.length) {

        filterButtons.forEach(button => {

            button.addEventListener("click", () => {

                const filter =
                    button.getAttribute("data-filter");


                // Active button
                filterButtons.forEach(btn => {
                    btn.classList.remove("active");
                });

                button.classList.add("active");


                // Filter projects
                projectItems.forEach(project => {

                    const category =
                        project.getAttribute("data-category");


                    if (
                        filter === "all" ||
                        category === filter
                    ) {

                        project.classList.remove("is-hidden");

                    } else {

                        project.classList.add("is-hidden");

                    }

                });

            });

        });

    }

});