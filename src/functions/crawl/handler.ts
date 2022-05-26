import type {ValidatedEventAPIGatewayProxyEvent} from '@libs/api-gateway';
import {formatJSONResponse} from '@libs/api-gateway';
import {middyfy} from '@libs/lambda';
import {Property, PropertyResponse} from "@models/Property";
import {getPropertyAPIEnum, PropertyAPIFactory} from "@api";
import {JobServiceInstance, PropertyServiceInstance} from "@services";
import {Job} from "@models/Job";
import {getPageSize} from "@api/PropertyAPIEnum";

const handler: ValidatedEventAPIGatewayProxyEvent<any> = async (event) => {
    console.log(event);
    const {
        body: {
            source,
            startedAt,
            skip = 0,
            resume = true
        },
        body
    } = event;

    let total = body?.total,
        jobId = body?.jobId,
        job = null,
        take = body?.take;

    //find or create job
    if (jobId) job = await JobServiceInstance.findById(jobId);
    else {
        job = await JobServiceInstance.createOrReplace(Job.newInstance(source))
        jobId = job?.id;
    }

    try {
        const type = getPropertyAPIEnum(source);
        const api = PropertyAPIFactory.getInstance(type);

        if(!total) total = await api.getTotalProperties();
        if(!take) take = getPageSize(type);

        console.log({
            job,
            take,
            skip,
            total,
        });

        const propertyResponseChunk: PropertyResponse[] = await api.getChunk(skip, take);
        const mappedPropertyResponseChunk: Property[] = propertyResponseChunk.map((propertyResponse) => propertyResponse.getProperty());
        for (const e of mappedPropertyResponseChunk) {
            await PropertyServiceInstance.createOrReplace(e);
        }
    } catch (e) {
        await JobServiceInstance.createOrReplace(job?.error("PROCESSING_CHUNK", e.message));
        return formatJSONResponse({
            source,
            total,
            startedAt,
            finishedAt: new Date(),
            take,
            skip,
            resume: false,
            jobId
        })
    }

    await JobServiceInstance.createOrReplace(job.pending("PROCESSING_CHUNK"));

    return formatJSONResponse({
        source,
        jobId,
        total,
        startedAt,
        take,
        skip: take + skip,
        resume: total > (take + skip) && resume
    });

};

export const main = middyfy(handler);
