const sidebar = document.querySelector(".stock_manage");
const menuBtn = document.querySelector(".stock_manage > i");
const SIDEBAR_SHOWING = "side-bar-showing";
const HEADER_UP_BTN = "fa-arrow-circle-up";
const HEADER_DOWN_BTN = "fa-arrow-circle-down";

function handleShowingSidebar() {
  sidebar.classList.toggle(SIDEBAR_SHOWING);
  menuBtn.classList.toggle(HEADER_DOWN_BTN);
  menuBtn.classList.toggle(HEADER_UP_BTN);
}

function handleSidebar() {
  menuBtn.addEventListener("click", handleShowingSidebar);
}

function init() {
  handleSidebar();
}

init();
