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
        'getting-started/getting-started',
        'getting-started/contributing',
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
        'application-integration/swf',
      ],
    },
    {
      type: 'category',
      label: 'Artificial Intelligence (Generative)',
      items: [
        'ai/amazon-q',
        'ai/bedrock',
        'ai/amazon-lookout-for-metrics',
        'ai/claude',
        'ai/amazon-titan',
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
        'compute/lightsail',
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
        'hybrid/aws-local-zones',
        'hybrid/aws-wavelength',
        'hybrid/outposts',
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
        'management/aws-opsworks',
        'management/aws-service-catalog',
        'management/cloudformation',
        'management/cloudtrail',
        'management/cloudwatch',
        'management/config',
        'management/health-dashboard',
        'management/license-manager',
        'management/management-console',
        'management/organizations',
        'management/systems-manager',
        'management/trusted-advisor',
      ],
    },
    {
      type: 'category',
      label: 'Migration and Transfer',
      items: [
        'migration/aws-application-discovery-service',
      ],
    },
    {
      type: 'category',
      label: 'Networking and Content Delivery',
      items: [
        'networking/aws-global-accelerator',
        'networking/aws-network-firewall',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'security/aws-control-tower',
        'security/amazon-detective',
        'security/aws-iam-identity-center',
        'security/aws-access-analyzer',
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
        'storage/amazon-s3-glacier-deep-archive',
        'storage/amazon-s3-storage-lens',
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
