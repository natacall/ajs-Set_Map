import ErrorRepository from '../map';

test('class "ErrorRepository" exists', () => {
  expect(new ErrorRepository()).toBeDefined();
});

const errorRepo = new ErrorRepository();

test('class "ErrorRepository" has the "errors" property with Map object', () => {
  expect(errorRepo.errors).toBeDefined();
  expect(errorRepo.errors instanceof Map).toBeTruthy();
});

errorRepo.errors.set(1, 'Описание ошибки с кодом 1');

test('class "ErrorRepository" has a working "translate" method', () => {
  expect(typeof errorRepo.translate).toBe('function');

  let output = errorRepo.translate(1);

  expect(output).toBe('Описание ошибки с кодом 1');

  output = errorRepo.translate(2);

  expect(output).toBe('Unknown error');
});
