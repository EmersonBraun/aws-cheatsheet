import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/contributing',
        'getting-started/getting-started',
      ],
    },
    {
      type: 'category',
      label: 'Analytics',
      items: [
        'analytics/athena',
        'analytics/data-exchange',
        'analytics/emr',
        'analytics/glue',
        'analytics/kinesis-data-firehose',
        'analytics/kinesis-data-streams',
        'analytics/msk',
        'analytics/opensearch',
        'analytics/quicksight',
        'analytics/redshift',
      ],
    },
    {
      type: 'category',
      label: 'Application Integration',
      items: [
        'application-integration/appsync',
        'application-integration/eventbridge',
        'application-integration/lake-formation',
        'application-integration/sns',
        'application-integration/sqs',
        'application-integration/step-functions',
        'application-integration/swf',
      ],
    },
    {
      type: 'category',
      label: 'Artificial Intelligence (Generative)',
      items: [
        'ai/amazon-q',
        'ai/bedrock',
        'ai/claude',
        'ai/titan',
      ],
    },
    {
      type: 'category',
      label: 'Compute',
      items: [
        'compute/app-runner',
        'compute/batch',
        'compute/ec2',
        'compute/ec2-auto-scaling',
        'compute/ec2-image-builder',
        'compute/elastic-beanstalk',
        'compute/lambda',
        'compute/lightsail',
        'compute/outposts',
        'compute/serverless-application-repository',
      ],
    },
    {
      type: 'category',
      label: 'Containers',
      items: [
        'containers/app-mesh',
        'containers/ecr',
        'containers/ecs',
        'containers/eks',
        'containers/fargate',
      ],
    },
    {
      type: 'category',
      label: 'Cost Management',
      items: [
        'cost-management/billing-conductor',
        'cost-management/bills',
        'cost-management/budgets',
        'cost-management/cost-and-usage-report',
        'cost-management/cost-explorer',
        'cost-management/reserved-instance-reporting',
      ],
    },
    {
      type: 'category',
      label: 'Database',
      items: [
        'database/aurora',
        'database/documentdb',
        'database/dynamodb',
        'database/elasticache',
        'database/keyspaces',
        'database/neptune',
        'database/rds',
      ],
    },
    {
      type: 'category',
      label: 'Developer Tools',
      items: [
        'developer-tools/amplify',
        'developer-tools/apprunner',
        'developer-tools/cloud9',
        'developer-tools/codebuild',
        'developer-tools/codecommit',
        'developer-tools/codedeploy',
        'developer-tools/codepipeline',
        'developer-tools/codestar',
        'developer-tools/workspaces',
        'developer-tools/xray',
      ],
    },
    {
      type: 'category',
      label: 'Front-End',
      items: [
        'front-end/amplify',
        'front-end/api-gateway',
        'front-end/appsync',
        'front-end/device-farm',
      ],
    },
    {
      type: 'category',
      label: 'Hybrid and Edge',
      items: [
        'hybrid/local-zones',
        'hybrid/outposts',
        'hybrid/wavelength',
      ],
    },
    {
      type: 'category',
      label: 'Internet of Things',
      items: [
        'iot/freertos',
        'iot/iot-core',
        'iot/iot-events',
        'iot/iot-greengrass',
      ],
    },
    {
      type: 'category',
      label: 'Machine Learning',
      items: [
        'machine-learning/comprehend',
        'machine-learning/forecast',
        'machine-learning/kendra',
        'machine-learning/lex',
        'machine-learning/macie',
        'machine-learning/personalize',
        'machine-learning/polly',
        'machine-learning/rekognition',
        'machine-learning/sagemaker',
        'machine-learning/textract',
        'machine-learning/transcribe',
        'machine-learning/translate',
      ],
    },
    {
      type: 'category',
      label: 'Management and Governance',
      items: [
        'management/cloudformation',
        'management/cloudtrail',
        'management/cloudwatch',
        'management/config',
        'management/health-dashboard',
        'management/license-manager',
        'management/management-console',
        'management/opsworks',
        'management/organizations',
        'management/service-catalog',
        'management/systems-manager',
        'management/trusted-advisor',
      ],
    },
    {
      type: 'category',
      label: 'Migration and Transfer',
      items: [
        'migration/application-discovery-service',
        'migration/datasync',
        'migration/dms',
        'migration/migration-hub',
        'migration/transfer-family',
      ],
    },
    {
      type: 'category',
      label: 'Networking and Content Delivery',
      items: [
        'networking/cloudfront',
        'networking/direct-connect',
        'networking/elb',
        'networking/global-accelerator',
        'networking/network-firewall',
        'networking/privatelink',
        'networking/route53',
        'networking/transit-gateway',
        'networking/vpc',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'security/access-analyzer',
        'security/certificate-manager',
        'security/cloudhsm',
        'security/control-tower',
        'security/detective',
        'security/directory-service',
        'security/firewall-manager',
        'security/guard-duty',
        'security/iam',
        'security/identity-center',
        'security/inspector',
        'security/kms',
        'security/secrets-manager',
        'security/security-hub',
        'security/shield',
        'security/waf',
      ],
    },
    {
      type: 'category',
      label: 'Serverless',
      items: [
        'serverless/lambda',
        'serverless/step-functions',
      ],
    },
    {
      type: 'category',
      label: 'Storage',
      items: [
        'storage/backup',
        'storage/ebs',
        'storage/efs',
        'storage/fsx-lustre',
        'storage/fsx-windows',
        'storage/glacier',
        'storage/glacier-deep-archive',
        'storage/s3',
        'storage/snowball',
        'storage/storage-gateway',
        'storage/storage-lens',
      ],
    },
  ],


  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
