export type MinioOptions = {
  host: string;
  port: number;
  secure: boolean;
  accessKey: string;
  secretKey: string;
  buckets: string[];
  region: string;
};

export type ConfigurationOptions = {
  minio: MinioOptions;
};
