import {BaseDynamoDBService} from "../../framework/dynamoDB/BaseDynamoDBService";
import {DynamoDBClient, PutItemCommand} from "@aws-sdk/client-dynamodb";
import {Job} from "@models/Job";

export class JobService extends BaseDynamoDBService<Job> {

    constructor(dc: DynamoDBClient) {
        super("JobTable", dc)
    }

    public async findById(id: string): Promise<Job> {
        const {
            submittedAt,
            step,
            type,
            status,
            reasonOfFailure,
            finishedAt
        } = await super.findById(id);

        return new Job(
            id,
            submittedAt,
            step,
            type,
            status,
            reasonOfFailure,
            finishedAt
        )
    }

    getPutItemCommand(
        {
            id,
            submittedAt,
            status,
            reasonOfFailure,
            step,
            type,
            finishedAt
        }: Job): PutItemCommand {
        return new PutItemCommand({
            TableName: this.tableName,
            Item: {
                id: { S: id },
                submittedAt: { S: submittedAt },
                step: { S: step },
                type: { S: type },
                status: { S: status },
                reasonOfFailure: { S: reasonOfFailure },
                finishedAt: { S: finishedAt },
            }
        })
    }
}
