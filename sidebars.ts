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
      label: 'Analytics',
      items: [
        'analytics/athena',
        'analytics/opensearch',
        'analytics/emr',
        'analytics/kinesis-data-streams',
        'analytics/kinesis-data-firehose',
        'analytics/msk',
        'analytics/redshift',
        'analytics/glue',
      ],
    },
    {
      type: 'category',
      label: 'Application Integration',
      items: [
        'application-integration/lake-formation',
        'application-integration/step-functions',
        'application-integration/eventbridge',
        'application-integration/sns',
        'application-integration/sqs',
        'application-integration/appsync',
        'application-integration/swf',
      ],
    },
    {
      type: 'category',
      label: 'Cost Management',
      items: [
        'cost-management/cost-explorer',
        'cost-management/budgets',
        'cost-management/cost-and-usage-report',
        'cost-management/reserved-instance-reporting',
      ],
    },
    {
      type: 'category',
      label: 'Compute',
      items: [
        'compute/ec2',
        'compute/ec2-auto-scaling',
        'compute/batch',
        'compute/elastic-beanstalk',
        'compute/lambda',
        'compute/serverless-application-repository',
        'compute/outposts',
      ],
    },
    {
      type: 'category',
      label: 'Containers',
      items: [
        'containers/ecr',
        'containers/ecs',
        'containers/eks',
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
        'developer-tools/codebuild',
        'developer-tools/codedeploy',
        'developer-tools/xray',
        'developer-tools/workspaces',
      ],
    },
    {
      type: 'category',
      label: 'Front-End',
      items: [
        'front-end/api-gateway',
        'front-end/appsync',
        'front-end/amplify',
      ],
    },
    {
      type: 'category',
      label: 'Internet of Things',
      items: [
        'iot/iot-core',
        'iot/iot-events',
        'iot/iot-greengrass',
        'iot/freertos',
      ],
    },
    {
      type: 'category',
      label: 'Machine Learning',
      items: [
        'machine-learning/sagemaker',
        'machine-learning/polly',
        'machine-learning/transcribe',
        'machine-learning/comprehend',
        'machine-learning/lex',
        'machine-learning/translate',
        'machine-learning/kendra',
        'machine-learning/rekognition',
      ],
    },
    {
      type: 'category',
      label: 'Management and Governance',
      items: [
        'management/cloudwatch',
        'management/cloudformation',
        'management/cloudtrail',
        'management/config',
        'management/license-manager',
        'management/management-console',
        'management/organizations',
        'management/systems-manager',
      ],
    },
    {
      type: 'category',
      label: 'Migration and Transfer',
      items: [
        'migration/dms',
        'migration/datasync',
        'migration/migration-hub',
        'migration/transfer-family',
      ],
    },
    {
      type: 'category',
      label: 'Networking and Content Delivery',
      items: [
        'networking/vpc',
        'networking/cloudfront',
        'networking/route53',
        'networking/direct-connect',
        'networking/privatelink',
        'networking/transit-gateway',
        'networking/elb',
      ],
    },
    {
      type: 'category',
      label: 'Storage',
      items: [
        'storage/s3',
        'storage/ebs',
        'storage/efs',
        'storage/fsx-lustre',
        'storage/fsx-windows',
        'storage/glacier',
        'storage/backup',
        'storage/snowball',
        'storage/storage-gateway',
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
