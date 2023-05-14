var menu_btn = document.getElementById("menu-btn");
var menu_list = document.getElementById("menu-list");
var opened = false;
menu_btn.addEventListener("click", () => {
    opened = !opened;
    menu_list.classList.toggle("open-menu");
    menu_btn.classList.toggle("open-menu")
})