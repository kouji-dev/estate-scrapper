// import * as AWS from "aws-sdk";
// import { DocumentClient } from "aws-sdk/clients/dynamodb";
//
// const dynamoDBClient = (): DocumentClient => {
//     if (process.env.IS_OFFLINE) {
//         return new AWS.DynamoDB.DocumentClient({
//             region: "localhost",
//             endpoint: "http://localhost:5000",
//         });
//     }
//     return new AWS.DynamoDB.DocumentClient();
// };
import {DynamoDBClient} from '@aws-sdk/client-dynamodb';

export const dynamoDBClient = (): DynamoDBClient => {
    if (process.env.IS_OFFLINE) {
        return new DynamoDBClient({
            region: "localhost",
            endpoint: "http://localhost:5000",
        });
    }
    return new DynamoDBClient({
        region: process.env.REGION,
    });
};

// const db = new AWS.DynamoDB({region: process.env.REGION})
//
// db.createTable({
//     TableName: "PropertyType",
//     AttributeDefinitions: [
//         {AttributeName: 'id', AttributeType: 'S'},
//         // {AttributeName: 'lastUpdate', AttributeType: 'N'},
//         // {AttributeName: 'lat', AttributeType: 'N'},
//         // {AttributeName: 'lng', AttributeType: 'N'},
//         // {AttributeName: 'price', AttributeType: 'N'},
//         // {AttributeName: 'typeOfHouse', AttributeType: 'S'},
//         // {AttributeName: 'url', AttributeType: 'S'},
//         // {AttributeName: 'address', AttributeType: 'S'},
//         // {AttributeName: 'livingSpace', AttributeType: 'N'},
//         // {AttributeName: 'measuredArea', AttributeType: 'N'},
//         // {AttributeName: 'groundArea', AttributeType: 'N'},
//         // {AttributeName: 'rooms', AttributeType: 'N'},
//         // {AttributeName: 'bedrooms', AttributeType: 'N'},
//         // {AttributeName: 'antalPlan', AttributeType: 'S'},
//         // {AttributeName: 'rebuilt', AttributeType: 'S'},
//         // {AttributeName: 'yearBuilt', AttributeType: 'N'},
//         // {AttributeName: 'energyLabel', AttributeType: 'S'},
//         // {AttributeName: 'ownershipCostPerMonth', AttributeType: 'S'},
//         // {AttributeName: 'priceSquareMeter', AttributeType: 'S'},
//         // {AttributeName: 'soldInDays', AttributeType: 'N'},
//         // {AttributeName: 'cellar', AttributeType: 'N'},
//         // {AttributeName: 'description', AttributeType: 'S'},
//     ],
//     KeySchema: [
//         {AttributeName: 'id', KeyType: 'HASH'},
//         // {AttributeName: 'typeOfHouse', KeyType: 'RANGE'},
//     ],
//     ProvisionedThroughput: {
//         ReadCapacityUnits: 1,
//         WriteCapacityUnits: 1
//     }
// }, () => console.log(`table created!`))

export default dynamoDBClient;
