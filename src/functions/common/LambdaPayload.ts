export interface LambdaPayload {
    source,
    jobId: string;
    total: number;
    startedAt: Date;
    finishedAt?: Date;
    resume: boolean;
    take: number;
    skip: number;
}
