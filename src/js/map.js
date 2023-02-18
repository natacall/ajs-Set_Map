export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(1, 'Описание ошибки с кодом 1');
    this.errors.set(403, 'Forbidden');
    this.errors.set(404, 'Not Found');
    this.errors.set(408, 'Request Timeout');
    this.errors.set(502, 'Bad Gateway');
    this.errors.set(503, 'Service Unavailable');
    this.errors.set(504, 'Gateway Timeout');
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }

    return this.errors.get(code);
  }
}

export const errorRepo = new ErrorRepository();
