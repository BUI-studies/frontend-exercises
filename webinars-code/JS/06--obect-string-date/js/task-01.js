/**
 * @constructor Creature
 * @param {string} name
 * @param {string} race
 * @param {number} subscrition - from 0 to 3. Describes the level of access to the information.
 * @param {date} dateCreated
 */
function Creature(name, race, subscrition, dateCreated) {
  this.name = name;
  this.race = race;
  this.subscrition = subscrition;
  this.dateCreated = dateCreated;

  this.getID = function () {
    const firstChar = this.name[0].toLowerCase();
    const lastChat = this.name[this.name.length - 1].toUpperCase();
    const milliseconds = this.dateCreated.getTime();

    this.ID =
      firstChar +
      lastChat +
      milliseconds / (this.name.length + this.race.length);

    return this.ID;
    // return `${firstChar}${lastChat}${
    //   milliseconds / (this.name.length + this.race.length)
    // }`;
  };
}

const newObjectFromConstructor = new Creature("Gogi", "God", "3", new Date());
const ID = newObjectFromConstructor.getID();

console.log(ID, newObjectFromConstructor);
/**
 * також додайте метод getID()
 * щоб сгенерувати ID потрібно скласти разом в одну строку:
 * - першу букву імені у нижньому регістрі
 * - останню букву імені у верхньому регістрі
 * - дату створення у мілісекундах поділену на кількість символів у расі та імені
 */
