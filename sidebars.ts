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
        'analytics/opensearch',
        'analytics/emr',
        'analytics/kinesis-data-streams',
        'analytics/kinesis-data-firehose',
        'analytics/msk',
        'analytics/redshift',
        'analytics/glue',
        'analytics/quicksight',
        'analytics/data-exchange',
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
        'cost-management/billing-conductor',
        'cost-management/bills',
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
        'compute/lightsail',
        'compute/ec2-image-builder',
        'compute/app-runner',
      ],
    },
    {
      type: 'category',
      label: 'Containers',
      items: [
        'containers/ecr',
        'containers/ecs',
        'containers/eks',
        'containers/fargate',
        'containers/app-mesh',
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
        'developer-tools/codepipeline',
        'developer-tools/codecommit',
        // 'developer-tools/codestar',
      ],
    },
    {
      type: 'category',
      label: 'Front-End',
      items: [
        'front-end/api-gateway',
        'front-end/appsync',
        'front-end/amplify',
        // 'front-end/device-farm',
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
        'machine-learning/textract',
        'machine-learning/macie',
        'machine-learning/forecast',
        'machine-learning/personalize',
        'machine-learning/lookout-for-metrics',
        'machine-learning/bedrock',
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
        'management/health-dashboard',
        'management/license-manager',
        'management/management-console',
        'management/organizations',
        'management/systems-manager',
        'management/trusted-advisor',
        'management/service-catalog',
        'management/opsworks',
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
        'migration/application-discovery-service',
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
        'networking/global-accelerator',
        'networking/network-firewall',
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
        'storage/glacier-deep-archive',
        'storage/storage-lens',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'security/certificate-manager',
        'security/cloudhsm',
        'security/directory-service',
        'security/firewall-manager',
        'security/guard-duty',
        'security/iam',
        'security/inspector',
        'security/kms',
        'security/secrets-manager',
        'security/security-hub',
        'security/shield',
        'security/waf',
        'security/control-tower',
        'security/detective',
        'security/identity-center',
        'security/access-analyzer',
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
      label: 'Hybrid and Edge',
      items: [
        'hybrid/outposts',
        'hybrid/local-zones',
        'hybrid/wavelength',
      ],
    },
    {
      type: 'category',
      label: 'Artificial Intelligence (Generative)',
      items: [
        'ai/bedrock',
        'ai/amazon-q',
        'ai/claude',
        'ai/titan',
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
