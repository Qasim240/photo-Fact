function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.display === "none" || sidebar.style.display === "") {
        sidebar.style.display = "block";
        setTimeout(() => {
            sidebar.style.transform = "translateX(0)";
        }, 10); // Add a small delay to allow the display change to take effect before the transform
    } else {
        sidebar.style.transform = "translateX(-100%)";
        sidebar.addEventListener('transitionend', () => {
            sidebar.style.display = "none";
        }, {
            once: true
        });
    }
}