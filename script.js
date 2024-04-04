function toggleNav() {
    var navIcon = document.getElementById("navIcon");
    var closeBtn = document.querySelector(".closebtn");
    var sideNav = document.getElementById("mySidenav");

    if (navIcon.classList.contains("active")) {
        // Close navigation
        navIcon.classList.remove("active");
        closeBtn.style.display = "none";
        sideNav.style.width = "0";
    } else {
        // Open navigation
        navIcon.classList.add("active");
        closeBtn.style.display = "block";
        sideNav.style.width = "250px";
    }
}
