export interface HttpAdapter {
  get<T>(utl: string): Promise<T>;
}
