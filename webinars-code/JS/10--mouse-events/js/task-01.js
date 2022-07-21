/**
 * TASK-01
 *
 * На сторінці є секція з табами.
 * Потрібно написати функцію, що спрацьовуватиме по кліку на будь яку з вкладок
 * і додаватиме клас "tabs__item--active" до елементу на який натиснули.
 */

const tabsList = document.querySelector(".tabs");

tabsList.onclick = (event) => {
  const clickedBtn = event.target;

  if (clickedBtn.tagName === "LI") {
    const lastActiveBtn = event.currentTarget.querySelector(
      ".tabs__item--active"
    );

    if (lastActiveBtn !== event.target) {
      lastActiveBtn?.classList.remove("tabs__item--active");
    }

    clickedBtn.classList.add("tabs__item--active");
  }
};
