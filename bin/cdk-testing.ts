#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkTestingStack } from '../lib/cdk-testing-stack';

const app = new cdk.App();
new CdkTestingStack(app, 'cdk-stack-dev', {
    stackName: "cdk-stack-dev",
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION
    }
});

new CdkTestingStack(app, "cdk-stack-prod", {
    stackName: "cdk-stack-prod",
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION
    }
});
