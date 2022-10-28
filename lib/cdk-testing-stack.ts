import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from "aws-cdk-lib/aws-s3"
import * as dynamodb from "aws-cdk-lib/aws-dynamodb"

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, "avatars-bucket", {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const table = new dynamodb.Table(this, "todos-table", {
      partitionKey: {name: "id", type: dynamodb.AttributeType.NUMBER},
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    new cdk.CfnOutput(this, "bucketname", {
      value: bucket.bucketName,
    });
    new cdk.CfnOutput(this, "tableName", {
      value: table.tableName,
    });
  }
}
