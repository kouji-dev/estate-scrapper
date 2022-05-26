import {BasePropertyApi} from "@framework";
import {DanboligAPIResponse, DanboligPaginatedResponse} from "@models/Danbolig";

export class DanboligAPI extends BasePropertyApi<DanboligAPIResponse> {

    constructor() {
        super('https://danbolig.dk/api/v1/properties/list')
    }

    getChunk(skip: number, take: number): Promise<DanboligAPIResponse[]> {
        return this.client.post<DanboligPaginatedResponse<DanboligAPIResponse>>('', {
            filters: [],
            orderBy: "relevant",
            page: (skip / take) + 1
        })
            .then(r => r.data.results.map((o: any) => new DanboligAPIResponse(o)))
    }

    getTotalProperties(): Promise<number> {
        return this.client.post<DanboligPaginatedResponse<DanboligAPIResponse>>('', {
            filters: [],
            orderBy: "relevant",
            page: 1
        })
            .then((r) => r.data.totalCount)
    }
}
