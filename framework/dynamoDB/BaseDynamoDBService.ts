import {DynamoDBService} from "./DynamoDBService";
import {DynamoDBClient, GetItemCommand, PutItemCommand, } from "@aws-sdk/client-dynamodb";
import {unmarshall} from "@aws-sdk/util-dynamodb";

export abstract class BaseDynamoDBService<P extends any> implements DynamoDBService<P> {
    tableName: string;

    protected constructor(
        tableName: string,
        private dc: DynamoDBClient
    ) {
        this.tableName = tableName;
    }

    public async createOrReplace(input: any): Promise<P> {
        const Command = this.getPutItemCommand(input);
        await this.dc.send(Command).then(e => {
            console.log(e);
            return e;
        });

        return input;
    }

    public async findById(id: string): Promise<P> {
        return this.findByPk('id', id);
    }

    private async findByPk(key: string, value: string): Promise<P> {
        const Command = new GetItemCommand({
            TableName: this.tableName,
            Key: {
                [key]: {S: value}
            },
            ConsistentRead: true
        });
        const element = await this.dc.send(Command).then(e => unmarshall(e.Item) as P);

        if(!element) {
            throw new Error(`${this.tableName}:${value} not found`)
        }
        return element;
    }

    abstract getPutItemCommand(input: P): PutItemCommand;

}
