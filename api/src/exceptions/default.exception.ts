export default class extends Error {
  public code: number;
  public httpCode: number;
  public messages: Array<string>;

  constructor(code: number, message: string, httpCode?: number, messages?: Array<string>) {
    super(message);

    this.code = code;
    this.httpCode = httpCode;
    this.messages = messages;
  }
};
