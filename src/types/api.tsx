export interface ISingleResponse<T> {
  data: T;
  timeStamp: number;
}
export interface IMultileResponse<T> {
  data: T[];
  count:number
  timeStamp: number;
}
export interface IErrorResponse {
  message: string;
  success: boolean;
  timestamp: number;
}

