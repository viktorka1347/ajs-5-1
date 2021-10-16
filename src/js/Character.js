export default class Character {
    constructor(name, type) {
      if (typeof name !== 'string') {
        throw new Error('Нет имени героя');
      }
      if (name.length < 2) {
        throw new Error('Слишком короткое имя героя');
      }
      if (name.length > 10) {
        throw new Error('Слишком длинное имя героя');
      }
      if (['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].indexOf(type) === -1) {
        throw new Error('Несуществующий тип героя');
      }
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = 0;
      this.defence = 0;
    }
  }