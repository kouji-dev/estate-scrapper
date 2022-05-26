import {PutItemCommand} from "@aws-sdk/client-dynamodb";

export interface DynamoDBService<T> {
    tableName: string;
    createOrReplace(input: any): Promise<T>;
    findById(id: string): Promise<T>;
    getPutItemCommand(i: T): PutItemCommand;
}
