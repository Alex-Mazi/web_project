const menuBtn = document.getElementById("menu-btn");
    const sideMenu = document.getElementById("side-menu");
    const closeBtn = document.getElementById("close-menu-btn");

    menuBtn.addEventListener("click", () => {
        sideMenu.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        sideMenu.classList.remove("active");
    });
