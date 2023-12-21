const menu = document.createElement("div");
const span = document.createElement("span");
const title = document.createElement("h2");
const list = document.createElement("ul");
menu.classList.add("dropdown");
title.classList.add("icon");
list.classList.add("menu");
title.textContent = "Dropdown ";
span.textContent = "∆";

const arrayList = ["Item 1", "Item 2", "Item 3", "Item 4"];
arrayList.forEach(function (e) {
  let li = document.createElement("li");
  li.textContent = e;
  list.appendChild(li);
});

document.body.appendChild(menu);
menu.appendChild(title);
title.appendChild(span);
menu.appendChild(list);

let dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", (e) => {
  if (dropdown.contains(list)) {
    dropdown.removeChild(list);
    span.style.transform = "rotate(180deg)";
  } else {
    dropdown.appendChild(list);
    span.style.transform = "rotate(0deg)";
  }
});

// dropdown.addEventListener('mouseenter', () => {
//   dropdown.classList.remove('closed');
// });

// dropdown.addEventListener('mouseleave', () => {
//   dropdown.classList.add('closed');
// });
