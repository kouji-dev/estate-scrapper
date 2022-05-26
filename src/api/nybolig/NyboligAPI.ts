import {BasePropertyApi} from "@framework";
import {NyboligAPIResponse, NyboligPaginatedResponse} from "@models/Nybolig";

export class NyboligAPI extends BasePropertyApi<NyboligAPIResponse> {

    constructor() {
        super('https://www.nybolig.dk/Services/PropertySearch/Search')
    }

    getChunk(skip: number, take: number): Promise<NyboligAPIResponse[]> {
        return this.client.post<NyboligPaginatedResponse<NyboligAPIResponse>>('', {
            isRental: false,
            siteName: 'Nybolig',
            IsSignedupNewsletter: false,
            mustBeSold: false,
            mustBeInProgress: false,
            isSale: false,
            isInvestment: false,
            isPublicOffering: false,
            checkRentals: true,
            take,
            skip,
            sort: 0,
        })
            .then(r => r.data.Results.map((o: any) => new NyboligAPIResponse(o)))
    }

    getTotalProperties(): Promise<number> {
        return this.client.post<NyboligPaginatedResponse<NyboligAPIResponse>>('', {
            isRental: false,
            siteName: 'Nybolig',
            IsSignedupNewsletter: false,
            mustBeSold: false,
            mustBeInProgress: false,
            isSale: false,
            isInvestment: false,
            isPublicOffering: false,
            checkRentals: true,
            take: 10,
            skip: 0,
            sort: 0,
        })
            .then((r) => r.data.TotalAmountOfResults)
    }
}
