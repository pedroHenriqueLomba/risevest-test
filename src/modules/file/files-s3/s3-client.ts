import { S3 } from "aws-sdk";

export const S3Client = new S3({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  s3BucketEndpoint: true,
  endpoint: process.env.AWS_BUCKET_ENDPOINT,
});
