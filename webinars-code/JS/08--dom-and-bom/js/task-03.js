/**
 *
 * TASK-02
 *
 * Додати функціонал до попередньої задачі.
 *
 * Після того, як користувач увів усі дані, спитати чи не бажає він змінити щось.
 * Якщо користувач бажає змінити якісь дані - спитати що саме він хоче змінити,
 * та в залежності від відповіді перепитати та перезаписати потрібні дані.
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

const fillTheText = (element, value) => (element.textContent = value);

const fillProfile = (name, sex, age, about, preferences) => {
  const profileName = document.querySelector(".profile__name");
  const profileSex = document.getElementById("sex");
  const profileAge = document.getElementById("age");
  const profilePref = document.getElementById("preferences");
  const profileAbout = document.querySelector(".profile__about");

  fillTheText(profileName, name);
  fillTheText(profileSex, sex);
  fillTheText(profileAge, age);
  fillTheText(profilePref, about);
  fillTheText(profileAbout, preferences);

  profileName.style.color = checkAge(age);
};

fillProfile(
  prompt("Give me the name"),
  prompt("Give me your sex"),
  prompt("Give me the age"),
  prompt("Tell me smth about you"),
  prompt("What are your preferences")
);

if (confirm("Wanna change smth?")) {
  const answer = prompt("What do you like tho change?");

  switch (answer) {
    case "name":
      fillTheText(
        document.querySelector(".profile__name"),
        prompt("Give me the new name")
      );
      break;
    case "sex":
      fillTheText(
        document.getElementById("sex"),
        prompt("Give me the new sex")
      );
      break;
    case "age":
      fillTheText(
        document.getElementById("age"),
        prompt("Give me the new age")
      );
      break;
    case "preferences":
      fillTheText(
        document.getElementById("preferences"),
        prompt("Give me the new preferences")
      );
      break;
    case "about":
      fillTheText(
        document.querySelector(".profile__about"),
        prompt("Give me the new about")
      );
      break;
  }
}
