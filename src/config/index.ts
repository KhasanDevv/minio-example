import dotEnv from 'dotenv';
import { ConfigurationOptions } from './configOptions';

dotEnv.config();

const configurations: ConfigurationOptions = {
  minio: {
    host: process.env.MINIO_HOST || '127.0.0.1',
    port: +process.env.MINIO_PORT! || 9000,
    secure: true,
    accessKey: process.env.MINIO_ACCESS_KEY || '',
    secretKey: process.env.MINIO_SECRET_KEY || '',
    buckets: process.env.MINIO_BUCKETS ? process.env.MINIO_BUCKETS.replace(/\s/g, '').split(',') : [],
    region: process.env.MINIO_REGION || 'us-east-1'
  }
};

export default configurations;
