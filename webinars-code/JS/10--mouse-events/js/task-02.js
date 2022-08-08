/**
 * TASK-02
 *
 * Доповніть функціонал попередньої задачі.
 *
 * Тепер за замовчуванням треба ховати усі елементі всередині tabs-content, окрім першого.
 * По кліку на будь яку з вкладок має відображатись контент прив'язаний до неї.
 */
const tabsList = document.querySelector(".tabs");

tabsList.onclick = (event) => {
  const clickedBtn = event.target;

  if (clickedBtn.tagName === "LI") {
    const lastActiveBtn = event.currentTarget.querySelector(
      ".tabs__item--active"
    );
    const tabName = clickedBtn.dataset.tab;
    const tabContentItem = document.querySelector(
      `.tabs-content__item[data-tab="${tabName}"]`
    );
    const lastActiveTabContent = document.querySelector(
      ".tabs-content__item--active"
    );

    if (lastActiveBtn !== clickedBtn) {
      lastActiveBtn?.classList.remove("tabs__item--active");
    }

    if (lastActiveTabContent !== tabContentItem) {
      lastActiveTabContent?.classList.remove("tabs-content__item--active");
    }

    tabContentItem.classList.add("tabs-content__item--active");
    clickedBtn.classList.add("tabs__item--active");
  }
};
