interface Exception {
  name: string;
  message: string;
  statusCode: number;
}

export class NotFound implements Exception {
  public readonly name = 'NotFoundException';
  public readonly message = 'Sorry, Not found';
  public readonly statusCode = 404;
}
