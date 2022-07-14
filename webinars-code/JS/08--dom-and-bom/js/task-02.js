/**
 *
 * TASK-02
 *
 * Додати функціонал до попередньої задачі.
 *
 * - якщо користувач молодший за 18 років - підсвічувати червоним його імʼя.
 * - якщо користувач старший за 35 років - підсвічувати жовтим його імʼя.
 * - якщо користувач старший за 50 років - підсвічувати зеленим його імʼя.
 */
const checkAge = (age) => {
  if (age < 18) {
    return "darkred";
  } else if (age > 35 && age < 50) {
    return "yellow";
  } else if (age > 50) {
    return "green";
  } else {
    return "#777";
  }
};

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

  profileName.style.color = checkAge(age);
};

fillProfile(
  prompt("Give me the name"),
  prompt("Give me your sex"),
  prompt("Give me the age"),
  prompt("Tell me smth about you"),
  prompt("What are your preferences")
);
