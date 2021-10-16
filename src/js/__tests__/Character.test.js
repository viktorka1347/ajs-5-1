import Character from '../Character';

test('Должен создаваться объект класса Character', () => {
  expect(new Character('Вася', 'Bowman')).toBeDefined();
});

test('Должна выбрасываться ошибка при некорректном имени героя', () => {
  expect(() => new Character(56, 'Bowman')).toThrowError('Нет имени героя');
  expect(() => new Character('В', 'Bowman')).toThrowError('Слишком короткое имя героя');
  expect(() => new Character('Васисуалий Лукашев', 'Bowman')).toThrowError('Слишком длинное имя героя');
});

test('Должна выбрасываться ошибка при несуществующем типе героя', () => {
  expect(() => new Character('Вася', 'Killer')).toThrowError('Несуществующий тип героя');
});