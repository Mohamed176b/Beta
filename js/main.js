// Mega menu appers
var serv_button = document.getElementById("go_to_serv");
var mega_menu = document.getElementById("mega_menu");
serv_button.addEventListener("pointerdown", function() {
    mega_menu.classList.add("mega-menu-click");
});
document.addEventListener("pointerup", function(event) {
    if (!mega_menu.contains(event.target) && !serv_button.contains(event.target)) {
        mega_menu.classList.remove("mega-menu-click");
    }
});
