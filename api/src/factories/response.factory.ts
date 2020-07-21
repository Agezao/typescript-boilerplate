/* eslint-disable @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any */

export default class ResponseFactory {
  private static defaultResponseObject(): { code: number, messages?: Array<string> | string } {
    return {
      code: null,
      messages: null,
    };
  }

  public static error(code: number, errorMessages?: Array<string> | string): any {
    const responseObject = this.defaultResponseObject();

    responseObject.code = code;
    responseObject.messages = errorMessages;

    return responseObject;
  }

  public static success(responseData?: any): any {
    return responseData;
  }
};
