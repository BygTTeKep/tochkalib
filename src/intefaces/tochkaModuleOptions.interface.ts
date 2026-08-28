export interface TochkaModuleOptions {
  apiKey: string;
  apiSecret: string;
  isGlobal?: boolean;
  sandbox: boolean;
  jwt: string;
}

export interface TochkaModuleAsyncOptions {
  isGlobal?: boolean;
  imports?: any[];
  inject?: any[];
  useFactory: (
    ...args: any[]
  ) => Promise<TochkaModuleOptions> | TochkaModuleOptions;
}
