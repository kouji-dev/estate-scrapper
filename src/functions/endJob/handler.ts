import type {ValidatedEventAPIGatewayProxyEvent} from '@libs/api-gateway';
import {formatJSONResponse} from '@libs/api-gateway';
import {middyfy} from '@libs/lambda';
import {JobServiceInstance} from "@services";
import {LambdaPayload} from "@functions/common/LambdaPayload";

const handler: ValidatedEventAPIGatewayProxyEvent<any> = async (event) => {
    const {
        body: {
            total,
            source,
            startedAt,
            take,
            skip,
            jobId
        }
    } = event;

    const job = await JobServiceInstance.findById(jobId);

    await JobServiceInstance.createOrReplace(job.success());

    return formatJSONResponse<LambdaPayload>({
        jobId: job.id,
        source,
        total: total,
        startedAt,
        finishedAt: new Date(),
        resume: false,
        take,
        skip
    });
};

export const main = middyfy(handler);
