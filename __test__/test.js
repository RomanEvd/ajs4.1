import sortByHealth, { warriors } from '../index.js';

test('should check that the list of warriors is sorted by health from largest to smallest', () => {
  const sortedList = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(sortByHealth(warriors)).toEqual(sortedList);
});