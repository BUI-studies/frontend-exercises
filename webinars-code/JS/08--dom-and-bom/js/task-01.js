/**
 *
 * TASK-01
 *
 * Написати функцію, яка імітує процес заповнення користувачем анкети.
 * Створити відвповідну розмітку у html файлі, для подальшого заповнення.
 *
 * Аргументи:
 *  - name - імʼя
 *  - sex - стать
 *  - age - вік
 *  - about - коротко про себе
 *  - preferences - уподобання. має бути три пункти написані через крапку з комою та пробіл.
 */

const fillProfile = (name, sex, age, about, preferences) => {
  const profileName = document.querySelector(".profile__name");
  const profileSex = document.getElementById("sex");
  const profileAge = document.getElementById("age");
  const profilePref = document.getElementById("preferences");
  const profileAbout = document.querySelector(".profile__about");

  profileName.textContent = name;
  profileSex.textContent = sex;
  profileAge.textContent = age;
  profilePref.textContent = about;
  profileAbout.textContent = preferences;
};

fillProfile(
  prompt("Give me the name"),
  prompt("Give me your sex"),
  prompt("Give me the age"),
  prompt("Tell me smth about you"),
  prompt("What are your preferences")
);
