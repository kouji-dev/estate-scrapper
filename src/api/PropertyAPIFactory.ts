import {DanboligAPI} from "./danbolig/DanboligAPI";
import {NyboligAPI} from "./nybolig/NyboligAPI";
import {PropertyAPIEnum} from "./PropertyAPIEnum";

export class PropertyAPIFactory {
    static getInstance(type: PropertyAPIEnum) {
        switch (type) {
            case PropertyAPIEnum.DANBOLIG:
                return new DanboligAPI();
            case PropertyAPIEnum.NYBOLIG:
                return new NyboligAPI();
            default:
                throw new Error(`Property API Not Found for type ${type}`)
        }
    }
}
