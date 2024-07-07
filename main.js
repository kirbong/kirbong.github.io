function toggleMenu() {
    var navList = document.getElementById("navList");
    if (navList.classList.contains("active")) {
        navList.classList.remove("active");
    } else {
        navList.classList.add("active");
    }
}