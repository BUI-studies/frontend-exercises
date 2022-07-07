/**
 * @constructor Creature
 * @param {string} name
 * @param {string} race
 * @param {number} subscrition - from 0 to 3. Describes the level of access to the information.
 * @param {date} dateCreated
 */
function Creature() {}

/**
 * також додайте метод getID()
 * щоб сгенерувати ID потрібно скласти разом в одну строку:
 * - першу букву імені у нижньому регістрі
 * - останню букву імені у верхньому регістрі
 * - дату створення у мілісекундах поділену на кількість символів у расі та імені
 */
