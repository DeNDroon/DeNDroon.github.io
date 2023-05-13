var menu_btn = document.getElementById("menu-btn");
var menu_list = document.getElementById("menu-list");

menu_btn.addEventListener("click", () => {
    menu_list.classList.toggle("open-menu");
})