import { Client as MinioClient } from 'minio';
import { MinioOptions } from '../../config/configOptions';

export class MinioDriver {
  private options: MinioOptions;
  private client: MinioClient;

  constructor({ config }) {
    this.options = config.minio;
  }


  connect = async (): Promise<void> => {
    this.client = new MinioClient({
      endPoint: this.options.host,
      port: this.options.port,
      useSSL: false, 
      secretKey: this.options.secretKey,
      accessKey: this.options.accessKey
    })
  }

  connection(): MinioClient {
    return this.client;
  }
}
