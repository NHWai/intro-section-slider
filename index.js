"strict mode";
const arr_List = document.querySelectorAll(".arrow");
const arr_Array = [...arr_List];
const navItemBox = document.querySelectorAll(".nav-item-box");
const navItemBox_Array = [...navItemBox];
const menu_open = document.querySelector(".menu-open");
const menu_close = document.querySelector(".menu-close");
const collapse = document.querySelector(".collapse");

arr_Array.forEach((el, idx) => {
  el.addEventListener("click", () => {
    if (!el.classList.contains("active")) {
      el.classList.add("active");
      navItemBox_Array[idx].classList.add("open");
    } else {
      el.classList.remove("active");
      navItemBox_Array[idx].classList.remove("open");
    }
  });
});

menu_open.addEventListener("click", () => {
  collapse.classList.add("slide");
});

menu_close.addEventListener("click", () => {
  collapse.classList.remove("slide");
});
