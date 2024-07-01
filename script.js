function toggleNav() {
    let sidebar = document.getElementById("mySidebar");
    let main = document.getElementById("main");
    let openBtn = document.querySelector('.openbtn');

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
        openBtn.classList.remove('transform');
    } else {
        sidebar.style.width = "250px";
        main.style.marginLeft = "250px";
        openBtn.classList.add('transform');
    }
}
