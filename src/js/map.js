export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  add(number, string) {
    this.errors.set(number, string);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }

    return this.errors.get(code);
  }
}
