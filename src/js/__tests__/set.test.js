import Character from '../character';
import Team from '../set';

let vasya;

test('class "Character" has the "name" property', () => {
  expect(new Character()).toBeDefined();

  vasya = new Character('vasya');

  expect(vasya.name).toBe('vasya');
});

test('class "Team" exists', () => {
  expect(new Team()).toBeDefined();
});

const team = new Team();

test('class "Team" has the "members" property with Set object', () => {
  expect(team.members).toBeDefined();
  expect(team.members instanceof Set).toBeTruthy();
});

test('class "Team" has working "add" method', () => {
  expect(typeof team.add).toBe('function');

  team.add(vasya);

  expect(team.members).toEqual(new Set([vasya]));

  const error = () => team.add(vasya);

  expect(error).toThrow(`Ошибка. Объект ${vasya} уже добавлен!`);
});

test('class "Team" has working "addAll" method', () => {
  expect(typeof team.addAll).toBe('function');

  const petya = new Character('petya');
  const masha = new Character('masha');

  team.addAll(petya, masha);

  expect(team.members).toEqual(new Set([vasya, petya, masha]));

  const error = () => team.addAll(vasya);

  expect(error).toThrow(`Ошибка. Объект ${vasya} уже добавлен!`);
});

test('class "Team" has working "toArray" method', () => {
  expect(Array.from(team.members)).toEqual(team.toArray());
});
