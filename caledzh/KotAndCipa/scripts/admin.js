document.addEventListener("DOMContentLoaded", () => {
  // Инициализация
  let currentMainCategory = null;
  let currentSubCategory = null;

  // Элементы главного уровня
  const mainButtons = document.querySelectorAll(".list-main button");
  const staffButton = mainButtons[0];
  const shiftButton = mainButtons[1];
  const staffContent = document.querySelector(".list-staff");
  const shiftContent = document.querySelector(".list-shift");
  const layoffBtn = document.querySelector("#layoff");
  const regBtn = document.querySelector("#reg");
  const ordersBtn = document.querySelector("#orders");
  const choosingBtn = document.querySelector("#choosing");
  const layoffContent = document.querySelector(".layoff");
  const regContent = document.querySelector(".register");
  const ordersContent = document.querySelector(".orders");
  const choosingContent = document.querySelector(".choosing");

  // Функция для скрытия всех контентов
  function hideAllContents() {
    document
      .querySelectorAll(".doingBlock")
      .forEach((block) => (block.style.display = "none"));
    staffContent.style.display = "none";
    shiftContent.style.display = "none";
  }

  // Функция для сброса всех активных классов кнопок
  function resetAllActiveButtons() {
    document
      .querySelectorAll("button")
      .forEach((button) => button.classList.remove("button-active"));
  }

  // Функция для изменения состояния главной категории
  function changeMainCategoryState(newCategory) {
    resetAllActiveButtons();
    hideAllContents();

    switch (newCategory) {
      case "staff":
        staffButton.classList.add("button-active");
        staffContent.style.display = "block";
        break;
      case "shift":
        shiftButton.classList.add("button-active");
        shiftContent.style.display = "block";
        break;
    }

    currentMainCategory = newCategory;
  }

  // Функция для изменения состояния подкатегории
  function changeSubCategoryState(newSubCategory) {
    resetAllActiveButtons();
    hideAllContents();

    switch (newSubCategory) {
      case "layoff":
      case "reg":
        // Активируем основную категорию staff
        staffButton.classList.add("button-active");
        staffContent.style.display = "block";
        break;
      case "orders":
      case "choosing":
      case "manage":
        // Активируем основную категорию shift
        shiftButton.classList.add("button-active");
        shiftContent.style.display = "block";
        break;
    }

    // Активируем подкатегорию
    switch (newSubCategory) {
      case "layoff":
        layoffBtn.classList.add("button-active");
        layoffContent.style.display = "block";
        break;
      case "reg":
        regBtn.classList.add("button-active");
        regContent.style.display = "block";
        break;
      case "orders":
        ordersBtn.classList.add("button-active");
        ordersContent.style.display = "block";
        break;
      case "choosing":
        choosingBtn.classList.add("button-active");
        choosingContent.style.display = "block";
        break;
      case "manage":
        manageBtn.classList.add("button-active");
        manageContent.style.display = "block";
        break;
    }

    currentSubCategory = newSubCategory;
  }

  // Обработчики событий для кнопок главного уровня
  staffButton.addEventListener("click", () => changeMainCategoryState("staff"));
  shiftButton.addEventListener("click", () => changeMainCategoryState("shift"));

  // Обработчики событий для кнопок подкатегорий
  layoffBtn.addEventListener("click", () => changeSubCategoryState("layoff"));
  regBtn.addEventListener("click", () => changeSubCategoryState("reg"));
  ordersBtn.addEventListener("click", () => changeSubCategoryState("orders"));
  choosingBtn.addEventListener("click", () =>
    changeSubCategoryState("choosing")
  );

  // Инициализация начального состояния
  hideAllContents();
  changeMainCategoryState(currentMainCategory);
});
