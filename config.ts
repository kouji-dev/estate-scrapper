// // import type {AWS} from '@serverless/typescript';
// import DynamoDBResource from '@resources/dynamodb'
// // import StateMachines from '@resources/state-machines'
//
// import {crawl, endJob} from '@functions';
//
// const serverlessConfiguration = {
//     service: 'crawler',
//     frameworkVersion: '3',
//     plugins: ['serverless-esbuild', 'serverless-dynamodb-local', 'serverless-step-functions', 'serverless-step-functions-offline', 'serverless-offline'],
//     provider: {
//         name: 'aws',
//         runtime: 'nodejs14.x',
//         stage: 'dev',
//         region: 'eu-central-1',
//         apiGateway: {
//             minimumCompressionSize: 1024,
//             shouldStartNameWithService: true,
//         },
//         environment: {
//             AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
//             NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
//             REGION: '${self:custom.region}',
//             STAGE: '${self:custom.stage}',
//             PROPERTY_TABLE: '${self:custom.property_table}',
//             JOB_TABLE: '${self:custom.job_table}',
//         },
//         iamRoleStatements: [
//             {
//                 Effect: 'Allow',
//                 Action: [
//                     'dynamodb:DescribeTable',
//                     'dynamodb:Query',
//                     'dynamodb:Scan',
//                     'dynamodb:GetItem',
//                     'dynamodb:PutItem',
//                     'dynamodb:UpdateItem',
//                     'dynamodb:DeleteItem'
//                 ],
//                 Resource: [
//                     {"Fn::GetAtt": ['PropertyTable', 'Arn']},
//                 ]
//             }
//         ]
//     },
//     // import the function via paths
//     functions: {crawl, endJob},
//     // stepFunctions: {
//     //     stateMachines: StateMachines
//     // },
//     package: {individually: true},
//     custom: {
//         region: '${opt:region, self:provider.region}',
//         stage: '${opt:stage, self:provider.stage}',
//         table_throughputs: {
//             prod: 10,
//             default: 10,
//         },
//         table_throughput: '${self:custom.table_throughputs.${self:custom.stage}, self:custom.table_throughputs.default}',
//         esbuild: {
//             bundle: true,
//             minify: false,
//             sourcemap: true,
//             exclude: ['aws-sdk'],
//             target: 'node14',
//             define: {'require.resolve': undefined},
//             platform: 'node',
//             concurrency: 10,
//         },
//         dynamodb: {
//             start: {
//                 port: 5000,
//                 inMemory: true,
//                 heapInitial: '200m',
//                 heapMax: '1g',
//                 migrate: true,
//                 seed: true,
//                 convertEmptyValues: true,
//             },
//             stages: "dev"
//         },
//         property_table: "PropertyTable",
//         job_table: "JobTable",
//     },
//     resources: {
//         Resources: DynamoDBResource
//     }
// };
//
// module.exports = serverlessConfiguration;
