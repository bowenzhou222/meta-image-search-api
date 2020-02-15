export interface ICustomFailedResponse {
  statusCode: number;
  error: string;
  message: string;
  meta: {
    apiVersion: string;
  };
}
