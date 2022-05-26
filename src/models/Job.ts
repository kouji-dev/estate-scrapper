import {v4} from "uuid";
import {PropertyAPIEnum} from "@api/PropertyAPIEnum";

export type JobStatus = 'submitted' | 'pending' | 'success' | 'fail';
export type JobStep = 'START_CRAWLING' | 'PROCESSING_CHUNK'  | 'END_JOB';

// export type JobType = 'NYBOLIG' | 'DANBOLIG';

export class Job {
    public id: string;
    submittedAt: string;
    step: JobStep;
    type: PropertyAPIEnum;
    status: JobStatus;
    reasonOfFailure: string;
    finishedAt: string;

    constructor(id: string, submittedAt: string, step: JobStep, type: PropertyAPIEnum, status: JobStatus, reasonOfFailure: string, finishedAt: string) {
        this.id = id;
        this.submittedAt = submittedAt;
        this.step = step;
        this.type = type;
        this.status = status;
        this.reasonOfFailure = reasonOfFailure;
        this.finishedAt = finishedAt;
    }

    public static newInstance(jobType: PropertyAPIEnum): Job {
        return new Job(v4(), new Date().toUTCString(), 'START_CRAWLING', jobType, "submitted", "", "");
    }

    public pending(step: JobStep): Job {
        return {
            ...this,
            step,
            status: "pending"
        }
    }

    public error(step: JobStep, error: string,): Job {
        return {
            ...this,
            step,
            reasonOfFailure: error,
            status: "fail",
            finishedAt: new Date().toUTCString()
        }
    }

    public success(): Job {
        return {
            ...this,
            step: "END_JOB",
            status: "success",
            finishedAt: new Date().toUTCString()
        }
    }
}
