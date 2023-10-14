const floating_1 = document.getElementById("floating_1");
const floating_2 = document.getElementById("floating_2");
const floating_3 = document.getElementById("floating_3");

const floating_mob_1 = document.getElementById("floating_mob_1");
const floating_mob_2 = document.getElementById("floating_mob_2");
const floating_mob_3 = document.getElementById("floating_mob_3");

const btn_1 = document.getElementById("btn_1");
const btn_2 = document.getElementById("btn_2");
const btn_3 = document.getElementById("btn_3");

const btn_mob_1 = document.getElementById("btn_mob_1");
const btn_mob_2 = document.getElementById("btn_mob_2");
const btn_mob_3 = document.getElementById("btn_mob_3");

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll("button[aria-controls]");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      let id = this.getAttribute("aria-controls");
      let content = document.getElementById(id);

      // Toggle hidden class on the answer content
      content.classList.toggle("hidden");

      // Toggle aria-expanded attribute
      let expanded = this.getAttribute("aria-expanded") === "true" || false;
      this.setAttribute("aria-expanded", !expanded);

      // Toggle icons
      let icons = this.querySelectorAll("svg");
      icons.forEach((icon) => {
        icon.classList.toggle("hidden");
      });
    });
  });
});

btn_1.addEventListener("click", () => {
  floating_1.classList.toggle("hidden");
  floating_2.classList.add("hidden");
  floating_3.classList.add("hidden");
});

btn_2.addEventListener("click", () => {
  floating_2.classList.toggle("hidden");
  floating_3.classList.add("hidden");
  floating_1.classList.add("hidden");
});

btn_3.addEventListener("click", () => {
  floating_3.classList.toggle("hidden");
  floating_1.classList.add("hidden");
  floating_2.classList.add("hidden");
});

btn_mob_1.addEventListener("click", () => {
  floating_mob_1.classList.toggle("hidden");
  floating_mob_2.classList.add("hidden");
  floating_mob_3.classList.add("hidden");
});

btn_mob_2.addEventListener("click", () => {
  floating_mob_2.classList.toggle("hidden");
  floating_mob_3.classList.add("hidden");
  floating_mob_1.classList.add("hidden");
});

btn_mob_3.addEventListener("click", () => {
  floating_mob_3.classList.toggle("hidden");
  floating_mob_1.classList.add("hidden");
  floating_mob_2.classList.add("hidden");
});
